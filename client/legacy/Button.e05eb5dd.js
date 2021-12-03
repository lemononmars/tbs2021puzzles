import{ad as n,_ as t,a as e,b as r,c as o,i as c,s as i,d as a,P as u,S as s,a2 as l,Q as d,e as f,g as p,h as m,k as v,V as b,o as y,W as h,q as g,a3 as $,a4 as O,a5 as _,X as j,Y as E,u as w,t as P,Z as R,$ as C,a0 as S,a1 as k,D as x,af as D,y as L,K as I,z as B,A as U,ah as T,w as M,C as A,r as H,a7 as z,m as V,f as N,j as q}from"./client.fb16702f.js";import{_ as W}from"./defineProperty.b786bad4.js";import{u as X,f as Y,c as F}from"./CommonLabel.366d0488.js";import{M as K,s as Q,a as Z}from"./foundation.b295633b.js";import{m as G}from"./ponyfill.9fe21039.js";function J(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{bubbles:!0};if("undefined"!=typeof Event&&n){var o=new Event(t,r);o.detail=e;var c="getElement"in n?n.getElement():n;return c.dispatchEvent(o),o}}function nn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function tn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?nn(Object(e),!0).forEach((function(t){W(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):nn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var en=Z,rn=G;function on(t){var e,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=o.ripple,i=void 0===c||c,a=o.surface,u=void 0!==a&&a,s=o.unbounded,l=void 0!==s&&s,d=o.disabled,f=void 0!==d&&d,p=o.color,m=void 0===p?null:p,v=o.active,b=void 0===v?null:v,y=o.eventTarget,h=void 0===y?null:y,g=o.activeTarget,$=void 0===g?null:g,O=o.addClass,_=void 0===O?function(n){return t.classList.add(n)}:O,j=o.removeClass,E=void 0===j?function(n){return t.classList.remove(n)}:j,w=o.addStyle,P=void 0===w?function(n,e){return t.style.setProperty(n,e)}:w,R=o.initPromise,C=void 0===R?Promise.resolve():R,S=n("SMUI:addLayoutListener"),k=b,x=h,D=$;function L(){u&&(_("mdc-ripple-surface"),"primary"===m?(_("smui-ripple-surface--primary"),E("smui-ripple-surface--secondary")):"secondary"===m?(E("smui-ripple-surface--primary"),_("smui-ripple-surface--secondary")):(E("smui-ripple-surface--primary"),E("smui-ripple-surface--secondary"))),e&&k!==b&&(k=b,b?e.activate():!1===b&&e.deactivate()),i&&!e?(e=new K({addClass:_,browserSupportsCssVars:function(){return Q(window)},computeBoundingRect:function(){return t.getBoundingClientRect()},containsEventTarget:function(n){return t.contains(n)},deregisterDocumentInteractionHandler:function(n,t){return document.documentElement.removeEventListener(n,t,en())},deregisterInteractionHandler:function(n,e){return(h||t).removeEventListener(n,e,en())},deregisterResizeHandler:function(n){return window.removeEventListener("resize",n)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return null==b?rn($||t,":active"):b},isSurfaceDisabled:function(){return!!f},isUnbounded:function(){return!!l},registerDocumentInteractionHandler:function(n,t){return document.documentElement.addEventListener(n,t,en())},registerInteractionHandler:function(n,e){return(h||t).addEventListener(n,e,en())},registerResizeHandler:function(n){return window.addEventListener("resize",n)},removeClass:E,updateCssVariable:P}),C.then((function(){e.init(),e.setUnbounded(l)}))):e&&!i&&C.then((function(){e.destroy(),e=null})),!e||x===h&&D===$||(x=h,D=$,e.destroy(),requestAnimationFrame((function(){e&&(e.init(),e.setUnbounded(l))}))),!i&&l&&_("mdc-ripple-upgraded--unbounded")}function I(){e&&e.layout()}return L(),S&&(r=S(I)),{update:function(n){var e=tn({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:null,active:null,eventTarget:null,activeTarget:null,addClass:function(n){return t.classList.add(n)},removeClass:function(n){return t.classList.remove(n)},addStyle:function(n,e){return t.style.setProperty(n,e)},initPromise:Promise.resolve()},n);i=e.ripple,u=e.surface,l=e.unbounded,f=e.disabled,m=e.color,b=e.active,h=e.eventTarget,$=e.activeTarget,_=e.addClass,E=e.removeClass,P=e.addStyle,C=e.initPromise,L()},destroy:function(){e&&(e.destroy(),e=null,E("mdc-ripple-surface"),E("smui-ripple-surface--primary"),E("smui-ripple-surface--secondary")),r&&r()}}}function cn(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,c=e(n);if(t){var i=e(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return r(this,o)}}function an(n){for(var t,e,r,o,c,i=n[7].default,a=l(i,n,n[6],null),u=[{href:n[0]},n[4]],s={},C=0;C<u.length;C+=1)s=d(s,u[C]);return{c:function(){t=f("a"),a&&a.c(),this.h()},l:function(n){t=p(n,"A",{href:!0});var e=m(t);a&&a.l(e),e.forEach(v),this.h()},h:function(){b(t,s)},m:function(i,u){y(i,t,u),a&&a.m(t,null),n[8](t),r=!0,o||(c=[h(e=X.call(null,t,n[1])),h(n[3].call(null,t))],o=!0)},p:function(n,o){var c=g(o,1)[0];a&&a.p&&(!r||64&c)&&$(a,i,n,n[6],r?_(i,n[6],c,null):O(n[6]),null),b(t,s=j(u,[(!r||1&c)&&{href:n[0]},16&c&&n[4]])),e&&E(e.update)&&2&c&&e.update.call(null,n[1])},i:function(n){r||(w(a,n),r=!0)},o:function(n){P(a,n),r=!1},d:function(e){e&&v(t),a&&a.d(e),n[8](null),o=!1,R(c)}}}function un(n,t,e){var r=["href","use","getElement"],o=C(t,r),c=t,i=c.$$slots,a=void 0===i?{}:i,u=c.$$scope,s=t.href,l=void 0===s?"javascript:void(0);":s,f=t.use,p=void 0===f?[]:f,m=Y(S()),v=null;return n.$$set=function(n){t=d(d({},t),k(n)),e(4,o=C(t,r)),"href"in n&&e(0,l=n.href),"use"in n&&e(1,p=n.use),"$$scope"in n&&e(6,u=n.$$scope)},[l,p,v,m,o,function(){return v},u,a,function(n){x[n?"unshift":"push"]((function(){e(2,v=n)}))}]}var sn=function(n){t(r,s);var e=cn(r);function r(n){var t;return o(this,r),t=e.call(this),c(a(t),n,un,an,i,{href:0,use:1,getElement:5}),t}return u(r,[{key:"getElement",get:function(){return this.$$.ctx[5]}}]),r}();function ln(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,c=e(n);if(t){var i=e(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return r(this,o)}}function dn(n){for(var t,e,r,o,c,i=n[6].default,a=l(i,n,n[5],null),u=[n[3]],s={},C=0;C<u.length;C+=1)s=d(s,u[C]);return{c:function(){t=f("button"),a&&a.c(),this.h()},l:function(n){t=p(n,"BUTTON",{});var e=m(t);a&&a.l(e),e.forEach(v),this.h()},h:function(){b(t,s)},m:function(i,u){y(i,t,u),a&&a.m(t,null),t.autofocus&&t.focus(),n[7](t),r=!0,o||(c=[h(e=X.call(null,t,n[0])),h(n[2].call(null,t))],o=!0)},p:function(n,o){var c=g(o,1)[0];a&&a.p&&(!r||32&c)&&$(a,i,n,n[5],r?_(i,n[5],c,null):O(n[5]),null),b(t,s=j(u,[8&c&&n[3]])),e&&E(e.update)&&1&c&&e.update.call(null,n[0])},i:function(n){r||(w(a,n),r=!0)},o:function(n){P(a,n),r=!1},d:function(e){e&&v(t),a&&a.d(e),n[7](null),o=!1,R(c)}}}function fn(n,t,e){var r=["use","getElement"],o=C(t,r),c=t,i=c.$$slots,a=void 0===i?{}:i,u=c.$$scope,s=t.use,l=void 0===s?[]:s,f=Y(S()),p=null;return n.$$set=function(n){t=d(d({},t),k(n)),e(3,o=C(t,r)),"use"in n&&e(0,l=n.use),"$$scope"in n&&e(5,u=n.$$scope)},[l,p,f,o,function(){return p},u,a,function(n){x[n?"unshift":"push"]((function(){e(1,p=n)}))}]}var pn=function(n){t(r,s);var e=ln(r);function r(n){var t;return o(this,r),t=e.call(this),c(a(t),n,fn,dn,i,{use:0,getElement:4}),t}return u(r,[{key:"getElement",get:function(){return this.$$.ctx[4]}}]),r}();function mn(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,c=e(n);if(t){var i=e(this).constructor;o=Reflect.construct(c,arguments,i)}else o=c.apply(this,arguments);return r(this,o)}}function vn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function bn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?vn(Object(e),!0).forEach((function(t){W(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):vn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function yn(n){var t;return{c:function(){t=f("div"),this.h()},l:function(n){t=p(n,"DIV",{class:!0}),m(t).forEach(v),this.h()},h:function(){V(t,"class","mdc-button__touch")},m:function(n,e){y(n,t,e)},d:function(n){n&&v(t)}}}function hn(n){var t,e,r,o,c=n[26].default,i=l(c,n,n[28],null),a=n[6]&&yn();return{c:function(){t=f("div"),e=N(),i&&i.c(),a&&a.c(),r=I(),this.h()},l:function(n){t=p(n,"DIV",{class:!0}),m(t).forEach(v),e=q(n),i&&i.l(n),a&&a.l(n),r=I(),this.h()},h:function(){V(t,"class","mdc-button__ripple")},m:function(n,c){y(n,t,c),y(n,e,c),i&&i.m(n,c),a&&a.m(n,c),y(n,r,c),o=!0},p:function(n,t){i&&i.p&&(!o||268435456&t)&&$(i,c,n,n[28],o?_(c,n[28],t,null):O(n[28]),null),n[6]?a||((a=yn()).c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null)},i:function(n){o||(w(i,n),o=!0)},o:function(n){P(i,n),o=!1},d:function(n){n&&v(t),n&&v(e),i&&i.d(n),a&&a.d(n),n&&v(r)}}}function gn(n){var t,e,r,o,c=[{use:[[on,{ripple:n[3],unbounded:!1,color:n[4],disabled:!!n[22].disabled,addClass:n[18],removeClass:n[19],addStyle:n[20]}],n[16]].concat(D(n[0]))},{class:F(bn((t={},W(t,n[1],!0),W(t,"mdc-button",!0),W(t,"mdc-button--raised","raised"===n[5]),W(t,"mdc-button--unelevated","unelevated"===n[5]),W(t,"mdc-button--outlined","outlined"===n[5]),W(t,"smui-button--color-secondary","secondary"===n[4]),W(t,"mdc-button--touch",n[6]),W(t,"mdc-card__action","card:action"===n[17]),W(t,"mdc-card__action--button","card:action"===n[17]),W(t,"mdc-dialog__button","dialog:action"===n[17]),W(t,"mdc-top-app-bar__navigation-icon","top-app-bar:navigation"===n[17]),W(t,"mdc-top-app-bar__action-item","top-app-bar:action"===n[17]),W(t,"mdc-snackbar__action","snackbar:actions"===n[17]),W(t,"mdc-banner__secondary-action","banner"===n[17]&&n[8]),W(t,"mdc-banner__primary-action","banner"===n[17]&&!n[8]),W(t,"mdc-tooltip__action","tooltip:rich-actions"===n[17]),t),n[11]))},{style:Object.entries(n[12]).map($n).concat([n[2]]).join(" ")},n[15],n[14],n[13],{href:n[7]},n[22]],i=n[9];function a(n){for(var t={$$slots:{default:[hn]},$$scope:{ctx:n}},e=0;e<c.length;e+=1)t=d(t,c[e]);return{props:t}}return i&&(e=new i(a(n)),n[27](e),e.$on("click",n[21])),{c:function(){e&&L(e.$$.fragment),r=I()},l:function(n){e&&B(e.$$.fragment,n),r=I()},m:function(n,t){e&&U(e,n,t),y(n,r,t),o=!0},p:function(n,t){var o,u=g(t,1)[0],s=6289919&u?j(c,[6094873&u&&{use:[[on,{ripple:n[3],unbounded:!1,color:n[4],disabled:!!n[22].disabled,addClass:n[18],removeClass:n[19],addStyle:n[20]}],n[16]].concat(D(n[0]))},133490&u&&{class:F(bn((o={},W(o,n[1],!0),W(o,"mdc-button",!0),W(o,"mdc-button--raised","raised"===n[5]),W(o,"mdc-button--unelevated","unelevated"===n[5]),W(o,"mdc-button--outlined","outlined"===n[5]),W(o,"smui-button--color-secondary","secondary"===n[4]),W(o,"mdc-button--touch",n[6]),W(o,"mdc-card__action","card:action"===n[17]),W(o,"mdc-card__action--button","card:action"===n[17]),W(o,"mdc-dialog__button","dialog:action"===n[17]),W(o,"mdc-top-app-bar__navigation-icon","top-app-bar:navigation"===n[17]),W(o,"mdc-top-app-bar__action-item","top-app-bar:action"===n[17]),W(o,"mdc-snackbar__action","snackbar:actions"===n[17]),W(o,"mdc-banner__secondary-action","banner"===n[17]&&n[8]),W(o,"mdc-banner__primary-action","banner"===n[17]&&!n[8]),W(o,"mdc-tooltip__action","tooltip:rich-actions"===n[17]),o),n[11]))},4100&u&&{style:Object.entries(n[12]).map($n).concat([n[2]]).join(" ")},32768&u&&T(n[15]),16384&u&&T(n[14]),8192&u&&T(n[13]),128&u&&{href:n[7]},4194304&u&&T(n[22])]):{};if(268435520&u&&(s.$$scope={dirty:u,ctx:n}),i!==(i=n[9])){if(e){M();var l=e;P(l.$$.fragment,1,0,(function(){A(l,1)})),H()}i?(e=new i(a(n)),n[27](e),e.$on("click",n[21]),L(e.$$.fragment),w(e.$$.fragment,1),U(e,r.parentNode,r)):e=null}else i&&e.$set(s)},i:function(n){o||(e&&w(e.$$.fragment,n),o=!0)},o:function(n){e&&P(e.$$.fragment,n),o=!1},d:function(t){n[27](null),t&&v(r),e&&A(e,t)}}}var $n=function(n){var t=g(n,2),e=t[0],r=t[1];return"".concat(e,": ").concat(r,";")};function On(t,e,r){var o,c,i,a,u=["use","class","style","ripple","color","variant","touch","href","action","default","secondary","component","getElement"],s=C(e,u),l=e,f=l.$$slots,p=void 0===f?{}:f,m=l.$$scope,v=Y(S()),b=e.use,y=void 0===b?[]:b,h=e.class,g=void 0===h?"":h,$=e.style,O=void 0===$?"":$,_=e.ripple,j=void 0===_||_,E=e.color,w=void 0===E?"primary":E,P=e.variant,R=void 0===P?"text":P,D=e.touch,L=void 0!==D&&D,I=e.href,B=void 0===I?null:I,U=e.action,T=void 0===U?"close":U,M=e.default,A=void 0!==M&&M,H=e.secondary,V=void 0!==H&&H,N={},q={},W=n("SMUI:button:context"),X=e.component,F=void 0===X?null==B?pn:sn:X;function K(){return a.getElement()}return z("SMUI:label:context","button"),z("SMUI:icon:context","button"),t.$$set=function(n){r(29,e=d(d({},e),k(n))),r(22,s=C(e,u)),"use"in n&&r(0,y=n.use),"class"in n&&r(1,g=n.class),"style"in n&&r(2,O=n.style),"ripple"in n&&r(3,j=n.ripple),"color"in n&&r(4,w=n.color),"variant"in n&&r(5,R=n.variant),"touch"in n&&r(6,L=n.touch),"href"in n&&r(7,B=n.href),"action"in n&&r(23,T=n.action),"default"in n&&r(24,A=n.default),"secondary"in n&&r(8,V=n.secondary),"component"in n&&r(9,F=n.component),"$$scope"in n&&r(28,m=n.$$scope)},t.$$.update=function(){r(15,o="dialog:action"===W&&null!=T?{"data-mdc-dialog-action":T}:{action:e.action}),r(14,c="dialog:action"===W&&A?{"data-mdc-dialog-button-default":""}:{default:e.default}),r(13,i="banner"===W?{}:{secondary:e.secondary})},e=k(e),[y,g,O,j,w,R,L,B,V,F,a,N,q,i,c,o,v,W,function(n){N[n]||r(11,N[n]=!0,N)},function(n){n in N&&!N[n]||r(11,N[n]=!1,N)},function(n,t){q[n]!=t&&(""===t||null==t?(delete q[n],r(12,q)):r(12,q[n]=t,q))},function(){"banner"===W&&J(K(),V?"SMUI:banner:button:secondaryActionClick":"SMUI:banner:button:primaryActionClick")},s,T,A,K,p,function(n){x[n?"unshift":"push"]((function(){r(10,a=n)}))},m]}var _n=function(n){t(r,s);var e=mn(r);function r(n){var t;return o(this,r),t=e.call(this),c(a(t),n,On,gn,i,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,default:24,secondary:8,component:9,getElement:25}),t}return u(r,[{key:"getElement",get:function(){return this.$$.ctx[25]}}]),r}();export{sn as A,_n as B,on as R,pn as a,J as d};
