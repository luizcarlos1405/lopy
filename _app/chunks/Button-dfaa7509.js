import{S as t,i as s,s as e,l as a,f as l,K as u,d as n,ae as o,B as c,af as i,M as f,aa as r,e as h,c as p,a as d,ag as v,b as x,F as $,ah as m,L as y,O as b,p as T,T as E,D as R,a7 as k,G as B,H as L,I as g,x as A,u as z}from"./vendor-ce7306b2.js";function N(t){let s,e,a,u,o=[t[4],{size:"1"},{type:"text"}],i={};for(let l=0;l<o.length;l+=1)i=c(i,o[l]);return{c(){s=h("label"),e=h("input"),this.h()},l(t){s=p(t,"LABEL",{class:!0});var a=d(s);e=p(a,"INPUT",{size:!0,type:!0}),a.forEach(n),this.h()},h(){v(e,i),x(s,"class","h-full w-full block")},m(n,o){l(n,s,o),$(s,e),e.autofocus&&e.focus(),t[12](e),m(e,t[0]),a||(u=[y(e,"input",t[13]),b(t[3].call(null,e)),y(e,"keyup",t[8]),y(e,"input",t[9])],a=!0)},p(t,s){v(e,i=T(o,[16&s&&t[4],{size:"1"},{type:"text"}])),1&s&&e.value!==t[0]&&m(e,t[0])},d(e){e&&n(s),t[12](null),a=!1,E(u)}}}function w(t){let s,e,a,u,o=[t[4]],i={};for(let l=0;l<o.length;l+=1)i=c(i,o[l]);return{c(){s=h("label"),e=h("textarea"),this.h()},l(t){s=p(t,"LABEL",{class:!0});var a=d(s);e=p(a,"TEXTAREA",{}),d(e).forEach(n),a.forEach(n),this.h()},h(){v(e,i),x(s,"class","h-full w-full block")},m(n,o){l(n,s,o),$(s,e),e.autofocus&&e.focus(),m(e,t[0]),t[11](e),a||(u=[y(e,"input",t[10]),b(t[3].call(null,e)),y(e,"keyup",t[6]),y(e,"input",t[7])],a=!0)},p(t,s){v(e,i=T(o,[16&s&&t[4]])),1&s&&m(e,t[0])},d(e){e&&n(s),t[11](null),a=!1,E(u)}}}function I(t){let s;function e(t,s){return t[2]?w:N}let o=e(t),c=o(t);return{c(){c.c(),s=a()},l(t){c.l(t),s=a()},m(t,e){c.m(t,e),l(t,s,e)},p(t,[a]){o===(o=e(t))&&c?c.p(t,a):(c.d(1),c=o(t),c&&(c.c(),c.m(s.parentNode,s)))},i:u,o:u,d(t){c.d(t),t&&n(s)}}}function O(t,s,e){const a=["autofocus","value","textarea","inputRef"];let l=o(s,a),{autofocus:u=!1}=s,{value:n=""}=s,{textarea:h=!1}=s,{inputRef:p=null}=s;return t.$$set=t=>{s=c(c({},s),i(t)),e(4,l=o(s,a)),"autofocus"in t&&e(5,u=t.autofocus),"value"in t&&e(0,n=t.value),"textarea"in t&&e(2,h=t.textarea),"inputRef"in t&&e(1,p=t.inputRef)},[n,p,h,t=>{if(u){let s=setTimeout((()=>(t.focus(),()=>clearTimeout(s))),0)}},l,u,function(s){f.call(this,t,s)},function(s){f.call(this,t,s)},function(s){f.call(this,t,s)},function(s){f.call(this,t,s)},function(){n=this.value,e(0,n)},function(t){r[t?"unshift":"push"]((()=>{p=t,e(1,p)}))},function(t){r[t?"unshift":"push"]((()=>{p=t,e(1,p)}))},function(){n=this.value,e(0,n)}]}class U extends t{constructor(t){super(),s(this,t,O,I,e,{autofocus:5,value:0,textarea:2,inputRef:1})}}function j(t){let s,e,a,u;const o=t[2].default,i=R(o,t,t[1],null);let f=[t[0],{type:"button"},{style:"color: inherit"}],r={};for(let l=0;l<f.length;l+=1)r=c(r,f[l]);return{c(){s=h("button"),i&&i.c(),this.h()},l(t){s=p(t,"BUTTON",{type:!0,style:!0});var e=d(s);i&&i.l(e),e.forEach(n),this.h()},h(){v(s,r),k(s,"svelte-1i26dfr",!0)},m(n,o){l(n,s,o),i&&i.m(s,null),s.autofocus&&s.focus(),e=!0,a||(u=y(s,"click",t[3]),a=!0)},p(t,[a]){i&&i.p&&(!e||2&a)&&B(i,o,t,t[1],e?g(o,t[1],a,null):L(t[1]),null),v(s,r=T(f,[1&a&&t[0],{type:"button"},{style:"color: inherit"}])),k(s,"svelte-1i26dfr",!0)},i(t){e||(A(i,t),e=!0)},o(t){z(i,t),e=!1},d(t){t&&n(s),i&&i.d(t),a=!1,u()}}}function D(t,s,e){let{$$slots:a={},$$scope:l}=s;return t.$$set=t=>{e(0,s=c(c({},s),i(t))),"$$scope"in t&&e(1,l=t.$$scope)},[s=i(s),l,a,function(s){f.call(this,t,s)}]}class F extends t{constructor(t){super(),s(this,t,D,j,e,{})}}export{F as B,U as T};
