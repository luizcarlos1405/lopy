import{S as E,i as K,s as j,F as q,l as y,a as I,G as A,m as b,h as f,c as N,n as T,p as r,H as k,b as C,I as M,J,K as R,f as U,t as D,L as F,j as G,M as S}from"../chunks/index-2c5b7e63.js";import{w as H}from"../chunks/index-a5fb40b1.js";function O(s){let u,t,c,d,_,n,i,h,p,m;const w=s[7].default,a=q(w,s,s[6],null);return{c(){u=y("meta"),t=y("link"),c=y("link"),d=y("link"),_=I(),n=y("main"),i=y("div"),h=I(),a&&a.c(),this.h()},l(e){const l=A('[data-svelte="svelte-1uxnp54"]',document.head);u=b(l,"META",{name:!0,content:!0}),t=b(l,"LINK",{rel:!0,href:!0,crossorigin:!0}),c=b(l,"LINK",{rel:!0,href:!0}),d=b(l,"LINK",{href:!0,rel:!0}),l.forEach(f),_=N(e),n=b(e,"MAIN",{"data-theme":!0,class:!0});var g=T(n);i=b(g,"DIV",{class:!0}),T(i).forEach(f),h=N(g),a&&a.l(g),g.forEach(f),this.h()},h(){r(u,"name","theme-color"),r(u,"content",s[2]),r(t,"rel","manifest"),r(t,"href","manifest.json"),r(t,"crossorigin","use-credentials"),r(c,"rel","preconnect"),r(c,"href","https://fonts.gstatic.com"),r(d,"href","https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"),r(d,"rel","stylesheet"),document.title="Lopy",r(i,"class","pattern fixed bottom-0 top-0 -z-50 h-full w-full svelte-ds9gq4"),r(n,"data-theme",p=s[4].currentTheme),r(n,"class","border-box relative h-screen w-screen overflow-x-hidden overflow-y-scroll text-base-content")},m(e,l){k(document.head,u),s[8](u),k(document.head,t),s[9](t),k(document.head,c),k(document.head,d),C(e,_,l),C(e,n,l),k(n,i),s[10](i),k(n,h),a&&a.m(n,null),m=!0},p(e,[l]){(!m||l&4)&&r(u,"content",e[2]),a&&a.p&&(!m||l&64)&&M(a,w,e,e[6],m?R(w,e[6],l,null):J(e[6]),null),(!m||l&16&&p!==(p=e[4].currentTheme))&&r(n,"data-theme",p)},i(e){m||(U(a,e),m=!0)},o(e){D(a,e),m=!1},d(e){f(u),s[8](null),f(t),s[9](null),f(c),f(d),e&&f(_),e&&f(n),s[10](null),a&&a.d(e)}}}const V="cupcake";function B(s,u,t){let c,{$$slots:d={},$$scope:_}=u,n=null,i=null,h="",p=null;const m=localStorage.getItem("theme"),a=H({currentTheme:m||V,themes:["light","dark","cupcake","bumblebee","corporate","synthwave","retro","valentine","halloween","garden","lofi","pastel","fantasy","luxury","dracula","cmyk","autumn","night","winter"]});F(s,a,o=>t(4,c=o)),G("themeStore",a);function e(o){S[o?"unshift":"push"](()=>{i=o,t(1,i),t(4,c),t(0,n),t(2,h),t(3,p)})}function l(o){S[o?"unshift":"push"](()=>{p=o,t(3,p)})}function g(o){S[o?"unshift":"push"](()=>{n=o,t(0,n)})}return s.$$set=o=>{"$$scope"in o&&t(6,_=o.$$scope)},s.$$.update=()=>{if(s.$$.dirty&16&&m!==c.currentTheme&&localStorage.setItem("theme",c.currentTheme),s.$$.dirty&31&&n&&i){const o="https://lopy.suaveware.dev/";t(2,h=window.getComputedStyle(n).backgroundColor),t(1,i.content=h,i);const L={name:"Lopy",short_name:"Lopy",description:"Simple budgeting app",theme_color:h,background_color:h,display:"standalone",start_url:o,icons:[{src:`${o}logo-192.png`,sizes:"192x192",type:"image/png",purpose:"any"},{src:`${o}logo-512.png`,sizes:"512x512",type:"image/png",purpose:"any"},{src:`${o}logo-maskable-512.png`,sizes:"512x512",type:"image/png",purpose:"maskable"}]},v=encodeURIComponent(JSON.stringify(L)),z="data:application/manifest+json,"+v;p.setAttribute("href",z)}},[n,i,h,p,c,a,_,d,e,l,g]}class W extends E{constructor(u){super(),K(this,u,B,O,j,{})}}export{W as default};
