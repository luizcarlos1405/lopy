var Se=Object.defineProperty,Ce=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var _e=(t,n,e)=>n in t?Se(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,ue=(t,n)=>{for(var e in n||(n={}))he.call(n,e)&&_e(t,e,n[e]);if(le)for(var e of le(n))be.call(n,e)&&_e(t,e,n[e]);return t},ce=(t,n)=>Ce(t,De(n));var fe=(t,n)=>{var e={};for(var o in t)he.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&le)for(var o of le(t))n.indexOf(o)<0&&be.call(t,o)&&(e[o]=t[o]);return e};import{S as Ie,i as Ne,s as Be,aq as Oe,Q as Me,e as P,w as F,k as j,c as A,a as S,x as K,m as q,d as g,b as v,a1 as Y,g as H,H as b,y as Q,ao as ne,T as z,q as R,o as V,B as G,V as de,ar as Re,M as $,a6 as ge,t as ee,h as te,a7 as ze,p as Pe,L as pe,n as Ae,as as ve,a5 as ke,N as O,an as oe,ap as re,a8 as Ve,a9 as ye,at as Ue,au as je,av as qe,aa as we}from"../../chunks/vendor-7e985693.js";import{f as Le,s as We,i as He,C as Te,a as Xe,e as Ye,p as Fe}from"../../chunks/stores-207dda47.js";import{E as Ke}from"../../chunks/EnvelopeTransactions-5baa49d8.js";import{E as Qe}from"../../chunks/Envelope-66ebb123.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/longpress-a7a6c534.js";function Ge(t){let n,e,o,a,i,d,l,r,c,y;return o=new Oe({props:{class:"swap-on",size:"24"}}),i=new Me({props:{class:"swap-off",size:"24"}}),{c(){n=P("div"),e=P("div"),F(o.$$.fragment),a=j(),F(i.$$.fragment),d=j(),l=P("input"),this.h()},l(p){n=A(p,"DIV",{class:!0});var m=S(n);e=A(m,"DIV",{class:!0});var k=S(e);K(o.$$.fragment,k),a=q(k),K(i.$$.fragment,k),k.forEach(g),d=q(m),l=A(m,"INPUT",{class:!0,inputmode:!0}),m.forEach(g),this.h()},h(){v(e,"class","swap swap-rotate relative cursor-pointer p-1 svelte-19elewz"),Y(e,"minus",t[2]),Y(e,"plus",!t[2]),v(l,"class","reset-input font-mono input-xs flex-grow text-base-content"),l.autofocus=!0,v(l,"inputmode","numeric"),v(n,"class","flex min-h-max w-full items-center overflow-clip rounded-full bg-base-200 text-neutral-content")},m(p,m){H(p,n,m),b(n,e),Q(o,e,null),b(e,a),Q(i,e,null),b(n,d),b(n,l),ne(l,t[3]),t[9](l),r=!0,l.focus(),c||(y=[z(e,"click",t[7]),z(l,"change",t[5]),z(l,"selectionchange",t[6]),z(l,"input",t[8]),z(l,"input",t[5]),z(l,"keyup",t[4])],c=!0)},p(p,[m]){m&4&&Y(e,"minus",p[2]),m&4&&Y(e,"plus",!p[2]),m&8&&l.value!==p[3]&&ne(l,p[3])},i(p){r||(R(o.$$.fragment,p),R(i.$$.fragment,p),r=!0)},o(p){V(o.$$.fragment,p),V(i.$$.fragment,p),r=!1},d(p){p&&g(n),G(o),G(i),t[9](null),c=!1,de(y)}}}function Je(t,n,e){let o,{inputRef:a=null}=n,{value:i=0}=n,{isNegative:d=!1}=n;const l=Re(),r=({key:h})=>{h==="Enter"&&l("enterPressed")},c=h=>{h.preventDefault();const w=+`${We(o)}`;e(0,i=d?-w:w)},y=h=>{const w=h.target.value.length;h.target.selectionEnd=w,h.target.selectionStart=w},p=()=>{e(2,d=!d),e(0,i=d?-Math.abs(i):Math.abs(i)),a==null||a.focus()};function m(){o=this.value,e(3,o),e(0,i)}function k(h){$[h?"unshift":"push"](()=>{a=h,e(1,a)})}return t.$$set=h=>{"inputRef"in h&&e(1,a=h.inputRef),"value"in h&&e(0,i=h.value),"isNegative"in h&&e(2,d=h.isNegative)},t.$$.update=()=>{t.$$.dirty&1&&e(3,o=Le(Math.abs(i),{showSign:!1}))},[i,a,d,o,r,c,y,p,m,k]}class Ze extends Ie{constructor(n){super();Ne(this,n,Je,Ge,Be,{inputRef:1,value:0,isNegative:2})}}function $e(t){return{c:O,l:O,m:O,p:O,i:O,o:O,d:O}}function xe(t){let n,e,o,a;function i(l){t[18](l)}let d={transactions:t[30]};return t[6]!==void 0&&(d.selectedTransactionsById=t[6]),e=new Ke({props:d}),$.push(()=>oe(e,"selectedTransactionsById",i)),{c(){n=P("span"),F(e.$$.fragment),this.h()},l(l){n=A(l,"SPAN",{class:!0});var r=S(n);K(e.$$.fragment,r),r.forEach(g),this.h()},h(){v(n,"class","col-start-2 col-end-12 mb-4")},m(l,r){H(l,n,r),Q(e,n,null),a=!0},p(l,r){const c={};r&32&&(c.transactions=l[30]),!o&&r&64&&(o=!0,c.selectedTransactionsById=l[6],re(()=>o=!1)),e.$set(c)},i(l){a||(R(e.$$.fragment,l),a=!0)},o(l){V(e.$$.fragment,l),a=!1},d(l){l&&g(n),G(e)}}}function et(t){return{c:O,l:O,m:O,p:O,i:O,o:O,d:O}}function tt(t){var J;let n,e=t[3]||((J=Object.keys(t[6]))==null?void 0:J.length),o,a,i,d,l,r,c,y,p,m,k,h,w,U,L,E,I,C,T,_=e&&Ee(t);d=new Ue({props:{size:"20",strokeWidth:"3"}}),y=new je({props:{size:"20",strokeWidth:"3"}});function W(s){t[21](s)}function N(s){t[22](s)}function x(s){t[23](s)}let M={};return t[8]!==void 0&&(M.isNegative=t[8]),t[7].value!==void 0&&(M.value=t[7].value),t[1]!==void 0&&(M.inputRef=t[1]),k=new Ze({props:M}),$.push(()=>oe(k,"isNegative",W)),$.push(()=>oe(k,"value",N)),$.push(()=>oe(k,"inputRef",x)),k.$on("enterPressed",t[11]),{c(){n=P("div"),_&&_.c(),o=j(),a=P("span"),i=P("button"),F(d.$$.fragment),l=ee(`
            Delete`),r=j(),c=P("button"),F(y.$$.fragment),p=ee(`
            Paste`),m=j(),F(k.$$.fragment),L=j(),E=P("textarea"),this.h()},l(s){n=A(s,"DIV",{class:!0});var u=S(n);_&&_.l(u),o=q(u),a=A(u,"SPAN",{class:!0});var B=S(a);i=A(B,"BUTTON",{class:!0});var D=S(i);K(d.$$.fragment,D),l=te(D,`
            Delete`),D.forEach(g),r=q(B),c=A(B,"BUTTON",{class:!0});var f=S(c);K(y.$$.fragment,f),p=te(f,`
            Paste`),f.forEach(g),B.forEach(g),u.forEach(g),m=q(s),K(k.$$.fragment,s),L=q(s),E=A(s,"TEXTAREA",{class:!0,id:!0,rows:!0,placeholder:!0}),S(E).forEach(g),this.h()},h(){v(i,"class","swap-on text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2"),v(c,"class","swap-off text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2"),v(a,"class","swap swap-flip svelte-eb6yxb"),Y(a,"swapActive",Object.keys(t[6]).length),v(n,"class","inline-flex self-end gap-4"),v(E,"class","textarea bg-base-200 ease-linear leading-4 resize-none"),v(E,"id","comment-input"),v(E,"rows","3"),v(E,"placeholder","Description")},m(s,u){H(s,n,u),_&&_.m(n,null),b(n,o),b(n,a),b(a,i),Q(d,i,null),b(i,l),b(a,r),b(a,c),Q(y,c,null),b(c,p),H(s,m,u),Q(k,s,u),H(s,L,u),H(s,E,u),ne(E,t[7].comment),t[25](E),I=!0,C||(T=[z(i,"click",t[12]),z(c,"click",t[16]),z(E,"input",t[24])],C=!0)},p(s,u){var D;u&72&&(e=s[3]||((D=Object.keys(s[6]))==null?void 0:D.length)),e?_?(_.p(s,u),u&72&&R(_,1)):(_=Ee(s),_.c(),R(_,1),_.m(n,o)):_&&(Ae(),V(_,1,1,()=>{_=null}),Pe()),u&64&&Y(a,"swapActive",Object.keys(s[6]).length);const B={};!h&&u&256&&(h=!0,B.isNegative=s[8],re(()=>h=!1)),!w&&u&128&&(w=!0,B.value=s[7].value,re(()=>w=!1)),!U&&u&2&&(U=!0,B.inputRef=s[1],re(()=>U=!1)),k.$set(B),u&128&&ne(E,s[7].comment)},i(s){I||(R(_),R(d.$$.fragment,s),R(y.$$.fragment,s),R(k.$$.fragment,s),I=!0)},o(s){V(_),V(d.$$.fragment,s),V(y.$$.fragment,s),V(k.$$.fragment,s),I=!1},d(s){s&&g(n),_&&_.d(),G(d),G(y),s&&g(m),G(k,s),s&&g(L),s&&g(E),t[25](null),C=!1,de(T)}}}function nt(t){let n,e,o;return{c(){n=P("textarea"),this.h()},l(a){n=A(a,"TEXTAREA",{class:!0,id:!0,rows:!0,placeholder:!0}),S(n).forEach(g),this.h()},h(){v(n,"class","textarea resize-none self-stretch bg-base-200 leading-4 ease-linear"),v(n,"id","comment-input"),v(n,"rows","7"),v(n,"placeholder","Transactions")},m(a,i){H(a,n,i),ne(n,t[9]),t[20](n),e||(o=z(n,"input",t[19]),e=!0)},p(a,i){i&512&&ne(n,a[9])},i:O,o:O,d(a){a&&g(n),t[20](null),e=!1,o()}}}function Ee(t){let n,e,o,a,i,d,l;return e=new qe({props:{size:"20",strokeWidth:"3"}}),{c(){n=P("button"),F(e.$$.fragment),o=ee(`
            Copy`),this.h()},l(r){n=A(r,"BUTTON",{class:!0});var c=S(n);K(e.$$.fragment,c),o=te(c,`
            Copy`),c.forEach(g),this.h()},h(){v(n,"class","text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2")},m(r,c){H(r,n,c),Q(e,n,null),b(n,o),i=!0,d||(l=z(n,"click",t[15]),d=!0)},p:O,i(r){i||(R(e.$$.fragment,r),r&&Ve(()=>{a||(a=ye(n,we,{duration:300},!0)),a.run(1)}),i=!0)},o(r){V(e.$$.fragment,r),r&&(a||(a=ye(n,we,{duration:300},!1)),a.run(0)),i=!1},d(r){r&&g(n),G(e),r&&a&&a.end(),d=!1,l()}}}function st(t){let n,e,o,a,i,d,l,r,c,y,p,m,k,h,w,U,L,E,I,C,T,_,W;o=new Qe({props:{envelope:t[10]}});let N={ctx:t,current:null,token:null,hasCatch:!1,pending:et,then:xe,catch:$e,value:30,blocks:[,,,]};ge(i=t[5].transactions,N);const x=[nt,tt],M=[];function J(s,u){return s[4]?0:1}return r=J(t),c=M[r]=x[r](t),{c(){n=P("div"),e=P("span"),F(o.$$.fragment),a=j(),N.block.c(),d=j(),l=P("div"),c.c(),y=j(),p=P("div"),m=P("button"),k=ee("Back"),h=j(),w=P("button"),U=P("span"),L=ee("Spend"),E=j(),I=P("span"),C=ee("Save"),this.h()},l(s){n=A(s,"DIV",{class:!0});var u=S(n);e=A(u,"SPAN",{class:!0});var B=S(e);K(o.$$.fragment,B),B.forEach(g),a=q(u),N.block.l(u),d=q(u),l=A(u,"DIV",{class:!0});var D=S(l);c.l(D),y=q(D),p=A(D,"DIV",{class:!0});var f=S(p);m=A(f,"BUTTON",{class:!0});var ae=S(m);k=te(ae,"Back"),ae.forEach(g),h=q(f),w=A(f,"BUTTON",{class:!0});var Z=S(w);U=A(Z,"SPAN",{class:!0});var X=S(U);L=te(X,"Spend"),X.forEach(g),E=q(Z),I=A(Z,"SPAN",{class:!0});var se=S(I);C=te(se,"Save"),se.forEach(g),Z.forEach(g),f.forEach(g),D.forEach(g),u.forEach(g),this.h()},h(){v(e,"class","sticky top-4 z-10 col-start-2 col-end-12 my-4"),v(m,"class","w-22 btn btn-outline"),v(U,"class","swap-on"),v(I,"class","swap-off"),v(w,"class","w-22 btn swap btn-primary svelte-eb6yxb"),Y(w,"swapActive",t[8]&&!t[4]),v(p,"class","flex justify-around"),v(l,"class","sticky bottom-0 col-span-full mt-8 box-border flex flex-col space-y-4 rounded-t-3xl bg-base-100 p-6"),v(n,"class","layout-template-rows grid-layout min-h-full svelte-eb6yxb")},m(s,u){H(s,n,u),b(n,e),Q(o,e,null),b(n,a),N.block.m(n,N.anchor=null),N.mount=()=>n,N.anchor=d,b(n,d),b(n,l),M[r].m(l,null),b(l,y),b(l,p),b(p,m),b(m,k),b(p,h),b(p,w),b(w,U),b(U,L),b(w,E),b(w,I),b(I,C),T=!0,_||(W=[z(m,"click",t[14]),z(w,"click",t[13])],_=!0)},p(s,[u]){t=s;const B={};u&1024&&(B.envelope=t[10]),o.$set(B),N.ctx=t,u&32&&i!==(i=t[5].transactions)&&ge(i,N)||ze(N,t,u);let D=r;r=J(t),r===D?M[r].p(t,u):(Ae(),V(M[D],1,1,()=>{M[D]=null}),Pe(),c=M[r],c?c.p(t,u):(c=M[r]=x[r](t),c.c()),R(c,1),c.m(l,y)),u&272&&Y(w,"swapActive",t[8]&&!t[4])},i(s){T||(R(o.$$.fragment,s),R(N.block),R(c),T=!0)},o(s){V(o.$$.fragment,s);for(let u=0;u<3;u+=1){const B=N.blocks[u];V(B)}V(c),T=!1},d(s){s&&g(n),G(o),N.block.d(),N.token=null,N=null,M[r].d(),_=!1,de(W)}}}function at(t,n,e){let o,a,i,d;pe(t,Xe,f=>e(27,a=f)),pe(t,Ye,f=>e(17,i=f)),pe(t,Fe,f=>e(28,d=f));const{id:l}=d.params;let r=null,c=null,y=null,p=null,m=!1;const k=()=>{document==null||document.getElementById("comment-input").focus()},h=async()=>{await a.deleteTransactions(Object.keys(C),l),e(6,C={}),e(5,I=await I.refresh())},w=()=>{if(m){const f=ve.parse(W);e(9,W=""),e(4,m=!1),f==null||f.forEach(ie=>{var me=ie,{envelope:ae,value:Z,date:X}=me,se=fe(me,["envelope","value","date"]);a.saveTransaction(ce(ue({},se),{value:Z*100,date:ke.fromFormat(X,Te).toSeconds()}),l).then(async()=>{e(6,C={}),e(5,I=await I.refresh())})});return}He()&&T.value&&a.saveTransaction(T,l).then(async f=>{e(7,T.value=0,T),e(7,T.comment="",T),e(5,I=await I.refresh()),y==null||y.focus(),e(3,p=f),e(6,C={})})},U=()=>{if(m){e(4,m=!1);return}window.history.back()},L=()=>{const f=p?[p]:Object.values(C);navigator.clipboard.writeText(ve.stringify(f.map(se=>{var ie=se,{envelopeId:ae,_id:Z}=ie,X=fe(ie,["envelopeId","_id"]);return ce(ue({envelope:o==null?void 0:o.name},X),{value:X.value/100,date:ke.fromSeconds(X.date).toFormat(Te)})}))).then(()=>{e(3,p=null),e(6,C={})}).catch(console.error)},E=async()=>{e(4,m=!0),r==null||r.focus()};let I=a?a.getTransactionsPaginated({actions:a,envelopeId:l}):{},C={},T={value:0,comment:""},_=!0,W="";function N(f){C=f,e(6,C)}function x(){W=this.value,e(9,W)}function M(f){$[f?"unshift":"push"](()=>{r=f,e(2,r)})}function J(f){_=f,e(8,_)}function s(f){t.$$.not_equal(T.value,f)&&(T.value=f,e(7,T))}function u(f){y=f,e(1,y)}function B(){T.comment=this.value,e(7,T)}function D(f){$[f?"unshift":"push"](()=>{c=f,e(0,c)})}return t.$$.update=()=>{t.$$.dirty&131072&&e(10,o=i.find(({_id:f})=>f===l)||{}),t.$$.dirty&3},[c,y,r,p,m,I,C,T,_,W,o,k,h,w,U,L,E,i,N,x,M,J,s,u,B,D]}class pt extends Ie{constructor(n){super();Ne(this,n,at,st,Be,{})}}export{pt as default};
