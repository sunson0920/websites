/* Binance Agent — GPU nebula
 *
 * A domain-warped fBm field rendered on the GPU, standing in for the CSS blur
 * blobs. Raw WebGL1, no library, one fullscreen triangle. If anything here is
 * unavailable the script bails and the CSS .aurora/.nebula layers stay visible,
 * so the page never depends on it.
 *
 * Cost control: renders to a downscaled buffer (the field is soft, so nobody can
 * tell) and stops entirely when the tab is hidden or the field is scrolled past.
 */
(() => {
  'use strict';

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.getElementById('glcanvas');
  if (!canvas) return;

  const gl = canvas.getContext('webgl', {
    alpha: false, antialias: false, depth: false, stencil: false,
    powerPreference: 'low-power', failIfMajorPerformanceCaveat: false,
  });
  if (!gl) return;                       // no WebGL — CSS fallback stays

  const VERT = `
    attribute vec2 a;
    void main(){ gl_Position = vec4(a, 0.0, 1.0); }
  `;

  const FRAG = `
    precision mediump float;
    uniform vec2  u_res;
    uniform float u_time;
    uniform vec2  u_mouse;
    uniform float u_scroll;

    float hash(vec2 p){
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float noise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);          // smoothstep
      return mix(mix(hash(i),               hash(i + vec2(1.0, 0.0)), u.x),
                 mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }

    float fbm(vec2 p){
      float v = 0.0, a = 0.5;
      for (int i = 0; i < 5; i++){
        v += a * noise(p);
        p = p * 2.02 + vec2(1.7, 9.2);
        a *= 0.5;
      }
      return v;
    }

    void main(){
      vec2 uv = gl_FragCoord.xy / u_res;
      vec2 p  = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y * 1.55;

      float t = u_time * 0.021;
      p.y += u_scroll * 0.55;                     // the field drifts as you descend

      // two rounds of domain warping — what gives it depth rather than blobs
      vec2 q = vec2(fbm(p + vec2(0.0, t)),
                    fbm(p + vec2(5.2, 1.3) - t * 0.6));
      vec2 r = vec2(fbm(p + 3.4 * q + vec2(1.7, 9.2) + t * 0.19),
                    fbm(p + 3.4 * q + vec2(8.3, 2.8) - t * 0.14));
      float f = fbm(p + 3.2 * r);

      vec3 deep   = vec3(0.035, 0.032, 0.024);
      vec3 violet = vec3(0.720, 0.460, 0.060);
      vec3 magent = vec3(1.000, 0.820, 0.280);

      vec3 col = mix(deep, violet, smoothstep(0.22, 0.92, f));
      col = mix(col, magent, smoothstep(0.60, 1.15, f + r.x * 0.45) * 0.75);

      // filaments: the ridged edges of the warp field, kept faint
      float fil = smoothstep(0.42, 0.52, abs(r.y - 0.5) + f * 0.25);
      col += violet * (1.0 - fil) * 0.10;

      // a soft light that follows the pointer
      vec2 m = (u_mouse - 0.5 * u_res) / u_res.y * 1.55;
      col += violet * exp(-length(p - m) * 2.4) * 0.30;

      col *= 1.0 - dot(uv - 0.5, uv - 0.5) * 1.15;      // vignette
      col *= 0.62;                                       // keep type readable

      // dither: 8-bit gradients in near-black band badly without it
      col += (hash(gl_FragCoord.xy) - 0.5) * 0.012;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  const compile = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn('nebula shader:', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  };

  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return;

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.warn('nebula link:', gl.getProgramInfoLog(prog));
    return;
  }
  gl.useProgram(prog);

  // one oversized triangle covers the viewport with no seam down the middle
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(prog, 'u_res');
  const uTime = gl.getUniformLocation(prog, 'u_time');
  const uMouse = gl.getUniformLocation(prog, 'u_mouse');
  const uScroll = gl.getUniformLocation(prog, 'u_scroll');

  const coarse = matchMedia('(pointer: coarse)').matches;
  const SCALE = coarse ? 0.5 : 0.7;         // soft field, nobody sees the resolution
  let w = 0, h = 0, raf = null, t0 = performance.now();
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

  const resize = () => {
    w = Math.max(1, Math.floor(innerWidth * SCALE));
    h = Math.max(1, Math.floor(innerHeight * SCALE));
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    gl.viewport(0, 0, w, h);
    mouse.x = mouse.tx = w * 0.5;
    mouse.y = mouse.ty = h * 0.5;
  };

  addEventListener('pointermove', (e) => {
    mouse.tx = e.clientX * SCALE;
    mouse.ty = (innerHeight - e.clientY) * SCALE;   // GL origin is bottom-left
  }, { passive: true });

  let rt;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 200); }, { passive: true });

  const frame = () => {
    mouse.x += (mouse.tx - mouse.x) * 0.06;         // trails the cursor
    mouse.y += (mouse.ty - mouse.y) * 0.06;

    const max = document.documentElement.scrollHeight - innerHeight;
    gl.uniform2f(uRes, w, h);
    gl.uniform1f(uTime, (performance.now() - t0) / 1000);
    gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.uniform1f(uScroll, max > 0 ? scrollY / max : 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    raf = requestAnimationFrame(frame);
  };

  const start = () => { if (!raf) { t0 = performance.now() - 1000; raf = requestAnimationFrame(frame); } };
  const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = null; } };
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

  resize();
  start();
  document.documentElement.classList.add('has-gl');   // CSS retires the fallback layers
})();
