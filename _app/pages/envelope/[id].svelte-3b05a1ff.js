var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,l=(e,s)=>{var l={};for(var r in e)n.call(e,r)&&s.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&t)for(var r of t(e))s.indexOf(r)<0&&a.call(e,r)&&(l[r]=e[r]);return l};import{S as r,i as o,s as c,e as i,t as u,k as f,c as d,a as $,g as m,d as p,n as h,b as v,a7 as g,f as b,F as x,O as y,L as k,h as w,a0 as E,x as I,a1 as T,ai as S,a4 as N,r as j,u as P,w as D,aj as O,ak as B,al as R,a2 as _,am as A,an as V,T as M,Q as z,ao as C,K as q,ap as L,aa as W,ab as U,j as F,m as K,o as Q,ac as G,v as H,aq as J,W as X,ar as Y,N as Z,as as ee,at as te,au as ne,l as ae,av as se,aw as le,ax as re,ad as oe}from"../../chunks/vendor-ce7306b2.js";import{f as ce,s as ie,P as ue,T as fe,i as de,g as $e,e as me,a as pe,R as he}from"../../chunks/constants-516f92a8.js";import{l as ve}from"../../chunks/longpress-43f526e2.js";import{T as ge,B as be}from"../../chunks/Button-dfaa7509.js";import"../../chunks/singletons-12a22614.js";function xe(e,t,n){const a=e.slice();return a[3]=t[n],a}function ye(e){let t,n,a;return{c(){t=i("span"),this.h()},l(e){t=d(e,"SPAN",{class:!0}),$(t).forEach(p),this.h()},h(){v(t,"class","bg-background absolute right-2 top-2 w-4 h-4 rounded-full")},m(e,n){b(e,t,n),a=!0},i(e){a||(T((()=>{n||(n=S(t,N,{},!0)),n.run(1)})),a=!0)},o(e){n||(n=S(t,N,{},!1)),n.run(0),a=!1},d(e){e&&p(t),e&&n&&n.end()}}}function ke(e,t){let n,a,s,l,r,o,c,S,z,C,W,U,F,K,Q,G,H,J,X,Y=t[3].comment+"",Z=ce(t[3].value,{showSign:!1})+"",ee=E.fromSeconds(t[3].date).toLocaleString(E.DATETIME_MED)+"",te=q,ne=t[0][t[3]._id]&&ye();function ae(){return t[2](t[3])}return{key:e,first:null,c(){n=i("div"),a=i("div"),s=u(Y),l=f(),r=i("div"),o=i("span"),c=u(Z),S=f(),z=i("span"),C=u(ee),W=f(),ne&&ne.c(),U=f(),this.h()},l(e){n=d(e,"DIV",{class:!0});var t=$(n);a=d(t,"DIV",{class:!0});var i=$(a);s=m(i,Y),i.forEach(p),l=h(t),r=d(t,"DIV",{class:!0});var u=$(r);o=d(u,"SPAN",{class:!0});var f=$(o);c=m(f,Z),f.forEach(p),S=h(u),z=d(u,"SPAN",{});var v=$(z);C=m(v,ee),v.forEach(p),u.forEach(p),W=h(t),ne&&ne.l(t),U=h(t),t.forEach(p),this.h()},h(){v(a,"class","whitespace-pre-wrap"),g(a,"hidden",!t[3].comment),v(o,"class","font-mono"),v(r,"class","flex justify-between"),v(n,"class","transaction relative svelte-hvtyvm"),g(n,"in",t[3].value>=0),g(n,"out",t[3].value<0),g(n,"selected",t[0][t[3]._id]),this.first=n},m(e,t){b(e,n,t),x(n,a),x(a,s),x(n,l),x(n,r),x(r,o),x(o,c),x(r,S),x(r,z),x(z,C),x(n,W),ne&&ne.m(n,null),x(n,U),H=!0,J||(X=[y(F=ve.call(null,n,300)),k(n,"longpress",ae)],J=!0)},p(e,l){t=e,(!H||2&l)&&Y!==(Y=t[3].comment+"")&&w(s,Y),2&l&&g(a,"hidden",!t[3].comment),(!H||2&l)&&Z!==(Z=ce(t[3].value,{showSign:!1})+"")&&w(c,Z),(!H||2&l)&&ee!==(ee=E.fromSeconds(t[3].date).toLocaleString(E.DATETIME_MED)+"")&&w(C,ee),t[0][t[3]._id]?ne?3&l&&I(ne,1):(ne=ye(),ne.c(),I(ne,1),ne.m(n,U)):ne&&(j(),P(ne,1,1,(()=>{ne=null})),D()),2&l&&g(n,"in",t[3].value>=0),2&l&&g(n,"out",t[3].value<0),3&l&&g(n,"selected",t[0][t[3]._id])},r(){G=n.getBoundingClientRect()},f(){O(n),te(),B(n,G)},a(){te(),te=R(n,G,L,{})},i(e){H||(I(ne),e&&T((()=>{Q&&Q.end(1),K=_(n,N,{easing:A}),K.start()})),H=!0)},o(e){P(ne),K&&K.invalidate(),e&&(Q=V(n,N,{easing:A})),H=!1},d(e){e&&p(n),ne&&ne.d(),e&&Q&&Q.end(),J=!1,M(X)}}}function we(e){let t,n,a=[],s=new Map,l=e[1];const r=e=>e[3]._id;for(let o=0;o<l.length;o+=1){let t=xe(e,l,o),n=r(t);s.set(n,a[o]=ke(n,t))}return{c(){t=i("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=d(e,"DIV",{class:!0});var n=$(t);for(let t=0;t<a.length;t+=1)a[t].l(n);n.forEach(p),this.h()},h(){v(t,"class","flex flex-col space-y-2 text-dark w-full p-4")},m(e,s){b(e,t,s);for(let n=0;n<a.length;n+=1)a[n].m(t,null);n=!0},p(e,[n]){if(3&n){l=e[1],j();for(let e=0;e<a.length;e+=1)a[e].r();a=z(a,n,r,1,e,l,s,t,C,ke,null,xe);for(let e=0;e<a.length;e+=1)a[e].a();D()}},i(e){if(!n){for(let e=0;e<l.length;e+=1)I(a[e]);n=!0}},o(e){for(let t=0;t<a.length;t+=1)P(a[t]);n=!1},d(e){e&&p(t);for(let t=0;t<a.length;t+=1)a[t].d()}}}function Ee(e,t,n){let{transactions:a=[]}=t,{selectedTransactionsById:s={}}=t;return e.$$set=e=>{"transactions"in e&&n(1,a=e.transactions),"selectedTransactionsById"in e&&n(0,s=e.selectedTransactionsById)},[s,a,e=>{var t;if(!s[e._id])return void n(0,s[e._id]=e,s);const a=s,{[t=e._id]:r}=a,o=l(a,[(c=t,"symbol"==typeof c?c:c+"")]);var c;n(0,s=o)}]}class Ie extends r{constructor(e){super(),o(this,e,Ee,we,c,{transactions:1,selectedTransactionsById:0})}}function Te(e){let t,n,a,s;return n=new X({props:{size:"24"}}),{c(){t=i("span"),F(n.$$.fragment),this.h()},l(e){t=d(e,"SPAN",{class:!0});var a=$(t);K(n.$$.fragment,a),a.forEach(p),this.h()},h(){v(t,"class","absolute")},m(e,a){b(e,t,a),Q(n,t,null),s=!0},i(e){s||(I(n.$$.fragment,e),e&&T((()=>{a||(a=S(t,N,{},!0)),a.run(1)})),s=!0)},o(e){P(n.$$.fragment,e),e&&(a||(a=S(t,N,{},!1)),a.run(0)),s=!1},d(e){e&&p(t),H(n),e&&a&&a.end()}}}function Se(e){let t,n,a,s;return n=new Y({props:{size:"24"}}),{c(){t=i("span"),F(n.$$.fragment),this.h()},l(e){t=d(e,"SPAN",{class:!0});var a=$(t);K(n.$$.fragment,a),a.forEach(p),this.h()},h(){v(t,"class","absolute")},m(e,a){b(e,t,a),Q(n,t,null),s=!0},i(e){s||(I(n.$$.fragment,e),e&&T((()=>{a||(a=S(t,N,{},!0)),a.run(1)})),s=!0)},o(e){P(n.$$.fragment,e),e&&(a||(a=S(t,N,{},!1)),a.run(0)),s=!1},d(e){e&&p(t),H(n),e&&a&&a.end()}}}function Ne(e){let t,n,a,s,l,r,o,c,u,m;const g=[Se,Te],y=[];function w(e,t){return e[2]?0:1}function E(t){e[6](t)}a=w(e),s=y[a]=g[a](e);let T={class:"w-full pl-2 py-2 h-full bg-background border-none rounded-r-full outline-none ring-0 text-light font-mono",value:ce(Math.abs(e[1])),inputmode:"numeric",autofocus:!0};return void 0!==e[0]&&(T.inputRef=e[0]),r=new ge({props:T}),W.push((()=>U(r,"inputRef",E))),r.$on("input",e[4]),r.$on("keyup",e[3]),{c(){t=i("div"),n=i("div"),s.c(),l=f(),F(r.$$.fragment),this.h()},l(e){t=d(e,"DIV",{class:!0});var a=$(t);n=d(a,"DIV",{class:!0});var o=$(n);s.l(o),o.forEach(p),l=h(a),K(r.$$.fragment,a),a.forEach(p),this.h()},h(){v(n,"class","relative cursor-pointer w-6 flex items-center"),v(t,"class","flex space-x-2 items-stretch h-8 pl-2 text-dark w-full border border-dark rounded-2xl")},m(s,o){b(s,t,o),x(t,n),y[a].m(n,null),x(t,l),Q(r,t,null),c=!0,u||(m=k(n,"click",e[5]),u=!0)},p(e,[t]){let l=a;a=w(e),a!==l&&(j(),P(y[l],1,1,(()=>{y[l]=null})),D(),s=y[a],s||(s=y[a]=g[a](e),s.c()),I(s,1),s.m(n,null));const c={};2&t&&(c.value=ce(Math.abs(e[1]))),!o&&1&t&&(o=!0,c.inputRef=e[0],G((()=>o=!1))),r.$set(c)},i(e){c||(I(s),I(r.$$.fragment,e),c=!0)},o(e){P(s),P(r.$$.fragment,e),c=!1},d(e){e&&p(t),y[a].d(),H(r),u=!1,m()}}}function je(e,t,n){let{inputRef:a=null}=t,{value:s=0}=t,{isNegative:l=!1}=t;const r=J();return e.$$set=e=>{"inputRef"in e&&n(0,a=e.inputRef),"value"in e&&n(1,s=e.value),"isNegative"in e&&n(2,l=e.isNegative)},[a,s,l,({key:e})=>{"Enter"===e&&r("enterPressed")},e=>{e.preventDefault();const t=+`${ie(e.target.value)}`;n(1,s=l?-t:t),e.target.value=ce(Math.abs(s),{showSign:!1})},()=>{n(2,l=!l),n(1,s=l?-Math.abs(s):Math.abs(s)),null==a||a.focus()},function(e){a=e,n(0,a)}]}class Pe extends r{constructor(e){super(),o(this,e,je,Ne,c,{inputRef:0,value:1,isNegative:2})}}function De(e){let t,n,a,s,l;return n=new re({props:{size:"20"}}),{c(){t=i("span"),F(n.$$.fragment),this.h()},l(e){t=d(e,"SPAN",{class:!0});var a=$(t);K(n.$$.fragment,a),a.forEach(p),this.h()},h(){v(t,"class","cursor-pointer flex space-x-2 items-end ml-auto")},m(r,o){b(r,t,o),Q(n,t,null),a=!0,s||(l=k(t,"click",e[18]),s=!0)},p:q,i(e){a||(I(n.$$.fragment,e),a=!0)},o(e){P(n.$$.fragment,e),a=!1},d(e){e&&p(t),H(n),s=!1,l()}}}function Oe(e){let t,n,a,s,l;return n=new oe({props:{size:"20"}}),{c(){t=i("span"),F(n.$$.fragment),this.h()},l(e){t=d(e,"SPAN",{class:!0});var a=$(t);K(n.$$.fragment,a),a.forEach(p),this.h()},h(){v(t,"class","ml-auto")},m(r,o){b(r,t,o),Q(n,t,null),a=!0,s||(l=k(t,"click",e[12]),s=!0)},p:q,i(e){a||(I(n.$$.fragment,e),a=!0)},o(e){P(n.$$.fragment,e),a=!1},d(e){e&&p(t),H(n),s=!1,l()}}}function Be(e){var t,n;let a,s,l,r,o,c,i,d,$,v=(null==(t=e[10])?void 0:t.name)+"",g=ce(null==(n=e[10])?void 0:n.value)+"";const x=[Oe,De],y=[];function k(e,t){return(null==o||64&t)&&(o=!!(Object.keys(e[6]).length>=1)),o?0:1}return c=k(e,-1),i=y[c]=x[c](e),{c(){a=u(v),s=u(" |\n    "),l=u(g),r=f(),i.c(),d=ae()},l(e){a=m(e,v),s=m(e," |\n    "),l=m(e,g),r=h(e),i.l(e),d=ae()},m(e,t){b(e,a,t),b(e,s,t),b(e,l,t),b(e,r,t),y[c].m(e,t),b(e,d,t),$=!0},p(e,t){var n,s;(!$||1024&t)&&v!==(v=(null==(n=e[10])?void 0:n.name)+"")&&w(a,v),(!$||1024&t)&&g!==(g=ce(null==(s=e[10])?void 0:s.value)+"")&&w(l,g);let r=c;c=k(e,t),c===r?y[c].p(e,t):(j(),P(y[r],1,1,(()=>{y[r]=null})),D(),i=y[c],i?i.p(e,t):(i=y[c]=x[c](e),i.c()),I(i,1),i.m(d.parentNode,d))},i(e){$||(I(i),$=!0)},o(e){P(i),$=!1},d(e){e&&p(a),e&&p(s),e&&p(l),e&&p(r),y[c].d(e),e&&p(d)}}}function Re(e){return{c:q,l:q,m:q,p:q,i:q,o:q,d:q}}function _e(e){let t,n,a;function s(t){e[19](t)}let l={transactions:e[27]};return void 0!==e[6]&&(l.selectedTransactionsById=e[6]),t=new Ie({props:l}),W.push((()=>U(t,"selectedTransactionsById",s))),{c(){F(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,n){Q(t,e,n),a=!0},p(e,a){const s={};32&a&&(s.transactions=e[27]),!n&&64&a&&(n=!0,s.selectedTransactionsById=e[6],G((()=>n=!1))),t.$set(s)},i(e){a||(I(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){H(t,e)}}}function Ae(e){return{c:q,l:q,m:q,p:q,i:q,o:q,d:q}}function Ve(e){var t;let n,a,s,l,r,o,c,g,y,w,E,T,S,N,O,B,R=e[2]||(null==(t=Object.keys(e[6]))?void 0:t.length),_=R&&ze(e);function A(t){e[22](t)}function V(t){e[23](t)}function M(t){e[24](t)}l=new se({props:{size:"20",strokeWidth:"3"}});let z={};function C(t){e[25](t)}void 0!==e[8]&&(z.isNegative=e[8]),void 0!==e[7].value&&(z.value=e[7].value),void 0!==e[4]&&(z.inputRef=e[4]),c=new Pe({props:z}),W.push((()=>U(c,"isNegative",A))),W.push((()=>U(c,"value",V))),W.push((()=>U(c,"inputRef",M))),c.$on("enterPressed",e[11]);let q={textarea:!0,id:"comment-input",class:"bg-background w-full resize-none text-light outline-none border-none p-2 text-base rounded-xl"};return void 0!==e[7].comment&&(q.value=e[7].comment),T=new ge({props:q}),W.push((()=>U(T,"value",C))),{c(){n=i("div"),_&&_.c(),a=f(),s=i("button"),F(l.$$.fragment),r=u("\n          Paste"),o=f(),F(c.$$.fragment),E=f(),F(T.$$.fragment),this.h()},l(e){n=d(e,"DIV",{class:!0});var t=$(n);_&&_.l(t),a=h(t),s=d(t,"BUTTON",{class:!0});var i=$(s);K(l.$$.fragment,i),r=m(i,"\n          Paste"),i.forEach(p),t.forEach(p),o=h(e),K(c.$$.fragment,e),E=h(e),K(T.$$.fragment,e),this.h()},h(){v(s,"class","text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2"),v(n,"class","inline-flex self-end gap-4")},m(t,i){b(t,n,i),_&&_.m(n,null),x(n,a),x(n,s),Q(l,s,null),x(s,r),b(t,o,i),Q(c,t,i),b(t,E,i),Q(T,t,i),N=!0,O||(B=k(s,"click",e[16]),O=!0)},p(e,t){var s;68&t&&(R=e[2]||(null==(s=Object.keys(e[6]))?void 0:s.length)),R?_?(_.p(e,t),68&t&&I(_,1)):(_=ze(e),_.c(),I(_,1),_.m(n,a)):_&&(j(),P(_,1,1,(()=>{_=null})),D());const l={};!g&&256&t&&(g=!0,l.isNegative=e[8],G((()=>g=!1))),!y&&128&t&&(y=!0,l.value=e[7].value,G((()=>y=!1))),!w&&16&t&&(w=!0,l.inputRef=e[4],G((()=>w=!1))),c.$set(l);const r={};!S&&128&t&&(S=!0,r.value=e[7].comment,G((()=>S=!1))),T.$set(r)},i(e){N||(I(_),I(l.$$.fragment,e),I(c.$$.fragment,e),I(T.$$.fragment,e),N=!0)},o(e){P(_),P(l.$$.fragment,e),P(c.$$.fragment,e),P(T.$$.fragment,e),N=!1},d(e){e&&p(n),_&&_.d(),H(l),e&&p(o),H(c,e),e&&p(E),H(T,e),O=!1,B()}}}function Me(e){let t,n,a,s,l;function r(t){e[20](t)}function o(t){e[21](t)}let c={textarea:!0,id:"comment-input",class:"h-full bg-background w-full resize-none text-light outline-none border-none p-2 text-base rounded-xl"};return void 0!==e[9]&&(c.value=e[9]),void 0!==e[1]&&(c.inputRef=e[1]),n=new ge({props:c}),W.push((()=>U(n,"value",r))),W.push((()=>U(n,"inputRef",o))),{c(){t=i("div"),F(n.$$.fragment),this.h()},l(e){t=d(e,"DIV",{class:!0});var a=$(t);K(n.$$.fragment,a),a.forEach(p),this.h()},h(){v(t,"class","h-36")},m(e,a){b(e,t,a),Q(n,t,null),l=!0},p(e,t){const l={};!a&&512&t&&(a=!0,l.value=e[9],G((()=>a=!1))),!s&&2&t&&(s=!0,l.inputRef=e[1],G((()=>s=!1))),n.$set(l)},i(e){l||(I(n.$$.fragment,e),l=!0)},o(e){P(n.$$.fragment,e),l=!1},d(e){e&&p(t),H(n)}}}function ze(e){let t,n,a,s,l,r,o;return n=new le({props:{size:"20",strokeWidth:"3"}}),{c(){t=i("button"),F(n.$$.fragment),a=u("\n            Copy"),this.h()},l(e){t=d(e,"BUTTON",{class:!0});var s=$(t);K(n.$$.fragment,s),a=m(s,"\n            Copy"),s.forEach(p),this.h()},h(){v(t,"class","text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2")},m(s,c){b(s,t,c),Q(n,t,null),x(t,a),l=!0,r||(o=k(t,"click",e[15]),r=!0)},p:q,i(e){l||(I(n.$$.fragment,e),e&&T((()=>{s||(s=S(t,N,{duration:300},!0)),s.run(1)})),l=!0)},o(e){P(n.$$.fragment,e),e&&(s||(s=S(t,N,{duration:300},!1)),s.run(0)),l=!1},d(e){e&&p(t),H(n),e&&s&&s.end(),r=!1,o()}}}function Ce(e){let t;return{c(){t=u("Back")},l(e){t=m(e,"Back")},m(e,n){b(e,t,n)},d(e){e&&p(t)}}}function qe(e){let t,n,a,s;return{c(){t=i("span"),n=u("Save"),this.h()},l(e){t=d(e,"SPAN",{class:!0});var a=$(t);n=m(a,"Save"),a.forEach(p),this.h()},h(){v(t,"class","absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2")},m(e,a){b(e,t,a),x(t,n),s=!0},i(e){s||(e&&T((()=>{a||(a=S(t,N,{},!0)),a.run(1)})),s=!0)},o(e){e&&(a||(a=S(t,N,{},!1)),a.run(0)),s=!1},d(e){e&&p(t),e&&a&&a.end()}}}function Le(e){let t,n,a,s;return{c(){t=i("span"),n=u("Spend"),this.h()},l(e){t=d(e,"SPAN",{class:!0});var a=$(t);n=m(a,"Spend"),a.forEach(p),this.h()},h(){v(t,"class","absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2")},m(e,a){b(e,t,a),x(t,n),s=!0},i(e){s||(e&&T((()=>{a||(a=S(t,N,{},!0)),a.run(1)})),s=!0)},o(e){e&&(a||(a=S(t,N,{},!1)),a.run(0)),s=!1},d(e){e&&p(t),e&&a&&a.end()}}}function We(e){let t,n,a;const s=[Le,qe],l=[];function r(e,t){return e[8]&&!e[3]?0:1}return t=r(e),n=l[t]=s[t](e),{c(){n.c(),a=ae()},l(e){n.l(e),a=ae()},m(e,n){l[t].m(e,n),b(e,a,n)},p(e,o){let c=t;t=r(e),t!==c&&(j(),P(l[c],1,1,(()=>{l[c]=null})),D(),n=l[t],n||(n=l[t]=s[t](e),n.c()),I(n,1),n.m(a.parentNode,a))},d(e){l[t].d(e),e&&p(a)}}}function Ue(e){let t,n,a,s,l,r,o,c,u,m,g,y,k,w;t=new fe({props:{$$slots:{default:[Be]},$$scope:{ctx:e}}});let E={ctx:e,current:null,token:null,hasCatch:!1,pending:Ae,then:_e,catch:Re,value:27,blocks:[,,,]};ee(s=e[5].transactions,E);const T=[Me,Ve],S=[];function N(e,t){return e[3]?0:1}return o=N(e),c=S[o]=T[o](e),g=new be({props:{class:"w-20",$$slots:{default:[Ce]},$$scope:{ctx:e}}}),g.$on("click",e[14]),k=new be({props:{class:"w-20 relative",$$slots:{default:[We]},$$scope:{ctx:e}}}),k.$on("click",e[13]),{c(){F(t.$$.fragment),n=f(),a=i("div"),E.block.c(),l=f(),r=i("div"),c.c(),u=f(),m=i("div"),F(g.$$.fragment),y=f(),F(k.$$.fragment),this.h()},l(e){K(t.$$.fragment,e),n=h(e),a=d(e,"DIV",{class:!0});var s=$(a);E.block.l(s),s.forEach(p),l=h(e),r=d(e,"DIV",{class:!0});var o=$(r);c.l(o),u=h(o),m=d(o,"DIV",{class:!0});var i=$(m);K(g.$$.fragment,i),y=h(i),K(k.$$.fragment,i),i.forEach(p),o.forEach(p),this.h()},h(){v(a,"class","pb-14"),v(m,"class","flex justify-around text-dark"),v(r,"class","sticky mt-auto mx-2 bottom-2 left-2 right-2 box-border flex flex-col space-y-4 bg-primary rounded-3xl p-4")},m(e,s){Q(t,e,s),b(e,n,s),b(e,a,s),E.block.m(a,E.anchor=null),E.mount=()=>a,E.anchor=null,b(e,l,s),b(e,r,s),S[o].m(r,null),x(r,u),x(r,m),Q(g,m,null),x(m,y),Q(k,m,null),w=!0},p(n,a){e=n;const l={};268436545&a&&(l.$$scope={dirty:a,ctx:e}),t.$set(l),E.ctx=e,32&a&&s!==(s=e[5].transactions)&&ee(s,E)||te(E,e,a);let i=o;o=N(e),o===i?S[o].p(e,a):(j(),P(S[i],1,1,(()=>{S[i]=null})),D(),c=S[o],c?c.p(e,a):(c=S[o]=T[o](e),c.c()),I(c,1),c.m(r,u));const f={};268435456&a&&(f.$$scope={dirty:a,ctx:e}),g.$set(f);const d={};268435720&a&&(d.$$scope={dirty:a,ctx:e}),k.$set(d)},i(e){w||(I(t.$$.fragment,e),I(E.block),I(c),I(g.$$.fragment,e),I(k.$$.fragment,e),w=!0)},o(e){P(t.$$.fragment,e);for(let t=0;t<3;t+=1){const e=E.blocks[t];P(e)}P(c),P(g.$$.fragment,e),P(k.$$.fragment,e),w=!1},d(e){H(t,e),e&&p(n),e&&p(a),E.block.d(),E.token=null,E=null,e&&p(l),e&&p(r),S[o].d(),H(g),H(k)}}}function Fe(e){let t,n;return t=new ue({props:{$$slots:{default:[Ue]},$$scope:{ctx:e}}}),{c(){F(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,a){Q(t,e,a),n=!0},p(e,[n]){const a={};268437503&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){H(t,e)}}}const Ke=async({page:e})=>({props:e.params});function Qe(e,r,o){let c,i,u;Z(e,me,(e=>o(17,i=e))),Z(e,pe,(e=>o(26,u=e)));let{id:f=""}=r,d=null,$=null,m=!1;let p,h=u?u.getTransactionsPaginated({actions:u,envelopeId:f}):{},v={},g={value:0,comment:""},b=!0,x="";return e.$$set=e=>{"id"in e&&o(0,f=e.id)},e.$$.update=()=>{131073&e.$$.dirty&&o(10,c=i.find((({_id:e})=>e===f)))},[f,d,$,m,p,h,v,g,b,x,c,()=>{null==document||document.getElementById("comment-input").focus()},async()=>{await u.deleteTransactions(Object.keys(v),f),o(6,v={}),o(5,h=await h.refresh())},()=>{if(m){const e=ne.parse(x);return o(9,x=""),o(3,m=!1),void(null==e||e.forEach((e=>{var t=e,{envelope:n}=t,a=l(t,["envelope"]);u.saveTransaction(a,f).then((async()=>{o(6,v={}),o(5,h=await h.refresh())}))})))}de()&&g.value&&u.saveTransaction(g,f).then((async e=>{o(7,g.value=0,g),o(7,g.comment="",g),o(5,h=await h.refresh()),p.focus(),o(2,$=e),o(6,v={})}))},()=>{m?o(3,m=!1):window.history.back()},()=>{const e=$?[$]:Object.values(v);navigator.clipboard.writeText(ne.stringify(e.map((e=>{var r=e,{envelopeId:o,date:i,_id:u}=r,f=l(r,["envelopeId","date","_id"]);return((e,l)=>{for(var r in l||(l={}))n.call(l,r)&&s(e,r,l[r]);if(t)for(var r of t(l))a.call(l,r)&&s(e,r,l[r]);return e})({envelope:null==c?void 0:c.name},f)})))).then((()=>{o(2,$=null),o(6,v={})})).catch(console.error)},async()=>{o(3,m=!0),null==d||d.focus()},i,()=>$e(`${he.EDIT}/${f}`),function(e){v=e,o(6,v)},function(e){x=e,o(9,x)},function(e){d=e,o(1,d)},function(e){b=e,o(8,b)},function(t){e.$$.not_equal(g.value,t)&&(g.value=t,o(7,g))},function(e){p=e,o(4,p)},function(t){e.$$.not_equal(g.comment,t)&&(g.comment=t,o(7,g))}]}class Ge extends r{constructor(e){super(),o(this,e,Qe,Fe,c,{id:0})}}export{Ge as default,Ke as load};