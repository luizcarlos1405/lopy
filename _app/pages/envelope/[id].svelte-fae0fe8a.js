var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,o=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&r(e,n,t[n]);if(a)for(var n of a(t))l.call(t,n)&&r(e,n,t[n]);return e},c=(e,a)=>t(e,n(a)),i=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};import{S as u,i as f,s as d,e as $,t as p,k as m,c as h,a as v,g,d as b,n as x,b as y,a7 as k,f as w,F as E,O as I,L as T,h as S,a0 as N,x as j,a1 as P,ai as O,a4 as D,r as B,u as R,w as _,aj as A,ak as V,al as M,a2 as z,am as C,an as q,T as L,Q as W,ao as U,K as F,ap as K,aa as Q,ab as G,j as H,m as J,o as X,ac as Y,v as Z,aq as ee,W as te,ar as ne,N as ae,as as se,at as le,au as re,l as oe,av as ce,aw as ie,ax as ue,ad as fe}from"../../chunks/vendor-ce7306b2.js";import{f as de,s as $e,P as pe,T as me,i as he,g as ve,e as ge,a as be,R as xe}from"../../chunks/constants-fd42dfe4.js";import{l as ye}from"../../chunks/longpress-43f526e2.js";import{T as ke,B as we}from"../../chunks/Button-dfaa7509.js";import"../../chunks/singletons-12a22614.js";function Ee(e,t,n){const a=e.slice();return a[3]=t[n],a}function Ie(e){let t,n,a;return{c(){t=$("span"),this.h()},l(e){t=h(e,"SPAN",{class:!0}),v(t).forEach(b),this.h()},h(){y(t,"class","bg-background absolute right-2 top-2 w-4 h-4 rounded-full")},m(e,n){w(e,t,n),a=!0},i(e){a||(P((()=>{n||(n=O(t,D,{},!0)),n.run(1)})),a=!0)},o(e){n||(n=O(t,D,{},!1)),n.run(0),a=!1},d(e){e&&b(t),e&&n&&n.end()}}}function Te(e,t){let n,a,s,l,r,o,c,i,u,f,d,O,W,U,Q,G,H,J,X,Y=t[3].comment+"",Z=de(t[3].value,{showSign:!1})+"",ee=N.fromSeconds(t[3].date).toLocaleString(N.DATETIME_MED)+"",te=F,ne=t[0][t[3]._id]&&Ie();function ae(){return t[2](t[3])}return{key:e,first:null,c(){n=$("div"),a=$("div"),s=p(Y),l=m(),r=$("div"),o=$("span"),c=p(Z),i=m(),u=$("span"),f=p(ee),d=m(),ne&&ne.c(),O=m(),this.h()},l(e){n=h(e,"DIV",{class:!0});var t=v(n);a=h(t,"DIV",{class:!0});var $=v(a);s=g($,Y),$.forEach(b),l=x(t),r=h(t,"DIV",{class:!0});var p=v(r);o=h(p,"SPAN",{class:!0});var m=v(o);c=g(m,Z),m.forEach(b),i=x(p),u=h(p,"SPAN",{});var y=v(u);f=g(y,ee),y.forEach(b),p.forEach(b),d=x(t),ne&&ne.l(t),O=x(t),t.forEach(b),this.h()},h(){y(a,"class","whitespace-pre-wrap"),k(a,"hidden",!t[3].comment),y(o,"class","font-mono"),y(r,"class","flex justify-between"),y(n,"class","transaction relative svelte-hvtyvm"),k(n,"in",t[3].value>=0),k(n,"out",t[3].value<0),k(n,"selected",t[0][t[3]._id]),this.first=n},m(e,t){w(e,n,t),E(n,a),E(a,s),E(n,l),E(n,r),E(r,o),E(o,c),E(r,i),E(r,u),E(u,f),E(n,d),ne&&ne.m(n,null),E(n,O),H=!0,J||(X=[I(W=ye.call(null,n,300)),T(n,"longpress",ae)],J=!0)},p(e,l){t=e,(!H||2&l)&&Y!==(Y=t[3].comment+"")&&S(s,Y),2&l&&k(a,"hidden",!t[3].comment),(!H||2&l)&&Z!==(Z=de(t[3].value,{showSign:!1})+"")&&S(c,Z),(!H||2&l)&&ee!==(ee=N.fromSeconds(t[3].date).toLocaleString(N.DATETIME_MED)+"")&&S(f,ee),t[0][t[3]._id]?ne?3&l&&j(ne,1):(ne=Ie(),ne.c(),j(ne,1),ne.m(n,O)):ne&&(B(),R(ne,1,1,(()=>{ne=null})),_()),2&l&&k(n,"in",t[3].value>=0),2&l&&k(n,"out",t[3].value<0),3&l&&k(n,"selected",t[0][t[3]._id])},r(){G=n.getBoundingClientRect()},f(){A(n),te(),V(n,G)},a(){te(),te=M(n,G,K,{})},i(e){H||(j(ne),e&&P((()=>{Q&&Q.end(1),U=z(n,D,{easing:C}),U.start()})),H=!0)},o(e){R(ne),U&&U.invalidate(),e&&(Q=q(n,D,{easing:C})),H=!1},d(e){e&&b(n),ne&&ne.d(),e&&Q&&Q.end(),J=!1,L(X)}}}function Se(e){let t,n,a=[],s=new Map,l=e[1];const r=e=>e[3]._id;for(let o=0;o<l.length;o+=1){let t=Ee(e,l,o),n=r(t);s.set(n,a[o]=Te(n,t))}return{c(){t=$("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=h(e,"DIV",{class:!0});var n=v(t);for(let t=0;t<a.length;t+=1)a[t].l(n);n.forEach(b),this.h()},h(){y(t,"class","flex flex-col space-y-2 text-dark w-full p-4")},m(e,s){w(e,t,s);for(let n=0;n<a.length;n+=1)a[n].m(t,null);n=!0},p(e,[n]){if(3&n){l=e[1],B();for(let e=0;e<a.length;e+=1)a[e].r();a=W(a,n,r,1,e,l,s,t,U,Te,null,Ee);for(let e=0;e<a.length;e+=1)a[e].a();_()}},i(e){if(!n){for(let e=0;e<l.length;e+=1)j(a[e]);n=!0}},o(e){for(let t=0;t<a.length;t+=1)R(a[t]);n=!1},d(e){e&&b(t);for(let t=0;t<a.length;t+=1)a[t].d()}}}function Ne(e,t,n){let{transactions:a=[]}=t,{selectedTransactionsById:s={}}=t;return e.$$set=e=>{"transactions"in e&&n(1,a=e.transactions),"selectedTransactionsById"in e&&n(0,s=e.selectedTransactionsById)},[s,a,e=>{var t;if(!s[e._id])return void n(0,s[e._id]=e,s);const a=s,{[t=e._id]:l}=a,r=i(a,[(o=t,"symbol"==typeof o?o:o+"")]);var o;n(0,s=r)}]}class je extends u{constructor(e){super(),f(this,e,Ne,Se,d,{transactions:1,selectedTransactionsById:0})}}function Pe(e){let t,n,a,s;return n=new te({props:{size:"24"}}),{c(){t=$("span"),H(n.$$.fragment),this.h()},l(e){t=h(e,"SPAN",{class:!0});var a=v(t);J(n.$$.fragment,a),a.forEach(b),this.h()},h(){y(t,"class","absolute")},m(e,a){w(e,t,a),X(n,t,null),s=!0},i(e){s||(j(n.$$.fragment,e),e&&P((()=>{a||(a=O(t,D,{},!0)),a.run(1)})),s=!0)},o(e){R(n.$$.fragment,e),e&&(a||(a=O(t,D,{},!1)),a.run(0)),s=!1},d(e){e&&b(t),Z(n),e&&a&&a.end()}}}function Oe(e){let t,n,a,s;return n=new ne({props:{size:"24"}}),{c(){t=$("span"),H(n.$$.fragment),this.h()},l(e){t=h(e,"SPAN",{class:!0});var a=v(t);J(n.$$.fragment,a),a.forEach(b),this.h()},h(){y(t,"class","absolute")},m(e,a){w(e,t,a),X(n,t,null),s=!0},i(e){s||(j(n.$$.fragment,e),e&&P((()=>{a||(a=O(t,D,{},!0)),a.run(1)})),s=!0)},o(e){R(n.$$.fragment,e),e&&(a||(a=O(t,D,{},!1)),a.run(0)),s=!1},d(e){e&&b(t),Z(n),e&&a&&a.end()}}}function De(e){let t,n,a,s,l,r,o,c,i,u;const f=[Oe,Pe],d=[];function p(e,t){return e[2]?0:1}function g(t){e[6](t)}a=p(e),s=d[a]=f[a](e);let k={class:"w-full pl-2 py-2 h-full bg-background border-none rounded-r-full outline-none ring-0 text-light font-mono",value:de(Math.abs(e[1])),inputmode:"numeric",autofocus:!0};return void 0!==e[0]&&(k.inputRef=e[0]),r=new ke({props:k}),Q.push((()=>G(r,"inputRef",g))),r.$on("input",e[4]),r.$on("keyup",e[3]),{c(){t=$("div"),n=$("div"),s.c(),l=m(),H(r.$$.fragment),this.h()},l(e){t=h(e,"DIV",{class:!0});var a=v(t);n=h(a,"DIV",{class:!0});var o=v(n);s.l(o),o.forEach(b),l=x(a),J(r.$$.fragment,a),a.forEach(b),this.h()},h(){y(n,"class","relative cursor-pointer w-6 flex items-center"),y(t,"class","flex space-x-2 items-stretch h-8 pl-2 text-dark w-full border border-dark rounded-2xl")},m(s,o){w(s,t,o),E(t,n),d[a].m(n,null),E(t,l),X(r,t,null),c=!0,i||(u=T(n,"click",e[5]),i=!0)},p(e,[t]){let l=a;a=p(e),a!==l&&(B(),R(d[l],1,1,(()=>{d[l]=null})),_(),s=d[a],s||(s=d[a]=f[a](e),s.c()),j(s,1),s.m(n,null));const c={};2&t&&(c.value=de(Math.abs(e[1]))),!o&&1&t&&(o=!0,c.inputRef=e[0],Y((()=>o=!1))),r.$set(c)},i(e){c||(j(s),j(r.$$.fragment,e),c=!0)},o(e){R(s),R(r.$$.fragment,e),c=!1},d(e){e&&b(t),d[a].d(),Z(r),i=!1,u()}}}function Be(e,t,n){let{inputRef:a=null}=t,{value:s=0}=t,{isNegative:l=!1}=t;const r=ee();return e.$$set=e=>{"inputRef"in e&&n(0,a=e.inputRef),"value"in e&&n(1,s=e.value),"isNegative"in e&&n(2,l=e.isNegative)},[a,s,l,({key:e})=>{"Enter"===e&&r("enterPressed")},e=>{e.preventDefault();const t=+`${$e(e.target.value)}`;n(1,s=l?-t:t),e.target.value=de(Math.abs(s),{showSign:!1})},()=>{n(2,l=!l),n(1,s=l?-Math.abs(s):Math.abs(s)),null==a||a.focus()},function(e){a=e,n(0,a)}]}class Re extends u{constructor(e){super(),f(this,e,Be,De,d,{inputRef:0,value:1,isNegative:2})}}function _e(e){let t,n,a,s,l;return n=new ue({props:{size:"20"}}),{c(){t=$("span"),H(n.$$.fragment),this.h()},l(e){t=h(e,"SPAN",{class:!0});var a=v(t);J(n.$$.fragment,a),a.forEach(b),this.h()},h(){y(t,"class","cursor-pointer flex space-x-2 items-end ml-auto")},m(r,o){w(r,t,o),X(n,t,null),a=!0,s||(l=T(t,"click",e[18]),s=!0)},p:F,i(e){a||(j(n.$$.fragment,e),a=!0)},o(e){R(n.$$.fragment,e),a=!1},d(e){e&&b(t),Z(n),s=!1,l()}}}function Ae(e){let t,n,a,s,l;return n=new fe({props:{size:"20"}}),{c(){t=$("span"),H(n.$$.fragment),this.h()},l(e){t=h(e,"SPAN",{class:!0});var a=v(t);J(n.$$.fragment,a),a.forEach(b),this.h()},h(){y(t,"class","ml-auto")},m(r,o){w(r,t,o),X(n,t,null),a=!0,s||(l=T(t,"click",e[12]),s=!0)},p:F,i(e){a||(j(n.$$.fragment,e),a=!0)},o(e){R(n.$$.fragment,e),a=!1},d(e){e&&b(t),Z(n),s=!1,l()}}}function Ve(e){var t,n;let a,s,l,r,o,c,i,u,f,d=(null==(t=e[10])?void 0:t.name)+"",$=de(null==(n=e[10])?void 0:n.value)+"";const h=[Ae,_e],v=[];function y(e,t){return(null==o||64&t)&&(o=!!(Object.keys(e[6]).length>=1)),o?0:1}return c=y(e,-1),i=v[c]=h[c](e),{c(){a=p(d),s=p(" |\n    "),l=p($),r=m(),i.c(),u=oe()},l(e){a=g(e,d),s=g(e," |\n    "),l=g(e,$),r=x(e),i.l(e),u=oe()},m(e,t){w(e,a,t),w(e,s,t),w(e,l,t),w(e,r,t),v[c].m(e,t),w(e,u,t),f=!0},p(e,t){var n,s;(!f||1024&t)&&d!==(d=(null==(n=e[10])?void 0:n.name)+"")&&S(a,d),(!f||1024&t)&&$!==($=de(null==(s=e[10])?void 0:s.value)+"")&&S(l,$);let r=c;c=y(e,t),c===r?v[c].p(e,t):(B(),R(v[r],1,1,(()=>{v[r]=null})),_(),i=v[c],i?i.p(e,t):(i=v[c]=h[c](e),i.c()),j(i,1),i.m(u.parentNode,u))},i(e){f||(j(i),f=!0)},o(e){R(i),f=!1},d(e){e&&b(a),e&&b(s),e&&b(l),e&&b(r),v[c].d(e),e&&b(u)}}}function Me(e){return{c:F,l:F,m:F,p:F,i:F,o:F,d:F}}function ze(e){let t,n,a;function s(t){e[19](t)}let l={transactions:e[27]};return void 0!==e[6]&&(l.selectedTransactionsById=e[6]),t=new je({props:l}),Q.push((()=>G(t,"selectedTransactionsById",s))),{c(){H(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,n){X(t,e,n),a=!0},p(e,a){const s={};32&a&&(s.transactions=e[27]),!n&&64&a&&(n=!0,s.selectedTransactionsById=e[6],Y((()=>n=!1))),t.$set(s)},i(e){a||(j(t.$$.fragment,e),a=!0)},o(e){R(t.$$.fragment,e),a=!1},d(e){Z(t,e)}}}function Ce(e){return{c:F,l:F,m:F,p:F,i:F,o:F,d:F}}function qe(e){var t;let n,a,s,l,r,o,c,i,u,f,d,k,I,S,N,P,O=e[2]||(null==(t=Object.keys(e[6]))?void 0:t.length),D=O&&We(e);function A(t){e[22](t)}function V(t){e[23](t)}function M(t){e[24](t)}l=new ce({props:{size:"20",strokeWidth:"3"}});let z={};function C(t){e[25](t)}void 0!==e[8]&&(z.isNegative=e[8]),void 0!==e[7].value&&(z.value=e[7].value),void 0!==e[4]&&(z.inputRef=e[4]),c=new Re({props:z}),Q.push((()=>G(c,"isNegative",A))),Q.push((()=>G(c,"value",V))),Q.push((()=>G(c,"inputRef",M))),c.$on("enterPressed",e[11]);let q={textarea:!0,id:"comment-input",class:"bg-background w-full resize-none text-light outline-none border-none p-2 text-base rounded-xl"};return void 0!==e[7].comment&&(q.value=e[7].comment),k=new ke({props:q}),Q.push((()=>G(k,"value",C))),{c(){n=$("div"),D&&D.c(),a=m(),s=$("button"),H(l.$$.fragment),r=p("\n          Paste"),o=m(),H(c.$$.fragment),d=m(),H(k.$$.fragment),this.h()},l(e){n=h(e,"DIV",{class:!0});var t=v(n);D&&D.l(t),a=x(t),s=h(t,"BUTTON",{class:!0});var i=v(s);J(l.$$.fragment,i),r=g(i,"\n          Paste"),i.forEach(b),t.forEach(b),o=x(e),J(c.$$.fragment,e),d=x(e),J(k.$$.fragment,e),this.h()},h(){y(s,"class","text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2"),y(n,"class","inline-flex self-end gap-4")},m(t,i){w(t,n,i),D&&D.m(n,null),E(n,a),E(n,s),X(l,s,null),E(s,r),w(t,o,i),X(c,t,i),w(t,d,i),X(k,t,i),S=!0,N||(P=T(s,"click",e[16]),N=!0)},p(e,t){var s;68&t&&(O=e[2]||(null==(s=Object.keys(e[6]))?void 0:s.length)),O?D?(D.p(e,t),68&t&&j(D,1)):(D=We(e),D.c(),j(D,1),D.m(n,a)):D&&(B(),R(D,1,1,(()=>{D=null})),_());const l={};!i&&256&t&&(i=!0,l.isNegative=e[8],Y((()=>i=!1))),!u&&128&t&&(u=!0,l.value=e[7].value,Y((()=>u=!1))),!f&&16&t&&(f=!0,l.inputRef=e[4],Y((()=>f=!1))),c.$set(l);const r={};!I&&128&t&&(I=!0,r.value=e[7].comment,Y((()=>I=!1))),k.$set(r)},i(e){S||(j(D),j(l.$$.fragment,e),j(c.$$.fragment,e),j(k.$$.fragment,e),S=!0)},o(e){R(D),R(l.$$.fragment,e),R(c.$$.fragment,e),R(k.$$.fragment,e),S=!1},d(e){e&&b(n),D&&D.d(),Z(l),e&&b(o),Z(c,e),e&&b(d),Z(k,e),N=!1,P()}}}function Le(e){let t,n,a,s,l;function r(t){e[20](t)}function o(t){e[21](t)}let c={textarea:!0,id:"comment-input",class:"h-full bg-background w-full resize-none text-light outline-none border-none p-2 text-base rounded-xl"};return void 0!==e[9]&&(c.value=e[9]),void 0!==e[1]&&(c.inputRef=e[1]),n=new ke({props:c}),Q.push((()=>G(n,"value",r))),Q.push((()=>G(n,"inputRef",o))),{c(){t=$("div"),H(n.$$.fragment),this.h()},l(e){t=h(e,"DIV",{class:!0});var a=v(t);J(n.$$.fragment,a),a.forEach(b),this.h()},h(){y(t,"class","h-36")},m(e,a){w(e,t,a),X(n,t,null),l=!0},p(e,t){const l={};!a&&512&t&&(a=!0,l.value=e[9],Y((()=>a=!1))),!s&&2&t&&(s=!0,l.inputRef=e[1],Y((()=>s=!1))),n.$set(l)},i(e){l||(j(n.$$.fragment,e),l=!0)},o(e){R(n.$$.fragment,e),l=!1},d(e){e&&b(t),Z(n)}}}function We(e){let t,n,a,s,l,r,o;return n=new ie({props:{size:"20",strokeWidth:"3"}}),{c(){t=$("button"),H(n.$$.fragment),a=p("\n            Copy"),this.h()},l(e){t=h(e,"BUTTON",{class:!0});var s=v(t);J(n.$$.fragment,s),a=g(s,"\n            Copy"),s.forEach(b),this.h()},h(){y(t,"class","text-dark inline-flex gap-2 items-center font-bold rounded-full py-2 px-2")},m(s,c){w(s,t,c),X(n,t,null),E(t,a),l=!0,r||(o=T(t,"click",e[15]),r=!0)},p:F,i(e){l||(j(n.$$.fragment,e),e&&P((()=>{s||(s=O(t,D,{duration:300},!0)),s.run(1)})),l=!0)},o(e){R(n.$$.fragment,e),e&&(s||(s=O(t,D,{duration:300},!1)),s.run(0)),l=!1},d(e){e&&b(t),Z(n),e&&s&&s.end(),r=!1,o()}}}function Ue(e){let t;return{c(){t=p("Back")},l(e){t=g(e,"Back")},m(e,n){w(e,t,n)},d(e){e&&b(t)}}}function Fe(e){let t,n,a,s;return{c(){t=$("span"),n=p("Save"),this.h()},l(e){t=h(e,"SPAN",{class:!0});var a=v(t);n=g(a,"Save"),a.forEach(b),this.h()},h(){y(t,"class","absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2")},m(e,a){w(e,t,a),E(t,n),s=!0},i(e){s||(e&&P((()=>{a||(a=O(t,D,{},!0)),a.run(1)})),s=!0)},o(e){e&&(a||(a=O(t,D,{},!1)),a.run(0)),s=!1},d(e){e&&b(t),e&&a&&a.end()}}}function Ke(e){let t,n,a,s;return{c(){t=$("span"),n=p("Spend"),this.h()},l(e){t=h(e,"SPAN",{class:!0});var a=v(t);n=g(a,"Spend"),a.forEach(b),this.h()},h(){y(t,"class","absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2")},m(e,a){w(e,t,a),E(t,n),s=!0},i(e){s||(e&&P((()=>{a||(a=O(t,D,{},!0)),a.run(1)})),s=!0)},o(e){e&&(a||(a=O(t,D,{},!1)),a.run(0)),s=!1},d(e){e&&b(t),e&&a&&a.end()}}}function Qe(e){let t,n,a;const s=[Ke,Fe],l=[];function r(e,t){return e[8]&&!e[3]?0:1}return t=r(e),n=l[t]=s[t](e),{c(){n.c(),a=oe()},l(e){n.l(e),a=oe()},m(e,n){l[t].m(e,n),w(e,a,n)},p(e,o){let c=t;t=r(e),t!==c&&(B(),R(l[c],1,1,(()=>{l[c]=null})),_(),n=l[t],n||(n=l[t]=s[t](e),n.c()),j(n,1),n.m(a.parentNode,a))},d(e){l[t].d(e),e&&b(a)}}}function Ge(e){let t,n,a,s,l,r,o,c,i,u,f,d,p,g;t=new me({props:{$$slots:{default:[Ve]},$$scope:{ctx:e}}});let k={ctx:e,current:null,token:null,hasCatch:!1,pending:Ce,then:ze,catch:Me,value:27,blocks:[,,,]};se(s=e[5].transactions,k);const I=[Le,qe],T=[];function S(e,t){return e[3]?0:1}return o=S(e),c=T[o]=I[o](e),f=new we({props:{class:"w-20",$$slots:{default:[Ue]},$$scope:{ctx:e}}}),f.$on("click",e[14]),p=new we({props:{class:"w-20 relative",$$slots:{default:[Qe]},$$scope:{ctx:e}}}),p.$on("click",e[13]),{c(){H(t.$$.fragment),n=m(),a=$("div"),k.block.c(),l=m(),r=$("div"),c.c(),i=m(),u=$("div"),H(f.$$.fragment),d=m(),H(p.$$.fragment),this.h()},l(e){J(t.$$.fragment,e),n=x(e),a=h(e,"DIV",{class:!0});var s=v(a);k.block.l(s),s.forEach(b),l=x(e),r=h(e,"DIV",{class:!0});var o=v(r);c.l(o),i=x(o),u=h(o,"DIV",{class:!0});var $=v(u);J(f.$$.fragment,$),d=x($),J(p.$$.fragment,$),$.forEach(b),o.forEach(b),this.h()},h(){y(a,"class","pb-14"),y(u,"class","flex justify-around text-dark"),y(r,"class","sticky mt-auto mx-2 bottom-2 left-2 right-2 box-border flex flex-col space-y-4 bg-primary rounded-3xl p-4")},m(e,s){X(t,e,s),w(e,n,s),w(e,a,s),k.block.m(a,k.anchor=null),k.mount=()=>a,k.anchor=null,w(e,l,s),w(e,r,s),T[o].m(r,null),E(r,i),E(r,u),X(f,u,null),E(u,d),X(p,u,null),g=!0},p(n,a){e=n;const l={};268436545&a&&(l.$$scope={dirty:a,ctx:e}),t.$set(l),k.ctx=e,32&a&&s!==(s=e[5].transactions)&&se(s,k)||le(k,e,a);let u=o;o=S(e),o===u?T[o].p(e,a):(B(),R(T[u],1,1,(()=>{T[u]=null})),_(),c=T[o],c?c.p(e,a):(c=T[o]=I[o](e),c.c()),j(c,1),c.m(r,i));const d={};268435456&a&&(d.$$scope={dirty:a,ctx:e}),f.$set(d);const $={};268435720&a&&($.$$scope={dirty:a,ctx:e}),p.$set($)},i(e){g||(j(t.$$.fragment,e),j(k.block),j(c),j(f.$$.fragment,e),j(p.$$.fragment,e),g=!0)},o(e){R(t.$$.fragment,e);for(let t=0;t<3;t+=1){const e=k.blocks[t];R(e)}R(c),R(f.$$.fragment,e),R(p.$$.fragment,e),g=!1},d(e){Z(t,e),e&&b(n),e&&b(a),k.block.d(),k.token=null,k=null,e&&b(l),e&&b(r),T[o].d(),Z(f),Z(p)}}}function He(e){let t,n;return t=new pe({props:{$$slots:{default:[Ge]},$$scope:{ctx:e}}}),{c(){H(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,a){X(t,e,a),n=!0},p(e,[n]){const a={};268437503&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(j(t.$$.fragment,e),n=!0)},o(e){R(t.$$.fragment,e),n=!1},d(e){Z(t,e)}}}const Je=async({page:e})=>({props:e.params});function Xe(e,t,n){let a,s,l;ae(e,ge,(e=>n(17,s=e))),ae(e,be,(e=>n(26,l=e)));let{id:r=""}=t,u=null,f=null,d=!1;let $,p=l?l.getTransactionsPaginated({actions:l,envelopeId:r}):{},m={},h={value:0,comment:""},v=!0,g="";return e.$$set=e=>{"id"in e&&n(0,r=e.id)},e.$$.update=()=>{131073&e.$$.dirty&&n(10,a=s.find((({_id:e})=>e===r)))},[r,u,f,d,$,p,m,h,v,g,a,()=>{null==document||document.getElementById("comment-input").focus()},async()=>{await l.deleteTransactions(Object.keys(m),r),n(6,m={}),n(5,p=await p.refresh())},()=>{if(d){const e=re.parse(g);return n(9,g=""),n(3,d=!1),void(null==e||e.forEach((e=>{var t=e,{envelope:a,value:s}=t,u=i(t,["envelope","value"]);l.saveTransaction(c(o({},u),{value:100*s}),r).then((async()=>{n(6,m={}),n(5,p=await p.refresh())}))})))}he()&&h.value&&l.saveTransaction(h,r).then((async e=>{n(7,h.value=0,h),n(7,h.comment="",h),n(5,p=await p.refresh()),$.focus(),n(2,f=e),n(6,m={})}))},()=>{d?n(3,d=!1):window.history.back()},()=>{const e=f?[f]:Object.values(m);navigator.clipboard.writeText(re.stringify(e.map((e=>{var t=e,{envelopeId:n,date:s,_id:l}=t,r=i(t,["envelopeId","date","_id"]);return c(o({envelope:null==a?void 0:a.name},r),{value:r.value/100})})))).then((()=>{n(2,f=null),n(6,m={})})).catch(console.error)},async()=>{n(3,d=!0),null==u||u.focus()},s,()=>ve(`${xe.EDIT}/${r}`),function(e){m=e,n(6,m)},function(e){g=e,n(9,g)},function(e){u=e,n(1,u)},function(e){v=e,n(8,v)},function(t){e.$$.not_equal(h.value,t)&&(h.value=t,n(7,h))},function(e){$=e,n(4,$)},function(t){e.$$.not_equal(h.comment,t)&&(h.comment=t,n(7,h))}]}class Ye extends u{constructor(e){super(),f(this,e,Xe,He,d,{id:0})}}export{Ye as default,Je as load};
