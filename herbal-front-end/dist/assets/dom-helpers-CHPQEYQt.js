var p=Function.prototype.bind.call(Function.prototype.call,[].slice);function $(t,r){return p(t.querySelectorAll(r))}function l(t){return t&&t.ownerDocument||document}function w(t){var r=l(t);return r&&r.defaultView||window}function y(t,r){return w(t).getComputedStyle(t,r)}var L=/([A-Z])/g;function g(t){return t.replace(L,"-$1").toLowerCase()}var b=/^ms-/;function i(t){return g(t).replace(b,"-ms-")}var _=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function C(t){return!!(t&&_.test(t))}function D(t,r){var e="",s="";if(typeof r=="string")return t.style.getPropertyValue(i(r))||y(t).getPropertyValue(i(r));Object.keys(r).forEach(function(n){var a=r[n];!a&&a!==0?t.style.removeProperty(i(n)):C(n)?s+=n+"("+a+") ":e+=i(n)+": "+a+";"}),s&&(e+="transform: "+s+";"),t.style.cssText+=";"+e}const T=!!(typeof window<"u"&&window.document&&window.document.createElement);var o=!1,f=!1;try{var u={get passive(){return o=!0},get once(){return f=o=!0}};T&&(window.addEventListener("test",u,u),window.removeEventListener("test",u,!0))}catch{}function P(t,r,e,s){if(s&&typeof s!="boolean"&&!f){var n=s.once,a=s.capture,c=e;!f&&n&&(c=e.__once||function E(d){this.removeEventListener(r,E,a),e.call(this,d)},e.__once=c),t.addEventListener(r,c,o?s:a)}t.addEventListener(r,e,s)}function S(t,r,e,s){var n=s&&typeof s!="boolean"?s.capture:s;t.removeEventListener(r,e,n),e.__once&&t.removeEventListener(r,e.__once,n)}function m(t,r,e,s){return P(t,r,e,s),function(){S(t,r,e,s)}}function V(t,r,e,s){if(s===void 0&&(s=!0),t){var n=document.createEvent("HTMLEvents");n.initEvent(r,e,s),t.dispatchEvent(n)}}function h(t){var r=D(t,"transitionDuration")||"",e=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*e}function A(t,r,e){e===void 0&&(e=5);var s=!1,n=setTimeout(function(){s||V(t,"transitionend",!0)},r+e),a=m(t,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(n),a()}}function O(t,r,e,s){e==null&&(e=h(t)||0);var n=A(t,e,s),a=m(t,"transitionend",r);return function(){n(),a()}}function q(t){t===void 0&&(t=l());try{var r=t.activeElement;return!r||!r.nodeName?null:r}catch{return t.body}}function F(t,r){if(t.contains)return t.contains(r);if(t.compareDocumentPosition)return t===r||!!(t.compareDocumentPosition(r)&16)}function N(t,r){return t.classList?t.classList.contains(r):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+r+" ")!==-1}function x(t,r){t.classList?t.classList.add(r):N(t,r)||(typeof t.className=="string"?t.className=t.className+" "+r:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+r))}function v(t,r){return t.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function M(t,r){t.classList?t.classList.remove(r):typeof t.className=="string"?t.className=v(t.className,r):t.setAttribute("class",v(t.className&&t.className.baseVal||"",r))}export{q as a,F as b,T as c,P as d,x as e,m as l,l as o,$ as q,M as r,D as s,O as t};
