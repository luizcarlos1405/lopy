import{S as s,i as a,s as e,k as t,e as r,t as o,E as c,d as l,n,c as u,a as h,g as i,b as d,f as m,F as f,h as v,K as p}from"../chunks/vendor-ce7306b2.js";function b(s){let a,e,b,E,g,k,z,x=s[1].message+"";return document.title=a=s[0],{c(){e=t(),b=r("h1"),E=o(s[0]),g=t(),k=r("p"),z=o(x),this.h()},l(a){c('[data-svelte="svelte-1moakz"]',document.head).forEach(l),e=n(a),b=u(a,"H1",{class:!0});var t=h(b);E=i(t,s[0]),t.forEach(l),g=n(a),k=u(a,"P",{class:!0});var r=h(k);z=i(r,x),r.forEach(l),this.h()},h(){d(b,"class","svelte-be3lyz"),d(k,"class","svelte-be3lyz")},m(s,a){m(s,e,a),m(s,b,a),f(b,E),m(s,g,a),m(s,k,a),f(k,z)},p(s,[e]){1&e&&a!==(a=s[0])&&(document.title=a),1&e&&v(E,s[0]),2&e&&x!==(x=s[1].message+"")&&v(z,x)},i:p,o:p,d(s){s&&l(e),s&&l(b),s&&l(g),s&&l(k)}}}function E(s,a,e){let{status:t}=a,{error:r}=a;return s.$$set=s=>{"status"in s&&e(0,t=s.status),"error"in s&&e(1,r=s.error)},[t,r]}class g extends s{constructor(s){super(),a(this,s,E,b,e,{status:0,error:1})}}export{g as default};