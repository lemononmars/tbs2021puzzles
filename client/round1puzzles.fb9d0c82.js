import{S as t,i as e,s as n,L as $,Y as r,e as s,c as a,a as o,b as c,d as l,j as f,h as i,g as m,l as p,m as u,o as d,n as g,Z as h,p as x,q as w,r as y,_ as v,$ as b,a0 as z,k as j,P as k,Q as C,N as A,a1 as B,a2 as E,a3 as I,t as T,f as D,a4 as N,a5 as S}from"./client.60ac29ea.js";import{D as V,A as L,a as M,C as _,b as G,L as R,c as q,T as H,I as P,d as Y}from"./Actions.96d4747d.js";import{B as Z}from"./Button.931a7ea7.js";import{C as F}from"./CommonLabel.fb5b3f7a.js";import{C as K}from"./ClueTable.7cdf4901.js";import{s as O,c as Q,T as U}from"./save.6186a732.js";import{S as X,I as J}from"./Actions.dc5db575.js";import{s as W}from"./checker.93a8da79.js";function tt(t,e,n){const $=t.slice();return $[26]=e[n],$[28]=n,$}function et(t,e,n){const $=t.slice();return $[29]=e[n],$[31]=n,$}function nt(t){let e,n=t[7][t[31]]+"";return{c(){e=T(n)},l(t){e=D(t,n)},m(t,n){u(t,e,n)},p(t,$){128&$[0]&&n!==(n=t[7][t[31]]+"")&&N(e,n)},d(t){t&&m(e)}}}function $t(t){let e,n,$;return e=new Y({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=o()},l(t){f(e.$$.fragment,t),n=i(t)},m(t,r){d(e,t,r),u(t,n,r),$=!0},p(t,n){const $={};128&n[0]|2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){$||(x(e.$$.fragment,t),$=!0)},o(t){w(e.$$.fragment,t),$=!1},d(t){y(e,t),t&&m(n)}}}function rt(t){let e,n;return e=new P({props:{href:"javascript:void(0)",activated:t[0]===t[31],$$slots:{default:[$t]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[16](t[31])})),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(n,$){t=n;const r={};1&$[0]&&(r.activated=t[0]===t[31]),128&$[0]|2&$[1]&&(r.$$scope={dirty:$,ctx:t}),e.$set(r)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function st(t){let e,n,$=Array(7),r=[];for(let e=0;e<$.length;e+=1)r[e]=rt(et(t,$,e));const s=t=>w(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=A()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=A()},m(t,$){for(let e=0;e<r.length;e+=1)r[e].m(t,$);u(t,e,$),n=!0},p(t,n){if(32897&n[0]){let a;for($=Array(7),a=0;a<$.length;a+=1){const s=et(t,$,a);r[a]?(r[a].p(s,n),x(r[a],1)):(r[a]=rt(s),r[a].c(),x(r[a],1),r[a].m(e.parentNode,e))}for(k(),a=$.length;a<r.length;a+=1)s(a);C()}},i(t){if(!n){for(let t=0;t<$.length;t+=1)x(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)w(r[t]);n=!1},d(t){B(r,t),t&&m(e)}}}function at(t){let e,n;return e=new R({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};129&n[0]|2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ot(t){let e,n;return e=new _({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};129&n[0]|2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ct(t){let e,n,v,b,z,A,B,E,I,T;function D(e){t[17](e)}let N={variant:"outlined",style:"max-width: 100px",disabled:t[4][t[9]]};void 0!==t[5][t[9]]&&(N.value=t[5][t[9]]),z=new U({props:N}),$.push((()=>r(z,"value",D))),z.$on("keydown",t[14]);const S=[ft,lt],V=[];function L(t,e){return t[4][t[9]]?0:1}return E=L(t),I=V[E]=S[E](t),{c(){e=s("span"),n=s("img"),b=o(),a(z.$$.fragment),B=o(),I.c(),this.h()},l(t){e=c(t,"SPAN",{class:!0});var $=l(e);n=c($,"IMG",{src:!0,alt:!0}),b=i($),f(z.$$.fragment,$),B=i($),I.l($),$.forEach(m),this.h()},h(){j(n.src,v=t[10][t[9]])||p(n,"src",v),p(n,"alt","puzzle icon"),p(e,"class","flex-row")},m(t,$){u(t,e,$),g(e,n),g(e,b),d(z,e,null),g(e,B),V[E].m(e,null),T=!0},p(t,$){(!T||512&$[0]&&!j(n.src,v=t[10][t[9]]))&&p(n,"src",v);const r={};528&$[0]&&(r.disabled=t[4][t[9]]),!A&&544&$[0]&&(A=!0,r.value=t[5][t[9]],h((()=>A=!1))),z.$set(r);let s=E;E=L(t),E===s?V[E].p(t,$):(k(),w(V[s],1,1,(()=>{V[s]=null})),C(),I=V[E],I?I.p(t,$):(I=V[E]=S[E](t),I.c()),x(I,1),I.m(e,null))},i(t){T||(x(z.$$.fragment,t),x(I),T=!0)},o(t){w(z.$$.fragment,t),w(I),T=!1},d(t){t&&m(e),y(z),V[E].d()}}}function lt(t){let e,n;return e=new Z({props:{variant:"raised",$$slots:{default:[mt]},$$scope:{ctx:t}}}),e.$on("click",t[18]),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ft(t){let e,n;return e=new Z({props:{variant:"outlined",disabled:!0,$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function it(t){let e;return{c(){e=T("ส่งคำตอบ")},l(t){e=D(t,"ส่งคำตอบ")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function mt(t){let e,n;return e=new F({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function pt(t){let e;return{c(){e=T("ถูกต้อง!")},l(t){e=D(t,"ถูกต้อง!")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function ut(t){let e,n;return e=new F({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function dt(t){let e,n;return e=new q({props:{fullBleed:!0,$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};64&n[0]|2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function gt(t){let e,n,$=t[26]+"";return{c(){e=s("h2"),n=T($)},l(t){e=c(t,"H2",{});var r=l(e);n=D(r,$),r.forEach(m)},m(t,$){u(t,e,$),g(e,n)},p:S,d(t){t&&m(e)}}}function ht(t){let e,n,$,r,h;return e=new F({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=o(),$=s("i"),r=T("expand_more"),this.h()},l(t){f(e.$$.fragment,t),n=i(t),$=c(t,"I",{class:!0,"aria-hidden":!0});var s=l($);r=D(s,"expand_more"),s.forEach(m),this.h()},h(){p($,"class","material-icons"),p($,"aria-hidden","true")},m(t,s){d(e,t,s),u(t,n,s),u(t,$,s),g($,r),h=!0},p(t,n){const $={};2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){h||(x(e.$$.fragment,t),h=!0)},o(t){w(e.$$.fragment,t),h=!1},d(t){y(e,t),t&&m(n),t&&m($)}}}function xt(t){let e,n;return e=new Z({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[19](t[28])})),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(n,$){t=n;const r={};2&$[1]&&(r.$$scope={dirty:$,ctx:t}),e.$set(r)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function wt(t){let e,n;return e=new _({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};1&n[0]|2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function yt(t){let e,n,$=t[12][t[0]][t[28]]+"";return{c(){e=new E,n=A(),this.h()},l(t){e=I(t),n=A(),this.h()},h(){e.a=n},m(t,r){e.m($,t,r),u(t,n,r)},p(t,n){1&n[0]&&$!==($=t[12][t[0]][t[28]]+"")&&e.p($)},d(t){t&&m(n),t&&e.d()}}}function vt(t){let e,n,$,r=t[6]>=t[28]&&dt(t),s=t[6]>t[28]&&wt(t);return{c(){r&&r.c(),e=o(),s&&s.c(),n=A()},l(t){r&&r.l(t),e=i(t),s&&s.l(t),n=A()},m(t,a){r&&r.m(t,a),u(t,e,a),s&&s.m(t,a),u(t,n,a),$=!0},p(t,$){t[6]>=t[28]?r?(r.p(t,$),64&$[0]&&x(r,1)):(r=dt(t),r.c(),x(r,1),r.m(e.parentNode,e)):r&&(k(),w(r,1,1,(()=>{r=null})),C()),t[6]>t[28]?s?(s.p(t,$),64&$[0]&&x(s,1)):(s=wt(t),s.c(),x(s,1),s.m(n.parentNode,n)):s&&(k(),w(s,1,1,(()=>{s=null})),C())},i(t){$||(x(r),x(s),$=!0)},o(t){w(r),w(s),$=!1},d(t){r&&r.d(t),t&&m(e),s&&s.d(t),t&&m(n)}}}function bt(t){let e,n,$,r=t[0]>0&&ct(t),s=t[11],a=[];for(let e=0;e<s.length;e+=1)a[e]=vt(tt(t,s,e));const c=t=>w(a[t],1,1,(()=>{a[t]=null}));return{c(){r&&r.c(),e=o();for(let t=0;t<a.length;t+=1)a[t].c();n=A()},l(t){r&&r.l(t),e=i(t);for(let e=0;e<a.length;e+=1)a[e].l(t);n=A()},m(t,s){r&&r.m(t,s),u(t,e,s);for(let e=0;e<a.length;e+=1)a[e].m(t,s);u(t,n,s),$=!0},p(t,$){if(t[0]>0?r?(r.p(t,$),1&$[0]&&x(r,1)):(r=ct(t),r.c(),x(r,1),r.m(e.parentNode,e)):r&&(k(),w(r,1,1,(()=>{r=null})),C()),6209&$[0]){let e;for(s=t[11],e=0;e<s.length;e+=1){const r=tt(t,s,e);a[e]?(a[e].p(r,$),x(a[e],1)):(a[e]=vt(r),a[e].c(),x(a[e],1),a[e].m(n.parentNode,n))}for(k(),e=s.length;e<a.length;e+=1)c(e);C()}},i(t){if(!$){x(r);for(let t=0;t<s.length;t+=1)x(a[t]);$=!0}},o(t){w(r),a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)w(a[t]);$=!1},d(t){r&&r.d(t),t&&m(e),B(a,t),t&&m(n)}}}function zt(t){let e,n,$,r;return $=new G({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){e=s("div"),n=s("div"),a($.$$.fragment),this.h()},l(t){e=c(t,"DIV",{class:!0});var r=l(e);n=c(r,"DIV",{class:!0});var s=l(n);f($.$$.fragment,s),s.forEach(m),r.forEach(m),this.h()},h(){p(n,"class","card-container svelte-1tflwcz"),p(e,"class","main-content svelte-1tflwcz")},m(t,s){u(t,e,s),g(e,n),d($,n,null),r=!0},p(t,e){const n={};625&e[0]|2&e[1]&&(n.$$scope={dirty:e,ctx:t}),$.$set(n)},i(t){r||(x($.$$.fragment,t),r=!0)},o(t){w($.$$.fragment,t),r=!1},d(t){t&&m(e),y($)}}}function jt(t){let e;return{c(){e=T(t[3])},l(n){e=D(n,t[3])},m(t,n){u(t,e,n)},p(t,n){8&n[0]&&N(e,t[3])},d(t){t&&m(e)}}}function kt(t){let e;return{c(){e=T("close")},l(t){e=D(t,"close")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function Ct(t){let e,n;return e=new J({props:{class:"material-icons",title:"Dismiss",$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function At(t){let e,n,$,r;return e=new F({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),$=new q({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=o(),a($.$$.fragment)},l(t){f(e.$$.fragment,t),n=i(t),f($.$$.fragment,t)},m(t,s){d(e,t,s),u(t,n,s),d($,t,s),r=!0},p(t,n){const r={};8&n[0]|2&n[1]&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const s={};2&n[1]&&(s.$$scope={dirty:n,ctx:t}),$.$set(s)},i(t){r||(x(e.$$.fragment,t),x($.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),w($.$$.fragment,t),r=!1},d(t){y(e,t),t&&m(n),y($,t)}}}function Bt(t){let e;return{c(){e=T("🎉ขอแสดงความยินดีด้วย🎉")},l(t){e=D(t,"🎉ขอแสดงความยินดีด้วย🎉")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function Et(t){let e,n,$,r,a,f,p;return{c(){e=s("div"),n=T("คุณใช้เวลาทั้งสิ้น "),$=T(t[8]),r=o(),a=s("br"),f=s("br"),p=T("\r\n\t\t\tคุณสามารถเล่นต่อด่าน 2 ได้เลย")},l(s){e=c(s,"DIV",{});var o=l(e);n=D(o,"คุณใช้เวลาทั้งสิ้น "),$=D(o,t[8]),r=i(o),a=c(o,"BR",{}),f=c(o,"BR",{}),p=D(o,"\r\n\t\t\tคุณสามารถเล่นต่อด่าน 2 ได้เลย"),o.forEach(m)},m(t,s){u(t,e,s),g(e,n),g(e,$),g(e,r),g(e,a),g(e,f),g(e,p)},p(t,e){256&e[0]&&N($,t[8])},d(t){t&&m(e)}}}function It(t){let e;return{c(){e=T("ปิด")},l(t){e=D(t,"ปิด")},m(t,n){u(t,e,n)},d(t){t&&m(e)}}}function Tt(t){let e,n;return e=new Z({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),e.$on("click",t[21]),{c(){a(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,$){d(e,t,$),n=!0},p(t,n){const $={};2&n[1]&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Dt(t){let e,n,$,r,s,c;return e=new H({props:{id:"simple-title",$$slots:{default:[Bt]},$$scope:{ctx:t}}}),$=new _({props:{id:"simple-content",$$slots:{default:[Et]},$$scope:{ctx:t}}}),s=new q({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=o(),a($.$$.fragment),r=o(),a(s.$$.fragment)},l(t){f(e.$$.fragment,t),n=i(t),f($.$$.fragment,t),r=i(t),f(s.$$.fragment,t)},m(t,a){d(e,t,a),u(t,n,a),d($,t,a),u(t,r,a),d(s,t,a),c=!0},p(t,n){const r={};2&n[1]&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const a={};256&n[0]|2&n[1]&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n[0]|2&n[1]&&(o.$$scope={dirty:n,ctx:t}),s.$set(o)},i(t){c||(x(e.$$.fragment,t),x($.$$.fragment,t),x(s.$$.fragment,t),c=!0)},o(t){w(e.$$.fragment,t),w($.$$.fragment,t),w(s.$$.fragment,t),c=!1},d(t){y(e,t),t&&m(n),y($,t),t&&m(r),y(s,t)}}}function Nt(t){let e,n,v,b,z,j,k,C,A,B,E,I,T;function D(e){t[22](e)}n=new K({}),z=new V({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),k=new L({props:{class:"app-content",$$slots:{default:[zt]},$$scope:{ctx:t}}}),A=new X({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),t[20](A);let N={"aria-labelledby":"simple-title","aria-describedby":"simple-content",scrimClickAction:"",escapeKeyAction:"",$$slots:{default:[Dt]},$$scope:{ctx:t}};return void 0!==t[1]&&(N.open=t[1]),E=new M({props:N}),$.push((()=>r(E,"open",D))),{c(){e=s("div"),a(n.$$.fragment),v=o(),b=s("div"),a(z.$$.fragment),j=o(),a(k.$$.fragment),C=o(),a(A.$$.fragment),B=o(),a(E.$$.fragment),this.h()},l(t){e=c(t,"DIV",{class:!0});var $=l(e);f(n.$$.fragment,$),v=i($),b=c($,"DIV",{class:!0});var r=l(b);f(z.$$.fragment,r),j=i(r),f(k.$$.fragment,r),r.forEach(m),$.forEach(m),C=i(t),f(A.$$.fragment,t),B=i(t),f(E.$$.fragment,t),this.h()},h(){p(b,"class","drawer-container svelte-1tflwcz"),p(e,"class","main")},m(t,$){u(t,e,$),d(n,e,null),g(e,v),g(e,b),d(z,b,null),g(b,j),d(k,b,null),u(t,C,$),d(A,t,$),u(t,B,$),d(E,t,$),T=!0},p(t,e){const n={};129&e[0]|2&e[1]&&(n.$$scope={dirty:e,ctx:t}),z.$set(n);const $={};625&e[0]|2&e[1]&&($.$$scope={dirty:e,ctx:t}),k.$set($);const r={};8&e[0]|2&e[1]&&(r.$$scope={dirty:e,ctx:t}),A.$set(r);const s={};258&e[0]|2&e[1]&&(s.$$scope={dirty:e,ctx:t}),!I&&2&e[0]&&(I=!0,s.open=t[1],h((()=>I=!1))),E.$set(s)},i(t){T||(x(n.$$.fragment,t),x(z.$$.fragment,t),x(k.$$.fragment,t),x(A.$$.fragment,t),x(E.$$.fragment,t),T=!0)},o(t){w(n.$$.fragment,t),w(z.$$.fragment,t),w(k.$$.fragment,t),w(A.$$.fragment,t),w(E.$$.fragment,t),T=!1},d($){$&&m(e),y(n),y(z),y(k),$&&m(C),t[20](null),y(A,$),$&&m(B),y(E,$)}}}function St(t,e,n){let r,s,a;v(t,O,(t=>n(24,s=t))),v(t,Q,(t=>n(25,a=t)));let o,c=!1,l="",f=[!1,!1,!1,!1,!1,!1],i=[" "," "," "," "," "," "];b((()=>{O.useLocalStorage(),n(4,f=s.round1answers.map((t=>""!==t))),n(5,i=s.round1answers)}));let m=0,p=0;const u=[0,1,2,3,4,5].map((t=>`./round1/puzzleicon${t+1}.png`));var d=[0,1,2,3,4].map((t=>`ปริศนาข้อที่ ${t+1}`));d=["วิธีเล่น",...d,"ปริศนาข้อสุดท้าย"];const g=[['<ul> <li>ใช้ตารางตัวอักษร 5x5 (ด้านบน) สำหรับปริศนาทั้ง 5 ข้อ</li> \n\t\t\t\t<li>หาคำใบ้ในงาน Thailand Board Game Show 2021 เท่านั้น (ทั้งหมดอยู่ในคลิปด้านล่าง) ไม่ต้อง Google หาข้อมูล</li>\n\t\t\t\t</ul><br>\n\t\t\t\t\t<iframe width="420" height="315" src="https://www.youtube.com/embed/9X8Cj8z1TuY?start=178"/>',"<ul> <li>วิเคราะห์ข้อมูลที่ได้มา ว่าจะแก้ปริศนาอย่างไร</li> <li>ถ้าแก้ปริศนาถูก จะได้ตำแหน่งในตาราง 5 ช่อง เป็นตัวอักษร 5 ตัว</li></ul>","<ul> <li>อ่านตัวอักษร 5 ตัวนั้น บนลงล่าง หรือซ้ายไปขวา อย่างใดอย่างหนึ่ง จะได้คำตอบของข้อนั้น </li> <li> นำคำตอบไปใส่ในช่องด้านบน และกด 'ส่งคำตอบ'</li></ul>"],["หากลุ่มปลาที่ซ่อนอยู่ในทะเล ทั้งหมด 5 กลุ่ม แต่ละกลุ่มจะมี 1 ช่องที่มีทั้งปลาทั้งไฟ","นำกลุ่มปลาทั้ง 5 กลุ่ม มาวางในตารางขนาด 5x5 ให้ทับทุกช่อง (เหมือน Tetris) โดยไม่ซ้อนทับกัน และไม่ต้องหมุน","อ่านตัวอักษรที่ตำแหน่งตรงกับไฟ จะได้ตัวอักษร 5 ตัว เรียงจากบนลงล่าง"],["หาช่องลับที่ซ่อนบนแผนที่ ใน Brick Zone ที่เมื่อเดินไปเหยียบแล้วจะมีตัวเลข 0,1,2 และตัว 💣? โผล่ขี้นมา","นำตัวเลขมาใส่ในตารางขนาด 5x5 จะได้ตารางเกม Minesweeper โดยให้หาว่าระเบิด 5 ลูกนั้น ซ่อนอยู่ในช่อง ? ช่องไหน","อ่านตำแหน่งระเบิด จะได้ตัวอักษร 5 ตัว เรียงจากซ้ายไปขวา"],["หากลุ่มใบเฟิร์น 5 กลุ่ม แต่ละกลุ่มจะมีใบเฟิร์นหลายช่องวางเรียงกัน",'แต่ละกลุ่ม จะมีช่องนึงที่ยืนทับแล้วมีอีโมจิขึ้นมา ให้หาว่าแทนความหมายอะไรในภาษาอังกฤษ (เช่น ❤️=HEART) และหาว่าอยู่ส่วนใดของตาราง โดยให้อ่านเป็นเส้นตรงจากด้านหนึ่งไปอีกด้านนึง<br><img src="./round1/puzzle3hint.png"/>',"อ่านตำแหน่งในช่องที่มีอีโมจิ จะได้ตัวอักษร 5 ตัว อ่านเรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย"],["หาวิทยุ 5 ตัว",'เมื่อยืนใกล้วิทยุ จะได้คำใบ้ (ตัวอย่าง "แถวที่ 1: มีชู้ = #") โดย # หมายถึงตัวเลข',"อ่านตัวอักษรในแถวที่ระบุ และตำแหน่งที่ตรงกับตัวเลข จะได้ตัวอักษร 5 ตัว เรียงบนลงล่าง จะได้คำตอบสุดท้าย"],["หาดาบทั้งหมด 5 คู่ ที่แต่ละคู่จะชี้เข้าหากัน",'วางดาบแต่ละคู่ที่ขอบตาราง 5x5 ด้านนอก ดาบจะบอกพิกัดของตัวอักษรในตาราง 5x5 <br><img src="./round1/puzzle5hint.png"/>',"อ่านตัวอักษรในพิกัดทั้ง 5 ช่อง จะได้ตัวอักษร 5 ตัว อ่านเรียงบนลงล่าง"],["นำคำตอบที่ได้จากข้อ 1-5 มาอ่านเรียงกัน จะได้เป็นคำสั่ง",'ความหมายคือ "ดูใต้ช่องที่ถูกใช้สองครั้ง" โดยให้ดูว่าคำตอบในข้อ 1-5 ใช้ช่องไหนไปบ้าง',"อ่านตัวอักษรตามคำสั่ง จะได้ 5 ตัว เรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย"]];let h=0,x="";function w(t){var e={round:0,id:t,answer:i[t]},$=W(e);$.isCorrect&&(n(5,i[t]=i[t].trim().toUpperCase(),i),z(O,s.round1answers[t]=i[t],s),n(4,f[t]=!0,f),$.isFinished&&(n(1,c=!0),h=a.getTime()-s.timeStarted,n(8,x=`${Math.floor(h/6e4)} นาที ${Math.floor(h%6e4/1e3)} วินาที`))),n(3,l=$.message),o.open()}function y(t){n(0,m=t),n(6,p=0)}return t.$$.update=()=>{1&t.$$.dirty[0]&&n(9,r=m-1)},[m,c,o,l,f,i,p,d,x,r,u,["วิธีหาข้อมูล","วิธีแก้ปริศนา","วิธีอ่านคำตอบ"],g,w,function(t){13===t.keyCode&&w(i.indexOf(t.target.value))},y,t=>y(t),function(e){t.$$.not_equal(i[r],e)&&(i[r]=e,n(5,i))},()=>w(r),t=>n(6,p+=p<=t?1:0),function(t){$[t?"unshift":"push"]((()=>{o=t,n(2,o)}))},()=>n(1,c=!1),function(t){c=t,n(1,c)}]}class Vt extends t{constructor(t){super(),e(this,t,St,Nt,n,{},null,[-1,-1])}}export{Vt as default};
