import{_ as n,a as t,b as o,c as r,i as c,d as a,S as e,s as i,e as f,h as u,o as s,p as $,ar as l,q as m,ag as p,l as d,t as v,j as g,k as h,r as x,U as w,a6 as y,g as b,f as z,n as j,m as k,u as R,v as B,a7 as E,x as I,Z as M,w as T,y as A,a8 as S,aI as C,a9 as _,Y as N,aa as O,ab as P,W as L,aJ as D,ad as G,ae as J,af as U}from"./client.6fbd2a23.js";import{T as q,s as F,c as V}from"./save.6c957e28.js";import{R as W}from"./RatingButton.43f5d8e2.js";import{C as Y}from"./CommonLabel.0641cf1b.js";import{B as Z}from"./Button.0c83ba54.js";import{S as H,A as K,I as Q}from"./Actions.413c29bf.js";import{l as X}from"./index.d25c614e.js";function nn(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,a=t(n);if(r){var e=t(this).constructor;c=Reflect.construct(a,arguments,e)}else c=a.apply(this,arguments);return o(this,c)}}function tn(n){var t,o;return{c:function(){t=new G,o=L(),this.h()},l:function(n){t=J(n),o=L(),this.h()},h:function(){t.a=o},m:function(r,c){t.m(n[2],r,c),m(r,o,c)},p:function(n,o){4&o&&t.p(n[2])},d:function(n){n&&d(o),n&&t.d()}}}function on(n){var t;return{c:function(){t=v("close")},l:function(n){t=h(n,"close")},m:function(n,o){m(n,t,o)},d:function(n){n&&d(t)}}}function rn(n){var t,o;return t=new Q({props:{class:"material-icons",title:"Dismiss",$$slots:{default:[on]},$$scope:{ctx:n}}}),{c:function(){b(t.$$.fragment)},l:function(n){j(t.$$.fragment,n)},m:function(n,r){R(t,n,r),o=!0},p:function(n,o){var r={};134217728&o&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i:function(n){o||(T(t.$$.fragment,n),o=!0)},o:function(n){I(t.$$.fragment,n),o=!1},d:function(n){A(t,n)}}}function cn(n){var t,o,r,c;return t=new Y({props:{$$slots:{default:[tn]},$$scope:{ctx:n}}}),r=new K({props:{$$slots:{default:[rn]},$$scope:{ctx:n}}}),{c:function(){b(t.$$.fragment),o=z(),b(r.$$.fragment)},l:function(n){j(t.$$.fragment,n),o=k(n),j(r.$$.fragment,n)},m:function(n,a){R(t,n,a),m(n,o,a),R(r,n,a),c=!0},p:function(n,o){var c={};134217732&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c);var a={};134217728&o&&(a.$$scope={dirty:o,ctx:n}),r.$set(a)},i:function(n){c||(T(t.$$.fragment,n),T(r.$$.fragment,n),c=!0)},o:function(n){I(t.$$.fragment,n),I(r.$$.fragment,n),c=!1},d:function(n){A(t,n),n&&d(o),A(r,n)}}}function an(n){var t,o;return{c:function(){t=f("img"),this.h()},l:function(n){t=u(n,"IMG",{src:!0,style:!0,alt:!0}),this.h()},h:function(){s(t.src,o=n[10])||$(t,"src",o),l(t,"max-height","80vh"),$(t,"alt","puzzle")},m:function(n,o){m(n,t,o)},p:p,d:function(n){n&&d(t)}}}function en(n){var t,o,r,c,a,e;(t=new Z({props:{variant:"raised",$$slots:{default:[sn]},$$scope:{ctx:n}}})).$on("click",n[20]);var i=[ln,$n],f=[];function u(n,t){return n[0]<=0?0:1}return r=u(n),c=f[r]=i[r](n),{c:function(){b(t.$$.fragment),o=z(),c.c(),a=L()},l:function(n){j(t.$$.fragment,n),o=k(n),c.l(n),a=L()},m:function(n,c){R(t,n,c),m(n,o,c),f[r].m(n,c),m(n,a,c),e=!0},p:function(n,o){var e={};134217728&o&&(e.$$scope={dirty:o,ctx:n}),t.$set(e);var s=r;(r=u(n))===s?f[r].p(n,o):(N(),I(f[s],1,1,(function(){f[s]=null})),M(),(c=f[r])?c.p(n,o):(c=f[r]=i[r](n)).c(),T(c,1),c.m(a.parentNode,a))},i:function(n){e||(T(t.$$.fragment,n),T(c),e=!0)},o:function(n){I(t.$$.fragment,n),I(c),e=!1},d:function(n){A(t,n),n&&d(o),f[r].d(n),n&&d(a)}}}function fn(n){var t,o,r,c;t=new Z({props:{variant:"outlined",disabled:!0,$$slots:{default:[hn]},$$scope:{ctx:n}}});var a=!n[7].round2rate[n[9]]&&xn(n);return{c:function(){b(t.$$.fragment),o=z(),a&&a.c(),r=L()},l:function(n){j(t.$$.fragment,n),o=k(n),a&&a.l(n),r=L()},m:function(n,e){R(t,n,e),m(n,o,e),a&&a.m(n,e),m(n,r,e),c=!0},p:function(n,o){var c={};134217728&o&&(c.$$scope={dirty:o,ctx:n}),t.$set(c),n[7].round2rate[n[9]]?a&&(N(),I(a,1,1,(function(){a=null})),M()):a?(a.p(n,o),128&o&&T(a,1)):((a=xn(n)).c(),T(a,1),a.m(r.parentNode,r))},i:function(n){c||(T(t.$$.fragment,n),T(a),c=!0)},o:function(n){I(t.$$.fragment,n),I(a),c=!1},d:function(n){A(t,n),n&&d(o),a&&a.d(n),n&&d(r)}}}function un(n){var t;return{c:function(){t=v("ส่งคำตอบ")},l:function(n){t=h(n,"ส่งคำตอบ")},m:function(n,o){m(n,t,o)},d:function(n){n&&d(t)}}}function sn(n){var t,o;return t=new Y({props:{$$slots:{default:[un]},$$scope:{ctx:n}}}),{c:function(){b(t.$$.fragment)},l:function(n){j(t.$$.fragment,n)},m:function(n,r){R(t,n,r),o=!0},p:function(n,o){var r={};134217728&o&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i:function(n){o||(T(t.$$.fragment,n),o=!0)},o:function(n){I(t.$$.fragment,n),o=!1},d:function(n){A(t,n)}}}function $n(n){var t,o;return t=new Z({props:{disabled:!0,$$slots:{default:[pn]},$$scope:{ctx:n}}}),{c:function(){b(t.$$.fragment)},l:function(n){j(t.$$.fragment,n)},m:function(n,r){R(t,n,r),o=!0},p:function(n,o){var r={};134217792&o&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i:function(n){o||(T(t.$$.fragment,n),o=!0)},o:function(n){I(t.$$.fragment,n),o=!1},d:function(n){A(t,n)}}}function ln(n){var t,o;return(t=new Z({props:{variant:"raised",color:"secondary",$$slots:{default:[vn]},$$scope:{ctx:n}}})).$on("click",n[21]),{c:function(){b(t.$$.fragment)},l:function(n){j(t.$$.fragment,n)},m:function(n,r){R(t,n,r),o=!0},p:function(n,o){var r={};134217728&o&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i:function(n){o||(T(t.$$.fragment,n),o=!0)},o:function(n){I(t.$$.fragment,n),o=!1},d:function(n){A(t,n)}}}function mn(n){var t,o;return{c:function(){t=v("คำใบ้จะปรากฏใน "),o=v(n[6])},l:function(r){t=h(r,"คำใบ้จะปรากฏใน "),o=h(r,n[6])},m:function(n,r){m(n,t,r),m(n,o,r)},p:function(n,t){64&t&&U(o,n[6])},d:function(n){n&&d(t),n&&d(o)}}}function pn(n){var t,o;return t=new Y({props:{$$slots:{default:[mn]},$$scope:{ctx:n}}}),{c:function(){b(t.$$.fragment)},l:function(n){j(t.$$.fragment,n)},m:function(n,r){R(t,n,r),o=!0},p:function(n,o){var r={};134217792&o&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i:function(n){o||(T(t.$$.fragment,n),o=!0)},o:function(n){I(t.$$.fragment,n),o=!1},d:function(n){A(t,n)}}}function dn(n){var t;return{c:function(){t=v("ขอคำใบ้")},l:function(n){t=h(n,"ขอคำใบ้")},m:function(n,o){m(n,t,o)},d:function(n){n&&d(t)}}}function vn(n){var t,o;return t=new Y({props:{$$slots:{default:[dn]},$$scope:{ctx:n}}}),{c:function(){b(t.$$.fragment)},l:function(n){j(t.$$.fragment,n)},m:function(n,r){R(t,n,r),o=!0},p:function(n,o){var r={};134217728&o&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i:function(n){o||(T(t.$$.fragment,n),o=!0)},o:function(n){I(t.$$.fragment,n),o=!1},d:function(n){A(t,n)}}}function gn(n){var t;return{c:function(){t=v("ถูกต้อง!")},l:function(n){t=h(n,"ถูกต้อง!")},m:function(n,o){m(n,t,o)},d:function(n){n&&d(t)}}}function hn(n){var t,o;return t=new Y({props:{$$slots:{default:[gn]},$$scope:{ctx:n}}}),{c:function(){b(t.$$.fragment)},l:function(n){j(t.$$.fragment,n)},m:function(n,r){R(t,n,r),o=!0},p:function(n,o){var r={};134217728&o&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i:function(n){o||(T(t.$$.fragment,n),o=!0)},o:function(n){I(t.$$.fragment,n),o=!1},d:function(n){A(t,n)}}}function xn(n){var t,o;return(t=new W({props:{anchor:"BOTTOM_LEFT",puzzleId:n[9],round:1}})).$on("submitRates",n[12]),{c:function(){b(t.$$.fragment)},l:function(n){j(t.$$.fragment,n)},m:function(n,r){R(t,n,r),o=!0},p:p,i:function(n){o||(T(t.$$.fragment,n),o=!0)},o:function(n){I(t.$$.fragment,n),o=!1},d:function(n){A(t,n)}}}function wn(n){var t,o,r,c,a,e,i,s,l,p,S,C,_,O;t=new H({props:{$$slots:{default:[cn]},$$scope:{ctx:n}}}),n[18](t);var P,L,D=n[5]&&an(n),G=2===n[9]&&{c:function(){P=f("a"),L=v("คลิกที่นี่เพื่อเล่นบนเว็บ"),this.h()},l:function(n){P=u(n,"A",{href:!0,target:!0});var t=g(P);L=h(t,"คลิกที่นี่เพื่อเล่นบนเว็บ"),t.forEach(d),this.h()},h:function(){$(P,"href","https://puzz.link/p?numlin/9/9/h1j32j4l5v67o2g4l7r3j165i"),$(P,"target","_blank")},m:function(n,t){m(n,P,t),x(P,L)},d:function(n){n&&d(P)}};function J(t){n[19](t)}var U={variant:"outlined",disabled:n[3]};void 0!==n[4]&&(U.value=n[4]),i=new q({props:U}),w.push((function(){return y(i,"value",J)})),i.$on("keydown",n[14]);var F=[fn,en],V=[];function W(n,t){return n[3]?0:1}return p=W(n),S=V[p]=F[p](n),{c:function(){b(t.$$.fragment),o=z(),r=f("div"),D&&D.c(),c=z(),a=f("span"),G&&G.c(),e=z(),b(i.$$.fragment),l=z(),S.c(),C=z(),_=f("span"),this.h()},l:function(n){j(t.$$.fragment,n),o=k(n),r=u(n,"DIV",{class:!0});var f=g(r);D&&D.l(f),c=k(f),a=u(f,"SPAN",{class:!0});var s=g(a);G&&G.l(s),e=k(s),j(i.$$.fragment,s),l=k(s),S.l(s),C=k(s),_=u(s,"SPAN",{}),g(_).forEach(d),s.forEach(d),f.forEach(d),this.h()},h:function(){$(a,"class","flex-row"),$(r,"class","main")},m:function(n,f){R(t,n,f),m(n,o,f),m(n,r,f),D&&D.m(r,null),x(r,c),x(r,a),G&&G.m(a,null),x(a,e),R(i,a,null),x(a,l),V[p].m(a,null),x(a,C),x(a,_),O=!0},p:function(n,o){var e=B(o,1)[0],f={};134217732&e&&(f.$$scope={dirty:e,ctx:n}),t.$set(f),n[5]?D?D.p(n,e):((D=an(n)).c(),D.m(r,c)):D&&(D.d(1),D=null);var u={};8&e&&(u.disabled=n[3]),!s&&16&e&&(s=!0,u.value=n[4],E((function(){return s=!1}))),i.$set(u);var $=p;(p=W(n))===$?V[p].p(n,e):(N(),I(V[$],1,1,(function(){V[$]=null})),M(),(S=V[p])?S.p(n,e):(S=V[p]=F[p](n)).c(),T(S,1),S.m(a,C))},i:function(n){O||(T(t.$$.fragment,n),T(i.$$.fragment,n),T(S),O=!0)},o:function(n){I(t.$$.fragment,n),I(i.$$.fragment,n),I(S),O=!1},d:function(c){n[18](null),A(t,c),c&&d(o),c&&d(r),D&&D.d(),G&&G.d(),A(i),V[p].d()}}}function yn(n,t,o){var r,c,a,e,i,f;S(n,F,(function(n){return o(7,e=n)})),S(n,V,(function(n){return o(17,i=n)}));var u,s=this&&this.__awaiter||function(n,t,o,r){return new(o||(o=Promise))((function(c,a){function e(n){try{f(r.next(n))}catch(n){a(n)}}function i(n){try{f(r.throw(n))}catch(n){a(n)}}function f(n){var t;n.done?c(n.value):(t=n.value,t instanceof o?t:new o((function(n){n(t)}))).then(e,i)}f((r=r.apply(n,t||[])).next())}))},$="",l=X(),m=C().page;S(n,m,(function(n){return o(22,f=n)}));var p=f.params.id,d=p-1,v=!1,g="",h="./enter/puzzle".concat(d+1,".png"),x=!1,y=0;function b(){var n={round:1,id:d,answer:g,alias:e.alias};l.emit("submit answer",n,(function(n){n.isCorrect&&(o(4,g=g.trim().toUpperCase()),P(F,e.round2answers[d]=g,e),o(3,v=!0)),o(2,$=n.message),u.open()}))}function z(){o(2,$=["ภาพที่เห็นเป็นส่วนหนึ่งของในงาน Thailand Board Game Show 2021 <br> \n\t\t\tคุ้น ๆ กันไหมว่ามันอยู่ตรงไหนบ้าง? <br> \n\t\t\tเติมคำในช่องว่าง แล้วลองเทียบตัวอักษรกับ EMOJI ดูสิ","4 อักษรงั้นเหรอ ทำไมเห็นแค่ 2 ล่ะ ?? <br> \n\t\t\tอักษร 1 ตัว ค่อนข้างต่างไปจากพวกหน่อย <br>\n\t\t\tอักษรอีก 1 ตัวต้องมองทั้งกระดานถึงจะเห็น","เลข 4 ลากผ่านตัว E <br> \n\t\t\tแต่เลข 2 ไม่ได้ลากผ่านตัว A",'เพลงนี้เป็นเพลงที่คุณคุ้นเคยดีตอนเริ่มท่อง "อักษรภาษาอังกฤษ" <br> \n\t\t\tเทียบเนื้อเพลงกับตัวโน้ตดูสิ <br>\n\t\t\t(ลองดีดเปียโนที่อยู่ข้าง ๆ อาจจะช่วยให้นึกชื่อเพลงออกได้นะ)',"คุณไขปริศนาด่านที่ 1 รอบ ๆ งานครบแล้วหรือยัง? <br> \n\t\t\tหากยัง คุณควรไปไขปริศนาให้ครบก่อน <br> \n\t\t\tจากนั้นลองดูในตาราง 5x5 ของด่านที่ 1 จะมีตำแหน่งของตัวอักษรที่ยังไม่ได้ถูกใช้อยู่ <br> ส่วนภาพปริศนาในข้อนี้ 1 ช่องเท่ากับอักษรภาษาอังกฤษ 1 ตัว <br> คุณผ่านมาแล้วทั้งนั้นแหละคุ้นเคยกันดีไม่ยากใช่ไหมล่ะ !!"][d]),u.open()}_((function(){return s(void 0,void 0,void 0,O.mark((function n(){var t;return O.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return F.useLocalStorage(),t={round:1,answers:e.round2answers},l.emit("verify save",t,(function(n,t){o(3,v=n[d]),o(4,g=t[d])})),(p.length>1||d>4)&&D("/enter/"),n.next=6,fetch("./enter/puzzle".concat(d,".png"));case 6:o(5,x=!0),e.round2time[d]&&0!==e.round2time[d]||P(F,e.round2time[d]=i.getTime(),e),o(15,y=e.round2time[d]);case 10:case"end":return n.stop()}}),n)})))}));return n.$$.update=function(){163840&n.$$.dirty&&o(0,r=Math.max(12e5-i.getTime()+y,0)),1&n.$$.dirty&&o(16,c=r<=0||0===Math.floor(r/6e4)?"":"".concat(Math.floor(r/6e4)," นาที")),65537&n.$$.dirty&&o(6,a=r<=0?"0":"".concat(c," ").concat(Math.floor(r%6e4/1e3)," วินาที"))},[r,u,$,v,g,x,a,e,m,d,h,b,function(n){l.emit("submit rating",n.detail),P(F,e.round2rate[n.detail.puzzleId]=!0,e),o(2,$="ขอบคุณสำหรับคะแนนครับ"),u.open()},z,function(n){13===n.keyCode&&b()},y,c,i,function(n){w[n?"unshift":"push"]((function(){o(1,u=n)}))},function(n){o(4,g=n)},function(){return b()},function(){return z()}]}var bn=function(t){n(f,e);var o=nn(f);function f(n){var t;return r(this,f),t=o.call(this),c(a(t),n,yn,wn,i,{}),t}return f}();export{bn as default};
