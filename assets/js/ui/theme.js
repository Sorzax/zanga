import { THEMES } from '../../../data/catalog.js';

function applyTheme(key,mode){
  const t=key==="home"?THEMES.home:THEMES[key][mode],b=document.body.style;
  const set=(k,v)=>b.setProperty(k,v);
  set("--pitch",t.pitch);
  set("--pitch-2",t.p2);
  set("--pitch-3",t.p3);
  set("--deep",t.deep);
  set("--chalk",t.chalk);
  set("--muted",t.muted);
  set("--line",t.chalk+(mode==="zanga"?"3d":"2e"));
  set("--score",t.score);
  set("--red",t.red);
  set("--good",t.good);
  set("--score-ink","#10131a");
  set("--stripe",key!=="home"&&mode==="zanga"?`repeating-linear-gradient(90deg,${t.pitch} 0 80px,${t.p2} 80px 160px)`:`radial-gradient(1100px 520px at 85% -10%,${t.score}1f,transparent 60%),radial-gradient(900px 520px at 0% 110%,${t.score}12,transparent 60%),${t.pitch}`);
  document.documentElement.style.background=t.pitch;
}

export { applyTheme };
