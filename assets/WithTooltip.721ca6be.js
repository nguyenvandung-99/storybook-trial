import{a4 as $e,a5 as M,a6 as D,a7 as W,a8 as N,a9 as De,aa as gt,ab as Ce,ac as ue,ad as It,ae as Vt,af as tt,ag as mt,ah as yt,ai as Xt,r as T,aj as wt,X,_ as Yt,R as L,Z as zt,s as Ee,ak as ce,al as pe,a0 as qt}from"./iframe.cc47ac1c.js";import{r as bt}from"./index.822b360e.js";function V(t){return t?(t.nodeName||"").toLowerCase():null}function U(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function oe(t){var e=U(t).Element;return t instanceof e||t instanceof Element}function $(t){var e=U(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function We(t){if(typeof ShadowRoot=="undefined")return!1;var e=U(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Gt(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!$(i)||!V(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function Zt(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,c){return l[c]="",l},{});!$(n)||!V(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var Jt={name:"applyStyles",enabled:!0,phase:"write",fn:Gt,effect:Zt,requires:["computeStyles"]};function I(t){return t.split("-")[0]}var ee=Math.max,Re=Math.min,ne=Math.round;function ie(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),r=1,n=1;if($(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(r=ne(o.width)/s||1),i>0&&(n=ne(o.height)/i||1)}return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function Ne(t){var e=ie(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function Ot(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&We(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Y(t){return U(t).getComputedStyle(t)}function Kt(t){return["table","td","th"].indexOf(V(t))>=0}function J(t){return((oe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Se(t){return V(t)==="html"?t:t.assignedSlot||t.parentNode||(We(t)?t.host:null)||J(t)}function rt(t){return!$(t)||Y(t).position==="fixed"?null:t.offsetParent}function Qt(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&$(t)){var r=Y(t);if(r.position==="fixed")return null}var n=Se(t);for(We(n)&&(n=n.host);$(n)&&["html","body"].indexOf(V(n))<0;){var i=Y(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function ge(t){for(var e=U(t),o=rt(t);o&&Kt(o)&&Y(o).position==="static";)o=rt(o);return o&&(V(o)==="html"||V(o)==="body"&&Y(o).position==="static")?e:o||Qt(t)||e}function Ue(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function fe(t,e,o){return ee(t,Re(e,o))}function _t(t,e,o){var r=fe(t,e,o);return r>o?o:r}function xt(){return{top:0,right:0,bottom:0,left:0}}function Tt(t){return Object.assign({},xt(),t)}function Ct(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var er=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,Tt(typeof e!="number"?e:Ct(e,$e))};function tr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=I(o.placement),l=Ue(a),c=[D,N].indexOf(a)>=0,u=c?"height":"width";if(!(!i||!s)){var d=er(n.padding,o),m=Ne(i),p=l==="y"?M:D,v=l==="y"?W:N,h=o.rects.reference[u]+o.rects.reference[l]-s[l]-o.rects.popper[u],g=s[l]-o.rects.reference[l],O=ge(i),C=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0,w=h/2-g/2,f=d[p],y=C-m[u]-d[v],b=C/2-m[u]/2+w,x=fe(f,b,y),R=l;o.modifiersData[r]=(e={},e[R]=x,e.centerOffset=x-b,e)}}function rr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!Ot(e.elements.popper,n)||(e.elements.arrow=n))}var or={name:"arrow",enabled:!0,phase:"main",fn:tr,effect:rr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(t){return t.split("-")[1]}var nr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ir(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:ne(e*n)/n||0,y:ne(o*n)/n||0}}function ot(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,d=t.isFixed,m=s.x,p=m===void 0?0:m,v=s.y,h=v===void 0?0:v,g=typeof u=="function"?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var O=s.hasOwnProperty("x"),C=s.hasOwnProperty("y"),w=D,f=M,y=window;if(c){var b=ge(o),x="clientHeight",R="clientWidth";if(b===U(o)&&(b=J(o),Y(b).position!=="static"&&a==="absolute"&&(x="scrollHeight",R="scrollWidth")),b=b,n===M||(n===D||n===N)&&i===De){f=W;var S=d&&b===y&&y.visualViewport?y.visualViewport.height:b[x];h-=S-r.height,h*=l?1:-1}if(n===D||(n===M||n===W)&&i===De){w=N;var E=d&&b===y&&y.visualViewport?y.visualViewport.width:b[R];p-=E-r.width,p*=l?1:-1}}var P=Object.assign({position:a},c&&nr),j=u===!0?ir({x:p,y:h}):{x:p,y:h};if(p=j.x,h=j.y,l){var A;return Object.assign({},P,(A={},A[f]=C?"0":"",A[w]=O?"0":"",A.transform=(y.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",A))}return Object.assign({},P,(e={},e[f]=C?h+"px":"",e[w]=O?p+"px":"",e.transform="",e))}function ar(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a,c={placement:I(e.placement),variation:ae(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ot(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ot(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var sr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ar,data:{}},Oe={passive:!0};function lr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=U(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(u){u.addEventListener("scroll",o.update,Oe)}),a&&l.addEventListener("resize",o.update,Oe),function(){i&&c.forEach(function(u){u.removeEventListener("scroll",o.update,Oe)}),a&&l.removeEventListener("resize",o.update,Oe)}}var ur={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:lr,data:{}},cr={left:"right",right:"left",bottom:"top",top:"bottom"};function xe(t){return t.replace(/left|right|bottom|top/g,function(e){return cr[e]})}var pr={start:"end",end:"start"};function nt(t){return t.replace(/start|end/g,function(e){return pr[e]})}function Fe(t){var e=U(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function Ie(t){return ie(J(t)).left+Fe(t).scrollLeft}function fr(t){var e=U(t),o=J(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+Ie(t),y:a}}function dr(t){var e,o=J(t),r=Fe(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=ee(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=ee(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+Ie(t),l=-r.scrollTop;return Y(n||o).direction==="rtl"&&(a+=ee(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Ve(t){var e=Y(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Rt(t){return["html","body","#document"].indexOf(V(t))>=0?t.ownerDocument.body:$(t)&&Ve(t)?t:Rt(Se(t))}function de(t,e){var o;e===void 0&&(e=[]);var r=Rt(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=U(r),s=n?[i].concat(i.visualViewport||[],Ve(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(de(Se(s)))}function He(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function vr(t){var e=ie(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function it(t,e){return e===gt?He(fr(t)):oe(e)?vr(e):He(dr(J(t)))}function hr(t){var e=de(Se(t)),o=["absolute","fixed"].indexOf(Y(t).position)>=0,r=o&&$(t)?ge(t):t;return oe(r)?e.filter(function(n){return oe(n)&&Ot(n,r)&&V(n)!=="body"}):[]}function gr(t,e,o){var r=e==="clippingParents"?hr(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var c=it(t,l);return a.top=ee(c.top,a.top),a.right=Re(c.right,a.right),a.bottom=Re(c.bottom,a.bottom),a.left=ee(c.left,a.left),a},it(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Pt(t){var e=t.reference,o=t.element,r=t.placement,n=r?I(r):null,i=r?ae(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case M:l={x:s,y:e.y-o.height};break;case W:l={x:s,y:e.y+e.height};break;case N:l={x:e.x+e.width,y:a};break;case D:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var c=n?Ue(n):null;if(c!=null){var u=c==="y"?"height":"width";switch(i){case Ce:l[c]=l[c]-(e[u]/2-o[u]/2);break;case De:l[c]=l[c]+(e[u]/2-o[u]/2);break}}return l}function ve(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?It:i,a=o.rootBoundary,l=a===void 0?gt:a,c=o.elementContext,u=c===void 0?ue:c,d=o.altBoundary,m=d===void 0?!1:d,p=o.padding,v=p===void 0?0:p,h=Tt(typeof v!="number"?v:Ct(v,$e)),g=u===ue?Vt:ue,O=t.rects.popper,C=t.elements[m?g:u],w=gr(oe(C)?C:C.contextElement||J(t.elements.popper),s,l),f=ie(t.elements.reference),y=Pt({reference:f,element:O,strategy:"absolute",placement:n}),b=He(Object.assign({},O,y)),x=u===ue?b:f,R={top:w.top-x.top+h.top,bottom:x.bottom-w.bottom+h.bottom,left:w.left-x.left+h.left,right:x.right-w.right+h.right},S=t.modifiersData.offset;if(u===ue&&S){var E=S[n];Object.keys(R).forEach(function(P){var j=[N,W].indexOf(P)>=0?1:-1,A=[M,W].indexOf(P)>=0?"y":"x";R[P]+=E[A]*j})}return R}function mr(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,c=l===void 0?mt:l,u=ae(r),d=u?a?tt:tt.filter(function(v){return ae(v)===u}):$e,m=d.filter(function(v){return c.indexOf(v)>=0});m.length===0&&(m=d);var p=m.reduce(function(v,h){return v[h]=ve(t,{placement:h,boundary:n,rootBoundary:i,padding:s})[I(h)],v},{});return Object.keys(p).sort(function(v,h){return p[v]-p[h]})}function yr(t){if(I(t)===yt)return[];var e=xe(t);return[nt(t),e,nt(e)]}function wr(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,c=o.padding,u=o.boundary,d=o.rootBoundary,m=o.altBoundary,p=o.flipVariations,v=p===void 0?!0:p,h=o.allowedAutoPlacements,g=e.options.placement,O=I(g),C=O===g,w=l||(C||!v?[xe(g)]:yr(g)),f=[g].concat(w).reduce(function(re,G){return re.concat(I(G)===yt?mr(e,{placement:G,boundary:u,rootBoundary:d,padding:c,flipVariations:v,allowedAutoPlacements:h}):G)},[]),y=e.rects.reference,b=e.rects.popper,x=new Map,R=!0,S=f[0],E=0;E<f.length;E++){var P=f[E],j=I(P),A=ae(P)===Ce,z=[M,W].indexOf(j)>=0,q=z?"width":"height",k=ve(e,{placement:P,boundary:u,rootBoundary:d,altBoundary:m,padding:c}),B=z?A?N:D:A?W:M;y[q]>b[q]&&(B=xe(B));var te=xe(B),K=[];if(i&&K.push(k[j]<=0),a&&K.push(k[B]<=0,k[te]<=0),K.every(function(re){return re})){S=P,R=!1;break}x.set(P,K)}if(R)for(var me=v?3:1,Ae=function(G){var le=f.find(function(we){var Q=x.get(we);if(Q)return Q.slice(0,G).every(function(ke){return ke})});if(le)return S=le,"break"},se=me;se>0;se--){var ye=Ae(se);if(ye==="break")break}e.placement!==S&&(e.modifiersData[r]._skip=!0,e.placement=S,e.reset=!0)}}var br={name:"flip",enabled:!0,phase:"main",fn:wr,requiresIfExists:["offset"],data:{_skip:!1}};function at(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function st(t){return[M,N,W,D].some(function(e){return t[e]>=0})}function Or(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=ve(e,{elementContext:"reference"}),a=ve(e,{altBoundary:!0}),l=at(s,r),c=at(a,n,i),u=st(l),d=st(c);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var xr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Or};function Tr(t,e,o){var r=I(t),n=[D,M].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[D,N].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function Cr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=mt.reduce(function(u,d){return u[d]=Tr(d,e.rects,i),u},{}),a=s[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=s}var Rr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Cr};function Pr(t){var e=t.state,o=t.name;e.modifiersData[o]=Pt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Er={name:"popperOffsets",enabled:!0,phase:"read",fn:Pr,data:{}};function Sr(t){return t==="x"?"y":"x"}function Ar(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,c=o.rootBoundary,u=o.altBoundary,d=o.padding,m=o.tether,p=m===void 0?!0:m,v=o.tetherOffset,h=v===void 0?0:v,g=ve(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),O=I(e.placement),C=ae(e.placement),w=!C,f=Ue(O),y=Sr(f),b=e.modifiersData.popperOffsets,x=e.rects.reference,R=e.rects.popper,S=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,E=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(!!b){if(i){var A,z=f==="y"?M:D,q=f==="y"?W:N,k=f==="y"?"height":"width",B=b[f],te=B+g[z],K=B-g[q],me=p?-R[k]/2:0,Ae=C===Ce?x[k]:R[k],se=C===Ce?-R[k]:-x[k],ye=e.elements.arrow,re=p&&ye?Ne(ye):{width:0,height:0},G=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:xt(),le=G[z],we=G[q],Q=fe(0,x[k],re[k]),ke=w?x[k]/2-me-Q-le-E.mainAxis:Ae-Q-le-E.mainAxis,Lt=w?-x[k]/2+me+Q+we+E.mainAxis:se+Q+we+E.mainAxis,je=e.elements.arrow&&ge(e.elements.arrow),$t=je?f==="y"?je.clientTop||0:je.clientLeft||0:0,ze=(A=P==null?void 0:P[f])!=null?A:0,Wt=B+ke-ze-$t,Nt=B+Lt-ze,qe=fe(p?Re(te,Wt):te,B,p?ee(K,Nt):K);b[f]=qe,j[f]=qe-B}if(a){var Ge,Ut=f==="x"?M:D,Ft=f==="x"?W:N,_=b[y],be=y==="y"?"height":"width",Ze=_+g[Ut],Je=_-g[Ft],Be=[M,D].indexOf(O)!==-1,Ke=(Ge=P==null?void 0:P[y])!=null?Ge:0,Qe=Be?Ze:_-x[be]-R[be]-Ke+E.altAxis,_e=Be?_+x[be]+R[be]-Ke-E.altAxis:Je,et=p&&Be?_t(Qe,_,_e):fe(p?Qe:Ze,_,p?_e:Je);b[y]=et,j[y]=et-_}e.modifiersData[r]=j}}var kr={name:"preventOverflow",enabled:!0,phase:"main",fn:Ar,requiresIfExists:["offset"]};function jr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Br(t){return t===U(t)||!$(t)?Fe(t):jr(t)}function Mr(t){var e=t.getBoundingClientRect(),o=ne(e.width)/t.offsetWidth||1,r=ne(e.height)/t.offsetHeight||1;return o!==1||r!==1}function Dr(t,e,o){o===void 0&&(o=!1);var r=$(e),n=$(e)&&Mr(e),i=J(e),s=ie(t,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!o)&&((V(e)!=="body"||Ve(i))&&(a=Br(e)),$(e)?(l=ie(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Ie(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Hr(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function Lr(t){var e=Hr(t);return Xt.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function $r(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function Wr(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var lt={placement:"bottom",modifiers:[],strategy:"absolute"};function ut(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Nr(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?lt:n;return function(a,l,c){c===void 0&&(c=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},lt,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],m=!1,p={state:u,setOptions:function(O){var C=typeof O=="function"?O(u.options):O;h(),u.options=Object.assign({},i,u.options,C),u.scrollParents={reference:oe(a)?de(a):a.contextElement?de(a.contextElement):[],popper:de(l)};var w=Lr(Wr([].concat(r,u.options.modifiers)));return u.orderedModifiers=w.filter(function(f){return f.enabled}),v(),p.update()},forceUpdate:function(){if(!m){var O=u.elements,C=O.reference,w=O.popper;if(!!ut(C,w)){u.rects={reference:Dr(C,ge(w),u.options.strategy==="fixed"),popper:Ne(w)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(E){return u.modifiersData[E.name]=Object.assign({},E.data)});for(var f=0;f<u.orderedModifiers.length;f++){if(u.reset===!0){u.reset=!1,f=-1;continue}var y=u.orderedModifiers[f],b=y.fn,x=y.options,R=x===void 0?{}:x,S=y.name;typeof b=="function"&&(u=b({state:u,options:R,name:S,instance:p})||u)}}}},update:$r(function(){return new Promise(function(g){p.forceUpdate(),g(u)})}),destroy:function(){h(),m=!0}};if(!ut(a,l))return p;p.setOptions(c).then(function(g){!m&&c.onFirstUpdate&&c.onFirstUpdate(g)});function v(){u.orderedModifiers.forEach(function(g){var O=g.name,C=g.options,w=C===void 0?{}:C,f=g.effect;if(typeof f=="function"){var y=f({state:u,name:O,instance:p,options:w}),b=function(){};d.push(y||b)}})}function h(){d.forEach(function(g){return g()}),d=[]}return p}}var Ur=[ur,Er,sr,Jt,Rr,br,kr,or,xr],Fr=Nr({defaultModifiers:Ur}),Et=T.exports.createContext(),St=T.exports.createContext();function Ir(t){var e=t.children,o=T.exports.useState(null),r=o[0],n=o[1],i=T.exports.useRef(!1);T.exports.useEffect(function(){return function(){i.current=!0}},[]);var s=T.exports.useCallback(function(a){i.current||n(a)},[]);return T.exports.createElement(Et.Provider,{value:r},T.exports.createElement(St.Provider,{value:s},e))}var At=function(e){return Array.isArray(e)?e[0]:e},kt=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Le=function(e,o){if(typeof e=="function")return kt(e,o);e!=null&&(e.current=o)},ct=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},pt=typeof window!="undefined"&&window.document&&window.document.createElement?T.exports.useLayoutEffect:T.exports.useEffect,Vr=typeof Element!="undefined",Xr=typeof Map=="function",Yr=typeof Set=="function",zr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Te(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var o,r,n;if(Array.isArray(t)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(!Te(t[r],e[r]))return!1;return!0}var i;if(Xr&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!Te(r.value[1],e.get(r.value[0])))return!1;return!0}if(Yr&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(zr&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),o=n.length,o!==Object.keys(e).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;if(Vr&&t instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!Te(t[n[r]],e[n[r]]))return!1;return!0}return t!==t&&e!==e}var qr=function(e,o){try{return Te(e,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},Gr=[],Zr=function(e,o,r){r===void 0&&(r={});var n=T.exports.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||Gr},s=T.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],c=T.exports.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var v=p.state,h=Object.keys(v.elements);bt.exports.flushSync(function(){l({styles:ct(h.map(function(g){return[g,v.styles[g]||{}]})),attributes:ct(h.map(function(g){return[g,v.attributes[g]]}))})})},requires:["computeStyles"]}},[]),u=T.exports.useMemo(function(){var m={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:"applyStyles",enabled:!1}])};return qr(n.current,m)?n.current||m:(n.current=m,m)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),d=T.exports.useRef();return pt(function(){d.current&&d.current.setOptions(u)},[u]),pt(function(){if(!(e==null||o==null)){var m=r.createPopper||Fr,p=m(e,o,u);return d.current=p,function(){p.destroy(),d.current=null}}},[e,o,r.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},Jr=function(){},Kr=function(){return Promise.resolve(null)},Qr=[];function _r(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?Qr:i,a=t.referenceElement,l=t.onFirstUpdate,c=t.innerRef,u=t.children,d=T.exports.useContext(Et),m=T.exports.useState(null),p=m[0],v=m[1],h=T.exports.useState(null),g=h[0],O=h[1];T.exports.useEffect(function(){Le(c,p)},[c,p]);var C=T.exports.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:g!=null,options:{element:g}}])}},[o,n,l,s,g]),w=Zr(a||d,p,C),f=w.state,y=w.styles,b=w.forceUpdate,x=w.update,R=T.exports.useMemo(function(){return{ref:v,style:y.popper,placement:f?f.placement:o,hasPopperEscaped:f&&f.modifiersData.hide?f.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:f&&f.modifiersData.hide?f.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:y.arrow,ref:O},forceUpdate:b||Jr,update:x||Kr}},[v,O,o,f,y,x,b]);return At(u)(R)}function eo(t){var e=t.children,o=t.innerRef,r=T.exports.useContext(St),n=T.exports.useCallback(function(i){Le(o,i),kt(r,i)},[o,r]);return T.exports.useEffect(function(){return function(){return Le(o,null)}},[]),T.exports.useEffect(function(){},[r]),At(e)({ref:n})}var jt=L.createContext({}),F=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},to=function(){},ft=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},ro=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},Bt=function(t){wt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,c=r.props,u=c.hideTooltip,d=c.clearScheduled;d(),u(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,c=r.props,u=c.hideTooltip,d=c.clearScheduled;d(),u(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,ro(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),X({},a,{style:X({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),X({},a,r.isTriggeredBy("hover")&&{onMouseEnter:F(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:F(r.props.hideTooltip,a.onMouseLeave)},{style:X({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return L.createElement(jt.Provider,{value:this.contextValue},a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(T.exports.Component);Bt.contextType=jt;var oo={childList:!0,subtree:!0},Mt=function(t){wt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,c=a.pageY;r.clearScheduled();var u={tooltipShown:!0};r.props.followCursor&&(u=X({},u,{pageX:l,pageY:c})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(u)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,c=a.pageY,u=r.getState()?"hideTooltip":"showTooltip";r[u]({pageX:l,pageY:c})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,c=a.pageY,u=r.props.followCursor?"showTooltip":"toggleTooltip";r[u]({pageX:l,pageY:c})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,c=a.pageY,u=r.props.followCursor?"showTooltip":"toggleTooltip";r[u]({pageX:l,pageY:c})},r.getTriggerProps=function(a){return a===void 0&&(a={}),X({},a,r.isTriggeredBy("click")&&{onClick:F(r.clickToggle,a.onClick),onTouchEnd:F(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:F(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&X({onMouseEnter:F(r.showTooltip,a.onMouseEnter),onMouseLeave:F(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:F(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:F(r.showTooltip,a.onFocus),onBlur:F(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,c=i.trigger,u=i.getTriggerRef,d=i.modifiers,m=i.closeOnReferenceHidden,p=i.usePortal,v=i.portalContainer,h=i.followCursor,g=i.getTooltipRef,O=i.mutationObserverOptions,C=Yt(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),w=L.createElement(_r,X({innerRef:g,placement:l,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(y){n.popperOffset=y.state.rects.popper}}].concat(d)},C),function(f){var y=f.ref,b=f.style,x=f.placement,R=f.arrowProps,S=f.isReferenceHidden,E=f.update;if(h&&n.popperOffset){var P=n.state,j=P.pageX,A=P.pageY,z=n.popperOffset,q=z.width,k=z.height,B=j+q>window.pageXOffset+document.body.offsetWidth?j-q:j,te=A+k>window.pageYOffset+document.body.offsetHeight?A-k:A;b.transform="translate3d("+B+"px, "+te+"px, 0"}return L.createElement(Bt,X({arrowProps:R,closeOnReferenceHidden:m,isReferenceHidden:S,placement:x,update:E,style:b,tooltip:a,trigger:c,mutationObserverOptions:O},{clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:y}))});return L.createElement(Ir,null,L.createElement(eo,{innerRef:u},function(f){var y=f.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:y})}),this.getState()&&(p?bt.exports.createPortal(w,v):w))},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(T.exports.Component);Mt.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:to,placement:"right",portalContainer:ft()?document.body:null,trigger:"hover",usePortal:ft(),mutationObserverOptions:oo,modifiers:[]};var no=Mt;function Pe(){return Pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},Pe.apply(this,arguments)}function io(t,e){if(t==null)return{};var o=ao(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function ao(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}var H=zt(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),Z=8,so=Ee.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(H("top",r,Z*-1,"auto"),"px"),top:"".concat(H("bottom",r,Z*-1,"auto"),"px"),right:"".concat(H("left",r,Z*-1,"auto"),"px"),left:"".concat(H("right",r,Z*-1,"auto"),"px"),borderBottomWidth:"".concat(H("top",r,"0",Z),"px"),borderTopWidth:"".concat(H("bottom",r,"0",Z),"px"),borderRightWidth:"".concat(H("left",r,"0",Z),"px"),borderLeftWidth:"".concat(H("right",r,"0",Z),"px"),borderTopColor:H("top",r,e.color[o]||o||e.base==="light"?ce(e.background.app):pe(e.background.app),"transparent"),borderBottomColor:H("bottom",r,e.color[o]||o||e.base==="light"?ce(e.background.app):pe(e.background.app),"transparent"),borderLeftColor:H("left",r,e.color[o]||o||e.base==="light"?ce(e.background.app):pe(e.background.app),"transparent"),borderRightColor:H("right",r,e.color[o]||o||e.base==="light"?ce(e.background.app):pe(e.background.app),"transparent")}}),lo=Ee.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?ce(e.background.app):pe(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Xe=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,c=io(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return L.createElement(lo,Pe({hasChrome:r,placement:o,ref:s},c,{color:l}),r&&L.createElement(so,Pe({placement:o,ref:a},i,{color:l})),n)};Xe.displayName="Tooltip";Xe.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var dt,vt;function uo(t,e){return vo(t)||fo(t,e)||po(t,e)||co()}function co(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function po(t,e){if(!!t){if(typeof t=="string")return ht(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return ht(t,e)}}function ht(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function fo(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var o=[],r=!0,n=!1,i=void 0;try{for(var s=t[Symbol.iterator](),a;!(r=(a=s.next()).done)&&(o.push(a.value),!(e&&o.length===e));r=!0);}catch(l){n=!0,i=l}finally{try{!r&&s.return!=null&&s.return()}finally{if(n)throw i}}return o}}function vo(t){if(Array.isArray(t))return t}function he(){return he=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},he.apply(this,arguments)}function Dt(t,e){if(t==null)return{};var o=ho(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function ho(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function Ht(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Me=qt.document,go=Ee.div(dt||(dt=Ht([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),mo=Ee.g(vt||(vt=Ht([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Ye=function(e){var o=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,s=e.hasChrome,a=e.tooltip,l=e.children,c=e.tooltipShown,u=e.onVisibilityChange,d=Dt(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),m=o?mo:go;return L.createElement(no,{placement:n,trigger:r,modifiers:i,tooltipShown:c,onVisibilityChange:u,tooltip:function(v){var h=v.getTooltipProps,g=v.getArrowProps,O=v.tooltipRef,C=v.arrowRef,w=v.placement;return L.createElement(Xe,he({hasChrome:s,placement:w,tooltipRef:O,arrowRef:C,arrowProps:g()},h()),typeof a=="function"?a({onHide:function(){return u(!1)}}):a)}},function(p){var v=p.getTriggerProps,h=p.triggerRef;return L.createElement(m,he({ref:h},v(),d),l)})};Ye.displayName="WithTooltipPure";Ye.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var yo=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=Dt(e,["startOpen","onVisibilityChange"]),i=T.exports.useState(o||!1),s=uo(i,2),a=s[0],l=s[1],c=T.exports.useCallback(function(u){r&&r(u)===!1||l(u)},[r]);return T.exports.useEffect(function(){var u=function(){return c(!1)};Me.addEventListener("keydown",u,!1);var d=Array.from(Me.getElementsByTagName("iframe")),m=[];return d.forEach(function(p){var v=function(){try{p.contentWindow.document&&(p.contentWindow.document.addEventListener("click",u),m.push(function(){try{p.contentWindow.document.removeEventListener("click",u)}catch{}}))}catch{}};v(),p.addEventListener("load",v),m.push(function(){p.removeEventListener("load",v)})}),function(){Me.removeEventListener("keydown",u),m.forEach(function(p){p()})}}),L.createElement(Ye,he({},n,{tooltipShown:a,onVisibilityChange:c}))};yo.displayName="WithToolTipState";export{yo as WithToolTipState,yo as WithTooltip,Ye as WithTooltipPure};
//# sourceMappingURL=WithTooltip.721ca6be.js.map
