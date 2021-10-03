var e=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,l=(e,s)=>{for(var t in s||(s={}))n.call(s,t)&&r(e,t,s[t]);if(a)for(var t of a(s))o.call(s,t)&&r(e,t,s[t]);return e};import{S as c,i,s as d,D as p,e as u,c as v,a as f,d as h,b as g,f as w,G as $,H as y,I as b,x as m,u as x,Z as E,_ as O,C as I,$ as P,a0 as _,a1 as j,a2 as S,a3 as T,a4 as D}from"./vendor-ce7306b2.js";import{r as k}from"./singletons-12a22614.js";function A(e){let s,t;const a=e[1].default,n=p(a,e,e[0],null);return{c(){s=u("div"),n&&n.c(),this.h()},l(e){s=v(e,"DIV",{class:!0});var t=f(s);n&&n.l(t),t.forEach(h),this.h()},h(){g(s,"class","z-50 flex items-center flex-nowrap font-base sticky top-2 mx-2 mt-2 px-4 py-3 shadow-md box-border rounded-full rounded-full bg-background-dark")},m(e,a){w(e,s,a),n&&n.m(s,null),t=!0},p(e,[s]){n&&n.p&&(!t||1&s)&&$(n,a,e,e[0],t?b(a,e[0],s,null):y(e[0]),null)},i(e){t||(m(n,e),t=!0)},o(e){x(n,e),t=!1},d(e){e&&h(s),n&&n.d(e)}}}function M(e,s,t){let{$$slots:a={},$$scope:n}=s;return e.$$set=e=>{"$$scope"in e&&t(0,n=e.$$scope)},[n,a]}class V extends c{constructor(e){super(),i(this,e,M,A,d,{})}}const C=e=>e.replace(/[^\d]/g,""),R=(e,{showSign:s=!0,thousandsSeparator:t=".",decimalSeparator:a=","}={})=>{const n=s&&Math.sign(e)<0?"-":"",o=Math.abs(e),r=Math.floor(o/100),l=o-100*r;return`R$${n}${`${r}`.split("").reduceRight(((e,s,t,a)=>{const n=a.length,o=n-t,r=o&&o!==n&&o%3==0,l=`${s}${e[0]}`;return e[0]=l,r?["",...e]:e}),[""]).join(".")},${`${l}`.padStart(2,"0")}`},B=()=>"undefined"!=typeof window,H=I([]);let L;const N=()=>L.envelopes.orderBy("order").toArray().then((e=>{console.log("dbEnvelopes",e),H.set(e)}));B()&&(L=new E("lopy"),L.version(2).stores({envelopes:"_id,order",transactions:"_id,envelopeId,date"}),console.log("db",L),L.envelopes.toCollection().toArray().then((e=>console.log("envelopes",e))),L.transactions.toCollection().toArray().then((e=>console.log("transactions",e))),N());const z=O(B()&&{saveEnvelope:async e=>{var s=e,{_id:t}=s,r=((e,s)=>{var t={};for(var r in e)n.call(e,r)&&s.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))s.indexOf(r)<0&&o.call(e,r)&&(t[r]=e[r]);return t})(s,["_id"]);const c=await L.envelopes.count();return t?L.envelopes.update(t,r).then(N):L.envelopes.add(l({_id:P(),order:c,value:0},r)).then(N)},deleteEnvelope:({_id:e})=>L.envelopes.where({_id:e}).delete().then(N),reorderEnvelopes:async e=>{L.transaction("rw",L.envelopes,(async()=>e.map((({_id:e},s)=>L.envelopes.update(e,{order:s}))))).then(N)},saveTransaction:(e,s)=>new Promise(((t,a)=>{console.log("saving transaction",e);const n=l({_id:P(),envelopeId:s,date:_.now().toSeconds()},e);L.transaction("rw",L.transactions,L.envelopes,(async()=>{const t=await L.envelopes.get(s);await L.transactions.add(n),await L.envelopes.update(s,{value:t.value+e.value})})).then((()=>{t(n),N()})).catch(a)})),getTransactionsPaginated:({actions:e,envelopeId:a,limit:n,offset:o})=>(console.log("db.transactions",L.transactions),{transactions:L.transactions.where({envelopeId:a}).reverse().sortBy("date"),previous:()=>{},next:()=>{},refresh:async()=>{const r=e.getTransactionsPaginated({actions:e,envelopeId:a,limit:n,offset:o}),c=await r.transactions;return i=l({},r),s(i,t({transactions:c}));var i}}),deleteTransactions:async(e,s)=>L.transaction("rw",L.transactions,L.envelopes,(async()=>{console.log("transactionIds",e);const t=await L.envelopes.get(s),a=L.transactions.where("_id").anyOf(e),n=await a.toArray();console.log("dbTransactions",n);const o=n.reduce(((e,{value:s})=>e-s),t.value);await L.envelopes.update(s,{value:o}),await L.transactions.bulkDelete(e).then((e=>console.log("transactions deleted",e)))})).then(N)}),G=k,Z=async function(e,s){return G.goto(e,s,[])};function q(e){let s,t,a;const n=e[1].default,o=p(n,e,e[0],null);return{c(){s=u("div"),o&&o.c(),this.h()},l(e){s=v(e,"DIV",{class:!0});var t=f(s);o&&o.l(t),t.forEach(h),this.h()},h(){g(s,"class","relative max-w-md min-h-full flex-grow mx-auto flex flex-col")},m(e,t){w(e,s,t),o&&o.m(s,null),a=!0},p(s,[t]){e=s,o&&o.p&&(!a||1&t)&&$(o,n,e,e[0],a?b(n,e[0],t,null):y(e[0]),null)},i(e){a||(m(o,e),t||j((()=>{t=S(s,D,{y:-1e3,duration:800,start:.95,easing:T}),t.start()})),a=!0)},o(e){x(o,e),a=!1},d(e){e&&h(s),o&&o.d(e)}}}function F(e,s,t){let{$$slots:a={},$$scope:n}=s;return e.$$set=e=>{"$$scope"in e&&t(0,n=e.$$scope)},[n,a]}class J extends c{constructor(e){super(),i(this,e,F,q,d,{})}}const K={HOME:"",ENVELOPES:"/envelopes",ENVELOPE:"/envelope",EDIT:"/envelope/edit"};export{J as P,K as R,V as T,z as a,H as e,R as f,Z as g,B as i,C as s};
