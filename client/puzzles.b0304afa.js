import{S as t,i as e,s as n,L as $,Y as r,e as s,c as a,a as o,b as c,d as l,j as i,h as f,g as m,l as u,m as p,o as d,n as g,Z as h,p as x,q as v,r as w,_ as y,$ as b,a0 as z,N as B,k as I,P as j,Q as E,af as T,a1 as k,a2 as A,a3 as R,t as C,f as N,a4 as D,a5 as S}from"./client.793e1387.js";import{D as _,A as L,a as M,C as V,b as P,L as G,c as O,T as q,I as F,d as H}from"./Actions.a1e2e413.js";import{B as Z}from"./Button.715506c2.js";import{C as K}from"./CommonLabel.32436cdf.js";import{C as Q}from"./ClueTable.5dabee63.js";import{s as U,c as Y,T as J}from"./save.16e93f84.js";import{S as W,I as X}from"./Actions.2bf97923.js";import{R as tt}from"./RatingButton.afb2c58e.js";import{l as et}from"./index.6b428c3b.js";function nt(t,e,n){const $=t.slice();return $[32]=e[n],$[34]=n,$}function $t(t,e,n){const $=t.slice();return $[35]=e[n],$[37]=n,$}function rt(t){let e,n=t[7][t[37]]+"";return{c(){e=C(n)},l(t){e=N(t,n)},m(t,n){p(t,e,n)},p(t,$){128&$[0]&&n!==(n=t[7][t[37]]+"")&&D(e,n)},d(t){t&&m(e)}}}function st(t){let e,n,$;return e=new H({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=o()},l(t){i(e.$$.fragment,t),n=f(t)},m(t,r){d(e,t,r),p(t,n,r),$=!0},p(t,n){const $={};128&n[0]|128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){$||(x(e.$$.fragment,t),$=!0)},o(t){v(e.$$.fragment,t),$=!1},d(t){w(e,t),t&&m(n)}}}function at(t){let e,n;return e=new F({props:{href:"javascript:void(0)",activated:t[0]===t[37],$$slots:{default:[st]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[20](t[37])})),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(n,$){t=n;const r={};1&$[0]&&(r.activated=t[0]===t[37]),128&$[0]|128&$[1]&&(r.$$scope={dirty:$,ctx:t}),e.$set(r)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function ot(t){let e,n,$=Array(7),r=[];for(let e=0;e<$.length;e+=1)r[e]=at($t(t,$,e));const s=t=>v(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=B()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=B()},m(t,$){for(let e=0;e<r.length;e+=1)r[e].m(t,$);p(t,e,$),n=!0},p(t,n){if(524417&n[0]){let a;for($=Array(7),a=0;a<$.length;a+=1){const s=$t(t,$,a);r[a]?(r[a].p(s,n),x(r[a],1)):(r[a]=at(s),r[a].c(),x(r[a],1),r[a].m(e.parentNode,e))}for(j(),a=$.length;a<r.length;a+=1)s(a);E()}},i(t){if(!n){for(let t=0;t<$.length;t+=1)x(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)v(r[t]);n=!1},d(t){k(r,t),t&&m(e)}}}function ct(t){let e,n;return e=new G({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};129&n[0]|128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function lt(t){let e,n;return e=new V({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};129&n[0]|128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function it(t){let e,n,y,b,z,T,k,A,R,C,N,D;function S(e){t[21](e)}let _={variant:"outlined",style:"max-width: 100px",disabled:t[4][t[10]]};void 0!==t[5][t[10]]&&(_.value=t[5][t[10]]),z=new J({props:_}),$.push((()=>r(z,"value",S))),z.$on("keydown",t[18]);const L=[mt,ft],M=[];function V(t,e){return t[4][t[10]]?0:1}A=V(t),R=M[A]=L[A](t);let P=t[4][t[10]]&&!t[11].round1rate[t[10]]&&ht(t);return{c(){e=s("span"),n=s("img"),b=o(),a(z.$$.fragment),k=o(),R.c(),C=o(),P&&P.c(),N=B(),this.h()},l(t){e=c(t,"SPAN",{class:!0});var $=l(e);n=c($,"IMG",{src:!0,alt:!0}),b=f($),i(z.$$.fragment,$),k=f($),R.l($),$.forEach(m),C=f(t),P&&P.l(t),N=B(),this.h()},h(){I(n.src,y=t[12][t[10]])||u(n,"src",y),u(n,"alt","puzzle icon"),u(e,"class","flex-row")},m(t,$){p(t,e,$),g(e,n),g(e,b),d(z,e,null),g(e,k),M[A].m(e,null),p(t,C,$),P&&P.m(t,$),p(t,N,$),D=!0},p(t,$){(!D||1024&$[0]&&!I(n.src,y=t[12][t[10]]))&&u(n,"src",y);const r={};1040&$[0]&&(r.disabled=t[4][t[10]]),!T&&1056&$[0]&&(T=!0,r.value=t[5][t[10]],h((()=>T=!1))),z.$set(r);let s=A;A=V(t),A===s?M[A].p(t,$):(j(),v(M[s],1,1,(()=>{M[s]=null})),E(),R=M[A],R?R.p(t,$):(R=M[A]=L[A](t),R.c()),x(R,1),R.m(e,null)),t[4][t[10]]&&!t[11].round1rate[t[10]]?P?(P.p(t,$),3088&$[0]&&x(P,1)):(P=ht(t),P.c(),x(P,1),P.m(N.parentNode,N)):P&&(j(),v(P,1,1,(()=>{P=null})),E())},i(t){D||(x(z.$$.fragment,t),x(R),x(P),D=!0)},o(t){v(z.$$.fragment,t),v(R),v(P),D=!1},d(t){t&&m(e),w(z),M[A].d(),t&&m(C),P&&P.d(t),t&&m(N)}}}function ft(t){let e,n;return e=new Z({props:{variant:"raised",$$slots:{default:[pt]},$$scope:{ctx:t}}}),e.$on("click",t[22]),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function mt(t){let e,n;return e=new Z({props:{variant:"outlined",disabled:!0,$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function ut(t){let e;return{c(){e=C("ส่งคำตอบ")},l(t){e=N(t,"ส่งคำตอบ")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function pt(t){let e,n;return e=new K({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function dt(t){let e;return{c(){e=C("ถูกต้อง!")},l(t){e=N(t,"ถูกต้อง!")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function gt(t){let e,n;return e=new K({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function ht(t){let e,n,$;return n=new tt({props:{anchor:"BOTTOM_LEFT",puzzleId:t[10],round:0}}),n.$on("submitRates",t[17]),{c(){e=s("span"),a(n.$$.fragment),this.h()},l(t){e=c(t,"SPAN",{style:!0});var $=l(e);i(n.$$.fragment,$),$.forEach(m),this.h()},h(){T(e,"text-align","center")},m(t,r){p(t,e,r),d(n,e,null),$=!0},p(t,e){const $={};1024&e[0]&&($.puzzleId=t[10]),n.$set($)},i(t){$||(x(n.$$.fragment,t),$=!0)},o(t){v(n.$$.fragment,t),$=!1},d(t){t&&m(e),w(n)}}}function xt(t){let e,n;return e=new O({props:{fullBleed:!0,$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};64&n[0]|128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function vt(t){let e,n,$=t[32]+"";return{c(){e=s("h2"),n=C($)},l(t){e=c(t,"H2",{});var r=l(e);n=N(r,$),r.forEach(m)},m(t,$){p(t,e,$),g(e,n)},p:S,d(t){t&&m(e)}}}function wt(t){let e,n,$,r,h;return e=new K({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=o(),$=s("i"),r=C("expand_more"),this.h()},l(t){i(e.$$.fragment,t),n=f(t),$=c(t,"I",{class:!0,"aria-hidden":!0});var s=l($);r=N(s,"expand_more"),s.forEach(m),this.h()},h(){u($,"class","material-icons"),u($,"aria-hidden","true")},m(t,s){d(e,t,s),p(t,n,s),p(t,$,s),g($,r),h=!0},p(t,n){const $={};128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){h||(x(e.$$.fragment,t),h=!0)},o(t){v(e.$$.fragment,t),h=!1},d(t){w(e,t),t&&m(n),t&&m($)}}}function yt(t){let e,n;return e=new Z({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[23](t[34])})),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(n,$){t=n;const r={};128&$[1]&&(r.$$scope={dirty:$,ctx:t}),e.$set(r)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function bt(t){let e,n;return e=new V({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};1&n[0]|128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function zt(t){let e,n,$=t[14][t[0]][t[34]]+"";return{c(){e=new A,n=B(),this.h()},l(t){e=R(t),n=B(),this.h()},h(){e.a=n},m(t,r){e.m($,t,r),p(t,n,r)},p(t,n){1&n[0]&&$!==($=t[14][t[0]][t[34]]+"")&&e.p($)},d(t){t&&m(n),t&&e.d()}}}function Bt(t){let e,n,$,r=t[6]>=t[34]&&xt(t),s=t[6]>t[34]&&bt(t);return{c(){r&&r.c(),e=o(),s&&s.c(),n=B()},l(t){r&&r.l(t),e=f(t),s&&s.l(t),n=B()},m(t,a){r&&r.m(t,a),p(t,e,a),s&&s.m(t,a),p(t,n,a),$=!0},p(t,$){t[6]>=t[34]?r?(r.p(t,$),64&$[0]&&x(r,1)):(r=xt(t),r.c(),x(r,1),r.m(e.parentNode,e)):r&&(j(),v(r,1,1,(()=>{r=null})),E()),t[6]>t[34]?s?(s.p(t,$),64&$[0]&&x(s,1)):(s=bt(t),s.c(),x(s,1),s.m(n.parentNode,n)):s&&(j(),v(s,1,1,(()=>{s=null})),E())},i(t){$||(x(r),x(s),$=!0)},o(t){v(r),v(s),$=!1},d(t){r&&r.d(t),t&&m(e),s&&s.d(t),t&&m(n)}}}function It(t){let e,n,$,r=t[0]>0&&it(t),s=t[13],a=[];for(let e=0;e<s.length;e+=1)a[e]=Bt(nt(t,s,e));const c=t=>v(a[t],1,1,(()=>{a[t]=null}));return{c(){r&&r.c(),e=o();for(let t=0;t<a.length;t+=1)a[t].c();n=B()},l(t){r&&r.l(t),e=f(t);for(let e=0;e<a.length;e+=1)a[e].l(t);n=B()},m(t,s){r&&r.m(t,s),p(t,e,s);for(let e=0;e<a.length;e+=1)a[e].m(t,s);p(t,n,s),$=!0},p(t,$){if(t[0]>0?r?(r.p(t,$),1&$[0]&&x(r,1)):(r=it(t),r.c(),x(r,1),r.m(e.parentNode,e)):r&&(j(),v(r,1,1,(()=>{r=null})),E()),24641&$[0]){let e;for(s=t[13],e=0;e<s.length;e+=1){const r=nt(t,s,e);a[e]?(a[e].p(r,$),x(a[e],1)):(a[e]=Bt(r),a[e].c(),x(a[e],1),a[e].m(n.parentNode,n))}for(j(),e=s.length;e<a.length;e+=1)c(e);E()}},i(t){if(!$){x(r);for(let t=0;t<s.length;t+=1)x(a[t]);$=!0}},o(t){v(r),a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)v(a[t]);$=!1},d(t){r&&r.d(t),t&&m(e),k(a,t),t&&m(n)}}}function jt(t){let e,n,$,r;return $=new P({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){e=s("div"),n=s("div"),a($.$$.fragment),this.h()},l(t){e=c(t,"DIV",{class:!0});var r=l(e);n=c(r,"DIV",{class:!0});var s=l(n);i($.$$.fragment,s),s.forEach(m),r.forEach(m),this.h()},h(){u(n,"class","card-container svelte-5dz1ph"),u(e,"class","main-content svelte-5dz1ph")},m(t,s){p(t,e,s),g(e,n),d($,n,null),r=!0},p(t,e){const n={};3185&e[0]|128&e[1]&&(n.$$scope={dirty:e,ctx:t}),$.$set(n)},i(t){r||(x($.$$.fragment,t),r=!0)},o(t){v($.$$.fragment,t),r=!1},d(t){t&&m(e),w($)}}}function Et(t){let e;return{c(){e=C(t[3])},l(n){e=N(n,t[3])},m(t,n){p(t,e,n)},p(t,n){8&n[0]&&D(e,t[3])},d(t){t&&m(e)}}}function Tt(t){let e;return{c(){e=C("close")},l(t){e=N(t,"close")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function kt(t){let e,n;return e=new X({props:{class:"material-icons",title:"Dismiss",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function At(t){let e,n,$,r;return e=new K({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),$=new O({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=o(),a($.$$.fragment)},l(t){i(e.$$.fragment,t),n=f(t),i($.$$.fragment,t)},m(t,s){d(e,t,s),p(t,n,s),d($,t,s),r=!0},p(t,n){const r={};8&n[0]|128&n[1]&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const s={};128&n[1]&&(s.$$scope={dirty:n,ctx:t}),$.$set(s)},i(t){r||(x(e.$$.fragment,t),x($.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),v($.$$.fragment,t),r=!1},d(t){w(e,t),t&&m(n),w($,t)}}}function Rt(t){let e;return{c(){e=C("🎉ขอแสดงความยินดี🎉")},l(t){e=N(t,"🎉ขอแสดงความยินดี🎉")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function Ct(t){let e;return{c(){e=C("ส่งข้อมูล")},l(t){e=N(t,"ส่งข้อมูล")},m(t,n){p(t,e,n)},d(t){t&&m(e)}}}function Nt(t){let e,n;return e=new K({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Dt(t){let e,n;return e=new Z({props:{variant:"outlined",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),e.$on("click",t[16]),{c(){a(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};128&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function St(t){let e,n,u,y,b,z,B,I,j,E,T,k,A,R,S,_,L,M,V,P,G=t[5][5]+"";function q(e){t[25](e)}let F={variant:"outlined",label:"ชื่อ"};return void 0!==t[8]&&(F.value=t[8]),S=new J({props:F}),$.push((()=>r(S,"value",q))),V=new O({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){e=s("div"),n=C("คุณใช้เวลาทั้งสิ้น "),u=C(t[9]),y=o(),b=s("br"),z=s("br"),B=C("\r\n\t\t\tนำคำตอบ "),I=C(G),j=C(" ไปใส่ในประตูในงาน เพื่อไปด่านต่อไป"),E=s("br"),T=s("br"),k=C("\r\n\t\t\tโปรดใส่ชื่อเพื่อแสดงในตารางอันดับ"),A=s("br"),R=o(),a(S.$$.fragment),L=s("br"),M=o(),a(V.$$.fragment)},l($){e=c($,"DIV",{});var r=l(e);n=N(r,"คุณใช้เวลาทั้งสิ้น "),u=N(r,t[9]),y=f(r),b=c(r,"BR",{}),z=c(r,"BR",{}),B=N(r,"\r\n\t\t\tนำคำตอบ "),I=N(r,G),j=N(r," ไปใส่ในประตูในงาน เพื่อไปด่านต่อไป"),E=c(r,"BR",{}),T=c(r,"BR",{}),k=N(r,"\r\n\t\t\tโปรดใส่ชื่อเพื่อแสดงในตารางอันดับ"),A=c(r,"BR",{}),R=f(r),i(S.$$.fragment,r),L=c(r,"BR",{}),r.forEach(m),M=f($),i(V.$$.fragment,$)},m(t,$){p(t,e,$),g(e,n),g(e,u),g(e,y),g(e,b),g(e,z),g(e,B),g(e,I),g(e,j),g(e,E),g(e,T),g(e,k),g(e,A),g(e,R),d(S,e,null),g(e,L),p(t,M,$),d(V,t,$),P=!0},p(t,e){(!P||512&e[0])&&D(u,t[9]),(!P||32&e[0])&&G!==(G=t[5][5]+"")&&D(I,G);const n={};!_&&256&e[0]&&(_=!0,n.value=t[8],h((()=>_=!1))),S.$set(n);const $={};128&e[1]&&($.$$scope={dirty:e,ctx:t}),V.$set($)},i(t){P||(x(S.$$.fragment,t),x(V.$$.fragment,t),P=!0)},o(t){v(S.$$.fragment,t),v(V.$$.fragment,t),P=!1},d(t){t&&m(e),w(S),t&&m(M),w(V,t)}}}function _t(t){let e,n,$,r;return e=new q({props:{id:"simple-title",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),$=new V({props:{id:"simple-content",$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=o(),a($.$$.fragment)},l(t){i(e.$$.fragment,t),n=f(t),i($.$$.fragment,t)},m(t,s){d(e,t,s),p(t,n,s),d($,t,s),r=!0},p(t,n){const r={};128&n[1]&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const s={};800&n[0]|128&n[1]&&(s.$$scope={dirty:n,ctx:t}),$.$set(s)},i(t){r||(x(e.$$.fragment,t),x($.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),v($.$$.fragment,t),r=!1},d(t){w(e,t),t&&m(n),w($,t)}}}function Lt(t){let e,n,y,b,z,B,I,j,E,T,k,A,R;function C(e){t[26](e)}n=new Q({}),z=new _({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),I=new L({props:{class:"app-content",$$slots:{default:[jt]},$$scope:{ctx:t}}}),E=new W({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),t[24](E);let N={"aria-labelledby":"simple-title","aria-describedby":"simple-content",scrimClickAction:"",escapeKeyAction:"",$$slots:{default:[_t]},$$scope:{ctx:t}};return void 0!==t[1]&&(N.open=t[1]),k=new M({props:N}),$.push((()=>r(k,"open",C))),{c(){e=s("div"),a(n.$$.fragment),y=o(),b=s("div"),a(z.$$.fragment),B=o(),a(I.$$.fragment),j=o(),a(E.$$.fragment),T=o(),a(k.$$.fragment),this.h()},l(t){e=c(t,"DIV",{class:!0});var $=l(e);i(n.$$.fragment,$),y=f($),b=c($,"DIV",{class:!0});var r=l(b);i(z.$$.fragment,r),B=f(r),i(I.$$.fragment,r),r.forEach(m),$.forEach(m),j=f(t),i(E.$$.fragment,t),T=f(t),i(k.$$.fragment,t),this.h()},h(){u(b,"class","drawer-container svelte-5dz1ph"),u(e,"class","main")},m(t,$){p(t,e,$),d(n,e,null),g(e,y),g(e,b),d(z,b,null),g(b,B),d(I,b,null),p(t,j,$),d(E,t,$),p(t,T,$),d(k,t,$),R=!0},p(t,e){const n={};129&e[0]|128&e[1]&&(n.$$scope={dirty:e,ctx:t}),z.$set(n);const $={};3185&e[0]|128&e[1]&&($.$$scope={dirty:e,ctx:t}),I.$set($);const r={};8&e[0]|128&e[1]&&(r.$$scope={dirty:e,ctx:t}),E.$set(r);const s={};800&e[0]|128&e[1]&&(s.$$scope={dirty:e,ctx:t}),!A&&2&e[0]&&(A=!0,s.open=t[1],h((()=>A=!1))),k.$set(s)},i(t){R||(x(n.$$.fragment,t),x(z.$$.fragment,t),x(I.$$.fragment,t),x(E.$$.fragment,t),x(k.$$.fragment,t),R=!0)},o(t){v(n.$$.fragment,t),v(z.$$.fragment,t),v(I.$$.fragment,t),v(E.$$.fragment,t),v(k.$$.fragment,t),R=!1},d($){$&&m(e),w(n),w(z),w(I),$&&m(j),t[24](null),w(E,$),$&&m(T),w(k,$)}}}function Mt(t,e,n){let r,s,a;y(t,U,(t=>n(11,s=t))),y(t,Y,(t=>n(29,a=t)));var o=this&&this.__awaiter||function(t,e,n,$){return new(n||(n=Promise))((function(r,s){function a(t){try{c($.next(t))}catch(t){s(t)}}function o(t){try{c($.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,o)}c(($=$.apply(t,e||[])).next())}))};let c,l=!1,i="";const f=et();let m=[!1,!1,!1,!1,!1,!1],u=[" "," "," "," "," "," "];b((()=>o(void 0,void 0,void 0,(function*(){U.useLocalStorage();const t={round:0,answers:s.round1answers};f.emit("verify save",t,(function(t,e){n(4,m=t),n(5,u=e)})),yield fetch("./round1/puzzleicon1.png")}))));let p=0,d=0;const g=[0,1,2,3,4,5].map((t=>`./round1/puzzleicon${t+1}.png`));var h=[0,1,2,3,4].map((t=>`ปริศนาข้อที่ ${t+1}`));h=["วิธีเล่น",...h,"ปริศนาข้อสุดท้าย"];const x=[["<ul> <li>หาคำใบ้ในงาน Thailand Board Game Show 2021 เท่านั้น ไม่ต้อง Google หาข้อมูล</li>\n\t\t\t\t\t<li>ใช้ตารางตัวอักษร 5x5 (ด้านบน) สำหรับปริศนาทั้ง 5 ข้อ</li> </ul>","<ul> <li>วิเคราะห์ข้อมูลที่ได้มา ว่าจะแก้ปริศนาอย่างไร</li> <li>ถ้าแก้ปริศนาถูก จะได้ตำแหน่งในตาราง 5 ช่อง เป็นตัวอักษร 5 ตัว</li></ul>","<ul> <li>อ่านตัวอักษร 5 ตัวนั้น บนลงล่าง หรือซ้ายไปขวา อย่างใดอย่างหนึ่ง จะได้คำตอบของข้อนั้น </li> <li> นำคำตอบไปใส่ในช่องด้านบน และกด 'ส่งคำตอบ'</li></ul>"],["หากลุ่มปลาที่ซ่อนอยู่ในทะเล ทั้งหมด 5 กลุ่ม แต่ละกลุ่มจะมี 1 ช่องที่มีทั้งปลาทั้งไฟ","นำกลุ่มปลาทั้ง 5 กลุ่ม มาวางในตารางขนาด 5x5 ให้ทับทุกช่อง (เหมือน Tetris) โดยไม่ซ้อนทับกัน และไม่ต้องหมุน","อ่านตัวอักษรที่ตำแหน่งตรงกับไฟ จะได้ตัวอักษร 5 ตัว เรียงจากบนลงล่าง"],["หาช่องลับที่ซ่อนบนแผนที่ ใน Brick Zone ที่เมื่อเดินไปเหยียบแล้วจะมีตัวเลข 0,1,2 และตัว 💣? โผล่ขี้นมา","นำตัวเลขมาใส่ในตารางขนาด 5x5 จะได้ตารางเกม Minesweeper โดยให้หาว่าระเบิด 5 ลูกนั้น ซ่อนอยู่ในช่อง ? ช่องไหน","อ่านตำแหน่งระเบิด จะได้ตัวอักษร 5 ตัว เรียงจากซ้ายไปขวา"],["หากลุ่มใบเฟิร์น 5 กลุ่ม แต่ละกลุ่มจะมีใบเฟิร์นหลายช่องวางเรียงกัน",'แต่ละกลุ่ม จะมีช่องนึงที่ยืนทับแล้วมีอีโมจิขึ้นมา ให้หาว่าแทนความหมายอะไรในภาษาอังกฤษ (เช่น ❤️=HEART) และหาว่าอยู่ส่วนใดของตาราง โดยให้อ่านเป็นเส้นตรงจากด้านหนึ่งไปอีกด้านนึง<br><img src="./round1/puzzle3hint.png"/>',"อ่านตำแหน่งในช่องที่มีอีโมจิ จะได้ตัวอักษร 5 ตัว อ่านเรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย"],["หาวิทยุ 5 ตัว",'เมื่อยืนใกล้วิทยุ จะได้คำใบ้ (ตัวอย่าง "แถวที่ 1: มีชู้ = #") โดย # หมายถึงตัวเลข',"อ่านตัวอักษรในแถวที่ระบุ และตำแหน่งที่ตรงกับตัวเลข จะได้ตัวอักษร 5 ตัว เรียงบนลงล่าง จะได้คำตอบสุดท้าย"],["หาดาบทั้งหมด 5 คู่ ที่แต่ละคู่จะชี้เข้าหากัน",'วางดาบแต่ละคู่ที่ขอบตาราง 5x5 ด้านนอก ดาบจะบอกพิกัดของตัวอักษรในตาราง 5x5 <br><img src="./round1/puzzle5hint.png"/>',"อ่านตัวอักษรในพิกัดทั้ง 5 ช่อง จะได้ตัวอักษร 5 ตัว อ่านเรียงบนลงล่าง"],["นำคำตอบที่ได้จากข้อ 1-5 มาอ่านเรียงกัน จะได้เป็นคำสั่ง",'ความหมายคือ "ดูใต้ช่องที่ถูกใช้สองครั้ง" โดยให้ดูว่าคำตอบในข้อ 1-5 ใช้ช่องไหนไปบ้าง',"อ่านตัวอักษรตามคำสั่ง จะได้ 5 ตัว เรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย"]];let v=-1,w="",B=0,I="";function j(t){var e={round:0,id:t,answer:u[t],alias:s.alias};f.emit("submit answer",e,(function(e){e.isCorrect&&(n(5,u[t]=u[t].trim().toUpperCase(),u),z(U,s.round1answers[t]=u[t],s),n(4,m[t]=!0,m),e.isFinished&&(n(1,l=!0),B=a.getTime()-s.timeStarted,n(9,I=`${Math.floor(B/6e4)} นาที ${Math.floor(B%6e4/1e3)} วินาที`))),n(3,i=e.message),c.open()}))}function E(t){n(0,p=t),n(6,d=0)}return t.$$.update=()=>{1&t.$$.dirty[0]&&n(10,r=p-1)},[p,l,c,i,m,u,d,h,w,I,r,s,g,["วิธีหาข้อมูล","วิธีแก้ปริศนา","วิธีอ่านคำตอบ"],x,j,function(){if(s.round1final)return n(3,i="คุณเคยส่งชื่อแล้ว!!!"),void c.open();var t={round:0,answer:u[5],alias:s.alias,user:w,email:"none",timeTotal:B};f.emit("add to leaderboard",t,(function(t){t.success?(n(1,l=!1),v=t.ranking,z(U,s.round1final=!0,s),n(3,i=`บันทึกข้อมูลแล้ว คุณได้ลำดับที่ ${v}`)):n(3,i="คำตอบไม่ถูกต้อง ลองตอบใหม่"),c.open()}))},function(t){f.emit("submit rating",t.detail),z(U,s.round1rate[t.detail.puzzleId]=!0,s),n(3,i="ขอบคุณสำหรับคะแนนครับ"),c.open()},function(t){13===t.keyCode&&j(u.indexOf(t.target.value))},E,t=>E(t),function(e){t.$$.not_equal(u[r],e)&&(u[r]=e,n(5,u))},()=>j(r),t=>n(6,d+=d<=t?1:0),function(t){$[t?"unshift":"push"]((()=>{c=t,n(2,c)}))},function(t){w=t,n(8,w)},function(t){l=t,n(1,l)}]}class Vt extends t{constructor(t){super(),e(this,t,Mt,Lt,n,{},null,[-1,-1])}}export{Vt as default};
