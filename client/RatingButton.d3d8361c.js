import{S as t,i as e,s as n,ab as i,ac as s,d as o,g as r,l as a,ao as c,m as l,n as u,T as h,a4 as d,H as f,U as p,c as m,j as g,o as O,p as y,q as T,r as $,e as E,t as v,a as C,b as I,f as b,h as w,a3 as M,P as x,Q as S,a0 as A,ap as _,a5 as P,a6 as N,ae as H,V as R,W as B,y as D,z as F,A as z,B as L,C as j,D as G,E as k,F as W,G as U,I as V,J as q,R as Q,a8 as K,X,K as Y,aa as J,L as Z,O as tt}from"./client.9dca66fd.js";import{B as et}from"./Button.d9240fcb.js";import"./CommonLabel.f1695f98.js";function nt(t){let e,n,p,m;return{c(){e=i("svg"),n=i("path"),this.h()},l(t){e=s(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0,"data-starid":!0});var i=o(e);n=s(i,"path",{"data-starid":!0,class:!0,d:!0}),o(n).forEach(r),i.forEach(r),this.h()},h(){a(n,"data-starid",t[1]),a(n,"class","starPath svelte-pp3ob9"),a(n,"d","m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"),c(n,"filled",t[0]),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"width","32"),a(e,"height","31"),a(e,"viewBox","0 0 51 48"),a(e,"class","star svelte-pp3ob9"),a(e,"data-starid",t[1])},m(i,s){l(i,e,s),u(e,n),p||(m=[h(e,"mouseover",t[2]),h(e,"mouseleave",t[3]),h(e,"click",t[4]),h(e,"focus",t[5])],p=!0)},p(t,[i]){2&i&&a(n,"data-starid",t[1]),1&i&&c(n,"filled",t[0]),2&i&&a(e,"data-starid",t[1])},i:d,o:d,d(t){t&&r(e),p=!1,f(m)}}}function it(t,e,n){let{filled:i=!1}=e,{starId:s}=e;return t.$$set=t=>{"filled"in t&&n(0,i=t.filled),"starId"in t&&n(1,s=t.starId)},[i,s,function(e){p.call(this,t,e)},function(e){p.call(this,t,e)},function(e){p.call(this,t,e)},function(e){p.call(this,t,e)}]}class st extends t{constructor(t){super(),e(this,t,it,nt,n,{filled:0,starId:1})}}function ot(t,e,n){const i=t.slice();return i[10]=e[n],i}function rt(t){let e,n=t[1][t[2]-1]+"";return{c(){e=v(n)},l(t){e=b(t,n)},m(t,n){l(t,e,n)},p(t,i){6&i&&n!==(n=t[1][t[2]-1]+"")&&M(e,n)},d(t){t&&r(e)}}}function at(t){let e,n=t[1][t[3]-1]+"";return{c(){e=v(n)},l(t){e=b(t,n)},m(t,n){l(t,e,n)},p(t,i){10&i&&n!==(n=t[1][t[3]-1]+"")&&M(e,n)},d(t){t&&r(e)}}}function ct(t){let e,n;return e=new st({props:{filled:t[3]?t[3]>=t[10]:t[2]>=t[10],starId:t[10]}}),e.$on("mouseover",t[5](t[10])),e.$on("mouseleave",t[8]),e.$on("click",t[6](t[10])),{c(){m(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,i){O(e,t,i),n=!0},p(t,n){const i={};12&n&&(i.filled=t[3]?t[3]>=t[10]:t[2]>=t[10]),e.$set(i)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function lt(t){let e,n,i,s,c,h;function d(t,e){return t[3]?at:t[2]?rt:void 0}let f=d(t),p=f&&f(t),m=t[4],g=[];for(let e=0;e<m.length;e+=1)g[e]=ct(ot(t,m,e));const O=t=>T(g[t],1,1,(()=>{g[t]=null}));return{c(){e=E("span"),n=v(t[0]),i=v(": \r\n   "),p&&p.c(),s=C(),c=E("span");for(let t=0;t<g.length;t+=1)g[t].c();this.h()},l(a){e=I(a,"SPAN",{});var l=o(e);n=b(l,t[0]),i=b(l,": \r\n   "),p&&p.l(l),l.forEach(r),s=w(a),c=I(a,"SPAN",{class:!0});var u=o(c);for(let t=0;t<g.length;t+=1)g[t].l(u);u.forEach(r),this.h()},h(){a(c,"class","starContainer svelte-zu3tcm")},m(t,o){l(t,e,o),u(e,n),u(e,i),p&&p.m(e,null),l(t,s,o),l(t,c,o);for(let t=0;t<g.length;t+=1)g[t].m(c,null);h=!0},p(t,[i]){if((!h||1&i)&&M(n,t[0]),f===(f=d(t))&&p?p.p(t,i):(p&&p.d(1),p=f&&f(t),p&&(p.c(),p.m(e,null))),124&i){let e;for(m=t[4],e=0;e<m.length;e+=1){const n=ot(t,m,e);g[e]?(g[e].p(n,i),y(g[e],1)):(g[e]=ct(n),g[e].c(),y(g[e],1),g[e].m(c,null))}for(x(),e=m.length;e<g.length;e+=1)O(e);S()}},i(t){if(!h){for(let t=0;t<m.length;t+=1)y(g[t]);h=!0}},o(t){g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)T(g[t]);h=!1},d(t){t&&r(e),p&&p.d(),t&&r(s),t&&r(c),A(g,t)}}}function ut(t,e,n){const i=_();let{type:s}=e,{title:o}=e,{starTitle:r}=e,a=null,c=null;return t.$$set=t=>{"type"in t&&n(7,s=t.type),"title"in t&&n(0,o=t.title),"starTitle"in t&&n(1,r=t.starTitle)},[o,r,a,c,[1,2,3,4,5],t=>()=>{n(3,c=t)},t=>e=>{n(2,a=t),i("rate",{type:s,rating:a})},s,()=>n(3,c=null)]}class ht extends t{constructor(t){super(),e(this,t,ut,lt,n,{type:7,title:0,starTitle:1})}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var dt,ft,pt=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),mt={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},gt={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Ot={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(dt||(dt={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(ft||(ft={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var yt=function(t){function e(n){var i=t.call(this,N(N({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=ft.TOP_START,i.originCorner=ft.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return P(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return gt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return ft},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^dt.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()}),Ot.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var n=this;if(void 0===t&&(t=!1),this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen)return this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),void this.adapter.notifyClose();this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout((function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()}),Ot.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(n),s=this.hasBit(n,dt.BOTTOM)?"bottom":"top",o=this.hasBit(n,dt.RIGHT)?"right":"left",r=this.getHorizontalOriginOffset(n),a=this.getVerticalOriginOffset(n),c=this.measurements,l=c.anchorSize,u=c.surfaceSize,h=((t={})[o]=r,t[s]=a,t);l.width/u.width>Ot.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(h),this.adapter.setTransformOrigin(o+" "+s),this.adapter.setPosition(h),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(n,dt.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),n=this.adapter.getWindowDimensions(),i=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:n.width-t.right,bottom:n.height-t.bottom,left:t.left},viewportSize:n,windowScroll:i}},e.prototype.getoriginCorner=function(){var t,n,i=this.originCorner,s=this.measurements,o=s.viewportDistance,r=s.anchorSize,a=s.surfaceSize,c=e.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,dt.BOTTOM)?(t=o.top-c+this.anchorMargin.bottom,n=o.bottom-c-this.anchorMargin.bottom):(t=o.top-c+this.anchorMargin.top,n=o.bottom-c+r.height-this.anchorMargin.top),!(n-a.height>0)&&t>n&&(i=this.setBit(i,dt.BOTTOM));var l,u,h=this.adapter.isRtl(),d=this.hasBit(this.anchorCorner,dt.FLIP_RTL),f=this.hasBit(this.anchorCorner,dt.RIGHT)||this.hasBit(i,dt.RIGHT),p=!1;(p=h&&d?!f:f)?(l=o.left+r.width+this.anchorMargin.right,u=o.right-this.anchorMargin.right):(l=o.left+this.anchorMargin.left,u=o.right+r.width-this.anchorMargin.left);var m=l-a.width>0,g=u-a.width>0,O=this.hasBit(i,dt.FLIP_RTL)&&this.hasBit(i,dt.RIGHT);return g&&O&&h||!m&&O?i=this.unsetBit(i,dt.RIGHT):(m&&p&&h||m&&!p&&f||!g&&l>=u)&&(i=this.setBit(i,dt.RIGHT)),i},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var n=this.measurements.viewportDistance,i=0,s=this.hasBit(t,dt.BOTTOM),o=this.hasBit(this.anchorCorner,dt.BOTTOM),r=e.numbers.MARGIN_TO_EDGE;return s?(i=n.top+this.anchorMargin.top-r,o||(i+=this.measurements.anchorSize.height)):(i=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-r,o&&(i-=this.measurements.anchorSize.height)),i},e.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,n=this.hasBit(t,dt.RIGHT),i=this.hasBit(this.anchorCorner,dt.RIGHT);if(n){var s=i?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?s-(this.measurements.viewportSize.width-this.measurements.bodySize.width):s}return i?e.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,n=this.hasBit(t,dt.BOTTOM),i=this.hasBit(this.anchorCorner,dt.BOTTOM);return n?i?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:i?e.height+this.anchorMargin.bottom:this.anchorMargin.top},e.prototype.adjustPositionForHoistedElement=function(t){var e,n,i=this.measurements,s=i.windowScroll,o=i.viewportDistance,r=i.surfaceSize,a=i.viewportSize,c=Object.keys(t);try{for(var l=H(c),u=l.next();!u.done;u=l.next()){var h=u.value,d=t[h]||0;!this.isHorizontallyCenteredOnViewport||"left"!==h&&"right"!==h?(d+=o[h],this.isFixedPosition||("top"===h?d+=s.y:"bottom"===h?d-=s.y:"left"===h?d+=s.x:d-=s.x),t[h]=d):t[h]=(a.width-r.width)/2}}catch(t){e={error:t}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,e=this.adapter.isFocused(),n=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(e||n)&&setTimeout((function(){t.adapter.restoreFocus()}),Ot.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,e){return Boolean(t&e)},e.prototype.setBit=function(t,e){return t|e},e.prototype.unsetBit=function(t,e){return t^e},e.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},e}(pt),Tt={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function $t(t,e){if(function(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}(t)&&e in Tt){var n=t.document.createElement("div"),i=Tt[e],s=i.standard,o=i.prefixed;return s in n.style?s:o}return e}function Et(t){return Object.entries(t).filter((([t,e])=>""!==t&&e)).map((([t])=>t)).join(" ")}function vt(t,e,n,i={bubbles:!0},s=!1){if("undefined"!=typeof Event&&t){const o=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(null==t||t.dispatchEvent(o),s&&e.startsWith("SMUI")){const s=new CustomEvent(e.replace(/^SMUI/g,(()=>"MDC")),Object.assign(Object.assign({},i),{detail:n}));null==t||t.dispatchEvent(s),s.defaultPrevented&&o.preventDefault()}return o}}const Ct=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,It=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function bt(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const s=e[i],o=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?n.push(o(t,s[1])):n.push(o(t))}return{update(t){if((t&&t.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(t)for(let e=0;e<t.length;e++){const i=n[e];if(i&&i.update){const n=t[e];Array.isArray(n)&&n.length>1?i.update(n[1]):i.update()}}},destroy(){for(let t=0;t<n.length;t++){const e=n[t];e&&e.destroy&&e.destroy()}}}}const{document:wt}=J;function Mt(t){let e,n,i,s,a,c,u,d;const p=t[30].default,m=D(p,t,t[29],null);let g=[{class:i=Et({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6],...t[9]})},{style:s=Object.entries(t[10]).map(xt).concat([t[3]]).join(" ")},t[12]],O={};for(let t=0;t<g.length;t+=1)O=F(O,g[t]);return{c(){e=C(),n=E("div"),m&&m.c(),this.h()},l(t){e=w(t),n=I(t,"DIV",{class:!0,style:!0});var i=o(n);m&&m.l(i),i.forEach(r),this.h()},h(){z(n,O)},m(i,s){l(i,e,s),l(i,n,s),m&&m.m(n,null),t[32](n),c=!0,u||(d=[h(wt.body,"click",t[31],!0),L(a=bt.call(null,n,t[1])),L(t[11].call(null,n)),h(n,"keydown",t[33])],u=!0)},p(t,e){m&&m.p&&(!c||536870912&e[0])&&j(m,p,t,t[29],c?k(p,t[29],e,null):G(t[29]),null),z(n,O=W(g,[(!c||628&e[0]&&i!==(i=Et({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6],...t[9]})))&&{class:i},(!c||1032&e[0]&&s!==(s=Object.entries(t[10]).map(xt).concat([t[3]]).join(" ")))&&{style:s},4096&e[0]&&t[12]])),a&&U(a.update)&&2&e[0]&&a.update.call(null,t[1])},i(t){c||(y(m,t),c=!0)},o(t){T(m,t),c=!1},d(i){i&&r(e),i&&r(n),m&&m.d(i),t[32](null),u=!1,f(d)}}}const xt=([t,e])=>`${t}: ${e};`;function St(t,e,n){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let s=V(e,i),{$$slots:o={},$$scope:r}=e;var a,c,l;const u=function(t){let e,n=[];function i(e){p(t,e)}return t.$on=(t,i)=>{let s=t,o=()=>{};return e?o=e(s,i):n.push([s,i]),s.match(Ct)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',s),(...t)=>{o()}},t=>{const s=[],o={};e=(e,n)=>{let r=e,a=n,c=!1;const l=r.match(Ct),u=r.match(It),d=l||u;if(r.match(/^SMUI:\w+:/)){const t=r.split(":");let e="";for(let n=0;n<t.length;n++)e+=n===t.length-1?":"+t[n]:t[n].split("-").map((t=>t.slice(0,1).toUpperCase()+t.slice(1))).join("");console.warn(`The event ${r.split("$")[0]} has been renamed to ${e.split("$")[0]}.`),r=e}if(d){const t=r.split(l?":":"$");r=t[0];const e=Object.fromEntries(t.slice(1).map((t=>[t,!0])));e.passive&&(c=c||{},c.passive=!0),e.nonpassive&&(c=c||{},c.passive=!1),e.capture&&(c=c||{},c.capture=!0),e.once&&(c=c||{},c.once=!0),e.preventDefault&&(a=R(a)),e.stopPropagation&&(a=B(a))}const f=h(t,r,a,c),p=()=>{f();const t=s.indexOf(p);t>-1&&s.splice(t,1)};return s.push(p),r in o||(o[r]=h(t,r,i)),p};for(let t=0;t<n.length;t++)e(n[t][0],n[t][1]);return{destroy:()=>{for(let t=0;t<s.length;t++)s[t]();for(let t of Object.entries(o))t[1]()}}}}(q());let d,f,m,{use:g=[]}=e,{class:O=""}=e,{style:y=""}=e,{static:T=!1}=e,{anchor:$=!0}=e,{fixed:E=!1}=e,{open:v=T}=e,{fullWidth:C=!1}=e,{quickOpen:I=!1}=e,{anchorElement:b}=e,{anchorCorner:w}=e,{anchorMargin:M={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:x=0}=e,{horizontallyCenteredOnViewport:S=!1}=e,A={},_={};Q("SMUI:list:role","menu"),Q("SMUI:list:item:role","menuitem");const P=ft;function N(t){return t in A?A[t]:L().classList.contains(t)}function H(t){A[t]||n(9,A[t]=!0,A)}function D(t){t in A&&!A[t]||n(9,A[t]=!1,A)}function z(t){f.close(t),n(0,v=!1)}function L(){return d}K((()=>{n(8,f=new yt({addClass:H,removeClass:D,hasClass:N,hasAnchor:()=>!!b,notifyClose:()=>{n(0,v=T),v||vt(d,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{n(0,v=T),v||vt(d,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{n(0,v=!0),vt(d,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:t=>d.contains(t),isRtl:()=>"rtl"===getComputedStyle(d).getPropertyValue("direction"),setTransformOrigin:t=>{const e=`${$t(window,"transform")}-origin`;n(10,_[e]=t,_)},isFocused:()=>document.activeElement===d,saveFocus:()=>{var t;m=null!==(t=document.activeElement)&&void 0!==t?t:void 0},restoreFocus:()=>{d.contains(document.activeElement)&&m&&"focus"in m&&m.focus()},getInnerDimensions:()=>({width:d.offsetWidth,height:d.offsetHeight}),getAnchorDimensions:()=>b?b.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{n(10,_.left="left"in t?`${t.left}px`:"",_),n(10,_.right="right"in t?`${t.right}px`:"",_),n(10,_.top="top"in t?`${t.top}px`:"",_),n(10,_.bottom="bottom"in t?`${t.bottom}px`:"",_)},setMaxHeight:t=>{n(10,_.maxHeight=t,_)}}));return vt(d,"SMUIMenuSurface:mount",{get open(){return v},set open(t){n(0,v=t)},closeProgrammatic:z}),f.init(),()=>{var t;const e=f.isHoistedElement;f.destroy(),e&&(null===(t=d.parentNode)||void 0===t||t.removeChild(d))}})),X((()=>{var t;$&&d&&(null===(t=d.parentElement)||void 0===t||t.classList.remove("mdc-menu-surface--anchor"))}));return t.$$set=t=>{e=F(F({},e),Y(t)),n(12,s=V(e,i)),"use"in t&&n(1,g=t.use),"class"in t&&n(2,O=t.class),"style"in t&&n(3,y=t.style),"static"in t&&n(4,T=t.static),"anchor"in t&&n(14,$=t.anchor),"fixed"in t&&n(5,E=t.fixed),"open"in t&&n(0,v=t.open),"fullWidth"in t&&n(6,C=t.fullWidth),"quickOpen"in t&&n(15,I=t.quickOpen),"anchorElement"in t&&n(13,b=t.anchorElement),"anchorCorner"in t&&n(16,w=t.anchorCorner),"anchorMargin"in t&&n(17,M=t.anchorMargin),"maxHeight"in t&&n(18,x=t.maxHeight),"horizontallyCenteredOnViewport"in t&&n(19,S=t.horizontallyCenteredOnViewport),"$$scope"in t&&n(29,r=t.$$scope)},t.$$.update=()=>{469778560&t.$$.dirty[0]&&d&&$&&!(null===n(26,a=d.parentElement)||void 0===a?void 0:a.classList.contains("mdc-menu-surface--anchor"))&&(null===n(27,c=d.parentElement)||void 0===c||c.classList.add("mdc-menu-surface--anchor"),n(13,b=null!==n(28,l=d.parentElement)&&void 0!==l?l:void 0)),257&t.$$.dirty[0]&&f&&f.isOpen()!==v&&(v?f.open():f.close()),33024&t.$$.dirty[0]&&f&&f.setQuickOpen(I),288&t.$$.dirty[0]&&f&&f.setFixedPosition(E),262400&t.$$.dirty[0]&&f&&x>0&&f.setMaxHeight(x),524544&t.$$.dirty[0]&&f&&f.setIsHorizontallyCenteredOnViewport(S),65792&t.$$.dirty[0]&&f&&null!=w&&("string"==typeof w?f.setAnchorCorner(P[w]):f.setAnchorCorner(w)),131328&t.$$.dirty[0]&&f&&f.setAnchorMargin(M)},[v,g,O,y,T,E,C,d,f,A,_,u,s,b,$,I,w,M,x,S,function(){return v},function(t){n(0,v=t)},function(t,e){return f.setAbsolutePosition(t,e)},function(t){return f.setIsHoisted(t)},function(){return f.isFixed()},L,a,c,l,r,o,t=>f&&v&&f.handleBodyClick(t),function(t){Z[t?"unshift":"push"]((()=>{d=t,n(7,d)}))},t=>f&&f.handleKeydown(t)]}class At extends t{constructor(t){super(),e(this,t,St,Mt,n,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function _t(t){let e;return{c(){e=v("ให้คะแนน")},l(t){e=b(t,"ให้คะแนน")},m(t,n){l(t,e,n)},d(t){t&&r(e)}}}function Pt(t){let e;return{c(){e=v("ส่ง")},l(t){e=b(t,"ส่ง")},m(t,n){l(t,e,n)},d(t){t&&r(e)}}}function Nt(t){let e,n,i,s,c,h,d;const f=[t[3]];let p={};for(let t=0;t<f.length;t+=1)p=F(p,f[t]);n=new ht({props:p}),n.$on("rate",t[5]);const v=[t[4]];let b={};for(let t=0;t<v.length;t+=1)b=F(b,v[t]);return s=new ht({props:b}),s.$on("rate",t[5]),h=new et({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),h.$on("click",t[10]),{c(){e=E("div"),m(n.$$.fragment),i=C(),m(s.$$.fragment),c=C(),m(h.$$.fragment),this.h()},l(t){e=I(t,"DIV",{class:!0});var a=o(e);g(n.$$.fragment,a),i=w(a),g(s.$$.fragment,a),c=w(a),g(h.$$.fragment,a),a.forEach(r),this.h()},h(){a(e,"class","flex-column")},m(t,o){l(t,e,o),O(n,e,null),u(e,i),O(s,e,null),u(e,c),O(h,e,null),d=!0},p(t,e){const i=8&e?W(f,[tt(t[3])]):{};n.$set(i);const o=16&e?W(v,[tt(t[4])]):{};s.$set(o);const r={};16384&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){d||(y(n.$$.fragment,t),y(s.$$.fragment,t),y(h.$$.fragment,t),d=!0)},o(t){T(n.$$.fragment,t),T(s.$$.fragment,t),T(h.$$.fragment,t),d=!1},d(t){t&&r(e),$(n),$(s),$(h)}}}function Ht(t){let e,n,i,s,a;n=new et({props:{disabled:t[2],color:"secondary",$$slots:{default:[_t]},$$scope:{ctx:t}}}),n.$on("click",t[9]);let c={anchorCorner:t[0],$$slots:{default:[Nt]},$$scope:{ctx:t}};return s=new At({props:c}),t[11](s),{c(){e=E("div"),m(n.$$.fragment),i=C(),m(s.$$.fragment)},l(t){e=I(t,"DIV",{});var a=o(e);g(n.$$.fragment,a),i=w(a),g(s.$$.fragment,a),a.forEach(r)},m(t,o){l(t,e,o),O(n,e,null),u(e,i),O(s,e,null),a=!0},p(t,[e]){const i={};4&e&&(i.disabled=t[2]),16384&e&&(i.$$scope={dirty:e,ctx:t}),n.$set(i);const o={};1&e&&(o.anchorCorner=t[0]),16384&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){a||(y(n.$$.fragment,t),y(s.$$.fragment,t),a=!0)},o(t){T(n.$$.fragment,t),T(s.$$.fragment,t),a=!1},d(i){i&&r(e),$(n),t[11](null),$(s)}}}function Rt(t,e,n){const i=_();let s,{puzzleId:o}=e,{round:r}=e,{anchor:a}=e,c=[0,0],l=!1;function u(){n(2,l=!0),s.setOpen(!1),i("submitRates",{rates:c,puzzleId:o,round:r})}return t.$$set=t=>{"puzzleId"in t&&n(7,o=t.puzzleId),"round"in t&&n(8,r=t.round),"anchor"in t&&n(0,a=t.anchor)},[a,s,l,{type:0,title:"ความสนุก",starTitle:["น่าเบื่อ","เฉย ๆ","ใช้ได้","สนุก","มันส์มาก"]},{type:1,title:"ความยาก",starTitle:["หลับตาทำได้","ชิว ๆ","ปานกลาง","หัวอุ่น","หัวระเบิด"]},function(t){c[t.detail.type]=t.detail.rating},u,o,r,()=>s.setOpen(!0),()=>u(),function(t){Z[t?"unshift":"push"]((()=>{s=t,n(1,s)}))}]}class Bt extends t{constructor(t){super(),e(this,t,Rt,Ht,n,{puzzleId:7,round:8,anchor:0})}}export{Bt as R};