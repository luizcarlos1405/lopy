var g1=Object.defineProperty;var Q=Object.getOwnPropertySymbols;var _1=Object.prototype.hasOwnProperty,w1=Object.prototype.propertyIsEnumerable;var W=(a,e,t)=>e in a?g1(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,X=(a,e)=>{for(var t in e||(e={}))_1.call(e,t)&&W(a,t,e[t]);if(Q)for(var t of Q(e))w1.call(e,t)&&W(a,t,e[t]);return a};import{S as d1,i as m1,s as v1,l as Y,g as I,e as k,t as S,k as V,c as E,a as j,h as x,m as B,d as g,b as w,H as f,T as A,aj as b1,ak as k1,a2 as z,R as E1,j as z1,N as Z,al as $,V as f1,am as j1,an as M1,M as y1,ao as C1,w as e1,x as t1,y as a1,ap as l1,aq as H1,q as s1,o as n1,B as o1,L as U}from"../../../chunks/vendor-c0a95dcb.js";import{g as V1,R as B1,a as A1,e as D1,p as O1}from"../../../chunks/stores-2000987a.js";import"../../../chunks/singletons-d1fb5791.js";const T1=a=>{const e=t=>{a&&!a.contains(t.target)&&!t.defaultPrevented&&a.dispatchEvent(new CustomEvent("clickedOutside",a))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}};function c1(a,e,t){const l=a.slice();return l[9]=e[t][0],l[10]=e[t][1],l}function i1(a,e,t){const l=a.slice();return l[13]=e[t].emoji,l[9]=e[t].group,l}function r1(a){let e,t=(a[13]||"")+"",l,c,i,d;function u(){return a[7](a[13])}return{c(){e=k("div"),l=S(t),c=V(),this.h()},l(r){e=E(r,"DIV",{class:!0});var h=j(e);l=x(h,t),c=B(h),h.forEach(g),this.h()},h(){w(e,"class","text-md max-h-8 max-w-lg cursor-pointer")},m(r,h){I(r,e,h),f(e,l),f(e,c),i||(d=A(e,"click",u),i=!0)},p(r,h){a=r},d(r){r&&g(e),i=!1,d()}}}function h1(a){let e,t=a[2]===a[9]&&r1(a);return{c(){t&&t.c(),e=Y()},l(l){t&&t.l(l),e=Y()},m(l,c){t&&t.m(l,c),I(l,e,c)},p(l,c){l[2]===l[9]?t?t.p(l,c):(t=r1(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&g(e)}}}function u1(a){let e,t,l=a[10]+"",c,i,d;function u(){return a[8](a[9])}return{c(){e=k("button"),t=new b1,c=V(),this.h()},l(r){e=E(r,"BUTTON",{class:!0});var h=j(e);t=k1(h),c=B(h),h.forEach(g),this.h()},h(){t.a=c,w(e,"class","font-xs btn btn-square btn-sm cursor-pointer fill-current p-1"),z(e,"btn-accent",a[9]===a[2]),z(e,"btn-ghost",a[9]!==a[2])},m(r,h){I(r,e,h),t.m(l,e),f(e,c),i||(d=A(e,"click",u),i=!0)},p(r,h){a=r,h&12&&z(e,"btn-accent",a[9]===a[2]),h&12&&z(e,"btn-ghost",a[9]!==a[2])},d(r){r&&g(e),i=!1,d()}}}function I1(a){let e,t,l,c,i,d,u,r,h,H,M=a[4],n=[];for(let s=0;s<M.length;s+=1)n[s]=h1(i1(a,M,s));let m=Object.entries(a[3]),v=[];for(let s=0;s<m.length;s+=1)v[s]=u1(c1(a,m,s));return{c(){e=k("div"),t=k("div"),l=S(a[0]),c=V(),i=k("div"),d=k("div");for(let s=0;s<n.length;s+=1)n[s].c();u=V(),r=k("div");for(let s=0;s<v.length;s+=1)v[s].c();this.h()},l(s){e=E(s,"DIV",{class:!0});var p=j(e);t=E(p,"DIV",{class:!0});var o=j(t);l=x(o,a[0]),o.forEach(g),c=B(p),i=E(p,"DIV",{class:!0});var _=j(i);d=E(_,"DIV",{class:!0});var O=j(d);for(let y=0;y<n.length;y+=1)n[y].l(O);O.forEach(g),u=B(_),r=E(_,"DIV",{class:!0});var D=j(r);for(let y=0;y<v.length;y+=1)v[y].l(D);D.forEach(g),_.forEach(g),p.forEach(g),this.h()},h(){w(t,"class","cursor-pointer text-2xl"),w(d,"class","z-30 grid h-full w-full grid-cols-9 gap-1 overflow-y-scroll overscroll-contain p-2"),w(r,"class","bottom-0 z-50 grid grid-cols-9 justify-items-center rounded-b-3xl bg-base-200 p-2"),w(i,"class","fixed h-80 w-max flex flex-col rounded-3xl bg-base-100 transition-all"),z(i,"scale-0",!a[1]),z(i,"-translate-y-40",!a[1]),z(i,"-translate-x-36",!a[1]),z(i,"-translate-y-96",a[1]),z(i,"-translate-x-6",a[1]),z(i,"scale-100",a[1]),w(e,"class","relative text-center")},m(s,p){I(s,e,p),f(e,t),f(t,l),f(e,c),f(e,i),f(i,d);for(let o=0;o<n.length;o+=1)n[o].m(d,null);f(i,u),f(i,r);for(let o=0;o<v.length;o+=1)v[o].m(r,null);h||(H=[A(t,"click",a[6]),E1(T1.call(null,e)),A(e,"clickedOutside",a[5])],h=!0)},p(s,[p]){if(p&1&&z1(l,s[0]),p&21){M=s[4];let o;for(o=0;o<M.length;o+=1){const _=i1(s,M,o);n[o]?n[o].p(_,p):(n[o]=h1(_),n[o].c(),n[o].m(d,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=M.length}if(p&12){m=Object.entries(s[3]);let o;for(o=0;o<m.length;o+=1){const _=c1(s,m,o);v[o]?v[o].p(_,p):(v[o]=u1(_),v[o].c(),v[o].m(r,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=m.length}p&2&&z(i,"scale-0",!s[1]),p&2&&z(i,"-translate-y-40",!s[1]),p&2&&z(i,"-translate-x-36",!s[1]),p&2&&z(i,"-translate-y-96",s[1]),p&2&&z(i,"-translate-x-6",s[1]),p&2&&z(i,"scale-100",s[1])},i:Z,o:Z,d(s){s&&g(e),$(n,s),$(v,s),h=!1,f1(H)}}}function L1(a,e,t){let{value:l="\u2709\uFE0F"}=e,{open:c=!1}=e;const i={"Smileys & Emotion":"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20M8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-.8 8c-.7 1.2-1.8 2-3.3 2-1.5 0-2.7-.8-3.4-2H15m3-2H6a6 6 0 1 0 12 0'></path></svg>","People & Body":"<svg xmlns='http://www.w3.org/2000/svg' width='24' viewBox='0 0 24 24' height='24'><path d='M15.8 11.4C15.1 11.5 14.4 11.8 13.8 12 12.8 12.3 12.3 12.6 12 12.7 11.7 12.6 11.4 12.4 10.7 12.1 9.6 11.7 8.4 11.3 7.1 11.5c-0.4 0-0.7 0.1-1.1 0.3-1.5 0.8-2.4 2.3-3 3.9-0.5 1.6-0.7 3.3-0.3 4.8 0.3 1.4 1.5 2.1 2.4 2.6C7.4 24.1 9.9 23.8 12 23.5c2.1 0.2 4.6 0.6 6.9-0.4 1-0.4 2.1-1.2 2.4-2.6 0.3-1.5 0.2-3.3-0.3-4.8-0.5-1.6-1.5-3.1-3-3.9-0.7-0.4-1.4-0.5-2.1-0.4zm-8.5 2.1c0.6-0.1 1.7 0.2 2.6 0.5 0.9 0.3 1.6 0.7 1.6 0.7L12 15 12.5 14.7c0 0 0.9-0.5 2-0.8 1.1-0.4 2.3-0.4 2.5-0.3 0.9 0.5 1.6 1.5 2 2.7 0.4 1.2 0.5 2.7 0.3 3.8-0.1 0.3-0.6 0.9-1.3 1.1-1.6 0.7-3.7 0.5-5.9 0.3L12 21.5l-0.1 0C9.7 21.7 7.6 22 6 21.2 5.4 21 4.8 20.4 4.7 20.1 4.5 19 4.6 17.6 5 16.3c0.4-1.2 1.1-2.3 2-2.7 0.1 0 0.2-0.1 0.3-0.1z' /><path d='m11.8 0.3c-3.1 0-5.7 2.6-5.7 5.7 0 3.1 2.6 5.7 5.7 5.7 3.1 0 5.7-2.6 5.7-5.7 0-3.1-2.6-5.7-5.7-5.7zm0 2c2 0 3.7 1.6 3.7 3.7 0 2-1.6 3.7-3.7 3.7-2 0-3.7-1.6-3.7-3.7 0-2 1.6-3.7 3.7-3.7z'/></svg>","Animals & Nature":"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M15.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10.43-8h-.02c-.97 0-2.14.79-3.02 1.5A13.88 13.88 0 0 0 12 .99c-1.28 0-2.62.13-3.87.51C7.24.8 6.07 0 5.09 0h-.02C3.35 0 .07 2.67 0 7.03c-.04 2.47.28 4.23 1.04 5 .26.27.88.69 1.3.9.19 3.17.92 5.23 2.53 6.37.9.64 2.19.95 3.2 1.1-.03.2-.07.4-.07.6 0 1.77 2.35 3 4 3s4-1.23 4-3c0-.2-.04-.4-.07-.59 2.57-.38 5.43-1.87 5.92-7.58.4-.22.89-.57 1.1-.8.77-.76 1.09-2.52 1.05-5C23.93 2.67 20.65 0 18.93 0M3.23 9.13c-.24.29-.84 1.16-.9 1.24A9.67 9.67 0 0 1 2 7.08c.05-3.28 2.48-4.97 3.1-5.03.25.02.72.27 1.26.65A7.95 7.95 0 0 0 4 7.82c-.14.55-.4.86-.79 1.31M12 22c-.9 0-1.95-.7-2-1 0-.65.47-1.24 1-1.6v.6a1 1 0 1 0 2 0v-.6c.52.36 1 .95 1 1.6-.05.3-1.1 1-2 1m3-3.48v.02a4.75 4.75 0 0 0-1.26-1.02c1.09-.52 2.24-1.33 2.24-2.22 0-1.84-1.78-2.2-3.98-2.2s-3.98.36-3.98 2.2c0 .89 1.15 1.7 2.24 2.22A4.8 4.8 0 0 0 9 18.54v-.03a6.1 6.1 0 0 1-2.97-.84c-1.3-.92-1.84-3.04-1.86-6.48l.03-.04c.5-.82 1.49-1.45 1.8-3.1C6 6 7.36 4.42 8.36 3.53c1.01-.35 2.2-.53 3.59-.53 1.45 0 2.68.2 3.73.57 1 .9 2.32 2.46 2.32 4.48.31 1.65 1.3 2.27 1.8 3.1l.1.18c-.06 5.97-1.95 7.01-4.9 7.19m6.63-8.2l-.11-.2a7.59 7.59 0 0 0-.74-.98 3.02 3.02 0 0 1-.79-1.32 7.93 7.93 0 0 0-2.35-5.12c.53-.38 1-.63 1.26-.65.64.07 3.05 1.77 3.1 5.03.02 1.81-.35 3.22-.37 3.24'></path></svg>","Food & Drink":"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M17 5c-1.8 0-2.9.4-3.7 1 .5-1.3 1.8-3 4.7-3a1 1 0 0 0 0-2c-3 0-4.6 1.3-5.5 2.5l-.2.2c-.6-1.9-1.5-3.7-3-3.7C8.5 0 7.7.3 7 1c-2 1.5-1.7 2.9-.5 4C3.6 5.2 0 7.4 0 13c0 4.6 5 11 9 11 2 0 2.4-.5 3-1 .6.5 1 1 3 1 4 0 9-6.4 9-11 0-6-4-8-7-8M8.2 2.5c.7-.5 1-.5 1-.5.4.2 1 1.4 1.4 3-1.6-.6-2.8-1.3-3-1.8l.6-.7M15 22c-1 0-1.2-.1-1.6-.4l-.1-.2a2 2 0 0 0-2.6 0l-.1.2c-.4.3-.5.4-1.6.4-2.8 0-7-5.4-7-9 0-6 4.5-6 5-6 2 0 2.5.4 3.4 1.2l.3.3a2 2 0 0 0 2.6 0l.3-.3c1-.8 1.5-1.2 3.4-1.2.5 0 5 .1 5 6 0 3.6-4.2 9-7 9'></path></svg>","Travel & Places":"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M6.5 12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m11-3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m5-5.5l-1-.4-.1-.1h.6c.6 0 1-.4 1-1 0-1-.9-2-2-2h-.6l-.8-1.7A3 3 0 0 0 16.8 2H7.2a3 3 0 0 0-2.8 2.3L3.6 6H3a2 2 0 0 0-2 2c0 .6.4 1 1 1h.6v.1l-1 .4a2 2 0 0 0-1.4 2l.7 7.6a1 1 0 0 0 1 .9H3v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h6v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h1.1a1 1 0 0 0 1-.9l.7-7.5a2 2 0 0 0-1.3-2.1M6.3 4.9c.1-.5.5-.9 1-.9h9.5c.4 0 .8.4 1 .9L19.2 9H4.7l1.6-4.1zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.2-3H2.8l-.7-6.6.9-.4h18l.9.4-.7 6.6z'></path></svg>",Activities:"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m10 11h-5c.3-2.5 1.3-4.8 2-6.1a10 10 0 0 1 3 6.1m-9 0V2a10 10 0 0 1 4.4 1.6A18 18 0 0 0 15 11h-2zm-2 0H9a18 18 0 0 0-2.4-7.4A10 10 0 0 1 11 2.1V11zm0 2v9a10 10 0 0 1-4.4-1.6A18 18 0 0 0 9 13h2zm4 0a18 18 0 0 0 2.4 7.4 10 10 0 0 1-4.4 1.5V13h2zM5 4.9c.7 1.3 1.7 3.6 2 6.1H2a10 10 0 0 1 3-6.1M2 13h5c-.3 2.5-1.3 4.8-2 6.1A10 10 0 0 1 2 13m17 6.1c-.7-1.3-1.7-3.6-2-6.1h5a10 10 0 0 1-3 6.1'></path></svg>",Objects:"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M12 0a9 9 0 0 0-5 16.5V21s2 3 5 3 5-3 5-3v-4.5A9 9 0 0 0 12 0zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM9 17.5a9 9 0 0 0 6 0v.8a7 7 0 0 1-3 .7 7 7 0 0 1-3-.7v-.8zm.2 3a8.9 8.9 0 0 0 2.8.5c1 0 1.9-.2 2.8-.5-.6.7-1.6 1.5-2.8 1.5-1.1 0-2.1-.8-2.8-1.5zm5.5-8.1c-.8 0-1.1-.8-1.5-1.8-.5-1-.7-1.5-1.2-1.5s-.8.5-1.3 1.5c-.4 1-.8 1.8-1.6 1.8h-.3c-.5-.2-.8-.7-1.3-1.8l-.2-1A3 3 0 0 0 7 9a1 1 0 0 1 0-2c1.7 0 2 1.4 2.2 2.1.5-1 1.3-2 2.8-2 1.5 0 2.3 1.1 2.7 2.1.2-.8.6-2.2 2.3-2.2a1 1 0 1 1 0 2c-.2 0-.3.5-.3.7a6.5 6.5 0 0 1-.3 1c-.5 1-.8 1.7-1.7 1.7'></path></svg>",Symbols:"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M0 0h11v2H0zm4 11h3V6h4V4H0v2h4zm11.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-2.99a.5.5 0 0 1 0 .99c-.28 0-.5-.22-.5-.5s.22-.49.5-.49m6 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 2.99a.5.5 0 0 1-.5-.5.5.5 0 0 1 1 .01.5.5 0 0 1-.5.49m.5-9l-9 9 1.51 1.5 9-9zm-5-2c2.2 0 4-1.12 4-2.5V2s.98-.16 1.5.95C23 4.05 23 6 23 6s1-1.12 1-3.13C24-.02 21 0 21 0h-2v6.35A5.85 5.85 0 0 0 17 6c-2.2 0-4 1.12-4 2.5s1.8 2.5 4 2.5m-6.7 9.48L8.82 18.9a47.54 47.54 0 0 1-1.44 1.13c-.3-.3-.99-1.02-2.04-2.19.9-.83 1.47-1.46 1.72-1.89s.38-.87.38-1.33c0-.6-.27-1.18-.82-1.76-.54-.58-1.33-.87-2.35-.87-1 0-1.79.29-2.34.87-.56.6-.83 1.18-.83 1.79 0 .81.42 1.75 1.25 2.8a6.57 6.57 0 0 0-1.8 1.79 3.46 3.46 0 0 0-.51 1.83c0 .86.3 1.56.92 2.1a3.5 3.5 0 0 0 2.42.83c1.17 0 2.44-.38 3.81-1.14L8.23 24h2.82l-2.09-2.38 1.34-1.14zM3.56 14.1a1.02 1.02 0 0 1 .73-.28c.31 0 .56.08.75.25a.85.85 0 0 1 .28.66c0 .52-.42 1.11-1.26 1.78-.53-.65-.8-1.23-.8-1.74a.9.9 0 0 1 .3-.67m.18 7.9c-.43 0-.78-.12-1.06-.35-.28-.23-.41-.49-.41-.76 0-.6.5-1.3 1.52-2.09a31.23 31.23 0 0 0 2.25 2.44c-.92.5-1.69.76-2.3.76'></path></svg>",Flags:"<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M0 0l6 24h2L2 0zm21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.6 3h7.8l2 8H8.6l-2-8zm8.8 10l-2.9 1.9-.4-1.9h3.3zm3.6 0l-1.5-6h2l2 8H16l3-2z'></path></svg>"},d=Object.entries(j1).filter(([n,{emoji_version:m}])=>+m<=11&&n!=="\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F").map(([n,{group:m}])=>({emoji:n,group:m}));let u="Smileys & Emotion";const r=()=>{t(1,c=!1)},h=()=>{t(1,c=!c)},H=n=>{console.log(n),t(0,l=n)},M=n=>{t(2,u=n)};return a.$$set=n=>{"value"in n&&t(0,l=n.value),"open"in n&&t(1,c=n.open)},[l,c,u,i,d,r,h,H,M]}class N1 extends d1{constructor(e){super();m1(this,e,L1,I1,v1,{value:0,open:1})}}function S1(a){let e,t,l,c,i,d,u,r,h,H,M,n,m,v,s,p,o,_,O,D,y,P;c=new M1({props:{size:"24"}});function p1(b){a[4](b)}let q={};return a[0].emoji!==void 0&&(q.value=a[0].emoji),h=new N1({props:q}),y1.push(()=>C1(h,"value",p1)),{c(){e=k("div"),t=k("div"),l=k("button"),e1(c.$$.fragment),i=V(),d=k("div"),u=k("div"),r=k("span"),e1(h.$$.fragment),M=V(),n=k("input"),m=V(),v=k("div"),s=k("button"),p=S("Cancel"),o=V(),_=k("button"),O=S("Save"),this.h()},l(b){e=E(b,"DIV",{class:!0});var C=j(e);t=E(C,"DIV",{class:!0});var T=j(t);l=E(T,"BUTTON",{class:!0});var R=j(l);t1(c.$$.fragment,R),R.forEach(g),T.forEach(g),i=B(C),d=E(C,"DIV",{class:!0});var F=j(d);u=E(F,"DIV",{class:!0});var L=j(u);r=E(L,"SPAN",{class:!0});var G=j(r);t1(h.$$.fragment,G),G.forEach(g),M=B(L),n=E(L,"INPUT",{class:!0,placeholder:!0}),L.forEach(g),F.forEach(g),m=B(C),v=E(C,"DIV",{class:!0});var N=j(v);s=E(N,"BUTTON",{class:!0});var J=j(s);p=x(J,"Cancel"),J.forEach(g),o=B(N),_=E(N,"BUTTON",{class:!0});var K=j(_);O=x(K,"Save"),K.forEach(g),N.forEach(g),C.forEach(g),this.h()},h(){w(l,"class","text-neutral-content"),w(t,"class","p-8"),w(r,"class","rounded-l-3xl border-r border-base-content bg-base-300 p-2"),w(n,"class","reset-input text-base"),w(n,"placeholder","Name"),w(u,"class","flex w-full items-center space-x-2 rounded-3xl border bg-base-200"),w(d,"class","border-box col-start-2 col-end-12 row-start-2 flex space-x-2 self-end overflow-visible rounded-3xl bg-base-100 p-4"),w(s,"class","btn"),w(_,"class","btn btn-primary"),w(v,"class","col-start-2 col-end-12 row-start-3 my-8 flex justify-around"),w(e,"class","layout-template-rows grid-layout min-h-full svelte-1jdmggp")},m(b,C){I(b,e,C),f(e,t),f(t,l),a1(c,l,null),f(e,i),f(e,d),f(d,u),f(u,r),a1(h,r,null),f(u,M),f(u,n),l1(n,a[0].name),f(e,m),f(e,v),f(v,s),f(s,p),f(v,o),f(v,_),f(_,O),D=!0,y||(P=[A(l,"click",a[2]),A(n,"input",a[5]),A(s,"click",a[6]),A(_,"click",a[7])],y=!0)},p(b,[C]){const T={};!H&&C&1&&(H=!0,T.value=b[0].emoji,H1(()=>H=!1)),h.$set(T),C&1&&n.value!==b[0].name&&l1(n,b[0].name)},i(b){D||(s1(c.$$.fragment,b),s1(h.$$.fragment,b),D=!0)},o(b){n1(c.$$.fragment,b),n1(h.$$.fragment,b),D=!1},d(b){b&&g(e),o1(c),o1(h),y=!1,f1(P)}}}function x1(a,e,t){let l,c,i;U(a,A1,m=>t(1,l=m)),U(a,D1,m=>t(3,c=m)),U(a,O1,m=>t(8,i=m));const{id:d}=i.params;let u={emoji:"\u2709\uFE0F",name:""};const r=()=>{l.deleteEnvelope({_id:d}),window.history.back()};function h(m){a.$$.not_equal(u.emoji,m)&&(u.emoji=m,t(0,u),t(3,c))}function H(){u.name=this.value,t(0,u),t(3,c)}const M=()=>{console.log("back"),window.history.back()},n=()=>{u.name&&(l==null||l.saveEnvelope(X({},u)),V1(B1.HOME))};return a.$$.update=()=>{a.$$.dirty&9&&d!=="new"&&t(0,u=c.find(({_id:m})=>m===d)||u)},[u,l,r,c,h,H,M,n]}class F1 extends d1{constructor(e){super();m1(this,e,x1,S1,v1,{})}}export{F1 as default};
