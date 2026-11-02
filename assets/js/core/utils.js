const esc = s => String(s).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const subsup=s=>s.replace(/_\{([^}]*)\}/g,"<sub>$1</sub>").replace(/\^\{([^}]*)\}/g,"<sup>$1</sup>");
const fm=s=>subsup(String(s).replace(/`([^`]+)`/g,(m,c)=>"<code>"+esc(c)+"</code>"));
const qt=s=>subsup(esc(s).replace(/`([^`]+)`/g,(m,c)=>"<code>"+c+"</code>"));
const iso=s=>String(s).replace(/[A-Za-z0-9ΘΩΟΣ∑√≈(\[|`<#&@/*+="'.][^\u0600-\u06FF\u060C\u061B]*[^\u0600-\u06FF\u060C\u061B\s.]/g,m=>{
  let pre="",post="";const cnt=(x,c)=>x.split(c).length-1;
  for(let k=0;k<4;k++){
    if(/^[(\[]/.test(m)&&cnt(m,m[0]==="("?")":"]")<cnt(m,m[0])){
      pre+=m[0];
      m=m.slice(1).replace(/^\s+/,x=>{
        pre+=x;
        return""
      });
      continue
    }
    if(/[)\]]$/.test(m)&&cnt(m,m.slice(-1))>cnt(m,m.slice(-1)===")"?"(":"[")){
      post=m.slice(-1)+post;
      m=m.slice(0,-1).replace(/\s+$/,x=>{
        post=x+post;
        return""
      });
      continue
    }
    break
  }
  if(cnt(m,"(")>cnt(m,")")){
    const k=m.lastIndexOf("("),L=m.slice(0,k).replace(/\s+$/,""),Rr=m.slice(k+1).replace(/^\s+/,"");return pre+(L?"\u2066"+L+"\u2069 ":"")+"("+(Rr?"\u2066"+Rr+"\u2069":"")+post
  }
  return m?pre+"\u2066"+m+"\u2069"+post:pre+post
});
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const ar=n=>String(n).replace(/\d/g,d=>"0123456789"[d]);
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{
  a=a.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]
  }return a
};

export { esc, subsup, fm, qt, iso, $, $$, ar, pick, shuffle };
