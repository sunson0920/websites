const C = window.CONFIG || {};
const $ = (s,r=document)=>r.querySelector(s), $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const NAMES = ['COMMAND PROC','TENSOR CORES','HBM STACK','NVLINK','L2 CACHE','RT CORES','I/O PADS'];
const SHORT = ['CMD','TENSOR','HBM','NVLINK','L2$','RT','I/O'];

// ---- toast ----
let tt; function toast(html){ const t=$('#toast'); t.innerHTML=html; t.classList.add('on'); clearTimeout(tt); tt=setTimeout(()=>t.classList.remove('on'),2600); }

// ---- links ----
const setLink=(sel,url,msg)=>$$(sel).forEach(a=>{ if(url){ a.href=url; } else { a.removeAttribute('href'); a.addEventListener('click',e=>{e.preventDefault();toast(msg);}); } });
setLink('.js-buy', C.buy, '<b>Buy link coming soon.</b>');
setLink('.js-chart', C.chart, '<b>Chart coming soon.</b>');
setLink('.js-x', C.x, '<b>X coming soon.</b>');
setLink('.js-pump', C.pumpfun, '<b>pump.fun page coming soon.</b>');
$$('.js-tg').forEach(b=>b.addEventListener('click',()=>{ if(C.telegram) open(C.telegram,'_blank','noopener'); else toast('<b>Telegram coming soon.</b> Follow <b>@jenseneth_x</b> on X for the link.'); }));
$$('.ca-val,.ca-mini').forEach(e=>e.textContent=C.ca||'TBA');

async function copyCA(btn){
  const ca=C.ca; if(!ca) return toast('<b>CA TBA.</b>');
  let ok=false; try{ await navigator.clipboard.writeText(ca); ok=true; }catch(e){ const ta=document.createElement('textarea'); ta.value=ca; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select(); try{ok=document.execCommand('copy');}catch(_){} ta.remove(); }
  toast(ok?'<b>CA copied.</b> '+ca.slice(0,6)+'…'+ca.slice(-6):'Copy failed — long-press the address to copy.');
  if(btn){ btn.classList.add('ok'); const l=btn.querySelector('.lbl'); const o=l?l.textContent:btn.textContent; if(l) l.textContent='COPIED'; else btn.textContent='COPIED'; setTimeout(()=>{btn.classList.remove('ok'); if(l) l.textContent=o; else btn.textContent=o;},1600); }
  burst(btn, '✓');
}
$$('[data-copy]').forEach(b=>b.addEventListener('click',()=>copyCA(b)));

function burst(el, ch){ if(!el) return; const r=el.getBoundingClientRect(); for(let i=0;i<10;i++){ const s=document.createElement('span'); s.className='burst'; s.textContent=ch; const a=Math.random()*Math.PI*2, d=40+Math.random()*80; s.style.left=(r.left+r.width/2)+'px'; s.style.top=(r.top+r.height/2)+'px'; s.style.setProperty('--bx',Math.cos(a)*d+'px'); s.style.setProperty('--by',Math.sin(a)*d+'px'); s.style.setProperty('--br',(Math.random()*120-60)+'deg'); document.body.appendChild(s); setTimeout(()=>s.remove(),1000); } }

// ---- boot ----
const lines=['> POWER ON · VDD 0.75V','> loading die floorplan …','> 7 blocks found: CMD TENSOR HBM NVLINK L2 RT I/O','> jacket.leather = TRUE','> CA '+(C.ca||'TBA').slice(0,10)+'…','> entering silicon ▶'];
let li=0; const bl=$('#bootLog'), bb=$('#bootBar');
const bootT=setInterval(()=>{ if(li<lines.length){ bl.textContent+=lines[li++]+'\n'; bb.style.width=(li/lines.length*100)+'%'; } },170);
const endBoot=()=>{ clearInterval(bootT); document.body.classList.remove('booting'); enter(0); };

