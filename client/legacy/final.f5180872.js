import{_ as n,a as t,b as o,c,i as r,d as i,S as f,s as u,g as e,f as a,e as $,n as s,m as l,h as m,j as p,l as d,p as v,u as g,q as h,v as x,x as y,Z as w,w as b,y as z,a8 as k,ai as j,a9 as B,Y as C,az as P,aG as A,U as M,a6 as R,o as S,aq as _,r as q,a7 as E,t as T,k as D,W as I,aa as N,ab as G,ac as L,ad as O}from"./client.fcdc7ed7.js";import{s as U,T as F,c as H}from"./save.0620efa7.js";import{C as V}from"./CommonLabel.2c9e06c9.js";import{B as W}from"./Button.383462c8.js";import{S as Y,A as Z,I as J}from"./Actions.e1d00186.js";import{l as K}from"./index.38a7f316.js";function Q(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,i=t(n);if(c){var f=t(this).constructor;r=Reflect.construct(i,arguments,f)}else r=i.apply(this,arguments);return o(this,r)}}function X(n,t,o){var c=n.slice();return c[23]=t[o],c[24]=t,c[25]=o,c}function nn(n){var t,o;return{c:function(){t=new G,o=I(),this.h()},l:function(n){t=L(n),o=I(),this.h()},h:function(){t.a=o},m:function(c,r){t.m(n[4],c,r),h(c,o,r)},p:function(n,o){16&o&&t.p(n[4])},d:function(n){n&&d(o),n&&t.d()}}}function tn(n){var t;return{c:function(){t=T("close")},l:function(n){t=D(n,"close")},m:function(n,o){h(n,t,o)},d:function(n){n&&d(t)}}}function on(n){var t,o;return t=new J({props:{class:"material-icons",title:"Dismiss",$$slots:{default:[tn]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108864&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function cn(n){var t,o,c,r;return t=new V({props:{$$slots:{default:[nn]},$$scope:{ctx:n}}}),c=new Z({props:{$$slots:{default:[on]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment),o=a(),e(c.$$.fragment)},l:function(n){s(t.$$.fragment,n),o=l(n),s(c.$$.fragment,n)},m:function(n,i){g(t,n,i),h(n,o,i),g(c,n,i),r=!0},p:function(n,o){var r={};67108880&o&&(r.$$scope={dirty:o,ctx:n}),t.$set(r);var i={};67108864&o&&(i.$$scope={dirty:o,ctx:n}),c.$set(i)},i:function(n){r||(b(t.$$.fragment,n),b(c.$$.fragment,n),r=!0)},o:function(n){y(t.$$.fragment,n),y(c.$$.fragment,n),r=!1},d:function(n){z(t,n),n&&d(o),z(c,n)}}}function rn(n){var t,o,c,r,i,f,u,x,k,j,B,P;function A(t){n[18](t)}var T={variant:"outlined",disabled:n[0][4]};void 0!==n[5][4]&&(T.value=n[5][4]),r=new F({props:T}),M.push((function(){return R(r,"value",A)})),r.$on("keydown",n[9]);var D=[en,un],I=[];function N(n,t){return n[0][4]?1:0}u=N(n),x=I[u]=D[u](n);var G=[pn,mn],L=[];function O(n,t){return n[1]<=0?0:1}return j=O(n),B=L[j]=G[j](n),{c:function(){t=$("img"),o=a(),c=$("span"),e(r.$$.fragment),f=a(),x.c(),k=a(),B.c(),this.h()},l:function(n){t=m(n,"IMG",{src:!0,style:!0,alt:!0}),o=l(n),c=m(n,"SPAN",{});var i=p(c);s(r.$$.fragment,i),f=l(i),x.l(i),k=l(i),B.l(i),i.forEach(d),this.h()},h:function(){S(t.src,"/enter/final.png")||v(t,"src","/enter/final.png"),_(t,"max-height","70vh"),_(t,"width","auto"),v(t,"alt","final puzzle")},m:function(n,i){h(n,t,i),h(n,o,i),h(n,c,i),g(r,c,null),q(c,f),I[u].m(c,null),q(c,k),L[j].m(c,null),P=!0},p:function(n,t){var o={};1&t&&(o.disabled=n[0][4]),!i&&32&t&&(i=!0,o.value=n[5][4],E((function(){return i=!1}))),r.$set(o);var f=u;(u=N(n))===f?I[u].p(n,t):(C(),y(I[f],1,1,(function(){I[f]=null})),w(),(x=I[u])?x.p(n,t):(x=I[u]=D[u](n)).c(),b(x,1),x.m(c,k));var e=j;(j=O(n))===e?L[j].p(n,t):(C(),y(L[e],1,1,(function(){L[e]=null})),w(),(B=L[j])?B.p(n,t):(B=L[j]=G[j](n)).c(),b(B,1),B.m(c,null))},i:function(n){P||(b(r.$$.fragment,n),b(x),b(B),P=!0)},o:function(n){y(r.$$.fragment,n),y(x),y(B),P=!1},d:function(n){n&&d(t),n&&d(o),n&&d(c),z(r),I[u].d(),L[j].d()}}}function fn(n){for(var t,o,c,r,i,f=[0,1,2,3],u=[],e=0;e<4;e+=1)u[e]=jn(X(n,f,e));var s=function(n){return y(u[n],1,1,(function(){u[n]=null}))};return{c:function(){t=$("h2"),o=T("ตอบปริศนาในห้องนี้ทั้ง 4 ข้อให้ครบ แล้วปริศนาข้อสุดท้ายจะปรากฎขึ้นมา"),c=a();for(var n=0;n<4;n+=1)u[n].c();r=I()},l:function(n){t=m(n,"H2",{});var i=p(t);o=D(i,"ตอบปริศนาในห้องนี้ทั้ง 4 ข้อให้ครบ แล้วปริศนาข้อสุดท้ายจะปรากฎขึ้นมา"),i.forEach(d),c=l(n);for(var f=0;f<4;f+=1)u[f].l(n);r=I()},m:function(n,f){h(n,t,f),q(t,o),h(n,c,f);for(var e=0;e<4;e+=1)u[e].m(n,f);h(n,r,f),i=!0},p:function(n,t){if(929&t){var o;for(f=[0,1,2,3],o=0;o<4;o+=1){var c=X(n,f,o);u[o]?(u[o].p(c,t),b(u[o],1)):(u[o]=jn(c),u[o].c(),b(u[o],1),u[o].m(r.parentNode,r))}for(C(),o=4;o<4;o+=1)s(o);w()}},i:function(n){if(!i){for(var t=0;t<4;t+=1)b(u[t]);i=!0}},o:function(n){u=u.filter(Boolean);for(var t=0;t<4;t+=1)y(u[t]);i=!1},d:function(n){n&&d(t),n&&d(c),N(u,n),n&&d(r)}}}function un(n){var t,o;return t=new W({props:{variant:"raised",disabled:!0,$$slots:{default:[$n]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108864&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function en(n){var t,o;return(t=new W({props:{variant:"raised",$$slots:{default:[ln]},$$scope:{ctx:n}}})).$on("click",n[19]),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108864&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function an(n){var t;return{c:function(){t=T("ถูกต้อง")},l:function(n){t=D(n,"ถูกต้อง")},m:function(n,o){h(n,t,o)},d:function(n){n&&d(t)}}}function $n(n){var t,o;return t=new V({props:{$$slots:{default:[an]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108864&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function sn(n){var t;return{c:function(){t=T("ส่งคำตอบ")},l:function(n){t=D(n,"ส่งคำตอบ")},m:function(n,o){h(n,t,o)},d:function(n){n&&d(t)}}}function ln(n){var t,o;return t=new V({props:{$$slots:{default:[sn]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108864&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function mn(n){var t,o;return t=new W({props:{disabled:!0,$$slots:{default:[vn]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108928&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function pn(n){var t,o;return(t=new W({props:{variant:"raised",color:"secondary",$$slots:{default:[hn]},$$scope:{ctx:n}}})).$on("click",n[20]),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108864&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function dn(n){var t,o;return{c:function(){t=T("คำใบ้จะปรากฏใน "),o=T(n[6])},l:function(c){t=D(c,"คำใบ้จะปรากฏใน "),o=D(c,n[6])},m:function(n,c){h(n,t,c),h(n,o,c)},p:function(n,t){64&t&&O(o,n[6])},d:function(n){n&&d(t),n&&d(o)}}}function vn(n){var t,o;return t=new V({props:{$$slots:{default:[dn]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108928&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function gn(n){var t;return{c:function(){t=T("ขอคำใบ้")},l:function(n){t=D(n,"ขอคำใบ้")},m:function(n,o){h(n,t,o)},d:function(n){n&&d(t)}}}function hn(n){var t,o;return t=new V({props:{$$slots:{default:[gn]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108864&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function xn(n){var t,o;return(t=new W({props:{variant:"raised",$$slots:{default:[bn]},$$scope:{ctx:n}}})).$on("click",(function(){return n[17](n[23])})),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(o,c){n=o;var r={};67108864&c&&(r.$$scope={dirty:c,ctx:n}),t.$set(r)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function yn(n){var t,o;return t=new W({props:{variant:"outlined",disabled:!0,$$slots:{default:[kn]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108864&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function wn(n){var t;return{c:function(){t=T("ยังไม่ตอบ")},l:function(n){t=D(n,"ยังไม่ตอบ")},m:function(n,o){h(n,t,o)},d:function(n){n&&d(t)}}}function bn(n){var t,o;return t=new V({props:{$$slots:{default:[wn]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108864&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function zn(n){var t;return{c:function(){t=T("ตอบแล้ว")},l:function(n){t=D(n,"ตอบแล้ว")},m:function(n,o){h(n,t,o)},d:function(n){n&&d(t)}}}function kn(n){var t,o;return t=new V({props:{$$slots:{default:[zn]},$$scope:{ctx:n}}}),{c:function(){e(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,c){g(t,n,c),o=!0},p:function(n,o){var c={};67108864&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){o||(b(t.$$.fragment,n),o=!0)},o:function(n){y(t.$$.fragment,n),o=!1},d:function(n){z(t,n)}}}function jn(n){var t,o,c,r,i,f,u,x,k,j,B,P=n[7][n[23]]+"";function A(t){n[16](t,n[23])}var S={variant:"outlined",disabled:n[0][n[23]]};void 0!==n[5][n[23]]&&(S.value=n[5][n[23]]),i=new F({props:S}),M.push((function(){return R(i,"value",A)})),i.$on("keydown",n[9]);var _=[yn,xn],I=[];function N(n,t){return n[0][n[23]]?0:1}return x=N(n),k=I[x]=_[x](n),{c:function(){t=$("span"),o=T("Puzzle "),c=T(P),r=a(),e(i.$$.fragment),u=a(),k.c(),j=a(),this.h()},l:function(n){t=m(n,"SPAN",{class:!0});var f=p(t);o=D(f,"Puzzle "),c=D(f,P),r=l(f),s(i.$$.fragment,f),u=l(f),k.l(f),j=l(f),f.forEach(d),this.h()},h:function(){v(t,"class","flex-row")},m:function(n,f){h(n,t,f),q(t,o),q(t,c),q(t,r),g(i,t,null),q(t,u),I[x].m(t,null),q(t,j),B=!0},p:function(o,c){n=o;var r={};1&c&&(r.disabled=n[0][n[23]]),!f&&32&c&&(f=!0,r.value=n[5][n[23]],E((function(){return f=!1}))),i.$set(r);var u=x;(x=N(n))===u?I[x].p(n,c):(C(),y(I[u],1,1,(function(){I[u]=null})),w(),(k=I[x])?k.p(n,c):(k=I[x]=_[x](n)).c(),b(k,1),k.m(t,j))},i:function(n){B||(b(i.$$.fragment,n),b(k),B=!0)},o:function(n){y(i.$$.fragment,n),y(k),B=!1},d:function(n){n&&d(t),z(i),I[x].d()}}}function Bn(n){var t,o,c,r,i,f;t=new Y({props:{$$slots:{default:[cn]},$$scope:{ctx:n}}}),n[15](t);var u=[fn,rn],k=[];function j(n,t){return n[2]<4?0:1}return r=j(n),i=k[r]=u[r](n),{c:function(){e(t.$$.fragment),o=a(),c=$("div"),i.c(),this.h()},l:function(n){s(t.$$.fragment,n),o=l(n),c=m(n,"DIV",{class:!0});var r=p(c);i.l(r),r.forEach(d),this.h()},h:function(){v(c,"class","main")},m:function(n,i){g(t,n,i),h(n,o,i),h(n,c,i),k[r].m(c,null),f=!0},p:function(n,o){var f=x(o,1)[0],e={};67108880&f&&(e.$$scope={dirty:f,ctx:n}),t.$set(e);var a=r;(r=j(n))===a?k[r].p(n,f):(C(),y(k[a],1,1,(function(){k[a]=null})),w(),(i=k[r])?i.p(n,f):(i=k[r]=u[r](n)).c(),b(i,1),i.m(c,null))},i:function(n){f||(b(t.$$.fragment,n),b(i),f=!0)},o:function(n){y(t.$$.fragment,n),y(i),f=!1},d:function(i){n[15](null),z(t,i),i&&d(o),i&&d(c),k[r].d()}}}function Cn(n,t,o){var c,r,i,f,u,e;k(n,U,(function(n){return o(13,u=n)})),k(n,H,(function(n){return o(14,e=n)}));var a,$=this&&this.__awaiter||function(n,t,o,c){return new(o||(o=Promise))((function(r,i){function f(n){try{e(c.next(n))}catch(n){i(n)}}function u(n){try{e(c.throw(n))}catch(n){i(n)}}function e(n){var t;n.done?r(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(f,u)}e((c=c.apply(n,t||[])).next())}))},s="",l=K(),m=[!1,!1,!1,!1,!1],p=["","","","",""],d=0;function v(n){var t={round:1,id:n,answer:p[n],alias:u.alias};l.emit("submit answer",t,(function(t){t.isCorrect&&(o(5,p[n]=p[n].trim().toUpperCase(),p),B(U,u.round2answers[n]=p[n],u),o(0,m[n]=!0,m),t.isFinished&&setTimeout((function(){A("/enter/".concat(p[n],"/"))}),2e3)),o(4,s=t.message),a.open()}))}function g(){o(4,s="คุณไขปริศนาด่านที่ 1 รอบ ๆ งานครบแล้วหรือยัง? <br> \n\t\t\tหากยัง คุณควรไปไขปริศนาให้ครบก่อน <br> \n\t\t\tจากนั้นลองดูในตาราง 5x5 ของด่านที่ 1 จะมีตำแหน่งของตัวอักษรที่ยังไม่ได้ถูกใช้อยู่ <br> ส่วนภาพปริศนาในข้อนี้ 1 ช่องเท่ากับอักษรภาษาอังกฤษ 1 ตัว <br> คุณผ่านมาแล้วทั้งนั้นแหละคุ้นเคยกันดีไม่ยากใช่ไหมล่ะ !!"),a.open()}j((function(){return $(void 0,void 0,void 0,P.mark((function n(){var t;return P.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return U.useLocalStorage(),t={round:1,answers:u.round2answers},l.emit("verify save",t,(function(n,t){o(0,m=n),o(5,p=t)})),n.next=5,fetch("./enter/puzzle1.png");case 5:case 6:case"end":return n.stop()}}),n)})))}));return n.$$.update=function(){1&n.$$.dirty&&o(2,c=m.filter((function(n){return n})).length),24580&n.$$.dirty&&(4!=c||u.round2time[4]&&0!==u.round2time[4]||(B(U,u.round2time[4]=e.getTime(),u),o(11,d=u.round2time[4]))),18432&n.$$.dirty&&o(1,r=Math.max(18e5-e.getTime()+d,0)),2&n.$$.dirty&&o(12,i=r<=0||0===Math.floor(r/6e4)?"":"".concat(Math.floor(r/6e4)," นาที")),4098&n.$$.dirty&&o(6,f=r<=0?"0":"".concat(i," ").concat(Math.floor(r%6e4/1e3)," วินาที"))},[m,r,c,a,s,p,f,["A","B","C","D"],v,function(n){13===n.keyCode&&v(p.indexOf(n.target.value))},g,d,i,u,e,function(n){M[n?"unshift":"push"]((function(){o(3,a=n)}))},function(t,c){n.$$.not_equal(p[c],t)&&(p[c]=t,o(5,p))},function(n){return v(n)},function(t){n.$$.not_equal(p[4],t)&&(p[4]=t,o(5,p))},function(){return v(4)},function(){return g()}]}var Pn=function(t){n(e,f);var o=Q(e);function e(n){var t;return c(this,e),t=o.call(this),r(i(t),n,Cn,Bn,u,{}),t}return e}();export{Pn as default};