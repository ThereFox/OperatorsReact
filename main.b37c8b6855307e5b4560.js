!function(){"use strict";var e,t={8240:function(e,t,n){var r={};n.r(r);var o=n(1892),c=n.n(o),u=n(5760),a=n.n(u),i=n(8311),l=n.n(i),f=n(8192),s=n.n(f),p=n(8060),m=n.n(p),y=n(4865),b=n.n(y),d={};d.styleTagTransform=b(),d.setAttributes=s(),d.insert=l().bind(null,"head"),d.domAPI=a(),d.insertStyleElement=m();c()(r.default,d),r.default&&r.default.locals&&r.default.locals;function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function w(e){return React.createElement("div",{className:"mainFrame"},React.createElement(j,null))}function j(e){return React.createElement("article",{className:"operBlock"},React.createElement("h2",null,"Пополнить баланс"),React.createElement("ul",{className:"operList"},function(e){switch(e){case 1:fetch("").then((function(e){e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));break;case 0:return["МТС","Билайн","Мегафон"].map((function(e){return React.createElement(S,{name:e,key:e})}))}}(0)))}function S(e){return React.createElement("li",{key:e.name},React.createElement("div",{className:"listItem"},React.createElement("h3",null,e.name),React.createElement(_,{forElem:e.name})))}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(c,React.Component);var t,n,r,o=E(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).ForOnClick=t.ForOnClick.bind(g(t)),t}return t=c,(n=[{key:"ForOnClick",value:function(e){window.open("form/".concat("form.html","?for=").concat(this.props.forElem)),e.preventDefault()}},{key:"render",value:function(){return React.createElement("button",{onClick:this.ForOnClick},React.createElement("div",{className:"btn"},"Оплатить"))}}])&&h(t.prototype,n),r&&h(t,r),c}();ReactDOM.render(React.createElement(w,null),document.querySelector(".app"))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=function(t,n,o,c){if(!n){var u=1/0;for(f=0;f<e.length;f++){n=e[f][0],o=e[f][1],c=e[f][2];for(var a=!0,i=0;i<n.length;i++)(!1&c||u>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(a=!1,c<u&&(u=c));if(a){e.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[n,o,c]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,c,u=n[0],a=n[1],i=n[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(i)var f=i(r)}for(t&&t(n);l<u.length;l++)c=u[l],r.o(e,c)&&e[c]&&e[c][0](),e[u[l]]=0;return r.O(f)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[752],(function(){return r(1202)}));var o=r.O(void 0,[752],(function(){return r(8240)}));o=r.O(o)}();