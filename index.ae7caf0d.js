function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,u,f,a,c=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,c=e,u=t.apply(r,n)}function h(t){return c=t,f=setTimeout(w,e),l?g(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function w(){var t=v();if(j(t))return T(t);f=setTimeout(w,function(t){var n=e-(t-a);return s?p(n,r-(t-c)):n}(t))}function T(t){return f=void 0,m&&o?g(t):(o=i=void 0,u)}function O(){var t=v(),n=j(t);if(o=arguments,i=this,a=t,n){if(void 0===f)return h(a);if(s)return f=setTimeout(w,e),g(a)}return void 0===f&&(f=setTimeout(w,e)),u}return e=y(e)||0,b(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},O.flush=function(){return void 0===f?u:T(v())},O};let m=null;const g=document.querySelector("input#search-box");g.addEventListener("input",t(e)((function(){if(m=g.value.trim(),!m)return;(t=m,fetch(`https://restcountries.com/v3.1/name/${t}?fields=name,capital,population,flags.svg,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))).then((t=>{console.log(t)}));var t}),300));
//# sourceMappingURL=index.ae7caf0d.js.map
