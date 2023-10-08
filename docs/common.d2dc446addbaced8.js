"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{5178:(M,f,c)=>{c.d(f,{c:()=>s});var h=c(2364),r=c(7150),i=c(9203);const s=(o,n)=>{let t,e;const u=(l,p,E)=>{if(typeof document>"u")return;const w=document.elementFromPoint(l,p);w&&n(w)?w!==t&&(a(),d(w,E)):a()},d=(l,p)=>{t=l,e||(e=t);const E=t;(0,h.w)(()=>E.classList.add("ion-activated")),p()},a=(l=!1)=>{if(!t)return;const p=t;(0,h.w)(()=>p.classList.remove("ion-activated")),l&&e!==t&&t.click(),t=void 0};return(0,i.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>u(l.currentX,l.currentY,r.a),onMove:l=>u(l.currentX,l.currentY,r.b),onEnd:()=>{a(!0),(0,r.h)(),e=void 0}})}},4874:(M,f,c)=>{c.d(f,{g:()=>r});var h=c(6225);const r=()=>{if(void 0!==h.w)return h.w.Capacitor}},5149:(M,f,c)=>{c.d(f,{g:()=>h});const h=(n,t,e,u,d)=>i(n[1],t[1],e[1],u[1],d).map(a=>r(n[0],t[0],e[0],u[0],a)),r=(n,t,e,u,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*e*d+3*e+u*d))-n*Math.pow(d-1,3),i=(n,t,e,u,d)=>o((u-=d)-3*(e-=d)+3*(t-=d)-(n-=d),3*e-6*t+3*n,3*t-3*n,n).filter(l=>l>=0&&l<=1),o=(n,t,e,u)=>{if(0===n)return((n,t,e)=>{const u=t*t-4*n*e;return u<0?[]:[(-t+Math.sqrt(u))/(2*n),(-t-Math.sqrt(u))/(2*n)]})(t,e,u);const d=(3*(e/=n)-(t/=n)*t)/3,a=(2*t*t*t-9*t*e+27*(u/=n))/27;if(0===d)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-d),-Math.sqrt(-d)];const l=Math.pow(a/2,2)+Math.pow(d/3,3);if(0===l)return[Math.pow(a/2,.5)-t/3];if(l>0)return[Math.pow(-a/2+Math.sqrt(l),1/3)-Math.pow(a/2+Math.sqrt(l),1/3)-t/3];const p=Math.sqrt(Math.pow(-d/3,3)),E=Math.acos(-a/(2*Math.sqrt(Math.pow(-d/3,3)))),w=2*Math.pow(p,1/3);return[w*Math.cos(E/3)-t/3,w*Math.cos((E+2*Math.PI)/3)-t/3,w*Math.cos((E+4*Math.PI)/3)-t/3]}},5085:(M,f,c)=>{c.d(f,{i:()=>h});const h=r=>r&&""!==r.dir?"rtl"===r.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(M,f,c)=>{c.r(f),c.d(f,{startFocusVisible:()=>s});const h="ion-focused",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=o=>{let n=[],t=!0;const e=o?o.shadowRoot:document,u=o||document.body,d=y=>{n.forEach(v=>v.classList.remove(h)),y.forEach(v=>v.classList.add(h)),n=y},a=()=>{t=!1,d([])},l=y=>{t=i.includes(y.key),t||d([])},p=y=>{if(t&&void 0!==y.composedPath){const v=y.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));d(v)}},E=()=>{e.activeElement===u&&d([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",p),e.addEventListener("focusout",E),e.addEventListener("touchstart",a,{passive:!0}),e.addEventListener("mousedown",a),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",p),e.removeEventListener("focusout",E),e.removeEventListener("touchstart",a),e.removeEventListener("mousedown",a)},setFocus:d}}},5487:(M,f,c)=>{c.d(f,{c:()=>r});var h=c(839);const r=n=>{const t=n;let e;return{hasLegacyControl:()=>{if(void 0===e){const d=void 0!==t.label||i(t),a=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,l=(0,h.h)(t);e=!0===t.legacy||!d&&!a&&null!==l}return e}}},i=n=>null!==n.shadowRoot&&!!(s.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||o.includes(n.tagName)&&""!==n.textContent),s=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7150:(M,f,c)=>{c.d(f,{I:()=>r,a:()=>t,b:()=>e,c:()=>n,d:()=>d,h:()=>u});var h=c(4874),r=function(a){return a.Heavy="HEAVY",a.Medium="MEDIUM",a.Light="LIGHT",a}(r||{});const s={getEngine(){const a=window.TapticEngine;if(a)return a;const l=(0,h.g)();return null!=l&&l.isPluginAvailable("Haptics")?l.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const l=(0,h.g)();return"web"!==(null==l?void 0:l.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,h.g)(),impact(a){const l=this.getEngine();if(!l)return;const p=this.isCapacitor()?a.style:a.style.toLowerCase();l.impact({style:p})},notification(a){const l=this.getEngine();if(!l)return;const p=this.isCapacitor()?a.type:a.type.toLowerCase();l.notification({type:p})},selection(){const a=this.isCapacitor()?r.Light:"light";this.impact({style:a})},selectionStart(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionStart():a.gestureSelectionStart())},selectionChanged(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionChanged():a.gestureSelectionChanged())},selectionEnd(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionEnd():a.gestureSelectionEnd())}},o=()=>s.available(),n=()=>{o()&&s.selection()},t=()=>{o()&&s.selectionStart()},e=()=>{o()&&s.selectionChanged()},u=()=>{o()&&s.selectionEnd()},d=a=>{o()&&s.impact(a)}},8360:(M,f,c)=>{c.d(f,{I:()=>n,a:()=>d,b:()=>o,c:()=>p,d:()=>w,f:()=>a,g:()=>u,i:()=>e,p:()=>E,r:()=>y,s:()=>l});var h=c(5861),r=c(839),i=c(6710);const o="ion-content",n=".ion-content-scroll-host",t=`${o}, ${n}`,e=v=>"ION-CONTENT"===v.tagName,u=function(){var v=(0,h.Z)(function*(m){return e(m)?(yield new Promise(g=>(0,r.c)(m,g)),m.getScrollElement()):m});return function(g){return v.apply(this,arguments)}}(),d=v=>v.querySelector(n)||v.querySelector(t),a=v=>v.closest(t),l=(v,m)=>e(v)?v.scrollToTop(m):Promise.resolve(v.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(v,m,g,O)=>e(v)?v.scrollByPoint(m,g,O):Promise.resolve(v.scrollBy({top:g,left:m,behavior:O>0?"smooth":"auto"})),E=v=>(0,i.b)(v,o),w=v=>{if(e(v)){const g=v.scrollY;return v.scrollY=!1,g}return v.style.setProperty("overflow","hidden"),!0},y=(v,m)=>{e(v)?v.scrollY=m:v.style.removeProperty("overflow")}},3173:(M,f,c)=>{c.d(f,{a:()=>h,b:()=>p,c:()=>t,d:()=>E,e:()=>L,f:()=>n,g:()=>w,h:()=>i,i:()=>r,j:()=>O,k:()=>b,l:()=>e,m:()=>a,n:()=>y,o:()=>d,p:()=>o,q:()=>s,r:()=>g,s:()=>_,t:()=>l,u:()=>v,v:()=>m,w:()=>u});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(M,f,c)=>{c.d(f,{c:()=>s,g:()=>o});var h=c(6225),r=c(839),i=c(6710);const s=(t,e,u)=>{let d,a;void 0!==h.w&&"MutationObserver"in h.w&&(d=new MutationObserver(w=>{for(const y of w)for(const v of y.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&v.slot===e)return u(),void(0,r.r)(()=>l(v))}),d.observe(t,{childList:!0}));const l=w=>{var y;a&&(a.disconnect(),a=void 0),a=new MutationObserver(v=>{u();for(const m of v)for(const g of m.removedNodes)g.nodeType===Node.ELEMENT_NODE&&g.slot===e&&E()}),a.observe(null!==(y=w.parentElement)&&void 0!==y?y:w,{subtree:!0,childList:!0})},E=()=>{a&&(a.disconnect(),a=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),E()}}},o=(t,e,u)=>{const d=null==t?0:t.toString().length,a=n(d,e);if(void 0===u)return a;try{return u(d,e)}catch(l){return(0,i.a)("Exception in provided `counterFormatter`.",l),a}},n=(t,e)=>`${t} / ${e}`},7484:(M,f,c)=>{c.d(f,{K:()=>s,a:()=>i});var h=c(4874),r=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(r||{}),i=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(i||{});const s={getEngine(){const o=(0,h.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(n=>{if(n.code!==r.Unimplemented)throw n}):Promise.resolve(void 0)}}},1612:(M,f,c)=>{c.r(f),c.d(f,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>b,keyboardDidClose:()=>v,keyboardDidOpen:()=>w,keyboardDidResize:()=>y,resetKeyboardAssist:()=>d,setKeyboardClose:()=>E,setKeyboardOpen:()=>p,startKeyboardAssist:()=>a,trackViewportChanges:()=>O});var h=c(7484);c(4874),c(6225);const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let t={},e={},u=!1;const d=()=>{t={},e={},u=!1},a=_=>{if(h.K.getEngine())l(_);else{if(!_.visualViewport)return;e=b(_.visualViewport),_.visualViewport.onresize=()=>{O(_),w()||y(_)?p(_):v(_)&&E(_)}}},l=_=>{_.addEventListener("keyboardDidShow",L=>p(_,L)),_.addEventListener("keyboardDidHide",()=>E(_))},p=(_,L)=>{m(_,L),u=!0},E=_=>{g(_),u=!1},w=()=>!u&&t.width===e.width&&(t.height-e.height)*e.scale>150,y=_=>u&&!v(_),v=_=>u&&e.height===_.innerHeight,m=(_,L)=>{const C=new CustomEvent(s,{detail:{keyboardHeight:L?L.keyboardHeight:_.innerHeight-e.height}});_.dispatchEvent(C)},g=_=>{const L=new CustomEvent(o);_.dispatchEvent(L)},O=_=>{t=Object.assign({},e),e=b(_.visualViewport)},b=_=>({width:Math.round(_.width),height:Math.round(_.height),offsetTop:_.offsetTop,offsetLeft:_.offsetLeft,pageTop:_.pageTop,pageLeft:_.pageLeft,scale:_.scale})},3459:(M,f,c)=>{c.d(f,{c:()=>n});var h=c(5861),r=c(6225),i=c(7484);const s=t=>{if(void 0===r.d||t===i.a.None||void 0===t)return null;const e=r.d.querySelector("ion-app");return null!=e?e:r.d.body},o=t=>{const e=s(t);return null===e?0:e.clientHeight},n=function(){var t=(0,h.Z)(function*(e){let u,d,a,l;const p=function(){var m=(0,h.Z)(function*(){const g=yield i.K.getResizeMode(),O=void 0===g?void 0:g.mode;u=()=>{void 0===l&&(l=o(O)),a=!0,E(a,O)},d=()=>{a=!1,E(a,O)},null==r.w||r.w.addEventListener("keyboardWillShow",u),null==r.w||r.w.addEventListener("keyboardWillHide",d)});return function(){return m.apply(this,arguments)}}(),E=(m,g)=>{e&&e(m,w(g))},w=m=>{if(0===l||l===o(m))return;const g=s(m);return null!==g?new Promise(O=>{const _=new ResizeObserver(()=>{g.clientHeight===l&&(_.disconnect(),O())});_.observe(g)}):void 0};return yield p(),{init:p,destroy:()=>{null==r.w||r.w.removeEventListener("keyboardWillShow",u),null==r.w||r.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>a}});return function(u){return t.apply(this,arguments)}}()},3830:(M,f,c)=>{c.d(f,{c:()=>r});var h=c(5861);const r=()=>{let i;return{lock:function(){var o=(0,h.Z)(function*(){const n=i;let t;return i=new Promise(e=>t=e),void 0!==n&&(yield n),t});return function(){return o.apply(this,arguments)}}()}}},5857:(M,f,c)=>{c.d(f,{c:()=>i});var h=c(6225),r=c(839);const i=(s,o,n)=>{let t;const e=()=>!(void 0===o()||void 0!==s.label||null===n()),d=()=>{const l=o();if(void 0===l)return;if(!e())return void l.style.removeProperty("width");const p=n().scrollWidth;if(0===p&&null===l.offsetParent&&void 0!==h.w&&"IntersectionObserver"in h.w){if(void 0!==t)return;const E=t=new IntersectionObserver(w=>{1===w[0].intersectionRatio&&(d(),E.disconnect(),t=void 0)},{threshold:.01,root:s});E.observe(l)}else l.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{e()&&(0,r.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},3781:(M,f,c)=>{c.d(f,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(i,s,o)=>{const n=i*s/o-i+"ms",t=2*Math.PI*s/o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(i,s,o)=>{const n=s/o,t=i*n-i+"ms",e=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(i,s)=>({r:6,style:{left:32-32*s+"%","animation-delay":-110*s+"ms"}})},lines:{dur:1e3,lines:8,fn:(i,s,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*s+(s<o/2?180:-180)}deg)`,"animation-delay":i*s/o-i+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(i,s,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*s+(s<o/2?180:-180)}deg)`,"animation-delay":i*s/o-i+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(i,s,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":i*s/o-i+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(i,s,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":i*s/o-i+"ms"}})}}},8466:(M,f,c)=>{c.r(f),c.d(f,{createSwipeBackGesture:()=>o});var h=c(839),r=c(5085),i=c(9203);c(619);const o=(n,t,e,u,d)=>{const a=n.ownerDocument.defaultView;let l=(0,r.i)(n);const E=g=>l?-g.deltaX:g.deltaX;return(0,i.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:g=>(l=(0,r.i)(n),(g=>{const{startX:b}=g;return l?b>=a.innerWidth-50:b<=50})(g)&&t()),onStart:e,onMove:g=>{const b=E(g)/a.innerWidth;u(b)},onEnd:g=>{const O=E(g),b=a.innerWidth,_=O/b,L=(g=>l?-g.velocityX:g.velocityX)(g),C=L>=0&&(L>.2||O>b/2),P=(C?1-_:_)*b;let x=0;if(P>5){const A=P/Math.abs(L);x=Math.min(A,540)}d(C,_<=0?.01:(0,h.l)(0,_,.9999),x)}})}},7063:(M,f,c)=>{c.d(f,{w:()=>h});const h=(s,o,n)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{n(r(e,o))});return t.observe(s,{childList:!0,subtree:!0}),t},r=(s,o)=>{let n;return s.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)n=i(t.addedNodes[e],o)||n}),n},i=(s,o)=>1!==s.nodeType?void 0:(s.tagName===o.toUpperCase()?[s]:Array.from(s.querySelectorAll(o))).find(t=>t.value===s.value)},822:(M,f,c)=>{c.d(f,{K:()=>i});var h=c(6814),r=c(6689);let i=(()=>{var s;class o{}return(s=o).\u0275fac=function(t){return new(t||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[h.ez]}),o})()},9341:(M,f,c)=>{c.d(f,{I:()=>t});var h=c(7636),r=c(6689),i=c(6814);function s(e,u){if(1&e&&r._UZ(0,"img",3),2&e){const d=r.oxw();r.s9C("src",d.ruta,r.LSH),r.s9C("alt",d.text)}}const o=function(e,u,d){return{width:e,height:u,"font-size":d}};function n(e,u){if(1&e&&(r.TgZ(0,"div",4),r._uU(1),r.qZA()),2&e){const d=r.oxw();r.Q6J("ngStyle",r.kEZ(2,o,d.tamano,d.tamano,d.tamanofuente)),r.xp6(1),r.hij(" ",d.text," ")}}let t=(()=>{var e;class u{constructor(){this.ruta="",this.email="",this.tamanofuente="",this.tamano=""}ngOnInit(){""!=this.email&&(this.ruta="https://www.gravatar.com/avatar/"+h.V.hashStr(this.email)),""==this.tamano&&(console.log("undefined!!!"),this.tamano="65px",this.tamanofuente="xx-large")}}return(e=u).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["itemcircle"]],inputs:{email:"email",text:"text",nombre:"nombre",ruta:"ruta",tamano:"tamano"},decls:6,vars:3,consts:[[1,"centergrid"],["width","65px",3,"src","alt",4,"ngIf"],["class","imagenredonda",3,"ngStyle",4,"ngIf"],["width","65px",3,"src","alt"],[1,"imagenredonda",3,"ngStyle"]],template:function(a,l){1&a&&(r.TgZ(0,"div",0),r.YNc(1,s,1,2,"img",1),r.YNc(2,n,2,6,"div",2),r.qZA(),r.TgZ(3,"div",0)(4,"p"),r._uU(5),r.qZA()()),2&a&&(r.xp6(1),r.Q6J("ngIf",""!=l.email||""!=l.ruta),r.xp6(1),r.Q6J("ngIf",""==l.ruta),r.xp6(3),r.Oqu(l.nombre))},dependencies:[i.O5,i.PC],styles:["img[_ngcontent-%COMP%]{border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%}.imagenredonda[_ngcontent-%COMP%]{background-color:orange;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;font-weight:700;color:#000;display:flex;justify-content:center;align-items:center}"]}),u})()},8250:(M,f,c)=>{c.d(f,{E:()=>s});var h=c(553),r=c(6689),i=c(9862);let s=(()=>{var o;class n{constructor(e){this.http=e}getAll(){return this.http.get(`${h.N.apiURL}/equipos`)}get(e){return this.http.get(`${h.N.apiURL}/equipos/`+e)}}return(o=n).\u0275fac=function(e){return new(e||o)(r.LFG(i.eN))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),n})()},3404:(M,f,c)=>{c.d(f,{T:()=>s});var h=c(553),r=c(6689),i=c(9862);let s=(()=>{var o;class n{constructor(e){this.http=e}getAll(){return this.http.get(`${h.N.apiURL}/jugadores`)}get(e){return this.http.get(`${h.N.apiURL}/jugadores/`+e)}}return(o=n).\u0275fac=function(e){return new(e||o)(r.LFG(i.eN))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),n})()},1002:(M,f,c)=>{c.d(f,{A:()=>s});var h=c(553),r=c(6689),i=c(9862);let s=(()=>{var o;class n{constructor(e){this.http=e}getAll(){return this.http.get(`${h.N.apiURL}/partidos`)}get(e){return this.http.get(`${h.N.apiURL}/partidos/`+e)}}return(o=n).\u0275fac=function(e){return new(e||o)(r.LFG(i.eN))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),n})()},7636:(M,f)=>{f.V=void 0;var h=function(){function r(){this._dataLength=0,this._bufferLength=0,this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}return r.hashStr=function(i,s){return void 0===s&&(s=!1),this.onePassHasher.start().appendStr(i).end(s)},r.hashAsciiStr=function(i,s){return void 0===s&&(s=!1),this.onePassHasher.start().appendAsciiStr(i).end(s)},r._hex=function(i){var n,t,e,u,s=r.hexChars,o=r.hexOut;for(u=0;u<4;u+=1)for(t=8*u,n=i[u],e=0;e<8;e+=2)o[t+1+e]=s.charAt(15&n),o[t+0+e]=s.charAt(15&(n>>>=4)),n>>>=4;return o.join("")},r._md5cycle=function(i,s){var o=i[0],n=i[1],t=i[2],e=i[3];n=((n+=((t=((t+=((e=((e+=((o=((o+=(n&t|~n&e)+s[0]-680876936|0)<<7|o>>>25)+n|0)&n|~o&t)+s[1]-389564586|0)<<12|e>>>20)+o|0)&o|~e&n)+s[2]+606105819|0)<<17|t>>>15)+e|0)&e|~t&o)+s[3]-1044525330|0)<<22|n>>>10)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n&t|~n&e)+s[4]-176418897|0)<<7|o>>>25)+n|0)&n|~o&t)+s[5]+1200080426|0)<<12|e>>>20)+o|0)&o|~e&n)+s[6]-1473231341|0)<<17|t>>>15)+e|0)&e|~t&o)+s[7]-45705983|0)<<22|n>>>10)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n&t|~n&e)+s[8]+1770035416|0)<<7|o>>>25)+n|0)&n|~o&t)+s[9]-1958414417|0)<<12|e>>>20)+o|0)&o|~e&n)+s[10]-42063|0)<<17|t>>>15)+e|0)&e|~t&o)+s[11]-1990404162|0)<<22|n>>>10)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n&t|~n&e)+s[12]+1804603682|0)<<7|o>>>25)+n|0)&n|~o&t)+s[13]-40341101|0)<<12|e>>>20)+o|0)&o|~e&n)+s[14]-1502002290|0)<<17|t>>>15)+e|0)&e|~t&o)+s[15]+1236535329|0)<<22|n>>>10)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n&e|t&~e)+s[1]-165796510|0)<<5|o>>>27)+n|0)&t|n&~t)+s[6]-1069501632|0)<<9|e>>>23)+o|0)&n|o&~n)+s[11]+643717713|0)<<14|t>>>18)+e|0)&o|e&~o)+s[0]-373897302|0)<<20|n>>>12)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n&e|t&~e)+s[5]-701558691|0)<<5|o>>>27)+n|0)&t|n&~t)+s[10]+38016083|0)<<9|e>>>23)+o|0)&n|o&~n)+s[15]-660478335|0)<<14|t>>>18)+e|0)&o|e&~o)+s[4]-405537848|0)<<20|n>>>12)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n&e|t&~e)+s[9]+568446438|0)<<5|o>>>27)+n|0)&t|n&~t)+s[14]-1019803690|0)<<9|e>>>23)+o|0)&n|o&~n)+s[3]-187363961|0)<<14|t>>>18)+e|0)&o|e&~o)+s[8]+1163531501|0)<<20|n>>>12)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n&e|t&~e)+s[13]-1444681467|0)<<5|o>>>27)+n|0)&t|n&~t)+s[2]-51403784|0)<<9|e>>>23)+o|0)&n|o&~n)+s[7]+1735328473|0)<<14|t>>>18)+e|0)&o|e&~o)+s[12]-1926607734|0)<<20|n>>>12)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n^t^e)+s[5]-378558|0)<<4|o>>>28)+n|0)^n^t)+s[8]-2022574463|0)<<11|e>>>21)+o|0)^o^n)+s[11]+1839030562|0)<<16|t>>>16)+e|0)^e^o)+s[14]-35309556|0)<<23|n>>>9)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n^t^e)+s[1]-1530992060|0)<<4|o>>>28)+n|0)^n^t)+s[4]+1272893353|0)<<11|e>>>21)+o|0)^o^n)+s[7]-155497632|0)<<16|t>>>16)+e|0)^e^o)+s[10]-1094730640|0)<<23|n>>>9)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n^t^e)+s[13]+681279174|0)<<4|o>>>28)+n|0)^n^t)+s[0]-358537222|0)<<11|e>>>21)+o|0)^o^n)+s[3]-722521979|0)<<16|t>>>16)+e|0)^e^o)+s[6]+76029189|0)<<23|n>>>9)+t|0,n=((n+=((t=((t+=((e=((e+=((o=((o+=(n^t^e)+s[9]-640364487|0)<<4|o>>>28)+n|0)^n^t)+s[12]-421815835|0)<<11|e>>>21)+o|0)^o^n)+s[15]+530742520|0)<<16|t>>>16)+e|0)^e^o)+s[2]-995338651|0)<<23|n>>>9)+t|0,n=((n+=((e=((e+=(n^((o=((o+=(t^(n|~e))+s[0]-198630844|0)<<6|o>>>26)+n|0)|~t))+s[7]+1126891415|0)<<10|e>>>22)+o|0)^((t=((t+=(o^(e|~n))+s[14]-1416354905|0)<<15|t>>>17)+e|0)|~o))+s[5]-57434055|0)<<21|n>>>11)+t|0,n=((n+=((e=((e+=(n^((o=((o+=(t^(n|~e))+s[12]+1700485571|0)<<6|o>>>26)+n|0)|~t))+s[3]-1894986606|0)<<10|e>>>22)+o|0)^((t=((t+=(o^(e|~n))+s[10]-1051523|0)<<15|t>>>17)+e|0)|~o))+s[1]-2054922799|0)<<21|n>>>11)+t|0,n=((n+=((e=((e+=(n^((o=((o+=(t^(n|~e))+s[8]+1873313359|0)<<6|o>>>26)+n|0)|~t))+s[15]-30611744|0)<<10|e>>>22)+o|0)^((t=((t+=(o^(e|~n))+s[6]-1560198380|0)<<15|t>>>17)+e|0)|~o))+s[13]+1309151649|0)<<21|n>>>11)+t|0,n=((n+=((e=((e+=(n^((o=((o+=(t^(n|~e))+s[4]-145523070|0)<<6|o>>>26)+n|0)|~t))+s[11]-1120210379|0)<<10|e>>>22)+o|0)^((t=((t+=(o^(e|~n))+s[2]+718787259|0)<<15|t>>>17)+e|0)|~o))+s[9]-343485551|0)<<21|n>>>11)+t|0,i[0]=o+i[0]|0,i[1]=n+i[1]|0,i[2]=t+i[2]|0,i[3]=e+i[3]|0},r.prototype.start=function(){return this._dataLength=0,this._bufferLength=0,this._state.set(r.stateIdentity),this},r.prototype.appendStr=function(i){var t,e,s=this._buffer8,o=this._buffer32,n=this._bufferLength;for(e=0;e<i.length;e+=1){if((t=i.charCodeAt(e))<128)s[n++]=t;else if(t<2048)s[n++]=192+(t>>>6),s[n++]=63&t|128;else if(t<55296||t>56319)s[n++]=224+(t>>>12),s[n++]=t>>>6&63|128,s[n++]=63&t|128;else{if((t=1024*(t-55296)+(i.charCodeAt(++e)-56320)+65536)>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");s[n++]=240+(t>>>18),s[n++]=t>>>12&63|128,s[n++]=t>>>6&63|128,s[n++]=63&t|128}n>=64&&(this._dataLength+=64,r._md5cycle(this._state,o),n-=64,o[0]=o[16])}return this._bufferLength=n,this},r.prototype.appendAsciiStr=function(i){for(var t,s=this._buffer8,o=this._buffer32,n=this._bufferLength,e=0;;){for(t=Math.min(i.length-e,64-n);t--;)s[n++]=i.charCodeAt(e++);if(n<64)break;this._dataLength+=64,r._md5cycle(this._state,o),n=0}return this._bufferLength=n,this},r.prototype.appendByteArray=function(i){for(var t,s=this._buffer8,o=this._buffer32,n=this._bufferLength,e=0;;){for(t=Math.min(i.length-e,64-n);t--;)s[n++]=i[e++];if(n<64)break;this._dataLength+=64,r._md5cycle(this._state,o),n=0}return this._bufferLength=n,this},r.prototype.getState=function(){var i=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[i[0],i[1],i[2],i[3]]}},r.prototype.setState=function(i){var t,s=i.buffer,o=i.state,n=this._state;for(this._dataLength=i.length,this._bufferLength=i.buflen,n[0]=o[0],n[1]=o[1],n[2]=o[2],n[3]=o[3],t=0;t<s.length;t+=1)this._buffer8[t]=s.charCodeAt(t)},r.prototype.end=function(i){void 0===i&&(i=!1);var s=this._bufferLength,o=this._buffer8,n=this._buffer32,t=1+(s>>2);this._dataLength+=s;var e=8*this._dataLength;if(o[s]=128,o[s+1]=o[s+2]=o[s+3]=0,n.set(r.buffer32Identity.subarray(t),t),s>55&&(r._md5cycle(this._state,n),n.set(r.buffer32Identity)),e<=4294967295)n[14]=e;else{var u=e.toString(16).match(/(.*?)(.{0,8})$/);if(null===u)return;var d=parseInt(u[2],16),a=parseInt(u[1],16)||0;n[14]=d,n[15]=a}return r._md5cycle(this._state,n),i?this._state:r._hex(this._state)},r.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),r.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),r.hexChars="0123456789abcdef",r.hexOut=[],r.onePassHasher=new r,r}();if(f.V=h,"5d41402abc4b2a76b9719d911017c592"!==h.hashStr("hello"))throw new Error("Md5 self test failed.")}}]);