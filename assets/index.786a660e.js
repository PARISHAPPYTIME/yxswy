import{d as a,r as t,a as s,b as o,o as n,c as l,e,f as r,t as i,u as f,g as u,h as c,i as d,j as v}from"./vendor.4bcdf87b.js";const m={class:"app-container"},h=r("br",null,null,-1),p=r("div",null,null,-1);v(a({setup(a){const v=t({info:{}}),$=s().format("YYYY"),b=s().format("MM"),Y=s().format("DD"),k=s(`${$}-${b}-${Y} 05:58:40`),g=s(`${$}-${b}-${Y} 18:00:00`),j=o("");let D=setInterval((()=>{s().isAfter(k)&&k.isBefore(g)?j.value="light":j.value="dark"}),1e3);return n((()=>{clearInterval(D)})),l((()=>{c({url:"https://v1.hitokoto.cn/?c=d",method:"GET"}).then((a=>a.data)).then((a=>{v.info=a||{}}))})),(a,t)=>(d(),e("main",{class:{[j.value]:!0}},[r("div",m,[r("div",null,i(f(v).info.hitokoto),1),h,u(" 「 "+i(f(v).info.from)+" 」 ",1),p])],2))}})).mount("#app");
