import{S as L,i as M,s as N,N as E,O as x,n as v,h,p as l,b as j,H as d,E as z,l as k,r as D,a as V,m as w,u as T,c as O,R as G,v as R,f as W,g as J,t as S,d as K,w as Q,x as X,y as Y,a9 as Z,B as $,aa as ee}from"./index-2c5b7e63.js";import{f as A,g as te,R as se}from"./stores-6241235a.js";function ie(a){let e,i,t;return{c(){e=E("svg"),i=E("path"),this.h()},l(n){e=x(n,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var r=v(e);i=x(r,"path",{d:!0}),v(i).forEach(h),r.forEach(h),this.h()},h(){l(i,"d","M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"width",a[0]),l(e,"height",a[0]),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke","currentColor"),l(e,"stroke-width",a[1]),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round"),l(e,"class",t="feather feather-edit-2 "+a[2])},m(n,r){j(n,e,r),d(e,i)},p(n,[r]){r&1&&l(e,"width",n[0]),r&1&&l(e,"height",n[0]),r&2&&l(e,"stroke-width",n[1]),r&4&&t!==(t="feather feather-edit-2 "+n[2])&&l(e,"class",t)},i:z,o:z,d(n){n&&h(e)}}}function le(a,e,i){let{size:t="100%"}=e,{strokeWidth:n=2}=e,{class:r=""}=e;return t!=="100%"&&(t=t.slice(-1)==="x"?t.slice(0,t.length-1)+"em":parseInt(t)+"px"),a.$$set=s=>{"size"in s&&i(0,t=s.size),"strokeWidth"in s&&i(1,n=s.strokeWidth),"class"in s&&i(2,r=s.class)},[t,n,r]}class re extends L{constructor(e){super(),M(this,e,le,ie,N,{size:0,strokeWidth:1,class:2})}}function ne(a){let e,i,t,n;return{c(){e=E("svg"),i=E("line"),t=E("line"),this.h()},l(r){e=x(r,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var s=v(e);i=x(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),v(i).forEach(h),t=x(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),v(t).forEach(h),s.forEach(h),this.h()},h(){l(i,"x1","12"),l(i,"y1","5"),l(i,"x2","12"),l(i,"y2","19"),l(t,"x1","5"),l(t,"y1","12"),l(t,"x2","19"),l(t,"y2","12"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"width",a[0]),l(e,"height",a[0]),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke","currentColor"),l(e,"stroke-width",a[1]),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round"),l(e,"class",n="feather feather-plus "+a[2])},m(r,s){j(r,e,s),d(e,i),d(e,t)},p(r,[s]){s&1&&l(e,"width",r[0]),s&1&&l(e,"height",r[0]),s&2&&l(e,"stroke-width",r[1]),s&4&&n!==(n="feather feather-plus "+r[2])&&l(e,"class",n)},i:z,o:z,d(r){r&&h(e)}}}function ae(a,e,i){let{size:t="100%"}=e,{strokeWidth:n=2}=e,{class:r=""}=e;return t!=="100%"&&(t=t.slice(-1)==="x"?t.slice(0,t.length-1)+"em":parseInt(t)+"px"),a.$$set=s=>{"size"in s&&i(0,t=s.size),"strokeWidth"in s&&i(1,n=s.strokeWidth),"class"in s&&i(2,r=s.class)},[t,n,r]}class he extends L{constructor(e){super(),M(this,e,ae,ne,N,{size:0,strokeWidth:1,class:2})}}function F(a){let e,i,t,n,r;return i=new re({props:{size:"16"}}),{c(){e=k("button"),Q(i.$$.fragment),this.h()},l(s){e=w(s,"BUTTON",{class:!0});var u=v(e);X(i.$$.fragment,u),u.forEach(h),this.h()},h(){l(e,"class","btn btn-ghost btn-circle btn-sm ml-auto opacity-80")},m(s,u){j(s,e,u),Y(i,e,null),t=!0,n||(r=G(e,"click",Z(a[5])),n=!0)},p:z,i(s){t||(W(i.$$.fragment,s),t=!0)},o(s){S(i.$$.fragment,s),t=!1},d(s){s&&h(e),$(i),n=!1,r()}}}function oe(a){let e,i,t=(a[4]||"\u2709\uFE0F")+"",n,r,s,u,g,p,m,b=A(a[2])+"",I,B,_,C,P,o=!a[0].url&&F(a);return{c(){e=k("div"),i=k("div"),n=D(t),r=V(),s=k("div"),u=k("div"),g=D(a[3]),p=V(),m=k("div"),I=D(b),B=V(),o&&o.c(),this.h()},l(c){e=w(c,"DIV",{id:!0,class:!0});var f=v(e);i=w(f,"DIV",{class:!0});var U=v(i);n=T(U,t),U.forEach(h),r=O(f),s=w(f,"DIV",{class:!0});var y=v(s);u=w(y,"DIV",{class:!0});var q=v(u);g=T(q,a[3]),q.forEach(h),p=O(y),m=w(y,"DIV",{class:!0});var H=v(m);I=T(H,b),H.forEach(h),y.forEach(h),B=O(f),o&&o.l(f),f.forEach(h),this.h()},h(){l(i,"class","flex h-12 w-12 flex-shrink-0 items-center justify-center self-center rounded-2xl bg-base-200 bg-opacity-80 p-1 text-4xl"),l(u,"class","truncate text-base"),l(m,"class","font-mono text-sm opacity-70"),l(s,"class","mx-2 flex flex-col justify-center truncate font-semibold"),l(e,"id",a[1]),l(e,"class","border-box flex items-center overflow-visible rounded-3xl bg-base-100 p-2 text-base-content")},m(c,f){j(c,e,f),d(e,i),d(i,n),d(e,r),d(e,s),d(s,u),d(u,g),d(s,p),d(s,m),d(m,I),d(e,B),o&&o.m(e,null),_=!0,C||(P=G(e,"click",a[6]),C=!0)},p(c,[f]){(!_||f&16)&&t!==(t=(c[4]||"\u2709\uFE0F")+"")&&R(n,t),(!_||f&8)&&R(g,c[3]),(!_||f&4)&&b!==(b=A(c[2])+"")&&R(I,b),c[0].url?o&&(J(),S(o,1,1,()=>{o=null}),K()):o?(o.p(c,f),f&1&&W(o,1)):(o=F(c),o.c(),W(o,1),o.m(e,null)),(!_||f&2)&&l(e,"id",c[1])},i(c){_||(W(o),_=!0)},o(c){S(o),_=!1},d(c){c&&h(e),o&&o.d(),C=!1,P()}}}function ue(a,e,i){let t,n,r,s,{envelope:u}=e;const g=()=>{te(`${se.EDIT}/${t}`)};function p(m){ee.call(this,a,m)}return a.$$set=m=>{"envelope"in m&&i(0,u=m.envelope)},a.$$.update=()=>{a.$$.dirty&1&&i(1,{_id:t,emoji:n,name:r,value:s}=u,t,(i(4,n),i(0,u)),(i(3,r),i(0,u)),(i(2,s),i(0,u)))},[u,t,s,r,n,g,p]}class de extends L{constructor(e){super(),M(this,e,ue,oe,N,{envelope:0})}}export{de as E,he as P};
