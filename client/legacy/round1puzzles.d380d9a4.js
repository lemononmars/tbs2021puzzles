import{_ as n,a as t,b as o,c,i as r,d as f,S as i,s as e,U as u,a6 as a,e as $,g as s,f as l,h as m,j as p,n as d,m as g,l as v,p as h,q as x,u as w,r as y,a7 as b,w as z,x as B,y as j,a8 as k,V as A,a9 as C,o as E,Y as I,Z as R,W as D,aa as T,ab as N,ac as S,t as V,k as _,ad as M,ae as G}from"./client.226dcb07.js";import{D as L,A as q,a as H,C as O,b as P,L as U,c as Z,T as F,I as K,d as W}from"./Actions.fd7c74a9.js";import{B as Y}from"./Button.62015ae0.js";import{C as J}from"./CommonLabel.ada4532a.js";import{C as Q}from"./ClueTable.8dbb3255.js";import{s as X,c as nn,T as tn}from"./save.12111764.js";import{S as on,I as cn}from"./Actions.0e5138ca.js";import{s as rn}from"./_checker.5d767193.js";function fn(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,f=t(n);if(c){var i=t(this).constructor;r=Reflect.construct(f,arguments,i)}else r=f.apply(this,arguments);return o(this,r)}}function en(n,t,o){var c=n.slice();return c[26]=t[o],c[28]=o,c}function un(n,t,o){var c=n.slice();return c[29]=t[o],c[31]=o,c}function an(n){var t,o=n[7][n[31]]+"";return{c:function(){t=V(o)},l:function(n){t=_(n,o)},m:function(n,o){x(n,t,o)},p:function(n,c){128&c[0]&&o!==(o=n[7][n[31]]+"")&&M(t,o)},d:function(n){n&&v(t)}}}function $n(n){var t,o,c;return t=new W({props:{$$slots:{default:[an]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment),o=l()},l:function(n){d(t.$$.fragment,n),o=g(n)},m:function(n,r){w(t,n,r),x(n,o,r),c=!0},p:function(n,o){var c={};128&o[0]|2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){c||(z(t.$$.fragment,n),c=!0)},o:function(n){B(t.$$.fragment,n),c=!1},d:function(n){j(t,n),n&&v(o)}}}function sn(n){var t,o;return(t=new K({props:{href:"javascript:void(0)",activated:n[0]===n[31],$$slots:{default:[$n]},$$scope:{ctx:n}}})).$on("click",(function(){return n[16](n[31])})),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(o,c){n=o;var r={};1&c[0]&&(r.activated=n[0]===n[31]),128&c[0]|2&c[1]&&(r.$$scope={dirty:c,ctx:n}),t.$set(r)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function ln(n){for(var t,o,c=Array(7),r=[],f=0;f<c.length;f+=1)r[f]=sn(un(n,c,f));var i=function(n){return B(r[n],1,1,(function(){r[n]=null}))};return{c:function(){for(var n=0;n<r.length;n+=1)r[n].c();t=D()},l:function(n){for(var o=0;o<r.length;o+=1)r[o].l(n);t=D()},m:function(n,c){for(var f=0;f<r.length;f+=1)r[f].m(n,c);x(n,t,c),o=!0},p:function(n,o){if(32897&o[0]){var f;for(c=Array(7),f=0;f<c.length;f+=1){var e=un(n,c,f);r[f]?(r[f].p(e,o),z(r[f],1)):(r[f]=sn(e),r[f].c(),z(r[f],1),r[f].m(t.parentNode,t))}for(I(),f=c.length;f<r.length;f+=1)i(f);R()}},i:function(n){if(!o){for(var t=0;t<c.length;t+=1)z(r[t]);o=!0}},o:function(n){r=r.filter(Boolean);for(var t=0;t<r.length;t+=1)B(r[t]);o=!1},d:function(n){T(r,n),n&&v(t)}}}function mn(n){var t,o;return t=new U({props:{$$slots:{default:[ln]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,o){var c={};129&o[0]|2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function pn(n){var t,o;return t=new O({props:{$$slots:{default:[mn]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,o){var c={};129&o[0]|2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function dn(n){var t,o,c,r,f,i,e,k,A,C;function D(t){n[17](t)}var T={variant:"outlined",style:"max-width: 100px",disabled:n[4][n[9]]};void 0!==n[5][n[9]]&&(T.value=n[5][n[9]]),f=new tn({props:T}),u.push((function(){return a(f,"value",D)})),f.$on("keydown",n[14]);var N=[vn,gn],S=[];function V(n,t){return n[4][n[9]]?0:1}return k=V(n),A=S[k]=N[k](n),{c:function(){t=$("span"),o=$("img"),r=l(),s(f.$$.fragment),e=l(),A.c(),this.h()},l:function(n){t=m(n,"SPAN",{class:!0});var c=p(t);o=m(c,"IMG",{src:!0,alt:!0}),r=g(c),d(f.$$.fragment,c),e=g(c),A.l(c),c.forEach(v),this.h()},h:function(){E(o.src,c=n[10][n[9]])||h(o,"src",c),h(o,"alt","puzzle icon"),h(t,"class","flex-row")},m:function(n,c){x(n,t,c),y(t,o),y(t,r),w(f,t,null),y(t,e),S[k].m(t,null),C=!0},p:function(n,r){(!C||512&r[0]&&!E(o.src,c=n[10][n[9]]))&&h(o,"src",c);var e={};528&r[0]&&(e.disabled=n[4][n[9]]),!i&&544&r[0]&&(i=!0,e.value=n[5][n[9]],b((function(){return i=!1}))),f.$set(e);var u=k;(k=V(n))===u?S[k].p(n,r):(I(),B(S[u],1,1,(function(){S[u]=null})),R(),(A=S[k])?A.p(n,r):(A=S[k]=N[k](n)).c(),z(A,1),A.m(t,null))},i:function(n){C||(z(f.$$.fragment,n),z(A),C=!0)},o:function(n){B(f.$$.fragment,n),B(A),C=!1},d:function(n){n&&v(t),j(f),S[k].d()}}}function gn(n){var t,o;return(t=new Y({props:{variant:"raised",$$slots:{default:[xn]},$$scope:{ctx:n}}})).$on("click",n[18]),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,o){var c={};2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function vn(n){var t,o;return t=new Y({props:{variant:"outlined",disabled:!0,$$slots:{default:[yn]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,o){var c={};2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function hn(n){var t;return{c:function(){t=V("ส่งคำตอบ")},l:function(n){t=_(n,"ส่งคำตอบ")},m:function(n,o){x(n,t,o)},d:function(n){n&&v(t)}}}function xn(n){var t,o;return t=new J({props:{$$slots:{default:[hn]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,o){var c={};2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function wn(n){var t;return{c:function(){t=V("ถูกต้อง!")},l:function(n){t=_(n,"ถูกต้อง!")},m:function(n,o){x(n,t,o)},d:function(n){n&&v(t)}}}function yn(n){var t,o;return t=new J({props:{$$slots:{default:[wn]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,o){var c={};2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function bn(n){var t,o;return t=new Z({props:{fullBleed:!0,$$slots:{default:[jn]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,o){var c={};64&o[0]|2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function zn(n){var t,o,c=n[26]+"";return{c:function(){t=$("h2"),o=V(c)},l:function(n){t=m(n,"H2",{});var r=p(t);o=_(r,c),r.forEach(v)},m:function(n,c){x(n,t,c),y(t,o)},p:G,d:function(n){n&&v(t)}}}function Bn(n){var t,o,c,r,f;return t=new J({props:{$$slots:{default:[zn]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment),o=l(),c=$("i"),r=V("expand_more"),this.h()},l:function(n){d(t.$$.fragment,n),o=g(n),c=m(n,"I",{class:!0,"aria-hidden":!0});var f=p(c);r=_(f,"expand_more"),f.forEach(v),this.h()},h:function(){h(c,"class","material-icons"),h(c,"aria-hidden","true")},m:function(n,i){w(t,n,i),x(n,o,i),x(n,c,i),y(c,r),f=!0},p:function(n,o){var c={};2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){f||(z(t.$$.fragment,n),f=!0)},o:function(n){B(t.$$.fragment,n),f=!1},d:function(n){j(t,n),n&&v(o),n&&v(c)}}}function jn(n){var t,o;return(t=new Y({props:{$$slots:{default:[Bn]},$$scope:{ctx:n}}})).$on("click",(function(){return n[19](n[28])})),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(o,c){n=o;var r={};2&c[1]&&(r.$$scope={dirty:c,ctx:n}),t.$set(r)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function kn(n){var t,o;return t=new O({props:{$$slots:{default:[An]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,o){var c={};1&o[0]|2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function An(n){var t,o,c=n[12][n[0]][n[28]]+"";return{c:function(){t=new N,o=D(),this.h()},l:function(n){t=S(n),o=D(),this.h()},h:function(){t.a=o},m:function(n,r){t.m(c,n,r),x(n,o,r)},p:function(n,o){1&o[0]&&c!==(c=n[12][n[0]][n[28]]+"")&&t.p(c)},d:function(n){n&&v(o),n&&t.d()}}}function Cn(n){var t,o,c,r=n[6]>=n[28]&&bn(n),f=n[6]>n[28]&&kn(n);return{c:function(){r&&r.c(),t=l(),f&&f.c(),o=D()},l:function(n){r&&r.l(n),t=g(n),f&&f.l(n),o=D()},m:function(n,i){r&&r.m(n,i),x(n,t,i),f&&f.m(n,i),x(n,o,i),c=!0},p:function(n,c){n[6]>=n[28]?r?(r.p(n,c),64&c[0]&&z(r,1)):((r=bn(n)).c(),z(r,1),r.m(t.parentNode,t)):r&&(I(),B(r,1,1,(function(){r=null})),R()),n[6]>n[28]?f?(f.p(n,c),64&c[0]&&z(f,1)):((f=kn(n)).c(),z(f,1),f.m(o.parentNode,o)):f&&(I(),B(f,1,1,(function(){f=null})),R())},i:function(n){c||(z(r),z(f),c=!0)},o:function(n){B(r),B(f),c=!1},d:function(n){r&&r.d(n),n&&v(t),f&&f.d(n),n&&v(o)}}}function En(n){for(var t,o,c,r=n[0]>0&&dn(n),f=n[11],i=[],e=0;e<f.length;e+=1)i[e]=Cn(en(n,f,e));var u=function(n){return B(i[n],1,1,(function(){i[n]=null}))};return{c:function(){r&&r.c(),t=l();for(var n=0;n<i.length;n+=1)i[n].c();o=D()},l:function(n){r&&r.l(n),t=g(n);for(var c=0;c<i.length;c+=1)i[c].l(n);o=D()},m:function(n,f){r&&r.m(n,f),x(n,t,f);for(var e=0;e<i.length;e+=1)i[e].m(n,f);x(n,o,f),c=!0},p:function(n,c){if(n[0]>0?r?(r.p(n,c),1&c[0]&&z(r,1)):((r=dn(n)).c(),z(r,1),r.m(t.parentNode,t)):r&&(I(),B(r,1,1,(function(){r=null})),R()),6209&c[0]){var e;for(f=n[11],e=0;e<f.length;e+=1){var a=en(n,f,e);i[e]?(i[e].p(a,c),z(i[e],1)):(i[e]=Cn(a),i[e].c(),z(i[e],1),i[e].m(o.parentNode,o))}for(I(),e=f.length;e<i.length;e+=1)u(e);R()}},i:function(n){if(!c){z(r);for(var t=0;t<f.length;t+=1)z(i[t]);c=!0}},o:function(n){B(r),i=i.filter(Boolean);for(var t=0;t<i.length;t+=1)B(i[t]);c=!1},d:function(n){r&&r.d(n),n&&v(t),T(i,n),n&&v(o)}}}function In(n){var t,o,c,r;return c=new P({props:{$$slots:{default:[En]},$$scope:{ctx:n}}}),{c:function(){t=$("div"),o=$("div"),s(c.$$.fragment),this.h()},l:function(n){t=m(n,"DIV",{class:!0});var r=p(t);o=m(r,"DIV",{class:!0});var f=p(o);d(c.$$.fragment,f),f.forEach(v),r.forEach(v),this.h()},h:function(){h(o,"class","card-container svelte-1tflwcz"),h(t,"class","main-content svelte-1tflwcz")},m:function(n,f){x(n,t,f),y(t,o),w(c,o,null),r=!0},p:function(n,t){var o={};625&t[0]|2&t[1]&&(o.$$scope={dirty:t,ctx:n}),c.$set(o)},i:function(n){r||(z(c.$$.fragment,n),r=!0)},o:function(n){B(c.$$.fragment,n),r=!1},d:function(n){n&&v(t),j(c)}}}function Rn(n){var t;return{c:function(){t=V(n[3])},l:function(o){t=_(o,n[3])},m:function(n,o){x(n,t,o)},p:function(n,o){8&o[0]&&M(t,n[3])},d:function(n){n&&v(t)}}}function Dn(n){var t;return{c:function(){t=V("close")},l:function(n){t=_(n,"close")},m:function(n,o){x(n,t,o)},d:function(n){n&&v(t)}}}function Tn(n){var t,o;return t=new cn({props:{class:"material-icons",title:"Dismiss",$$slots:{default:[Dn]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,o){var c={};2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function Nn(n){var t,o,c,r;return t=new J({props:{$$slots:{default:[Rn]},$$scope:{ctx:n}}}),c=new Z({props:{$$slots:{default:[Tn]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment),o=l(),s(c.$$.fragment)},l:function(n){d(t.$$.fragment,n),o=g(n),d(c.$$.fragment,n)},m:function(n,f){w(t,n,f),x(n,o,f),w(c,n,f),r=!0},p:function(n,o){var r={};8&o[0]|2&o[1]&&(r.$$scope={dirty:o,ctx:n}),t.$set(r);var f={};2&o[1]&&(f.$$scope={dirty:o,ctx:n}),c.$set(f)},i:function(n){r||(z(t.$$.fragment,n),z(c.$$.fragment,n),r=!0)},o:function(n){B(t.$$.fragment,n),B(c.$$.fragment,n),r=!1},d:function(n){j(t,n),n&&v(o),j(c,n)}}}function Sn(n){var t;return{c:function(){t=V("🎉ขอแสดงความยินดีด้วย🎉")},l:function(n){t=_(n,"🎉ขอแสดงความยินดีด้วย🎉")},m:function(n,o){x(n,t,o)},d:function(n){n&&v(t)}}}function Vn(n){var t,o,c,r,f,i,e;return{c:function(){t=$("div"),o=V("คุณใช้เวลาทั้งสิ้น "),c=V(n[8]),r=l(),f=$("br"),i=$("br"),e=V("\r\n\t\t\tคุณสามารถเล่นต่อด่าน 2 ได้เลย")},l:function(u){t=m(u,"DIV",{});var a=p(t);o=_(a,"คุณใช้เวลาทั้งสิ้น "),c=_(a,n[8]),r=g(a),f=m(a,"BR",{}),i=m(a,"BR",{}),e=_(a,"\r\n\t\t\tคุณสามารถเล่นต่อด่าน 2 ได้เลย"),a.forEach(v)},m:function(n,u){x(n,t,u),y(t,o),y(t,c),y(t,r),y(t,f),y(t,i),y(t,e)},p:function(n,t){256&t[0]&&M(c,n[8])},d:function(n){n&&v(t)}}}function _n(n){var t;return{c:function(){t=V("ปิด")},l:function(n){t=_(n,"ปิด")},m:function(n,o){x(n,t,o)},d:function(n){n&&v(t)}}}function Mn(n){var t,o;return(t=new Y({props:{$$slots:{default:[_n]},$$scope:{ctx:n}}})).$on("click",n[21]),{c:function(){s(t.$$.fragment)},l:function(n){d(t.$$.fragment,n)},m:function(n,c){w(t,n,c),o=!0},p:function(n,o){var c={};2&o[1]&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(z(t.$$.fragment,n),o=!0)},o:function(n){B(t.$$.fragment,n),o=!1},d:function(n){j(t,n)}}}function Gn(n){var t,o,c,r,f,i;return t=new F({props:{id:"simple-title",$$slots:{default:[Sn]},$$scope:{ctx:n}}}),c=new O({props:{id:"simple-content",$$slots:{default:[Vn]},$$scope:{ctx:n}}}),f=new Z({props:{$$slots:{default:[Mn]},$$scope:{ctx:n}}}),{c:function(){s(t.$$.fragment),o=l(),s(c.$$.fragment),r=l(),s(f.$$.fragment)},l:function(n){d(t.$$.fragment,n),o=g(n),d(c.$$.fragment,n),r=g(n),d(f.$$.fragment,n)},m:function(n,e){w(t,n,e),x(n,o,e),w(c,n,e),x(n,r,e),w(f,n,e),i=!0},p:function(n,o){var r={};2&o[1]&&(r.$$scope={dirty:o,ctx:n}),t.$set(r);var i={};256&o[0]|2&o[1]&&(i.$$scope={dirty:o,ctx:n}),c.$set(i);var e={};2&o[0]|2&o[1]&&(e.$$scope={dirty:o,ctx:n}),f.$set(e)},i:function(n){i||(z(t.$$.fragment,n),z(c.$$.fragment,n),z(f.$$.fragment,n),i=!0)},o:function(n){B(t.$$.fragment,n),B(c.$$.fragment,n),B(f.$$.fragment,n),i=!1},d:function(n){j(t,n),n&&v(o),j(c,n),n&&v(r),j(f,n)}}}function Ln(n){var t,o,c,r,f,i,e,k,A,C,E,I,R;function D(t){n[22](t)}o=new Q({}),f=new L({props:{$$slots:{default:[pn]},$$scope:{ctx:n}}}),e=new q({props:{class:"app-content",$$slots:{default:[In]},$$scope:{ctx:n}}}),A=new on({props:{$$slots:{default:[Nn]},$$scope:{ctx:n}}}),n[20](A);var T={"aria-labelledby":"simple-title","aria-describedby":"simple-content",scrimClickAction:"",escapeKeyAction:"",$$slots:{default:[Gn]},$$scope:{ctx:n}};return void 0!==n[1]&&(T.open=n[1]),E=new H({props:T}),u.push((function(){return a(E,"open",D)})),{c:function(){t=$("div"),s(o.$$.fragment),c=l(),r=$("div"),s(f.$$.fragment),i=l(),s(e.$$.fragment),k=l(),s(A.$$.fragment),C=l(),s(E.$$.fragment),this.h()},l:function(n){t=m(n,"DIV",{class:!0});var u=p(t);d(o.$$.fragment,u),c=g(u),r=m(u,"DIV",{class:!0});var a=p(r);d(f.$$.fragment,a),i=g(a),d(e.$$.fragment,a),a.forEach(v),u.forEach(v),k=g(n),d(A.$$.fragment,n),C=g(n),d(E.$$.fragment,n),this.h()},h:function(){h(r,"class","drawer-container svelte-1tflwcz"),h(t,"class","main")},m:function(n,u){x(n,t,u),w(o,t,null),y(t,c),y(t,r),w(f,r,null),y(r,i),w(e,r,null),x(n,k,u),w(A,n,u),x(n,C,u),w(E,n,u),R=!0},p:function(n,t){var o={};129&t[0]|2&t[1]&&(o.$$scope={dirty:t,ctx:n}),f.$set(o);var c={};625&t[0]|2&t[1]&&(c.$$scope={dirty:t,ctx:n}),e.$set(c);var r={};8&t[0]|2&t[1]&&(r.$$scope={dirty:t,ctx:n}),A.$set(r);var i={};258&t[0]|2&t[1]&&(i.$$scope={dirty:t,ctx:n}),!I&&2&t[0]&&(I=!0,i.open=n[1],b((function(){return I=!1}))),E.$set(i)},i:function(n){R||(z(o.$$.fragment,n),z(f.$$.fragment,n),z(e.$$.fragment,n),z(A.$$.fragment,n),z(E.$$.fragment,n),R=!0)},o:function(n){B(o.$$.fragment,n),B(f.$$.fragment,n),B(e.$$.fragment,n),B(A.$$.fragment,n),B(E.$$.fragment,n),R=!1},d:function(c){c&&v(t),j(o),j(f),j(e),c&&v(k),n[20](null),j(A,c),c&&v(C),j(E,c)}}}function qn(n,t,o){var c,r,f;k(n,X,(function(n){return o(24,r=n)})),k(n,nn,(function(n){return o(25,f=n)}));var i,e=!1,a="",$=[!1,!1,!1,!1,!1,!1],s=[" "," "," "," "," "," "];X.useLocalStorage(),$=r.round1answers.map((function(n){return""!==n})),s=r.round1answers;var l=0,m=0,p=[0,1,2,3,4,5].map((function(n){return"./round1/puzzleicon".concat(n+1,".png")})),d=[0,1,2,3,4].map((function(n){return"ปริศนาข้อที่ ".concat(n+1)}));d=["วิธีเล่น"].concat(A(d),["ปริศนาข้อสุดท้าย"]);var g=0,v="";function h(n){var t={round:0,id:n,answer:s[n]},c=rn(t);c.isCorrect&&(o(5,s[n]=s[n].trim().toUpperCase(),s),C(X,r.round1answers[n]=s[n],r),o(4,$[n]=!0,$),c.isFinished&&(o(1,e=!0),g=f.getTime()-r.timeStarted,o(8,v="".concat(Math.floor(g/6e4)," นาที ").concat(Math.floor(g%6e4/1e3)," วินาที")))),o(3,a=c.message),i.open()}function x(n){o(0,l=n),o(6,m=0)}return n.$$.update=function(){1&n.$$.dirty[0]&&o(9,c=l-1)},[l,e,i,a,$,s,m,d,v,c,p,["วิธีหาข้อมูล","วิธีแก้ปริศนา","วิธีอ่านคำตอบ"],[["<ul> <li>หาคำใบ้ในงาน Thailand Board Game Show 2021 เท่านั้น ไม่ต้อง Google หาข้อมูล</li>\n\t\t\t\t\t<li>ใช้ตารางตัวอักษร 5x5 (ด้านบน) สำหรับปริศนาทั้ง 5 ข้อ</li> </ul>","<ul> <li>วิเคราะห์ข้อมูลที่ได้มา ว่าจะแก้ปริศนาอย่างไร</li> <li>ถ้าแก้ปริศนาถูก จะได้ตำแหน่งในตาราง 5 ช่อง เป็นตัวอักษร 5 ตัว</li></ul>","<ul> <li>อ่านตัวอักษร 5 ตัวนั้น บนลงล่าง หรือซ้ายไปขวา อย่างใดอย่างหนึ่ง จะได้คำตอบของข้อนั้น </li> <li> นำคำตอบไปใส่ในช่องด้านบน และกด 'ส่งคำตอบ'</li></ul>"],["หากลุ่มปลาที่ซ่อนอยู่ในทะเล ทั้งหมด 5 กลุ่ม แต่ละกลุ่มจะมี 1 ช่องที่มีทั้งปลาทั้งไฟ","นำกลุ่มปลาทั้ง 5 กลุ่ม มาวางในตารางขนาด 5x5 ให้ทับทุกช่อง (เหมือน Tetris) โดยไม่ซ้อนทับกัน และไม่ต้องหมุน","อ่านตัวอักษรที่ตำแหน่งตรงกับไฟ จะได้ตัวอักษร 5 ตัว เรียงจากบนลงล่าง"],["หาช่องลับที่ซ่อนบนแผนที่ ใน Brick Zone ที่เมื่อเดินไปเหยียบแล้วจะมีตัวเลข 0,1,2 และตัว 💣? โผล่ขี้นมา","นำตัวเลขมาใส่ในตารางขนาด 5x5 จะได้ตารางเกม Minesweeper โดยให้หาว่าระเบิด 5 ลูกนั้น ซ่อนอยู่ในช่อง ? ช่องไหน","อ่านตำแหน่งระเบิด จะได้ตัวอักษร 5 ตัว เรียงจากซ้ายไปขวา"],["หากลุ่มใบเฟิร์น 5 กลุ่ม แต่ละกลุ่มจะมีใบเฟิร์นหลายช่องวางเรียงกัน",'แต่ละกลุ่ม จะมีช่องนึงที่ยืนทับแล้วมีอีโมจิขึ้นมา ให้หาว่าแทนความหมายอะไรในภาษาอังกฤษ (เช่น ❤️=HEART) และหาว่าอยู่ส่วนใดของตาราง โดยให้อ่านเป็นเส้นตรงจากด้านหนึ่งไปอีกด้านนึง<br><img src="./round1/puzzle3hint.png"/>',"อ่านตำแหน่งในช่องที่มีอีโมจิ จะได้ตัวอักษร 5 ตัว อ่านเรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย"],["หาวิทยุ 5 ตัว",'เมื่อยืนใกล้วิทยุ จะได้คำใบ้ (ตัวอย่าง "แถวที่ 1: มีชู้ = #") โดย # หมายถึงตัวเลข',"อ่านตัวอักษรในแถวที่ระบุ และตำแหน่งที่ตรงกับตัวเลข จะได้ตัวอักษร 5 ตัว เรียงบนลงล่าง จะได้คำตอบสุดท้าย"],["หาดาบทั้งหมด 5 คู่ ที่แต่ละคู่จะชี้เข้าหากัน",'วางดาบแต่ละคู่ที่ขอบตาราง 5x5 ด้านนอก ดาบจะบอกพิกัดของตัวอักษรในตาราง 5x5 <br><img src="./round1/puzzle5hint.png"/>',"อ่านตัวอักษรในพิกัดทั้ง 5 ช่อง จะได้ตัวอักษร 5 ตัว อ่านเรียงบนลงล่าง"],["นำคำตอบที่ได้จากข้อ 1-5 มาอ่านเรียงกัน จะได้เป็นคำสั่ง",'ความหมายคือ "ดูใต้ช่องที่ถูกใช้สองครั้ง" โดยให้ดูว่าคำตอบในข้อ 1-5 ใช้ช่องไหนไปบ้าง',"อ่านตัวอักษรตามคำสั่ง จะได้ 5 ตัว เรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย"]],h,function(n){13===n.keyCode&&h(s.indexOf(n.target.value))},x,function(n){return x(n)},function(t){n.$$.not_equal(s[c],t)&&(s[c]=t,o(5,s))},function(){return h(c)},function(n){return o(6,m+=m<=n?1:0)},function(n){u[n?"unshift":"push"]((function(){o(2,i=n)}))},function(){return o(1,e=!1)},function(n){o(1,e=n)}]}var Hn=function(t){n(u,i);var o=fn(u);function u(n){var t;return c(this,u),t=o.call(this),r(f(t),n,qn,Ln,e,{},null,[-1,-1]),t}return u}();export{Hn as default};