// ---- blocks / warp ----
const blks=$$('.blk'); let cur=0, busy=false, world=null;
function enter(i){ const b=blks[i]; b.classList.remove('in'); void b.offsetWidth; b.classList.add('in'); }
function mark(i){ $$('.tile').forEach(t=>t.classList.toggle('on', +t.dataset.go===i)); $('#hBlock').textContent=SHORT[i]; $('#dmName').textContent=NAMES[i]; }
mark(0);
const wipe=$('#wipe'); for(let r=0;r<6;r++) for(let c=0;c<8;c++){ const t=document.createElement('i'); t.style.setProperty('--d',((r+c)*22)+'ms'); wipe.appendChild(t); }
function go(i){
  i=(i+blks.length)%blks.length; if(i===cur||busy) return; busy=true;
  const old=blks[cur]; document.body.classList.add('warping'); mark(i); wipe.classList.add('cover');
  if(world) world.warpTo(i, ()=>{});
  setTimeout(()=>{ old.classList.remove('active','in','out'); const b=blks[i]; b.scrollTop=0; b.classList.add('active'); enter(i); cur=i; if(i===4) countUp(b);
    wipe.classList.remove('cover'); setTimeout(()=>{ document.body.classList.remove('warping'); busy=false; },420);
    history.replaceState(null,'','#'+SHORT[i].replace('$','').replace('/','').toLowerCase()); },640);
}
$$('.tile').forEach(t=>t.addEventListener('click',()=>go(+t.dataset.go)));
$('#nextBtn').addEventListener('click',()=>go(cur+1));
addEventListener('keydown',e=>{ if(['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)){ e.preventDefault(); go(cur+1);} if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){ e.preventDefault(); go(cur-1);} });
// wheel: scroll inside block first, warp at the edges
let wAcc=0, wT=0;
addEventListener('wheel',e=>{ const b=blks[cur]; const atBot=b.scrollTop+b.clientHeight>=b.scrollHeight-2, atTop=b.scrollTop<=0;
  if((e.deltaY>0&&!atBot)||(e.deltaY<0&&!atTop)) return; wAcc+=e.deltaY; clearTimeout(wT); wT=setTimeout(()=>wAcc=0,220);
  if(Math.abs(wAcc)>120){ go(cur+(wAcc>0?1:-1)); wAcc=0; } },{passive:true});
// touch swipe: horizontal anywhere, vertical only at block edges
let ts=null; addEventListener('touchstart',e=>{ const t=e.touches[0]; const b=blks[cur]; ts={x:t.clientX,y:t.clientY,top:b.scrollTop<=0,bot:b.scrollTop+b.clientHeight>=b.scrollHeight-2,el:e.target}; },{passive:true});
addEventListener('touchend',e=>{ if(!ts) return; const t=e.changedTouches[0]; const dx=t.clientX-ts.x, dy=t.clientY-ts.y;
  if(ts.el.closest && (ts.el.closest('.stack')||ts.el.closest('.rt-stage'))) { ts=null; return; }
  if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.4) go(cur+(dx<0?1:-1));
  else if(Math.abs(dy)>90&&Math.abs(dy)>Math.abs(dx)){ if(dy<0&&ts.bot) go(cur+1); else if(dy>0&&ts.top) go(cur-1); }
  ts=null; },{passive:true});

// ---- HUD readouts ----
setInterval(()=>{ const s=world?world.speed:0; $('#hBw').textContent=(3.35+s*998+Math.random()*.3).toFixed(1); $('#hClk').textContent=(2.61+s*1.4+Math.random()*.05).toFixed(2); },120);

// ---- cursor glow + 3D tilt ----
addEventListener('pointermove',e=>{ document.documentElement.style.setProperty('--mx',e.clientX+'px'); document.documentElement.style.setProperty('--my',e.clientY+'px');
  $$('.blk.active .tilt').forEach(el=>{ const r=el.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5; el.style.transform=`perspective(900px) rotateY(${Math.max(-1,Math.min(1,x))*10}deg) rotateX(${-Math.max(-1,Math.min(1,y))*8}deg)`; }); },{passive:true});
// gyro tilt on phones
addEventListener('deviceorientation',e=>{ if(e.gamma==null) return; $$('.blk.active .tilt').forEach(el=>el.style.transform=`perspective(900px) rotateY(${e.gamma/6}deg) rotateX(${(e.beta-45)/-8}deg)`); });

// ---- tensor: jacket flops ----
let flops=0; $('#jacketBtn').addEventListener('click',e=>{ flops+=Math.floor(1e3+Math.random()*9e3); $('#flops').textContent=flops.toLocaleString()+' PF'; burst(e.currentTarget, ['⚡','$','▲','◆'][flops%4]); if(flops>40000&&!$('#jacketBtn').dataset.t){ $('#jacketBtn').dataset.t=1; toast('<b>Jacket overclocked.</b> The more you tap, the more you save.'); } });

// ---- REEL gallery: circular mask reveals ----
const slides=$$('.slide'); let top=0; const thumbs=$('#thumbs');
slides.forEach((sl,i)=>{ const t=document.createElement('button'); t.className='thumb'+(i?'':' on'); t.setAttribute('aria-label','Show image '+(i+1)); t.innerHTML='<img src="'+sl.querySelector('img').getAttribute('src')+'" alt="">'; t.addEventListener('click',e=>{ e.stopPropagation(); show(i,e); }); thumbs.appendChild(t); });
let zc=10;
function show(i,e){ if(i===top) return; const sl=slides[i]; const r=$('#reel').getBoundingClientRect(); const x=e&&e.clientX?((e.clientX-r.left)/r.width*100):(30+Math.random()*40), y=e&&e.clientY?((e.clientY-r.top)/r.height*100):(30+Math.random()*40);
  sl.style.setProperty('--cx',x+'%'); sl.style.setProperty('--cy',y+'%'); sl.style.transition='none'; sl.classList.remove('on'); void sl.offsetWidth; sl.style.transition=''; sl.style.zIndex=++zc; sl.classList.add('on');
  const prev=slides[top]; setTimeout(()=>{ if(prev!==slides[top]) prev.classList.remove('on'); },1150);
  top=i; $$('.thumb').forEach((t,k)=>t.classList.toggle('on',k===i)); const n=$('#layerN'); n.textContent=String(i+1).padStart(2,'0'); n.style.animation='none'; void n.offsetWidth; n.style.animation=''; $('#layerName').textContent=sl.querySelector('figcaption b').textContent;
  const f=$('#fanBtn'); f.classList.add('fast'); setTimeout(()=>f.classList.remove('fast'),600); }
$('#fanBtn').addEventListener('click',e=>show((top+1)%slides.length,e));
$('#reel').addEventListener('click',e=>show((top+1)%slides.length,e));
let sx=null; $('#reel').addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true}); $('#reel').addEventListener('touchend',e=>{ if(sx==null)return; const dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>40) show((top+(dx<0?1:-1)+slides.length)%slides.length); sx=null; },{passive:true});
setInterval(()=>{ if(cur===2 && !document.hidden) show((top+1)%slides.length); },5000);

