import{S as I,i as H,s as R,$ as C,a0 as w,e as f,w as B,k as x,c as d,a as g,x as N,d as m,m as M,b as h,a1 as p,g as U,H as $,y,T as O,q as S,o as k,B as E,V as q,L as z}from"./vendor-7e985693.js";import{R as i,p as L,g as A}from"./stores-207dda47.js";function V(l){let e,n,a,c,s,o,u,_,b;return a=new C({props:{size:"30"}}),o=new w({props:{size:"30"}}),{c(){e=f("div"),n=f("button"),B(a.$$.fragment),c=x(),s=f("button"),B(o.$$.fragment),this.h()},l(t){e=d(t,"DIV",{class:!0});var r=g(e);n=d(r,"BUTTON",{class:!0});var v=g(n);N(a.$$.fragment,v),v.forEach(m),c=M(r),s=d(r,"BUTTON",{class:!0});var T=g(s);N(o.$$.fragment,T),T.forEach(m),r.forEach(m),this.h()},h(){h(n,"class","btn btn-ghost relative text-base-content svelte-rmgadn"),p(n,"currentButton",l[0].url.pathname==i.HOME),h(s,"class","btn btn-ghost relative text-base-content svelte-rmgadn"),p(s,"currentButton",l[0].url.pathname==i.TRANSACTIONS),h(e,"class","sticky bottom-0 flex justify-evenly rounded-t-3xl bg-base-100 py-1")},m(t,r){U(t,e,r),$(e,n),y(a,n,null),$(e,c),$(e,s),y(o,s,null),u=!0,_||(b=[O(n,"click",l[1]),O(s,"click",l[2])],_=!0)},p(t,[r]){r&1&&p(n,"currentButton",t[0].url.pathname==i.HOME),r&1&&p(s,"currentButton",t[0].url.pathname==i.TRANSACTIONS)},i(t){u||(S(a.$$.fragment,t),S(o.$$.fragment,t),u=!0)},o(t){k(a.$$.fragment,t),k(o.$$.fragment,t),u=!1},d(t){t&&m(e),E(a),E(o),_=!1,q(b)}}}function j(l,e,n){let a;return z(l,L,o=>n(0,a=o)),[a,()=>A(`${i.HOME}`),()=>A(`${i.TRANSACTIONS}`)]}class G extends I{constructor(e){super();H(this,e,j,V,R,{})}}export{G as B};
