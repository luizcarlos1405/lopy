import{S as m,i as v,s as w,N as c,O as f,n as d,h as u,p as t,b as _,H as g,E as k}from"./index-2c5b7e63.js";function x(o){let e,h,s,r,a,n;return{c(){e=c("svg"),h=c("polyline"),s=c("path"),r=c("line"),a=c("line"),this.h()},l(l){e=f(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var i=d(e);h=f(i,"polyline",{points:!0}),d(h).forEach(u),s=f(i,"path",{d:!0}),d(s).forEach(u),r=f(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),d(r).forEach(u),a=f(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),d(a).forEach(u),i.forEach(u),this.h()},h(){t(h,"points","3 6 5 6 21 6"),t(s,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),t(r,"x1","10"),t(r,"y1","11"),t(r,"x2","10"),t(r,"y2","17"),t(a,"x1","14"),t(a,"y1","11"),t(a,"x2","14"),t(a,"y2","17"),t(e,"xmlns","http://www.w3.org/2000/svg"),t(e,"width",o[0]),t(e,"height",o[0]),t(e,"fill","none"),t(e,"viewBox","0 0 24 24"),t(e,"stroke","currentColor"),t(e,"stroke-width",o[1]),t(e,"stroke-linecap","round"),t(e,"stroke-linejoin","round"),t(e,"class",n="feather feather-trash-2 "+o[2])},m(l,i){_(l,e,i),g(e,h),g(e,s),g(e,r),g(e,a)},p(l,[i]){i&1&&t(e,"width",l[0]),i&1&&t(e,"height",l[0]),i&2&&t(e,"stroke-width",l[1]),i&4&&n!==(n="feather feather-trash-2 "+l[2])&&t(e,"class",n)},i:k,o:k,d(l){l&&u(e)}}}function y(o,e,h){let{size:s="100%"}=e,{strokeWidth:r=2}=e,{class:a=""}=e;return s!=="100%"&&(s=s.slice(-1)==="x"?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),o.$$set=n=>{"size"in n&&h(0,s=n.size),"strokeWidth"in n&&h(1,r=n.strokeWidth),"class"in n&&h(2,a=n.class)},[s,r,a]}class E extends m{constructor(e){super(),v(this,e,y,x,w,{size:0,strokeWidth:1,class:2})}}export{E as T};