// ---- RTX compare slider ----
const cmp=$('#cmp'), rb=$('#rtxBtn'); let drag=false;
const setP=(p)=>{ p=Math.max(0,Math.min(100,p)); cmp.style.setProperty('--p',p+'%'); const on=100-p; $('#rays').textContent=Math.round(1+on*40.95); $('#shine').textContent=Math.round(12+on*9.88)+'%'; $('#drip').textContent=on>66?'MAX':on>33?'MID':'LOW'; };
const fromEv=e=>{ const r=cmp.getBoundingClientRect(); cmp.style.setProperty('--sx',((e.clientX-r.left)/r.width*100)+'%'); cmp.style.setProperty('--sy',((e.clientY-r.top)/r.height*100)+'%'); return (e.clientX-r.left)/r.width*100; };
cmp.addEventListener('pointerdown',e=>{ drag=true; cmp.classList.remove('anim'); cmp.setPointerCapture(e.pointerId); setP(fromEv(e)); });
cmp.addEventListener('pointermove',e=>{ const p=fromEv(e); if(drag) setP(p); });
addEventListener('pointerup',()=>drag=false);
let swing=0; setInterval(()=>{ if(cur!==5||drag||rb.dataset.u) return; swing+=.04; cmp.classList.remove('anim'); setP(50+Math.sin(swing)*30); },50);
rb.addEventListener('click',()=>{ rb.dataset.u=1; const on=rb.getAttribute('aria-checked')!=='true'; rb.setAttribute('aria-checked',on); cmp.classList.add('anim'); setP(on?0:100); if(on){ burst(rb,'✦'); toast('<b>RTX ON.</b> Leather now ray-traced in real time.'); } });

// ---- count-up ----
function countUp(root){ $$('.count',root).forEach(el=>{ const n=+el.dataset.n, t0=performance.now(); const step=t=>{ const k=Math.min(1,(t-t0)/1400), e=1-Math.pow(1-k,3); el.textContent=Math.round(n*e).toLocaleString('en-US'); if(k<1) requestAnimationFrame(step); }; requestAnimationFrame(step); }); }

// ---- depth parallax ----
addEventListener('pointermove',e=>{ const x=e.clientX/innerWidth-.5, y=e.clientY/innerHeight-.5; $$('.blk.active .depth').forEach(el=>{ const d=+el.dataset.d||10; el.style.translate=`${-x*d}px ${-y*d}px`; }); },{passive:true});

// ---- start 3D ----
import('./world.js').then(m=>{ try{ world=m.createWorld($('#gl')); }catch(e){ console.warn('WebGL unavailable', e); } }).catch(e=>console.warn(e)).finally(()=>setTimeout(endBoot,1150));
