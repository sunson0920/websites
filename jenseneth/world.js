// Live 3D GPU-die city. Seven districts = seven chip blocks. Camera warps between them.
import * as THREE from './vendor/three.module.js';

export function createWorld(canvas){
  const mobile = Math.min(innerWidth, innerHeight) < 600;
  const renderer = new THREE.WebGLRenderer({canvas, antialias:!mobile, powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 1.75));
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x010605);
  scene.fog = new THREE.FogExp2(0x02110b, 0.0075);
  const camera = new THREE.PerspectiveCamera(55, innerWidth/innerHeight, 0.1, 900);

  scene.add(new THREE.HemisphereLight(0x8cff9a, 0x05140c, 0.9));
  const key = new THREE.DirectionalLight(0xc8ffd8, 1.4); key.position.set(40,80,30); scene.add(key);

  // ---- substrate with circuit traces ----
  const S = 400;
  const tc = document.createElement('canvas'); tc.width = tc.height = 2048;
  const g = tc.getContext('2d');
  g.fillStyle = '#030d08'; g.fillRect(0,0,2048,2048);
  g.strokeStyle = 'rgba(118,255,58,0.10)'; g.lineWidth = 1;
  for(let i=0;i<=2048;i+=32){ g.beginPath(); g.moveTo(i,0); g.lineTo(i,2048); g.stroke(); g.beginPath(); g.moveTo(0,i); g.lineTo(2048,i); g.stroke(); }
  const rnd = mulberry(7);
  for(let k=0;k<900;k++){
    let x = Math.floor(rnd()*64)*32, y = Math.floor(rnd()*64)*32;
    g.strokeStyle = rnd()<.15 ? 'rgba(232,182,74,0.55)' : `rgba(${rnd()<.5?'118,255,58':'25,230,193'},${0.25+rnd()*0.45})`;
    g.lineWidth = rnd()<.2 ? 4 : 2;
    g.beginPath(); g.moveTo(x,y);
    for(let s=0;s<4;s++){ if(rnd()<.5) x += (rnd()<.5?-1:1)*32*(1+Math.floor(rnd()*6)); else y += (rnd()<.5?-1:1)*32*(1+Math.floor(rnd()*6)); g.lineTo(x,y); }
    g.stroke();
    g.fillStyle = g.strokeStyle; g.fillRect(x-4,y-4,8,8);
  }
  const subTex = new THREE.CanvasTexture(tc); subTex.colorSpace = THREE.SRGBColorSpace; subTex.anisotropy = 8;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(S,S), new THREE.MeshBasicMaterial({map:subTex}));
  ground.rotation.x = -Math.PI/2; scene.add(ground);
  // die border (seal ring)
  const ring = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(S*0.92,0.5,S*0.92)), new THREE.LineBasicMaterial({color:0xe8b64a}));
  ring.position.y = .3; scene.add(ring);

  // ---- districts ----
  const D = [
    {name:'CMD',  p:[0,0],     off:[0,26,46]},
    {name:'TENSOR',p:[-80,-70], off:[-30,30,40]},
    {name:'HBM',  p:[95,-75],  off:[34,22,40]},
    {name:'NVLINK',p:[95,55],  off:[0,30,48]},
    {name:'L2',   p:[-10,95],  off:[-36,34,30]},
    {name:'RT',   p:[-100,50], off:[30,18,36]},
    {name:'IO',   p:[0,-150],  off:[0,40,60]},
  ].map(d=>({...d, v:new THREE.Vector3(d.p[0],0,d.p[1])}));

  // window texture for buildings
  const wc = document.createElement('canvas'); wc.width = 64; wc.height = 128;
  const w = wc.getContext('2d'); w.fillStyle='#07140d'; w.fillRect(0,0,64,128);
  for(let y=4;y<128;y+=8) for(let x=4;x<64;x+=10){ const r=Math.random(); w.fillStyle = r<.35?'#76ff3a':r<.45?'#19e6c1':r<.5?'#e8b64a':'#0d2a17'; w.fillRect(x,y,6,4); }
  const winTex = new THREE.CanvasTexture(wc); winTex.colorSpace = THREE.SRGBColorSpace; winTex.magFilter = THREE.NearestFilter;

  // filler city (instanced)
  const N = mobile ? 1400 : 2600;
  const boxG = new THREE.BoxGeometry(1,1,1); boxG.translate(0,.5,0);
  const city = new THREE.InstancedMesh(boxG, new THREE.MeshBasicMaterial({map:winTex}), N);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), ps = new THREE.Vector3(), col = new THREE.Color();
  let n=0, guard=0;
  while(n<N && guard++<N*6){
    const x=(rnd()-.5)*S*.88, z=(rnd()-.5)*S*.88;
    if(D.some(d=>Math.hypot(d.v.x-x,d.v.z-z)<26)) continue;
    if(Math.abs(x)%40<5 || Math.abs(z)%40<5) continue; // avenues
    const hgt = 1 + Math.pow(rnd(),3)*28 + (Math.hypot(x,z)<120 ? rnd()*6 : 0);
    const wdt = 2+rnd()*4, dpt = 2+rnd()*4;
    ps.set(x,0,z); sc.set(wdt,hgt,dpt); m4.compose(ps,q,sc); city.setMatrixAt(n,m4);
    col.setHSL(0.33+rnd()*0.12, .6, .35+rnd()*0.5); city.setColorAt(n,col); n++;
  }
  city.count = n; scene.add(city);

  const group = {};
  const glowMat = (c)=>new THREE.MeshBasicMaterial({color:c});
  // CMD: central spire + orbit rings of light (rings orbit horizontally, not a coin)
  {
    const gC = new THREE.Group(); gC.position.copy(D[0].v);
    const spire = new THREE.Mesh(new THREE.BoxGeometry(6,30,6).translate(0,15,0), new THREE.MeshStandardMaterial({color:0x0b1f14, metalness:.9, roughness:.25, emissive:0x0a3a14}));
    gC.add(spire);
    const rings=[]; for(let i=0;i<4;i++){ const r=new THREE.Mesh(new THREE.TorusGeometry(9+i*4,.18,8,96), glowMat(i%2?0x19e6c1:0x76ff3a)); r.rotation.x=Math.PI/2; r.position.y=6+i*6; gC.add(r); rings.push(r); }
    for(let i=0;i<8;i++){ const a=i/8*Math.PI*2; const t=new THREE.Mesh(new THREE.BoxGeometry(3,10+((i*7)%5)*3,3).translate(0,5,0), new THREE.MeshBasicMaterial({map:winTex})); t.position.set(Math.cos(a)*15,0,Math.sin(a)*15); gC.add(t); }
    scene.add(gC); group.cmd={gC,rings};
  }
  // TENSOR: 16x16 grid of cubes doing a matmul wave
  {
    const k=16, cnt=k*k; const im = new THREE.InstancedMesh(boxG, new THREE.MeshBasicMaterial({color:0xffffff}), cnt);
    for(let i=0;i<cnt;i++){ im.setColorAt(i, col.setHSL(.3,.9,.5)); }
    im.position.copy(D[1].v); scene.add(im); group.tensor={im,k};
  }
  // HBM: 4 stacks of 8 slabs that breathe apart
  {
    const gH = new THREE.Group(); gH.position.copy(D[2].v); const slabs=[];
    const mat = new THREE.MeshStandardMaterial({color:0x14231a, metalness:.7, roughness:.3, emissive:0x0b3312});
    const edge = new THREE.LineBasicMaterial({color:0x76ff3a});
    for(let s=0;s<4;s++) for(let l=0;l<8;l++){
      const geo=new THREE.BoxGeometry(7,1,10); const m=new THREE.Mesh(geo,mat); const e=new THREE.LineSegments(new THREE.EdgesGeometry(geo),edge); m.add(e);
      m.position.set((s-1.5)*10,0,0); m.userData={l,s}; gH.add(m); slabs.push(m);
    }
    scene.add(gH); group.hbm={slabs};
  }
  // NVLINK: long rails with light packets
  const packets = { pos:null, data:[] };
  {
    const gN = new THREE.Group(); gN.position.copy(D[3].v);
    const railMat = glowMat(0x19e6c1);
    for(let r=0;r<10;r++){ const rail=new THREE.Mesh(new THREE.BoxGeometry(60,.3,.3), railMat); rail.position.set(0,1+r%5*2.2,(r<5?-4:4)); gN.add(rail); }
    const PC = 160; const geo = new THREE.BufferGeometry(); const arr = new Float32Array(PC*3); geo.setAttribute('position', new THREE.BufferAttribute(arr,3));
    for(let i=0;i<PC;i++) packets.data.push({r:i%10, x:Math.random()*60-30, v:20+Math.random()*40});
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({color:0xb6ff5c, size:1.1, transparent:true, blending:THREE.AdditiveBlending, depthWrite:false}));
    gN.add(pts); packets.pos=arr; packets.geo=geo;
    for(let i=0;i<2;i++){ const b=new THREE.Mesh(new THREE.BoxGeometry(8,14,8).translate(0,7,0), new THREE.MeshBasicMaterial({map:winTex})); b.position.set(i?34:-34,0,0); gN.add(b); }
    scene.add(gN);
  }
  // L2: flat flickering cell array
  {
    const k=24, cnt=k*k; const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1.6,.6,1.6), new THREE.MeshBasicMaterial(), cnt);
    let i=0; for(let x=0;x<k;x++) for(let z=0;z<k;z++){ ps.set((x-k/2)*2,.3,(z-k/2)*2); m4.compose(ps,q,sc.set(1,1,1)); im.setMatrixAt(i,m4); im.setColorAt(i,col.setHSL(.35,.8,.08)); i++; }
    im.position.copy(D[4].v); scene.add(im); group.l2={im,cnt};
  }
  // RT: chrome spheres + orbiting lights
  {
    const gR = new THREE.Group(); gR.position.copy(D[5].v);
    const chrome = new THREE.MeshStandardMaterial({color:0xffffff, metalness:1, roughness:.08});
    const spheres=[]; for(let i=0;i<7;i++){ const s=new THREE.Mesh(new THREE.SphereGeometry(2+(i%3),32,20), chrome); s.position.set(Math.cos(i)*12, 3+(i%3)*2, Math.sin(i*1.7)*10); gR.add(s); spheres.push(s); }
    const lights=[0x76ff3a,0x3ad8ff,0x8a5cff,0xe8b64a].map((c,i)=>{ const L=new THREE.PointLight(c, 600, 60, 1.6); const bulb=new THREE.Mesh(new THREE.SphereGeometry(.5,12,8), glowMat(c)); L.add(bulb); gR.add(L); return L; });
    const floor = new THREE.Mesh(new THREE.CircleGeometry(22,64), new THREE.MeshStandardMaterial({color:0x050505, metalness:.9, roughness:.2})); floor.rotation.x=-Math.PI/2; floor.position.y=.05; gR.add(floor);
    scene.add(gR); group.rt={spheres,lights};
  }
  // IO: pad ring pulses
  {
    const gI = new THREE.Group(); gI.position.copy(D[6].v); const pads=[];
    for(let i=0;i<14;i++){ const p=new THREE.Mesh(new THREE.BoxGeometry(4,.6,6), new THREE.MeshStandardMaterial({color:0xe8b64a, metalness:1, roughness:.3, emissive:0x3a2a05})); p.position.set((i-6.5)*6,.3,0); gI.add(p); pads.push(p); }
    const pulses=[]; for(let i=0;i<3;i++){ const r=new THREE.Mesh(new THREE.RingGeometry(1,1.4,64), new THREE.MeshBasicMaterial({color:0x76ff3a, transparent:true, side:THREE.DoubleSide, blending:THREE.AdditiveBlending, depthWrite:false})); r.rotation.x=-Math.PI/2; r.position.y=.8; gI.add(r); pulses.push(r); }
    scene.add(gI); group.io={pads,pulses};
  }

  // holographic billboards of Jensen art above districts
  const loader = new THREE.TextureLoader();
  const boards=[];
  [['assets/keynote.webp',1,[0,34,0],[14,18.7]],['assets/datacenter.webp',4,[0,26,0],[12,16]],['assets/nightmarket.webp',6,[0,30,-6],[13,17.3]],['assets/diecity.webp',0,[0,44,0],[14,24.9]]].forEach(([src,di,o,sz])=>{
    const tex = loader.load(src); tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.MeshBasicMaterial({map:tex, transparent:true, opacity:.88, side:THREE.DoubleSide, depthWrite:false});
    const b = new THREE.Mesh(new THREE.PlaneGeometry(sz[0],sz[1]), mat);
    b.position.copy(D[di].v).add(new THREE.Vector3(...o)); scene.add(b);
    const frame = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.PlaneGeometry(sz[0]+.8,sz[1]+.8)), new THREE.LineBasicMaterial({color:0x76ff3a})); b.add(frame);
    boards.push({b,base:b.position.y,ph:Math.random()*6});
  });

  // global data pulses on avenues
  const AP = mobile ? 300 : 700; const ag = new THREE.BufferGeometry(); const aa = new Float32Array(AP*3); ag.setAttribute('position', new THREE.BufferAttribute(aa,3));
  const ad=[]; for(let i=0;i<AP;i++){ const axis=rnd()<.5; const lane=(Math.floor((rnd()-.5)*9))*40+ (rnd()<.5?-1.5:1.5); ad.push({axis,lane,t:(rnd()-.5)*S*.9,v:(rnd()<.5?-1:1)*(15+rnd()*50)}); }
  scene.add(new THREE.Points(ag, new THREE.PointsMaterial({color:0x9dff6a, size:.9, transparent:true, opacity:.95, blending:THREE.AdditiveBlending, depthWrite:false})));

  // floating dust motes
  const DM=600; const dg=new THREE.BufferGeometry(); const da=new Float32Array(DM*3); for(let i=0;i<DM;i++){ da[i*3]=(rnd()-.5)*S; da[i*3+1]=rnd()*60; da[i*3+2]=(rnd()-.5)*S; } dg.setAttribute('position',new THREE.BufferAttribute(da,3));
  scene.add(new THREE.Points(dg,new THREE.PointsMaterial({color:0x19e6c1,size:.35,transparent:true,opacity:.6,depthWrite:false})));

  // warp streaks (attached to camera)
  const SN = 500; const sg = new THREE.BufferGeometry(); const sa = new Float32Array(SN*6); const sd=[];
  for(let i=0;i<SN;i++){ const a=rnd()*Math.PI*2, r=2+rnd()*14; sd.push({x:Math.cos(a)*r,y:Math.sin(a)*r,z:-rnd()*120}); }
  sg.setAttribute('position', new THREE.BufferAttribute(sa,3));
  const streakMat = new THREE.LineBasicMaterial({color:0xc8ffb0, transparent:true, opacity:0, blending:THREE.AdditiveBlending, depthWrite:false});
  const streaks = new THREE.LineSegments(sg, streakMat); streaks.frustumCulled=false; camera.add(streaks); scene.add(camera);

  // ---- camera / warp ----
  const camPos = new THREE.Vector3(), look = new THREE.Vector3();
  const from = {p:new THREE.Vector3(), l:new THREE.Vector3()}, to = {p:new THREE.Vector3(), l:new THREE.Vector3()};
  let cur=0, warpT=1, warpDur=1.6, onArrive=null;
  const camFor = (i,out)=>{ const d=D[i]; out.p.copy(d.v).add(new THREE.Vector3(...d.off)); out.l.copy(d.v).add(new THREE.Vector3(0,8,0)); if(mobile){ out.p.y+=10; out.p.add(new THREE.Vector3(...d.off).multiplyScalar(.25)); } return out; };
  camFor(0,to); camPos.set(0,160,220); look.copy(to.l); from.p.copy(camPos); from.l.copy(look); warpT=0; warpDur=2.6;
  const ptr={x:0,y:0};
  addEventListener('pointermove',e=>{ptr.x=e.clientX/innerWidth-.5; ptr.y=e.clientY/innerHeight-.5;},{passive:true});

  function warpTo(i, cb){ from.p.copy(camPos); from.l.copy(look); camFor(i,to); cur=i; warpT=0; warpDur=1.5; onArrive=cb; }
  const ease = t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;

  addEventListener('resize',()=>{ camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight,false); });

  const clock = new THREE.Clock(); let speed=0; let el=0;
  function frame(){
    const rdt=clock.getDelta(); const dt=Math.min(rdt,.05); el+=dt;
    // warp
    let wv=0;
    if(warpT<1){ warpT=Math.min(1,warpT+Math.min(rdt,.25)/warpDur); const e=ease(warpT); wv=Math.sin(Math.PI*warpT);
      camPos.lerpVectors(from.p,to.p,e); camPos.y += wv*55; look.lerpVectors(from.l,to.l,Math.min(1,e*1.15));
      if(warpT>=1 && onArrive){ const f=onArrive; onArrive=null; f(); } }
    else { camPos.copy(to.p); camPos.x += Math.sin(el*.25)*3; camPos.y += Math.sin(el*.4)*1.2; }
    speed += (wv-speed)*.2;
    camera.fov = 55 + wv*38; camera.updateProjectionMatrix();
    camera.position.copy(camPos); camera.position.x += ptr.x*4; camera.position.y -= ptr.y*3;
    camera.lookAt(look); camera.rotation.z += Math.sin(el*.3)*.01 + wv*.06;
    streakMat.opacity = wv*.9;
    for(let i=0;i<SN;i++){ const s=sd[i]; s.z += dt*(20+wv*400); if(s.z>0) s.z-=120; const L=1+wv*22; sa.set([s.x,s.y,s.z, s.x,s.y,s.z-L], i*6); }
    sg.attributes.position.needsUpdate=true;

    // districts
    group.cmd.rings.forEach((r,i)=>{ r.rotation.z = el*(.3+i*.15)*(i%2?-1:1); r.position.y = 6+i*6+Math.sin(el*1.5+i)*1.2; });
    { const {im,k}=group.tensor; let i=0; for(let x=0;x<k;x++) for(let z=0;z<k;z++){ const h=.6+ (Math.sin(el*3 - (x+z)*.45)*.5+.5)*7*(.4+.6*Math.abs(Math.sin(x*.7+z*.3))); ps.set((x-k/2)*2.4,0,(z-k/2)*2.4); m4.compose(ps,q,sc.set(1.8,h,1.8)); im.setMatrixAt(i,m4); im.setColorAt(i,col.setHSL(.28+h*.012,.95,.18+h*.05)); i++; } im.instanceMatrix.needsUpdate=true; im.instanceColor.needsUpdate=true; }
    group.hbm.slabs.forEach(m=>{ const {l,s}=m.userData; m.position.y = 1+l*(1.3+ (Math.sin(el*1.3+s)*.5+.5)*1.4); m.rotation.y = Math.sin(el*.6+l*.2+s)*.12; });
    packets.data.forEach((p,i)=>{ p.x+=p.v*dt; if(p.x>30)p.x=-30; packets.pos.set([p.x, 1+p.r%5*2.2, (p.r<5?-4:4)], i*3); }); packets.geo.attributes.position.needsUpdate=true;
    { const {im,cnt}=group.l2; for(let j=0;j<24;j++){ const i=(Math.random()*cnt)|0; im.setColorAt(i, col.setHSL(Math.random()<.2?.12:.33, .95, Math.random()*.6)); } im.instanceColor.needsUpdate=true; }
    group.rt.lights.forEach((L,i)=>{ const a=el*(.6+i*.2)+i*1.6; L.position.set(Math.cos(a)*16, 6+Math.sin(el+i)*3, Math.sin(a)*14); });
    group.rt.spheres.forEach((s,i)=>{ s.position.y = 3+(i%3)*2+Math.sin(el*1.2+i)*1.2; });
    group.io.pulses.forEach((r,i)=>{ const t=((el*.5+i/3)%1); r.scale.setScalar(1+t*40); r.material.opacity=(1-t)*.8; });
    group.io.pads.forEach((p,i)=>{ p.material.emissiveIntensity = 1+Math.sin(el*4-i*.5)*1; });
    boards.forEach(o=>{ o.b.position.y=o.base+Math.sin(el+o.ph)*1.2; o.b.lookAt(camera.position.x, o.b.position.y, camera.position.z); });
    for(let i=0;i<AP;i++){ const a=ad[i]; a.t+=a.v*dt*(1+wv*3); const lim=S*.45; if(a.t>lim)a.t=-lim; if(a.t<-lim)a.t=lim; if(a.axis) aa.set([a.t,.4,a.lane],i*3); else aa.set([a.lane,.4,a.t],i*3); }
    ag.attributes.position.needsUpdate=true;
    renderer.render(scene,camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  return { warpTo, get speed(){return speed}, get cur(){return cur}, count:D.length };
}

function mulberry(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
