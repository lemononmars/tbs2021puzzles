import{S as t,i as a,s as e,y as s,e as n,a as r,t as l,b as o,d as i,g as c,h as $,f as u,l as f,ar as m,m as h,n as p,C as d,D as b,E as g,a4 as v,p as w,q as x,z as L,c as k,j as _,o as y,F as E,O as T,r as B,I as z,K as R,ab as S,ac as I,Q as j,_ as q,$ as C,P as D,au as V,a0 as M,N as P,L as H,Y as N,Z as A,a5 as F}from"./client.488c62bb.js";import{s as U,T as G,c as K}from"./save.42735628.js";import{C as O}from"./CommonLabel.fd8a85db.js";import{B as Q}from"./Button.6f8365f5.js";import{l as Y}from"./index.6b428c3b.js";function Z(t){let a,e,L,k,_,y,E;const T=t[6].default,B=s(T,t,t[5],null);return{c(){a=n("a"),e=n("div"),L=n("div"),B&&B.c(),k=r(),_=l(t[1]),this.h()},l(s){a=o(s,"A",{class:!0,href:!0,target:!0,rel:!0,"aria-label":!0});var n=i(a);e=o(n,"DIV",{class:!0});var r=i(e);L=o(r,"DIV",{"aria-hidden":!0,class:!0});var l=i(L);B&&B.l(l),l.forEach(c),k=$(r),_=u(r,t[1]),r.forEach(c),n.forEach(c),this.h()},h(){f(L,"aria-hidden","true"),f(L,"class","ssbc-button__icon svelte-abzkh4"),m(L,"ssbc-button__icon--fill",t[2]),m(L,"ssbc-button__icon--outline",!t[2]),f(e,"class",y="ssbc-button "+t[4]+" svelte-abzkh4"),f(a,"class","ssbc-button__link svelte-abzkh4"),f(a,"href",t[0]),f(a,"target","_blank"),f(a,"rel","noopener"),f(a,"aria-label",t[3])},m(t,s){h(t,a,s),p(a,e),p(e,L),B&&B.m(L,null),p(e,k),p(e,_),E=!0},p(t,[s]){B&&B.p&&(!E||32&s)&&d(B,T,t,t[5],E?g(T,t[5],s,null):b(t[5]),null),4&s&&m(L,"ssbc-button__icon--fill",t[2]),4&s&&m(L,"ssbc-button__icon--outline",!t[2]),(!E||2&s)&&v(_,t[1]),(!E||16&s&&y!==(y="ssbc-button "+t[4]+" svelte-abzkh4"))&&f(e,"class",y),(!E||1&s)&&f(a,"href",t[0]),(!E||8&s)&&f(a,"aria-label",t[3])},i(t){E||(w(B,t),E=!0)},o(t){x(B,t),E=!1},d(t){t&&c(a),B&&B.d(t)}}}function J(t,a,e){let{$$slots:s={},$$scope:n}=a,{href:r}=a,{label:l=""}=a,{fill:o=!0}=a,{ariaLabel:i=""}=a,{class:c=""}=a;return t.$$set=t=>{"href"in t&&e(0,r=t.href),"label"in t&&e(1,l=t.label),"fill"in t&&e(2,o=t.fill),"ariaLabel"in t&&e(3,i=t.ariaLabel),"class"in t&&e(4,c=t.class),"$$scope"in t&&e(5,n=t.$$scope)},[r,l,o,i,c,n,s]}var W=class extends t{constructor(t){super(),a(this,t,J,Z,e,{href:0,label:1,fill:2,ariaLabel:3,class:4})}};function X(t){let a,e;return{c(){a=S("svg"),e=S("path"),this.h()},l(t){a=I(t,"svg",{xmlns:!0,viewBox:!0});var s=i(a);e=I(s,"path",{d:!0}),i(e).forEach(c),s.forEach(c),this.h()},h(){f(e,"d","M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"),f(a,"xmlns","http://www.w3.org/2000/svg"),f(a,"viewBox","0 0 24 24")},m(t,s){h(t,a,s),p(a,e)},d(t){t&&c(a)}}}function tt(t){let a,e;const s=[{class:"ssbc-button--facebook "+t[1]},t[3],{ariaLabel:t[0]},{href:t[2]}];let n={$$slots:{default:[X]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)n=L(n,s[t]);return a=new W({props:n}),{c(){k(a.$$.fragment)},l(t){_(a.$$.fragment,t)},m(t,s){y(a,t,s),e=!0},p(t,[e]){const n=15&e?E(s,[2&e&&{class:"ssbc-button--facebook "+t[1]},8&e&&T(t[3]),1&e&&{ariaLabel:t[0]},4&e&&{href:t[2]}]):{};32&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){e||(w(a.$$.fragment,t),e=!0)},o(t){x(a.$$.fragment,t),e=!1},d(t){B(a,t)}}}function at(t,a,e){const s=["url","ariaLabel","class"];let n,r=z(a,s),{url:l}=a,{ariaLabel:o="Share on Facebook"}=a,{class:i=""}=a;return t.$$set=t=>{a=L(L({},a),R(t)),e(3,r=z(a,s)),"url"in t&&e(4,l=t.url),"ariaLabel"in t&&e(0,o=t.ariaLabel),"class"in t&&e(1,i=t.class)},t.$$.update=()=>{16&t.$$.dirty&&e(2,n=encodeURI(`https://facebook.com/sharer/sharer.php?u=${l}`))},[o,i,n,r,l]}var et=class extends t{constructor(t){super(),a(this,t,at,tt,e,{url:4,ariaLabel:0,class:1})}};function st(t){let a,e;return{c(){a=S("svg"),e=S("path"),this.h()},l(t){a=I(t,"svg",{xmlns:!0,viewBox:!0});var s=i(a);e=I(s,"path",{d:!0}),i(e).forEach(c),s.forEach(c),this.h()},h(){f(e,"d","M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"),f(a,"xmlns","http://www.w3.org/2000/svg"),f(a,"viewBox","0 0 24 24")},m(t,s){h(t,a,s),p(a,e)},d(t){t&&c(a)}}}function nt(t){let a,e;const s=[{class:"ssbc-button--twitter "+t[1]},t[3],{ariaLabel:t[0]},{href:t[2]}];let n={$$slots:{default:[st]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)n=L(n,s[t]);return a=new W({props:n}),{c(){k(a.$$.fragment)},l(t){_(a.$$.fragment,t)},m(t,s){y(a,t,s),e=!0},p(t,[e]){const n=15&e?E(s,[2&e&&{class:"ssbc-button--twitter "+t[1]},8&e&&T(t[3]),1&e&&{ariaLabel:t[0]},4&e&&{href:t[2]}]):{};512&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){e||(w(a.$$.fragment,t),e=!0)},o(t){x(a.$$.fragment,t),e=!1},d(t){B(a,t)}}}function rt(t,a,e){const s=["text","url","ariaLabel","hashtags","via","related","class"];let n,r=z(a,s),{text:l}=a,{url:o}=a,{ariaLabel:i="Share on Twitter"}=a,{hashtags:c=""}=a,{via:$=""}=a,{related:u=""}=a,{class:f=""}=a;return t.$$set=t=>{a=L(L({},a),R(t)),e(3,r=z(a,s)),"text"in t&&e(4,l=t.text),"url"in t&&e(5,o=t.url),"ariaLabel"in t&&e(0,i=t.ariaLabel),"hashtags"in t&&e(6,c=t.hashtags),"via"in t&&e(7,$=t.via),"related"in t&&e(8,u=t.related),"class"in t&&e(1,f=t.class)},t.$$.update=()=>{496&t.$$.dirty&&e(2,n=encodeURI(`https://twitter.com/intent/tweet/?text=${l}&hashtags=${c}&via=${$}&related=${u}&url=${o}`))},[i,f,n,r,l,o,c,$,u]}var lt=class extends t{constructor(t){super(),a(this,t,rt,nt,e,{text:4,url:5,ariaLabel:0,hashtags:6,via:7,related:8,class:1})}};function ot(t){let a,e,s,f,m,d,b,g,L,E,T,z,R,S,I,q,C,V,M,H=t[6].finalRanking+"";z=new et({props:{class:"share-button",url:t[0]}}),S=new lt({props:{class:"share-button",text:t[1],hashtags:"tbs_2021, codebreaker_thailand"}});const N=[$t,ct],A=[];function F(t,a){return t[3]?1:0}return q=F(t),C=A[q]=N[q](t),{c(){a=l("เก็บข้อมูลเรียบร้อยแล้ว! คุณได้ลำดับที่ "),e=l(H),s=r(),f=n("br"),m=l("\r\n\t\t\tใช้เวลาทั้งหมด (รวมด่านแรก) "),d=l(t[5]),b=r(),g=n("br"),L=n("br"),E=l("\r\n\t\t\tแชร์ให้คนอื่นรู้ว่าเราเล่นจบแล้ว!\r\n\t\t\t"),T=n("span"),k(z.$$.fragment),R=r(),k(S.$$.fragment),I=r(),C.c(),V=P()},l(n){a=u(n,"เก็บข้อมูลเรียบร้อยแล้ว! คุณได้ลำดับที่ "),e=u(n,H),s=$(n),f=o(n,"BR",{}),m=u(n,"\r\n\t\t\tใช้เวลาทั้งหมด (รวมด่านแรก) "),d=u(n,t[5]),b=$(n),g=o(n,"BR",{}),L=o(n,"BR",{}),E=u(n,"\r\n\t\t\tแชร์ให้คนอื่นรู้ว่าเราเล่นจบแล้ว!\r\n\t\t\t"),T=o(n,"SPAN",{});var r=i(T);_(z.$$.fragment,r),R=$(r),_(S.$$.fragment,r),r.forEach(c),I=$(n),C.l(n),V=P()},m(t,n){h(t,a,n),h(t,e,n),h(t,s,n),h(t,f,n),h(t,m,n),h(t,d,n),h(t,b,n),h(t,g,n),h(t,L,n),h(t,E,n),h(t,T,n),y(z,T,null),p(T,R),y(S,T,null),h(t,I,n),A[q].m(t,n),h(t,V,n),M=!0},p(t,a){(!M||64&a)&&H!==(H=t[6].finalRanking+"")&&v(e,H),(!M||32&a)&&v(d,t[5]);const s={};1&a&&(s.url=t[0]),z.$set(s);const n={};2&a&&(n.text=t[1]),S.$set(n);let r=q;q=F(t),q===r?A[q].p(t,a):(D(),x(A[r],1,1,(()=>{A[r]=null})),j(),C=A[q],C?C.p(t,a):(C=A[q]=N[q](t),C.c()),w(C,1),C.m(V.parentNode,V))},i(t){M||(w(z.$$.fragment,t),w(S.$$.fragment,t),w(C),M=!0)},o(t){x(z.$$.fragment,t),x(S.$$.fragment,t),x(C),M=!1},d(t){t&&c(a),t&&c(e),t&&c(s),t&&c(f),t&&c(m),t&&c(d),t&&c(b),t&&c(g),t&&c(L),t&&c(E),t&&c(T),B(z),B(S),t&&c(I),A[q].d(t),t&&c(V)}}}function it(t){let a,e,s,n,o,i,f,m,p;function d(a){t[9](a)}let b={variant:"outlined",label:"ชื่อใน gather.town",required:!0};function g(a){t[10](a)}void 0!==t[4].username&&(b.value=t[4].username),e=new G({props:b}),H.push((()=>N(e,"value",d)));let v={variant:"outlined",label:"email ที่ใช้สมัคร",input$autocomplete:"email",required:!0};return void 0!==t[4].email&&(v.value=t[4].email),o=new G({props:v}),H.push((()=>N(o,"value",g))),m=new Q({props:{variant:"raised",$$slots:{default:[ht]},$$scope:{ctx:t}}}),m.$on("click",t[7]),{c(){a=l("กรอกข้อมูลเพื่อรับของที่ระลึก\r\n\t\t\t"),k(e.$$.fragment),n=r(),k(o.$$.fragment),f=r(),k(m.$$.fragment)},l(t){a=u(t,"กรอกข้อมูลเพื่อรับของที่ระลึก\r\n\t\t\t"),_(e.$$.fragment,t),n=$(t),_(o.$$.fragment,t),f=$(t),_(m.$$.fragment,t)},m(t,s){h(t,a,s),y(e,t,s),h(t,n,s),y(o,t,s),h(t,f,s),y(m,t,s),p=!0},p(t,a){const n={};!s&&16&a&&(s=!0,n.value=t[4].username,A((()=>s=!1))),e.$set(n);const r={};!i&&16&a&&(i=!0,r.value=t[4].email,A((()=>i=!1))),o.$set(r);const l={};65536&a&&(l.$$scope={dirty:a,ctx:t}),m.$set(l)},i(t){p||(w(e.$$.fragment,t),w(o.$$.fragment,t),w(m.$$.fragment,t),p=!0)},o(t){x(e.$$.fragment,t),x(o.$$.fragment,t),x(m.$$.fragment,t),p=!1},d(t){t&&c(a),B(e,t),t&&c(n),B(o,t),t&&c(f),B(m,t)}}}function ct(t){let a,e;return{c(){a=n("h2"),e=l("ขอบคุณครับ แล้วมาแก้ปริศนาด้วยกันใหม่ในโอกาสหน้า 😉")},l(t){a=o(t,"H2",{});var s=i(a);e=u(s,"ขอบคุณครับ แล้วมาแก้ปริศนาด้วยกันใหม่ในโอกาสหน้า 😉"),s.forEach(c)},m(t,s){h(t,a,s),p(a,e)},p:F,i:F,o:F,d(t){t&&c(a)}}}function $t(t){let a,e,s,n,l;function o(a){t[11](a)}let i={textarea:!0,label:"อยากบอกอะไรผู้ประดิษฐ์ปริศนาบ้าง",input$rows:4,input$cols:40};return void 0!==t[2]&&(i.value=t[2]),a=new G({props:i}),H.push((()=>N(a,"value",o))),n=new Q({props:{variant:"raised",$$slots:{default:[ft]},$$scope:{ctx:t}}}),n.$on("click",t[8]),{c(){k(a.$$.fragment),s=r(),k(n.$$.fragment)},l(t){_(a.$$.fragment,t),s=$(t),_(n.$$.fragment,t)},m(t,e){y(a,t,e),h(t,s,e),y(n,t,e),l=!0},p(t,s){const r={};!e&&4&s&&(e=!0,r.value=t[2],A((()=>e=!1))),a.$set(r);const l={};65536&s&&(l.$$scope={dirty:s,ctx:t}),n.$set(l)},i(t){l||(w(a.$$.fragment,t),w(n.$$.fragment,t),l=!0)},o(t){x(a.$$.fragment,t),x(n.$$.fragment,t),l=!1},d(t){B(a,t),t&&c(s),B(n,t)}}}function ut(t){let a;return{c(){a=l("ส่งข้อมูล")},l(t){a=u(t,"ส่งข้อมูล")},m(t,e){h(t,a,e)},d(t){t&&c(a)}}}function ft(t){let a,e;return a=new O({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){k(a.$$.fragment)},l(t){_(a.$$.fragment,t)},m(t,s){y(a,t,s),e=!0},p(t,e){const s={};65536&e&&(s.$$scope={dirty:e,ctx:t}),a.$set(s)},i(t){e||(w(a.$$.fragment,t),e=!0)},o(t){x(a.$$.fragment,t),e=!1},d(t){B(a,t)}}}function mt(t){let a;return{c(){a=l("ส่งข้อมูล")},l(t){a=u(t,"ส่งข้อมูล")},m(t,e){h(t,a,e)},d(t){t&&c(a)}}}function ht(t){let a,e;return a=new O({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){k(a.$$.fragment)},l(t){_(a.$$.fragment,t)},m(t,s){y(a,t,s),e=!0},p(t,e){const s={};65536&e&&(s.$$scope={dirty:e,ctx:t}),a.$set(s)},i(t){e||(w(a.$$.fragment,t),e=!0)},o(t){x(a.$$.fragment,t),e=!1},d(t){B(a,t)}}}function pt(t){let a,e,s,m,d,b,g,v;const L=[it,ot],k=[];function _(t,a){return t[6].round2final?1:0}return b=_(t),g=k[b]=L[b](t),{c(){a=n("div"),e=n("div"),s=n("h1"),m=l("🎉คุณคือผู้พิชิตปริศนา TBS2021🎉"),d=r(),g.c(),this.h()},l(t){a=o(t,"DIV",{class:!0});var n=i(a);e=o(n,"DIV",{class:!0});var r=i(e);s=o(r,"H1",{});var l=i(s);m=u(l,"🎉คุณคือผู้พิชิตปริศนา TBS2021🎉"),l.forEach(c),d=$(r),g.l(r),r.forEach(c),n.forEach(c),this.h()},h(){f(e,"class","flex-column"),f(a,"class","main")},m(t,n){h(t,a,n),p(a,e),p(e,s),p(s,m),p(e,d),k[b].m(e,null),v=!0},p(t,[a]){let s=b;b=_(t),b===s?k[b].p(t,a):(D(),x(k[s],1,1,(()=>{k[s]=null})),j(),g=k[b],g?g.p(t,a):(g=k[b]=L[b](t),g.c()),w(g,1),g.m(e,null))},i(t){v||(w(g),v=!0)},o(t){x(g),v=!1},d(t){t&&c(a),k[b].d()}}}function dt(t,a,e){let s,n;q(t,U,(t=>e(6,s=t))),q(t,K,(t=>e(13,n=t)));var r=this&&this.__awaiter||function(t,a,e,s){return new(e||(e=Promise))((function(n,r){function l(t){try{i(s.next(t))}catch(t){r(t)}}function o(t){try{i(s.throw(t))}catch(t){r(t)}}function i(t){var a;t.done?n(t.value):(a=t.value,a instanceof e?a:new e((function(t){t(a)}))).then(l,o)}i((s=s.apply(t,a||[])).next())}))};let l="",o="",i="",c=!1;const $=Y();let u={username:"",email:""},f="",m="";return C((()=>r(void 0,void 0,void 0,(function*(){U.useLocalStorage();const t={round:1,answers:s.round2answers};$.emit("verify save",t,(function(t,a){t[4]||V("/enter/final"),f=a[4]})),s.timeTotal<=0&&M(U,s.timeTotal=n.getTime()-s.timeStarted,s),e(5,m=`${Math.floor(s.timeTotal/6e4)} นาที ${Math.floor(s.timeTotal%6e4/1e3)} วินาที`)})))),[l,o,i,c,u,m,s,function(){var t={round:1,answer:f,user:u.username,email:u.email,alias:s.alias,timeTotal:s.timeTotal};$.emit("add to leaderboard",t,(function(t){t.success&&(M(U,s.round2final=!0,s),M(U,s.finalRanking=t.ranking,s),e(0,l=`https://tbs2021puzzles.herokuapp.com/round1&display=popup&quote=แก้ปริศนาเสร็จเป็นคนที่ ${s.finalRanking} ใช้เวลา ${m}`),e(1,o=`แก้ปริศนาได้เป็นคนที่ ${s.finalRanking} ใช้เวลา ${s.timeTotal} Thailand Board Game Show 2021 Puzzles`))}))},function(){e(3,c=!0),$.emit("submit impression",i)},function(a){t.$$.not_equal(u.username,a)&&(u.username=a,e(4,u))},function(a){t.$$.not_equal(u.email,a)&&(u.email=a,e(4,u))},function(t){i=t,e(2,i)}]}class bt extends t{constructor(t){super(),a(this,t,dt,pt,e,{})}}export{bt as default};
