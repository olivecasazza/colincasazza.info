function Nc(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const nt={},wr=[],gn=()=>{},Og=()=>!1,Fg=/^on[^a-z]/,Bs=t=>Fg.test(t),Oc=t=>t.startsWith("onUpdate:"),pt=Object.assign,Fc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bg=Object.prototype.hasOwnProperty,Ye=(t,e)=>Bg.call(t,e),Ue=Array.isArray,Rr=t=>Hs(t)==="[object Map]",Lh=t=>Hs(t)==="[object Set]",Hg=t=>Hs(t)==="[object RegExp]",Fe=t=>typeof t=="function",ot=t=>typeof t=="string",Bc=t=>typeof t=="symbol",tt=t=>t!==null&&typeof t=="object",Dh=t=>tt(t)&&Fe(t.then)&&Fe(t.catch),Uh=Object.prototype.toString,Hs=t=>Uh.call(t),kg=t=>Hs(t).slice(8,-1),Ih=t=>Hs(t)==="[object Object]",Hc=t=>ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=Nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zg=/-(\w)/g,wn=ma(t=>t.replace(zg,(e,n)=>n?n.toUpperCase():"")),Gg=/\B([A-Z])/g,jr=ma(t=>t.replace(Gg,"-$1").toLowerCase()),ga=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),za=ma(t=>t?`on${ga(t)}`:""),Ts=(t,e)=>!Object.is(t,e),Cr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ko=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},zl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Nh=t=>{const e=ot(t)?Number(t):NaN;return isNaN(e)?t:e};let Ru;const Gl=()=>Ru||(Ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _a(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ot(i)?jg(i):_a(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ot(t))return t;if(tt(t))return t}}const Vg=/;(?![^(]*\))/g,Wg=/:([^]+)/,Xg=/\/\*[^]*?\*\//g;function jg(t){const e={};return t.replace(Xg,"").split(Vg).forEach(n=>{if(n){const i=n.split(Wg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function va(t){let e="";if(ot(t))e=t;else if(Ue(t))for(let n=0;n<t.length;n++){const i=va(t[n]);i&&(e+=i+" ")}else if(tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function qg(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ot(e)&&(t.class=va(e)),n&&(t.style=_a(n)),t}const $g="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yg=Nc($g);function Oh(t){return!!t||t===""}const Cu=t=>ot(t)?t:t==null?"":Ue(t)||tt(t)&&(t.toString===Uh||!Fe(t.toString))?JSON.stringify(t,Fh,2):String(t),Fh=(t,e)=>e&&e.__v_isRef?Fh(t,e.value):Rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Lh(e)?{[`Set(${e.size})`]:[...e.values()]}:tt(e)&&!Ue(e)&&!Ih(e)?String(e):e;let $t;class Bh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Hh(t){return new Bh(t)}function Kg(t,e=$t){e&&e.active&&e.effects.push(t)}function kh(){return $t}function Zg(t){$t&&$t.cleanups.push(t)}const kc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},zh=t=>(t.w&xi)>0,Gh=t=>(t.n&xi)>0,Jg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xi},Qg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];zh(r)&&!Gh(r)?r.delete(t):e[n++]=r,r.w&=~xi,r.n&=~xi}e.length=n}},Zo=new WeakMap;let as=0,xi=1;const Vl=30;let fn;const ki=Symbol(""),Wl=Symbol("");class zc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Kg(this,i)}run(){if(!this.active)return this.fn();let e=fn,n=mi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=fn,fn=this,mi=!0,xi=1<<++as,as<=Vl?Jg(this):Pu(this),this.fn()}finally{as<=Vl&&Qg(this),xi=1<<--as,fn=this.parent,mi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(Pu(this),this.onStop&&this.onStop(),this.active=!1)}}function Pu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mi=!0;const Vh=[];function qr(){Vh.push(mi),mi=!1}function $r(){const t=Vh.pop();mi=t===void 0?!0:t}function Vt(t,e,n){if(mi&&fn){let i=Zo.get(t);i||Zo.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=kc()),Wh(r)}}function Wh(t,e){let n=!1;as<=Vl?Gh(t)||(t.n|=xi,n=!zh(t)):n=!t.has(fn),n&&(t.add(fn),fn.deps.push(t))}function Wn(t,e,n,i,r,s){const o=Zo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Ue(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Ue(t)?Hc(n)&&a.push(o.get("length")):(a.push(o.get(ki)),Rr(t)&&a.push(o.get(Wl)));break;case"delete":Ue(t)||(a.push(o.get(ki)),Rr(t)&&a.push(o.get(Wl)));break;case"set":Rr(t)&&a.push(o.get(ki));break}if(a.length===1)a[0]&&Xl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Xl(kc(l))}}function Xl(t,e){const n=Ue(t)?t:[...t];for(const i of n)i.computed&&Lu(i);for(const i of n)i.computed||Lu(i)}function Lu(t,e){(t!==fn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function e_(t,e){var n;return(n=Zo.get(t))==null?void 0:n.get(e)}const t_=Nc("__proto__,__v_isRef,__isVue"),Xh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bc)),n_=Gc(),i_=Gc(!1,!0),r_=Gc(!0),Du=s_();function s_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=qe(this);for(let s=0,o=this.length;s<o;s++)Vt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qr();const i=qe(this)[e].apply(this,n);return $r(),i}}),t}function o_(t){const e=qe(this);return Vt(e,"has",t),e.hasOwnProperty(t)}function Gc(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?E_:Kh:e?Yh:$h).get(i))return i;const o=Ue(i);if(!t){if(o&&Ye(Du,r))return Reflect.get(Du,r,s);if(r==="hasOwnProperty")return o_}const a=Reflect.get(i,r,s);return(Bc(r)?Xh.has(r):t_(r))||(t||Vt(i,"get",r),e)?a:it(a)?o&&Hc(r)?a:a.value:tt(a)?t?Zh(a):Xn(a):a}}const a_=jh(),l_=jh(!0);function jh(t=!1){return function(n,i,r,s){let o=n[i];if(qi(o)&&it(o)&&!it(r))return!1;if(!t&&(!Jo(r)&&!qi(r)&&(o=qe(o),r=qe(r)),!Ue(n)&&it(o)&&!it(r)))return o.value=r,!0;const a=Ue(n)&&Hc(i)?Number(i)<n.length:Ye(n,i),l=Reflect.set(n,i,r,s);return n===qe(s)&&(a?Ts(r,o)&&Wn(n,"set",i,r):Wn(n,"add",i,r)),l}}function c_(t,e){const n=Ye(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Wn(t,"delete",e,void 0),i}function u_(t,e){const n=Reflect.has(t,e);return(!Bc(e)||!Xh.has(e))&&Vt(t,"has",e),n}function f_(t){return Vt(t,"iterate",Ue(t)?"length":ki),Reflect.ownKeys(t)}const qh={get:n_,set:a_,deleteProperty:c_,has:u_,ownKeys:f_},d_={get:r_,set(t,e){return!0},deleteProperty(t,e){return!0}},h_=pt({},qh,{get:i_,set:l_}),Vc=t=>t,xa=t=>Reflect.getPrototypeOf(t);function io(t,e,n=!1,i=!1){t=t.__v_raw;const r=qe(t),s=qe(e);n||(e!==s&&Vt(r,"get",e),Vt(r,"get",s));const{has:o}=xa(r),a=i?Vc:n?jc:As;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function ro(t,e=!1){const n=this.__v_raw,i=qe(n),r=qe(t);return e||(t!==r&&Vt(i,"has",t),Vt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function so(t,e=!1){return t=t.__v_raw,!e&&Vt(qe(t),"iterate",ki),Reflect.get(t,"size",t)}function Uu(t){t=qe(t);const e=qe(this);return xa(e).has.call(e,t)||(e.add(t),Wn(e,"add",t,t)),this}function Iu(t,e){e=qe(e);const n=qe(this),{has:i,get:r}=xa(n);let s=i.call(n,t);s||(t=qe(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Ts(e,o)&&Wn(n,"set",t,e):Wn(n,"add",t,e),this}function Nu(t){const e=qe(this),{has:n,get:i}=xa(e);let r=n.call(e,t);r||(t=qe(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Wn(e,"delete",t,void 0),s}function Ou(){const t=qe(this),e=t.size!==0,n=t.clear();return e&&Wn(t,"clear",void 0,void 0),n}function oo(t,e){return function(i,r){const s=this,o=s.__v_raw,a=qe(o),l=e?Vc:t?jc:As;return!t&&Vt(a,"iterate",ki),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ao(t,e,n){return function(...i){const r=this.__v_raw,s=qe(r),o=Rr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Vc:e?jc:As;return!e&&Vt(s,"iterate",l?Wl:ki),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Yn(t){return function(...e){return t==="delete"?!1:this}}function p_(){const t={get(s){return io(this,s)},get size(){return so(this)},has:ro,add:Uu,set:Iu,delete:Nu,clear:Ou,forEach:oo(!1,!1)},e={get(s){return io(this,s,!1,!0)},get size(){return so(this)},has:ro,add:Uu,set:Iu,delete:Nu,clear:Ou,forEach:oo(!1,!0)},n={get(s){return io(this,s,!0)},get size(){return so(this,!0)},has(s){return ro.call(this,s,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:oo(!0,!1)},i={get(s){return io(this,s,!0,!0)},get size(){return so(this,!0)},has(s){return ro.call(this,s,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ao(s,!1,!1),n[s]=ao(s,!0,!1),e[s]=ao(s,!1,!0),i[s]=ao(s,!0,!0)}),[t,n,e,i]}const[m_,g_,__,v_]=p_();function Wc(t,e){const n=e?t?v_:__:t?g_:m_;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ye(n,r)&&r in i?n:i,r,s)}const x_={get:Wc(!1,!1)},y_={get:Wc(!1,!0)},M_={get:Wc(!0,!1)},$h=new WeakMap,Yh=new WeakMap,Kh=new WeakMap,E_=new WeakMap;function S_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b_(t){return t.__v_skip||!Object.isExtensible(t)?0:S_(kg(t))}function Xn(t){return qi(t)?t:Xc(t,!1,qh,x_,$h)}function ks(t){return Xc(t,!1,h_,y_,Yh)}function Zh(t){return Xc(t,!0,d_,M_,Kh)}function Xc(t,e,n,i,r){if(!tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=b_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function zn(t){return qi(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function qi(t){return!!(t&&t.__v_isReadonly)}function Jo(t){return!!(t&&t.__v_isShallow)}function Jh(t){return zn(t)||qi(t)}function qe(t){const e=t&&t.__v_raw;return e?qe(e):t}function ya(t){return Ko(t,"__v_skip",!0),t}const As=t=>tt(t)?Xn(t):t,jc=t=>tt(t)?Zh(t):t;function Qh(t){mi&&fn&&(t=qe(t),Wh(t.dep||(t.dep=kc())))}function ep(t,e){t=qe(t);const n=t.dep;n&&Xl(n)}function it(t){return!!(t&&t.__v_isRef===!0)}function Ze(t){return tp(t,!1)}function ws(t){return tp(t,!0)}function tp(t,e){return it(t)?t:new T_(t,e)}class T_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:qe(e),this._value=n?e:As(e)}get value(){return Qh(this),this._value}set value(e){const n=this.__v_isShallow||Jo(e)||qi(e);e=n?e:qe(e),Ts(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:As(e),ep(this))}}function et(t){return it(t)?t.value:t}const A_={get:(t,e,n)=>et(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return it(r)&&!it(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function np(t){return zn(t)?t:new Proxy(t,A_)}function w_(t){const e=Ue(t)?new Array(t.length):{};for(const n in t)e[n]=ip(t,n);return e}class R_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return e_(qe(this._object),this._key)}}class C_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function qc(t,e,n){return it(t)?t:Fe(t)?new C_(t):tt(t)&&arguments.length>1?ip(t,e,n):Ze(t)}function ip(t,e,n){const i=t[e];return it(i)?i:new R_(t,e,n)}class P_{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new zc(e,()=>{this._dirty||(this._dirty=!0,ep(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=qe(this);return Qh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function L_(t,e,n=!1){let i,r;const s=Fe(t);return s?(i=t,r=gn):(i=t.get,r=t.set),new P_(i,r,s||!r,n)}function gi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Yr(s,e,n)}return r}function nn(t,e,n,i){if(Fe(t)){const s=gi(t,e,n,i);return s&&Dh(s)&&s.catch(o=>{Yr(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(nn(t[s],e,n,i));return r}function Yr(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){gi(l,null,10,[t,o,a]);return}}D_(t,n,r,i)}function D_(t,e,n,i=!0){console.error(t)}let Rs=!1,jl=!1;const Rt=[];let An=0;const Pr=[];let Bn=null,Ni=0;const rp=Promise.resolve();let $c=null;function Zi(t){const e=$c||rp;return t?e.then(this?t.bind(this):t):e}function U_(t){let e=An+1,n=Rt.length;for(;e<n;){const i=e+n>>>1;Cs(Rt[i])<t?e=i+1:n=i}return e}function Ma(t){(!Rt.length||!Rt.includes(t,Rs&&t.allowRecurse?An+1:An))&&(t.id==null?Rt.push(t):Rt.splice(U_(t.id),0,t),sp())}function sp(){!Rs&&!jl&&(jl=!0,$c=rp.then(ap))}function I_(t){const e=Rt.indexOf(t);e>An&&Rt.splice(e,1)}function op(t){Ue(t)?Pr.push(...t):(!Bn||!Bn.includes(t,t.allowRecurse?Ni+1:Ni))&&Pr.push(t),sp()}function Fu(t,e=Rs?An+1:0){for(;e<Rt.length;e++){const n=Rt[e];n&&n.pre&&(Rt.splice(e,1),e--,n())}}function Qo(t){if(Pr.length){const e=[...new Set(Pr)];if(Pr.length=0,Bn){Bn.push(...e);return}for(Bn=e,Bn.sort((n,i)=>Cs(n)-Cs(i)),Ni=0;Ni<Bn.length;Ni++)Bn[Ni]();Bn=null,Ni=0}}const Cs=t=>t.id==null?1/0:t.id,N_=(t,e)=>{const n=Cs(t)-Cs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ap(t){jl=!1,Rs=!0,Rt.sort(N_);const e=gn;try{for(An=0;An<Rt.length;An++){const n=Rt[An];n&&n.active!==!1&&gi(n,null,14)}}finally{An=0,Rt.length=0,Qo(),Rs=!1,$c=null,(Rt.length||Pr.length)&&ap()}}function O_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||nt;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||nt;h&&(r=n.map(p=>ot(p)?p.trim():p)),f&&(r=n.map(zl))}let a,l=i[a=za(e)]||i[a=za(wn(e))];!l&&s&&(l=i[a=za(jr(e))]),l&&nn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nn(c,t,6,r)}}function lp(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Fe(t)){const l=c=>{const u=lp(c,e,!0);u&&(a=!0,pt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(tt(t)&&i.set(t,null),null):(Ue(s)?s.forEach(l=>o[l]=null):pt(o,s),tt(t)&&i.set(t,o),o)}function Ea(t,e){return!t||!Bs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(t,e[0].toLowerCase()+e.slice(1))||Ye(t,jr(e))||Ye(t,e))}let Bt=null,Sa=null;function ea(t){const e=Bt;return Bt=t,Sa=t&&t.type.__scopeId||null,e}function a1(t){Sa=t}function l1(){Sa=null}function Yc(t,e=Bt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Zu(-1);const s=ea(e);let o;try{o=t(...r)}finally{ea(s),i._d&&Zu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ga(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:x}=t;let m,d;const _=ea(t);try{if(n.shapeFlag&4){const y=r||i;m=Qt(u.call(y,y,f,s,p,h,g)),d=l}else{const y=e;m=Qt(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),d=e.props?l:B_(l)}}catch(y){ps.length=0,Yr(y,t,1),m=st(kt)}let v=m;if(d&&x!==!1){const y=Object.keys(d),{shapeFlag:S}=v;y.length&&S&7&&(o&&y.some(Oc)&&(d=H_(d,o)),v=jn(v,d))}return n.dirs&&(v=jn(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),m=v,ea(_),m}function F_(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(Ds(i)){if(i.type!==kt||i.children==="v-if"){if(e)return;e=i}}else return}return e}const B_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bs(n))&&((e||(e={}))[n]=t[n]);return e},H_=(t,e)=>{const n={};for(const i in t)(!Oc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function k_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Bu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Ea(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bu(i,o,c):!0:!!o;return!1}function Bu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ea(n,s))return!0}return!1}function Kc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cp=t=>t.__isSuspense,z_={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){t==null?G_(e,n,i,r,s,o,a,l,c):V_(t,e,n,i,r,o,a,l,c)},hydrate:W_,create:Zc,normalize:X_},up=z_;function Ps(t,e){const n=t.props&&t.props[e];Fe(n)&&n()}function G_(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=Zc(t,r,i,e,f,n,s,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,i,h,s,o),h.deps>0?(Ps(t,"onPending"),Ps(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),Lr(h,t.ssFallback)):h.resolve(!1,!0)}function V_(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:x,isInFallback:m,isHydrating:d}=f;if(x)f.pendingBranch=h,dn(h,x)?(l(x,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(l(g,p,n,i,r,null,s,o,a),Lr(f,p))):(f.pendingId++,d?(f.isHydrating=!1,f.activeBranch=x):c(x,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,p,n,i,r,null,s,o,a),Lr(f,p))):g&&dn(h,g)?(l(g,h,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&dn(h,g))l(g,h,n,i,r,f,s,o,a),Lr(f,h);else if(Ps(e,"onPending"),f.pendingBranch=h,f.pendingId++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:_,pendingId:v}=f;_>0?setTimeout(()=>{f.pendingId===v&&f.fallback(p)},_):_===0&&f.fallback(p)}}function Zc(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:h,um:p,n:g,o:{parentNode:x,remove:m}}=c;let d;const _=j_(t);_&&e!=null&&e.pendingBranch&&(d=e.pendingId,e.deps++);const v=t.props?Nh(t.props.timeout):void 0,y={vnode:t,parent:e,parentComponent:n,isSVG:o,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(S=!1,w=!1){const{vnode:R,activeBranch:P,pendingBranch:M,pendingId:T,effects:F,parentComponent:B,container:U}=y;if(y.isHydrating)y.isHydrating=!1;else if(!S){const K=P&&M.transition&&M.transition.mode==="out-in";K&&(P.transition.afterLeave=()=>{T===y.pendingId&&h(M,U,q,0)});let{anchor:q}=y;P&&(q=g(P),p(P,B,y,!0)),K||h(M,U,q,0)}Lr(y,M),y.pendingBranch=null,y.isInFallback=!1;let I=y.parent,z=!1;for(;I;){if(I.pendingBranch){I.effects.push(...F),z=!0;break}I=I.parent}z||op(F),y.effects=[],_&&e&&e.pendingBranch&&d===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),Ps(R,"onResolve")},fallback(S){if(!y.pendingBranch)return;const{vnode:w,activeBranch:R,parentComponent:P,container:M,isSVG:T}=y;Ps(w,"onFallback");const F=g(R),B=()=>{y.isInFallback&&(f(null,S,M,F,P,null,T,a,l),Lr(y,S))},U=S.transition&&S.transition.mode==="out-in";U&&(R.transition.afterLeave=B),y.isInFallback=!0,p(R,P,null,!0),U||B()},move(S,w,R){y.activeBranch&&h(y.activeBranch,S,w,R),y.container=S},next(){return y.activeBranch&&g(y.activeBranch)},registerDep(S,w){const R=!!y.pendingBranch;R&&y.deps++;const P=S.vnode.el;S.asyncDep.catch(M=>{Yr(M,S,0)}).then(M=>{if(S.isUnmounted||y.isUnmounted||y.pendingId!==S.suspenseId)return;S.asyncResolved=!0;const{vnode:T}=S;Jl(S,M,!1),P&&(T.el=P);const F=!P&&S.subTree.el;w(S,T,x(P||S.subTree.el),P?null:g(S.subTree),y,o,l),F&&m(F),Kc(S,T.el),R&&--y.deps===0&&y.resolve()})},unmount(S,w){y.isUnmounted=!0,y.activeBranch&&p(y.activeBranch,n,S,w),y.pendingBranch&&p(y.pendingBranch,n,S,w)}};return y}function W_(t,e,n,i,r,s,o,a,l){const c=e.suspense=Zc(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function X_(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Hu(i?n.default:n),t.ssFallback=i?Hu(n.fallback):st(kt)}function Hu(t){let e;if(Fe(t)){const n=Fr&&t._c;n&&(t._d=!1,St()),t=t(),n&&(t._d=!0,e=tn,Dp())}return Ue(t)&&(t=F_(t)),t=Qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function fp(t,e){e&&e.pendingBranch?Ue(t)?e.effects.push(...t):e.effects.push(t):op(t)}function Lr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t,r=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=r,Kc(i,r))}function j_(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function q_(t,e){return Jc(t,null,e)}const lo={};function zi(t,e,n){return Jc(t,e,n)}function Jc(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=nt){var a;const l=kh()===((a=ht)==null?void 0:a.scope)?ht:null;let c,u=!1,f=!1;if(it(t)?(c=()=>t.value,u=Jo(t)):zn(t)?(c=()=>t,i=!0):Ue(t)?(f=!0,u=t.some(y=>zn(y)||Jo(y)),c=()=>t.map(y=>{if(it(y))return y.value;if(zn(y))return Bi(y);if(Fe(y))return gi(y,l,2)})):Fe(t)?e?c=()=>gi(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),nn(t,l,3,[p])}:c=gn,e&&i){const y=c;c=()=>Bi(y())}let h,p=y=>{h=_.onStop=()=>{gi(y,l,4)}},g;if(Hr)if(p=gn,e?n&&nn(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const y=Bv();g=y.__watcherHandles||(y.__watcherHandles=[])}else return gn;let x=f?new Array(t.length).fill(lo):lo;const m=()=>{if(_.active)if(e){const y=_.run();(i||u||(f?y.some((S,w)=>Ts(S,x[w])):Ts(y,x)))&&(h&&h(),nn(e,l,3,[y,x===lo?void 0:f&&x[0]===lo?[]:x,p]),x=y)}else _.run()};m.allowRecurse=!!e;let d;r==="sync"?d=m:r==="post"?d=()=>Et(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Ma(m));const _=new zc(c,d);e?n?m():x=_.run():r==="post"?Et(_.run.bind(_),l&&l.suspense):_.run();const v=()=>{_.stop(),l&&l.scope&&Fc(l.scope.effects,_)};return g&&g.push(v),v}function $_(t,e,n){const i=this.proxy,r=ot(t)?t.includes(".")?dp(i,t):()=>i[t]:t.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,n=e);const o=ht;Br(this);const a=Jc(r,s.bind(i),n);return o?Br(o):Gi(),a}function dp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Bi(t,e){if(!tt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),it(t))Bi(t.value,e);else if(Ue(t))for(let n=0;n<t.length;n++)Bi(t[n],e);else if(Lh(t)||Rr(t))t.forEach(n=>{Bi(n,e)});else if(Ih(t))for(const n in t)Bi(t[n],e);return t}function c1(t,e){const n=Bt;if(n===null)return t;const i=Aa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=nt]=e[s];o&&(Fe(o)&&(o={mounted:o,updated:o}),o.deep&&Bi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Sn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(qr(),nn(l,n,8,[t.el,a,t,e]),$r())}}function Y_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gs(()=>{t.isMounted=!0}),Vs(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],hp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},K_={name:"BaseTransition",props:hp,setup(t,{slots:e}){const n=Xs(),i=Y_();let r;return()=>{const s=e.default&&mp(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const x of s)if(x.type!==kt){o=x;break}}const a=qe(t),{mode:l}=a;if(i.isLeaving)return Va(o);const c=ku(o);if(!c)return Va(o);const u=ql(c,a,i,n);ta(c,u);const f=n.subTree,h=f&&ku(f);let p=!1;const{getTransitionKey:g}=c.type;if(g){const x=g();r===void 0?r=x:x!==r&&(r=x,p=!0)}if(h&&h.type!==kt&&(!dn(c,h)||p)){const x=ql(h,a,i,n);if(ta(h,x),l==="out-in")return i.isLeaving=!0,x.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Va(o);l==="in-out"&&c.type!==kt&&(x.delayLeave=(m,d,_)=>{const v=pp(i,h);v[String(h.key)]=h,m._leaveCb=()=>{d(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},Z_=K_;function pp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ql(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:x,onAppear:m,onAfterAppear:d,onAppearCancelled:_}=e,v=String(t.key),y=pp(n,t),S=(P,M)=>{P&&nn(P,i,9,M)},w=(P,M)=>{const T=M[1];S(P,M),Ue(P)?P.every(F=>F.length<=1)&&T():P.length<=1&&T()},R={mode:s,persisted:o,beforeEnter(P){let M=a;if(!n.isMounted)if(r)M=x||a;else return;P._leaveCb&&P._leaveCb(!0);const T=y[v];T&&dn(t,T)&&T.el._leaveCb&&T.el._leaveCb(),S(M,[P])},enter(P){let M=l,T=c,F=u;if(!n.isMounted)if(r)M=m||l,T=d||c,F=_||u;else return;let B=!1;const U=P._enterCb=I=>{B||(B=!0,I?S(F,[P]):S(T,[P]),R.delayedLeave&&R.delayedLeave(),P._enterCb=void 0)};M?w(M,[P,U]):U()},leave(P,M){const T=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return M();S(f,[P]);let F=!1;const B=P._leaveCb=U=>{F||(F=!0,M(),U?S(g,[P]):S(p,[P]),P._leaveCb=void 0,y[T]===t&&delete y[T])};y[T]=t,h?w(h,[P,B]):B()},clone(P){return ql(P,e,n,i)}};return R}function Va(t){if(zs(t))return t=jn(t),t.children=null,t}function ku(t){return zs(t)?t.children?t.children[0]:void 0:t}function ta(t,e){t.shapeFlag&6&&t.component?ta(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mp(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ft?(o.patchFlag&128&&r++,i=i.concat(mp(o.children,e,a))):(e||o.type!==kt)&&i.push(a!=null?jn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Mi(t,e){return Fe(t)?(()=>pt({name:t.name},e,{setup:t}))():t}const Dr=t=>!!t.type.__asyncLoader;function zu(t){Fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let p;return l||(p=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((x,m)=>{a(g,()=>x(f()),()=>m(g),u+1)});throw g}).then(g=>p!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return Mi({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const p=ht;if(c)return()=>Wa(c,p);const g=_=>{l=null,Yr(_,p,13,!i)};if(o&&p.suspense||Hr)return h().then(_=>()=>Wa(_,p)).catch(_=>(g(_),()=>i?st(i,{error:_}):null));const x=Ze(!1),m=Ze(),d=Ze(!!r);return r&&setTimeout(()=>{d.value=!1},r),s!=null&&setTimeout(()=>{if(!x.value&&!m.value){const _=new Error(`Async component timed out after ${s}ms.`);g(_),m.value=_}},s),h().then(()=>{x.value=!0,p.parent&&zs(p.parent.vnode)&&Ma(p.parent.update)}).catch(_=>{g(_),m.value=_}),()=>{if(x.value&&c)return Wa(c,p);if(m.value&&i)return st(i,{error:m.value});if(n&&!d.value)return st(n)}}})}function Wa(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=st(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const zs=t=>t.type.__isKeepAlive,J_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Xs(),i=n.ctx;if(!i.renderer)return()=>{const _=e.default&&e.default();return _&&_.length===1?_[0]:_};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(_,v,y,S,w)=>{const R=_.component;c(_,v,y,0,a),l(R.vnode,_,v,y,R,a,S,_.slotScopeIds,w),Et(()=>{R.isDeactivated=!1,R.a&&Cr(R.a);const P=_.props&&_.props.onVnodeMounted;P&&Ot(P,R.parent,_)},a)},i.deactivate=_=>{const v=_.component;c(_,h,null,1,a),Et(()=>{v.da&&Cr(v.da);const y=_.props&&_.props.onVnodeUnmounted;y&&Ot(y,v.parent,_),v.isDeactivated=!0},a)};function p(_){Xa(_),u(_,n,a,!0)}function g(_){r.forEach((v,y)=>{const S=Ql(v.type);S&&(!_||!_(S))&&x(y)})}function x(_){const v=r.get(_);!o||!dn(v,o)?p(v):o&&Xa(o),r.delete(_),s.delete(_)}zi(()=>[t.include,t.exclude],([_,v])=>{_&&g(y=>ls(_,y)),v&&g(y=>!ls(v,y))},{flush:"post",deep:!0});let m=null;const d=()=>{m!=null&&r.set(m,ja(n.subTree))};return Gs(d),xp(d),Vs(()=>{r.forEach(_=>{const{subTree:v,suspense:y}=n,S=ja(v);if(_.type===S.type&&_.key===S.key){Xa(S);const w=S.component.da;w&&Et(w,y);return}p(_)})}),()=>{if(m=null,!e.default)return null;const _=e.default(),v=_[0];if(_.length>1)return o=null,_;if(!Ds(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let y=ja(v);const S=y.type,w=Ql(Dr(y)?y.type.__asyncResolved||{}:S),{include:R,exclude:P,max:M}=t;if(R&&(!w||!ls(R,w))||P&&w&&ls(P,w))return o=y,v;const T=y.key==null?S:y.key,F=r.get(T);return y.el&&(y=jn(y),v.shapeFlag&128&&(v.ssContent=y)),m=T,F?(y.el=F.el,y.component=F.component,y.transition&&ta(y,y.transition),y.shapeFlag|=512,s.delete(T),s.add(T)):(s.add(T),M&&s.size>parseInt(M,10)&&x(s.values().next().value)),y.shapeFlag|=256,o=y,cp(v.type)?v:y}}},Q_=J_;function ls(t,e){return Ue(t)?t.some(n=>ls(n,e)):ot(t)?t.split(",").includes(e):Hg(t)?t.test(e):!1}function gp(t,e){vp(t,"a",e)}function _p(t,e){vp(t,"da",e)}function vp(t,e,n=ht){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ba(e,i,n),n){let r=n.parent;for(;r&&r.parent;)zs(r.parent.vnode)&&ev(i,e,n,r),r=r.parent}}function ev(t,e,n,i){const r=ba(e,t,i,!0);Qc(()=>{Fc(i[e],r)},n)}function Xa(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ja(t){return t.shapeFlag&128?t.ssContent:t}function ba(t,e,n=ht,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qr(),Br(n);const a=nn(e,n,t,o);return Gi(),$r(),a});return i?r.unshift(s):r.push(s),s}}const qn=t=>(e,n=ht)=>(!Hr||t==="sp")&&ba(t,(...i)=>e(...i),n),tv=qn("bm"),Gs=qn("m"),nv=qn("bu"),xp=qn("u"),Vs=qn("bum"),Qc=qn("um"),iv=qn("sp"),rv=qn("rtg"),sv=qn("rtc");function yp(t,e=ht){ba("ec",t,e)}const eu="components";function ov(t,e){return Ep(eu,t,!0,e)||t}const Mp=Symbol.for("v-ndc");function av(t){return ot(t)?Ep(eu,t,!1)||t:t||Mp}function Ep(t,e,n=!0,i=!1){const r=Bt||ht;if(r){const s=r.type;if(t===eu){const a=Ql(s,!1);if(a&&(a===e||a===wn(e)||a===ga(wn(e))))return s}const o=Gu(r[t]||s[t],e)||Gu(r.appContext[t],e);return!o&&i?s:o}}function Gu(t,e){return t&&(t[e]||t[wn(e)]||t[ga(wn(e))])}function lv(t,e,n,i){let r;const s=n&&n[i];if(Ue(t)||ot(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(tt(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const $l=t=>t?Op(t)?Aa(t)||t.proxy:$l(t.parent):null,hs=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$l(t.parent),$root:t=>$l(t.root),$emit:t=>t.emit,$options:t=>tu(t),$forceUpdate:t=>t.f||(t.f=()=>Ma(t.update)),$nextTick:t=>t.n||(t.n=Zi.bind(t.proxy)),$watch:t=>$_.bind(t)}),qa=(t,e)=>t!==nt&&!t.__isScriptSetup&&Ye(t,e),cv={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(qa(i,e))return o[e]=1,i[e];if(r!==nt&&Ye(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ye(c,e))return o[e]=3,s[e];if(n!==nt&&Ye(n,e))return o[e]=4,n[e];Yl&&(o[e]=0)}}const u=hs[e];let f,h;if(u)return e==="$attrs"&&Vt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==nt&&Ye(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Ye(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return qa(r,e)?(r[e]=n,!0):i!==nt&&Ye(i,e)?(i[e]=n,!0):Ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==nt&&Ye(t,o)||qa(e,o)||(a=s[0])&&Ye(a,o)||Ye(i,o)||Ye(hs,o)||Ye(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vu(t){return Ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yl=!0;function uv(t){const e=tu(t),n=t.proxy,i=t.ctx;Yl=!1,e.beforeCreate&&Wu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:_,destroyed:v,unmounted:y,render:S,renderTracked:w,renderTriggered:R,errorCaptured:P,serverPrefetch:M,expose:T,inheritAttrs:F,components:B,directives:U,filters:I}=e;if(c&&fv(c,i,null),o)for(const q in o){const Y=o[q];Fe(Y)&&(i[q]=Y.bind(n))}if(r){const q=r.call(n,n);tt(q)&&(t.data=Xn(q))}if(Yl=!0,s)for(const q in s){const Y=s[q],ce=Fe(Y)?Y.bind(n,n):Fe(Y.get)?Y.get.bind(n,n):gn,de=!Fe(Y)&&Fe(Y.set)?Y.set.bind(n):gn,W=mt({get:ce,set:de});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>W.value,set:Q=>W.value=Q})}if(a)for(const q in a)Sp(a[q],i,n,q);if(l){const q=Fe(l)?l.call(n):l;Reflect.ownKeys(q).forEach(Y=>{Ur(Y,q[Y])})}u&&Wu(u,t,"c");function K(q,Y){Ue(Y)?Y.forEach(ce=>q(ce.bind(n))):Y&&q(Y.bind(n))}if(K(tv,f),K(Gs,h),K(nv,p),K(xp,g),K(gp,x),K(_p,m),K(yp,P),K(sv,w),K(rv,R),K(Vs,_),K(Qc,y),K(iv,M),Ue(T))if(T.length){const q=t.exposed||(t.exposed={});T.forEach(Y=>{Object.defineProperty(q,Y,{get:()=>n[Y],set:ce=>n[Y]=ce})})}else t.exposed||(t.exposed={});S&&t.render===gn&&(t.render=S),F!=null&&(t.inheritAttrs=F),B&&(t.components=B),U&&(t.directives=U)}function fv(t,e,n=gn){Ue(t)&&(t=Kl(t));for(const i in t){const r=t[i];let s;tt(r)?"default"in r?s=Ht(r.from||i,r.default,!0):s=Ht(r.from||i):s=Ht(r),it(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Wu(t,e,n){nn(Ue(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sp(t,e,n,i){const r=i.includes(".")?dp(n,i):()=>n[i];if(ot(t)){const s=e[t];Fe(s)&&zi(r,s)}else if(Fe(t))zi(r,t.bind(n));else if(tt(t))if(Ue(t))t.forEach(s=>Sp(s,e,n,i));else{const s=Fe(t.handler)?t.handler.bind(n):e[t.handler];Fe(s)&&zi(r,s,t)}}function tu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>na(l,c,o,!0)),na(l,e,o)),tt(e)&&s.set(e,l),l}function na(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&na(t,s,n,!0),r&&r.forEach(o=>na(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=dv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const dv={data:Xu,props:ju,emits:ju,methods:cs,computed:cs,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:cs,directives:cs,watch:pv,provide:Xu,inject:hv};function Xu(t,e){return e?t?function(){return pt(Fe(t)?t.call(this,this):t,Fe(e)?e.call(this,this):e)}:e:t}function hv(t,e){return cs(Kl(t),Kl(e))}function Kl(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function cs(t,e){return t?pt(Object.create(null),t,e):e}function ju(t,e){return t?Ue(t)&&Ue(e)?[...new Set([...t,...e])]:pt(Object.create(null),Vu(t),Vu(e??{})):e}function pv(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const i in e)n[i]=Lt(t[i],e[i]);return n}function bp(){return{app:null,config:{isNativeTag:Og,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mv=0;function gv(t,e){return function(i,r=null){Fe(i)||(i=pt({},i)),r!=null&&!tt(r)&&(r=null);const s=bp(),o=new Set;let a=!1;const l=s.app={_uid:mv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Bp,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Fe(c.install)?(o.add(c),c.install(l,...u)):Fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=st(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Aa(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Ls=l;try{return c()}finally{Ls=null}}};return l}}let Ls=null;function Ur(t,e){if(ht){let n=ht.provides;const i=ht.parent&&ht.parent.provides;i===n&&(n=ht.provides=Object.create(i)),n[t]=e}}function Ht(t,e,n=!1){const i=ht||Bt;if(i||Ls){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ls._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Fe(e)?e.call(i&&i.proxy):e}}function nu(){return!!(ht||Bt||Ls)}function _v(t,e,n,i=!1){const r={},s={};Ko(s,Ta,1),t.propsDefaults=Object.create(null),Tp(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:ks(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function vv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=qe(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ea(t.emitsOptions,h))continue;const p=e[h];if(l)if(Ye(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=wn(h);r[g]=Zl(l,a,g,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Tp(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ye(e,f)&&((u=jr(f))===f||!Ye(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Zl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ye(e,f))&&(delete s[f],c=!0)}c&&Wn(t,"set","$attrs")}function Tp(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ds(l))continue;const c=e[l];let u;r&&Ye(r,u=wn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ea(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=qe(n),c=a||nt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Zl(r,l,f,c[f],t,!Ye(c,f))}}return o}function Zl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Fe(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Br(r),i=c[n]=l.call(null,e),Gi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===jr(n))&&(i=!0))}return i}function Ap(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Fe(t)){const u=f=>{l=!0;const[h,p]=Ap(f,e,!0);pt(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return tt(t)&&i.set(t,wr),wr;if(Ue(s))for(let u=0;u<s.length;u++){const f=wn(s[u]);qu(f)&&(o[f]=nt)}else if(s)for(const u in s){const f=wn(u);if(qu(f)){const h=s[u],p=o[f]=Ue(h)||Fe(h)?{type:h}:pt({},h);if(p){const g=Ku(Boolean,p.type),x=Ku(String,p.type);p[0]=g>-1,p[1]=x<0||g<x,(g>-1||Ye(p,"default"))&&a.push(f)}}}const c=[o,a];return tt(t)&&i.set(t,c),c}function qu(t){return t[0]!=="$"}function $u(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Yu(t,e){return $u(t)===$u(e)}function Ku(t,e){return Ue(e)?e.findIndex(n=>Yu(n,t)):Fe(e)&&Yu(e,t)?0:-1}const wp=t=>t[0]==="_"||t==="$stable",iu=t=>Ue(t)?t.map(Qt):[Qt(t)],xv=(t,e,n)=>{if(e._n)return e;const i=Yc((...r)=>iu(e(...r)),n);return i._c=!1,i},Rp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(wp(r))continue;const s=t[r];if(Fe(s))e[r]=xv(r,s,i);else if(s!=null){const o=iu(s);e[r]=()=>o}}},Cp=(t,e)=>{const n=iu(e);t.slots.default=()=>n},yv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=qe(e),Ko(e,"_",n)):Rp(e,t.slots={})}else t.slots={},e&&Cp(t,e);Ko(t.slots,Ta,1)},Mv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(pt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Rp(e,r)),o=e}else e&&(Cp(t,e),o={default:1});if(s)for(const a in r)!wp(a)&&!(a in o)&&delete r[a]};function ia(t,e,n,i,r=!1){if(Ue(t)){t.forEach((h,p)=>ia(h,e&&(Ue(e)?e[p]:e),n,i,r));return}if(Dr(i)&&!r)return;const s=i.shapeFlag&4?Aa(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ot(c)?(u[c]=null,Ye(f,c)&&(f[c]=null)):it(c)&&(c.value=null)),Fe(l))gi(l,a,12,[o,u]);else{const h=ot(l),p=it(l);if(h||p){const g=()=>{if(t.f){const x=h?Ye(f,l)?f[l]:u[l]:l.value;r?Ue(x)&&Fc(x,s):Ue(x)?x.includes(s)||x.push(s):h?(u[l]=[s],Ye(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,Ye(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Et(g,n)):g()}}}let Kn=!1;const co=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",uo=t=>t.nodeType===8;function Ev(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(d,_)=>{if(!_.hasChildNodes()){n(null,d,_),Qo(),_._vnode=d;return}Kn=!1,f(_.firstChild,d,null,null,null),Qo(),_._vnode=d,Kn&&console.error("Hydration completed but contains mismatches.")},f=(d,_,v,y,S,w=!1)=>{const R=uo(d)&&d.data==="[",P=()=>x(d,_,v,y,S,R),{type:M,ref:T,shapeFlag:F,patchFlag:B}=_;let U=d.nodeType;_.el=d,B===-2&&(w=!1,_.dynamicChildren=null);let I=null;switch(M){case Or:U!==3?_.children===""?(l(_.el=r(""),o(d),d),I=d):I=P():(d.data!==_.children&&(Kn=!0,d.data=_.children),I=s(d));break;case kt:U!==8||R?I=P():I=s(d);break;case zo:if(R&&(d=s(d),U=d.nodeType),U===1||U===3){I=d;const z=!_.children.length;for(let K=0;K<_.staticCount;K++)z&&(_.children+=I.nodeType===1?I.outerHTML:I.data),K===_.staticCount-1&&(_.anchor=I),I=s(I);return R?s(I):I}else P();break;case Ft:R?I=g(d,_,v,y,S,w):I=P();break;default:if(F&1)U!==1||_.type.toLowerCase()!==d.tagName.toLowerCase()?I=P():I=h(d,_,v,y,S,w);else if(F&6){_.slotScopeIds=S;const z=o(d);if(e(_,z,null,v,y,co(z),w),I=R?m(d):s(d),I&&uo(I)&&I.data==="teleport end"&&(I=s(I)),Dr(_)){let K;R?(K=st(Ft),K.anchor=I?I.previousSibling:z.lastChild):K=d.nodeType===3?ru(""):st("div"),K.el=d,_.component.subTree=K}}else F&64?U!==8?I=P():I=_.type.hydrate(d,_,v,y,S,w,t,p):F&128&&(I=_.type.hydrate(d,_,v,y,co(o(d)),S,w,t,f))}return T!=null&&ia(T,null,y,_),I},h=(d,_,v,y,S,w)=>{w=w||!!_.dynamicChildren;const{type:R,props:P,patchFlag:M,shapeFlag:T,dirs:F}=_,B=R==="input"&&F||R==="option";if(B||M!==-1){if(F&&Sn(_,null,v,"created"),P)if(B||!w||M&48)for(const I in P)(B&&I.endsWith("value")||Bs(I)&&!ds(I))&&i(d,I,null,P[I],!1,void 0,v);else P.onClick&&i(d,"onClick",null,P.onClick,!1,void 0,v);let U;if((U=P&&P.onVnodeBeforeMount)&&Ot(U,v,_),F&&Sn(_,null,v,"beforeMount"),((U=P&&P.onVnodeMounted)||F)&&fp(()=>{U&&Ot(U,v,_),F&&Sn(_,null,v,"mounted")},y),T&16&&!(P&&(P.innerHTML||P.textContent))){let I=p(d.firstChild,_,d,v,y,S,w);for(;I;){Kn=!0;const z=I;I=I.nextSibling,a(z)}}else T&8&&d.textContent!==_.children&&(Kn=!0,d.textContent=_.children)}return d.nextSibling},p=(d,_,v,y,S,w,R)=>{R=R||!!_.dynamicChildren;const P=_.children,M=P.length;for(let T=0;T<M;T++){const F=R?P[T]:P[T]=Qt(P[T]);if(d)d=f(d,F,y,S,w,R);else{if(F.type===Or&&!F.children)continue;Kn=!0,n(null,F,v,null,y,S,co(v),w)}}return d},g=(d,_,v,y,S,w)=>{const{slotScopeIds:R}=_;R&&(S=S?S.concat(R):R);const P=o(d),M=p(s(d),_,P,v,y,S,w);return M&&uo(M)&&M.data==="]"?s(_.anchor=M):(Kn=!0,l(_.anchor=c("]"),P,M),M)},x=(d,_,v,y,S,w)=>{if(Kn=!0,_.el=null,w){const M=m(d);for(;;){const T=s(d);if(T&&T!==M)a(T);else break}}const R=s(d),P=o(d);return a(d),n(null,_,P,R,v,y,co(P),S),R},m=d=>{let _=0;for(;d;)if(d=s(d),d&&uo(d)&&(d.data==="["&&_++,d.data==="]")){if(_===0)return s(d);_--}return d};return[u,f]}const Et=fp;function Sv(t){return Pp(t)}function bv(t){return Pp(t,Ev)}function Pp(t,e){const n=Gl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=gn,insertStaticContent:g}=t,x=(E,D,N,k=null,V=null,ie=null,he=!1,ee=null,fe=!!D.dynamicChildren)=>{if(E===D)return;E&&!dn(E,D)&&(k=j(E),Q(E,V,ie,!0),E=null),D.patchFlag===-2&&(fe=!1,D.dynamicChildren=null);const{type:le,ref:be,shapeFlag:A}=D;switch(le){case Or:m(E,D,N,k);break;case kt:d(E,D,N,k);break;case zo:E==null&&_(D,N,k,he);break;case Ft:B(E,D,N,k,V,ie,he,ee,fe);break;default:A&1?S(E,D,N,k,V,ie,he,ee,fe):A&6?U(E,D,N,k,V,ie,he,ee,fe):(A&64||A&128)&&le.process(E,D,N,k,V,ie,he,ee,fe,ue)}be!=null&&V&&ia(be,E&&E.ref,ie,D||E,!D)},m=(E,D,N,k)=>{if(E==null)i(D.el=a(D.children),N,k);else{const V=D.el=E.el;D.children!==E.children&&c(V,D.children)}},d=(E,D,N,k)=>{E==null?i(D.el=l(D.children||""),N,k):D.el=E.el},_=(E,D,N,k)=>{[E.el,E.anchor]=g(E.children,D,N,k,E.el,E.anchor)},v=({el:E,anchor:D},N,k)=>{let V;for(;E&&E!==D;)V=h(E),i(E,N,k),E=V;i(D,N,k)},y=({el:E,anchor:D})=>{let N;for(;E&&E!==D;)N=h(E),r(E),E=N;r(D)},S=(E,D,N,k,V,ie,he,ee,fe)=>{he=he||D.type==="svg",E==null?w(D,N,k,V,ie,he,ee,fe):M(E,D,V,ie,he,ee,fe)},w=(E,D,N,k,V,ie,he,ee)=>{let fe,le;const{type:be,props:A,shapeFlag:b,transition:H,dirs:te}=E;if(fe=E.el=o(E.type,ie,A&&A.is,A),b&8?u(fe,E.children):b&16&&P(E.children,fe,null,k,V,ie&&be!=="foreignObject",he,ee),te&&Sn(E,null,k,"created"),R(fe,E,E.scopeId,he,k),A){for(const L in A)L!=="value"&&!ds(L)&&s(fe,L,null,A[L],ie,E.children,k,V,we);"value"in A&&s(fe,"value",null,A.value),(le=A.onVnodeBeforeMount)&&Ot(le,k,E)}te&&Sn(E,null,k,"beforeMount");const ae=(!V||V&&!V.pendingBranch)&&H&&!H.persisted;ae&&H.beforeEnter(fe),i(fe,D,N),((le=A&&A.onVnodeMounted)||ae||te)&&Et(()=>{le&&Ot(le,k,E),ae&&H.enter(fe),te&&Sn(E,null,k,"mounted")},V)},R=(E,D,N,k,V)=>{if(N&&p(E,N),k)for(let ie=0;ie<k.length;ie++)p(E,k[ie]);if(V){let ie=V.subTree;if(D===ie){const he=V.vnode;R(E,he,he.scopeId,he.slotScopeIds,V.parent)}}},P=(E,D,N,k,V,ie,he,ee,fe=0)=>{for(let le=fe;le<E.length;le++){const be=E[le]=ee?si(E[le]):Qt(E[le]);x(null,be,D,N,k,V,ie,he,ee)}},M=(E,D,N,k,V,ie,he)=>{const ee=D.el=E.el;let{patchFlag:fe,dynamicChildren:le,dirs:be}=D;fe|=E.patchFlag&16;const A=E.props||nt,b=D.props||nt;let H;N&&Ai(N,!1),(H=b.onVnodeBeforeUpdate)&&Ot(H,N,D,E),be&&Sn(D,E,N,"beforeUpdate"),N&&Ai(N,!0);const te=V&&D.type!=="foreignObject";if(le?T(E.dynamicChildren,le,ee,N,k,te,ie):he||Y(E,D,ee,null,N,k,te,ie,!1),fe>0){if(fe&16)F(ee,D,A,b,N,k,V);else if(fe&2&&A.class!==b.class&&s(ee,"class",null,b.class,V),fe&4&&s(ee,"style",A.style,b.style,V),fe&8){const ae=D.dynamicProps;for(let L=0;L<ae.length;L++){const ne=ae[L],pe=A[ne],Z=b[ne];(Z!==pe||ne==="value")&&s(ee,ne,pe,Z,V,E.children,N,k,we)}}fe&1&&E.children!==D.children&&u(ee,D.children)}else!he&&le==null&&F(ee,D,A,b,N,k,V);((H=b.onVnodeUpdated)||be)&&Et(()=>{H&&Ot(H,N,D,E),be&&Sn(D,E,N,"updated")},k)},T=(E,D,N,k,V,ie,he)=>{for(let ee=0;ee<D.length;ee++){const fe=E[ee],le=D[ee],be=fe.el&&(fe.type===Ft||!dn(fe,le)||fe.shapeFlag&70)?f(fe.el):N;x(fe,le,be,null,k,V,ie,he,!0)}},F=(E,D,N,k,V,ie,he)=>{if(N!==k){if(N!==nt)for(const ee in N)!ds(ee)&&!(ee in k)&&s(E,ee,N[ee],null,he,D.children,V,ie,we);for(const ee in k){if(ds(ee))continue;const fe=k[ee],le=N[ee];fe!==le&&ee!=="value"&&s(E,ee,le,fe,he,D.children,V,ie,we)}"value"in k&&s(E,"value",N.value,k.value)}},B=(E,D,N,k,V,ie,he,ee,fe)=>{const le=D.el=E?E.el:a(""),be=D.anchor=E?E.anchor:a("");let{patchFlag:A,dynamicChildren:b,slotScopeIds:H}=D;H&&(ee=ee?ee.concat(H):H),E==null?(i(le,N,k),i(be,N,k),P(D.children,N,be,V,ie,he,ee,fe)):A>0&&A&64&&b&&E.dynamicChildren?(T(E.dynamicChildren,b,N,V,ie,he,ee),(D.key!=null||V&&D===V.subTree)&&Lp(E,D,!0)):Y(E,D,N,be,V,ie,he,ee,fe)},U=(E,D,N,k,V,ie,he,ee,fe)=>{D.slotScopeIds=ee,E==null?D.shapeFlag&512?V.ctx.activate(D,N,k,he,fe):I(D,N,k,V,ie,he,fe):z(E,D,fe)},I=(E,D,N,k,V,ie,he)=>{const ee=E.component=Lv(E,k,V);if(zs(E)&&(ee.ctx.renderer=ue),Dv(ee),ee.asyncDep){if(V&&V.registerDep(ee,K),!E.el){const fe=ee.subTree=st(kt);d(null,fe,D,N)}return}K(ee,E,D,N,V,ie,he)},z=(E,D,N)=>{const k=D.component=E.component;if(k_(E,D,N))if(k.asyncDep&&!k.asyncResolved){q(k,D,N);return}else k.next=D,I_(k.update),k.update();else D.el=E.el,k.vnode=D},K=(E,D,N,k,V,ie,he)=>{const ee=()=>{if(E.isMounted){let{next:be,bu:A,u:b,parent:H,vnode:te}=E,ae=be,L;Ai(E,!1),be?(be.el=te.el,q(E,be,he)):be=te,A&&Cr(A),(L=be.props&&be.props.onVnodeBeforeUpdate)&&Ot(L,H,be,te),Ai(E,!0);const ne=Ga(E),pe=E.subTree;E.subTree=ne,x(pe,ne,f(pe.el),j(pe),E,V,ie),be.el=ne.el,ae===null&&Kc(E,ne.el),b&&Et(b,V),(L=be.props&&be.props.onVnodeUpdated)&&Et(()=>Ot(L,H,be,te),V)}else{let be;const{el:A,props:b}=D,{bm:H,m:te,parent:ae}=E,L=Dr(D);if(Ai(E,!1),H&&Cr(H),!L&&(be=b&&b.onVnodeBeforeMount)&&Ot(be,ae,D),Ai(E,!0),A&&Ae){const ne=()=>{E.subTree=Ga(E),Ae(A,E.subTree,E,V,null)};L?D.type.__asyncLoader().then(()=>!E.isUnmounted&&ne()):ne()}else{const ne=E.subTree=Ga(E);x(null,ne,N,k,E,V,ie),D.el=ne.el}if(te&&Et(te,V),!L&&(be=b&&b.onVnodeMounted)){const ne=D;Et(()=>Ot(be,ae,ne),V)}(D.shapeFlag&256||ae&&Dr(ae.vnode)&&ae.vnode.shapeFlag&256)&&E.a&&Et(E.a,V),E.isMounted=!0,D=N=k=null}},fe=E.effect=new zc(ee,()=>Ma(le),E.scope),le=E.update=()=>fe.run();le.id=E.uid,Ai(E,!0),le()},q=(E,D,N)=>{D.component=E;const k=E.vnode.props;E.vnode=D,E.next=null,vv(E,D.props,k,N),Mv(E,D.children,N),qr(),Fu(),$r()},Y=(E,D,N,k,V,ie,he,ee,fe=!1)=>{const le=E&&E.children,be=E?E.shapeFlag:0,A=D.children,{patchFlag:b,shapeFlag:H}=D;if(b>0){if(b&128){de(le,A,N,k,V,ie,he,ee,fe);return}else if(b&256){ce(le,A,N,k,V,ie,he,ee,fe);return}}H&8?(be&16&&we(le,V,ie),A!==le&&u(N,A)):be&16?H&16?de(le,A,N,k,V,ie,he,ee,fe):we(le,V,ie,!0):(be&8&&u(N,""),H&16&&P(A,N,k,V,ie,he,ee,fe))},ce=(E,D,N,k,V,ie,he,ee,fe)=>{E=E||wr,D=D||wr;const le=E.length,be=D.length,A=Math.min(le,be);let b;for(b=0;b<A;b++){const H=D[b]=fe?si(D[b]):Qt(D[b]);x(E[b],H,N,null,V,ie,he,ee,fe)}le>be?we(E,V,ie,!0,!1,A):P(D,N,k,V,ie,he,ee,fe,A)},de=(E,D,N,k,V,ie,he,ee,fe)=>{let le=0;const be=D.length;let A=E.length-1,b=be-1;for(;le<=A&&le<=b;){const H=E[le],te=D[le]=fe?si(D[le]):Qt(D[le]);if(dn(H,te))x(H,te,N,null,V,ie,he,ee,fe);else break;le++}for(;le<=A&&le<=b;){const H=E[A],te=D[b]=fe?si(D[b]):Qt(D[b]);if(dn(H,te))x(H,te,N,null,V,ie,he,ee,fe);else break;A--,b--}if(le>A){if(le<=b){const H=b+1,te=H<be?D[H].el:k;for(;le<=b;)x(null,D[le]=fe?si(D[le]):Qt(D[le]),N,te,V,ie,he,ee,fe),le++}}else if(le>b)for(;le<=A;)Q(E[le],V,ie,!0),le++;else{const H=le,te=le,ae=new Map;for(le=te;le<=b;le++){const xe=D[le]=fe?si(D[le]):Qt(D[le]);xe.key!=null&&ae.set(xe.key,le)}let L,ne=0;const pe=b-te+1;let Z=!1,Re=0;const Pe=new Array(pe);for(le=0;le<pe;le++)Pe[le]=0;for(le=H;le<=A;le++){const xe=E[le];if(ne>=pe){Q(xe,V,ie,!0);continue}let Me;if(xe.key!=null)Me=ae.get(xe.key);else for(L=te;L<=b;L++)if(Pe[L-te]===0&&dn(xe,D[L])){Me=L;break}Me===void 0?Q(xe,V,ie,!0):(Pe[Me-te]=le+1,Me>=Re?Re=Me:Z=!0,x(xe,D[Me],N,null,V,ie,he,ee,fe),ne++)}const Le=Z?Tv(Pe):wr;for(L=Le.length-1,le=pe-1;le>=0;le--){const xe=te+le,Me=D[xe],Ie=xe+1<be?D[xe+1].el:k;Pe[le]===0?x(null,Me,N,Ie,V,ie,he,ee,fe):Z&&(L<0||le!==Le[L]?W(Me,N,Ie,2):L--)}}},W=(E,D,N,k,V=null)=>{const{el:ie,type:he,transition:ee,children:fe,shapeFlag:le}=E;if(le&6){W(E.component.subTree,D,N,k);return}if(le&128){E.suspense.move(D,N,k);return}if(le&64){he.move(E,D,N,ue);return}if(he===Ft){i(ie,D,N);for(let A=0;A<fe.length;A++)W(fe[A],D,N,k);i(E.anchor,D,N);return}if(he===zo){v(E,D,N);return}if(k!==2&&le&1&&ee)if(k===0)ee.beforeEnter(ie),i(ie,D,N),Et(()=>ee.enter(ie),V);else{const{leave:A,delayLeave:b,afterLeave:H}=ee,te=()=>i(ie,D,N),ae=()=>{A(ie,()=>{te(),H&&H()})};b?b(ie,te,ae):ae()}else i(ie,D,N)},Q=(E,D,N,k=!1,V=!1)=>{const{type:ie,props:he,ref:ee,children:fe,dynamicChildren:le,shapeFlag:be,patchFlag:A,dirs:b}=E;if(ee!=null&&ia(ee,null,N,E,!0),be&256){D.ctx.deactivate(E);return}const H=be&1&&b,te=!Dr(E);let ae;if(te&&(ae=he&&he.onVnodeBeforeUnmount)&&Ot(ae,D,E),be&6)ye(E.component,N,k);else{if(be&128){E.suspense.unmount(N,k);return}H&&Sn(E,null,D,"beforeUnmount"),be&64?E.type.remove(E,D,N,V,ue,k):le&&(ie!==Ft||A>0&&A&64)?we(le,D,N,!1,!0):(ie===Ft&&A&384||!V&&be&16)&&we(fe,D,N),k&&_e(E)}(te&&(ae=he&&he.onVnodeUnmounted)||H)&&Et(()=>{ae&&Ot(ae,D,E),H&&Sn(E,null,D,"unmounted")},N)},_e=E=>{const{type:D,el:N,anchor:k,transition:V}=E;if(D===Ft){ge(N,k);return}if(D===zo){y(E);return}const ie=()=>{r(N),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(E.shapeFlag&1&&V&&!V.persisted){const{leave:he,delayLeave:ee}=V,fe=()=>he(N,ie);ee?ee(E.el,ie,fe):fe()}else ie()},ge=(E,D)=>{let N;for(;E!==D;)N=h(E),r(E),E=N;r(D)},ye=(E,D,N)=>{const{bum:k,scope:V,update:ie,subTree:he,um:ee}=E;k&&Cr(k),V.stop(),ie&&(ie.active=!1,Q(he,E,D,N)),ee&&Et(ee,D),Et(()=>{E.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},we=(E,D,N,k=!1,V=!1,ie=0)=>{for(let he=ie;he<E.length;he++)Q(E[he],D,N,k,V)},j=E=>E.shapeFlag&6?j(E.component.subTree):E.shapeFlag&128?E.suspense.next():h(E.anchor||E.el),oe=(E,D,N)=>{E==null?D._vnode&&Q(D._vnode,null,null,!0):x(D._vnode||null,E,D,null,null,null,N),Fu(),Qo(),D._vnode=E},ue={p:x,um:Q,m:W,r:_e,mt:I,mc:P,pc:Y,pbc:T,n:j,o:t};let Ee,Ae;return e&&([Ee,Ae]=e(ue)),{render:oe,hydrate:Ee,createApp:gv(oe,Ee)}}function Ai({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lp(t,e,n=!1){const i=t.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=si(r[s]),a.el=o.el),n||Lp(o,a)),a.type===Or&&(a.el=o.el)}}function Tv(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Av=t=>t.__isTeleport,Ft=Symbol.for("v-fgt"),Or=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),zo=Symbol.for("v-stc"),ps=[];let tn=null;function St(t=!1){ps.push(tn=t?null:[])}function Dp(){ps.pop(),tn=ps[ps.length-1]||null}let Fr=1;function Zu(t){Fr+=t}function Up(t){return t.dynamicChildren=Fr>0?tn||wr:null,Dp(),Fr>0&&tn&&tn.push(t),t}function ai(t,e,n,i,r,s){return Up(Ws(t,e,n,i,r,s,!0))}function li(t,e,n,i,r){return Up(st(t,e,n,i,r,!0))}function Ds(t){return t?t.__v_isVNode===!0:!1}function dn(t,e){return t.type===e.type&&t.key===e.key}const Ta="__vInternal",Ip=({key:t})=>t??null,Go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ot(t)||it(t)||Fe(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function Ws(t,e=null,n=null,i=0,r=null,s=t===Ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ip(e),ref:e&&Go(e),scopeId:Sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Bt};return a?(su(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ot(n)?8:16),Fr>0&&!o&&tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tn.push(l),l}const st=wv;function wv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Mp)&&(t=kt),Ds(t)){const a=jn(t,e,!0);return n&&su(a,n),Fr>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag|=-2,a}if(Ov(t)&&(t=t.__vccOpts),e){e=Np(e);let{class:a,style:l}=e;a&&!ot(a)&&(e.class=va(a)),tt(l)&&(Jh(l)&&!Ue(l)&&(l=pt({},l)),e.style=_a(l))}const o=ot(t)?1:cp(t)?128:Av(t)?64:tt(t)?4:Fe(t)?2:0;return Ws(t,e,n,i,r,o,s,!0)}function Np(t){return t?Jh(t)||Ta in t?pt({},t):t:null}function jn(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Rv(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ip(a),ref:e&&e.ref?n&&r?Ue(r)?r.concat(Go(e)):[r,Go(e)]:Go(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ft?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jn(t.ssContent),ssFallback:t.ssFallback&&jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ru(t=" ",e=0){return st(Or,null,t,e)}function us(t="",e=!1){return e?(St(),li(kt,null,t)):st(kt,null,t)}function Qt(t){return t==null||typeof t=="boolean"?st(kt):Ue(t)?st(Ft,null,t.slice()):typeof t=="object"?si(t):st(Or,null,String(t))}function si(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jn(t)}function su(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ue(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),su(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ta in e)?e._ctx=Bt:r===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),i&64?(n=16,e=[ru(e)]):n=8);t.children=e,t.shapeFlag|=n}function Rv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=va([e.class,i.class]));else if(r==="style")e.style=_a([e.style,i.style]);else if(Bs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ue(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Ot(t,e,n,i=null){nn(t,e,7,[n,i])}const Cv=bp();let Pv=0;function Lv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Cv,s={uid:Pv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ap(i,r),emitsOptions:lp(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=O_.bind(null,s),t.ce&&t.ce(s),s}let ht=null;const Xs=()=>ht||Bt;let ou,Qi,Ju="__VUE_INSTANCE_SETTERS__";(Qi=Gl()[Ju])||(Qi=Gl()[Ju]=[]),Qi.push(t=>ht=t),ou=t=>{Qi.length>1?Qi.forEach(e=>e(t)):Qi[0](t)};const Br=t=>{ou(t),t.scope.on()},Gi=()=>{ht&&ht.scope.off(),ou(null)};function Op(t){return t.vnode.shapeFlag&4}let Hr=!1;function Dv(t,e=!1){Hr=e;const{props:n,children:i}=t.vnode,r=Op(t);_v(t,n,r,e),yv(t,i);const s=r?Uv(t,e):void 0;return Hr=!1,s}function Uv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ya(new Proxy(t.ctx,cv));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Nv(t):null;Br(t),qr();const s=gi(i,t,0,[t.props,r]);if($r(),Gi(),Dh(s)){if(s.then(Gi,Gi),e)return s.then(o=>{Jl(t,o,e)}).catch(o=>{Yr(o,t,0)});t.asyncDep=s}else Jl(t,s,e)}else Fp(t,e)}function Jl(t,e,n){Fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:tt(e)&&(t.setupState=np(e)),Fp(t,n)}let Qu;function Fp(t,e,n){const i=t.type;if(!t.render){if(!e&&Qu&&!i.render){const r=i.template||tu(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=pt(pt({isCustomElement:s,delimiters:a},o),l);i.render=Qu(r,c)}}t.render=i.render||gn}Br(t),qr(),uv(t),$r(),Gi()}function Iv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Vt(t,"get","$attrs"),e[n]}}))}function Nv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Iv(t)},slots:t.slots,emit:t.emit,expose:e}}function Aa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(np(ya(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hs)return hs[n](t)},has(e,n){return n in e||n in hs}}))}function Ql(t,e=!0){return Fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Ov(t){return Fe(t)&&"__vccOpts"in t}const mt=(t,e)=>L_(t,e,Hr);function _n(t,e,n){const i=arguments.length;return i===2?tt(e)&&!Ue(e)?Ds(e)?st(t,null,[e]):st(t,e):st(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ds(n)&&(n=[n]),st(t,e,n))}const Fv=Symbol.for("v-scx"),Bv=()=>Ht(Fv),Bp="3.3.4",Hv="http://www.w3.org/2000/svg",Oi=typeof document<"u"?document:null,ef=Oi&&Oi.createElement("template"),kv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Oi.createElementNS(Hv,t):Oi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Oi.createTextNode(t),createComment:t=>Oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{ef.innerHTML=i?`<svg>${t}</svg>`:t;const a=ef.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Gv(t,e,n){const i=t.style,r=ot(n);if(n&&!r){if(e&&!ot(e))for(const s in e)n[s]==null&&ec(i,s,"");for(const s in n)ec(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const tf=/\s*!important$/;function ec(t,e,n){if(Ue(n))n.forEach(i=>ec(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Vv(t,e);tf.test(n)?t.setProperty(jr(i),n.replace(tf,""),"important"):t[i]=n}}const nf=["Webkit","Moz","ms"],$a={};function Vv(t,e){const n=$a[e];if(n)return n;let i=wn(e);if(i!=="filter"&&i in t)return $a[e]=i;i=ga(i);for(let r=0;r<nf.length;r++){const s=nf[r]+i;if(s in t)return $a[e]=s}return e}const rf="http://www.w3.org/1999/xlink";function Wv(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(rf,e.slice(6,e.length)):t.setAttributeNS(rf,e,n);else{const s=Yg(e);n==null||s&&!Oh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Xv(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Oh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function yr(t,e,n,i){t.addEventListener(e,n,i)}function jv(t,e,n,i){t.removeEventListener(e,n,i)}function qv(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=$v(e);if(i){const c=s[e]=Zv(i,r);yr(t,a,c,l)}else o&&(jv(t,a,o,l),s[e]=void 0)}}const sf=/(?:Once|Passive|Capture)$/;function $v(t){let e;if(sf.test(t)){e={};let i;for(;i=t.match(sf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):jr(t.slice(2)),e]}let Ya=0;const Yv=Promise.resolve(),Kv=()=>Ya||(Yv.then(()=>Ya=0),Ya=Date.now());function Zv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;nn(Jv(i,n.value),e,5,[i])};return n.value=t,n.attached=Kv(),n}function Jv(t,e){if(Ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const of=/^on[a-z]/,Qv=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?zv(t,i,r):e==="style"?Gv(t,n,i):Bs(e)?Oc(e)||qv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e0(t,e,i,r))?Xv(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Wv(t,e,i,r))};function e0(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&of.test(e)&&Fe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||of.test(e)&&ot(n)?!1:e in t}const Zn="transition",Qr="animation",au=(t,{slots:e})=>_n(Z_,t0(t),e);au.displayName="Transition";const Hp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};au.props=pt({},hp,Hp);const wi=(t,e=[])=>{Ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},af=t=>t?Ue(t)?t.some(e=>e.length>1):t.length>1:!1;function t0(t){const e={};for(const B in t)B in Hp||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=n0(r),x=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:_,onEnterCancelled:v,onLeave:y,onLeaveCancelled:S,onBeforeAppear:w=d,onAppear:R=_,onAppearCancelled:P=v}=e,M=(B,U,I)=>{Ri(B,U?u:a),Ri(B,U?c:o),I&&I()},T=(B,U)=>{B._isLeaving=!1,Ri(B,f),Ri(B,p),Ri(B,h),U&&U()},F=B=>(U,I)=>{const z=B?R:_,K=()=>M(U,B,I);wi(z,[U,K]),lf(()=>{Ri(U,B?l:s),Jn(U,B?u:a),af(z)||cf(U,i,x,K)})};return pt(e,{onBeforeEnter(B){wi(d,[B]),Jn(B,s),Jn(B,o)},onBeforeAppear(B){wi(w,[B]),Jn(B,l),Jn(B,c)},onEnter:F(!1),onAppear:F(!0),onLeave(B,U){B._isLeaving=!0;const I=()=>T(B,U);Jn(B,f),s0(),Jn(B,h),lf(()=>{B._isLeaving&&(Ri(B,f),Jn(B,p),af(y)||cf(B,i,m,I))}),wi(y,[B,I])},onEnterCancelled(B){M(B,!1),wi(v,[B])},onAppearCancelled(B){M(B,!0),wi(P,[B])},onLeaveCancelled(B){T(B),wi(S,[B])}})}function n0(t){if(t==null)return null;if(tt(t))return[Ka(t.enter),Ka(t.leave)];{const e=Ka(t);return[e,e]}}function Ka(t){return Nh(t)}function Jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ri(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function lf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let i0=0;function cf(t,e,n,i){const r=t._endId=++i0,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=r0(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function r0(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${Zn}Delay`),s=i(`${Zn}Duration`),o=uf(r,s),a=i(`${Qr}Delay`),l=i(`${Qr}Duration`),c=uf(a,l);let u=null,f=0,h=0;e===Zn?o>0&&(u=Zn,f=o,h=s.length):e===Qr?c>0&&(u=Qr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Zn:Qr:null,h=u?u===Zn?s.length:l.length:0);const p=u===Zn&&/\b(transform|all)(,|$)/.test(i(`${Zn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function uf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>ff(n)+ff(t[i])))}function ff(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function s0(){return document.body.offsetHeight}const df=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ue(e)?n=>Cr(e,n):e};function o0(t){t.target.composing=!0}function hf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const u1={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=df(r);const s=i||r.props&&r.props.type==="number";yr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=zl(a)),t._assign(a)}),n&&yr(t,"change",()=>{t.value=t.value.trim()}),e||(yr(t,"compositionstart",o0),yr(t,"compositionend",hf),yr(t,"change",hf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=df(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&zl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},a0=["ctrl","shift","alt","meta"],l0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>a0.some(n=>t[`${n}Key`]&&!e.includes(n))},f1=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=l0[e[r]];if(s&&s(n,e))return}return t(n,...i)},kp=pt({patchProp:Qv},kv);let ms,pf=!1;function c0(){return ms||(ms=Sv(kp))}function u0(){return ms=pf?ms:bv(kp),pf=!0,ms}const f0=(...t)=>{const e=c0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=zp(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},d0=(...t)=>{const e=u0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=zp(i);if(r)return n(r,!0,r instanceof SVGElement)},e};function zp(t){return ot(t)?document.querySelector(t):t}const h0=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,p0=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,m0=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function g0(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){_0(t);return}return e}function _0(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function v0(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!m0.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(h0.test(t)||p0.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,g0)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}const x0=/#/g,y0=/&/g,M0=/\//g,E0=/=/g,lu=/\+/g,S0=/%5e/gi,b0=/%60/gi,T0=/%7c/gi,A0=/%20/gi;function w0(t){return encodeURI(""+t).replace(T0,"|")}function tc(t){return w0(typeof t=="string"?t:JSON.stringify(t)).replace(lu,"%2B").replace(A0,"+").replace(x0,"%23").replace(y0,"%26").replace(b0,"`").replace(S0,"^").replace(M0,"%2F")}function Za(t){return tc(t).replace(E0,"%3D")}function Gp(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function R0(t){return Gp(t.replace(lu," "))}function C0(t){return Gp(t.replace(lu," "))}function Vp(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=R0(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=C0(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function P0(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Za(t)}=${tc(n)}`).join("&"):`${Za(t)}=${tc(e)}`:Za(t)}function L0(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>P0(e,t[e])).filter(Boolean).join("&")}const D0=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,U0=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,I0=/^([/\\]\s*){2,}[^/\\]/,N0=/\/$|\/\?|\/#/,O0=/^\.?\//;function Kr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?D0.test(t):U0.test(t)||(e.acceptRelative?I0.test(t):!1)}function nc(t="",e){return e?N0.test(t):t.endsWith("/")}function cu(t="",e){if(!e)return(nc(t)?t.slice(0,-1):t)||"/";if(!nc(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");r>=0&&(n=t.slice(0,r),i=t.slice(r));const[s,...o]=n.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function Wp(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(nc(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");if(r>=0&&(n=t.slice(0,r),i=t.slice(r),!n))return i;const[s,...o]=n.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function F0(t,e){if(jp(e)||Kr(t))return t;const n=cu(e);return t.startsWith(n)?t:js(n,t)}function mf(t,e){if(jp(e))return t;const n=cu(e);if(!t.startsWith(n))return t;const i=t.slice(n.length);return i[0]==="/"?i:"/"+i}function Xp(t,e){const n=qs(t),i={...Vp(n.search),...e};return n.search=L0(i),H0(n)}function jp(t){return!t||t==="/"}function B0(t){return t&&t!=="/"}function js(t,...e){let n=t||"";for(const i of e.filter(r=>B0(r)))if(n){const r=i.replace(O0,"");n=Wp(n)+r}else n=i;return n}const qp=Symbol.for("ufo:protocolRelative");function qs(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,h=""]=n;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!Kr(t,{acceptRelative:!0}))return e?qs(e+t):gf(t);const[,i="",r,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:c,hash:u}=gf(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:c,hash:u,[qp]:!i}}function gf(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function H0(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",i=t.hash||"",r=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol||t[qp]?(t.protocol||"")+"//":"")+r+s+e+n+i}class k0 extends Error{constructor(){super(...arguments),this.name="FetchError"}}function z0(t,e,n){let i="";e&&(i=e.message),t&&n?i=`${i} (${n.status} ${n.statusText} (${t.toString()}))`:t&&(i=`${i} (${t.toString()})`);const r=new k0(i);return Object.defineProperty(r,"request",{get(){return t}}),Object.defineProperty(r,"response",{get(){return n}}),Object.defineProperty(r,"data",{get(){return n&&n._data}}),Object.defineProperty(r,"status",{get(){return n&&n.status}}),Object.defineProperty(r,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(r,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(r,"statusMessage",{get(){return n&&n.statusText}}),r}const G0=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function _f(t="GET"){return G0.has(t.toUpperCase())}function V0(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const W0=new Set(["image/svg","application/xml","application/xhtml","application/html"]),X0=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function j0(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return X0.test(e)?"json":W0.has(e)||e.startsWith("text/")?"text":"blob"}function q0(t,e,n=globalThis.Headers){const i={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(i.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(i.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){i.headers=new n((e==null?void 0:e.headers)||{});for(const[r,s]of new n((t==null?void 0:t.headers)||{}))i.headers.set(r,s)}return i}const $0=new Set([408,409,425,429,500,502,503,504]);function $p(t){const{fetch:e,Headers:n}=t;function i(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){let c;typeof o.options.retry=="number"?c=o.options.retry:c=_f(o.options.method)?0:1;const u=o.response&&o.response.status||500;if(c>0&&$0.has(u))return r(o.request,{...o.options,retry:c-1})}const l=z0(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}const r=async function(a,l={}){const c={request:a,options:q0(l,t.defaults,n),response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=F0(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=Xp(c.request,{...c.options.params,...c.options.query})),c.options.body&&_f(c.options.method)&&V0(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")));try{c.response=await e(c.request,c.options)}catch(f){return c.error=f,c.options.onRequestError&&await c.options.onRequestError(c),await i(c)}const u=(c.options.parseResponse?"json":c.options.responseType)||j0(c.response.headers.get("content-type")||"");if(u==="json"){const f=await c.response.text(),h=c.options.parseResponse||v0;c.response._data=h(f)}else u==="stream"?c.response._data=c.response.body:c.response._data=await c.response[u]();return c.options.onResponse&&await c.options.onResponse(c),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),await i(c)):c.response},s=async function(a,l){return(await r(a,l))._data};return s.raw=r,s.native=e,s.create=(o={})=>$p({...t,defaults:{...t.defaults,...o}}),s}const Yp=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Y0=Yp.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),K0=Yp.Headers,Z0=$p({fetch:Y0,Headers:K0}),J0=Z0,Q0=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},ra=Q0().app,ex=()=>ra.baseURL,tx=()=>ra.buildAssetsDir,nx=(...t)=>js(Kp(),tx(),...t),Kp=(...t)=>{const e=ra.cdnURL||ra.baseURL;return t.length?js(e,...t):e};globalThis.__buildAssetsURL=nx,globalThis.__publicAssetsURL=Kp;function ic(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?ic(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const ix={run:t=>t()},rx=()=>ix,Zp=typeof console.createTask<"u"?console.createTask:rx;function sx(t,e){const n=e.shift(),i=Zp(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function ox(t,e){const n=e.shift(),i=Zp(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function Ja(t,e){for(const n of[...t])n(e)}class ax{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){const i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=ic(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const n=ic(e);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(sx,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(ox,e,...n)}callHookWith(e,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&Ja(this._before,r);const s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&Ja(this._after,r)}):(this._after&&r&&Ja(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Jp(){return new ax}function lx(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&e===void 0){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;rc.add(c);try{const u=r?r.run(o,a):a();return n||(e=void 0),await u}finally{rc.delete(c)}}}}function cx(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=lx({...t,...i})),e[n],e[n]}}}const sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},vf="__unctx__",ux=sa[vf]||(sa[vf]=cx()),fx=(t,e={})=>ux.get(t,e),xf="__unctx_async_handlers__",rc=sa[xf]||(sa[xf]=new Set);function oa(t){const e=[];for(const r of rc){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const Qp=fx("nuxt-app"),dx="__nuxt_plugin";function hx(t){let e=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.6.2"},get vue(){return n.vueApp.version}},payload:Xn({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:r=>gx(n,r),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=Jp(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,s)=>{const o="$"+r;fo(n,o,s),fo(n.vueApp.config.globalProperties,o,s)},fo(n.vueApp,"$nuxt",n),fo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",s=>{n.callHook("app:chunkError",{error:s.payload})}),window.useNuxtApp=window.useNuxtApp||at;const r=n.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});n.hook("app:mounted",r)}const i=Xn(n.payload.config);return n.provide("config",i),n}async function px(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function mx(t,e){const n=[],i=[];for(const r of e){const s=px(t,r);r.parallel?n.push(s.catch(o=>i.push(o))):await s}if(await Promise.all(n),i.length)throw i[0]}/*! @__NO_SIDE_EFFECTS__ */function Ei(t){return typeof t=="function"?t:(delete t.name,Object.assign(t.setup||(()=>{}),t,{[dx]:!0}))}function gx(t,e,n){const i=()=>n?e(...n):e();return Qp.set(t),t.vueApp.runWithContext(i)}/*! @__NO_SIDE_EFFECTS__ */function at(){var e;let t;if(nu()&&(t=(e=Xs())==null?void 0:e.appContext.app.$nuxt),t=t||Qp.tryUse(),!t)throw new Error("[nuxt] instance unavailable");return t}/*! @__NO_SIDE_EFFECTS__ */function uu(){return at().$config}function fo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const _x="modulepreload",vx=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},yf={},xx=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=vx(s,i),s in yf)return;yf[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":_x,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},ci=(...t)=>xx(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),yx=-1,Mx=-2,Ex=-3,Sx=-4,bx=-5,Tx=-6;function Ax(t,e){return wx(JSON.parse(t),e)}function wx(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);function r(s,o=!1){if(s===yx)return;if(s===Ex)return NaN;if(s===Sx)return 1/0;if(s===bx)return-1/0;if(s===Tx)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return i[s]=c(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const u=new Set;i[s]=u;for(let p=1;p<a.length;p+=1)u.add(r(a[p]));break;case"Map":const f=new Map;i[s]=f;for(let p=1;p<a.length;p+=2)f.set(r(a[p]),r(a[p+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let p=1;p<a.length;p+=2)h[a[p]]=r(a[p+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==Mx&&(l[c]=r(u))}}else{const l={};i[s]=l;for(const c in a){const u=a[c];l[c]=r(u)}}return i[s]}return r(0)}function Rx(t){return Array.isArray(t)?t:[t]}const em=["title","script","style","noscript"],tm=["base","meta","link","style","script","noscript"],Cx=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Px=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Lx=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function nm(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function sc(t){return nm(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function Dx(t){let e=9;for(const n of t)for(let i=0;i<n.length;)e=Math.imul(e^n.charCodeAt(i++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function im(t,e){const{props:n,tag:i}=t;if(Px.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];i==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof n[s]<"u"){const o=String(n[s]);return e&&!e(o)?!1:`${i}:${s}:${o}`}return!1}function Mf(t,e){return t==null?e||null:typeof t=="function"?t(e):t}function ho(t,e=!1,n){const{tag:i,$el:r}=t;r&&(Object.entries(i.props).forEach(([s,o])=>{o=String(o);const a=`attr:${s}`;if(s==="class"){if(!o)return;for(const l of o.split(" ")){const c=`${a}:${l}`;n&&n(t,c,()=>r.classList.remove(l)),r.classList.contains(l)||r.classList.add(l)}return}n&&!s.startsWith("data-h-")&&n(t,a,()=>r.removeAttribute(s)),(e||r.getAttribute(s)!==o)&&r.setAttribute(s,o)}),em.includes(i.tag)&&(i.textContent&&i.textContent!==r.textContent?r.textContent=i.textContent:i.innerHTML&&i.innerHTML!==r.innerHTML&&(r.innerHTML=i.innerHTML)))}let es=!1;async function Ux(t,e={}){var h,p;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const i=e.document||t.resolvedOptions.document||window.document,r=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(es=es||t._hash||!1,es)){const g=Dx(r.map(x=>x.tag._h));if(es===g)return;es=g}const s=t._popSideEffectQueue();t.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([x,m])=>{s[x]=m})});const o=(g,x,m)=>{x=`${g.renderId}:${x}`,g.entry&&(g.entry._sde[x]=m),delete s[x]};function a(g){const x=t.headEntries().find(d=>d._i===g._e),m={renderId:g._d||sc(g),$el:null,shouldRender:!0,tag:g,entry:x,markSideEffect:(d,_)=>o(m,d,_)};return m}const l=[],c={body:[],head:[]},u=g=>{t._elMap[g.renderId]=g.$el,l.push(g),o(g,"el",()=>{var x;(x=g.$el)==null||x.remove(),delete t._elMap[g.renderId]})};for(const g of r){if(await t.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:x}=g;if(x.tag==="title"){i.title=x.textContent||"",l.push(g);continue}if(x.tag==="htmlAttrs"||x.tag==="bodyAttrs"){g.$el=i[x.tag==="htmlAttrs"?"documentElement":"body"],ho(g,!1,o),l.push(g);continue}if(g.$el=t._elMap[g.renderId],!g.$el&&x.key&&(g.$el=i.querySelector(`${(h=x.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${x.tag}[data-h-${x._h}]`)),g.$el){g.tag._d&&ho(g),u(g);continue}c[(p=x.tagPosition)!=null&&p.startsWith("body")?"body":"head"].push(g)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(c).forEach(([g,x])=>{var d;if(!x.length)return;const m=(d=i==null?void 0:i[g])==null?void 0:d.children;if(m){for(const _ of[...m].reverse()){const v=_.tagName.toLowerCase();if(!tm.includes(v))continue;const y=_.getAttributeNames().reduce((P,M)=>({...P,[M]:_.getAttribute(M)}),{}),S={tag:v,props:y};_.innerHTML&&(S.innerHTML=_.innerHTML);const w=sc(S);let R=x.findIndex(P=>(P==null?void 0:P.renderId)===w);if(R===-1){const P=im(S);R=x.findIndex(M=>(M==null?void 0:M.tag._d)&&M.tag._d===P)}if(R!==-1){const P=x[R];P.$el=_,ho(P),u(P),delete x[R]}}x.forEach(_=>{const v=_.tag.tagPosition||"head";f[v]=f[v]||i.createDocumentFragment(),_.$el||(_.$el=i.createElement(_.tag.tag),ho(_,!0)),f[v].appendChild(_.$el),u(_)})}}),f.head&&i.head.appendChild(f.head),f.bodyOpen&&i.body.insertBefore(f.bodyOpen,i.body.firstChild),f.bodyClose&&i.body.appendChild(f.bodyClose);for(const g of l)await t.hooks.callHook("dom:renderTag",g);Object.values(s).forEach(g=>g())}let Qa=null;async function Ix(t,e={}){function n(){return Qa=null,Ux(t,e)}const i=e.delayFn||(r=>setTimeout(r,10));return Qa=Qa||new Promise(r=>i(()=>r(n())))}function Nx(t){return{hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Ix(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}}}function Ox(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const Ef={base:-1,title:1},Sf={critical:-8,high:-1,low:2};function aa(t){let e=10;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props.charset&&(e=-2),t.props["http-equiv"]==="content-security-policy"&&(e=0)):t.tag in Ef&&(e=Ef[t.tag]),typeof n=="string"&&n in Sf?e+Sf[n]:e)}const Fx=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Bx(){return{hooks:{"tags:resolve":t=>{const e=n=>{var i;return(i=t.tags.find(r=>r._d===n))==null?void 0:i._p};for(const{prefix:n,offset:i}of Fx)for(const r of t.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(n))){const s=e(r.tagPriority.replace(n,""));typeof s<"u"&&(r._p=s+i)}t.tags.sort((n,i)=>n._p-i._p).sort((n,i)=>aa(n)-aa(i))}}}}function Hx(){return{hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(r=>r.tag==="titleTemplate");const i=e.findIndex(r=>r.tag==="title");if(i!==-1&&n!==-1){const r=Mf(e[n].textContent,e[i].textContent);r!==null?e[i].textContent=r||e[i].textContent:delete e[i]}else if(n!==-1){const r=Mf(e[n].textContent);r!==null&&(e[n].textContent=r,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}}function kx(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const zx=["link","style","script","noscript"];function Gx(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=sc(t)),t.key&&zx.includes(t.tag)&&(t._h=nm(t.key),t.props[`data-h-${t._h}`]="")}}}}const bf=["script","link","bodyAttrs"];function Vx(){const t=(e,n)=>{const i={},r={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?r[o]=a:i[o]=a});let s;return e==="dom"&&n.tag==="script"&&typeof i.src=="string"&&typeof r.onload<"u"&&(s=i.src,delete i.src),{props:i,eventHandlers:r,delayedSrc:s}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!bf.includes(n.tag)||!Object.entries(n.props).find(([i,r])=>i.startsWith("on")&&typeof r=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!bf.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([s,o])=>s.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:i,delayedSrc:r}=t("dom",e.tag);Object.keys(i).length&&(e.tag.props=n,e.tag._eventHandlers=i,e.tag._delayedSrc=r)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const i=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([r,s])=>{const o=`${e.tag._d||e.tag._p}:${r}`,a=r.slice(2).toLowerCase(),l=`data-h-${a}`;if(e.markSideEffect(o,()=>{}),n.hasAttribute(l))return;const c=s;n.setAttribute(l,""),i.addEventListener(a,c),e.entry&&(e.entry._sde[o]=()=>{i.removeEventListener(a,c),n.removeAttribute(l)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}}const Wx=["templateParams","htmlAttrs","bodyAttrs"];function Xx(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(i=>{t.props[i]&&(t.key=t.props[i],delete t.props[i])});const n=im(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(i=>{const r=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,s=e[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&Wx.includes(i.tag)&&(a="merge"),a==="merge"){const l=s.props;["class","style"].forEach(c=>{i.props[c]&&l[c]&&(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),i.props[c]=`${l[c]} ${i.props[c]}`)}),e[r].props={...l,...i.props};return}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);return}else if(aa(i)>aa(s))return}const o=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(tm.includes(i.tag)&&o===0){delete e[r];return}e[r]=i});const n=[];Object.values(e).forEach(i=>{const r=i._duped;delete i._duped,n.push(i),r&&n.push(...r)}),t.tags=n}}}}function ts(t,e){if(typeof t!="string")return t;function n(o){if(["s","pageTitle"].includes(o))return e.pageTitle;let a;return o.includes(".")?a=o.split(".").reduce((l,c)=>l&&l[c]||void 0,e):a=e[o],typeof a<"u"?a||"":!1}let i=t;try{i=decodeURI(t)}catch{}(i.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=n(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),`${a}$1`).trim())});const s=e.separator;return t.includes(s)&&(t.endsWith(s)&&(t=t.slice(0,-s.length).trim()),t.startsWith(s)&&(t=t.slice(s.length).trim()),t=t.replace(new RegExp(`\\${s}\\s*\\${s}`,"g"),s)),t}function jx(){return{hooks:{"tags:resolve":t=>{var s;const{tags:e}=t,n=(s=e.find(o=>o.tag==="title"))==null?void 0:s.textContent,i=e.findIndex(o=>o.tag==="templateParams"),r=i!==-1?e[i].props:{};r.separator=r.separator||"|",r.pageTitle=ts(r.pageTitle||n||"",r);for(const o of e)if(["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string")o.textContent=ts(o.textContent,r);else if(o.tag==="meta"&&typeof o.props.content=="string")o.props.content=ts(o.props.content,r);else if(o.tag==="link"&&typeof o.props.href=="string")o.props.href=ts(o.props.href,r);else if(o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string")try{o.innerHTML=JSON.stringify(JSON.parse(o.innerHTML),(a,l)=>typeof l=="string"?ts(l,r):l)}catch{}t.tags=e.filter(o=>o.tag!=="templateParams")}}}}const qx=typeof window<"u";let rm;function $x(t){return rm=t}function Yx(){return rm}async function Kx(t,e){const n={tag:t,props:{}};return e instanceof Promise&&(e=await e),t==="templateParams"?(n.props=e,n):["title","titleTemplate"].includes(t)?(e&&typeof e=="object"?(n.textContent=e.textContent,e.tagPriority&&(n.tagPriority=e.tagPriority)):n.textContent=e,n):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?n.props.src=e:n.innerHTML=e,n):!1:(n.props=await Jx(t,{...e}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(i=>Lx.includes(i)).forEach(i=>{(!["innerHTML","textContent"].includes(i)||em.includes(n.tag))&&(n[i]=n.props[i]),delete n.props[i]}),["innerHTML","textContent"].forEach(i=>{if(n.tag==="script"&&typeof n[i]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[i]=JSON.parse(n[i])}catch{n[i]=""}typeof n[i]=="object"&&(n[i]=JSON.stringify(n[i]))}),n.props.class&&(n.props.class=Zx(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(i=>({...n,props:{...n.props,content:i}})):n)}function Zx(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function Jx(t,e){for(const n of Object.keys(e)){const i=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=i?"true":"":String(e[n])==="false"&&(i?e[n]="false":delete e[n])}return e}const Qx=10;async function ey(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,i])=>typeof i<"u"&&Cx.includes(n)).forEach(([n,i])=>{const r=Rx(i);e.push(...r.map(s=>Kx(n,s)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,i)=>(n._e=t._i,n._p=(t._i<<Qx)+i,n))}function ty(){return[Xx(),Bx(),jx(),Hx(),Gx(),Vx(),kx()]}function ny(t={}){return[Nx({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function iy(t={}){const e=ry({...t,plugins:[...ny(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=Ox(e.resolvedOptions.document)),$x(e),e}function ry(t={}){let e=[],n={},i=0;const r=Jp();t!=null&&t.hooks&&r.addHooks(t.hooks),t.plugins=[...ty(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks)),t.document=t.document||(qx?document:void 0);const s=()=>r.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,l){const c={_i:i++,input:a,_sde:{}};return l!=null&&l.mode&&(c._m=l==null?void 0:l.mode),l!=null&&l.transform&&(c._t=l==null?void 0:l.transform),e.push(c),s(),{dispose(){e=e.filter(u=>u._i!==c._i?!0:(n={...n,...u._sde||{}},u._sde={},s(),!1))},patch(u){e=e.map(f=>(f._i===c._i&&(c.input=f.input=u,s()),f))}}},async resolveTags(){const a={tags:[],entries:[...e]};await r.callHook("entries:resolve",a);for(const l of a.entries){const c=l._t||(u=>u);if(l.resolvedInput=c(l.resolvedInput||l.input),l.resolvedInput)for(const u of await ey(l)){const f={tag:u,entry:l,resolvedOptions:o.resolvedOptions};await r.callHook("tag:normalise",f),a.tags.push(f.tag)}}return await r.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return o.hooks.callHook("init",o),o}function sy(t){return typeof t=="function"?t():et(t)}function la(t,e=""){if(t instanceof Promise)return t;const n=sy(t);return!t||!n?n:Array.isArray(n)?n.map(i=>la(i,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,r])=>i==="titleTemplate"||i.startsWith("on")?[i,et(r)]:[i,la(r,i)])):n}const oy=Bp.startsWith("3"),ay=typeof window<"u",sm="usehead";function fu(){return Xs()&&Ht(sm)||Yx()}function ly(t){return{install(n){oy&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(sm,t))}}.install}function cy(t={}){const e=iy({...t,domDelayFn:n=>setTimeout(()=>Zi(()=>n()),10),plugins:[uy(),...(t==null?void 0:t.plugins)||[]]});return e.install=ly(e),e}function uy(){return{hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=la(e.input)}}}}function fy(t,e={}){const n=fu(),i=Ze(!1),r=Ze({});q_(()=>{r.value=i.value?{}:la(t)});const s=n.push(r.value,e);return zi(r,a=>{s.patch(a)}),Xs()&&(Vs(()=>{s.dispose()}),_p(()=>{i.value=!0}),gp(()=>{i.value=!1})),s}function dy(t,e={}){return fu().push(t,e)}function d1(t,e={}){var i;const n=fu();if(n){const r=ay||!!((i=n.resolvedOptions)!=null&&i.document);return e.mode==="server"&&r||e.mode==="client"&&!r?void 0:r?fy(t,e):dy(t,e)}}const hy={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},oc=!1,py=!1,my="__nuxt",gy=!0;function Tf(t,e={}){const n=_y(t,e),i=at(),r=i._payloadCache=i._payloadCache||{};return r[n]||(r[n]=om(n).then(s=>s||(delete r[n],null))),r[n]}const Af="json";function _y(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||Kr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=e.hash||(e.fresh?Date.now():"");return js(uu().app.baseURL,n.pathname,i?`_payload.${i}.${Af}`:`_payload.${Af}`)}async function om(t){try{return gy?am(await fetch(t).then(e=>e.text())):await ci(()=>import(t),[],import.meta.url).then(e=>e.default||e)}catch(e){console.warn("[nuxt] Cannot load payload ",t,e)}return null}function vy(){return!!at().payload.prerenderedAt}let po=null;async function xy(){if(po)return po;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=am(t.textContent||""),n=t.dataset.src?await om(t.dataset.src):void 0;return po={...e,...n,...window.__NUXT__},po}function am(t){return Ax(t,at()._payloadRevivers)}function yy(t,e){at()._payloadRevivers[t]=e}function el(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function ac(t,e,n=".",i){if(!el(e))return ac(t,{},n,i);const r=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:el(o)&&el(r[s])?r[s]=ac(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function My(t){return(...e)=>e.reduce((n,i)=>ac(n,i,"",t),{})}const Ey=My();class lc extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1}toJSON(){const e={message:this.message,statusCode:uc(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=lm(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}lc.__h3_error__=!0;function cc(t){if(typeof t=="string")return new lc(t);if(Sy(t))return t;const e=new lc(t.message??t.statusMessage??"",t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=uc(t.statusCode,e.statusCode):t.status&&(e.statusCode=uc(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;lm(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Sy(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const by=/[^\u0009\u0020-\u007E]/g;function lm(t=""){return t.replace(by,"")}function uc(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Ty="$s";function Ay(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,i]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(i!==void 0&&typeof i!="function")throw new Error("[nuxt] [useState] init must be a function: "+i);const r=Ty+n,s=at(),o=qc(s.payload.state,r);if(o.value===void 0&&i){const a=i();if(it(a))return s.payload.state[r]=a,a;o.value=a}return o}const wy=Symbol("layout-meta"),wa=Symbol("route"),Si=()=>{var t;return(t=at())==null?void 0:t.$router},ca=()=>nu()?Ht(wa,at()._route):at()._route;/*! @__NO_SIDE_EFFECTS__ */const Ry=()=>{try{if(at()._processingMiddleware)return!0}catch{return!0}return!1},Cy=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:Xp(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){{const{target:a="_blank",windowFeatures:l={}}=e.open,c=Object.entries(l).filter(([u,f])=>f!==void 0).map(([u,f])=>`${u.toLowerCase()}=${f}`).join(", ");open(n,a,c)}return Promise.resolve()}const i=(e==null?void 0:e.external)||Kr(n,{acceptRelative:!0});if(i&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(i&&qs(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const r=Ry();if(!i&&r)return t;const s=Si(),o=at();return i?(e!=null&&e.replace?location.replace(n):location.href=n,r?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?s.replace(t):s.push(t)},Ra=()=>qc(at().payload,"error"),br=t=>{const e=du(t);try{const n=at(),i=Ra();n.hooks.callHook("app:error",e),i.value=i.value||e}catch{throw e}return e},Py=async(t={})=>{const e=at(),n=Ra();e.callHook("app:error:cleared",t),t.redirect&&await Si().replace(t.redirect),n.value=null},Ly=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),du=t=>{const e=cc(t);return e.__nuxt_error=!0,e},wf={NuxtError:t=>du(t),EmptyShallowRef:t=>ws(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),EmptyRef:t=>Ze(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),ShallowRef:t=>ws(t),ShallowReactive:t=>ks(t),Ref:t=>Ze(t),Reactive:t=>Xn(t)},Dy=Ei({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const i in wf)yy(i,wf[i]);Object.assign(t.payload,([e,n]=oa(()=>t.runWithContext(xy)),e=await e,n(),e)),window.__NUXT__=t.payload}});/*!
  * vue-router v4.2.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof window<"u";function Uy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Je=Object.assign;function tl(t,e){const n={};for(const i in e){const r=e[i];n[i]=vn(r)?r.map(t):t(r)}return n}const gs=()=>{},vn=Array.isArray,Iy=/\/$/,Ny=t=>t.replace(Iy,"");function nl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Hy(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function Oy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Fy(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&kr(e.matched[i],n.matched[r])&&cm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function kr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!By(t[n],e[n]))return!1;return!0}function By(t,e){return vn(t)?Cf(t,e):vn(e)?Cf(e,t):t===e}function Cf(t,e){return vn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Hy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Us;(function(t){t.pop="pop",t.push="push"})(Us||(Us={}));var _s;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_s||(_s={}));function ky(t){if(!t)if(Mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ny(t)}const zy=/^[^#]+#/;function Gy(t,e){return t.replace(zy,"#")+e}function Vy(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ca=()=>({left:window.pageXOffset,top:window.pageYOffset});function Wy(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Vy(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pf(t,e){return(history.state?history.state.position-e:-1)+t}const fc=new Map;function Xy(t,e){fc.set(t,e)}function jy(t){const e=fc.get(t);return fc.delete(t),e}let qy=()=>location.protocol+"//"+location.host;function um(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Rf(l,"")}return Rf(n,t)+i+r}function $y(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=um(t,location),g=n.value,x=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===g){o=null;return}m=x?h.position-x.position:0}else i(p);r.forEach(d=>{d(n.value,g,{delta:m,type:Us.pop,direction:m?m>0?_s.forward:_s.back:_s.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(Je({},h.state,{scroll:Ca()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Lf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ca():null}}function Yy(t){const{history:e,location:n}=window,i={value:um(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:qy()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=Je({},e.state,Lf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Je({},r.value,e.state,{forward:l,scroll:Ca()});s(u.current,u,!0);const f=Je({},Lf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function fm(t){t=ky(t);const e=Yy(t),n=$y(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Je({location:"",base:t,go:i,createHref:Gy.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Ky(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),fm(t)}function Zy(t){return typeof t=="string"||t&&typeof t=="object"}function dm(t){return typeof t=="string"||typeof t=="symbol"}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hm=Symbol("");var Df;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Df||(Df={}));function zr(t,e){return Je(new Error,{type:t,[hm]:!0},e)}function Pn(t,e){return t instanceof Error&&hm in t&&(e==null||!!(t.type&e))}const Uf="[^/]+?",Jy={sensitive:!1,strict:!1,start:!0,end:!0},Qy=/[.+*?^${}()[\]/\\]/g;function eM(t,e){const n=Je({},Jy,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Qy,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:x,optional:m,regexp:d}=h;s.push({name:g,repeatable:x,optional:m});const _=d||Uf;if(_!==Uf){p+=10;try{new RegExp(`(${_})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+y.message)}}let v=x?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,p+=20,m&&(p+=-8),x&&(p+=-20),_===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:x,optional:m}=p,d=g in c?c[g]:"";if(vn(d)&&!x)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=vn(d)?d.join("/"):d;if(!_)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=_}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function tM(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nM(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=tM(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(If(i))return 1;if(If(r))return-1}return r.length-i.length}function If(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iM={type:0,value:""},rM=/[a-zA-Z0-9_]/;function sM(t){if(!t)return[[]];if(t==="/")return[[iM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:rM.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function oM(t,e,n){const i=eM(sM(t.path),n),r=Je(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function aM(t,e){const n=[],i=new Map;e=Ff({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,g=lM(u);g.aliasOf=h&&h.record;const x=Ff(e,u),m=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of v)m.push(Je({},g,{components:h?h.record.components:g.components,path:y,aliasOf:h?h.record:g}))}let d,_;for(const v of m){const{path:y}=v;if(f&&y[0]!=="/"){const S=f.record.path,w=S[S.length-1]==="/"?"":"/";v.path=f.record.path+(y&&w+y)}if(d=oM(v,f,x),h?h.alias.push(d):(_=_||d,_!==d&&_.alias.push(d),p&&u.name&&!Of(d)&&o(u.name)),g.children){const S=g.children;for(let w=0;w<S.length;w++)s(S[w],d,h&&h.children[w])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return _?()=>{o(_)}:gs}function o(u){if(dm(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&nM(u,n[f])>=0&&(u.record.path!==n[f].record.path||!pm(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Of(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},g,x;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw zr(1,{location:u});x=h.record.name,p=Je(Nf(f.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&Nf(u.params,h.keys.map(_=>_.name))),g=h.stringify(p)}else if("path"in u)g=u.path,h=n.find(_=>_.re.test(g)),h&&(p=h.parse(g),x=h.record.name);else{if(h=f.name?i.get(f.name):n.find(_=>_.re.test(f.path)),!h)throw zr(1,{location:u,currentLocation:f});x=h.record.name,p=Je({},f.params,u.params),g=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:x,path:g,params:p,matched:m,meta:uM(m)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Nf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function lM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function cM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Of(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uM(t){return t.reduce((e,n)=>Je(e,n.meta),{})}function Ff(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function pm(t,e){return e.children.some(n=>n===t||pm(t,n))}const mm=/#/g,fM=/&/g,dM=/\//g,hM=/=/g,pM=/\?/g,gm=/\+/g,mM=/%5B/g,gM=/%5D/g,_m=/%5E/g,_M=/%60/g,vm=/%7B/g,vM=/%7C/g,xm=/%7D/g,xM=/%20/g;function hu(t){return encodeURI(""+t).replace(vM,"|").replace(mM,"[").replace(gM,"]")}function yM(t){return hu(t).replace(vm,"{").replace(xm,"}").replace(_m,"^")}function dc(t){return hu(t).replace(gm,"%2B").replace(xM,"+").replace(mm,"%23").replace(fM,"%26").replace(_M,"`").replace(vm,"{").replace(xm,"}").replace(_m,"^")}function MM(t){return dc(t).replace(hM,"%3D")}function EM(t){return hu(t).replace(mm,"%23").replace(pM,"%3F")}function SM(t){return t==null?"":EM(t).replace(dM,"%2F")}function ua(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function bM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(gm," "),o=s.indexOf("="),a=ua(o<0?s:s.slice(0,o)),l=o<0?null:ua(s.slice(o+1));if(a in e){let c=e[a];vn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Bf(t){let e="";for(let n in t){const i=t[n];if(n=MM(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(i)?i.map(s=>s&&dc(s)):[i&&dc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function TM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=vn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const AM=Symbol(""),Hf=Symbol(""),pu=Symbol(""),ym=Symbol(""),hc=Symbol("");function ns(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function oi(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(zr(4,{from:n,to:e})):f instanceof Error?a(f):Zy(f)?a(zr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function il(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(wM(a)){const c=(a.__vccOpts||a)[e];c&&r.push(oi(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Uy(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&oi(h,n,i,s,o)()}))}}return r}function wM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kf(t){const e=Ht(pu),n=Ht(ym),i=mt(()=>e.resolve(et(t.to))),r=mt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(kr.bind(null,u));if(h>-1)return h;const p=zf(l[c-2]);return c>1&&zf(u)===p&&f[f.length-1].path!==p?f.findIndex(kr.bind(null,l[c-2])):h}),s=mt(()=>r.value>-1&&LM(n.params,i.value.params)),o=mt(()=>r.value>-1&&r.value===n.matched.length-1&&cm(n.params,i.value.params));function a(l={}){return PM(l)?e[et(t.replace)?"replace":"push"](et(t.to)).catch(gs):Promise.resolve()}return{route:i,href:mt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const RM=Mi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kf,setup(t,{slots:e}){const n=Xn(kf(t)),{options:i}=Ht(pu),r=mt(()=>({[Gf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Gf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:_n("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),CM=RM;function PM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function LM(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!vn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function zf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gf=(t,e,n)=>t??e??n,DM=Mi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Ht(hc),r=mt(()=>t.route||i.value),s=Ht(Hf,0),o=mt(()=>{let c=et(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=mt(()=>r.value.matched[o.value]);Ur(Hf,mt(()=>o.value+1)),Ur(AM,a),Ur(hc,r);const l=Ze();return zi(()=>[l.value,a.value,t.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!kr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Vf(n.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=_n(h,Je({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Vf(n.default,{Component:m,route:c})||m}}});function Vf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mm=DM;function UM(t){const e=aM(t.routes,t),n=t.parseQuery||bM,i=t.stringifyQuery||Bf,r=t.history,s=ns(),o=ns(),a=ns(),l=ws(Mn);let c=Mn;Mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tl.bind(null,j=>""+j),f=tl.bind(null,SM),h=tl.bind(null,ua);function p(j,oe){let ue,Ee;return dm(j)?(ue=e.getRecordMatcher(j),Ee=oe):Ee=j,e.addRoute(Ee,ue)}function g(j){const oe=e.getRecordMatcher(j);oe&&e.removeRoute(oe)}function x(){return e.getRoutes().map(j=>j.record)}function m(j){return!!e.getRecordMatcher(j)}function d(j,oe){if(oe=Je({},oe||l.value),typeof j=="string"){const N=nl(n,j,oe.path),k=e.resolve({path:N.path},oe),V=r.createHref(N.fullPath);return Je(N,k,{params:h(k.params),hash:ua(N.hash),redirectedFrom:void 0,href:V})}let ue;if("path"in j)ue=Je({},j,{path:nl(n,j.path,oe.path).path});else{const N=Je({},j.params);for(const k in N)N[k]==null&&delete N[k];ue=Je({},j,{params:f(N)}),oe.params=f(oe.params)}const Ee=e.resolve(ue,oe),Ae=j.hash||"";Ee.params=u(h(Ee.params));const E=Oy(i,Je({},j,{hash:yM(Ae),path:Ee.path})),D=r.createHref(E);return Je({fullPath:E,hash:Ae,query:i===Bf?TM(j.query):j.query||{}},Ee,{redirectedFrom:void 0,href:D})}function _(j){return typeof j=="string"?nl(n,j,l.value.path):Je({},j)}function v(j,oe){if(c!==j)return zr(8,{from:oe,to:j})}function y(j){return R(j)}function S(j){return y(Je(_(j),{replace:!0}))}function w(j){const oe=j.matched[j.matched.length-1];if(oe&&oe.redirect){const{redirect:ue}=oe;let Ee=typeof ue=="function"?ue(j):ue;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=_(Ee):{path:Ee},Ee.params={}),Je({query:j.query,hash:j.hash,params:"path"in Ee?{}:j.params},Ee)}}function R(j,oe){const ue=c=d(j),Ee=l.value,Ae=j.state,E=j.force,D=j.replace===!0,N=w(ue);if(N)return R(Je(_(N),{state:typeof N=="object"?Je({},Ae,N.state):Ae,force:E,replace:D}),oe||ue);const k=ue;k.redirectedFrom=oe;let V;return!E&&Fy(i,Ee,ue)&&(V=zr(16,{to:k,from:Ee}),W(Ee,Ee,!0,!1)),(V?Promise.resolve(V):T(k,Ee)).catch(ie=>Pn(ie)?Pn(ie,2)?ie:de(ie):Y(ie,k,Ee)).then(ie=>{if(ie){if(Pn(ie,2))return R(Je({replace:D},_(ie.to),{state:typeof ie.to=="object"?Je({},Ae,ie.to.state):Ae,force:E}),oe||k)}else ie=B(k,Ee,!0,D,Ae);return F(k,Ee,ie),ie})}function P(j,oe){const ue=v(j,oe);return ue?Promise.reject(ue):Promise.resolve()}function M(j){const oe=ge.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(j):j()}function T(j,oe){let ue;const[Ee,Ae,E]=IM(j,oe);ue=il(Ee.reverse(),"beforeRouteLeave",j,oe);for(const N of Ee)N.leaveGuards.forEach(k=>{ue.push(oi(k,j,oe))});const D=P.bind(null,j,oe);return ue.push(D),we(ue).then(()=>{ue=[];for(const N of s.list())ue.push(oi(N,j,oe));return ue.push(D),we(ue)}).then(()=>{ue=il(Ae,"beforeRouteUpdate",j,oe);for(const N of Ae)N.updateGuards.forEach(k=>{ue.push(oi(k,j,oe))});return ue.push(D),we(ue)}).then(()=>{ue=[];for(const N of E)if(N.beforeEnter)if(vn(N.beforeEnter))for(const k of N.beforeEnter)ue.push(oi(k,j,oe));else ue.push(oi(N.beforeEnter,j,oe));return ue.push(D),we(ue)}).then(()=>(j.matched.forEach(N=>N.enterCallbacks={}),ue=il(E,"beforeRouteEnter",j,oe),ue.push(D),we(ue))).then(()=>{ue=[];for(const N of o.list())ue.push(oi(N,j,oe));return ue.push(D),we(ue)}).catch(N=>Pn(N,8)?N:Promise.reject(N))}function F(j,oe,ue){for(const Ee of a.list())M(()=>Ee(j,oe,ue))}function B(j,oe,ue,Ee,Ae){const E=v(j,oe);if(E)return E;const D=oe===Mn,N=Mr?history.state:{};ue&&(Ee||D?r.replace(j.fullPath,Je({scroll:D&&N&&N.scroll},Ae)):r.push(j.fullPath,Ae)),l.value=j,W(j,oe,ue,D),de()}let U;function I(){U||(U=r.listen((j,oe,ue)=>{if(!ye.listening)return;const Ee=d(j),Ae=w(Ee);if(Ae){R(Je(Ae,{replace:!0}),Ee).catch(gs);return}c=Ee;const E=l.value;Mr&&Xy(Pf(E.fullPath,ue.delta),Ca()),T(Ee,E).catch(D=>Pn(D,12)?D:Pn(D,2)?(R(D.to,Ee).then(N=>{Pn(N,20)&&!ue.delta&&ue.type===Us.pop&&r.go(-1,!1)}).catch(gs),Promise.reject()):(ue.delta&&r.go(-ue.delta,!1),Y(D,Ee,E))).then(D=>{D=D||B(Ee,E,!1),D&&(ue.delta&&!Pn(D,8)?r.go(-ue.delta,!1):ue.type===Us.pop&&Pn(D,20)&&r.go(-1,!1)),F(Ee,E,D)}).catch(gs)}))}let z=ns(),K=ns(),q;function Y(j,oe,ue){de(j);const Ee=K.list();return Ee.length?Ee.forEach(Ae=>Ae(j,oe,ue)):console.error(j),Promise.reject(j)}function ce(){return q&&l.value!==Mn?Promise.resolve():new Promise((j,oe)=>{z.add([j,oe])})}function de(j){return q||(q=!j,I(),z.list().forEach(([oe,ue])=>j?ue(j):oe()),z.reset()),j}function W(j,oe,ue,Ee){const{scrollBehavior:Ae}=t;if(!Mr||!Ae)return Promise.resolve();const E=!ue&&jy(Pf(j.fullPath,0))||(Ee||!ue)&&history.state&&history.state.scroll||null;return Zi().then(()=>Ae(j,oe,E)).then(D=>D&&Wy(D)).catch(D=>Y(D,j,oe))}const Q=j=>r.go(j);let _e;const ge=new Set,ye={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:x,resolve:d,options:t,push:y,replace:S,go:Q,back:()=>Q(-1),forward:()=>Q(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:ce,install(j){const oe=this;j.component("RouterLink",CM),j.component("RouterView",Mm),j.config.globalProperties.$router=oe,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>et(l)}),Mr&&!_e&&l.value===Mn&&(_e=!0,y(r.location).catch(Ae=>{}));const ue={};for(const Ae in Mn)Object.defineProperty(ue,Ae,{get:()=>l.value[Ae],enumerable:!0});j.provide(pu,oe),j.provide(ym,ks(ue)),j.provide(hc,l);const Ee=j.unmount;ge.add(j),j.unmount=function(){ge.delete(j),ge.size<1&&(c=Mn,U&&U(),U=null,l.value=Mn,_e=!1,q=!1),Ee()}}};function we(j){return j.reduce((oe,ue)=>oe.then(()=>M(ue)),Promise.resolve())}return ye}function IM(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>kr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>kr(c,l))||r.push(l))}return[n,i,r]}const Wf=[{name:"contact",path:"/contact",meta:{},alias:[],redirect:void 0,component:()=>ci(()=>import("./contact.cec53f40.js"),[],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>ci(()=>import("./index.1f253022.js"),[],import.meta.url).then(t=>t.default||t)},{name:"projects-flock",path:"/projects/flock",meta:{},alias:[],redirect:void 0,component:()=>ci(()=>import("./flock.7d84a8ed.js"),["./flock.7d84a8ed.js","./flock.89ac26ab.css"],import.meta.url).then(t=>t.default||t)},{name:"projects-notebooks-inverse-kinematic-approximations",path:"/projects/notebooks/inverse-kinematic-approximations",meta:{},alias:[],redirect:void 0,component:()=>ci(()=>import("./inverse-kinematic-approximations.aecfbeef.js"),["./inverse-kinematic-approximations.aecfbeef.js","./NotebookWrapper.5ead1865.js","./NotebookWrapper.52681101.css"],import.meta.url).then(t=>t.default||t)},{name:"projects-notebooks-kinematics",path:"/projects/notebooks/kinematics",meta:{},alias:[],redirect:void 0,component:()=>ci(()=>import("./kinematics.968a4a92.js"),["./kinematics.968a4a92.js","./NotebookWrapper.5ead1865.js","./NotebookWrapper.52681101.css"],import.meta.url).then(t=>t.default||t)}],NM={scrollBehavior(t,e,n){const i=at();let r=n||void 0;if(!r&&e&&t&&t.meta.scrollToTop!==!1&&OM(e,t)&&(r={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:Xf(t.hash)}}const s=a=>!!(a.meta.pageTransition??oc),o=s(e)&&s(t)?"page:transition:finish":"page:finish";return new Promise(a=>{i.hooks.hookOnce(o,async()=>{await Zi(),t.hash&&(r={el:t.hash,top:Xf(t.hash)}),a(r)})})}};function Xf(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function OM(t,e){const n=e.matched.every((i,r)=>{var s,o,a;return((s=i.components)==null?void 0:s.default)===((a=(o=t.matched[r])==null?void 0:o.components)==null?void 0:a.default)});return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const FM={},Nt={...FM,...NM},BM=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const i=at(),r=Si();if(([e,n]=oa(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=du({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=r.beforeResolve(c=>{if(a(),c===t){const u=r.afterEach(async()=>{u(),await i.runWithContext(()=>br(o)),window.history.pushState({},"",t.fullPath)});return!1}})},HM=[BM],vs={};function kM(t,e,n){const{pathname:i,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){const l=s.includes(t.slice(o))?t.slice(o).length:1;let c=s.slice(l);return c[0]!=="/"&&(c="/"+c),mf(c,"")}const a=n||mf(i,t);return a+(a.includes("?")?"":r)+s}const zM=Ei({name:"nuxt:router",enforce:"pre",async setup(t){var x,m;let e,n,i=uu().app.baseURL;Nt.hashMode&&!i.includes("#")&&(i+="#");const r=((x=Nt.history)==null?void 0:x.call(Nt,i))??(Nt.hashMode?Ky(i):fm(i)),s=((m=Nt.routes)==null?void 0:m.call(Nt,Wf))??Wf;let o;const a=kM(i,window.location,t.payload.path),l=UM({...Nt,scrollBehavior:(d,_,v)=>{var y;if(_===Mn){o=v;return}return l.options.scrollBehavior=Nt.scrollBehavior,(y=Nt.scrollBehavior)==null?void 0:y.call(Nt,d,Mn,o||v)},history:r,routes:s});t.vueApp.use(l);const c=ws(l.currentRoute.value);l.afterEach((d,_)=>{c.value=_}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=ws(l.resolve(a)),f=()=>{u.value=l.currentRoute.value};t.hook("page:finish",f),l.afterEach((d,_)=>{var v,y,S,w;((y=(v=d.matched[0])==null?void 0:v.components)==null?void 0:y.default)===((w=(S=_.matched[0])==null?void 0:S.components)==null?void 0:w.default)&&f()});const h={};for(const d in u.value)Object.defineProperty(h,d,{get:()=>u.value[d]});t._route=ks(h),t._middleware=t._middleware||{global:[],named:{}};const p=Ra();try{[e,n]=oa(()=>l.isReady()),await e,n()}catch(d){[e,n]=oa(()=>t.runWithContext(()=>br(d))),await e,n()}const g=Ay("_layout");return l.beforeEach(async(d,_)=>{var v;d.meta=Xn(d.meta),t.isHydrating&&g.value&&!qi(d.meta.layout)&&(d.meta.layout=g.value),t._processingMiddleware=!0;{const y=new Set([...HM,...t._middleware.global]);for(const S of d.matched){const w=S.meta.middleware;if(w)if(Array.isArray(w))for(const R of w)y.add(R);else y.add(w)}for(const S of y){const w=typeof S=="string"?t._middleware.named[S]||await((v=vs[S])==null?void 0:v.call(vs).then(P=>P.default||P)):S;if(!w)throw new Error(`Unknown route middleware: '${S}'.`);const R=await t.runWithContext(()=>w(d,_));if(!t.payload.serverRendered&&t.isHydrating&&(R===!1||R instanceof Error)){const P=R||cc({statusCode:404,statusMessage:`Page Not Found: ${a}`});return await t.runWithContext(()=>br(P)),!1}if(R||R===!1)return R}}}),l.onError(()=>{delete t._processingMiddleware}),l.afterEach(async(d,_,v)=>{delete t._processingMiddleware,!t.isHydrating&&p.value&&await t.runWithContext(Py),d.matched.length===0&&await t.runWithContext(()=>br(cc({statusCode:404,fatal:!1,statusMessage:`Page not found: ${d.fullPath}`})))}),t.hooks.hookOnce("app:created",async()=>{try{await l.replace({...l.resolve(a),name:void 0,force:!0}),l.options.scrollBehavior=Nt.scrollBehavior}catch(d){await t.runWithContext(()=>br(d))}}),{provide:{router:l}}}}),GM=Ei({name:"nuxt:payload",setup(t){vy()&&(t.hooks.hook("link:prefetch",async e=>{qs(e).protocol||await Tf(e)}),Si().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const i=await Tf(e.path);i&&Object.assign(t.static.data,i.data)}))}}),VM=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Em;const $s=t=>Em=t,Sm=Symbol();function pc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xs||(xs={}));function WM(){const t=Hh(!0),e=t.run(()=>Ze({}));let n=[],i=[];const r=ya({install(s){$s(r),r._a=s,s.provide(Sm,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!VM?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const bm=()=>{};function jf(t,e,n,i=bm){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&kh()&&Zg(r),r}function er(t,...e){t.slice().forEach(n=>{n(...e)})}const XM=t=>t();function mc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];pc(r)&&pc(i)&&t.hasOwnProperty(n)&&!it(i)&&!zn(i)?t[n]=mc(r,i):t[n]=i}return t}const jM=Symbol();function qM(t){return!pc(t)||!t.hasOwnProperty(jM)}const{assign:ii}=Object;function $M(t){return!!(it(t)&&t.effect)}function YM(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=w_(n.state.value[t]);return ii(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=ya(mt(()=>{$s(n);const p=n._s.get(t);return o[h].call(p,p)})),f),{}))}return l=Tm(t,c,e,n,i,!0),l}function Tm(t,e,n={},i,r,s){let o;const a=ii({actions:{}},n),l={deep:!0};let c,u,f=[],h=[],p;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),Ze({});let x;function m(P){let M;c=u=!1,typeof P=="function"?(P(i.state.value[t]),M={type:xs.patchFunction,storeId:t,events:p}):(mc(i.state.value[t],P),M={type:xs.patchObject,payload:P,storeId:t,events:p});const T=x=Symbol();Zi().then(()=>{x===T&&(c=!0)}),u=!0,er(f,M,i.state.value[t])}const d=s?function(){const{state:M}=n,T=M?M():{};this.$patch(F=>{ii(F,T)})}:bm;function _(){o.stop(),f=[],h=[],i._s.delete(t)}function v(P,M){return function(){$s(i);const T=Array.from(arguments),F=[],B=[];function U(K){F.push(K)}function I(K){B.push(K)}er(h,{args:T,name:P,store:S,after:U,onError:I});let z;try{z=M.apply(this&&this.$id===t?this:S,T)}catch(K){throw er(B,K),K}return z instanceof Promise?z.then(K=>(er(F,K),K)).catch(K=>(er(B,K),Promise.reject(K))):(er(F,z),z)}}const y={_p:i,$id:t,$onAction:jf.bind(null,h),$patch:m,$reset:d,$subscribe(P,M={}){const T=jf(f,P,M.detached,()=>F()),F=o.run(()=>zi(()=>i.state.value[t],B=>{(M.flush==="sync"?u:c)&&P({storeId:t,type:xs.direct,events:p},B)},ii({},l,M)));return T},$dispose:_},S=Xn(y);i._s.set(t,S);const w=i._a&&i._a.runWithContext||XM,R=i._e.run(()=>(o=Hh(),w(()=>o.run(e))));for(const P in R){const M=R[P];if(it(M)&&!$M(M)||zn(M))s||(g&&qM(M)&&(it(M)?M.value=g[P]:mc(M,g[P])),i.state.value[t][P]=M);else if(typeof M=="function"){const T=v(P,M);R[P]=T,a.actions[P]=M}}return ii(S,R),ii(qe(S),R),Object.defineProperty(S,"$state",{get:()=>i.state.value[t],set:P=>{m(M=>{ii(M,P)})}}),i._p.forEach(P=>{ii(S,o.run(()=>P({store:S,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(S.$state,g),c=!0,u=!0,S}function KM(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,l){const c=nu();return a=a||(c?Ht(Sm,null):null),a&&$s(a),a=Em,a._s.has(i)||(s?Tm(i,e,r,a):YM(i,r,a)),a._s.get(i)}return o.$id=i,o}function ZM(t){{t=qe(t);const e={};for(const n in t){const i=t[n];(it(i)||zn(i))&&(e[n]=qc(t,n))}return e}}const gc=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),JM=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),QM=t=>{const e=at();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{gc(t)}):gc(t)};async function Am(t,e=Si()){const{path:n,matched:i}=e.resolve(t);if(!i.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const r=e._preloadPromises=e._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>Am(t,e));e._routePreloaded.add(n);const s=i.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of s){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}function eE(t={}){const e=t.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:at().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const tE=(...t)=>t.find(e=>e!==void 0),nE="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function iE(t){const e=t.componentName||"NuxtLink",n=(i,r)=>{if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;const s=t.trailingSlash==="append"?Wp:cu;if(typeof i=="string")return s(i,!0);const o="path"in i?i.path:r(i).path;return{...i,name:void 0,path:s(o,!0)}};return Mi({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(i,{slots:r}){const s=Si(),o=mt(()=>{const f=i.to||i.href||"";return n(f,s.resolve)}),a=mt(()=>i.external||i.target&&i.target!=="_self"?!0:typeof o.value=="object"?!1:o.value===""||Kr(o.value,{acceptRelative:!0})),l=Ze(!1),c=Ze(null),u=f=>{var h;c.value=i.custom?(h=f==null?void 0:f.$el)==null?void 0:h.nextElementSibling:f==null?void 0:f.$el};if(i.prefetch!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!oE()){const h=at();let p,g=null;Gs(()=>{const x=sE();QM(()=>{p=gc(()=>{var m;(m=c==null?void 0:c.value)!=null&&m.tagName&&(g=x.observe(c.value,async()=>{g==null||g(),g=null;const d=typeof o.value=="string"?o.value:s.resolve(o.value).fullPath;await Promise.all([h.hooks.callHook("link:prefetch",d).catch(()=>{}),!a.value&&Am(o.value,s).catch(()=>{})]),l.value=!0}))})})}),Vs(()=>{p&&JM(p),g==null||g(),g=null})}return()=>{var x,m;if(!a.value){const d={ref:u,to:o.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(l.value&&(d.class=i.prefetchedClass||t.prefetchedClass),d.rel=i.rel),_n(ov("RouterLink"),d,r.default)}const f=typeof o.value=="object"?((x=s.resolve(o.value))==null?void 0:x.href)??null:o.value||null,h=i.target||null,p=i.noRel?null:tE(i.rel,t.externalRelAttribute,f?nE:"")||null,g=()=>Cy(f,{replace:i.replace});return i.custom?r.default?r.default({href:f,navigate:g,get route(){if(!f)return;const d=qs(f);return{path:d.pathname,fullPath:d.pathname,get query(){return Vp(d.search)},hash:d.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:f}},rel:p,target:h,isExternal:a.value,isActive:!1,isExactActive:!1}):null:_n("a",{ref:c,href:f,rel:p,target:h},(m=r.default)==null?void 0:m.call(r))}}})}const rE=iE({componentName:"NuxtLink"});function sE(){const t=at();if(t._observer)return t._observer;let e=null;const n=new Map,i=(s,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),n.set(s,o),e.observe(s),()=>{n.delete(s),e.unobserve(s),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:i}}function oE(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const aE=Ei(t=>{const e=WM();return t.vueApp.use(e),$s(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}),lE=Ei({name:"nuxt:global-components"}),cE=Ei({name:"nuxt:head",setup(t){const n=cy();n.push(hy),t.vueApp.use(n);{let i=!0;const r=()=>{i=!1,n.hooks.callHook("entries:updated",n)};n.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!i}),t.hooks.hook("page:start",()=>{i=!0}),t.hooks.hook("page:finish",r),t.hooks.hook("app:suspense:resolve",r)}}}),mo={},uE=Ei({name:"nuxt:prefetch",setup(t){const e=Si();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const i=(r=n==null?void 0:n.meta)==null?void 0:r.layout;i&&typeof mo[i]=="function"&&await mo[i]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,l,c;if(Kr(n))return;const i=e.resolve(n);if(!i)return;const r=(o=i==null?void 0:i.meta)==null?void 0:o.layout;let s=Array.isArray((a=i==null?void 0:i.meta)==null?void 0:a.middleware)?(l=i==null?void 0:i.meta)==null?void 0:l.middleware:[(c=i==null?void 0:i.meta)==null?void 0:c.middleware];s=s.filter(u=>typeof u=="string");for(const u of s)typeof vs[u]=="function"&&vs[u]();r&&typeof mo[r]=="function"&&mo[r]()})}}),fE=Ei({name:"nuxt:chunk-reload",setup(t){const e=Si(),n=uu(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:r})=>{i.add(r)}),e.onError((r,s)=>{if(i.has(r)){const a="href"in s&&s.href.startsWith("#")?n.app.baseURL+s.href:js(n.app.baseURL,s.fullPath);eE({path:a,persistState:!0})}})}}),dE=[Dy,zM,GM,aE,lE,cE,uE,fE];function wm(t){const e=typeof t;return t!=null&&(e==="object"||e==="function")}const hE=typeof global=="object"&&global!==null&&global.Object===Object&&global,pE=typeof globalThis=="object"&&globalThis!==null&&globalThis.Object==Object&&globalThis,mE=typeof self=="object"&&self!==null&&self.Object===Object&&self,go=pE||hE||mE||Function("return this")();function gE(t,e,n){let i,r,s,o,a,l,c=0,u=!1,f=!1,h=!0;const p=!e&&e!==0&&typeof go.requestAnimationFrame=="function";if(typeof t!="function")throw new TypeError("Expected a function");e=+e||0,wm(n)&&(u=!!n.leading,f="maxWait"in n,s=f?Math.max(+n.maxWait||0,e):s,h="trailing"in n?!!n.trailing:h);function g(T){const F=i,B=r;return i=r=void 0,c=T,o=t.apply(B,F),o}function x(T,F){return p?(go.cancelAnimationFrame(a),go.requestAnimationFrame(T)):setTimeout(T,F)}function m(T){if(p)return go.cancelAnimationFrame(T);clearTimeout(T)}function d(T){return c=T,a=x(y,e),u?g(T):o}function _(T){const F=T-l,B=T-c,U=e-F;return f?Math.min(U,s-B):U}function v(T){const F=T-l,B=T-c;return l===void 0||F>=e||F<0||f&&B>=s}function y(){const T=Date.now();if(v(T))return S(T);a=x(y,_(T))}function S(T){return a=void 0,h&&i?g(T):(i=r=void 0,o)}function w(){a!==void 0&&m(a),c=0,i=l=r=a=void 0}function R(){return a===void 0?o:S(Date.now())}function P(){return a!==void 0}function M(...T){const F=Date.now(),B=v(F);if(i=T,r=this,l=F,B){if(a===void 0)return d(l);if(f)return a=x(y,e),g(l)}return a===void 0&&(a=x(y,e)),o}return M.cancel=w,M.flush=R,M.pending=P,M}function tr(t,e,n){let i=!0,r=!0;if(typeof t!="function")throw new TypeError("Expected a function");return n&&wm(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),gE(t,e,{leading:i,trailing:r,maxWait:e})}function Rm(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}var _E=function(){},qf=function(){};const _c=(t,e,n)=>Math.min(Math.max(n,t),e),rl=.001,vE=.01,$f=10,xE=.05,yE=1;function ME({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s;_E(t<=$f*1e3);let o=1-e;o=_c(xE,yE,o),t=_c(vE,$f,t/1e3),o<1?(r=c=>{const u=c*o,f=u*t,h=u-n,p=vc(c,o),g=Math.exp(-f);return rl-h/p*g},s=c=>{const f=c*o*t,h=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-f),x=vc(Math.pow(c,2),o);return(-r(c)+rl>0?-1:1)*((h-p)*g)/x}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-rl+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=SE(r,s,a);if(t=t*1e3,isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const EE=12;function SE(t,e,n){let i=n;for(let r=1;r<EE;r++)i=i-t(i)/e(i);return i}function vc(t,e){return t*Math.sqrt(1-e*e)}const bE=["duration","bounce"],TE=["stiffness","damping","mass"];function Yf(t,e){return e.some(n=>t[n]!==void 0)}function AE(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!Yf(t,TE)&&Yf(t,bE)){const n=ME(t);e=Object.assign(Object.assign(Object.assign({},e),n),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function mu(t){var{from:e=0,to:n=1,restSpeed:i=2,restDelta:r}=t,s=Rm(t,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:a,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:h}=AE(s),p=Kf,g=Kf;function x(){const m=u?-(u/1e3):0,d=n-e,_=l/(2*Math.sqrt(a*c)),v=Math.sqrt(a/c)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-e)/100,.4)),_<1){const y=vc(v,_);p=S=>{const w=Math.exp(-_*v*S);return n-w*((m+_*v*d)/y*Math.sin(y*S)+d*Math.cos(y*S))},g=S=>{const w=Math.exp(-_*v*S);return _*v*w*(Math.sin(y*S)*(m+_*v*d)/y+d*Math.cos(y*S))-w*(Math.cos(y*S)*(m+_*v*d)-y*d*Math.sin(y*S))}}else if(_===1)p=y=>n-Math.exp(-v*y)*(d+(m+v*d)*y);else{const y=v*Math.sqrt(_*_-1);p=S=>{const w=Math.exp(-_*v*S),R=Math.min(y*S,300);return n-w*((m+_*v*d)*Math.sinh(R)+y*d*Math.cosh(R))/y}}}return x(),{next:m=>{const d=p(m);if(h)o.done=m>=f;else{const _=g(m)*1e3,v=Math.abs(_)<=i,y=Math.abs(n-d)<=r;o.done=v&&y}return o.value=o.done?n:d,o},flipTarget:()=>{u=-u,[e,n]=[n,e],x()}}}mu.needsInterpolation=(t,e)=>typeof t=="string"||typeof e=="string";const Kf=t=>0,Cm=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},gu=(t,e,n)=>-n*t+n*e+t,Pm=(t,e)=>n=>Math.max(Math.min(n,e),t),ys=t=>t%1?Number(t.toFixed(5)):t,fa=/(-)?([\d]*\.?[\d])+/g,xc=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,wE=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ys(t){return typeof t=="string"}const Pa={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Lm=Object.assign(Object.assign({},Pa),{transform:Pm(0,1)});Object.assign(Object.assign({},Pa),{default:1});const RE=t=>({test:e=>Ys(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ms=RE("%");Object.assign(Object.assign({},Ms),{parse:t=>Ms.parse(t)/100,transform:t=>Ms.transform(t*100)});const _u=(t,e)=>n=>!!(Ys(n)&&wE.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Dm=(t,e,n)=>i=>{if(!Ys(i))return i;const[r,s,o,a]=i.match(fa);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Hi={test:_u("hsl","hue"),parse:Dm("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ms.transform(ys(e))+", "+Ms.transform(ys(n))+", "+ys(Lm.transform(i))+")"},CE=Pm(0,255),sl=Object.assign(Object.assign({},Pa),{transform:t=>Math.round(CE(t))}),ui={test:_u("rgb","red"),parse:Dm("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+sl.transform(t)+", "+sl.transform(e)+", "+sl.transform(n)+", "+ys(Lm.transform(i))+")"};function PE(t){let e="",n="",i="",r="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),i=t.substr(5,2),r=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),i=t.substr(3,1),r=t.substr(4,1),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const yc={test:_u("#"),parse:PE,transform:ui.transform},La={test:t=>ui.test(t)||yc.test(t)||Hi.test(t),parse:t=>ui.test(t)?ui.parse(t):Hi.test(t)?Hi.parse(t):yc.parse(t),transform:t=>Ys(t)?t:t.hasOwnProperty("red")?ui.transform(t):Hi.transform(t)},Um="${c}",Im="${n}";function LE(t){var e,n,i,r;return isNaN(t)&&Ys(t)&&((n=(e=t.match(fa))===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0)+((r=(i=t.match(xc))===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0)>0}function Nm(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0;const i=t.match(xc);i&&(n=i.length,t=t.replace(xc,Um),e.push(...i.map(La.parse)));const r=t.match(fa);return r&&(t=t.replace(fa,Im),e.push(...r.map(Pa.parse))),{values:e,numColors:n,tokenised:t}}function Om(t){return Nm(t).values}function Fm(t){const{values:e,numColors:n,tokenised:i}=Nm(t),r=e.length;return s=>{let o=i;for(let a=0;a<r;a++)o=o.replace(a<n?Um:Im,a<n?La.transform(s[a]):ys(s[a]));return o}}const DE=t=>typeof t=="number"?0:t;function UE(t){const e=Om(t);return Fm(t)(e.map(DE))}const Bm={test:LE,parse:Om,createTransformer:Fm,getAnimatableNone:UE};function ol(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Zf({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=ol(l,a,t+1/3),s=ol(l,a,t),o=ol(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const IE=(t,e,n)=>{const i=t*t,r=e*e;return Math.sqrt(Math.max(0,n*(r-i)+i))},NE=[yc,ui,Hi],Jf=t=>NE.find(e=>e.test(t)),Hm=(t,e)=>{let n=Jf(t),i=Jf(e),r=n.parse(t),s=i.parse(e);n===Hi&&(r=Zf(r),n=ui),i===Hi&&(s=Zf(s),i=ui);const o=Object.assign({},r);return a=>{for(const l in o)l!=="alpha"&&(o[l]=IE(r[l],s[l],a));return o.alpha=gu(r.alpha,s.alpha,a),n.transform(o)}},OE=t=>typeof t=="number",FE=(t,e)=>n=>e(t(n)),km=(...t)=>t.reduce(FE);function zm(t,e){return OE(t)?n=>gu(t,e,n):La.test(t)?Hm(t,e):Vm(t,e)}const Gm=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,o)=>zm(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}},BE=(t,e)=>{const n=Object.assign(Object.assign({},t),e),i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=zm(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}};function Qf(t){const e=Bm.parse(t),n=e.length;let i=0,r=0,s=0;for(let o=0;o<n;o++)i||typeof e[o]=="number"?i++:e[o].hue!==void 0?s++:r++;return{parsed:e,numNumbers:i,numRGB:r,numHSL:s}}const Vm=(t,e)=>{const n=Bm.createTransformer(e),i=Qf(t),r=Qf(e);return i.numHSL===r.numHSL&&i.numRGB===r.numRGB&&i.numNumbers>=r.numNumbers?km(Gm(i.parsed,r.parsed),n):o=>`${o>0?e:t}`},HE=(t,e)=>n=>gu(t,e,n);function kE(t){if(typeof t=="number")return HE;if(typeof t=="string")return La.test(t)?Hm:Vm;if(Array.isArray(t))return Gm;if(typeof t=="object")return BE}function zE(t,e,n){const i=[],r=n||kE(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]:e;a=km(l,a)}i.push(a)}return i}function GE([t,e],[n]){return i=>n(Cm(t,e,i))}function VE(t,e){const n=t.length,i=n-1;return r=>{let s=0,o=!1;if(r<=t[0]?o=!0:r>=t[i]&&(s=i-1,o=!0),!o){let l=1;for(;l<n&&!(t[l]>r||l===i);l++);s=l-1}const a=Cm(t[s],t[s+1],r);return e[s](a)}}function En(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;qf(s===e.length),qf(!i||!Array.isArray(i)||i.length===s-1),t[0]>t[s-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const o=zE(e,i,r),a=s===2?GE(t,o):VE(t,o);return n?l=>a(_c(t[0],t[s-1],l)):a}const WE=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,XE=t=>e=>Math.pow(e,t),jE=t=>e=>e*e*((t+1)*e-t),qE=t=>{const e=jE(t);return n=>(n*=2)<1?.5*e(n):.5*(2-Math.pow(2,-10*(n-1)))},$E=1.525,YE=XE(2),KE=WE(YE);qE($E);function ZE(t,e){return t.map(()=>e||KE).splice(0,t.length-1)}function JE(t){const e=t.length;return t.map((n,i)=>i!==0?i/(e-1):0)}function QE(t,e){return t.map(n=>n*e)}function Vo({from:t=0,to:e=1,ease:n,offset:i,duration:r=300}){const s={done:!1,value:t},o=Array.isArray(e)?e:[t,e],a=QE(i&&i.length===o.length?i:JE(o),r);function l(){return En(a,o,{ease:Array.isArray(n)?n:ZE(o,n)})}let c=l();return{next:u=>(s.value=c(u),s.done=u>=r,s),flipTarget:()=>{o.reverse(),c=l()}}}function eS({velocity:t=0,from:e=0,power:n=.8,timeConstant:i=350,restDelta:r=.5,modifyTarget:s}){const o={done:!1,value:e};let a=n*t;const l=e+a,c=s===void 0?l:s(l);return c!==l&&(a=c-e),{next:u=>{const f=-a*Math.exp(-u/i);return o.done=!(f>r||f<-r),o.value=o.done?c:c+f,o},flipTarget:()=>{}}}const ed={keyframes:Vo,spring:mu,decay:eS};function tS(t){if(Array.isArray(t.to))return Vo;if(ed[t.type])return ed[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?Vo:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?mu:Vo}const Wm=1/60*1e3,nS=typeof performance<"u"?()=>performance.now():()=>Date.now(),Xm=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(nS()),Wm);function iS(t){let e=[],n=[],i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&r,h=f?e:n;return c&&o.add(l),h.indexOf(l)===-1&&(h.push(l),f&&r&&(i=e.length)),l},cancel:l=>{const c=n.indexOf(l);c!==-1&&n.splice(c,1),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.length=0,i=e.length,i)for(let c=0;c<i;c++){const u=e[c];u(l),o.has(u)&&(a.schedule(u),t())}r=!1,s&&(s=!1,a.process(l))}};return a}const rS=40;let Mc=!0,Is=!1,Ec=!1;const Es={delta:0,timestamp:0},Ks=["read","update","preRender","render","postRender"],Da=Ks.reduce((t,e)=>(t[e]=iS(()=>Is=!0),t),{}),sS=Ks.reduce((t,e)=>{const n=Da[e];return t[e]=(i,r=!1,s=!1)=>(Is||lS(),n.schedule(i,r,s)),t},{}),oS=Ks.reduce((t,e)=>(t[e]=Da[e].cancel,t),{});Ks.reduce((t,e)=>(t[e]=()=>Da[e].process(Es),t),{});const aS=t=>Da[t].process(Es),jm=t=>{Is=!1,Es.delta=Mc?Wm:Math.max(Math.min(t-Es.timestamp,rS),1),Es.timestamp=t,Ec=!0,Ks.forEach(aS),Ec=!1,Is&&(Mc=!1,Xm(jm))},lS=()=>{Is=!0,Mc=!0,Ec||Xm(jm)},cS=sS;function qm(t,e,n=0){return t-e-n}function uS(t,e,n=0,i=!0){return i?qm(e+-t,e,n):e-(t-e)+n}function fS(t,e,n,i){return i?t>=e+n:t<=-n}const dS=t=>{const e=({delta:n})=>t(n);return{start:()=>cS.update(e,!0),stop:()=>oS.update(e)}};function Sc(t){var e,n,{from:i,autoplay:r=!0,driver:s=dS,elapsed:o=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:f,onComplete:h,onRepeat:p,onUpdate:g}=t,x=Rm(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:m}=x,d,_=0,v=x.duration,y,S=!1,w=!0,R;const P=tS(x);!((n=(e=P).needsInterpolation)===null||n===void 0)&&n.call(e,i,m)&&(R=En([0,100],[i,m],{clamp:!1}),i=0,m=100);const M=P(Object.assign(Object.assign({},x),{from:i,to:m}));function T(){_++,l==="reverse"?(w=_%2===0,o=uS(o,v,c,w)):(o=qm(o,v,c),l==="mirror"&&M.flipTarget()),S=!1,p&&p()}function F(){d.stop(),h&&h()}function B(I){if(w||(I=-I),o+=I,!S){const z=M.next(Math.max(0,o));y=z.value,R&&(y=R(y)),S=w?z.done:o<=0}g==null||g(y),S&&(_===0&&(v??(v=o)),_<a?fS(o,v,c,w)&&T():F())}function U(){u==null||u(),d=s(B),d.start()}return r&&U(),{stop:()=>{f==null||f(),d.stop()}}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vu="154",nr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hS=0,td=1,pS=2,$m=1,mS=2,Fn=3,yi=0,zt=1,Hn=2,_i=0,Ir=1,nd=2,id=3,rd=4,gS=5,Er=100,_S=101,vS=102,sd=103,od=104,xS=200,yS=201,MS=202,ES=203,Ym=204,Km=205,SS=206,bS=207,TS=208,AS=209,wS=210,RS=0,CS=1,PS=2,bc=3,LS=4,DS=5,US=6,IS=7,Zm=0,NS=1,OS=2,Gn=0,FS=1,BS=2,HS=3,kS=4,zS=5,Jm=300,Gr=301,Vr=302,Tc=303,Ac=304,Ua=306,wc=1e3,hn=1001,Rc=1002,Ut=1003,ad=1004,al=1005,en=1006,GS=1007,Ns=1008,vi=1009,VS=1010,WS=1011,xu=1012,Qm=1013,fi=1014,di=1015,Os=1016,eg=1017,tg=1018,Vi=1020,XS=1021,pn=1023,jS=1024,qS=1025,Wi=1026,Wr=1027,$S=1028,ng=1029,YS=1030,ig=1031,rg=1033,ll=33776,cl=33777,ul=33778,fl=33779,ld=35840,cd=35841,ud=35842,fd=35843,KS=36196,dd=37492,hd=37496,pd=37808,md=37809,gd=37810,_d=37811,vd=37812,xd=37813,yd=37814,Md=37815,Ed=37816,Sd=37817,bd=37818,Td=37819,Ad=37820,wd=37821,dl=36492,ZS=36283,Rd=36284,Cd=36285,Pd=36286,sg=3e3,Xi=3001,JS=3200,QS=3201,eb=0,tb=1,ji="",Ge="srgb",Rn="srgb-linear",og="display-p3",hl=7680,nb=519,ib=512,rb=513,sb=514,ob=515,ab=516,lb=517,cb=518,ub=519,Ld=35044,Dd="300 es",Cc=1035,kn=2e3,da=2001;class Ji{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,Pc=180/Math.PI;function Zs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[t&255]+Tt[t>>8&255]+Tt[t>>16&255]+Tt[t>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[n&63|128]+Tt[n>>8&255]+"-"+Tt[n>>16&255]+Tt[n>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function It(t,e,n){return Math.max(e,Math.min(n,t))}function fb(t,e){return(t%e+e)%e}function ml(t,e,n){return(1-n)*t+n*e}function Ud(t){return(t&t-1)===0&&t!==0}function Lc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _o(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],d=r[6],_=r[1],v=r[4],y=r[7],S=r[2],w=r[5],R=r[8];return s[0]=o*x+a*_+l*S,s[3]=o*m+a*v+l*w,s[6]=o*d+a*y+l*R,s[1]=c*x+u*_+f*S,s[4]=c*m+u*v+f*w,s[7]=c*d+u*y+f*R,s[2]=h*x+p*_+g*S,s[5]=h*m+p*v+g*w,s[8]=h*d+p*y+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gl.makeScale(e,n)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,n){return this.premultiply(gl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new Ve;function ag(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ha(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Id={};function Ss(t){t in Id||(Id[t]=!0,console.warn(t))}function Nr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _l(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const db=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),hb=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function pb(t){return t.convertSRGBToLinear().applyMatrix3(hb)}function mb(t){return t.applyMatrix3(db).convertLinearToSRGB()}const gb={[Rn]:t=>t,[Ge]:t=>t.convertSRGBToLinear(),[og]:pb},_b={[Rn]:t=>t,[Ge]:t=>t.convertLinearToSRGB(),[og]:mb},on={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Rn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=gb[e],r=_b[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let rr;class lg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rr===void 0&&(rr=ha("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ha("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Nr(n[i]/255)*255):n[i]=Nr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vb=0;class cg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Zs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vl(r[o].image)):s.push(vl(r[o]))}else s=vl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xb=0;class Kt extends Ji{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=hn,r=hn,s=en,o=Ns,a=pn,l=vi,c=Kt.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Zs(),this.name="",this.source=new cg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Xi?Ge:ji),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wc:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wc:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ge?Xi:sg}set encoding(e){Ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xi?Ge:ji}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Jm;Kt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,S=(d+1)/2,w=(u+h)/4,R=(f+x)/4,P=(g+m)/4;return v>y&&v>S?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=R/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=P/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=R/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $i extends Ji{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ss("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xi?Ge:ji),this.texture=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:en,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ug extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yb extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*x,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const S=Math.sqrt(v),w=Math.atan2(S,d*_);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S}const y=a*_;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+x*y,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Nd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,f=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xl=new X,Nd=new Yi;class Js{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox),sr.applyMatrix4(e.matrixWorld),this.union(sr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Dn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Dn)}else r.boundingBox===null&&r.computeBoundingBox(),sr.copy(r.boundingBox),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),vo.subVectors(this.max,is),or.subVectors(e.a,is),ar.subVectors(e.b,is),lr.subVectors(e.c,is),Qn.subVectors(ar,or),ei.subVectors(lr,ar),Ci.subVectors(or,lr);let n=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-Ci.z,Ci.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,Ci.z,0,-Ci.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-Ci.y,Ci.x,0];return!yl(n,or,ar,lr,vo)||(n=[1,0,0,0,1,0,0,0,1],!yl(n,or,ar,lr,vo))?!1:(xo.crossVectors(Qn,ei),n=[xo.x,xo.y,xo.z],yl(n,or,ar,lr,vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new X,new X,new X,new X,new X,new X,new X,new X],Dn=new X,sr=new Js,or=new X,ar=new X,lr=new X,Qn=new X,ei=new X,Ci=new X,is=new X,vo=new X,xo=new X,Pi=new X;function yl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Pi.fromArray(t,s);const a=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),c=n.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Mb=new Js,rs=new X,Ml=new X;class Ia{constructor(e=new X,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Mb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);const n=rs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(rs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(Ml)),this.expandByPoint(rs.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new X,El=new X,yo=new X,ti=new X,Sl=new X,Mo=new X,bl=new X;class fg{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Un.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,n),Un.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){El.copy(e).add(n).multiplyScalar(.5),yo.copy(n).sub(e).normalize(),ti.copy(this.origin).sub(El);const s=e.distanceTo(n)*.5,o=-this.direction.dot(yo),a=ti.dot(this.direction),l=-ti.dot(yo),c=ti.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(El).addScaledVector(yo,h),p}intersectSphere(e,n){Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),r=Un.dot(Un)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,n,i,r,s){Sl.subVectors(n,e),Mo.subVectors(i,e),bl.crossVectors(Sl,Mo);let o=this.direction.dot(bl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const l=a*this.direction.dot(Mo.crossVectors(ti,Mo));if(l<0)return null;const c=a*this.direction.dot(Sl.cross(ti));if(c<0||l+c>o)return null;const u=-a*ti.dot(bl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,g,x,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,x=c*f;n[0]=h+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+x,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eb,e,Sb)}lookAt(e,n,i){const r=this.elements;return jt.subVectors(e,n),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ni.crossVectors(i,jt),ni.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ni.crossVectors(i,jt)),ni.normalize(),Eo.crossVectors(jt,ni),r[0]=ni.x,r[4]=Eo.x,r[8]=jt.x,r[1]=ni.y,r[5]=Eo.y,r[9]=jt.y,r[2]=ni.z,r[6]=Eo.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],_=i[3],v=i[7],y=i[11],S=i[15],w=r[0],R=r[4],P=r[8],M=r[12],T=r[1],F=r[5],B=r[9],U=r[13],I=r[2],z=r[6],K=r[10],q=r[14],Y=r[3],ce=r[7],de=r[11],W=r[15];return s[0]=o*w+a*T+l*I+c*Y,s[4]=o*R+a*F+l*z+c*ce,s[8]=o*P+a*B+l*K+c*de,s[12]=o*M+a*U+l*q+c*W,s[1]=u*w+f*T+h*I+p*Y,s[5]=u*R+f*F+h*z+p*ce,s[9]=u*P+f*B+h*K+p*de,s[13]=u*M+f*U+h*q+p*W,s[2]=g*w+x*T+m*I+d*Y,s[6]=g*R+x*F+m*z+d*ce,s[10]=g*P+x*B+m*K+d*de,s[14]=g*M+x*U+m*q+d*W,s[3]=_*w+v*T+y*I+S*Y,s[7]=_*R+v*F+y*z+S*ce,s[11]=_*P+v*B+y*K+S*de,s[15]=_*M+v*U+y*q+S*W,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],_=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,v=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,y=u*x*c-g*f*c+g*a*p-o*x*p-u*a*d+o*f*d,S=g*f*l-u*x*l-g*a*h+o*x*h+u*a*m-o*f*m,w=n*_+i*v+r*y+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=_*R,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*R,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=v*R,e[5]=(u*m*s-g*h*s+g*r*p-n*m*p-u*r*d+n*h*d)*R,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*R,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=y*R,e[9]=(g*f*s-u*x*s-g*i*p+n*x*p+u*i*d-n*f*d)*R,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*d+n*a*d)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*R,e[12]=S*R,e[13]=(u*x*r-g*f*r+g*i*h-n*x*h-u*i*m+n*f*m)*R,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,x=o*u,m=o*f,d=a*f,_=l*c,v=l*u,y=l*f,S=i.x,w=i.y,R=i.z;return r[0]=(1-(x+d))*S,r[1]=(p+y)*S,r[2]=(g-v)*S,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+d))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(g+v)*R,r[9]=(m-_)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=cr.set(r[0],r[1],r[2]).length();const o=cr.set(r[4],r[5],r[6]).length(),a=cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,f=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,n.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=kn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===kn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===da)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=kn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let g,x;if(a===kn)g=(o+s)*f,x=-2*f;else if(a===da)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const cr=new X,an=new Mt,Eb=new X(0,0,0),Sb=new X(1,1,1),ni=new X,Eo=new X,jt=new X,Od=new Mt,Fd=new Yi;class Na{constructor(e=0,n=0,i=0,r=Na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fd.setFromEuler(this),this.setFromQuaternion(Fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Na.DEFAULT_ORDER="XYZ";class dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bb=0;const Bd=new X,ur=new Yi,In=new Mt,So=new X,ss=new X,Tb=new X,Ab=new Yi,Hd=new X(1,0,0),kd=new X(0,1,0),zd=new X(0,0,1),wb={type:"added"},Gd={type:"removed"};class Gt extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new X,n=new Na,i=new Yi,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ve}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ur.setFromAxisAngle(e,n),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,n){return ur.setFromAxisAngle(e,n),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(kd,e)}rotateZ(e){return this.rotateOnAxis(zd,e)}translateOnAxis(e,n){return Bd.copy(e).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(kd,e)}translateZ(e){return this.translateOnAxis(zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?So.copy(e):So.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(ss,So,this.up):In.lookAt(So,ss,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(In),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Gd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Gd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,Tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new X(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new X,Nn=new X,Tl=new X,On=new X,fr=new X,dr=new X,Vd=new X,Al=new X,wl=new X,Rl=new X;let bo=!1;class un{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ln.subVectors(e,n),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ln.subVectors(r,n),Nn.subVectors(i,n),Tl.subVectors(e,n);const o=ln.dot(ln),a=ln.dot(Nn),l=ln.dot(Tl),c=Nn.dot(Nn),u=Nn.dot(Tl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,On),On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,n,i,r,s,o,a,l){return bo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bo=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,On),l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l}static isFrontFacing(e,n,i,r){return ln.subVectors(i,n),Nn.subVectors(e,n),ln.cross(Nn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),ln.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return bo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bo=!0),un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fr.subVectors(r,i),dr.subVectors(s,i),Al.subVectors(e,i);const l=fr.dot(Al),c=dr.dot(Al);if(l<=0&&c<=0)return n.copy(i);wl.subVectors(e,r);const u=fr.dot(wl),f=dr.dot(wl);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(fr,o);Rl.subVectors(e,s);const p=fr.dot(Rl),g=dr.dot(Rl);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(dr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Vd.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(Vd,a);const d=1/(m+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(fr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rb=0;class Qs extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Ir,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ym,this.blendDst=Km,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hl,this.stencilZFail=hl,this.stencilZPass=hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},To={h:0,s:0,l:0};function Cl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ge){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=on.workingColorSpace){return this.r=e,this.g=n,this.b=i,on.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=on.workingColorSpace){if(e=fb(e,1),n=It(n,0,1),i=It(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cl(o,s,e+1/3),this.g=Cl(o,s,e),this.b=Cl(o,s,e-1/3)}return on.toWorkingColorSpace(this,r),this}setStyle(e,n=Ge){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ge){const i=hg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=_l(e.r),this.g=_l(e.g),this.b=_l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ge){return on.fromWorkingColorSpace(At.copy(this),e),Math.round(It(At.r*255,0,255))*65536+Math.round(It(At.g*255,0,255))*256+Math.round(It(At.b*255,0,255))}getHexString(e=Ge){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=on.workingColorSpace){on.fromWorkingColorSpace(At.copy(this),n);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=on.workingColorSpace){return on.fromWorkingColorSpace(At.copy(this),n),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ge){on.fromWorkingColorSpace(At.copy(this),e);const n=At.r,i=At.g,r=At.b;return e!==Ge?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(cn),cn.h+=e,cn.s+=n,cn.l+=i,this.setHSL(cn.h,cn.s,cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cn),e.getHSL(To);const i=ml(cn.h,To.h,n),r=ml(cn.s,To.s,n),s=ml(cn.l,To.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Qe;Qe.NAMES=hg;class pg extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new X,Ao=new Xe;class rn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ld,this.updateRange={offset:0,count:-1},this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ao.fromBufferAttribute(this,n),Ao.applyMatrix3(e),this.setXY(n,Ao.x,Ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix3(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix4(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyNormalMatrix(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.transformDirection(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_o(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_o(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_o(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_o(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ld&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class mg extends rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gg extends rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vn extends rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Cb=0;const Jt=new Mt,Pl=new Gt,hr=new X,qt=new Js,os=new Js,yt=new X;class $n extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?gg:mg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,n,i){return Jt.makeTranslation(e,n,i),this.applyMatrix4(Jt),this}scale(e,n,i){return Jt.makeScale(e,n,i),this.applyMatrix4(Jt),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];os.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(qt.min,os.min),qt.expandByPoint(yt),yt.addVectors(qt.max,os.max),qt.expandByPoint(yt)):(qt.expandByPoint(os.min),qt.expandByPoint(os.max))}qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(hr.fromBufferAttribute(e,c),yt.add(hr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new X,u[T]=new X;const f=new X,h=new X,p=new X,g=new Xe,x=new Xe,m=new Xe,d=new X,_=new X;function v(T,F,B){f.fromArray(r,T*3),h.fromArray(r,F*3),p.fromArray(r,B*3),g.fromArray(o,T*2),x.fromArray(o,F*2),m.fromArray(o,B*2),h.sub(f),p.sub(f),x.sub(g),m.sub(g);const U=1/(x.x*m.y-m.x*x.y);isFinite(U)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(U),_.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(U),c[T].add(d),c[F].add(d),c[B].add(d),u[T].add(_),u[F].add(_),u[B].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,F=y.length;T<F;++T){const B=y[T],U=B.start,I=B.count;for(let z=U,K=U+I;z<K;z+=3)v(i[z+0],i[z+1],i[z+2])}const S=new X,w=new X,R=new X,P=new X;function M(T){R.fromArray(s,T*3),P.copy(R);const F=c[T];S.copy(F),S.sub(R.multiplyScalar(R.dot(F))).normalize(),w.crossVectors(P,F);const U=w.dot(u[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=U}for(let T=0,F=y.length;T<F;++T){const B=y[T],U=B.start,I=B.count;for(let z=U,K=U+I;z<K;z+=3)M(i[z+0]),M(i[z+1]),M(i[z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)yt.fromBufferAttribute(e,n),yt.normalize(),e.setXYZ(n,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wd=new Mt,Li=new fg,wo=new Ia,Xd=new X,pr=new X,mr=new X,gr=new X,Ll=new X,Ro=new X,Co=new Xe,Po=new Xe,Lo=new Xe,jd=new X,qd=new X,$d=new X,Do=new X,Uo=new X;class hi extends Gt{constructor(e=new $n,n=new pg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ll.fromBufferAttribute(f,e),o?Ro.addScaledVector(Ll,u):Ro.addScaledVector(Ll.sub(n),u))}n.add(Ro)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(wo.containsPoint(Li.origin)===!1&&(Li.intersectSphere(wo,Xd)===null||Li.origin.distanceToSquared(Xd)>(e.far-e.near)**2))&&(Wd.copy(s).invert(),Li.copy(e.ray).applyMatrix4(Wd),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Li)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,S=v;y<S;y+=3){const w=a.getX(y),R=a.getX(y+1),P=a.getX(y+2);r=Io(this,d,e,i,c,u,f,w,R,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Io(this,o,e,i,c,u,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,S=v;y<S;y+=3){const w=y,R=y+1,P=y+2;r=Io(this,d,e,i,c,u,f,w,R,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const _=m,v=m+1,y=m+2;r=Io(this,o,e,i,c,u,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Pb(t,e,n,i,r,s,o,a){let l;if(e.side===zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yi,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Uo);return c<n.near||c>n.far?null:{distance:c,point:Uo.clone(),object:t}}function Io(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,pr),t.getVertexPosition(l,mr),t.getVertexPosition(c,gr);const u=Pb(t,e,n,i,pr,mr,gr,Do);if(u){r&&(Co.fromBufferAttribute(r,a),Po.fromBufferAttribute(r,l),Lo.fromBufferAttribute(r,c),u.uv=un.getInterpolation(Do,pr,mr,gr,Co,Po,Lo,new Xe)),s&&(Co.fromBufferAttribute(s,a),Po.fromBufferAttribute(s,l),Lo.fromBufferAttribute(s,c),u.uv1=un.getInterpolation(Do,pr,mr,gr,Co,Po,Lo,new Xe),u.uv2=u.uv1),o&&(jd.fromBufferAttribute(o,a),qd.fromBufferAttribute(o,l),$d.fromBufferAttribute(o,c),u.normal=un.getInterpolation(Do,pr,mr,gr,jd,qd,$d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};un.getNormal(pr,mr,gr,f.normal),u.face=f}return u}class eo extends $n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(f,2));function g(x,m,d,_,v,y,S,w,R,P,M){const T=y/R,F=S/P,B=y/2,U=S/2,I=w/2,z=R+1,K=P+1;let q=0,Y=0;const ce=new X;for(let de=0;de<K;de++){const W=de*F-U;for(let Q=0;Q<z;Q++){const _e=Q*T-B;ce[x]=_e*_,ce[m]=W*v,ce[d]=I,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[d]=w>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Q/R),f.push(1-de/P),q+=1}}for(let de=0;de<P;de++)for(let W=0;W<R;W++){const Q=h+W+z*de,_e=h+W+z*(de+1),ge=h+(W+1)+z*(de+1),ye=h+(W+1)+z*de;l.push(Q,_e,ye),l.push(_e,ge,ye),Y+=6}a.addGroup(p,Y,M),p+=Y,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Dt(t){const e={};for(let n=0;n<t.length;n++){const i=Xr(t[n]);for(const r in i)e[r]=i[r]}return e}function Lb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _g(t){return t.getRenderTarget()===null?t.outputColorSpace:Rn}const Db={clone:Xr,merge:Dt};var Ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ib=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ub,this.fragmentShader=Ib,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=Lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class vg extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=kn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends vg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pc*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _r=-90,vr=1;class Nb extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Yt(_r,vr,e,n);r.layers=this.layers,this.add(r);const s=new Yt(_r,vr,e,n);s.layers=this.layers,this.add(s);const o=new Yt(_r,vr,e,n);o.layers=this.layers,this.add(o);const a=new Yt(_r,vr,e,n);a.layers=this.layers,this.add(a);const l=new Yt(_r,vr,e,n);l.layers=this.layers,this.add(l);const c=new Yt(_r,vr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Gn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class xg extends Kt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Gr,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ob extends $i{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ss("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xi?Ge:ji),this.texture=new xg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new eo(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:_i});s.uniforms.tEquirect.value=n;const o=new hi(r,s),a=n.minFilter;return n.minFilter===Ns&&(n.minFilter=en),new Nb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Dl=new X,Fb=new X,Bb=new Ve;class Ui{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Dl.subVectors(i,n).cross(Fb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Dl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Bb.getNormalMatrix(e),r=this.coplanarPoint(Dl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ia,No=new X;class yg{constructor(e=new Ui,n=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=kn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],d=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-d).normalize(),i[1].setComponents(l+s,h+c,m+p,y+d).normalize(),i[2].setComponents(l+o,h+u,m+g,y+_).normalize(),i[3].setComponents(l-o,h-u,m-g,y-_).normalize(),i[4].setComponents(l-a,h-f,m-x,y-v).normalize(),n===kn)i[5].setComponents(l+a,h+f,m+x,y+v).normalize();else if(n===da)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Hb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=t.SHORT;else if(f instanceof Uint32Array)g=t.UNSIGNED_INT;else if(f instanceof Int32Array)g=t.INT;else if(f instanceof Int8Array)g=t.BYTE;else if(f instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class yu extends $n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const _=d*h-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const v=_+c*d,y=_+c*(d+1),S=_+1+c*(d+1),w=_+1+c*d;p.push(v,y,w),p.push(y,S,w)}this.setIndex(p),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(x,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.width,e.height,e.widthSegments,e.heightSegments)}}var kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,aT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cT=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pT="gl_FragColor = linearToOutputTexel( gl_FragColor );",mT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ST=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,FT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BT=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,zT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,WT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,jT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$T=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,QT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,nA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_A=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,TA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,XA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$A=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZA=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ow=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:kb,alphahash_pars_fragment:zb,alphamap_fragment:Gb,alphamap_pars_fragment:Vb,alphatest_fragment:Wb,alphatest_pars_fragment:Xb,aomap_fragment:jb,aomap_pars_fragment:qb,begin_vertex:$b,beginnormal_vertex:Yb,bsdfs:Kb,iridescence_fragment:Zb,bumpmap_pars_fragment:Jb,clipping_planes_fragment:Qb,clipping_planes_pars_fragment:eT,clipping_planes_pars_vertex:tT,clipping_planes_vertex:nT,color_fragment:iT,color_pars_fragment:rT,color_pars_vertex:sT,color_vertex:oT,common:aT,cube_uv_reflection_fragment:lT,defaultnormal_vertex:cT,displacementmap_pars_vertex:uT,displacementmap_vertex:fT,emissivemap_fragment:dT,emissivemap_pars_fragment:hT,colorspace_fragment:pT,colorspace_pars_fragment:mT,envmap_fragment:gT,envmap_common_pars_fragment:_T,envmap_pars_fragment:vT,envmap_pars_vertex:xT,envmap_physical_pars_fragment:LT,envmap_vertex:yT,fog_vertex:MT,fog_pars_vertex:ET,fog_fragment:ST,fog_pars_fragment:bT,gradientmap_pars_fragment:TT,lightmap_fragment:AT,lightmap_pars_fragment:wT,lights_lambert_fragment:RT,lights_lambert_pars_fragment:CT,lights_pars_begin:PT,lights_toon_fragment:DT,lights_toon_pars_fragment:UT,lights_phong_fragment:IT,lights_phong_pars_fragment:NT,lights_physical_fragment:OT,lights_physical_pars_fragment:FT,lights_fragment_begin:BT,lights_fragment_maps:HT,lights_fragment_end:kT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:GT,logdepthbuf_pars_vertex:VT,logdepthbuf_vertex:WT,map_fragment:XT,map_pars_fragment:jT,map_particle_fragment:qT,map_particle_pars_fragment:$T,metalnessmap_fragment:YT,metalnessmap_pars_fragment:KT,morphcolor_vertex:ZT,morphnormal_vertex:JT,morphtarget_pars_vertex:QT,morphtarget_vertex:eA,normal_fragment_begin:tA,normal_fragment_maps:nA,normal_pars_fragment:iA,normal_pars_vertex:rA,normal_vertex:sA,normalmap_pars_fragment:oA,clearcoat_normal_fragment_begin:aA,clearcoat_normal_fragment_maps:lA,clearcoat_pars_fragment:cA,iridescence_pars_fragment:uA,opaque_fragment:fA,packing:dA,premultiplied_alpha_fragment:hA,project_vertex:pA,dithering_fragment:mA,dithering_pars_fragment:gA,roughnessmap_fragment:_A,roughnessmap_pars_fragment:vA,shadowmap_pars_fragment:xA,shadowmap_pars_vertex:yA,shadowmap_vertex:MA,shadowmask_pars_fragment:EA,skinbase_vertex:SA,skinning_pars_vertex:bA,skinning_vertex:TA,skinnormal_vertex:AA,specularmap_fragment:wA,specularmap_pars_fragment:RA,tonemapping_fragment:CA,tonemapping_pars_fragment:PA,transmission_fragment:LA,transmission_pars_fragment:DA,uv_pars_fragment:UA,uv_pars_vertex:IA,uv_vertex:NA,worldpos_vertex:OA,background_vert:FA,background_frag:BA,backgroundCube_vert:HA,backgroundCube_frag:kA,cube_vert:zA,cube_frag:GA,depth_vert:VA,depth_frag:WA,distanceRGBA_vert:XA,distanceRGBA_frag:jA,equirect_vert:qA,equirect_frag:$A,linedashed_vert:YA,linedashed_frag:KA,meshbasic_vert:ZA,meshbasic_frag:JA,meshlambert_vert:QA,meshlambert_frag:ew,meshmatcap_vert:tw,meshmatcap_frag:nw,meshnormal_vert:iw,meshnormal_frag:rw,meshphong_vert:sw,meshphong_frag:ow,meshphysical_vert:aw,meshphysical_frag:lw,meshtoon_vert:cw,meshtoon_frag:uw,points_vert:fw,points_frag:dw,shadow_vert:hw,shadow_frag:pw,sprite_vert:mw,sprite_frag:gw},ve={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},bn={basic:{uniforms:Dt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Dt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Dt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Dt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Dt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Dt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Dt([ve.points,ve.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Dt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Dt([ve.common,ve.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Dt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Dt([ve.sprite,ve.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Dt([ve.common,ve.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Dt([ve.lights,ve.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};bn.physical={uniforms:Dt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Oo={r:0,b:0,g:0};function _w(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let _=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ua)?(u===void 0&&(u=new hi(new eo(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Xr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Ge,(f!==v||h!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new hi(new yu(2,2),new Ki({name:"BackgroundMaterial",uniforms:Xr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,d){m.getRGB(Oo,_g(t)),i.buffers.color.setClear(Oo.r,Oo.g,Oo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function vw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(I,z,K,q,Y){let ce=!1;if(o){const de=x(q,K,z);c!==de&&(c=de,p(c.object)),ce=d(I,q,K,Y),ce&&_(I,q,K,Y)}else{const de=z.wireframe===!0;(c.geometry!==q.id||c.program!==K.id||c.wireframe!==de)&&(c.geometry=q.id,c.program=K.id,c.wireframe=de,ce=!0)}Y!==null&&n.update(Y,t.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,P(I,z,K,q),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,z,K){const q=K.wireframe===!0;let Y=a[I.id];Y===void 0&&(Y={},a[I.id]=Y);let ce=Y[z.id];ce===void 0&&(ce={},Y[z.id]=ce);let de=ce[q];return de===void 0&&(de=m(h()),ce[q]=de),de}function m(I){const z=[],K=[],q=[];for(let Y=0;Y<r;Y++)z[Y]=0,K[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:q,object:I,attributes:{},index:null}}function d(I,z,K,q){const Y=c.attributes,ce=z.attributes;let de=0;const W=K.getAttributes();for(const Q in W)if(W[Q].location>=0){const ge=Y[Q];let ye=ce[Q];if(ye===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor)),ge===void 0||ge.attribute!==ye||ye&&ge.data!==ye.data)return!0;de++}return c.attributesNum!==de||c.index!==q}function _(I,z,K,q){const Y={},ce=z.attributes;let de=0;const W=K.getAttributes();for(const Q in W)if(W[Q].location>=0){let ge=ce[Q];ge===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor));const ye={};ye.attribute=ge,ge&&ge.data&&(ye.data=ge.data),Y[Q]=ye,de++}c.attributes=Y,c.attributesNum=de,c.index=q}function v(){const I=c.newAttributes;for(let z=0,K=I.length;z<K;z++)I[z]=0}function y(I){S(I,0)}function S(I,z){const K=c.newAttributes,q=c.enabledAttributes,Y=c.attributeDivisors;K[I]=1,q[I]===0&&(t.enableVertexAttribArray(I),q[I]=1),Y[I]!==z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,z),Y[I]=z)}function w(){const I=c.newAttributes,z=c.enabledAttributes;for(let K=0,q=z.length;K<q;K++)z[K]!==I[K]&&(t.disableVertexAttribArray(K),z[K]=0)}function R(I,z,K,q,Y,ce,de){de===!0?t.vertexAttribIPointer(I,z,K,Y,ce):t.vertexAttribPointer(I,z,K,q,Y,ce)}function P(I,z,K,q){if(i.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=q.attributes,ce=K.getAttributes(),de=z.defaultAttributeValues;for(const W in ce){const Q=ce[W];if(Q.location>=0){let _e=Y[W];if(_e===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),_e!==void 0){const ge=_e.normalized,ye=_e.itemSize,we=n.get(_e);if(we===void 0)continue;const j=we.buffer,oe=we.type,ue=we.bytesPerElement,Ee=i.isWebGL2===!0&&(oe===t.INT||oe===t.UNSIGNED_INT||_e.gpuType===Qm);if(_e.isInterleavedBufferAttribute){const Ae=_e.data,E=Ae.stride,D=_e.offset;if(Ae.isInstancedInterleavedBuffer){for(let N=0;N<Q.locationSize;N++)S(Q.location+N,Ae.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let N=0;N<Q.locationSize;N++)y(Q.location+N);t.bindBuffer(t.ARRAY_BUFFER,j);for(let N=0;N<Q.locationSize;N++)R(Q.location+N,ye/Q.locationSize,oe,ge,E*ue,(D+ye/Q.locationSize*N)*ue,Ee)}else{if(_e.isInstancedBufferAttribute){for(let Ae=0;Ae<Q.locationSize;Ae++)S(Q.location+Ae,_e.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ae=0;Ae<Q.locationSize;Ae++)y(Q.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,j);for(let Ae=0;Ae<Q.locationSize;Ae++)R(Q.location+Ae,ye/Q.locationSize,oe,ge,ye*ue,ye/Q.locationSize*Ae*ue,Ee)}}else if(de!==void 0){const ge=de[W];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(Q.location,ge);break;case 3:t.vertexAttrib3fv(Q.location,ge);break;case 4:t.vertexAttrib4fv(Q.location,ge);break;default:t.vertexAttrib1fv(Q.location,ge)}}}}w()}function M(){B();for(const I in a){const z=a[I];for(const K in z){const q=z[K];for(const Y in q)g(q[Y].object),delete q[Y];delete z[K]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const z=a[I.id];for(const K in z){const q=z[K];for(const Y in q)g(q[Y].object),delete q[Y];delete z[K]}delete a[I.id]}function F(I){for(const z in a){const K=a[z];if(K[I.id]===void 0)continue;const q=K[I.id];for(const Y in q)g(q[Y].object),delete q[Y];delete K[I.id]}}function B(){U(),u=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function xw(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),n.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function yw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),S=v&&y,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:w}}function Mw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ui,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,v=_*4;let y=d.clippingState||null;l.value=y,y=u(g,h,v,p);for(let S=0;S!==v;++S)y[S]=n[S];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=p;v!==x;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ew(t){let e=new WeakMap;function n(o,a){return a===Tc?o.mapping=Gr:a===Ac&&(o.mapping=Vr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Tc||a===Ac)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ob(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Sw extends vg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Tr=4,Yd=[.125,.215,.35,.446,.526,.582],Fi=20,Ul=new Sw,Kd=new Qe;let Il=null;const Ii=(1+Math.sqrt(5))/2,xr=1/Ii,Zd=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Ii,xr),new X(0,Ii,-xr),new X(xr,0,Ii),new X(-xr,0,Ii),new X(Ii,xr,0),new X(-Ii,xr,0)];class Jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Il=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il),e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Os,format:pn,colorSpace:Rn,depthBuffer:!1},r=Qd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bw(s)),this._blurMaterial=Tw(s,e,n)}return r}_compileMaterial(e){const n=new hi(this._lodPlanes[0],e);this._renderer.compile(n,Ul)}_sceneToCubeUV(e,n,i,r){const a=new Yt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Kd),u.toneMapping=Gn,u.autoClear=!1;const p=new pg({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new hi(new eo,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Kd),x=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Fo(r,_*v,d>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gr||e.mapping===Vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ul)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zd[(r-1)%Zd.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new hi(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Fi;m>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const d=[];let _=0;for(let R=0;R<Fi;++R){const P=R/x,M=Math.exp(-P*P/2);d.push(M),R===0?_+=M:R<m&&(_+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const y=this._sizeLods[r],S=3*y*(r>v-Tr?r-v+Tr:0),w=4*(this._cubeSize-y);Fo(n,S,w,3*y,2*y),l.setRenderTarget(n),l.render(f,Ul)}}function bw(t){const e=[],n=[],i=[];let r=t;const s=t-Tr+1+Yd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Tr?l=Yd[o-t+Tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,d=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,P=w>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];_.set(M,x*g*w),v.set(h,m*g*w);const T=[w,w,w,w,w,w];y.set(T,d*g*w)}const S=new $n;S.setAttribute("position",new rn(_,x)),S.setAttribute("uv",new rn(v,m)),S.setAttribute("faceIndex",new rn(y,d)),e.push(S),r>Tr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qd(t,e,n){const i=new $i(t,e,n);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Tw(t,e,n){const i=new Float32Array(Fi),r=new X(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function eh(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function th(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Aw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tc||l===Ac,u=l===Gr||l===Vr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Jd(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Jd(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ww(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Rw(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){const S=_[v+0],w=_[v+1],R=_[v+2];h.push(S,w,w,R,R,S)}}else{const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const S=v+0,w=v+1,R=v+2;h.push(S,w,w,R,R,S)}}const m=new(ag(h)?gg:mg)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Cw(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){t.drawElements(s,p,a,h*l),n.update(p,s,1)}function f(h,p,g){if(g===0)return;let x,m;if(r)x=t,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](s,p,a,h*l,g),n.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Pw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Lw(t,e){return t[0]-e[0]}function Dw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Uw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==g){let I=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let P=0;_===!0&&(P=1),v===!0&&(P=2),y===!0&&(P=3);let M=u.attributes.position.count*P,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const F=new Float32Array(M*T*4*g),B=new ug(F,M,T,g);B.type=di,B.needsUpdate=!0;const U=P*4;for(let z=0;z<g;z++){const K=S[z],q=w[z],Y=R[z],ce=M*T*4*z;for(let de=0;de<K.count;de++){const W=de*U;_===!0&&(o.fromBufferAttribute(K,de),F[ce+W+0]=o.x,F[ce+W+1]=o.y,F[ce+W+2]=o.z,F[ce+W+3]=0),v===!0&&(o.fromBufferAttribute(q,de),F[ce+W+4]=o.x,F[ce+W+5]=o.y,F[ce+W+6]=o.z,F[ce+W+7]=0),y===!0&&(o.fromBufferAttribute(Y,de),F[ce+W+8]=o.x,F[ce+W+9]=o.y,F[ce+W+10]=o.z,F[ce+W+11]=Y.itemSize===4?o.w:1)}}x={count:g,texture:B,size:new Xe(M,T)},s.set(u,x),u.addEventListener("dispose",I)}let m=0;for(let _=0;_<h.length;_++)m+=h[_];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",d),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<p;v++){const y=g[v];y[0]=v,y[1]=h[v]}g.sort(Dw);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Lw);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let v=0;v<8;v++){const y=a[v],S=y[0],w=y[1];S!==Number.MAX_SAFE_INTEGER&&w?(x&&u.getAttribute("morphTarget"+v)!==x[S]&&u.setAttribute("morphTarget"+v,x[S]),m&&u.getAttribute("morphNormal"+v)!==m[S]&&u.setAttribute("morphNormal"+v,m[S]),r[v]=w,d+=w):(x&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const _=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Iw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Eg=new Kt,Sg=new ug,bg=new yb,Tg=new xg,nh=[],ih=[],rh=new Float32Array(16),sh=new Float32Array(9),oh=new Float32Array(4);function Zr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=nh[r];if(s===void 0&&(s=new Float32Array(r),nh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function _t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Oa(t,e){let n=ih[e];n===void 0&&(n=new Int32Array(e),ih[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Nw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gt(n,e))return;t.uniform2fv(this.addr,e),_t(n,e)}}function Fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gt(n,e))return;t.uniform3fv(this.addr,e),_t(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gt(n,e))return;t.uniform4fv(this.addr,e),_t(n,e)}}function Hw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),_t(n,e)}else{if(gt(n,i))return;oh.set(i),t.uniformMatrix2fv(this.addr,!1,oh),_t(n,i)}}function kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),_t(n,e)}else{if(gt(n,i))return;sh.set(i),t.uniformMatrix3fv(this.addr,!1,sh),_t(n,i)}}function zw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),_t(n,e)}else{if(gt(n,i))return;rh.set(i),t.uniformMatrix4fv(this.addr,!1,rh),_t(n,i)}}function Gw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gt(n,e))return;t.uniform2iv(this.addr,e),_t(n,e)}}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gt(n,e))return;t.uniform3iv(this.addr,e),_t(n,e)}}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gt(n,e))return;t.uniform4iv(this.addr,e),_t(n,e)}}function jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gt(n,e))return;t.uniform2uiv(this.addr,e),_t(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gt(n,e))return;t.uniform3uiv(this.addr,e),_t(n,e)}}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gt(n,e))return;t.uniform4uiv(this.addr,e),_t(n,e)}}function Kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Eg,r)}function Zw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||bg,r)}function Jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tg,r)}function Qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Sg,r)}function eR(t){switch(t){case 5126:return Nw;case 35664:return Ow;case 35665:return Fw;case 35666:return Bw;case 35674:return Hw;case 35675:return kw;case 35676:return zw;case 5124:case 35670:return Gw;case 35667:case 35671:return Vw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return jw;case 36294:return qw;case 36295:return $w;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return Qw}}function tR(t,e){t.uniform1fv(this.addr,e)}function nR(t,e){const n=Zr(e,this.size,2);t.uniform2fv(this.addr,n)}function iR(t,e){const n=Zr(e,this.size,3);t.uniform3fv(this.addr,n)}function rR(t,e){const n=Zr(e,this.size,4);t.uniform4fv(this.addr,n)}function sR(t,e){const n=Zr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oR(t,e){const n=Zr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aR(t,e){const n=Zr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lR(t,e){t.uniform1iv(this.addr,e)}function cR(t,e){t.uniform2iv(this.addr,e)}function uR(t,e){t.uniform3iv(this.addr,e)}function fR(t,e){t.uniform4iv(this.addr,e)}function dR(t,e){t.uniform1uiv(this.addr,e)}function hR(t,e){t.uniform2uiv(this.addr,e)}function pR(t,e){t.uniform3uiv(this.addr,e)}function mR(t,e){t.uniform4uiv(this.addr,e)}function gR(t,e,n){const i=this.cache,r=e.length,s=Oa(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Eg,s[o])}function _R(t,e,n){const i=this.cache,r=e.length,s=Oa(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||bg,s[o])}function vR(t,e,n){const i=this.cache,r=e.length,s=Oa(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Tg,s[o])}function xR(t,e,n){const i=this.cache,r=e.length,s=Oa(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Sg,s[o])}function yR(t){switch(t){case 5126:return tR;case 35664:return nR;case 35665:return iR;case 35666:return rR;case 35674:return sR;case 35675:return oR;case 35676:return aR;case 5124:case 35670:return lR;case 35667:case 35671:return cR;case 35668:case 35672:return uR;case 35669:case 35673:return fR;case 5125:return dR;case 36294:return hR;case 36295:return pR;case 36296:return mR;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return vR;case 36289:case 36303:case 36311:case 36292:return xR}}class MR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=eR(n.type)}}class ER{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=yR(n.type)}}class SR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function ah(t,e){t.seq.push(e),t.map[e.id]=e}function bR(t,e,n){const i=t.name,r=i.length;for(Nl.lastIndex=0;;){const s=Nl.exec(i),o=Nl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ah(n,c===void 0?new MR(a,t,e):new ER(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new SR(a),ah(n,f)),n=f}}}class Wo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);bR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function lh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let TR=0;function AR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function wR(t){switch(t){case Rn:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function ch(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+AR(t.getShaderSource(e),o)}else return r}function RR(t,e){const n=wR(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function CR(t,e){let n;switch(e){case FS:n="Linear";break;case BS:n="Reinhard";break;case HS:n="OptimizedCineon";break;case kS:n="ACESFilmic";break;case zS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function PR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fs).join(`
`)}function LR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function DR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fs(t){return t!==""}function uh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(t){return t.replace(UR,NR)}const IR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function NR(t,e){let n=ze[e];if(n===void 0){const i=IR.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dc(n)}const OR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(t){return t.replace(OR,FR)}function FR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hh(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$m?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===mS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function HR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gr:case Vr:e="ENVMAP_TYPE_CUBE";break;case Ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vr:e="ENVMAP_MODE_REFRACTION";break}return e}function zR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Zm:e="ENVMAP_BLENDING_MULTIPLY";break;case NS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function GR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function VR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=BR(n),c=HR(n),u=kR(n),f=zR(n),h=GR(n),p=n.isWebGL2?"":PR(n),g=LR(s),x=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fs).join(`
`),d.length>0&&(d+=`
`)):(m=[hh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),d=[p,hh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gn?"#define TONE_MAPPING":"",n.toneMapping!==Gn?ze.tonemapping_pars_fragment:"",n.toneMapping!==Gn?CR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,RR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fs).join(`
`)),o=Dc(o),o=uh(o,n),o=fh(o,n),a=Dc(a),a=uh(a,n),a=fh(a,n),o=dh(o),a=dh(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+m+o,y=_+d+a,S=lh(r,r.VERTEX_SHADER,v),w=lh(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,S),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const M=r.getProgramInfoLog(x).trim(),T=r.getShaderInfoLog(S).trim(),F=r.getShaderInfoLog(w).trim();let B=!0,U=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,S,w);else{const I=ch(r,S,"vertex"),z=ch(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+I+`
`+z)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||F==="")&&(U=!1);U&&(this.diagnostics={runnable:B,programLog:M,vertexShader:{log:T,prefix:m},fragmentShader:{log:F,prefix:d}})}r.deleteShader(S),r.deleteShader(w);let R;this.getUniforms=function(){return R===void 0&&(R=new Wo(r,x)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=DR(r,x)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}let WR=0;class XR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jR(e),n.set(e,i)),i}}class jR{constructor(e){this.id=WR++,this.code=e,this.usedTimes=0}}function qR(t,e,n,i,r,s,o){const a=new dg,l=new XR,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,T,F,B,U){const I=B.fog,z=U.geometry,K=M.isMeshStandardMaterial?B.environment:null,q=(M.isMeshStandardMaterial?n:e).get(M.envMap||K),Y=q&&q.mapping===Ua?q.image.height:null,ce=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const de=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,W=de!==void 0?de.length:0;let Q=0;z.morphAttributes.position!==void 0&&(Q=1),z.morphAttributes.normal!==void 0&&(Q=2),z.morphAttributes.color!==void 0&&(Q=3);let _e,ge,ye,we;if(ce){const xn=bn[ce];_e=xn.vertexShader,ge=xn.fragmentShader}else _e=M.vertexShader,ge=M.fragmentShader,l.update(M),ye=l.getVertexShaderID(M),we=l.getFragmentShaderID(M);const j=t.getRenderTarget(),oe=U.isInstancedMesh===!0,ue=!!M.map,Ee=!!M.matcap,Ae=!!q,E=!!M.aoMap,D=!!M.lightMap,N=!!M.bumpMap,k=!!M.normalMap,V=!!M.displacementMap,ie=!!M.emissiveMap,he=!!M.metalnessMap,ee=!!M.roughnessMap,fe=M.anisotropy>0,le=M.clearcoat>0,be=M.iridescence>0,A=M.sheen>0,b=M.transmission>0,H=fe&&!!M.anisotropyMap,te=le&&!!M.clearcoatMap,ae=le&&!!M.clearcoatNormalMap,L=le&&!!M.clearcoatRoughnessMap,ne=be&&!!M.iridescenceMap,pe=be&&!!M.iridescenceThicknessMap,Z=A&&!!M.sheenColorMap,Re=A&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,Le=!!M.specularColorMap,xe=!!M.specularIntensityMap,Me=b&&!!M.transmissionMap,Ie=b&&!!M.thicknessMap,je=!!M.gradientMap,O=!!M.alphaMap,Se=M.alphaTest>0,J=!!M.alphaHash,me=!!M.extensions,Te=!!z.attributes.uv1,Ke=!!z.attributes.uv2,rt=!!z.attributes.uv3;return{isWebGL2:u,shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:ge,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:oe,instancingColor:oe&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:j===null?t.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Rn,map:ue,matcap:Ee,envMap:Ae,envMapMode:Ae&&q.mapping,envMapCubeUVHeight:Y,aoMap:E,lightMap:D,bumpMap:N,normalMap:k,displacementMap:h&&V,emissiveMap:ie,normalMapObjectSpace:k&&M.normalMapType===tb,normalMapTangentSpace:k&&M.normalMapType===eb,metalnessMap:he,roughnessMap:ee,anisotropy:fe,anisotropyMap:H,clearcoat:le,clearcoatMap:te,clearcoatNormalMap:ae,clearcoatRoughnessMap:L,iridescence:be,iridescenceMap:ne,iridescenceThicknessMap:pe,sheen:A,sheenColorMap:Z,sheenRoughnessMap:Re,specularMap:Pe,specularColorMap:Le,specularIntensityMap:xe,transmission:b,transmissionMap:Me,thicknessMap:Ie,gradientMap:je,opaque:M.transparent===!1&&M.blending===Ir,alphaMap:O,alphaTest:Se,alphaHash:J,combine:M.combine,mapUv:ue&&x(M.map.channel),aoMapUv:E&&x(M.aoMap.channel),lightMapUv:D&&x(M.lightMap.channel),bumpMapUv:N&&x(M.bumpMap.channel),normalMapUv:k&&x(M.normalMap.channel),displacementMapUv:V&&x(M.displacementMap.channel),emissiveMapUv:ie&&x(M.emissiveMap.channel),metalnessMapUv:he&&x(M.metalnessMap.channel),roughnessMapUv:ee&&x(M.roughnessMap.channel),anisotropyMapUv:H&&x(M.anisotropyMap.channel),clearcoatMapUv:te&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(M.sheenRoughnessMap.channel),specularMapUv:Pe&&x(M.specularMap.channel),specularColorMapUv:Le&&x(M.specularColorMap.channel),specularIntensityMapUv:xe&&x(M.specularIntensityMap.channel),transmissionMapUv:Me&&x(M.transmissionMap.channel),thicknessMapUv:Ie&&x(M.thicknessMap.channel),alphaMapUv:O&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(k||fe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Ke,vertexUv3s:rt,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(ue||O),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:M.toneMapped?t.toneMapping:Gn,useLegacyLights:t.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hn,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:me&&M.extensions.derivatives===!0,extensionFragDepth:me&&M.extensions.fragDepth===!0,extensionDrawBuffers:me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)T.push(F),T.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(_(T,M),v(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),M.push(a.mask)}function y(M){const T=g[M.type];let F;if(T){const B=bn[T];F=Db.clone(B.uniforms)}else F=M.uniforms;return F}function S(M,T){let F;for(let B=0,U=c.length;B<U;B++){const I=c[B];if(I.cacheKey===T){F=I,++F.usedTimes;break}}return F===void 0&&(F=new VR(t,T,M,s),c.push(F)),F}function w(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:P}}function $R(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function YR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ph(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,x,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,g,x,m){const d=o(f,h,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,x,m){const d=o(f,h,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||YR),i.length>1&&i.sort(h||ph),r.length>1&&r.sort(h||ph)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function KR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new mh,t.set(i,[o])):r>=s.length?(o=new mh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ZR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Qe};break;case"SpotLight":n={position:new X,direction:new X,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function JR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let QR=0;function eC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tC(t,e){const n=new ZR,i=JR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new X);const s=new X,o=new Mt,a=new Mt;function l(u,f){let h=0,p=0,g=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let x=0,m=0,d=0,_=0,v=0,y=0,S=0,w=0,R=0,P=0;u.sort(eC);const M=f===!0?Math.PI:1;for(let F=0,B=u.length;F<B;F++){const U=u[F],I=U.color,z=U.intensity,K=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=I.r*z*M,p+=I.g*z*M,g+=I.b*z*M;else if(U.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(U.sh.coefficients[Y],z);else if(U.isDirectionalLight){const Y=n.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const ce=U.shadow,de=i.get(U);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,r.directionalShadow[x]=de,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=U.shadow.matrix,y++}r.directional[x]=Y,x++}else if(U.isSpotLight){const Y=n.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(I).multiplyScalar(z*M),Y.distance=K,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,r.spot[d]=Y;const ce=U.shadow;if(U.map&&(r.spotLightMap[R]=U.map,R++,ce.updateMatrices(U),U.castShadow&&P++),r.spotLightMatrix[d]=ce.matrix,U.castShadow){const de=i.get(U);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,r.spotShadow[d]=de,r.spotShadowMap[d]=q,w++}d++}else if(U.isRectAreaLight){const Y=n.get(U);Y.color.copy(I).multiplyScalar(z),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),r.rectArea[_]=Y,_++}else if(U.isPointLight){const Y=n.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*M),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const ce=U.shadow,de=i.get(U);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,de.shadowCameraNear=ce.camera.near,de.shadowCameraFar=ce.camera.far,r.pointShadow[m]=de,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=U.shadow.matrix,S++}r.point[m]=Y,m++}else if(U.isHemisphereLight){const Y=n.get(U);Y.skyColor.copy(U.color).multiplyScalar(z*M),Y.groundColor.copy(U.groundColor).multiplyScalar(z*M),r.hemi[v]=Y,v++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==x||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==_||T.hemiLength!==v||T.numDirectionalShadows!==y||T.numPointShadows!==S||T.numSpotShadows!==w||T.numSpotMaps!==R)&&(r.directional.length=x,r.spot.length=d,r.rectArea.length=_,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=w+R-P,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=P,T.directionalLength=x,T.pointLength=m,T.spotLength=d,T.rectAreaLength=_,T.hemiLength=v,T.numDirectionalShadows=y,T.numPointShadows=S,T.numSpotShadows=w,T.numSpotMaps=R,r.version=QR++)}function c(u,f){let h=0,p=0,g=0,x=0,m=0;const d=f.matrixWorldInverse;for(let _=0,v=u.length;_<v;_++){const y=u[_];if(y.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),h++}else if(y.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const S=r.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function gh(t,e){const n=new tC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function nC(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new gh(t,e),n.set(s,[l])):o>=a.length?(l=new gh(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class iC extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rC extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aC(t,e,n){let i=new yg;const r=new Xe,s=new Xe,o=new bt,a=new iC({depthPacking:QS}),l=new rC,c={},u=n.maxTextureSize,f={[yi]:zt,[zt]:yi,[Hn]:Hn},h=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:sC,fragmentShader:oC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new $n;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new hi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$m;let d=this.type;this.render=function(S,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const P=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),F=t.state;F.setBlending(_i),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==Fn&&this.type===Fn,U=d===Fn&&this.type!==Fn;for(let I=0,z=S.length;I<z;I++){const K=S[I],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const Y=q.getFrameExtents();if(r.multiply(Y),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,q.mapSize.y=s.y)),q.map===null||B===!0||U===!0){const de=this.type!==Fn?{minFilter:Ut,magFilter:Ut}:{};q.map!==null&&q.map.dispose(),q.map=new $i(r.x,r.y,de),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const ce=q.getViewportCount();for(let de=0;de<ce;de++){const W=q.getViewport(de);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),F.viewport(o),q.updateMatrices(K,de),i=q.getFrustum(),y(w,R,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Fn&&_(q,R),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(P,M,T)};function _(S,w){const R=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new $i(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,R,h,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,R,p,x,null)}function v(S,w,R,P){let M=null;const T=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=M.uuid,B=w.uuid;let U=c[F];U===void 0&&(U={},c[F]=U);let I=U[B];I===void 0&&(I=M.clone(),U[B]=I),M=I}if(M.visible=w.visible,M.wireframe=w.wireframe,P===Fn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=t.properties.get(M);F.light=R}return M}function y(S,w,R,P,M){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Fn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const B=e.update(S),U=S.material;if(Array.isArray(U)){const I=B.groups;for(let z=0,K=I.length;z<K;z++){const q=I[z],Y=U[q.materialIndex];if(Y&&Y.visible){const ce=v(S,Y,P,M);t.renderBufferDirect(R,null,B,ce,S,q)}}}else if(U.visible){const I=v(S,U,P,M);t.renderBufferDirect(R,null,B,I,S,null)}}const F=S.children;for(let B=0,U=F.length;B<U;B++)y(F[B],w,R,P,M)}}function lC(t,e,n){const i=n.isWebGL2;function r(){let O=!1;const Se=new bt;let J=null;const me=new bt(0,0,0,0);return{setMask:function(Te){J!==Te&&!O&&(t.colorMask(Te,Te,Te,Te),J=Te)},setLocked:function(Te){O=Te},setClear:function(Te,Ke,rt,vt,xn){xn===!0&&(Te*=vt,Ke*=vt,rt*=vt),Se.set(Te,Ke,rt,vt),me.equals(Se)===!1&&(t.clearColor(Te,Ke,rt,vt),me.copy(Se))},reset:function(){O=!1,J=null,me.set(-1,0,0,0)}}}function s(){let O=!1,Se=null,J=null,me=null;return{setTest:function(Te){Te?j(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(Te){Se!==Te&&!O&&(t.depthMask(Te),Se=Te)},setFunc:function(Te){if(J!==Te){switch(Te){case RS:t.depthFunc(t.NEVER);break;case CS:t.depthFunc(t.ALWAYS);break;case PS:t.depthFunc(t.LESS);break;case bc:t.depthFunc(t.LEQUAL);break;case LS:t.depthFunc(t.EQUAL);break;case DS:t.depthFunc(t.GEQUAL);break;case US:t.depthFunc(t.GREATER);break;case IS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=Te}},setLocked:function(Te){O=Te},setClear:function(Te){me!==Te&&(t.clearDepth(Te),me=Te)},reset:function(){O=!1,Se=null,J=null,me=null}}}function o(){let O=!1,Se=null,J=null,me=null,Te=null,Ke=null,rt=null,vt=null,xn=null;return{setTest:function(lt){O||(lt?j(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(lt){Se!==lt&&!O&&(t.stencilMask(lt),Se=lt)},setFunc:function(lt,yn,Ct){(J!==lt||me!==yn||Te!==Ct)&&(t.stencilFunc(lt,yn,Ct),J=lt,me=yn,Te=Ct)},setOp:function(lt,yn,Ct){(Ke!==lt||rt!==yn||vt!==Ct)&&(t.stencilOp(lt,yn,Ct),Ke=lt,rt=yn,vt=Ct)},setLocked:function(lt){O=lt},setClear:function(lt){xn!==lt&&(t.clearStencil(lt),xn=lt)},reset:function(){O=!1,Se=null,J=null,me=null,Te=null,Ke=null,rt=null,vt=null,xn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,x=[],m=null,d=!1,_=null,v=null,y=null,S=null,w=null,R=null,P=null,M=!1,T=null,F=null,B=null,U=null,I=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,q=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=q>=2);let ce=null,de={};const W=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),_e=new bt().fromArray(W),ge=new bt().fromArray(Q);function ye(O,Se,J,me){const Te=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(O,Ke),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<J;rt++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(Se,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(Se+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Ke}const we={};we[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),j(t.DEPTH_TEST),l.setFunc(bc),V(!1),ie(td),j(t.CULL_FACE),N(_i);function j(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function oe(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function ue(O,Se){return p[O]!==Se?(t.bindFramebuffer(O,Se),p[O]=Se,i&&(O===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Se),O===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Se)),!0):!1}function Ee(O,Se){let J=x,me=!1;if(O)if(J=g.get(Se),J===void 0&&(J=[],g.set(Se,J)),O.isWebGLMultipleRenderTargets){const Te=O.texture;if(J.length!==Te.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,rt=Te.length;Ke<rt;Ke++)J[Ke]=t.COLOR_ATTACHMENT0+Ke;J.length=Te.length,me=!0}}else J[0]!==t.COLOR_ATTACHMENT0&&(J[0]=t.COLOR_ATTACHMENT0,me=!0);else J[0]!==t.BACK&&(J[0]=t.BACK,me=!0);me&&(n.isWebGL2?t.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Ae(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const E={[Er]:t.FUNC_ADD,[_S]:t.FUNC_SUBTRACT,[vS]:t.FUNC_REVERSE_SUBTRACT};if(i)E[sd]=t.MIN,E[od]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(E[sd]=O.MIN_EXT,E[od]=O.MAX_EXT)}const D={[xS]:t.ZERO,[yS]:t.ONE,[MS]:t.SRC_COLOR,[Ym]:t.SRC_ALPHA,[wS]:t.SRC_ALPHA_SATURATE,[TS]:t.DST_COLOR,[SS]:t.DST_ALPHA,[ES]:t.ONE_MINUS_SRC_COLOR,[Km]:t.ONE_MINUS_SRC_ALPHA,[AS]:t.ONE_MINUS_DST_COLOR,[bS]:t.ONE_MINUS_DST_ALPHA};function N(O,Se,J,me,Te,Ke,rt,vt){if(O===_i){d===!0&&(oe(t.BLEND),d=!1);return}if(d===!1&&(j(t.BLEND),d=!0),O!==gS){if(O!==_||vt!==M){if((v!==Er||w!==Er)&&(t.blendEquation(t.FUNC_ADD),v=Er,w=Er),vt)switch(O){case Ir:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nd:t.blendFunc(t.ONE,t.ONE);break;case id:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ir:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case id:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,S=null,R=null,P=null,_=O,M=vt}return}Te=Te||Se,Ke=Ke||J,rt=rt||me,(Se!==v||Te!==w)&&(t.blendEquationSeparate(E[Se],E[Te]),v=Se,w=Te),(J!==y||me!==S||Ke!==R||rt!==P)&&(t.blendFuncSeparate(D[J],D[me],D[Ke],D[rt]),y=J,S=me,R=Ke,P=rt),_=O,M=!1}function k(O,Se){O.side===Hn?oe(t.CULL_FACE):j(t.CULL_FACE);let J=O.side===zt;Se&&(J=!J),V(J),O.blending===Ir&&O.transparent===!1?N(_i):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const me=O.stencilWrite;c.setTest(me),me&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function V(O){T!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),T=O)}function ie(O){O!==hS?(j(t.CULL_FACE),O!==F&&(O===td?t.cullFace(t.BACK):O===pS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),F=O}function he(O){O!==B&&(K&&t.lineWidth(O),B=O)}function ee(O,Se,J){O?(j(t.POLYGON_OFFSET_FILL),(U!==Se||I!==J)&&(t.polygonOffset(Se,J),U=Se,I=J)):oe(t.POLYGON_OFFSET_FILL)}function fe(O){O?j(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function le(O){O===void 0&&(O=t.TEXTURE0+z-1),ce!==O&&(t.activeTexture(O),ce=O)}function be(O,Se,J){J===void 0&&(ce===null?J=t.TEXTURE0+z-1:J=ce);let me=de[J];me===void 0&&(me={type:void 0,texture:void 0},de[J]=me),(me.type!==O||me.texture!==Se)&&(ce!==J&&(t.activeTexture(J),ce=J),t.bindTexture(O,Se||we[O]),me.type=O,me.texture=Se)}function A(){const O=de[ce];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(O){_e.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),_e.copy(O))}function xe(O){ge.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ge.copy(O))}function Me(O,Se){let J=f.get(Se);J===void 0&&(J=new WeakMap,f.set(Se,J));let me=J.get(O);me===void 0&&(me=t.getUniformBlockIndex(Se,O.name),J.set(O,me))}function Ie(O,Se){const me=f.get(Se).get(O);u.get(Se)!==me&&(t.uniformBlockBinding(Se,me,O.__bindingPointIndex),u.set(Se,me))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ce=null,de={},p={},g=new WeakMap,x=[],m=null,d=!1,_=null,v=null,y=null,S=null,w=null,R=null,P=null,M=!1,T=null,F=null,B=null,U=null,I=null,_e.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:j,disable:oe,bindFramebuffer:ue,drawBuffers:Ee,useProgram:Ae,setBlending:N,setMaterial:k,setFlipSided:V,setCullFace:ie,setLineWidth:he,setPolygonOffset:ee,setScissorTest:fe,activeTexture:le,bindTexture:be,unbindTexture:A,compressedTexImage2D:b,compressedTexImage3D:H,texImage2D:Re,texImage3D:Pe,updateUBOMapping:Me,uniformBlockBinding:Ie,texStorage2D:pe,texStorage3D:Z,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:L,compressedTexSubImage3D:ne,scissor:Le,viewport:xe,reset:je}}function cC(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return d?new OffscreenCanvas(A,b):ha("canvas")}function v(A,b,H,te){let ae=1;if((A.width>te||A.height>te)&&(ae=te/Math.max(A.width,A.height)),ae<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const L=b?Lc:Math.floor,ne=L(ae*A.width),pe=L(ae*A.height);x===void 0&&(x=_(ne,pe));const Z=H?_(ne,pe):x;return Z.width=ne,Z.height=pe,Z.getContext("2d").drawImage(A,0,0,ne,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ne+"x"+pe+")."),Z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Ud(A.width)&&Ud(A.height)}function S(A){return a?!1:A.wrapS!==hn||A.wrapT!==hn||A.minFilter!==Ut&&A.minFilter!==en}function w(A,b){return A.generateMipmaps&&b&&A.minFilter!==Ut&&A.minFilter!==en}function R(A){t.generateMipmap(A)}function P(A,b,H,te,ae=!1){if(a===!1)return b;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let L=b;return b===t.RED&&(H===t.FLOAT&&(L=t.R32F),H===t.HALF_FLOAT&&(L=t.R16F),H===t.UNSIGNED_BYTE&&(L=t.R8)),b===t.RG&&(H===t.FLOAT&&(L=t.RG32F),H===t.HALF_FLOAT&&(L=t.RG16F),H===t.UNSIGNED_BYTE&&(L=t.RG8)),b===t.RGBA&&(H===t.FLOAT&&(L=t.RGBA32F),H===t.HALF_FLOAT&&(L=t.RGBA16F),H===t.UNSIGNED_BYTE&&(L=te===Ge&&ae===!1?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(L=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(L=t.RGB5_A1)),(L===t.R16F||L===t.R32F||L===t.RG16F||L===t.RG32F||L===t.RGBA16F||L===t.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function M(A,b,H){return w(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){return A===Ut||A===ad||A===al?t.NEAREST:t.LINEAR}function F(A){const b=A.target;b.removeEventListener("dispose",F),U(b),b.isVideoTexture&&g.delete(b)}function B(A){const b=A.target;b.removeEventListener("dispose",B),z(b)}function U(A){const b=i.get(A);if(b.__webglInit===void 0)return;const H=A.source,te=m.get(H);if(te){const ae=te[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&I(A),Object.keys(te).length===0&&m.delete(H)}i.remove(A)}function I(A){const b=i.get(A);t.deleteTexture(b.__webglTexture);const H=A.source,te=m.get(H);delete te[b.__cacheKey],o.memory.textures--}function z(A){const b=A.texture,H=i.get(A),te=i.get(b);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)t.deleteFramebuffer(H.__webglFramebuffer[ae]),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ae]);else{if(t.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ae=0;ae<H.__webglColorRenderbuffer.length;ae++)H.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ae]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ae=0,L=b.length;ae<L;ae++){const ne=i.get(b[ae]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(b[ae])}i.remove(b),i.remove(A)}let K=0;function q(){K=0}function Y(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A}function ce(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function de(A,b){const H=i.get(A);if(A.isVideoTexture&&le(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,A,b);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+b)}function W(A,b){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ue(H,A,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+b)}function Q(A,b){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ue(H,A,b);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+b)}function _e(A,b){const H=i.get(A);if(A.version>0&&H.__version!==A.version){Ee(H,A,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+b)}const ge={[wc]:t.REPEAT,[hn]:t.CLAMP_TO_EDGE,[Rc]:t.MIRRORED_REPEAT},ye={[Ut]:t.NEAREST,[ad]:t.NEAREST_MIPMAP_NEAREST,[al]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[GS]:t.LINEAR_MIPMAP_NEAREST,[Ns]:t.LINEAR_MIPMAP_LINEAR},we={[ib]:t.NEVER,[ub]:t.ALWAYS,[rb]:t.LESS,[ob]:t.LEQUAL,[sb]:t.EQUAL,[cb]:t.GEQUAL,[ab]:t.GREATER,[lb]:t.NOTEQUAL};function j(A,b,H){if(H?(t.texParameteri(A,t.TEXTURE_WRAP_S,ge[b.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ge[b.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ge[b.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ye[b.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ye[b.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(b.wrapS!==hn||b.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,T(b.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Ut&&b.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,we[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ut||b.minFilter!==al&&b.minFilter!==Ns||b.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Os&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function oe(A,b){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",F));const te=b.source;let ae=m.get(te);ae===void 0&&(ae={},m.set(te,ae));const L=ce(b);if(L!==A.__cacheKey){ae[L]===void 0&&(ae[L]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[L].usedTimes++;const ne=ae[A.__cacheKey];ne!==void 0&&(ae[A.__cacheKey].usedTimes--,ne.usedTimes===0&&I(b)),A.__cacheKey=L,A.__webglTexture=ae[L].texture}return H}function ue(A,b,H){let te=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=t.TEXTURE_3D);const ae=oe(A,b),L=b.source;n.bindTexture(te,A.__webglTexture,t.TEXTURE0+H);const ne=i.get(L);if(L.version!==ne.__version||ae===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const pe=S(b)&&y(b.image)===!1;let Z=v(b.image,pe,!1,u);Z=be(b,Z);const Re=y(Z)||a,Pe=s.convert(b.format,b.colorSpace);let Le=s.convert(b.type),xe=P(b.internalFormat,Pe,Le,b.colorSpace);j(te,b,Re);let Me;const Ie=b.mipmaps,je=a&&b.isVideoTexture!==!0,O=ne.__version===void 0||ae===!0,Se=M(b,Z,Re);if(b.isDepthTexture)xe=t.DEPTH_COMPONENT,a?b.type===di?xe=t.DEPTH_COMPONENT32F:b.type===fi?xe=t.DEPTH_COMPONENT24:b.type===Vi?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:b.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Wi&&xe===t.DEPTH_COMPONENT&&b.type!==xu&&b.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=fi,Le=s.convert(b.type)),b.format===Wr&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,b.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Vi,Le=s.convert(b.type))),O&&(je?n.texStorage2D(t.TEXTURE_2D,1,xe,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,xe,Z.width,Z.height,0,Pe,Le,null));else if(b.isDataTexture)if(Ie.length>0&&Re){je&&O&&n.texStorage2D(t.TEXTURE_2D,Se,xe,Ie[0].width,Ie[0].height);for(let J=0,me=Ie.length;J<me;J++)Me=Ie[J],je?n.texSubImage2D(t.TEXTURE_2D,J,0,0,Me.width,Me.height,Pe,Le,Me.data):n.texImage2D(t.TEXTURE_2D,J,xe,Me.width,Me.height,0,Pe,Le,Me.data);b.generateMipmaps=!1}else je?(O&&n.texStorage2D(t.TEXTURE_2D,Se,xe,Z.width,Z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Z.width,Z.height,Pe,Le,Z.data)):n.texImage2D(t.TEXTURE_2D,0,xe,Z.width,Z.height,0,Pe,Le,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){je&&O&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,xe,Ie[0].width,Ie[0].height,Z.depth);for(let J=0,me=Ie.length;J<me;J++)Me=Ie[J],b.format!==pn?Pe!==null?je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,Z.depth,Pe,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,xe,Me.width,Me.height,Z.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Me.width,Me.height,Z.depth,Pe,Le,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,xe,Me.width,Me.height,Z.depth,0,Pe,Le,Me.data)}else{je&&O&&n.texStorage2D(t.TEXTURE_2D,Se,xe,Ie[0].width,Ie[0].height);for(let J=0,me=Ie.length;J<me;J++)Me=Ie[J],b.format!==pn?Pe!==null?je?n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Me.width,Me.height,Pe,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,J,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage2D(t.TEXTURE_2D,J,0,0,Me.width,Me.height,Pe,Le,Me.data):n.texImage2D(t.TEXTURE_2D,J,xe,Me.width,Me.height,0,Pe,Le,Me.data)}else if(b.isDataArrayTexture)je?(O&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,xe,Z.width,Z.height,Z.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Pe,Le,Z.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,Z.width,Z.height,Z.depth,0,Pe,Le,Z.data);else if(b.isData3DTexture)je?(O&&n.texStorage3D(t.TEXTURE_3D,Se,xe,Z.width,Z.height,Z.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Pe,Le,Z.data)):n.texImage3D(t.TEXTURE_3D,0,xe,Z.width,Z.height,Z.depth,0,Pe,Le,Z.data);else if(b.isFramebufferTexture){if(O)if(je)n.texStorage2D(t.TEXTURE_2D,Se,xe,Z.width,Z.height);else{let J=Z.width,me=Z.height;for(let Te=0;Te<Se;Te++)n.texImage2D(t.TEXTURE_2D,Te,xe,J,me,0,Pe,Le,null),J>>=1,me>>=1}}else if(Ie.length>0&&Re){je&&O&&n.texStorage2D(t.TEXTURE_2D,Se,xe,Ie[0].width,Ie[0].height);for(let J=0,me=Ie.length;J<me;J++)Me=Ie[J],je?n.texSubImage2D(t.TEXTURE_2D,J,0,0,Pe,Le,Me):n.texImage2D(t.TEXTURE_2D,J,xe,Pe,Le,Me);b.generateMipmaps=!1}else je?(O&&n.texStorage2D(t.TEXTURE_2D,Se,xe,Z.width,Z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,Le,Z)):n.texImage2D(t.TEXTURE_2D,0,xe,Pe,Le,Z);w(b,Re)&&R(te),ne.__version=L.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ee(A,b,H){if(b.image.length!==6)return;const te=oe(A,b),ae=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const L=i.get(ae);if(ae.version!==L.__version||te===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ne=b.isCompressedTexture||b.image[0].isCompressedTexture,pe=b.image[0]&&b.image[0].isDataTexture,Z=[];for(let J=0;J<6;J++)!ne&&!pe?Z[J]=v(b.image[J],!1,!0,c):Z[J]=pe?b.image[J].image:b.image[J],Z[J]=be(b,Z[J]);const Re=Z[0],Pe=y(Re)||a,Le=s.convert(b.format,b.colorSpace),xe=s.convert(b.type),Me=P(b.internalFormat,Le,xe,b.colorSpace),Ie=a&&b.isVideoTexture!==!0,je=L.__version===void 0||te===!0;let O=M(b,Re,Pe);j(t.TEXTURE_CUBE_MAP,b,Pe);let Se;if(ne){Ie&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,O,Me,Re.width,Re.height);for(let J=0;J<6;J++){Se=Z[J].mipmaps;for(let me=0;me<Se.length;me++){const Te=Se[me];b.format!==pn?Le!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,Te.width,Te.height,Le,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Me,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,0,0,Te.width,Te.height,Le,xe,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me,Me,Te.width,Te.height,0,Le,xe,Te.data)}}}else{Se=b.mipmaps,Ie&&je&&(Se.length>0&&O++,n.texStorage2D(t.TEXTURE_CUBE_MAP,O,Me,Z[0].width,Z[0].height));for(let J=0;J<6;J++)if(pe){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Z[J].width,Z[J].height,Le,xe,Z[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Me,Z[J].width,Z[J].height,0,Le,xe,Z[J].data);for(let me=0;me<Se.length;me++){const Ke=Se[me].image[J].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Ke.width,Ke.height,Le,xe,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Me,Ke.width,Ke.height,0,Le,xe,Ke.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,xe,Z[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Me,Le,xe,Z[J]);for(let me=0;me<Se.length;me++){const Te=Se[me];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,0,0,Le,xe,Te.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,me+1,Me,Le,xe,Te.image[J])}}}w(b,Pe)&&R(t.TEXTURE_CUBE_MAP),L.__version=ae.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ae(A,b,H,te,ae){const L=s.convert(H.format,H.colorSpace),ne=s.convert(H.type),pe=P(H.internalFormat,L,ne,H.colorSpace);i.get(b).__hasExternalTextures||(ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,pe,b.width,b.height,b.depth,0,L,ne,null):n.texImage2D(ae,0,pe,b.width,b.height,0,L,ne,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),fe(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ae,i.get(H).__webglTexture,0,ee(b)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ae,i.get(H).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function E(A,b,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let te=t.DEPTH_COMPONENT16;if(H||fe(b)){const ae=b.depthTexture;ae&&ae.isDepthTexture&&(ae.type===di?te=t.DEPTH_COMPONENT32F:ae.type===fi&&(te=t.DEPTH_COMPONENT24));const L=ee(b);fe(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L,te,b.width,b.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,L,te,b.width,b.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){const te=ee(b);H&&fe(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,b.width,b.height):fe(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const te=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0;ae<te.length;ae++){const L=te[ae],ne=s.convert(L.format,L.colorSpace),pe=s.convert(L.type),Z=P(L.internalFormat,ne,pe,L.colorSpace),Re=ee(b);H&&fe(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,Z,b.width,b.height):fe(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,Z,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Z,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function D(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de(b.depthTexture,0);const te=i.get(b.depthTexture).__webglTexture,ae=ee(b);if(b.depthTexture.format===Wi)fe(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(b.depthTexture.format===Wr)fe(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function N(A){const b=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");D(b.__webglFramebuffer,A)}else if(H){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]=t.createRenderbuffer(),E(b.__webglDepthbuffer[te],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),E(b.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(A,b,H){const te=i.get(A);b!==void 0&&Ae(te.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),H!==void 0&&N(A)}function V(A){const b=A.texture,H=i.get(A),te=i.get(b);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=b.version,o.memory.textures++);const ae=A.isWebGLCubeRenderTarget===!0,L=A.isWebGLMultipleRenderTargets===!0,ne=y(A)||a;if(ae){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)H.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(H.__webglFramebuffer=t.createFramebuffer(),L)if(r.drawBuffers){const pe=A.texture;for(let Z=0,Re=pe.length;Z<Re;Z++){const Pe=i.get(pe[Z]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&fe(A)===!1){const pe=L?b:[b];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<pe.length;Z++){const Re=pe[Z];H.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);const Pe=s.convert(Re.format,Re.colorSpace),Le=s.convert(Re.type),xe=P(Re.internalFormat,Pe,Le,Re.colorSpace,A.isXRRenderTarget===!0),Me=ee(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,xe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),E(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),j(t.TEXTURE_CUBE_MAP,b,ne);for(let pe=0;pe<6;pe++)Ae(H.__webglFramebuffer[pe],A,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe);w(b,ne)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(L){const pe=A.texture;for(let Z=0,Re=pe.length;Z<Re;Z++){const Pe=pe[Z],Le=i.get(Pe);n.bindTexture(t.TEXTURE_2D,Le.__webglTexture),j(t.TEXTURE_2D,Pe,ne),Ae(H.__webglFramebuffer,A,Pe,t.COLOR_ATTACHMENT0+Z,t.TEXTURE_2D),w(Pe,ne)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?pe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,te.__webglTexture),j(pe,b,ne),Ae(H.__webglFramebuffer,A,b,t.COLOR_ATTACHMENT0,pe),w(b,ne)&&R(pe),n.unbindTexture()}A.depthBuffer&&N(A)}function ie(A){const b=y(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,ae=H.length;te<ae;te++){const L=H[te];if(w(L,b)){const ne=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(L).__webglTexture;n.bindTexture(ne,pe),R(ne),n.unbindTexture()}}}function he(A){if(a&&A.samples>0&&fe(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,te=A.height;let ae=t.COLOR_BUFFER_BIT;const L=[],ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(A),Z=A.isWebGLMultipleRenderTargets===!0;if(Z)for(let Re=0;Re<b.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){L.push(t.COLOR_ATTACHMENT0+Re),A.depthBuffer&&L.push(ne);const Pe=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Pe===!1&&(A.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Z&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]),Pe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ne]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ne])),Z){const Le=i.get(b[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,ae,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let Re=0;Re<b.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]);const Pe=i.get(b[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function ee(A){return Math.min(f,A.samples)}function fe(A){const b=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(A){const b=o.render.frame;g.get(A)!==b&&(g.set(A,b),A.update())}function be(A,b){const H=A.colorSpace,te=A.format,ae=A.type;return A.isCompressedTexture===!0||A.format===Cc||H!==Rn&&H!==ji&&(H===Ge?a===!1?e.has("EXT_sRGB")===!0&&te===pn?(A.format=Cc,A.minFilter=en,A.generateMipmaps=!1):b=lg.sRGBToLinear(b):(te!==pn||ae!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=de,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=_e,this.rebindTextures=k,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=fe}function uC(t,e,n){const i=n.isWebGL2;function r(s,o=ji){let a;if(s===vi)return t.UNSIGNED_BYTE;if(s===eg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===tg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===VS)return t.BYTE;if(s===WS)return t.SHORT;if(s===xu)return t.UNSIGNED_SHORT;if(s===Qm)return t.INT;if(s===fi)return t.UNSIGNED_INT;if(s===di)return t.FLOAT;if(s===Os)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===XS)return t.ALPHA;if(s===pn)return t.RGBA;if(s===jS)return t.LUMINANCE;if(s===qS)return t.LUMINANCE_ALPHA;if(s===Wi)return t.DEPTH_COMPONENT;if(s===Wr)return t.DEPTH_STENCIL;if(s===Cc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$S)return t.RED;if(s===ng)return t.RED_INTEGER;if(s===YS)return t.RG;if(s===ig)return t.RG_INTEGER;if(s===rg)return t.RGBA_INTEGER;if(s===ll||s===cl||s===ul||s===fl)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ll)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ll)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ul)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ld)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===KS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dd||s===hd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===dd)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===hd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Md||s===Ed||s===Sd||s===bd||s===Td||s===Ad||s===wd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===pd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===md)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_d)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Md)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ed)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Td)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ad)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wd)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===dl)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ZS||s===Rd||s===Cd||s===Pd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===dl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Rd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vi?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class fC extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bo extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dC={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Bo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class hC extends Kt{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Wi,u!==Wi&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Wi&&(i=fi),i===void 0&&u===Wr&&(i=Vi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pC extends Ji{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const x=n.getContextAttributes();let m=null,d=null;const _=[],v=[],y=new Yt;y.layers.enable(1),y.viewport=new bt;const S=new Yt;S.layers.enable(2),S.viewport=new bt;const w=[y,S],R=new fC;R.layers.enable(1),R.layers.enable(2);let P=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=_[W];return Q===void 0&&(Q=new Ol,_[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=_[W];return Q===void 0&&(Q=new Ol,_[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=_[W];return Q===void 0&&(Q=new Ol,_[W]=Q),Q.getHandSpace()};function T(W){const Q=v.indexOf(W.inputSource);if(Q===-1)return;const _e=_[Q];_e!==void 0&&(_e.update(W.inputSource,W.frame,c||o),_e.dispatchEvent({type:W.type,data:W.inputSource}))}function F(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",B);for(let W=0;W<_.length;W++){const Q=v[W];Q!==null&&(v[W]=null,_[W].disconnect(Q))}P=null,M=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,de.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",F),r.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),d=new $i(p.framebufferWidth,p.framebufferHeight,{format:pn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,_e=null,ge=null;x.depth&&(ge=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=x.stencil?Wr:Wi,_e=x.stencil?Vi:fi);const ye={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ye),r.updateRenderState({layers:[h]}),d=new $i(h.textureWidth,h.textureHeight,{format:pn,type:vi,depthTexture:new hC(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const we=e.properties.get(d);we.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(W){for(let Q=0;Q<W.removed.length;Q++){const _e=W.removed[Q],ge=v.indexOf(_e);ge>=0&&(v[ge]=null,_[ge].disconnect(_e))}for(let Q=0;Q<W.added.length;Q++){const _e=W.added[Q];let ge=v.indexOf(_e);if(ge===-1){for(let we=0;we<_.length;we++)if(we>=v.length){v.push(_e),ge=we;break}else if(v[we]===null){v[we]=_e,ge=we;break}if(ge===-1)break}const ye=_[ge];ye&&ye.connect(_e)}}const U=new X,I=new X;function z(W,Q,_e){U.setFromMatrixPosition(Q.matrixWorld),I.setFromMatrixPosition(_e.matrixWorld);const ge=U.distanceTo(I),ye=Q.projectionMatrix.elements,we=_e.projectionMatrix.elements,j=ye[14]/(ye[10]-1),oe=ye[14]/(ye[10]+1),ue=(ye[9]+1)/ye[5],Ee=(ye[9]-1)/ye[5],Ae=(ye[8]-1)/ye[0],E=(we[8]+1)/we[0],D=j*Ae,N=j*E,k=ge/(-Ae+E),V=k*-Ae;Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(V),W.translateZ(k),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const ie=j+k,he=oe+k,ee=D-V,fe=N+(ge-V),le=ue*oe/he*ie,be=Ee*oe/he*ie;W.projectionMatrix.makePerspective(ee,fe,le,be,ie,he),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function K(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;R.near=S.near=y.near=W.near,R.far=S.far=y.far=W.far,(P!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,M=R.far);const Q=W.parent,_e=R.cameras;K(R,Q);for(let ge=0;ge<_e.length;ge++)K(_e[ge],Q);_e.length===2?z(R,y,S):R.projectionMatrix.copy(y.projectionMatrix),q(W,R,Q)};function q(W,Q,_e){_e===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(_e.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const ge=W.children;for(let ye=0,we=ge.length;ye<we;ye++)ge[ye].updateMatrixWorld(!0);W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Pc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let Y=null;function ce(W,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ge=!1;_e.length!==R.cameras.length&&(R.cameras.length=0,ge=!0);for(let ye=0;ye<_e.length;ye++){const we=_e[ye];let j=null;if(p!==null)j=p.getViewport(we);else{const ue=f.getViewSubImage(h,we);j=ue.viewport,ye===0&&(e.setRenderTargetTextures(d,ue.colorTexture,h.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(d))}let oe=w[ye];oe===void 0&&(oe=new Yt,oe.layers.enable(ye),oe.viewport=new bt,w[ye]=oe),oe.matrix.fromArray(we.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(we.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(j.x,j.y,j.width,j.height),ye===0&&(R.matrix.copy(oe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ge===!0&&R.cameras.push(oe)}}for(let _e=0;_e<_.length;_e++){const ge=v[_e],ye=_[_e];ge!==null&&ye!==void 0&&ye.update(ge,Q,c||o)}Y&&Y(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const de=new Mg;de.setAnimationLoop(ce),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}}function mC(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,_g(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gC(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const S=v.program;i.updateUBOMapping(_,S);const w=e.render.frame;s[_.id]!==w&&(h(_),s[_.id]=w)}function u(_){const v=f();_.__bindingPointIndex=v;const y=t.createBuffer(),S=_.__size,w=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,S,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,S=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,R=y.length;w<R;w++){const P=y[w];if(p(P,w,S)===!0){const M=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let B=0;B<T.length;B++){const U=T[B],I=x(U);typeof U=="number"?(P.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,M+F,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=U.elements[0],P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=U.elements[0],P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=U.elements[0]):(U.toArray(P.__data,F),F+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,y){const S=_.value;if(y[v]===void 0){if(typeof S=="number")y[v]=S;else{const w=Array.isArray(S)?S:[S],R=[];for(let P=0;P<w.length;P++)R.push(w[P].clone());y[v]=R}return!0}else if(typeof S=="number"){if(y[v]!==S)return y[v]=S,!0}else{const w=Array.isArray(y[v])?y[v]:[y[v]],R=Array.isArray(S)?S:[S];for(let P=0;P<w.length;P++){const M=w[P];if(M.equals(R[P])===!1)return M.copy(R[P]),!0}}return!1}function g(_){const v=_.uniforms;let y=0;const S=16;let w=0;for(let R=0,P=v.length;R<P;R++){const M=v[R],T={boundary:0,storage:0},F=Array.isArray(M.value)?M.value:[M.value];for(let B=0,U=F.length;B<U;B++){const I=F[B],z=x(I);T.boundary+=z.boundary,T.storage+=z.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,R>0){w=y%S;const B=S-w;w!==0&&B-T.boundary<0&&(y+=S-w,M.__offset=y)}y+=T.storage}return w=y%S,w>0&&(y+=S-w),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function _C(){const t=ha("canvas");return t.style.display="block",t}class Ag{constructor(e={}){const{canvas:n=_C(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ge,this.useLegacyLights=!0,this.toneMapping=Gn,this.toneMappingExposure=1;const v=this;let y=!1,S=0,w=0,R=null,P=-1,M=null;const T=new bt,F=new bt;let B=null;const U=new Qe(0);let I=0,z=n.width,K=n.height,q=1,Y=null,ce=null;const de=new bt(0,0,z,K),W=new bt(0,0,z,K);let Q=!1;const _e=new yg;let ge=!1,ye=!1,we=null;const j=new Mt,oe=new Xe,ue=new X,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return R===null?q:1}let E=i;function D(C,$){for(let re=0;re<C.length;re++){const G=C[re],se=n.getContext(G,$);if(se!==null)return se}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vu}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",J,!1),n.addEventListener("webglcontextcreationerror",me,!1),E===null){const $=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&$.shift(),E=D($,C),E===null)throw D($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let N,k,V,ie,he,ee,fe,le,be,A,b,H,te,ae,L,ne,pe,Z,Re,Pe,Le,xe,Me,Ie;function je(){N=new ww(E),k=new yw(E,N,e),N.init(k),xe=new uC(E,N,k),V=new lC(E,N,k),ie=new Pw(E),he=new $R,ee=new cC(E,N,V,he,k,xe,ie),fe=new Ew(v),le=new Aw(v),be=new Hb(E,k),Me=new vw(E,N,be,k),A=new Rw(E,be,ie,Me),b=new Iw(E,A,be,ie),Re=new Uw(E,k,ee),ne=new Mw(he),H=new qR(v,fe,le,N,k,Me,ne),te=new mC(v,he),ae=new KR,L=new nC(N,k),Z=new _w(v,fe,le,V,b,h,l),pe=new aC(v,b,k),Ie=new gC(E,ie,k,V),Pe=new xw(E,N,ie,k),Le=new Cw(E,N,ie,k),ie.programs=H.programs,v.capabilities=k,v.extensions=N,v.properties=he,v.renderLists=ae,v.shadowMap=pe,v.state=V,v.info=ie}je();const O=new pC(v,E);this.xr=O,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const C=N.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=N.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(z,K,!1))},this.getSize=function(C){return C.set(z,K)},this.setSize=function(C,$,re=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,K=$,n.width=Math.floor(C*q),n.height=Math.floor($*q),re===!0&&(n.style.width=C+"px",n.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(z*q,K*q).floor()},this.setDrawingBufferSize=function(C,$,re){z=C,K=$,q=re,n.width=Math.floor(C*re),n.height=Math.floor($*re),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(de)},this.setViewport=function(C,$,re,G){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,$,re,G),V.viewport(T.copy(de).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,$,re,G){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,$,re,G),V.scissor(F.copy(W).multiplyScalar(q).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){V.setScissorTest(Q=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(C=!0,$=!0,re=!0){let G=0;if(C){let se=!1;if(R!==null){const Ce=R.texture.format;se=Ce===rg||Ce===ig||Ce===ng}if(se){const Ce=R.texture.type,Ne=Ce===vi||Ce===fi||Ce===xu||Ce===Vi||Ce===eg||Ce===tg,Oe=Z.getClearColor(),Be=Z.getClearAlpha(),We=Oe.r,He=Oe.g,ke=Oe.b;Ne?(p[0]=We,p[1]=He,p[2]=ke,p[3]=Be,E.clearBufferuiv(E.COLOR,0,p)):(g[0]=We,g[1]=He,g[2]=ke,g[3]=Be,E.clearBufferiv(E.COLOR,0,g))}else G|=E.COLOR_BUFFER_BIT}$&&(G|=E.DEPTH_BUFFER_BIT),re&&(G|=E.STENCIL_BUFFER_BIT),E.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",J,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ae.dispose(),L.dispose(),he.dispose(),fe.dispose(),le.dispose(),b.dispose(),Me.dispose(),Ie.dispose(),H.dispose(),O.dispose(),O.removeEventListener("sessionstart",lt),O.removeEventListener("sessionend",yn),we&&(we.dispose(),we=null),Ct.stop()};function Se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=ie.autoReset,$=pe.enabled,re=pe.autoUpdate,G=pe.needsUpdate,se=pe.type;je(),ie.autoReset=C,pe.enabled=$,pe.autoUpdate=re,pe.needsUpdate=G,pe.type=se}function me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Te(C){const $=C.target;$.removeEventListener("dispose",Te),Ke($)}function Ke(C){rt(C),he.remove(C)}function rt(C){const $=he.get(C).programs;$!==void 0&&($.forEach(function(re){H.releaseProgram(re)}),C.isShaderMaterial&&H.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,re,G,se,Ce){$===null&&($=Ee);const Ne=se.isMesh&&se.matrixWorld.determinant()<0,Oe=Dg(C,$,re,G,se);V.setMaterial(G,Ne);let Be=re.index,We=1;G.wireframe===!0&&(Be=A.getWireframeAttribute(re),We=2);const He=re.drawRange,ke=re.attributes.position;let ct=He.start*We,ut=(He.start+He.count)*We;Ce!==null&&(ct=Math.max(ct,Ce.start*We),ut=Math.min(ut,(Ce.start+Ce.count)*We)),Be!==null?(ct=Math.max(ct,0),ut=Math.min(ut,Be.count)):ke!=null&&(ct=Math.max(ct,0),ut=Math.min(ut,ke.count));const sn=ut-ct;if(sn<0||sn===1/0)return;Me.setup(se,G,Oe,re,Be);let Cn,ft=Pe;if(Be!==null&&(Cn=be.get(Be),ft=Le,ft.setIndex(Cn)),se.isMesh)G.wireframe===!0?(V.setLineWidth(G.wireframeLinewidth*Ae()),ft.setMode(E.LINES)):ft.setMode(E.TRIANGLES);else if(se.isLine){let $e=G.linewidth;$e===void 0&&($e=1),V.setLineWidth($e*Ae()),se.isLineSegments?ft.setMode(E.LINES):se.isLineLoop?ft.setMode(E.LINE_LOOP):ft.setMode(E.LINE_STRIP)}else se.isPoints?ft.setMode(E.POINTS):se.isSprite&&ft.setMode(E.TRIANGLES);if(se.isInstancedMesh)ft.renderInstances(ct,sn,se.count);else if(re.isInstancedBufferGeometry){const $e=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Fa=Math.min(re.instanceCount,$e);ft.renderInstances(ct,sn,Fa)}else ft.render(ct,sn)},this.compile=function(C,$){function re(G,se,Ce){G.transparent===!0&&G.side===Hn&&G.forceSinglePass===!1?(G.side=zt,G.needsUpdate=!0,no(G,se,Ce),G.side=yi,G.needsUpdate=!0,no(G,se,Ce),G.side=Hn):no(G,se,Ce)}m=L.get(C),m.init(),_.push(m),C.traverseVisible(function(G){G.isLight&&G.layers.test($.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v.useLegacyLights),C.traverse(function(G){const se=G.material;if(se)if(Array.isArray(se))for(let Ce=0;Ce<se.length;Ce++){const Ne=se[Ce];re(Ne,C,G)}else re(se,C,G)}),_.pop(),m=null};let vt=null;function xn(C){vt&&vt(C)}function lt(){Ct.stop()}function yn(){Ct.start()}const Ct=new Mg;Ct.setAnimationLoop(xn),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(C){vt=C,O.setAnimationLoop(C),C===null?Ct.stop():Ct.start()},O.addEventListener("sessionstart",lt),O.addEventListener("sessionend",yn),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera($),$=O.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,$,R),m=L.get(C,_.length),m.init(),_.push(m),j.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),_e.setFromProjectionMatrix(j),ye=this.localClippingEnabled,ge=ne.init(this.clippingPlanes,ye),x=ae.get(C,d.length),x.init(),d.push(x),Eu(C,$,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Y,ce),this.info.render.frame++,ge===!0&&ne.beginShadows();const re=m.state.shadowsArray;if(pe.render(re,C,$),ge===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(x,C),m.setupLights(v.useLegacyLights),$.isArrayCamera){const G=$.cameras;for(let se=0,Ce=G.length;se<Ce;se++){const Ne=G[se];Su(x,C,Ne,Ne.viewport)}}else Su(x,C,$);R!==null&&(ee.updateMultisampleRenderTarget(R),ee.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,$),Me.resetDefaultState(),P=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Eu(C,$,re,G){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||_e.intersectsSprite(C)){G&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(j);const Ne=b.update(C),Oe=C.material;Oe.visible&&x.push(C,Ne,Oe,re,ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||_e.intersectsObject(C))){const Ne=b.update(C),Oe=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ue.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ue.copy(Ne.boundingSphere.center)),ue.applyMatrix4(C.matrixWorld).applyMatrix4(j)),Array.isArray(Oe)){const Be=Ne.groups;for(let We=0,He=Be.length;We<He;We++){const ke=Be[We],ct=Oe[ke.materialIndex];ct&&ct.visible&&x.push(C,Ne,ct,re,ue.z,ke)}}else Oe.visible&&x.push(C,Ne,Oe,re,ue.z,null)}}const Ce=C.children;for(let Ne=0,Oe=Ce.length;Ne<Oe;Ne++)Eu(Ce[Ne],$,re,G)}function Su(C,$,re,G){const se=C.opaque,Ce=C.transmissive,Ne=C.transparent;m.setupLightsView(re),ge===!0&&ne.setGlobalState(v.clippingPlanes,re),Ce.length>0&&Lg(se,Ce,$,re),G&&V.viewport(T.copy(G)),se.length>0&&to(se,$,re),Ce.length>0&&to(Ce,$,re),Ne.length>0&&to(Ne,$,re),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Lg(C,$,re,G){const se=k.isWebGL2;we===null&&(we=new $i(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?Os:vi,minFilter:Ns,samples:se?4:0})),v.getDrawingBufferSize(oe),se?we.setSize(oe.x,oe.y):we.setSize(Lc(oe.x),Lc(oe.y));const Ce=v.getRenderTarget();v.setRenderTarget(we),v.getClearColor(U),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=Gn,to(C,re,G),ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we);let Oe=!1;for(let Be=0,We=$.length;Be<We;Be++){const He=$[Be],ke=He.object,ct=He.geometry,ut=He.material,sn=He.group;if(ut.side===Hn&&ke.layers.test(G.layers)){const Cn=ut.side;ut.side=zt,ut.needsUpdate=!0,bu(ke,re,G,ct,ut,sn),ut.side=Cn,ut.needsUpdate=!0,Oe=!0}}Oe===!0&&(ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we)),v.setRenderTarget(Ce),v.setClearColor(U,I),v.toneMapping=Ne}function to(C,$,re){const G=$.isScene===!0?$.overrideMaterial:null;for(let se=0,Ce=C.length;se<Ce;se++){const Ne=C[se],Oe=Ne.object,Be=Ne.geometry,We=G===null?Ne.material:G,He=Ne.group;Oe.layers.test(re.layers)&&bu(Oe,$,re,Be,We,He)}}function bu(C,$,re,G,se,Ce){C.onBeforeRender(v,$,re,G,se,Ce),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(v,$,re,G,C,Ce),se.transparent===!0&&se.side===Hn&&se.forceSinglePass===!1?(se.side=zt,se.needsUpdate=!0,v.renderBufferDirect(re,$,G,se,C,Ce),se.side=yi,se.needsUpdate=!0,v.renderBufferDirect(re,$,G,se,C,Ce),se.side=Hn):v.renderBufferDirect(re,$,G,se,C,Ce),C.onAfterRender(v,$,re,G,se,Ce)}function no(C,$,re){$.isScene!==!0&&($=Ee);const G=he.get(C),se=m.state.lights,Ce=m.state.shadowsArray,Ne=se.state.version,Oe=H.getParameters(C,se.state,Ce,$,re),Be=H.getProgramCacheKey(Oe);let We=G.programs;G.environment=C.isMeshStandardMaterial?$.environment:null,G.fog=$.fog,G.envMap=(C.isMeshStandardMaterial?le:fe).get(C.envMap||G.environment),We===void 0&&(C.addEventListener("dispose",Te),We=new Map,G.programs=We);let He=We.get(Be);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===Ne)return Tu(C,Oe),He}else Oe.uniforms=H.getUniforms(C),C.onBuild(re,Oe,v),C.onBeforeCompile(Oe,v),He=H.acquireProgram(Oe,Be),We.set(Be,He),G.uniforms=Oe.uniforms;const ke=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=ne.uniform),Tu(C,Oe),G.needsLights=Ig(C),G.lightsStateVersion=Ne,G.needsLights&&(ke.ambientLightColor.value=se.state.ambient,ke.lightProbe.value=se.state.probe,ke.directionalLights.value=se.state.directional,ke.directionalLightShadows.value=se.state.directionalShadow,ke.spotLights.value=se.state.spot,ke.spotLightShadows.value=se.state.spotShadow,ke.rectAreaLights.value=se.state.rectArea,ke.ltc_1.value=se.state.rectAreaLTC1,ke.ltc_2.value=se.state.rectAreaLTC2,ke.pointLights.value=se.state.point,ke.pointLightShadows.value=se.state.pointShadow,ke.hemisphereLights.value=se.state.hemi,ke.directionalShadowMap.value=se.state.directionalShadowMap,ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,ke.spotShadowMap.value=se.state.spotShadowMap,ke.spotLightMatrix.value=se.state.spotLightMatrix,ke.spotLightMap.value=se.state.spotLightMap,ke.pointShadowMap.value=se.state.pointShadowMap,ke.pointShadowMatrix.value=se.state.pointShadowMatrix);const ct=He.getUniforms(),ut=Wo.seqWithValue(ct.seq,ke);return G.currentProgram=He,G.uniformsList=ut,He}function Tu(C,$){const re=he.get(C);re.outputColorSpace=$.outputColorSpace,re.instancing=$.instancing,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function Dg(C,$,re,G,se){$.isScene!==!0&&($=Ee),ee.resetTextureUnits();const Ce=$.fog,Ne=G.isMeshStandardMaterial?$.environment:null,Oe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Rn,Be=(G.isMeshStandardMaterial?le:fe).get(G.envMap||Ne),We=G.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,He=!!re.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!re.morphAttributes.position,ct=!!re.morphAttributes.normal,ut=!!re.morphAttributes.color,sn=G.toneMapped?v.toneMapping:Gn,Cn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ft=Cn!==void 0?Cn.length:0,$e=he.get(G),Fa=m.state.lights;if(ge===!0&&(ye===!0||C!==M)){const Wt=C===M&&G.id===P;ne.setState(G,C,Wt)}let xt=!1;G.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Fa.state.version||$e.outputColorSpace!==Oe||se.isInstancedMesh&&$e.instancing===!1||!se.isInstancedMesh&&$e.instancing===!0||se.isSkinnedMesh&&$e.skinning===!1||!se.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Be||G.fog===!0&&$e.fog!==Ce||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ne.numPlanes||$e.numIntersection!==ne.numIntersection)||$e.vertexAlphas!==We||$e.vertexTangents!==He||$e.morphTargets!==ke||$e.morphNormals!==ct||$e.morphColors!==ut||$e.toneMapping!==sn||k.isWebGL2===!0&&$e.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,$e.__version=G.version);let bi=$e.currentProgram;xt===!0&&(bi=no(G,$,se));let Au=!1,Jr=!1,Ba=!1;const Pt=bi.getUniforms(),Ti=$e.uniforms;if(V.useProgram(bi.program)&&(Au=!0,Jr=!0,Ba=!0),G.id!==P&&(P=G.id,Jr=!0),Au||M!==C){if(Pt.setValue(E,"projectionMatrix",C.projectionMatrix),k.logarithmicDepthBuffer&&Pt.setValue(E,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,Jr=!0,Ba=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Wt=Pt.map.cameraPosition;Wt!==void 0&&Wt.setValue(E,ue.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pt.setValue(E,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||se.isSkinnedMesh)&&Pt.setValue(E,"viewMatrix",C.matrixWorldInverse)}if(se.isSkinnedMesh){Pt.setOptional(E,se,"bindMatrix"),Pt.setOptional(E,se,"bindMatrixInverse");const Wt=se.skeleton;Wt&&(k.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Pt.setValue(E,"boneTexture",Wt.boneTexture,ee),Pt.setValue(E,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ha=re.morphAttributes;if((Ha.position!==void 0||Ha.normal!==void 0||Ha.color!==void 0&&k.isWebGL2===!0)&&Re.update(se,re,bi),(Jr||$e.receiveShadow!==se.receiveShadow)&&($e.receiveShadow=se.receiveShadow,Pt.setValue(E,"receiveShadow",se.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ti.envMap.value=Be,Ti.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Jr&&(Pt.setValue(E,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&Ug(Ti,Ba),Ce&&G.fog===!0&&te.refreshFogUniforms(Ti,Ce),te.refreshMaterialUniforms(Ti,G,q,K,we),Wo.upload(E,$e.uniformsList,Ti,ee)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Wo.upload(E,$e.uniformsList,Ti,ee),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pt.setValue(E,"center",se.center),Pt.setValue(E,"modelViewMatrix",se.modelViewMatrix),Pt.setValue(E,"normalMatrix",se.normalMatrix),Pt.setValue(E,"modelMatrix",se.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wt=G.uniformsGroups;for(let ka=0,Ng=Wt.length;ka<Ng;ka++)if(k.isWebGL2){const wu=Wt[ka];Ie.update(wu,bi),Ie.bind(wu,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function Ug(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Ig(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,$,re){he.get(C.texture).__webglTexture=$,he.get(C.depthTexture).__webglTexture=re;const G=he.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=re===void 0,G.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,$){const re=he.get(C);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,re=0){R=C,S=$,w=re;let G=!0,se=null,Ce=!1,Ne=!1;if(C){const Be=he.get(C);Be.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(E.FRAMEBUFFER,null),G=!1):Be.__webglFramebuffer===void 0?ee.setupRenderTarget(C):Be.__hasExternalTextures&&ee.rebindTextures(C,he.get(C.texture).__webglTexture,he.get(C.depthTexture).__webglTexture);const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ne=!0);const He=he.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(se=He[$],Ce=!0):k.isWebGL2&&C.samples>0&&ee.useMultisampledRTT(C)===!1?se=he.get(C).__webglMultisampledFramebuffer:se=He,T.copy(C.viewport),F.copy(C.scissor),B=C.scissorTest}else T.copy(de).multiplyScalar(q).floor(),F.copy(W).multiplyScalar(q).floor(),B=Q;if(V.bindFramebuffer(E.FRAMEBUFFER,se)&&k.drawBuffers&&G&&V.drawBuffers(C,se),V.viewport(T),V.scissor(F),V.setScissorTest(B),Ce){const Be=he.get(C.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,re)}else if(Ne){const Be=he.get(C.texture),We=$||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Be.__webglTexture,re||0,We)}P=-1},this.readRenderTargetPixels=function(C,$,re,G,se,Ce,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){V.bindFramebuffer(E.FRAMEBUFFER,Oe);try{const Be=C.texture,We=Be.format,He=Be.type;if(We!==pn&&xe.convert(We)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=He===Os&&(N.has("EXT_color_buffer_half_float")||k.isWebGL2&&N.has("EXT_color_buffer_float"));if(He!==vi&&xe.convert(He)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===di&&(k.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-G&&re>=0&&re<=C.height-se&&E.readPixels($,re,G,se,xe.convert(We),xe.convert(He),Ce)}finally{const Be=R!==null?he.get(R).__webglFramebuffer:null;V.bindFramebuffer(E.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(C,$,re=0){const G=Math.pow(2,-re),se=Math.floor($.image.width*G),Ce=Math.floor($.image.height*G);ee.setTexture2D($,0),E.copyTexSubImage2D(E.TEXTURE_2D,re,0,0,C.x,C.y,se,Ce),V.unbindTexture()},this.copyTextureToTexture=function(C,$,re,G=0){const se=$.image.width,Ce=$.image.height,Ne=xe.convert(re.format),Oe=xe.convert(re.type);ee.setTexture2D(re,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,re.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,re.unpackAlignment),$.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,G,C.x,C.y,se,Ce,Ne,Oe,$.image.data):$.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,G,C.x,C.y,$.mipmaps[0].width,$.mipmaps[0].height,Ne,$.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,G,C.x,C.y,Ne,Oe,$.image),G===0&&re.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(C,$,re,G,se=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=C.max.x-C.min.x+1,Ne=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,Be=xe.convert(G.format),We=xe.convert(G.type);let He;if(G.isData3DTexture)ee.setTexture3D(G,0),He=E.TEXTURE_3D;else if(G.isDataArrayTexture)ee.setTexture2DArray(G,0),He=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,G.unpackAlignment);const ke=E.getParameter(E.UNPACK_ROW_LENGTH),ct=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ut=E.getParameter(E.UNPACK_SKIP_PIXELS),sn=E.getParameter(E.UNPACK_SKIP_ROWS),Cn=E.getParameter(E.UNPACK_SKIP_IMAGES),ft=re.isCompressedTexture?re.mipmaps[0]:re.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,ft.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ft.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,C.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,C.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,C.min.z),re.isDataTexture||re.isData3DTexture?E.texSubImage3D(He,se,$.x,$.y,$.z,Ce,Ne,Oe,Be,We,ft.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(He,se,$.x,$.y,$.z,Ce,Ne,Oe,Be,ft.data)):E.texSubImage3D(He,se,$.x,$.y,$.z,Ce,Ne,Oe,Be,We,ft),E.pixelStorei(E.UNPACK_ROW_LENGTH,ke),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ct),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ut),E.pixelStorei(E.UNPACK_SKIP_ROWS,sn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Cn),se===0&&G.generateMipmaps&&E.generateMipmap(He),V.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ee.setTextureCube(C,0):C.isData3DTexture?ee.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ee.setTexture2DArray(C,0):ee.setTexture2D(C,0),V.unbindTexture()},this.resetState=function(){S=0,w=0,R=null,V.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ge?Xi:sg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xi?Ge:Rn}}class vC extends Ag{}vC.prototype.isWebGL1Renderer=!0;class xC extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class wg extends Qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _h=new X,vh=new X,xh=new Mt,Fl=new fg,Ho=new Ia;class yC extends Gt{constructor(e=new $n,n=new wg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)_h.fromBufferAttribute(n,r-1),vh.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=_h.distanceTo(vh);e.setAttribute("lineDistance",new Vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;xh.copy(r).invert(),Fl.copy(e.ray).applyMatrix4(xh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new X,u=new X,f=new X,h=new X,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=d,y=_-1;v<y;v+=p){const S=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,w),Fl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||n.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let v=d,y=_-1;v<y;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Fl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||n.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const yh=new X,Mh=new X;class MC extends yC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)yh.fromBufferAttribute(n,r),Mh.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+yh.distanceTo(Mh);e.setAttribute("lineDistance",new Vn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Eh{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(It(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vu);const Sh={type:"change"},Bl={type:"start"},bh={type:"end"};class EC extends Ji{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",fe),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",fe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Sh),i.update(),s=r.NONE},this.update=function(){const L=new X,ne=new Yi().setFromUnitVectors(e.up,new X(0,1,0)),pe=ne.clone().invert(),Z=new X,Re=new Yi,Pe=new X,Le=2*Math.PI;return function(){const Me=i.object.position;L.copy(Me).sub(i.target),L.applyQuaternion(ne),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&M(R()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ie=i.minAzimuthAngle,je=i.maxAzimuthAngle;return isFinite(Ie)&&isFinite(je)&&(Ie<-Math.PI?Ie+=Le:Ie>Math.PI&&(Ie-=Le),je<-Math.PI?je+=Le:je>Math.PI&&(je-=Le),Ie<=je?a.theta=Math.max(Ie,Math.min(je,a.theta)):a.theta=a.theta>(Ie+je)/2?Math.max(Ie,a.theta):Math.min(je,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),L.setFromSpherical(a),L.applyQuaternion(pe),Me.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Z.distanceToSquared(i.object.position)>o||8*(1-Re.dot(i.object.quaternion))>o||Pe.distanceToSquared(i.target)>0?(i.dispatchEvent(Sh),Z.copy(i.object.position),Re.copy(i.object.quaternion),Pe.copy(i.target),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",A),i.domElement.removeEventListener("pointerdown",N),i.domElement.removeEventListener("pointercancel",V),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",k),i.domElement.removeEventListener("pointerup",V),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",fe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Eh,l=new Eh;let c=1;const u=new X;let f=!1;const h=new Xe,p=new Xe,g=new Xe,x=new Xe,m=new Xe,d=new Xe,_=new Xe,v=new Xe,y=new Xe,S=[],w={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function P(){return Math.pow(.95,i.zoomSpeed)}function M(L){l.theta-=L}function T(L){l.phi-=L}const F=function(){const L=new X;return function(pe,Z){L.setFromMatrixColumn(Z,0),L.multiplyScalar(-pe),u.add(L)}}(),B=function(){const L=new X;return function(pe,Z){i.screenSpacePanning===!0?L.setFromMatrixColumn(Z,1):(L.setFromMatrixColumn(Z,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(pe),u.add(L)}}(),U=function(){const L=new X;return function(pe,Z){const Re=i.domElement;if(i.object.isPerspectiveCamera){const Pe=i.object.position;L.copy(Pe).sub(i.target);let Le=L.length();Le*=Math.tan(i.object.fov/2*Math.PI/180),F(2*pe*Le/Re.clientHeight,i.object.matrix),B(2*Z*Le/Re.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(pe*(i.object.right-i.object.left)/i.object.zoom/Re.clientWidth,i.object.matrix),B(Z*(i.object.top-i.object.bottom)/i.object.zoom/Re.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function I(L){i.object.isPerspectiveCamera?c/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(L){i.object.isPerspectiveCamera?c*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L){h.set(L.clientX,L.clientY)}function q(L){_.set(L.clientX,L.clientY)}function Y(L){x.set(L.clientX,L.clientY)}function ce(L){p.set(L.clientX,L.clientY),g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const ne=i.domElement;M(2*Math.PI*g.x/ne.clientHeight),T(2*Math.PI*g.y/ne.clientHeight),h.copy(p),i.update()}function de(L){v.set(L.clientX,L.clientY),y.subVectors(v,_),y.y>0?I(P()):y.y<0&&z(P()),_.copy(v),i.update()}function W(L){m.set(L.clientX,L.clientY),d.subVectors(m,x).multiplyScalar(i.panSpeed),U(d.x,d.y),x.copy(m),i.update()}function Q(L){L.deltaY<0?z(P()):L.deltaY>0&&I(P()),i.update()}function _e(L){let ne=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),ne=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),ne=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),ne=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),ne=!0;break}ne&&(L.preventDefault(),i.update())}function ge(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);h.set(L,ne)}}function ye(){if(S.length===1)x.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);x.set(L,ne)}}function we(){const L=S[0].pageX-S[1].pageX,ne=S[0].pageY-S[1].pageY,pe=Math.sqrt(L*L+ne*ne);_.set(0,pe)}function j(){i.enableZoom&&we(),i.enablePan&&ye()}function oe(){i.enableZoom&&we(),i.enableRotate&&ge()}function ue(L){if(S.length==1)p.set(L.pageX,L.pageY);else{const pe=ae(L),Z=.5*(L.pageX+pe.x),Re=.5*(L.pageY+pe.y);p.set(Z,Re)}g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const ne=i.domElement;M(2*Math.PI*g.x/ne.clientHeight),T(2*Math.PI*g.y/ne.clientHeight),h.copy(p)}function Ee(L){if(S.length===1)m.set(L.pageX,L.pageY);else{const ne=ae(L),pe=.5*(L.pageX+ne.x),Z=.5*(L.pageY+ne.y);m.set(pe,Z)}d.subVectors(m,x).multiplyScalar(i.panSpeed),U(d.x,d.y),x.copy(m)}function Ae(L){const ne=ae(L),pe=L.pageX-ne.x,Z=L.pageY-ne.y,Re=Math.sqrt(pe*pe+Z*Z);v.set(0,Re),y.set(0,Math.pow(v.y/_.y,i.zoomSpeed)),I(y.y),_.copy(v)}function E(L){i.enableZoom&&Ae(L),i.enablePan&&Ee(L)}function D(L){i.enableZoom&&Ae(L),i.enableRotate&&ue(L)}function N(L){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",k),i.domElement.addEventListener("pointerup",V)),b(L),L.pointerType==="touch"?le(L):ie(L))}function k(L){i.enabled!==!1&&(L.pointerType==="touch"?be(L):he(L))}function V(L){H(L),S.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",k),i.domElement.removeEventListener("pointerup",V)),i.dispatchEvent(bh),s=r.NONE}function ie(L){let ne;switch(L.button){case 0:ne=i.mouseButtons.LEFT;break;case 1:ne=i.mouseButtons.MIDDLE;break;case 2:ne=i.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case nr.DOLLY:if(i.enableZoom===!1)return;q(L),s=r.DOLLY;break;case nr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;Y(L),s=r.PAN}else{if(i.enableRotate===!1)return;K(L),s=r.ROTATE}break;case nr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;K(L),s=r.ROTATE}else{if(i.enablePan===!1)return;Y(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Bl)}function he(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ce(L);break;case r.DOLLY:if(i.enableZoom===!1)return;de(L);break;case r.PAN:if(i.enablePan===!1)return;W(L);break}}function ee(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(Bl),Q(L),i.dispatchEvent(bh))}function fe(L){i.enabled===!1||i.enablePan===!1||_e(L)}function le(L){switch(te(L),S.length){case 1:switch(i.touches.ONE){case ir.ROTATE:if(i.enableRotate===!1)return;ge(),s=r.TOUCH_ROTATE;break;case ir.PAN:if(i.enablePan===!1)return;ye(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ir.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;j(),s=r.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;oe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Bl)}function be(L){switch(te(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ue(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ee(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;E(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;D(L),i.update();break;default:s=r.NONE}}function A(L){i.enabled!==!1&&L.preventDefault()}function b(L){S.push(L)}function H(L){delete w[L.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId==L.pointerId){S.splice(ne,1);return}}function te(L){let ne=w[L.pointerId];ne===void 0&&(ne=new Xe,w[L.pointerId]=ne),ne.set(L.pageX,L.pageY)}function ae(L){const ne=L.pointerId===S[0].pointerId?S[1]:S[0];return w[ne.pointerId]}i.domElement.addEventListener("contextmenu",A),i.domElement.addEventListener("pointerdown",N),i.domElement.addEventListener("pointercancel",V),i.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function SC(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[t&255]+wt[t>>8&255]+wt[t>>16&255]+wt[t>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[n&63|128]+wt[n>>8&255]+"-"+wt[n>>16&255]+wt[n>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Th(t,e,n){return(1-n)*t+n*e}function Ah(t){const e=t.map(s=>s.probability);if(t.length!==e.length)throw new Error("Items and weights must be of the same size");if(!t.length)throw new Error("Items must not be empty");const n=[];for(let s=0;s<e.length;s+=1)n[s]=e[s]+(n[s-1]||0);const r=n[n.length-1]*Math.random();for(let s=0;s<t.length;s+=1)if(n[s]>=r)return t[s];return t[0]}let De;const mn=new Array(32).fill(void 0);mn.push(void 0,null,!0,!1);function ri(t){return mn[t]}let bs=mn.length;function bC(t){t<36||(mn[t]=bs,bs=t)}function TC(t){const e=ri(t);return bC(t),e}const Rg=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Rg.decode();let Xo=new Uint8Array;function jo(){return Xo.byteLength===0&&(Xo=new Uint8Array(De.memory.buffer)),Xo}function Uc(t,e){return Rg.decode(jo().subarray(t,t+e))}function Sr(t){bs===mn.length&&mn.push(mn.length+1);const e=bs;return bs=mn[e],mn[e]=t,e}let pi=0;const qo=new TextEncoder("utf-8"),AC=typeof qo.encodeInto=="function"?function(t,e){return qo.encodeInto(t,e)}:function(t,e){const n=qo.encode(t);return e.set(n),{read:t.length,written:n.length}};function Ar(t,e,n){if(n===void 0){const a=qo.encode(t),l=e(a.length);return jo().subarray(l,l+a.length).set(a),pi=a.length,l}let i=t.length,r=e(i);const s=jo();let o=0;for(;o<i;o++){const a=t.charCodeAt(o);if(a>127)break;s[r+o]=a}if(o!==i){o!==0&&(t=t.slice(o)),r=n(r,i,i=o+t.length*3);const a=jo().subarray(r+o,r+i),l=AC(t,a);o+=l.written}return pi=o,r}function wC(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`);return t.ptr}let $o=32;function RC(t){if($o==1)throw new Error("out of js stack");return mn[--$o]=t,$o}let Yo=new Int32Array;function wh(){return Yo.byteLength===0&&(Yo=new Int32Array(De.memory.buffer)),Yo}function CC(t,e){try{return t.apply(this,e)}catch(n){De.__wbindgen_exn_store(Sr(n))}}class Fs{static __wrap(e){const n=Object.create(Fs.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();De.__wbg_birdconfig_free(e)}get probability(){return De.__wbg_get_birdconfig_probability(this.ptr)}set probability(e){De.__wbg_set_birdconfig_probability(this.ptr,e)}get neighbor_distance(){return De.__wbg_get_birdconfig_neighbor_distance(this.ptr)}set neighbor_distance(e){De.__wbg_set_birdconfig_neighbor_distance(this.ptr,e)}get desired_separation(){return De.__wbg_get_birdconfig_desired_separation(this.ptr)}set desired_separation(e){De.__wbg_set_birdconfig_desired_separation(this.ptr,e)}get separation_multiplier(){return De.__wbg_get_birdconfig_separation_multiplier(this.ptr)}set separation_multiplier(e){De.__wbg_set_birdconfig_separation_multiplier(this.ptr,e)}get alignment_multiplier(){return De.__wbg_get_birdconfig_alignment_multiplier(this.ptr)}set alignment_multiplier(e){De.__wbg_set_birdconfig_alignment_multiplier(this.ptr,e)}get cohesion_multiplier(){return De.__wbg_get_birdconfig_cohesion_multiplier(this.ptr)}set cohesion_multiplier(e){De.__wbg_set_birdconfig_cohesion_multiplier(this.ptr,e)}get max_speed(){return De.__wbg_get_birdconfig_max_speed(this.ptr)}set max_speed(e){De.__wbg_set_birdconfig_max_speed(this.ptr,e)}get max_force(){return De.__wbg_get_birdconfig_max_force(this.ptr)}set max_force(e){De.__wbg_set_birdconfig_max_force(this.ptr,e)}get bird_size(){return De.__wbg_get_birdconfig_bird_size(this.ptr)}set bird_size(e){De.__wbg_set_birdconfig_bird_size(this.ptr,e)}get color_r(){return De.__wbg_get_birdconfig_color_r(this.ptr)}set color_r(e){De.__wbg_set_birdconfig_color_r(this.ptr,e)}get color_g(){return De.__wbg_get_birdconfig_color_g(this.ptr)}set color_g(e){De.__wbg_set_birdconfig_color_g(this.ptr,e)}get color_b(){return De.__wbg_get_birdconfig_color_b(this.ptr)}set color_b(e){De.__wbg_set_birdconfig_color_b(this.ptr,e)}get id(){try{const i=De.__wbindgen_add_to_stack_pointer(-16);De.birdconfig_id(i,this.ptr);var e=wh()[i/4+0],n=wh()[i/4+1];return Uc(e,n)}finally{De.__wbindgen_add_to_stack_pointer(16),De.__wbindgen_free(e,n)}}set id(e){const n=Ar(e,De.__wbindgen_malloc,De.__wbindgen_realloc),i=pi;De.birdconfig_set_id(this.ptr,n,i)}static new(e,n,i,r,s,o,a,l,c,u,f,h,p){const g=Ar(e,De.__wbindgen_malloc,De.__wbindgen_realloc),x=pi,m=De.birdconfig_new(g,x,n,i,r,s,o,a,l,c,u,f,h,p);return Fs.__wrap(m)}}class pa{static __wrap(e){const n=Object.create(pa.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();De.__wbg_flock_free(e)}constructor(e,n){const i=De.flock_new(e,n);return pa.__wrap(i)}get max_flock_size(){return De.flock_max_flock_size(this.ptr)>>>0}set max_flock_size(e){De.flock_set_max_flock_size(this.ptr,e)}get current_flock_size(){return De.flock_current_flock_size(this.ptr)>>>0}add_bird(e,n,i){const r=Ar(e,De.__wbindgen_malloc,De.__wbindgen_realloc),s=pi;De.flock_add_bird(this.ptr,r,s,n,i)}add_bird_at_random_position(e,n,i){const r=Ar(e,De.__wbindgen_malloc,De.__wbindgen_realloc),s=pi;De.flock_add_bird_at_random_position(this.ptr,r,s,n,i)}insert_bird_config(e,n){const i=Ar(e,De.__wbindgen_malloc,De.__wbindgen_realloc),r=pi;wC(n,Fs);var s=n.ptr;n.ptr=0,De.flock_insert_bird_config(this.ptr,i,r,s)}remove_bird_config(e){const n=Ar(e,De.__wbindgen_malloc,De.__wbindgen_realloc),i=pi;De.flock_remove_bird_config(this.ptr,n,i)}update(e,n,i,r){try{De.flock_update(this.ptr,e,n,i,RC(r))}finally{mn[$o++]=void 0}}}async function PC(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(i){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function LC(){const t={};return t.wbg={},t.wbg.__wbg_log_e22a238abcadd0a4=function(e,n){console.log(Uc(e,n))},t.wbg.__wbindgen_object_drop_ref=function(e){TC(e)},t.wbg.__wbg_call_3999bee59e9f7719=function(){return CC(function(e,n,i,r){const s=ri(e).call(ri(n),ri(i),ri(r));return Sr(s)},arguments)},t.wbg.__wbg_buffer_3f3d764d4747d564=function(e){const n=ri(e).buffer;return Sr(n)},t.wbg.__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4=function(e,n,i){const r=new Float32Array(ri(e),n>>>0,i>>>0);return Sr(r)},t.wbg.__wbg_new_4d6520efe4ca3e24=function(e){const n=new Float32Array(ri(e));return Sr(n)},t.wbg.__wbindgen_throw=function(e,n){throw new Error(Uc(e,n))},t.wbg.__wbindgen_memory=function(){const e=De.memory;return Sr(e)},t}function DC(t,e){return De=t.exports,Cg.__wbindgen_wasm_module=e,Yo=new Int32Array,Xo=new Uint8Array,De}async function Cg(t){typeof t>"u"&&(t=new URL(""+new URL("flock_bg.5f90c271.wasm",import.meta.url).href,self.location));const e=LC();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:i}=await PC(await t,e);return DC(n,i)}const ko=[{navy:{50:"#f6f9f8",100:"#e4f1f7",200:"#c2e1ec",300:"#90c2d4",400:"#579db4",500:"#407c93",600:"#346276",700:"#2b495a",800:"#1e3140",900:"#121e2a"},turquoise:{50:"#eef5f4",100:"#cff0f2",200:"#98e7e1",300:"#5dcdbe",400:"#23af93",500:"#18946b",600:"#167e53",700:"#156142",800:"#104232",900:"#0b2825"},gold:{50:"#fbf9f3",100:"#f8efb9",200:"#f0dd7d",300:"#d9b94c",400:"#b89029",500:"#987114",600:"#7c580d",700:"#5f420c",800:"#412d0b",900:"#2c1c08"},cocoa:{50:"#fcfaf6",100:"#faefce",200:"#f4d89f",300:"#e3b16b",400:"#d18540",500:"#b86424",600:"#9b4a17",700:"#773714",800:"#532610",900:"#36180b"},coral:{50:"#fcfbf9",100:"#fbf0e3",200:"#f7d3c6",300:"#eba798",400:"#e4786a",500:"#d45547",600:"#ba3b30",700:"#932c25",800:"#681f1a",900:"#41130f"}}],Rh={primary:ko[0].turquoise,secondary:ko[0].coral,highlight:ko[0].gold,compliment:ko[0].navy};function UC(t,e){return t.length>e?t.slice(0,e-1):t}function Tn(t,e){return Math.random()*(e-t)+t}function Hl(t,e){return Math.round(Tn(t,e))}function IC(){const t=Tn(0,1),e=Tn(0,1),n=Tn(0,1);return new Qe(t,e,n)}const NC="default",OC=1200;function Pg(){return UC(SC(),8)}function FC(){return{id:Pg(),probability:Hl(25,75),neighborDistance:Hl(0,50),desiredSeparation:Hl(50,250),separationMultiplier:Tn(.001,1.2),alignmentMultiplier:Tn(.001,1.2),cohesionMultiplier:Tn(.001,1.2),maxForce:Tn(.001,.5),maxSpeed:Tn(.001,10),birdColor:"#"+IC().getHexString(),birdSize:Tn(3,15),wasmObject:void 0}}const kl=KM("flock",()=>{const t=Ze(new Map),e=Ze(!1),n=Ze(!1),i=Ze(!1),r=Ze(!0),s=Ze(1),o=Ze(OC),a=Ze({});async function l(){await Cg(),a.value=new pa(o.value,BigInt(new Date().getUTCMilliseconds())),f({id:Pg(),probability:20,neighborDistance:30,desiredSeparation:40,separationMultiplier:.3,alignmentMultiplier:.01,cohesionMultiplier:.01,maxSpeed:7,maxForce:.7,birdSize:10,birdColor:Rh.secondary[400]}),f({id:NC,probability:80,neighborDistance:40,desiredSeparation:25,separationMultiplier:.5,alignmentMultiplier:.5,cohesionMultiplier:.3,maxSpeed:5,maxForce:.33,birdSize:12,birdColor:Rh.primary[500]}),n.value=!0}function c(){var d;t.value.forEach(_=>{var v;_&&((v=_.wasmObject)==null||v.free())}),(d=a.value)==null||d.free()}function u(d){a.value&&(a.value.max_flock_size=d)}function f(d){if(!a.value)throw new Error("[background.vuex] cannot add config, flock doesn't exist.");const _=new Qe(d.birdColor);if(d.wasmObject=Fs.new(d.id,d.probability,d.neighborDistance,d.desiredSeparation,d.separationMultiplier,d.alignmentMultiplier,d.cohesionMultiplier,d.maxSpeed,d.maxForce,d.birdSize,_.r,_.g,_.b),!d.wasmObject)throw new Error("wasm object could not be generated for bird config");t.value.set(d.id,d),a.value.insert_bird_config(d.id,d.wasmObject)}function h(d){if(!a.value)throw new Error("[background.vuex] cannot remove config, flock doesn't exist.");if(!t.value.get(d))throw new Error("[background.vuex] cannot remove config, cannot find matching config.");a.value.remove_bird_config(d),t.value.delete(d)}function p(d){a.value&&a.value.update(d.sceneWidth,d.sceneHeight,d.timeStep?d.timeStep:s.value,d.updateFlockGeometryCallback)}function g(d){if(!a.value)return;const _=Ah([...t.value.values()]);a.value.add_bird_at_random_position(_.id,d.viewWidth,d.viewHeight)}function x(d){if(!a.value)return;const _=Ah([...t.value.values()]);a.value.add_bird(_.id,d.x,d.y)}function m(){r.value&&t.value.forEach(d=>{const _={...FC(),id:d.id},v=En([0,1e4],[d.neighborDistance,_.neighborDistance]),y=En([0,1e4],[d.desiredSeparation,_.desiredSeparation]),S=En([0,1e4],[d.separationMultiplier,_.separationMultiplier]),w=En([0,1e4],[d.alignmentMultiplier,_.alignmentMultiplier]),R=En([0,1e4],[d.cohesionMultiplier,_.cohesionMultiplier]),P=En([0,1e4],[d.maxForce,_.maxForce]),M=En([0,1e4],[d.maxSpeed,_.maxSpeed]),T=En([0,1e4],[d.birdColor,_.birdColor]);Sc({from:0,to:1e4,duration:1e3*2,onUpdate:F=>{f({...d,neighborDistance:v(F),desiredSeparation:y(F),separationMultiplier:S(F),alignmentMultiplier:w(F),cohesionMultiplier:R(F),maxForce:P(F),maxSpeed:M(F),birdColor:T(F)})}})})}return{birdConfigs:t,isDragging:e,isRandomizeAnimationEnabled:r,isReady:n,updating:i,timeStep:s,maxFlockSize:o,updateMaxFlockSize:u,flock:a,init:l,dispose:c,addOrUpdateBirdConfig:f,removeBirdConfig:h,updateFlock:p,addBirdAtRandomPosition:g,addBirdAtPosition:x,cycleAnimateBirdConfigs:m}}),BC={key:0,class:"absolute left-0 top-0 w-full h-full bg-black bg-opacity-60 z-10"},HC=Mi({__name:"BackgroundWrapper",setup(t){const{init:e,dispose:n,addBirdAtRandomPosition:i,addBirdAtPosition:r,cycleAnimateBirdConfigs:s}=kl(),{isDragging:o,maxFlockSize:a,flock:l}=ZM(kl()),c=Ze(!1),u=Ze(null),f=Ze(),h=Ze(new xC),p=Ze(new Yt),g=Ze(null),x=Ze(null),m=Ze(null),d=Ze(null),_=mt(()=>{const U=p.value.position.z,I=p.value.fov*Math.PI/180;return 2*Math.tan(I/2)*Math.abs(U)}),v=mt(()=>_.value*(S.value/y.value)),y=mt(()=>window.innerHeight??0),S=mt(()=>window.innerWidth??0);Gs(async()=>{u.value=new Ag({canvas:f.value}),p.value=new Yt(75,S.value/y.value,.1,1e4),p.value.position.z=1e3,g.value=new EC(p.value,f.value),g.value.target=new X(0,0,0),h.value.background=new Qe("black"),x.value=new $n,m.value=new wg({vertexColors:!0}),p.value.aspect=S.value/y.value,d.value=new MC(x.value,m.value),h.value.add(d.value),await e(),Sc({from:0,to:a.value,duration:1e3*2,onUpdate:()=>{l.value&&l.value.current_flock_size>a.value||i({viewWidth:v.value,viewHeight:_.value})},onComplete:()=>Sc({from:0,to:100,duration:1e3*10,repeat:1/0,onRepeat:s})}),window.addEventListener("resize",w),window.addEventListener("touchstart",tr(F,40),!1),window.addEventListener("touchmove",tr(F,40),!1),window.addEventListener("mousedown",()=>o.value=!0,!1),window.addEventListener("mousemove",tr(T,40),!1),window.addEventListener("mouseup",()=>o.value=!1,!1),M()}),Qc(()=>{window.removeEventListener("resize",w),window.removeEventListener("touchstart",tr(F,40),!1),window.removeEventListener("touchmove",tr(F,40),!1),window.removeEventListener("mousedown",()=>o.value=!0,!1),window.removeEventListener("mousemove",tr(T,40),!1),window.removeEventListener("mouseup",()=>o.value=!1,!1),n()});function w(){if(!u.value)return;const{innerWidth:U,innerHeight:I}=window;u.value.setSize(U,I,!0),p.value.aspect=U/I}function R(U,I){d.value&&(d.value.geometry.setAttribute("position",new rn(U,3)),d.value.geometry.setAttribute("color",new rn(I,3)))}function P(){c.value=!1,M()}function M(){var K,q;w(),requestAnimationFrame(()=>P());const U=kl(),{updateFlock:I,timeStep:z}=U;I({sceneWidth:v.value,sceneHeight:_.value,timeStep:z,updateFlockGeometryCallback:R}),(K=u.value)==null||K.render(qe(h.value),p.value),p.value.updateProjectionMatrix(),(q=g.value)==null||q.update()}function T(U){o.value&&B(U.x,U.y)}function F(U){const I=U.touches.item(U.touches.length-1);I&&B(I.clientX,I.clientY)}function B(U,I){const{innerWidth:z,innerHeight:K}=window,q=U/z,Y=I/K,ce=v.value/2,de=_.value/2,W=Th(-ce,ce,q),Q=-Th(-de,de,Y);r({x:W,y:Q})}return(U,I)=>(St(),ai(Ft,null,[Ws("canvas",{ref_key:"canvasElement",ref:f,class:"absolute w-full h-full",onMousedown:I[0]||(I[0]=z=>o.value=!0),onMouseup:I[1]||(I[1]=z=>o.value=!1),onMousemove:T,onTouchmove:F},null,544),("useRoute"in U?U.useRoute:et(ca))().path!="/projects/flock"?(St(),ai("div",BC)):us("",!0)],64))}}),kC=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var i;return((i=t.params[n.slice(1)])==null?void 0:i.toString())||""}),Ic=(t,e)=>{const n=t.route.matched.find(r=>{var s;return((s=r.components)==null?void 0:s.default)===t.Component.type}),i=e??(n==null?void 0:n.meta.key)??(n&&kC(t.route,n));return typeof i=="function"?i(t.route):i},zC=(t,e)=>({default:()=>t?_n(Q_,t===!0?{}:t,e):e}),GC=Mi({name:"RouteProvider",props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,i={};for(const r in t.route)Object.defineProperty(i,r,{get:()=>e===t.renderKey?t.route[r]:n[r]});return Ur(wa,ks(i)),()=>_n(t.vnode,{ref:t.vnodeRef})}}),VC=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var i;return e?_n(t,e,n):(i=n.default)==null?void 0:i.call(n)}}),WC=Mi({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const i=at(),r=Ze(),s=Ht(wa,null);n({pageRef:r});const o=Ht(wy,null);let a;return()=>_n(Mm,{name:t.name,route:t.route,...e},{default:l=>{const c=qC(s,l.route,l.Component),u=s&&s.matched.length===l.route.matched.length;if(!l.Component)return a&&!u?a:void 0;if(a&&o&&!o.isCurrent(l.route))return a;if(c&&s&&(!o||o!=null&&o.isCurrent(s)))return u?a:null;const f=Ic(l,t.pageKey),h=i.deferHydration(),p=!!(t.transition??l.route.meta.pageTransition??oc),g=p&&jC([t.transition,l.route.meta.pageTransition,oc,{onAfterLeave:()=>{i.callHook("page:transition:finish",l.Component)}}].filter(Boolean));return a=VC(au,p&&g,zC(t.keepalive??l.route.meta.keepalive??py,_n(up,{suspensible:!0,onPending:()=>i.callHook("page:start",l.Component),onResolve:()=>{Zi(()=>i.callHook("page:finish",l.Component).finally(h))}},{default:()=>_n(GC,{key:f,vnode:l.Component,route:l.route,renderKey:f,trackRootNodes:p,vnodeRef:r})}))).default(),a}})}});function XC(t){return Array.isArray(t)?t:t?[t]:[]}function jC(t){const e=t.map(n=>({...n,onAfterLeave:XC(n.onAfterLeave)}));return Ey(...e)}function qC(t,e,n){if(!t)return!1;const i=e.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(n==null?void 0:n.type)});return!i||i===-1?!1:e.matched.slice(0,i).some((r,s)=>{var o,a,l;return((o=r.components)==null?void 0:o.default)!==((l=(a=t.matched[s])==null?void 0:a.components)==null?void 0:l.default)})||n&&Ic({route:e,Component:n})!==Ic({route:t,Component:n})}const $C={key:0,class:"p-1 flex flex-row nav"},YC={key:1,class:"rainbow-text-animated"},KC={key:2,class:"ml-1 mr-1"},ZC=Mi({__name:"NavBar",setup(t){const e=mt(()=>{const r=["projects","notebooks"],s=ca().fullPath;return["home",...s.slice(1,s.length).split("/").filter(a=>a!==""&&!r.includes(a))].map(a=>` /${a}`)});function n(r){const s=ca().fullPath.split("/").pop();return r.replace("/","").trim()===(((s==null?void 0:s.trim())??"")===""?"home":s==null?void 0:s.trim())}function i(r){switch(r.trim()){case"/home":return"/";case"/2d-inverse-kinematics":return"/projects/notebooks/2d-inverse-kinematics";default:return"/"}}return(r,s)=>{var a;const o=rE;return((a=et(e))==null?void 0:a.length)!=0?(St(),ai("div",$C,[(St(!0),ai(Ft,null,lv(et(e),(l,c)=>(St(),ai("div",{key:c},[Ws("span",null,[n(l)?us("",!0):(St(),li(o,{key:0,class:"link",to:i(l)},{default:Yc(()=>[ru(Cu(l),1)]),_:2},1032,["to"])),n(l)?(St(),ai("div",YC,Cu(l),1)):us("",!0),et(e)[c+1]?(St(),ai("span",KC,">")):us("",!0)])]))),128))])):us("",!0)}}});const JC=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},QC={},e1={class:"w-screen h-screen"},t1={class:"z-20 fullscreen flex flex-col overflow-scroll"};function n1(t,e){const n=HC,i=WC,r=ZC;return St(),ai("div",e1,[st(n),Ws("div",t1,[st(i,{class:"flex-grow overflow-y-scroll"}),st(r,{class:"h-fit z-50"})])])}const i1=JC(QC,[["render",n1]]),r1={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;(n.stack||"").split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=r?zu(()=>ci(()=>import("./error-404.a35981b4.js"),["./error-404.a35981b4.js","./error-404.8bdbaeb8.css"],import.meta.url).then(f=>f.default||f)):zu(()=>ci(()=>import("./error-500.cb279437.js"),["./error-500.cb279437.js","./error-500.b63a96f5.css"],import.meta.url).then(f=>f.default||f));return(f,h)=>(St(),li(et(u),qg(Np({statusCode:et(i),statusMessage:et(s),description:et(o),stack:et(a)})),null,16))}},s1=r1,o1={__name:"nuxt-root",setup(t){const e=()=>null,n=at(),i=n.deferHydration(),r=!1;Ur(wa,ca()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const s=Ra();yp((a,l,c)=>{if(n.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),Ly(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>br(a)),!1});const{islandContext:o}=!1;return(a,l)=>(St(),li(up,{onResolve:et(i)},{default:Yc(()=>[et(s)?(St(),li(et(s1),{key:0,error:et(s)},null,8,["error"])):et(o)?(St(),li(et(e),{key:1,context:et(o)},null,8,["context"])):et(r)?(St(),li(av(et(r)),{key:2})):(St(),li(et(i1),{key:3}))]),_:1},8,["onResolve"]))}},Ch=o1;globalThis.$fetch||(globalThis.$fetch=J0.create({baseURL:ex()}));let Ph;{let t;Ph=async function(){var s,o;if(t)return t;const i=!!((s=window.__NUXT__)!=null&&s.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?d0(Ch):f0(Ch),r=hx({vueApp:i});try{await mx(r,dE)}catch(a){await r.callHook("app:error",a),r.payload.error=r.payload.error||a}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount("#"+my),await r.hooks.callHook("app:mounted",i),await Zi()}catch(a){await r.callHook("app:error",a),r.payload.error=r.payload.error||a}return i},t=Ph().catch(e=>{console.error("Error while mounting app:",e)})}export{FC as A,NC as D,Ft as F,JC as _,Ws as a,st as b,ai as c,ru as d,rE as e,l1 as f,Mi as g,et as h,f1 as i,c1 as j,it as k,us as l,lv as m,Gs as n,St as o,a1 as p,li as q,Ze as r,kl as s,Cu as t,d1 as u,u1 as v,Yc as w,ZM as x,mt as y,zi as z};
