var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,n=(e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s;import{S as r,i as o,s as i,e as h,k as m,c as d,a as g,d as p,n as u,b as v,f,F as $,O as w,L as x,l as b,t as y,g as z,a5 as E,a6 as j,a7 as M,a8 as k,T as O,h as V,K as H,a9 as A,j as C,m as D,o as L,x as P,u as B,v as I,N as S,aa as N,ab as T,ac as F,ad as Y}from"../../../chunks/vendor-ce7306b2.js";import{T as _,B as K}from"../../../chunks/Button-dfaa7509.js";import{P as R,T as q,g as G,e as J,a as Q,R as U}from"../../../chunks/constants-fd42dfe4.js";import"../../../chunks/singletons-12a22614.js";const W=t=>{const e=e=>{!t||t.contains(e.target)||e.defaultPrevented||(e.stopPropagation(),t.dispatchEvent(new CustomEvent("clickedOutside",t)))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}};function X(t,e,a){const s=t.slice();return s[9]=e[a][0],s[10]=e[a][1],s}function Z(t,e,a){const s=t.slice();return s[13]=e[a].emoji,s[9]=e[a].group,s}function tt(t){let e,a,s,l,c,n,r,o=t[5],i=[];for(let h=0;h<o.length;h+=1)i[h]=at(Z(t,o,h));let b=Object.entries(t[4]),y=[];for(let h=0;h<b.length;h+=1)y[h]=st(X(t,b,h));return{c(){e=h("div"),a=h("div");for(let t=0;t<i.length;t+=1)i[t].c();s=m(),l=h("div");for(let t=0;t<y.length;t+=1)y[t].c();this.h()},l(t){e=d(t,"DIV",{class:!0});var c=g(e);a=d(c,"DIV",{class:!0});var n=g(a);for(let e=0;e<i.length;e+=1)i[e].l(n);n.forEach(p),s=u(c),l=d(c,"DIV",{class:!0});var r=g(l);for(let e=0;e<y.length;e+=1)y[e].l(r);r.forEach(p),c.forEach(p),this.h()},h(){v(a,"class","z-30 grid grid-cols-9 gap-1 p-2 w-full h-full bg-white overflow-y-scroll overscroll-contain"),v(l,"class","sticky bottom-0 z-50 p-2 bg-white rounded-b shadow grid grid-cols-9 gap-1 justify-items-center"),v(e,"class","absolute flex flex-col bottom-14 -left-9 h-80 w-max rounded shadow-lg overflow-hidden")},m(o,h){f(o,e,h),$(e,a);for(let t=0;t<i.length;t+=1)i[t].m(a,null);$(e,s),$(e,l);for(let t=0;t<y.length;t+=1)y[t].m(l,null);n||(r=[w(c=W.call(null,e)),x(e,"clickedOutside",t[1])],n=!0)},p(t,e){if(43&e){let s;for(o=t[5],s=0;s<o.length;s+=1){const l=Z(t,o,s);i[s]?i[s].p(l,e):(i[s]=at(l),i[s].c(),i[s].m(a,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}if(24&e){let a;for(b=Object.entries(t[4]),a=0;a<b.length;a+=1){const s=X(t,b,a);y[a]?y[a].p(s,e):(y[a]=st(s),y[a].c(),y[a].m(l,null))}for(;a<y.length;a+=1)y[a].d(1);y.length=b.length}},d(t){t&&p(e),k(i,t),k(y,t),n=!1,O(r)}}}function et(t){let e,a,s,l,c,n=t[13]+"";function r(){return t[7](t[13])}return{c(){e=h("div"),a=y(n),s=m(),this.h()},l(t){e=d(t,"DIV",{class:!0});var l=g(e);a=z(l,n),s=u(l),l.forEach(p),this.h()},h(){v(e,"class","cursor-pointer text-md max-h-8 max-w-lg")},m(t,n){f(t,e,n),$(e,a),$(e,s),l||(c=x(e,"click",r),l=!0)},p(e,a){t=e},d(t){t&&p(e),l=!1,c()}}}function at(t){let e,a=t[3]===t[9]&&et(t);return{c(){a&&a.c(),e=b()},l(t){a&&a.l(t),e=b()},m(t,s){a&&a.m(t,s),f(t,e,s)},p(t,s){t[3]===t[9]?a?a.p(t,s):(a=et(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&p(e)}}}function st(t){let e,a,s,l,c,n=t[10]+"";function r(){return t[8](t[9])}return{c(){e=h("span"),a=new E,s=m(),this.h()},l(t){e=d(t,"SPAN",{class:!0});var l=g(e);a=j(l),s=u(l),l.forEach(p),this.h()},h(){a.a=s,v(e,"class","font-xs cursor-pointer fill-current bg-white text-gray-500"),M(e,"text-secondary",t[9]===t[3]),M(e,"text-gray-500",t[9]!==t[3])},m(t,o){f(t,e,o),a.m(n,e),$(e,s),l||(c=x(e,"click",r),l=!0)},p(a,s){t=a,24&s&&M(e,"text-secondary",t[9]===t[3]),24&s&&M(e,"text-gray-500",t[9]!==t[3])},d(t){t&&p(e),l=!1,c()}}}function lt(t){let e,a,s,l,c,n,r=t[2]&&tt(t);return{c(){e=h("div"),a=h("div"),s=y(t[0]),l=m(),r&&r.c(),this.h()},l(c){e=d(c,"DIV",{class:!0});var n=g(e);a=d(n,"DIV",{class:!0});var o=g(a);s=z(o,t[0]),o.forEach(p),l=u(n),r&&r.l(n),n.forEach(p),this.h()},h(){v(a,"class","cursor-pointer"),v(e,"class","relative text-2xl overflow-x-visible text-center")},m(o,i){f(o,e,i),$(e,a),$(a,s),$(e,l),r&&r.m(e,null),c||(n=x(a,"click",t[6]),c=!0)},p(t,[a]){1&a&&V(s,t[0]),t[2]?r?r.p(t,a):(r=tt(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:H,o:H,d(t){t&&p(e),r&&r.d(),c=!1,n()}}}function ct(t,e,a){const s=()=>{a(2,r=!1),a(3,o="Smileys & Emotion")};let{value:l="✉️"}=e;const c={"Smileys & Emotion":"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20M8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-.8 8c-.7 1.2-1.8 2-3.3 2-1.5 0-2.7-.8-3.4-2H15m3-2H6a6 6 0 1 0 12 0'></path></svg>","People & Body":"<svg xmlns='http://www.w3.org/2000/svg' width='24' viewBox='0 0 24 24' height='24'><path d='M15.8 11.4C15.1 11.5 14.4 11.8 13.8 12 12.8 12.3 12.3 12.6 12 12.7 11.7 12.6 11.4 12.4 10.7 12.1 9.6 11.7 8.4 11.3 7.1 11.5c-0.4 0-0.7 0.1-1.1 0.3-1.5 0.8-2.4 2.3-3 3.9-0.5 1.6-0.7 3.3-0.3 4.8 0.3 1.4 1.5 2.1 2.4 2.6C7.4 24.1 9.9 23.8 12 23.5c2.1 0.2 4.6 0.6 6.9-0.4 1-0.4 2.1-1.2 2.4-2.6 0.3-1.5 0.2-3.3-0.3-4.8-0.5-1.6-1.5-3.1-3-3.9-0.7-0.4-1.4-0.5-2.1-0.4zm-8.5 2.1c0.6-0.1 1.7 0.2 2.6 0.5 0.9 0.3 1.6 0.7 1.6 0.7L12 15 12.5 14.7c0 0 0.9-0.5 2-0.8 1.1-0.4 2.3-0.4 2.5-0.3 0.9 0.5 1.6 1.5 2 2.7 0.4 1.2 0.5 2.7 0.3 3.8-0.1 0.3-0.6 0.9-1.3 1.1-1.6 0.7-3.7 0.5-5.9 0.3L12 21.5l-0.1 0C9.7 21.7 7.6 22 6 21.2 5.4 21 4.8 20.4 4.7 20.1 4.5 19 4.6 17.6 5 16.3c0.4-1.2 1.1-2.3 2-2.7 0.1 0 0.2-0.1 0.3-0.1z' /><path d='m11.8 0.3c-3.1 0-5.7 2.6-5.7 5.7 0 3.1 2.6 5.7 5.7 5.7 3.1 0 5.7-2.6 5.7-5.7 0-3.1-2.6-5.7-5.7-5.7zm0 2c2 0 3.7 1.6 3.7 3.7 0 2-1.6 3.7-3.7 3.7-2 0-3.7-1.6-3.7-3.7 0-2 1.6-3.7 3.7-3.7z'/></svg>","Animals & Nature":"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M15.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10.43-8h-.02c-.97 0-2.14.79-3.02 1.5A13.88 13.88 0 0 0 12 .99c-1.28 0-2.62.13-3.87.51C7.24.8 6.07 0 5.09 0h-.02C3.35 0 .07 2.67 0 7.03c-.04 2.47.28 4.23 1.04 5 .26.27.88.69 1.3.9.19 3.17.92 5.23 2.53 6.37.9.64 2.19.95 3.2 1.1-.03.2-.07.4-.07.6 0 1.77 2.35 3 4 3s4-1.23 4-3c0-.2-.04-.4-.07-.59 2.57-.38 5.43-1.87 5.92-7.58.4-.22.89-.57 1.1-.8.77-.76 1.09-2.52 1.05-5C23.93 2.67 20.65 0 18.93 0M3.23 9.13c-.24.29-.84 1.16-.9 1.24A9.67 9.67 0 0 1 2 7.08c.05-3.28 2.48-4.97 3.1-5.03.25.02.72.27 1.26.65A7.95 7.95 0 0 0 4 7.82c-.14.55-.4.86-.79 1.31M12 22c-.9 0-1.95-.7-2-1 0-.65.47-1.24 1-1.6v.6a1 1 0 1 0 2 0v-.6c.52.36 1 .95 1 1.6-.05.3-1.1 1-2 1m3-3.48v.02a4.75 4.75 0 0 0-1.26-1.02c1.09-.52 2.24-1.33 2.24-2.22 0-1.84-1.78-2.2-3.98-2.2s-3.98.36-3.98 2.2c0 .89 1.15 1.7 2.24 2.22A4.8 4.8 0 0 0 9 18.54v-.03a6.1 6.1 0 0 1-2.97-.84c-1.3-.92-1.84-3.04-1.86-6.48l.03-.04c.5-.82 1.49-1.45 1.8-3.1C6 6 7.36 4.42 8.36 3.53c1.01-.35 2.2-.53 3.59-.53 1.45 0 2.68.2 3.73.57 1 .9 2.32 2.46 2.32 4.48.31 1.65 1.3 2.27 1.8 3.1l.1.18c-.06 5.97-1.95 7.01-4.9 7.19m6.63-8.2l-.11-.2a7.59 7.59 0 0 0-.74-.98 3.02 3.02 0 0 1-.79-1.32 7.93 7.93 0 0 0-2.35-5.12c.53-.38 1-.63 1.26-.65.64.07 3.05 1.77 3.1 5.03.02 1.81-.35 3.22-.37 3.24'></path></svg>","Food & Drink":"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M17 5c-1.8 0-2.9.4-3.7 1 .5-1.3 1.8-3 4.7-3a1 1 0 0 0 0-2c-3 0-4.6 1.3-5.5 2.5l-.2.2c-.6-1.9-1.5-3.7-3-3.7C8.5 0 7.7.3 7 1c-2 1.5-1.7 2.9-.5 4C3.6 5.2 0 7.4 0 13c0 4.6 5 11 9 11 2 0 2.4-.5 3-1 .6.5 1 1 3 1 4 0 9-6.4 9-11 0-6-4-8-7-8M8.2 2.5c.7-.5 1-.5 1-.5.4.2 1 1.4 1.4 3-1.6-.6-2.8-1.3-3-1.8l.6-.7M15 22c-1 0-1.2-.1-1.6-.4l-.1-.2a2 2 0 0 0-2.6 0l-.1.2c-.4.3-.5.4-1.6.4-2.8 0-7-5.4-7-9 0-6 4.5-6 5-6 2 0 2.5.4 3.4 1.2l.3.3a2 2 0 0 0 2.6 0l.3-.3c1-.8 1.5-1.2 3.4-1.2.5 0 5 .1 5 6 0 3.6-4.2 9-7 9'></path></svg>","Travel & Places":"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M6.5 12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m11-3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m5-5.5l-1-.4-.1-.1h.6c.6 0 1-.4 1-1 0-1-.9-2-2-2h-.6l-.8-1.7A3 3 0 0 0 16.8 2H7.2a3 3 0 0 0-2.8 2.3L3.6 6H3a2 2 0 0 0-2 2c0 .6.4 1 1 1h.6v.1l-1 .4a2 2 0 0 0-1.4 2l.7 7.6a1 1 0 0 0 1 .9H3v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h6v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h1.1a1 1 0 0 0 1-.9l.7-7.5a2 2 0 0 0-1.3-2.1M6.3 4.9c.1-.5.5-.9 1-.9h9.5c.4 0 .8.4 1 .9L19.2 9H4.7l1.6-4.1zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.2-3H2.8l-.7-6.6.9-.4h18l.9.4-.7 6.6z'></path></svg>",Activities:"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m10 11h-5c.3-2.5 1.3-4.8 2-6.1a10 10 0 0 1 3 6.1m-9 0V2a10 10 0 0 1 4.4 1.6A18 18 0 0 0 15 11h-2zm-2 0H9a18 18 0 0 0-2.4-7.4A10 10 0 0 1 11 2.1V11zm0 2v9a10 10 0 0 1-4.4-1.6A18 18 0 0 0 9 13h2zm4 0a18 18 0 0 0 2.4 7.4 10 10 0 0 1-4.4 1.5V13h2zM5 4.9c.7 1.3 1.7 3.6 2 6.1H2a10 10 0 0 1 3-6.1M2 13h5c-.3 2.5-1.3 4.8-2 6.1A10 10 0 0 1 2 13m17 6.1c-.7-1.3-1.7-3.6-2-6.1h5a10 10 0 0 1-3 6.1'></path></svg>",Objects:"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M12 0a9 9 0 0 0-5 16.5V21s2 3 5 3 5-3 5-3v-4.5A9 9 0 0 0 12 0zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM9 17.5a9 9 0 0 0 6 0v.8a7 7 0 0 1-3 .7 7 7 0 0 1-3-.7v-.8zm.2 3a8.9 8.9 0 0 0 2.8.5c1 0 1.9-.2 2.8-.5-.6.7-1.6 1.5-2.8 1.5-1.1 0-2.1-.8-2.8-1.5zm5.5-8.1c-.8 0-1.1-.8-1.5-1.8-.5-1-.7-1.5-1.2-1.5s-.8.5-1.3 1.5c-.4 1-.8 1.8-1.6 1.8h-.3c-.5-.2-.8-.7-1.3-1.8l-.2-1A3 3 0 0 0 7 9a1 1 0 0 1 0-2c1.7 0 2 1.4 2.2 2.1.5-1 1.3-2 2.8-2 1.5 0 2.3 1.1 2.7 2.1.2-.8.6-2.2 2.3-2.2a1 1 0 1 1 0 2c-.2 0-.3.5-.3.7a6.5 6.5 0 0 1-.3 1c-.5 1-.8 1.7-1.7 1.7'></path></svg>",Symbols:"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M0 0h11v2H0zm4 11h3V6h4V4H0v2h4zm11.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-2.99a.5.5 0 0 1 0 .99c-.28 0-.5-.22-.5-.5s.22-.49.5-.49m6 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 2.99a.5.5 0 0 1-.5-.5.5.5 0 0 1 1 .01.5.5 0 0 1-.5.49m.5-9l-9 9 1.51 1.5 9-9zm-5-2c2.2 0 4-1.12 4-2.5V2s.98-.16 1.5.95C23 4.05 23 6 23 6s1-1.12 1-3.13C24-.02 21 0 21 0h-2v6.35A5.85 5.85 0 0 0 17 6c-2.2 0-4 1.12-4 2.5s1.8 2.5 4 2.5m-6.7 9.48L8.82 18.9a47.54 47.54 0 0 1-1.44 1.13c-.3-.3-.99-1.02-2.04-2.19.9-.83 1.47-1.46 1.72-1.89s.38-.87.38-1.33c0-.6-.27-1.18-.82-1.76-.54-.58-1.33-.87-2.35-.87-1 0-1.79.29-2.34.87-.56.6-.83 1.18-.83 1.79 0 .81.42 1.75 1.25 2.8a6.57 6.57 0 0 0-1.8 1.79 3.46 3.46 0 0 0-.51 1.83c0 .86.3 1.56.92 2.1a3.5 3.5 0 0 0 2.42.83c1.17 0 2.44-.38 3.81-1.14L8.23 24h2.82l-2.09-2.38 1.34-1.14zM3.56 14.1a1.02 1.02 0 0 1 .73-.28c.31 0 .56.08.75.25a.85.85 0 0 1 .28.66c0 .52-.42 1.11-1.26 1.78-.53-.65-.8-1.23-.8-1.74a.9.9 0 0 1 .3-.67m.18 7.9c-.43 0-.78-.12-1.06-.35-.28-.23-.41-.49-.41-.76 0-.6.5-1.3 1.52-2.09a31.23 31.23 0 0 0 2.25 2.44c-.92.5-1.69.76-2.3.76'></path></svg>",Flags:"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M0 0l6 24h2L2 0zm21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.6 3h7.8l2 8H8.6l-2-8zm8.8 10l-2.9 1.9-.4-1.9h3.3zm3.6 0l-1.5-6h2l2 8H16l3-2z'></path></svg>"},n=Object.entries(A).filter((([,{emoji_version:t}])=>+t<=11)).map((([t,{group:e}])=>({emoji:t,group:e})));let r=!1,o="Smileys & Emotion";return t.$$set=t=>{"value"in t&&a(0,l=t.value)},[l,s,r,o,c,n,()=>{console.log("open",r),a(2,r=!r)},t=>{a(0,l=t),s()},t=>{a(3,o=t)}]}class nt extends r{constructor(t){super(),o(this,t,ct,lt,i,{close:1,value:0})}get close(){return this.$$.ctx[1]}}function rt(t){let e,a,s,l=t[3]&&function(t){let e,a,s,l,c;return a=new Y({props:{size:"20"}}),{c(){e=h("div"),C(a.$$.fragment),this.h()},l(t){e=d(t,"DIV",{class:!0});var s=g(e);D(a.$$.fragment,s),s.forEach(p),this.h()},h(){v(e,"class","cursor-pointer ml-auto")},m(n,r){f(n,e,r),L(a,e,null),s=!0,l||(c=x(e,"click",t[5]),l=!0)},p:H,i(t){s||(P(a.$$.fragment,t),s=!0)},o(t){B(a.$$.fragment,t),s=!1},d(t){t&&p(e),I(a),l=!1,c()}}}(t);return{c(){e=y("LOPY\n\n    "),l&&l.c(),a=b()},l(t){e=z(t,"LOPY\n\n    "),l&&l.l(t),a=b()},m(t,c){f(t,e,c),l&&l.m(t,c),f(t,a,c),s=!0},p(t,e){t[3]&&l.p(t,e)},i(t){s||(P(l),s=!0)},o(t){B(l),s=!1},d(t){t&&p(e),l&&l.d(t),t&&p(a)}}}function ot(t){let e;return{c(){e=y("Cancel")},l(t){e=z(t,"Cancel")},m(t,a){f(t,e,a)},d(t){t&&p(e)}}}function it(t){let e;return{c(){e=y("Save")},l(t){e=z(t,"Save")},m(t,a){f(t,e,a)},d(t){t&&p(e)}}}function ht(t){let e,a,s,l,c,n,r,o,i,w,x,b,y,z,E,j;function M(e){t[6](e)}e=new q({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}});let k={};function O(e){t[7](e)}void 0!==t[1]&&(k.value=t[1]),n=new nt({props:k}),N.push((()=>T(n,"value",M)));let V={class:"bg-transparent placeholder-dark placeholder-opacity-70 resize-none border-0 border-l border-dotted border-background outline-none pl-2 text-dark text-3xl w-full",placeholder:"Name"};return void 0!==t[0]&&(V.value=t[0]),i=new _({props:V}),N.push((()=>T(i,"value",O))),y=new K({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),y.$on("click",t[8]),E=new K({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),E.$on("click",t[9]),{c(){C(e.$$.fragment),a=m(),s=h("div"),l=h("div"),c=h("div"),C(n.$$.fragment),o=m(),C(i.$$.fragment),x=m(),b=h("div"),C(y.$$.fragment),z=m(),C(E.$$.fragment),this.h()},l(t){D(e.$$.fragment,t),a=u(t),s=d(t,"DIV",{class:!0});var r=g(s);l=d(r,"DIV",{class:!0});var h=g(l);c=d(h,"DIV",{class:!0});var m=g(c);D(n.$$.fragment,m),o=u(m),D(i.$$.fragment,m),m.forEach(p),h.forEach(p),x=u(r),b=d(r,"DIV",{class:!0});var v=g(b);D(y.$$.fragment,v),z=u(v),D(E.$$.fragment,v),v.forEach(p),r.forEach(p),this.h()},h(){v(c,"class","flex w-full items-center pl-2 border rounded-3xl space-x-2 border-background"),v(l,"class","bg-primary border-box flex p-4 rounded-full space-x-2 space-y-1 "),v(b,"class","text-light flex justify-around"),v(s,"class","flex flex-col space-y-2 mt-auto justify-end p-4")},m(t,r){L(e,t,r),f(t,a,r),f(t,s,r),$(s,l),$(l,c),L(n,c,null),$(c,o),L(i,c,null),$(s,x),$(s,b),L(y,b,null),$(b,z),L(E,b,null),j=!0},p(t,a){const s={};2052&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s);const l={};!r&&2&a&&(r=!0,l.value=t[1],F((()=>r=!1))),n.$set(l);const c={};!w&&1&a&&(w=!0,c.value=t[0],F((()=>w=!1))),i.$set(c);const o={};2048&a&&(o.$$scope={dirty:a,ctx:t}),y.$set(o);const h={};2048&a&&(h.$$scope={dirty:a,ctx:t}),E.$set(h)},i(t){j||(P(e.$$.fragment,t),P(n.$$.fragment,t),P(i.$$.fragment,t),P(y.$$.fragment,t),P(E.$$.fragment,t),j=!0)},o(t){B(e.$$.fragment,t),B(n.$$.fragment,t),B(i.$$.fragment,t),B(y.$$.fragment,t),B(E.$$.fragment,t),j=!1},d(t){I(e,t),t&&p(a),t&&p(s),I(n),I(i),I(y),I(E)}}}function mt(t){let e,a;return e=new R({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,s){L(e,t,s),a=!0},p(t,[a]){const s={};2055&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){a||(P(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){I(e,t)}}}const dt=async({page:t})=>({props:t.params});function gt(t,r,o){let i,h;S(t,J,(t=>o(10,i=t))),S(t,Q,(t=>o(2,h=t)));let{id:m}=r;const d=i.find((t=>m===t._id));let g=(null==d?void 0:d.name)||"",p=(null==d?void 0:d.emoji)||void 0;return t.$$set=t=>{"id"in t&&o(4,m=t.id)},[g,p,h,d,m,()=>{h.deleteEnvelope(d),G(U.HOME)},function(t){p=t,o(1,p)},function(t){g=t,o(0,g)},()=>{window.history.back()},()=>{var t;g&&(h.saveEnvelope((t=((t,e)=>{for(var a in e||(e={}))l.call(e,a)&&n(t,a,e[a]);if(s)for(var a of s(e))c.call(e,a)&&n(t,a,e[a]);return t})({},d),e(t,a({name:g,emoji:p})))),G(U.HOME))}]}class pt extends r{constructor(t){super(),o(this,t,gt,mt,i,{id:4})}}export{pt as default,dt as load};
