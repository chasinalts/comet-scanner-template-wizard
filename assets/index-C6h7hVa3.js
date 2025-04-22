const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-BdP1QrBX.js","assets/vendor-ui-C2WKSLH5.js","assets/vendor-react-CSTjpmlB.js","assets/HolographicText-BzxdtDtY.js","assets/Signup-CLjCtiuC.js","assets/ScannerWizard-C2RZUhsZ.js","assets/FormField-Bmy8VGmN.js","assets/AdminDashboard-CaTlXl50.js","assets/browser-BzhrmF_M.js"])))=>i.map(i=>d[i]);
import{j as O,A as Oa,m as yn}from"./vendor-ui-C2WKSLH5.js";import{b as Z_,g as df,a as ue,u as ff,N as Oi,c as ey,L as Cu,R as pf,B as ty,d as ny,e as Mn,f as ry}from"./vendor-react-CSTjpmlB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Zs={},Ou;function sy(){if(Ou)return Zs;Ou=1;var n=Z_();return Zs.createRoot=n.createRoot,Zs.hydrateRoot=n.hydrateRoot,Zs}var iy=sy();const oy=df(iy),ay="modulepreload",cy=function(n){return"/"+n},Nu={},ct=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");s=o(t.map(u=>{if(u=cy(u),u in Nu)return;Nu[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":ay,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((w,R)=>{m.addEventListener("load",w),m.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},ly=()=>{};var Du={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},uy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},mf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(m=64)),r.push(t[d],t[p],t[m],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):uy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new hy;const m=i<<2|c>>4;if(r.push(m),u!==64){const w=c<<4&240|u>>2;if(r.push(w),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dy=function(n){const e=gf(n);return mf.encodeByteArray(e,!0)},Ni=function(n){return dy(n).replace(/\./g,"")},_f=function(n){try{return mf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=()=>fy().__FIREBASE_DEFAULTS__,gy=()=>{if(typeof process>"u"||typeof Du>"u")return;const n=Du.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},my=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_f(n[1]);return e&&JSON.parse(e)},so=()=>{try{return ly()||py()||gy()||my()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yf=n=>{var e,t;return(t=(e=so())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vf=n=>{const e=yf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},wf=()=>{var n;return(n=so())===null||n===void 0?void 0:n.config},Tf=n=>{var e;return(e=so())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _y=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ni(JSON.stringify(t)),Ni(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function vy(){var n;const e=(n=so())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _c(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ty(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ey(){const n=Oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Iy(){return!vy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function io(){try{return typeof indexedDB=="object"}catch{return!1}}function oo(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function yc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="FirebaseError";class We extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=by,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rn.prototype.create)}}class rn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ay(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new We(s,c,r)}}function Ay(n,e){return n.replace(Ry,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ry=/\{\$([^}]+)}/g;function Sy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Kt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(xu(i)&&xu(o)){if(!Kt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function xu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Br(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Py(n,e){const t=new ky(n,e);return t.subscribe.bind(t)}class ky{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Cy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=na),s.error===void 0&&(s.error=na),s.complete===void 0&&(s.complete=na);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function na(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=1e3,Ny=2,Dy=4*60*60*1e3,xy=.5;function Lu(n,e=Oy,t=Ny){const r=e*Math.pow(t,n),s=Math.round(xy*r*(Math.random()-.5)*2);return Math.min(Dy,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n){return n&&n._delegate?n._delegate:n}class qe{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new _y;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(My(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vy(n){return n===fn?void 0:n}function My(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ly(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Fy={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},jy=K.INFO,$y={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},By=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=$y[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ws{constructor(e){this.name=e,this._logLevel=jy,this._logHandler=By,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const qy=(n,e)=>e.some(t=>n instanceof t);let Vu,Mu;function zy(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hy(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const If=new WeakMap,Na=new WeakMap,bf=new WeakMap,ra=new WeakMap,vc=new WeakMap;function Wy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(qt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&If.set(t,n)}).catch(()=>{}),vc.set(e,n),e}function Ky(n){if(Na.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Na.set(n,e)}let Da={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Na.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gy(n){Da=n(Da)}function Qy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(sa(this),e,...t);return bf.set(r,e.sort?e.sort():[e]),qt(r)}:Hy().includes(n)?function(...e){return n.apply(sa(this),e),qt(If.get(this))}:function(...e){return qt(n.apply(sa(this),e))}}function Jy(n){return typeof n=="function"?Qy(n):(n instanceof IDBTransaction&&Ky(n),qy(n,zy())?new Proxy(n,Da):n)}function qt(n){if(n instanceof IDBRequest)return Wy(n);if(ra.has(n))return ra.get(n);const e=Jy(n);return e!==n&&(ra.set(n,e),vc.set(e,n)),e}const sa=n=>vc.get(n);function Af(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=qt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qt(o.result),l.oldVersion,l.newVersion,qt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Xy=["get","getKey","getAll","getAllKeys","count"],Yy=["put","add","delete","clear"],ia=new Map;function Uu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ia.get(e))return ia.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Yy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xy.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return ia.set(e,i),i}Gy(n=>({...n,get:(e,t,r)=>Uu(e,t)||n.get(e,t,r),has:(e,t)=>!!Uu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ev(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ev(n){const e=n.getComponent();return e?.type==="VERSION"}const xa="@firebase/app",Fu="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new ws("@firebase/app"),tv="@firebase/app-compat",nv="@firebase/analytics-compat",rv="@firebase/analytics",sv="@firebase/app-check-compat",iv="@firebase/app-check",ov="@firebase/auth",av="@firebase/auth-compat",cv="@firebase/database",lv="@firebase/data-connect",uv="@firebase/database-compat",hv="@firebase/functions",dv="@firebase/functions-compat",fv="@firebase/installations",pv="@firebase/installations-compat",gv="@firebase/messaging",mv="@firebase/messaging-compat",_v="@firebase/performance",yv="@firebase/performance-compat",vv="@firebase/remote-config",wv="@firebase/remote-config-compat",Tv="@firebase/storage",Ev="@firebase/storage-compat",Iv="@firebase/firestore",bv="@firebase/vertexai",Av="@firebase/firestore-compat",Rv="firebase",Sv="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="[DEFAULT]",Pv={[xa]:"fire-core",[tv]:"fire-core-compat",[rv]:"fire-analytics",[nv]:"fire-analytics-compat",[iv]:"fire-app-check",[sv]:"fire-app-check-compat",[ov]:"fire-auth",[av]:"fire-auth-compat",[cv]:"fire-rtdb",[lv]:"fire-data-connect",[uv]:"fire-rtdb-compat",[hv]:"fire-fn",[dv]:"fire-fn-compat",[fv]:"fire-iid",[pv]:"fire-iid-compat",[gv]:"fire-fcm",[mv]:"fire-fcm-compat",[_v]:"fire-perf",[yv]:"fire-perf-compat",[vv]:"fire-rc",[wv]:"fire-rc-compat",[Tv]:"fire-gcs",[Ev]:"fire-gcs-compat",[Iv]:"fire-fst",[Av]:"fire-fst-compat",[bv]:"fire-vertex","fire-js":"fire-js",[Rv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Map,kv=new Map,Va=new Map;function ju(n,e){try{n.container.addComponent(e)}catch(t){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function He(n){const e=n.name;if(Va.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;Va.set(e,n);for(const t of Di.values())ju(t,n);for(const t of kv.values())ju(t,n);return!0}function bt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new rn("app","Firebase",Cv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=Sv;function Rf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:La,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});if(t||(t=wf()),!t)throw zt.create("no-options");const i=Di.get(s);if(i){if(Kt(t,i.options)&&Kt(r,i.config))return i;throw zt.create("duplicate-app",{appName:s})}const o=new Uy(s);for(const l of Va.values())o.addComponent(l);const c=new Ov(t,r,o);return Di.set(s,c),c}function Ts(n=La){const e=Di.get(n);if(!e&&n===La&&wf())return Rf();if(!e)throw zt.create("no-app",{appName:n});return e}function Ce(n,e,t){var r;let s=(r=Pv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(c.join(" "));return}He(new qe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="firebase-heartbeat-database",Dv=1,as="firebase-heartbeat-store";let oa=null;function Sf(){return oa||(oa=Af(Nv,Dv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(as)}catch(t){console.warn(t)}}}}).catch(n=>{throw zt.create("idb-open",{originalErrorMessage:n.message})})),oa}async function xv(n){try{const t=(await Sf()).transaction(as),r=await t.objectStore(as).get(Pf(n));return await t.done,r}catch(e){if(e instanceof We)wt.warn(e.message);else{const t=zt.create("idb-get",{originalErrorMessage:e?.message});wt.warn(t.message)}}}async function $u(n,e){try{const r=(await Sf()).transaction(as,"readwrite");await r.objectStore(as).put(e,Pf(n)),await r.done}catch(t){if(t instanceof We)wt.warn(t.message);else{const r=zt.create("idb-set",{originalErrorMessage:t?.message});wt.warn(r.message)}}}function Pf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=1024,Vv=30;class Mv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Vv){const o=jv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bu(),{heartbeatsToSend:r,unsentEntries:s}=Uv(this._heartbeatsCache.heartbeats),i=Ni(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return wt.warn(t),""}}}function Bu(){return new Date().toISOString().substring(0,10)}function Uv(n,e=Lv){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),qu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Fv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return io()?oo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xv(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $u(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $u(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qu(n){return Ni(JSON.stringify({version:2,heartbeats:n})).length}function jv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n){He(new qe("platform-logger",e=>new Zy(e),"PRIVATE")),He(new qe("heartbeat",e=>new Mv(e),"PRIVATE")),Ce(xa,Fu,n),Ce(xa,Fu,"esm2017"),Ce("fire-js","")}$v("");function wc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function kf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bv=kf,Cf=new rn("auth","Firebase",kf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new ws("@firebase/auth");function qv(n,...e){xi.logLevel<=K.WARN&&xi.warn(`Auth (${Sn}): ${n}`,...e)}function vi(n,...e){xi.logLevel<=K.ERROR&&xi.error(`Auth (${Sn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n,...e){throw Tc(n,...e)}function st(n,...e){return Tc(n,...e)}function Of(n,e,t){const r=Object.assign(Object.assign({},Bv()),{[e]:t});return new rn("auth","Firebase",r).create(e,{appName:n.name})}function _t(n){return Of(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Cf.create(n,...e)}function j(n,e,...t){if(!n)throw Tc(e,...t)}function gt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vi(e),new Error(e)}function Tt(n,e){n||gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function zv(){return zu()==="http:"||zu()==="https:"}function zu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zv()||_c()||"connection"in navigator)?navigator.onLine:!0}function Wv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=yy()||Ty()}get(){return Hv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n,e){Tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qv=new Es(3e4,6e4);function At(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Rt(n,e,t,r,s={}){return Df(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=vs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},i);return wy()||(u.referrerPolicy="no-referrer"),Nf.fetch()(await xf(n,n.config.apiHost,t,c),u)})}async function Df(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kv),e);try{const s=new Xv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ei(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ei(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ei(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Of(n,d,u);et(n,d)}}catch(s){if(s instanceof We)throw s;et(n,"network-request-failed",{message:String(s)})}}async function Is(n,e,t,r,s={}){const i=await Rt(n,e,t,r,s);return"mfaPendingCredential"in i&&et(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function xf(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Ec(n.config,s):`${n.config.apiScheme}://${s}`;return Gv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Jv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),Qv.get())})}}function ei(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=st(n,e,r);return s.customData._tokenResponse=t,s}function Hu(n){return n!==void 0&&n.enterprise!==void 0}class Yv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Jv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Zv(n,e){return Rt(n,"GET","/v2/recaptchaConfig",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(n,e){return Rt(n,"POST","/v1/accounts:delete",e)}async function Li(n,e){return Rt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tw(n,e=!1){const t=pe(n),r=await t.getIdToken(e),s=Ic(r);j(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Qr(aa(s.auth_time)),issuedAtTime:Qr(aa(s.iat)),expirationTime:Qr(aa(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function aa(n){return Number(n)*1e3}function Ic(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return vi("JWT malformed, contained fewer than 3 sections"),null;try{const s=_f(t);return s?JSON.parse(s):(vi("Failed to decode base64 JWT payload"),null)}catch(s){return vi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Wu(n){const e=Ic(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof We&&nw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function nw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(n){var e;const t=n.auth,r=await n.getIdToken(),s=await cs(n,Li(t,{idToken:r}));j(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Lf(i.providerUserInfo):[],c=iw(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!c?.length,d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ua(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function sw(n){const e=pe(n);await Vi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Lf(n){return n.map(e=>{var{providerId:t}=e,r=wc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(n,e){const t=await Df(n,{},async()=>{const r=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await xf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Nf.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aw(n,e){return Rt(n,"POST","/v2/accounts:revokeToken",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=Wu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ow(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Zn;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ua(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await cs(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tw(this,e)}reload(){return sw(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Vi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(_t(this.auth));const e=await this.getIdToken();return await cs(this,ew(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,u,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,V=(u=t.createdAt)!==null&&u!==void 0?u:void 0,B=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:F,isAnonymous:J,providerData:ne,stsTokenManager:E}=t;j(M&&E,e,"internal-error");const _=Zn.fromJSON(this.name,E);j(typeof M=="string",e,"internal-error"),Ot(p,e.name),Ot(m,e.name),j(typeof F=="boolean",e,"internal-error"),j(typeof J=="boolean",e,"internal-error"),Ot(w,e.name),Ot(R,e.name),Ot(N,e.name),Ot(P,e.name),Ot(V,e.name),Ot(B,e.name);const v=new Xe({uid:M,auth:e,email:m,emailVerified:F,displayName:p,isAnonymous:J,photoURL:R,phoneNumber:w,tenantId:N,stsTokenManager:_,createdAt:V,lastLoginAt:B});return ne&&Array.isArray(ne)&&(v.providerData=ne.map(T=>Object.assign({},T))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Zn;s.updateFromServerResponse(t);const i=new Xe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Lf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new Zn;c.updateFromIdToken(r);const l=new Xe({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ua(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new Map;function mt(n){Tt(n instanceof Function,"Expected a class definition");let e=Ku.get(n);return e?(Tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ku.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vf.type="NONE";const Gu=Vf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n,e,t){return`firebase:${n}:${e}:${t}`}class er{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wi(this.userKey,s.apiKey,i),this.fullPersistenceKey=wi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Li(this.auth,{idToken:e}).catch(()=>{});return t?Xe._fromGetAccountInfoResponse(this.auth,t,e):null}return Xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new er(mt(Gu),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||mt(Gu);const o=wi(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await Li(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Xe._fromGetAccountInfoResponse(e,m,d)}else p=Xe._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new er(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new er(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bf(e))return"Blackberry";if(qf(e))return"Webos";if(Uf(e))return"Safari";if((e.includes("chrome/")||Ff(e))&&!e.includes("edge/"))return"Chrome";if($f(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Mf(n=Oe()){return/firefox\//i.test(n)}function Uf(n=Oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ff(n=Oe()){return/crios\//i.test(n)}function jf(n=Oe()){return/iemobile/i.test(n)}function $f(n=Oe()){return/android/i.test(n)}function Bf(n=Oe()){return/blackberry/i.test(n)}function qf(n=Oe()){return/webos/i.test(n)}function bc(n=Oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cw(n=Oe()){var e;return bc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lw(){return Ey()&&document.documentMode===10}function zf(n=Oe()){return bc(n)||$f(n)||qf(n)||Bf(n)||/windows phone/i.test(n)||jf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n,e=[]){let t;switch(n){case"Browser":t=Qu(Oe());break;case"Worker":t=`${Qu(Oe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(n,e={}){return Rt(n,"GET","/v2/passwordPolicy",At(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=6;class fw{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:dw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ju(this),this.idTokenSubscription=new Ju(this),this.beforeStateQueue=new uw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Li(this,{idToken:e}),r=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(_t(this));const t=e?pe(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(_t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(_t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hw(this),t=new fw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await aw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mt(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&qv(`Error while retrieving App Check token: ${t.error}`),t?.token}}function sn(n){return pe(n)}class Ju{constructor(e){this.auth=e,this.observer=null,this.addObserver=Py(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gw(n){ao=n}function Wf(n){return ao.loadJS(n)}function mw(){return ao.recaptchaEnterpriseScript}function _w(){return ao.gapiScript}function yw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class vw{constructor(){this.enterprise=new ww}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ww{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Tw="recaptcha-enterprise",Kf="NO_RECAPTCHA";class Ew{constructor(e){this.type=Tw,this.auth=sn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Zv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Yv(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Hu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Kf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&Hu(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=mw();l.length!==0&&(l+=c),Wf(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Xu(n,e,t,r=!1,s=!1){const i=new Ew(n);let o;if(s)o=Kf;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Mi(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Xu(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Xu(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(n,e){const t=bt(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Kt(i,e??{}))return s;et(s,"already-initialized")}return t.initialize({options:e})}function bw(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(mt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Aw(n,e,t){const r=sn(n);j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Gf(e),{host:o,port:c}=Rw(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(Kt(u,r.config.emulator)&&Kt(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Sw()}function Gf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Rw(n){const e=Gf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yu(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Yu(o)}}}function Yu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,t){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}async function Pw(n,e){return Rt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(n,e){return Is(n,"POST","/v1/accounts:signInWithPassword",At(n,e))}async function Cw(n,e){return Rt(n,"POST","/v1/accounts:sendOobCode",At(n,e))}async function Ow(n,e){return Cw(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(n,e){return Is(n,"POST","/v1/accounts:signInWithEmailLink",At(n,e))}async function Dw(n,e){return Is(n,"POST","/v1/accounts:signInWithEmailLink",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Ac{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ls(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ls(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mi(e,t,"signInWithPassword",kw);case"emailLink":return Nw(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mi(e,r,"signUpPassword",Pw);case"emailLink":return Dw(e,{idToken:t,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(n,e){return Is(n,"POST","/v1/accounts:signInWithIdp",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="http://localhost";class wn extends Ac{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=wc(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new wn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return tr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,tr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tr(e,t)}buildRequest(){const e={requestUri:xw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vw(n){const e=Br(qr(n)).link,t=e?Br(qr(e)).deep_link_id:null,r=Br(qr(n)).deep_link_id;return(r?Br(qr(r)).link:null)||r||t||e||n}class Rc{constructor(e){var t,r,s,i,o,c;const l=Br(qr(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Lw((s=l.mode)!==null&&s!==void 0?s:null);j(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Vw(e);try{return new Rc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.providerId=pr.PROVIDER_ID}static credential(e,t){return ls._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Rc.parseLink(t);return j(r,"argument-error"),ls._fromEmailAndCode(e,r.code,r.tenantId)}}pr.PROVIDER_ID="password";pr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Qf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends bs{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Mt.credential(t,r)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends bs{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends bs{constructor(){super("twitter.com")}static credential(e,t){return wn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ft.credential(t,r)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(n,e){return Is(n,"POST","/v1/accounts:signUp",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Xe._fromIdTokenResponse(e,r,s),o=Zu(r);return new Tn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Zu(r);return new Tn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Zu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends We{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ui.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ui(e,t,r,s)}}function Jf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ui._fromErrorAndOperation(n,i,e,r):i})}async function Uw(n,e,t=!1){const r=await cs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Tn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(n,e,t=!1){const{auth:r}=n;if(je(r.app))return Promise.reject(_t(r));const s="reauthenticate";try{const i=await cs(n,Jf(r,s,e,n),t);j(i.idToken,r,"internal-error");const o=Ic(i.idToken);j(o,r,"internal-error");const{sub:c}=o;return j(n.uid===c,r,"user-mismatch"),Tn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&et(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xf(n,e,t=!1){if(je(n.app))return Promise.reject(_t(n));const r="signIn",s=await Jf(n,r,e),i=await Tn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function jw(n,e){return Xf(sn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(n){const e=sn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $w(n,e,t){const r=sn(n);await Mi(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ow)}async function Bw(n,e,t){if(je(n.app))return Promise.reject(_t(n));const r=sn(n),o=await Mi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Mw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Yf(n),l}),c=await Tn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function qw(n,e,t){return je(n.app)?Promise.reject(_t(n)):jw(pe(n),pr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yf(n),r})}function zw(n,e,t,r){return pe(n).onIdTokenChanged(e,t,r)}function Hw(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}function Ww(n,e,t,r){return pe(n).onAuthStateChanged(e,t,r)}function Kw(n){return pe(n).signOut()}const Fi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fi,"1"),this.storage.removeItem(Fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=1e3,Qw=10;class ep extends Zf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Qw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Gw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ep.type="LOCAL";const Jw=ep;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends Zf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tp.type="SESSION";const np=tp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new co(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await Xw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}co.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Sc("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function Zw(n){it().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function eT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tT(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function nT(){return rp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="firebaseLocalStorageDb",rT=1,ji="firebaseLocalStorage",ip="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lo(n,e){return n.transaction([ji],e?"readwrite":"readonly").objectStore(ji)}function sT(){const n=indexedDB.deleteDatabase(sp);return new As(n).toPromise()}function Fa(){const n=indexedDB.open(sp,rT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ji,{keyPath:ip})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ji)?e(r):(r.close(),await sT(),e(await Fa()))})})}async function eh(n,e,t){const r=lo(n,!0).put({[ip]:e,value:t});return new As(r).toPromise()}async function iT(n,e){const t=lo(n,!1).get(e),r=await new As(t).toPromise();return r===void 0?null:r.value}function th(n,e){const t=lo(n,!0).delete(e);return new As(t).toPromise()}const oT=800,aT=3;class op{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>aT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(nT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await eT(),!this.activeServiceWorker)return;this.sender=new Yw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fa();return await eh(e,Fi,"1"),await th(e,Fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>eh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>iT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>th(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=lo(s,!1).getAll();return new As(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}op.type="LOCAL";const cT=op;new Es(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(n,e){return e?mt(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Ac{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uT(n){return Xf(n.auth,new Pc(n),n.bypassAuthState)}function hT(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Fw(t,new Pc(n),n.bypassAuthState)}async function dT(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Uw(t,new Pc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uT;case"linkViaPopup":case"linkViaRedirect":return dT;case"reauthViaPopup":case"reauthViaRedirect":return hT;default:et(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=new Es(2e3,1e4);class Xn extends ap{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fT.get())};e()}}Xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="pendingRedirect",Ti=new Map;class gT extends ap{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ti.get(this.auth._key());if(!e){try{const r=await mT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ti.set(this.auth._key(),e)}return this.bypassAuthState||Ti.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mT(n,e){const t=vT(e),r=yT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function _T(n,e){Ti.set(n._key(),e)}function yT(n){return mt(n._redirectPersistence)}function vT(n){return wi(pT,n.config.apiKey,n.name)}async function wT(n,e,t=!1){if(je(n.app))return Promise.reject(_t(n));const r=sn(n),s=lT(r,e),o=await new gT(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=10*60*1e3;class ET{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!cp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(st(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TT&&this.cachedEventUids.clear(),this.cachedEventUids.has(nh(e))}saveEventToCache(e){this.cachedEventUids.add(nh(e)),this.lastProcessedEventTime=Date.now()}}function nh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function cp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function IT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(n,e={}){return Rt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RT=/^https?/;async function ST(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bT(n);for(const t of e)try{if(PT(t))return}catch{}et(n,"unauthorized-domain")}function PT(n){const e=Ma(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!RT.test(t))return!1;if(AT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=new Es(3e4,6e4);function rh(){const n=it().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function CT(n){return new Promise((e,t)=>{var r,s,i;function o(){rh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rh(),t(st(n,"network-request-failed"))},timeout:kT.get()})}if(!((s=(r=it().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=it().gapi)===null||i===void 0)&&i.load)o();else{const c=yw("iframefcb");return it()[c]=()=>{gapi.load?o():t(st(n,"network-request-failed"))},Wf(`${_w()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ei=null,e})}let Ei=null;function OT(n){return Ei=Ei||CT(n),Ei}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new Es(5e3,15e3),DT="__/auth/iframe",xT="emulator/auth/iframe",LT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MT(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ec(e,xT):`https://${n.config.authDomain}/${DT}`,r={apiKey:e.apiKey,appName:n.name,v:Sn},s=VT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${vs(r).slice(1)}`}async function UT(n){const e=await OT(n),t=it().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:MT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=st(n,"network-request-failed"),c=it().setTimeout(()=>{i(o)},NT.get());function l(){it().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jT=500,$T=600,BT="_blank",qT="http://localhost";class sh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zT(n,e,t,r=jT,s=$T){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},FT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Oe().toLowerCase();t&&(c=Ff(u)?BT:t),Mf(u)&&(e=e||qT,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[w,R])=>`${m}${w}=${R},`,"");if(cw(u)&&c!=="_self")return HT(e||"",c),new sh(null);const p=window.open(e||"",c,d);j(p,n,"popup-blocked");try{p.focus()}catch{}return new sh(p)}function HT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="__/auth/handler",KT="emulator/auth/handler",GT=encodeURIComponent("fac");async function ih(n,e,t,r,s,i){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Sn,eventId:s};if(e instanceof Qf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Sy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof bs){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),u=l?`#${GT}=${encodeURIComponent(l)}`:"";return`${QT(n)}?${vs(c).slice(1)}${u}`}function QT({config:n}){return n.emulator?Ec(n,KT):`https://${n.authDomain}/${WT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="webStorageSupport";class JT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=np,this._completeRedirectFn=wT,this._overrideRedirectResult=_T}async _openPopup(e,t,r,s){var i;Tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ih(e,t,r,Ma(),s);return zT(e,o,Sc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ih(e,t,r,Ma(),s);return Zw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await UT(e),r=new ET(e);return t.register("authEvent",s=>(j(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ca,{type:ca},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[ca];o!==void 0&&t(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ST(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zf()||Uf()||bc()}}const XT=JT;var oh="@firebase/auth",ah="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eE(n){He(new qe("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hf(n)},u=new pw(r,s,i,l);return bw(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),He(new qe("auth-internal",e=>{const t=sn(e.getProvider("auth").getImmediate());return(r=>new YT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(oh,ah,ZT(n)),Ce(oh,ah,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=5*60,nE=Tf("authIdTokenMaxAge")||tE;let ch=null;const rE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>nE)return;const s=t?.token;ch!==s&&(ch=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sE(n=Ts()){const e=bt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Iw(n,{popupRedirectResolver:XT,persistence:[cT,Jw,np]}),r=Tf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=rE(i.toString());Hw(t,o,()=>o(t.currentUser)),zw(t,c=>o(c))}}const s=yf("auth");return s&&Aw(t,`http://${s}`),t}function iE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}gw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=st("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",iE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eE("Browser");var lh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ht,lp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function v(){}v.prototype=_.prototype,E.D=_.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,I,A){for(var y=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)y[ht-2]=arguments[ht];return _.prototype[I].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,v){v||(v=0);var T=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)T[I]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(I=0;16>I;++I)T[I]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=E.g[0],v=E.g[1],I=E.g[2];var A=E.g[3],y=_+(A^v&(I^A))+T[0]+3614090360&4294967295;_=v+(y<<7&4294967295|y>>>25),y=A+(I^_&(v^I))+T[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=I+(v^A&(_^v))+T[2]+606105819&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(_^I&(A^_))+T[3]+3250441966&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(A^v&(I^A))+T[4]+4118548399&4294967295,_=v+(y<<7&4294967295|y>>>25),y=A+(I^_&(v^I))+T[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=I+(v^A&(_^v))+T[6]+2821735955&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(_^I&(A^_))+T[7]+4249261313&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(A^v&(I^A))+T[8]+1770035416&4294967295,_=v+(y<<7&4294967295|y>>>25),y=A+(I^_&(v^I))+T[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=I+(v^A&(_^v))+T[10]+4294925233&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(_^I&(A^_))+T[11]+2304563134&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(A^v&(I^A))+T[12]+1804603682&4294967295,_=v+(y<<7&4294967295|y>>>25),y=A+(I^_&(v^I))+T[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=I+(v^A&(_^v))+T[14]+2792965006&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(_^I&(A^_))+T[15]+1236535329&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(I^A&(v^I))+T[1]+4129170786&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(_^v))+T[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(A^_))+T[11]+643717713&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(I^A))+T[0]+3921069994&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^A&(v^I))+T[5]+3593408605&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(_^v))+T[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(A^_))+T[15]+3634488961&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(I^A))+T[4]+3889429448&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^A&(v^I))+T[9]+568446438&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(_^v))+T[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(A^_))+T[3]+4107603335&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(I^A))+T[8]+1163531501&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^A&(v^I))+T[13]+2850285829&4294967295,_=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(_^v))+T[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(A^_))+T[7]+1735328473&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^_&(I^A))+T[12]+2368359562&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(v^I^A)+T[5]+4294588738&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^I)+T[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=I+(A^_^v)+T[11]+1839030562&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^_)+T[14]+4259657740&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^A)+T[1]+2763975236&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^I)+T[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=I+(A^_^v)+T[7]+4139469664&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^_)+T[10]+3200236656&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^A)+T[13]+681279174&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^I)+T[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=I+(A^_^v)+T[3]+3572445317&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^_)+T[6]+76029189&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^A)+T[9]+3654602809&4294967295,_=v+(y<<4&4294967295|y>>>28),y=A+(_^v^I)+T[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=I+(A^_^v)+T[15]+530742520&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^_)+T[2]+3299628645&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(I^(v|~A))+T[0]+4096336452&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~I))+T[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=I+(_^(A|~v))+T[14]+2878612391&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~_))+T[5]+4237533241&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~A))+T[12]+1700485571&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~I))+T[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=I+(_^(A|~v))+T[10]+4293915773&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~_))+T[1]+2240044497&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~A))+T[8]+1873313359&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~I))+T[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=I+(_^(A|~v))+T[6]+2734768916&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~_))+T[13]+1309151649&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~A))+T[4]+4149444226&4294967295,_=v+(y<<6&4294967295|y>>>26),y=A+(v^(_|~I))+T[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=I+(_^(A|~v))+T[2]+718787259&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~_))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var v=_-this.blockSize,T=this.B,I=this.h,A=0;A<_;){if(I==0)for(;A<=v;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<_;)if(T[I++]=E.charCodeAt(A++),I==this.blockSize){s(this,T),I=0;break}}else for(;A<_;)if(T[I++]=E[A++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var v=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=v&255,v/=256;for(this.u(E),E=Array(16),_=v=0;4>_;++_)for(var T=0;32>T;T+=8)E[v++]=this.g[_]>>>T&255;return E};function i(E,_){var v=c;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=_(E)}function o(E,_){this.h=_;for(var v=[],T=!0,I=E.length-1;0<=I;I--){var A=E[I]|0;T&&A==_||(v[I]=A,T=!1)}this.g=v}var c={};function l(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return P(u(-E));for(var _=[],v=1,T=0;E>=v;T++)_[T]=E/v|0,v*=4294967296;return new o(_,0)}function d(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return P(d(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(_,8)),T=p,I=0;I<E.length;I+=8){var A=Math.min(8,E.length-I),y=parseInt(E.substring(I,I+A),_);8>A?(A=u(Math.pow(_,A)),T=T.j(A).add(u(y))):(T=T.j(v),T=T.add(u(y)))}return T}var p=l(0),m=l(1),w=l(16777216);n=o.prototype,n.m=function(){if(N(this))return-P(this).m();for(var E=0,_=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*_,_*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(N(this))return"-"+P(this).toString(E);for(var _=u(Math.pow(E,6)),v=this,T="";;){var I=F(v,_).g;v=V(v,I.j(_));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=I,R(v))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}n.l=function(E){return E=V(this,E),N(E)?-1:R(E)?0:1};function P(E){for(var _=E.g.length,v=[],T=0;T<_;T++)v[T]=~E.g[T];return new o(v,~E.h).add(m)}n.abs=function(){return N(this)?P(this):this},n.add=function(E){for(var _=Math.max(this.g.length,E.g.length),v=[],T=0,I=0;I<=_;I++){var A=T+(this.i(I)&65535)+(E.i(I)&65535),y=(A>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);T=y>>>16,A&=65535,y&=65535,v[I]=y<<16|A}return new o(v,v[v.length-1]&-2147483648?-1:0)};function V(E,_){return E.add(P(_))}n.j=function(E){if(R(this)||R(E))return p;if(N(this))return N(E)?P(this).j(P(E)):P(P(this).j(E));if(N(E))return P(this.j(P(E)));if(0>this.l(w)&&0>E.l(w))return u(this.m()*E.m());for(var _=this.g.length+E.g.length,v=[],T=0;T<2*_;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<E.g.length;I++){var A=this.i(T)>>>16,y=this.i(T)&65535,ht=E.i(I)>>>16,Er=E.i(I)&65535;v[2*T+2*I]+=y*Er,B(v,2*T+2*I),v[2*T+2*I+1]+=A*Er,B(v,2*T+2*I+1),v[2*T+2*I+1]+=y*ht,B(v,2*T+2*I+1),v[2*T+2*I+2]+=A*ht,B(v,2*T+2*I+2)}for(T=0;T<_;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=_;T<2*_;T++)v[T]=0;return new o(v,0)};function B(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function M(E,_){this.g=E,this.h=_}function F(E,_){if(R(_))throw Error("division by zero");if(R(E))return new M(p,p);if(N(E))return _=F(P(E),_),new M(P(_.g),P(_.h));if(N(_))return _=F(E,P(_)),new M(P(_.g),_.h);if(30<E.g.length){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,T=_;0>=T.l(E);)v=J(v),T=J(T);var I=ne(v,1),A=ne(T,1);for(T=ne(T,2),v=ne(v,2);!R(T);){var y=A.add(T);0>=y.l(E)&&(I=I.add(v),A=y),T=ne(T,1),v=ne(v,1)}return _=V(E,I.j(_)),new M(I,_)}for(I=p;0<=E.l(_);){for(v=Math.max(1,Math.floor(E.m()/_.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=u(v),y=A.j(_);N(y)||0<y.l(E);)v-=T,A=u(v),y=A.j(_);R(A)&&(A=m),I=I.add(A),E=V(E,y)}return new M(I,E)}n.A=function(E){return F(this,E).h},n.and=function(E){for(var _=Math.max(this.g.length,E.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)&E.i(T);return new o(v,this.h&E.h)},n.or=function(E){for(var _=Math.max(this.g.length,E.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)|E.i(T);return new o(v,this.h|E.h)},n.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)^E.i(T);return new o(v,this.h^E.h)};function J(E){for(var _=E.g.length+1,v=[],T=0;T<_;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(v,E.h)}function ne(E,_){var v=_>>5;_%=32;for(var T=E.g.length-v,I=[],A=0;A<T;A++)I[A]=0<_?E.i(A+v)>>>_|E.i(A+v+1)<<32-_:E.i(A+v);return new o(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Ht=o}).apply(typeof lh<"u"?lh:typeof self<"u"?self:typeof window<"u"?window:{});var ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var up,zr,hp,Ii,ja,dp,fp,pp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ti=="object"&&ti];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in f))break e;f=f[b]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,b={next:function(){if(!g&&f<a.length){var S=f++;return{value:h(S,a[S]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,b,S){for(var D=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)D[ee-2]=arguments[ee];return h.prototype[b].apply(g,D)}}function N(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const b=a.length||0,S=g.length||0;a.length=b+S;for(let D=0;D<S;D++)a[b+D]=g[D]}else a.push(g)}}class V{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function B(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var J=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function ne(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function E(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)a[f]=g[f];for(let S=0;S<v.length;S++)f=v[S],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function I(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function A(a){c.setTimeout(()=>{throw a},0)}function y(){var a=No;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ht{constructor(){this.h=this.g=null}add(h,f){const g=Er.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Er=new V(()=>new y_,a=>a.reset());class y_{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ir,br=!1,No=new ht,Cl=()=>{const a=c.Promise.resolve(void 0);Ir=()=>{a.then(v_)}};var v_=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(f){A(f)}var h=Er;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}br=!1};function St(){this.s=this.s,this.C=this.C}St.prototype.s=!1,St.prototype.ma=function(){this.s||(this.s=!0,this.N())},St.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var w_=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function Ar(a,h){if(Ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(J){e:{try{F(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:T_[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ar.aa.h.call(this)}}R(Ar,Ee);var T_={2:"touch",3:"pen",4:"mouse"};Ar.prototype.h=function(){Ar.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xs="closure_listenable_"+(1e6*Math.random()|0),E_=0;function I_(a,h,f,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=b,this.key=++E_,this.da=this.fa=!1}function Ls(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vs(a){this.src=a,this.g={},this.h=0}Vs.prototype.add=function(a,h,f,g,b){var S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);var D=xo(a,h,g,b);return-1<D?(h=a[D],f||(h.fa=!1)):(h=new I_(h,this.src,S,!!g,b),h.fa=f,a.push(h)),h};function Do(a,h){var f=h.type;if(f in a.g){var g=a.g[f],b=Array.prototype.indexOf.call(g,h,void 0),S;(S=0<=b)&&Array.prototype.splice.call(g,b,1),S&&(Ls(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function xo(a,h,f,g){for(var b=0;b<a.length;++b){var S=a[b];if(!S.da&&S.listener==h&&S.capture==!!f&&S.ha==g)return b}return-1}var Lo="closure_lm_"+(1e6*Math.random()|0),Vo={};function Ol(a,h,f,g,b){if(Array.isArray(h)){for(var S=0;S<h.length;S++)Ol(a,h[S],f,g,b);return null}return f=xl(f),a&&a[xs]?a.K(h,f,u(g)?!!g.capture:!1,b):b_(a,h,f,!1,g,b)}function b_(a,h,f,g,b,S){if(!h)throw Error("Invalid event type");var D=u(b)?!!b.capture:!!b,ee=Uo(a);if(ee||(a[Lo]=ee=new Vs(a)),f=ee.add(h,f,g,D,S),f.proxy)return f;if(g=A_(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)w_||(b=D),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(Dl(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function A_(){function a(f){return h.call(a.src,a.listener,f)}const h=R_;return a}function Nl(a,h,f,g,b){if(Array.isArray(h))for(var S=0;S<h.length;S++)Nl(a,h[S],f,g,b);else g=u(g)?!!g.capture:!!g,f=xl(f),a&&a[xs]?(a=a.i,h=String(h).toString(),h in a.g&&(S=a.g[h],f=xo(S,f,g,b),-1<f&&(Ls(S[f]),Array.prototype.splice.call(S,f,1),S.length==0&&(delete a.g[h],a.h--)))):a&&(a=Uo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=xo(h,f,g,b)),(f=-1<a?h[a]:null)&&Mo(f))}function Mo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[xs])Do(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Dl(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Uo(h))?(Do(f,a),f.h==0&&(f.src=null,h[Lo]=null)):Ls(a)}}}function Dl(a){return a in Vo?Vo[a]:Vo[a]="on"+a}function R_(a,h){if(a.da)a=!0;else{h=new Ar(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Mo(a),a=f.call(g,h)}return a}function Uo(a){return a=a[Lo],a instanceof Vs?a:null}var Fo="__closure_events_fn_"+(1e9*Math.random()>>>0);function xl(a){return typeof a=="function"?a:(a[Fo]||(a[Fo]=function(h){return a.handleEvent(h)}),a[Fo])}function Ie(){St.call(this),this.i=new Vs(this),this.M=this,this.F=null}R(Ie,St),Ie.prototype[xs]=!0,Ie.prototype.removeEventListener=function(a,h,f,g){Nl(this,a,h,f,g)};function Ne(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ee(h,a);else if(h instanceof Ee)h.target=h.target||a;else{var b=h;h=new Ee(g,a),T(h,b)}if(b=!0,f)for(var S=f.length-1;0<=S;S--){var D=h.g=f[S];b=Ms(D,g,!0,h)&&b}if(D=h.g=a,b=Ms(D,g,!0,h)&&b,b=Ms(D,g,!1,h)&&b,f)for(S=0;S<f.length;S++)D=h.g=f[S],b=Ms(D,g,!1,h)&&b}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Ls(f[g]);delete a.g[h],a.h--}}this.F=null},Ie.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Ie.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ms(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,S=0;S<h.length;++S){var D=h[S];if(D&&!D.da&&D.capture==f){var ee=D.listener,ye=D.ha||D.src;D.fa&&Do(a.i,D),b=ee.call(ye,g)!==!1&&b}}return b&&!g.defaultPrevented}function Ll(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Vl(a){a.g=Ll(()=>{a.g=null,a.i&&(a.i=!1,Vl(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class S_ extends St{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Vl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(a){St.call(this),this.h=a,this.g={}}R(Rr,St);var Ml=[];function Ul(a){ne(a.g,function(h,f){this.g.hasOwnProperty(f)&&Mo(h)},a),a.g={}}Rr.prototype.N=function(){Rr.aa.N.call(this),Ul(this)},Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jo=c.JSON.stringify,P_=c.JSON.parse,k_=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function $o(){}$o.prototype.h=null;function Fl(a){return a.h||(a.h=a.i())}function jl(){}var Sr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bo(){Ee.call(this,"d")}R(Bo,Ee);function qo(){Ee.call(this,"c")}R(qo,Ee);var cn={},$l=null;function Us(){return $l=$l||new Ie}cn.La="serverreachability";function Bl(a){Ee.call(this,cn.La,a)}R(Bl,Ee);function Pr(a){const h=Us();Ne(h,new Bl(h))}cn.STAT_EVENT="statevent";function ql(a,h){Ee.call(this,cn.STAT_EVENT,a),this.stat=h}R(ql,Ee);function De(a){const h=Us();Ne(h,new ql(h,a))}cn.Ma="timingevent";function zl(a,h){Ee.call(this,cn.Ma,a),this.size=h}R(zl,Ee);function kr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Cr(){this.g=!0}Cr.prototype.xa=function(){this.g=!1};function C_(a,h,f,g,b,S){a.info(function(){if(a.g)if(S)for(var D="",ee=S.split("&"),ye=0;ye<ee.length;ye++){var Y=ee[ye].split("=");if(1<Y.length){var be=Y[0];Y=Y[1];var Ae=be.split("_");D=2<=Ae.length&&Ae[1]=="type"?D+(be+"="+Y+"&"):D+(be+"=redacted&")}}else D=null;else D=S;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+f+`
`+D})}function O_(a,h,f,g,b,S,D){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+f+`
`+S+" "+D})}function Dn(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+D_(a,f)+(g?" "+g:"")})}function N_(a,h){a.info(function(){return"TIMEOUT: "+h})}Cr.prototype.info=function(){};function D_(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var D=1;D<b.length;D++)b[D]=""}}}}return jo(f)}catch{return h}}var Fs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zo;function js(){}R(js,$o),js.prototype.g=function(){return new XMLHttpRequest},js.prototype.i=function(){return{}},zo=new js;function Pt(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Rr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var Kl={},Ho={};function Wo(a,h,f){a.L=1,a.v=zs(dt(h)),a.m=f,a.P=!0,Gl(a,null)}function Gl(a,h){a.F=Date.now(),$s(a),a.A=dt(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),cu(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Wl,a.g=Ru(a.j,f?h:null,!a.m),0<a.O&&(a.M=new S_(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ml[0]=b.toString()),b=Ml);for(var S=0;S<b.length;S++){var D=Ol(f,b[S],g||h.handleEvent,!1,h.h||h);if(!D)break;h.g[D.key]=D}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Pr(),C_(a.i,a.u,a.A,a.l,a.R,a.m)}Pt.prototype.ca=function(a){a=a.target;const h=this.M;h&&ft(a)==3?h.j():this.Y(a)},Pt.prototype.Y=function(a){try{if(a==this.g)e:{const Ae=ft(this.g);var h=this.g.Ba();const Vn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||gu(this.g)))){this.J||Ae!=4||h==7||(h==8||0>=Vn?Pr(3):Pr(2)),Ko(this);var f=this.g.Z();this.X=f;t:if(Ql(this)){var g=gu(this.g);a="";var b=g.length,S=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),Or(this);var D="";break t}this.h.i=new c.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(S&&h==b-1)});g.length=0,this.h.g+=a,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=f==200,O_(this.i,this.u,this.A,this.l,this.R,Ae,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,ye=this.g;if((ee=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ee)){var Y=ee;break t}}Y=null}if(f=Y)Dn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Go(this,f);else{this.o=!1,this.s=3,De(12),ln(this),Or(this);break e}}if(this.P){f=!0;let Ke;for(;!this.J&&this.C<D.length;)if(Ke=x_(this,D),Ke==Ho){Ae==4&&(this.s=4,De(14),f=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==Kl){this.s=4,De(15),Dn(this.i,this.l,D,"[Invalid Chunk]"),f=!1;break}else Dn(this.i,this.l,Ke,null),Go(this,Ke);if(Ql(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||D.length!=0||this.h.h||(this.s=1,De(16),f=!1),this.o=this.o&&f,!f)Dn(this.i,this.l,D,"[Invalid Chunked Response]"),ln(this),Or(this);else if(0<D.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),ea(be),be.M=!0,De(11))}}else Dn(this.i,this.l,D,null),Go(this,D);Ae==4&&ln(this),this.o&&!this.J&&(Ae==4?Eu(this.j,this):(this.o=!1,$s(this)))}else X_(this.g),f==400&&0<D.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),ln(this),Or(this)}}}catch{}finally{}};function Ql(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function x_(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Ho:(f=Number(h.substring(f,g)),isNaN(f)?Kl:(g+=1,g+f>h.length?Ho:(h=h.slice(g,g+f),a.C=g+f,h)))}Pt.prototype.cancel=function(){this.J=!0,ln(this)};function $s(a){a.S=Date.now()+a.I,Jl(a,a.I)}function Jl(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=kr(m(a.ba,a),h)}function Ko(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Pt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(N_(this.i,this.A),this.L!=2&&(Pr(),De(17)),ln(this),this.s=2,Or(this)):Jl(this,this.S-a)};function Or(a){a.j.G==0||a.J||Eu(a.j,a)}function ln(a){Ko(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ul(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Go(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Qo(f.h,a))){if(!a.K&&Qo(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Js(f),Gs(f);else break e;Zo(f),De(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=kr(m(f.Za,f),6e3));if(1>=Zl(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else hn(f,11)}else if((a.K||f.g==a)&&Js(f),!B(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let Y=b[h];if(f.T=Y[0],Y=Y[1],f.G==2)if(Y[0]=="c"){f.K=Y[1],f.ia=Y[2];const be=Y[3];be!=null&&(f.la=be,f.j.info("VER="+f.la));const Ae=Y[4];Ae!=null&&(f.Aa=Ae,f.j.info("SVER="+f.Aa));const Vn=Y[5];Vn!=null&&typeof Vn=="number"&&0<Vn&&(g=1.5*Vn,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ke=a.g;if(Ke){const Ys=Ke.g?Ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var S=g.h;S.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Jo(S,S.h),S.h=null))}if(g.D){const ta=Ke.g?Ke.g.getResponseHeader("X-HTTP-Session-Id"):null;ta&&(g.ya=ta,re(g.I,g.D,ta))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var D=a;if(g.qa=Au(g,g.J?g.ia:null,g.W),D.K){eu(g.h,D);var ee=D,ye=g.L;ye&&(ee.I=ye),ee.B&&(Ko(ee),$s(ee)),g.g=D}else wu(g);0<f.i.length&&Qs(f)}else Y[0]!="stop"&&Y[0]!="close"||hn(f,7);else f.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?hn(f,7):Yo(f):Y[0]!="noop"&&f.l&&f.l.ta(Y),f.v=0)}}Pr(4)}catch{}}var L_=class{constructor(a,h){this.g=a,this.map=h}};function Xl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zl(a){return a.h?1:a.g?a.g.size:0}function Qo(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Jo(a,h){a.g?a.g.add(h):a.h=h}function eu(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Xl.prototype.cancel=function(){if(this.i=tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return N(a.i)}function V_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function M_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function nu(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=M_(a),g=V_(a),b=g.length,S=0;S<b;S++)h.call(void 0,g[S],f&&f[S],a)}var ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function U_(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),b=null;if(0<=g){var S=a[f].substring(0,g);b=a[f].substring(g+1)}else S=a[f];h(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function un(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof un){this.h=a.h,Bs(this,a.j),this.o=a.o,this.g=a.g,qs(this,a.s),this.l=a.l;var h=a.i,f=new xr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),su(this,f),this.m=a.m}else a&&(h=String(a).match(ru))?(this.h=!1,Bs(this,h[1]||"",!0),this.o=Nr(h[2]||""),this.g=Nr(h[3]||"",!0),qs(this,h[4]),this.l=Nr(h[5]||"",!0),su(this,h[6]||"",!0),this.m=Nr(h[7]||"")):(this.h=!1,this.i=new xr(null,this.h))}un.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Dr(h,iu,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Dr(h,iu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Dr(f,f.charAt(0)=="/"?$_:j_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Dr(f,q_)),a.join("")};function dt(a){return new un(a)}function Bs(a,h,f){a.j=f?Nr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function qs(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function su(a,h,f){h instanceof xr?(a.i=h,z_(a.i,a.h)):(f||(h=Dr(h,B_)),a.i=new xr(h,a.h))}function re(a,h,f){a.i.set(h,f)}function zs(a){return re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Nr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Dr(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,F_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function F_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var iu=/[#\/\?@]/g,j_=/[#\?:]/g,$_=/[#\?]/g,B_=/[#\?@]/g,q_=/#/g;function xr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function kt(a){a.g||(a.g=new Map,a.h=0,a.i&&U_(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=xr.prototype,n.add=function(a,h){kt(this),this.i=null,a=xn(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ou(a,h){kt(a),h=xn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function au(a,h){return kt(a),h=xn(a,h),a.g.has(h)}n.forEach=function(a,h){kt(this),this.g.forEach(function(f,g){f.forEach(function(b){a.call(h,b,g,this)},this)},this)},n.na=function(){kt(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const b=a[g];for(let S=0;S<b.length;S++)f.push(h[g])}return f},n.V=function(a){kt(this);let h=[];if(typeof a=="string")au(this,a)&&(h=h.concat(this.g.get(xn(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},n.set=function(a,h){return kt(this),this.i=null,a=xn(this,a),au(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function cu(a,h,f){ou(a,h),0<f.length&&(a.i=null,a.g.set(xn(a,h),N(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const S=encodeURIComponent(String(g)),D=this.V(g);for(g=0;g<D.length;g++){var b=S;D[g]!==""&&(b+="="+encodeURIComponent(String(D[g]))),a.push(b)}}return this.i=a.join("&")};function xn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function z_(a,h){h&&!a.j&&(kt(a),a.i=null,a.g.forEach(function(f,g){var b=g.toLowerCase();g!=b&&(ou(this,g),cu(this,b,f))},a)),a.j=h}function H_(a,h){const f=new Cr;if(c.Image){const g=new Image;g.onload=w(Ct,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w(Ct,f,"TestLoadImage: error",!1,h,g),g.onabort=w(Ct,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(Ct,f,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function W_(a,h){const f=new Cr,g=new AbortController,b=setTimeout(()=>{g.abort(),Ct(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(S=>{clearTimeout(b),S.ok?Ct(f,"TestPingServer: ok",!0,h):Ct(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Ct(f,"TestPingServer: error",!1,h)})}function Ct(a,h,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function K_(){this.g=new k_}function G_(a,h,f){const g=f||"";try{nu(a,function(b,S){let D=b;u(b)&&(D=jo(b)),h.push(g+S+"="+encodeURIComponent(D))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function Hs(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Hs,$o),Hs.prototype.g=function(){return new Ws(this.l,this.j)},Hs.prototype.i=function(a){return function(){return a}}({});function Ws(a,h){Ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ws,Ie),n=Ws.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Vr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function lu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Lr(this):Vr(this),this.readyState==3&&lu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Lr(this))},n.Qa=function(a){this.g&&(this.response=a,Lr(this))},n.ga=function(){this.g&&Lr(this)};function Lr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vr(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Vr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function uu(a){let h="";return ne(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Xo(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=uu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):re(a,h,f))}function oe(a){Ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(oe,Ie);var Q_=/^https?$/i,J_=["POST","PUT"];n=oe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zo.g(),this.v=this.o?Fl(this.o):Fl(zo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(S){hu(this,S);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const S of g.keys())f.set(S,g.get(S));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(S=>S.toLowerCase()=="content-type"),b=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(J_,h,void 0))||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,D]of f)this.g.setRequestHeader(S,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pu(this),this.u=!0,this.g.send(a),this.u=!1}catch(S){hu(this,S)}};function hu(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,du(a),Ks(a)}function du(a){a.A||(a.A=!0,Ne(a,"complete"),Ne(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ne(this,"complete"),Ne(this,"abort"),Ks(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ks(this,!0)),oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fu(this):this.bb())},n.bb=function(){fu(this)};function fu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ft(a)!=4||a.Z()!=2)){if(a.u&&ft(a)==4)Ll(a.Ea,0,a);else if(Ne(a,"readystatechange"),ft(a)==4){a.h=!1;try{const D=a.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=D===0){var b=String(a.D).match(ru)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),g=!Q_.test(b?b.toLowerCase():"")}f=g}if(f)Ne(a,"complete"),Ne(a,"success");else{a.m=6;try{var S=2<ft(a)?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.Z()+"]",du(a)}}finally{Ks(a)}}}}function Ks(a,h){if(a.g){pu(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ne(a,"ready");try{f.onreadystatechange=g}catch{}}}function pu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function ft(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),P_(h)}};function gu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function X_(a){const h={};a=(a.g&&2<=ft(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var f=I(a[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const S=h[b]||[];h[b]=S,S.push(f)}E(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mr(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function mu(a){this.Aa=0,this.i=[],this.j=new Cr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mr("baseRetryDelayMs",5e3,a),this.cb=Mr("retryDelaySeedMs",1e4,a),this.Wa=Mr("forwardChannelMaxRetries",2,a),this.wa=Mr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xl(a&&a.concurrentRequestLimit),this.Da=new K_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=mu.prototype,n.la=8,n.G=1,n.connect=function(a,h,f,g){De(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Au(this,null,this.W),Qs(this)};function Yo(a){if(_u(a),a.G==3){var h=a.U++,f=dt(a.I);if(re(f,"SID",a.K),re(f,"RID",h),re(f,"TYPE","terminate"),Ur(a,f),h=new Pt(a,a.j,h),h.L=2,h.v=zs(dt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ru(h.j,null),h.g.ea(h.v)),h.F=Date.now(),$s(h)}bu(a)}function Gs(a){a.g&&(ea(a),a.g.cancel(),a.g=null)}function _u(a){Gs(a),a.u&&(c.clearTimeout(a.u),a.u=null),Js(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Qs(a){if(!Yl(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ir||Cl(),br||(Ir(),br=!0),No.add(h,a),a.B=0}}function Y_(a,h){return Zl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=kr(m(a.Ga,a,h),Iu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Pt(this,this.j,a);let S=this.o;if(this.S&&(S?(S=_(S),T(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=vu(this,b,h),f=dt(this.I),re(f,"RID",a),re(f,"CVER",22),this.D&&re(f,"X-HTTP-Session-Id",this.D),Ur(this,f),S&&(this.O?h="headers="+encodeURIComponent(String(uu(S)))+"&"+h:this.m&&Xo(f,this.m,S)),Jo(this.h,b),this.Ua&&re(f,"TYPE","init"),this.P?(re(f,"$req",h),re(f,"SID","null"),b.T=!0,Wo(b,f,null)):Wo(b,f,h),this.G=2}}else this.G==3&&(a?yu(this,a):this.i.length==0||Yl(this.h)||yu(this))};function yu(a,h){var f;h?f=h.l:f=a.U++;const g=dt(a.I);re(g,"SID",a.K),re(g,"RID",f),re(g,"AID",a.T),Ur(a,g),a.m&&a.o&&Xo(g,a.m,a.o),f=new Pt(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=vu(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Jo(a.h,f),Wo(f,g,h)}function Ur(a,h){a.H&&ne(a.H,function(f,g){re(h,g,f)}),a.l&&nu({},function(f,g){re(h,g,f)})}function vu(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let S=-1;for(;;){const D=["count="+f];S==-1?0<f?(S=b[0].g,D.push("ofs="+S)):S=0:D.push("ofs="+S);let ee=!0;for(let ye=0;ye<f;ye++){let Y=b[ye].g;const be=b[ye].map;if(Y-=S,0>Y)S=Math.max(0,b[ye].g-100),ee=!1;else try{G_(be,D,"req"+Y+"_")}catch{g&&g(be)}}if(ee){g=D.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function wu(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ir||Cl(),br||(Ir(),br=!0),No.add(h,a),a.v=0}}function Zo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=kr(m(a.Fa,a),Iu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Tu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=kr(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Gs(this),Tu(this))};function ea(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Tu(a){a.g=new Pt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=dt(a.qa);re(h,"RID","rpc"),re(h,"SID",a.K),re(h,"AID",a.T),re(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&re(h,"TO",a.ja),re(h,"TYPE","xmlhttp"),Ur(a,h),a.m&&a.o&&Xo(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=zs(dt(h)),f.m=null,f.P=!0,Gl(f,a)}n.Za=function(){this.C!=null&&(this.C=null,Gs(this),Zo(this),De(19))};function Js(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Eu(a,h){var f=null;if(a.g==h){Js(a),ea(a),a.g=null;var g=2}else if(Qo(a.h,h))f=h.D,eu(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;g=Us(),Ne(g,new zl(g,f)),Qs(a)}else wu(a);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&Y_(a,h)||g==2&&Zo(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),b){case 1:hn(a,5);break;case 4:hn(a,10);break;case 3:hn(a,6);break;default:hn(a,2)}}}function Iu(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function hn(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const b=!g;g=new un(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Bs(g,"https"),zs(g),b?H_(g.toString(),f):W_(g.toString(),f)}else De(2);a.G=0,a.l&&a.l.sa(h),bu(a),_u(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function bu(a){if(a.G=0,a.ka=[],a.l){const h=tu(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Au(a,h,f){var g=f instanceof un?dt(f):new un(f);if(g.g!="")h&&(g.g=h+"."+g.g),qs(g,g.s);else{var b=c.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var S=new un(null);g&&Bs(S,g),h&&(S.g=h),b&&qs(S,b),f&&(S.l=f),g=S}return f=a.D,h=a.ya,f&&h&&re(g,f,h),re(g,"VER",a.la),Ur(a,g),g}function Ru(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new oe(new Hs({eb:f})):new oe(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Su(){}n=Su.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xs(){}Xs.prototype.g=function(a,h){return new Ue(a,h)};function Ue(a,h){Ie.call(this),this.g=new mu(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!B(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!B(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ln(this)}R(Ue,Ie),Ue.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){Yo(this.g)},Ue.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=jo(a),a=f);h.i.push(new L_(h.Ya++,a)),h.G==3&&Qs(h)},Ue.prototype.N=function(){this.g.l=null,delete this.j,Yo(this.g),delete this.g,Ue.aa.N.call(this)};function Pu(a){Bo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Pu,Bo);function ku(){qo.call(this),this.status=1}R(ku,qo);function Ln(a){this.g=a}R(Ln,Su),Ln.prototype.ua=function(){Ne(this.g,"a")},Ln.prototype.ta=function(a){Ne(this.g,new Pu(a))},Ln.prototype.sa=function(a){Ne(this.g,new ku)},Ln.prototype.ra=function(){Ne(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,pp=function(){return new Xs},fp=function(){return Us()},dp=cn,ja={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fs.NO_ERROR=0,Fs.TIMEOUT=8,Fs.HTTP_ERROR=6,Ii=Fs,Hl.COMPLETE="complete",hp=Hl,jl.EventType=Sr,Sr.OPEN="a",Sr.CLOSE="b",Sr.ERROR="c",Sr.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,zr=jl,oe.prototype.listenOnce=oe.prototype.L,oe.prototype.getLastError=oe.prototype.Ka,oe.prototype.getLastErrorCode=oe.prototype.Ba,oe.prototype.getStatus=oe.prototype.Z,oe.prototype.getResponseJson=oe.prototype.Oa,oe.prototype.getResponseText=oe.prototype.oa,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Ha,up=oe}).apply(typeof ti<"u"?ti:typeof self<"u"?self:typeof window<"u"?window:{});const uh="@firebase/firestore",hh="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new ws("@firebase/firestore");function Wn(){return En.logLevel}function x(n,...e){if(En.logLevel<=K.DEBUG){const t=e.map(kc);En.debug(`Firestore (${gr}): ${n}`,...t)}}function Et(n,...e){if(En.logLevel<=K.ERROR){const t=e.map(kc);En.error(`Firestore (${gr}): ${n}`,...t)}}function or(n,...e){if(En.logLevel<=K.WARN){const t=e.map(kc);En.warn(`Firestore (${gr}): ${n}`,...t)}}function kc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n="Unexpected state"){const e=`FIRESTORE (${gr}) INTERNAL ASSERTION FAILED: `+n;throw Et(e),new Error(e)}function Z(n,e){n||$()}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends We{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class aE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class cE{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new gp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new Se(e)}}class lE{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class uE{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new lE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hE{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,je(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new dh(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string"),this.R=t.token,new dh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=dE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function W(n,e){return n<e?-1:n>e?1:0}function $a(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return W(r,s);{const i=mp(),o=fE(i.encode(fh(n,t)),i.encode(fh(e,t)));return o!==0?o:W(r,s)}}t+=r>65535?2:1}return W(n.length,e.length)}function fh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function fE(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return W(n[t],e[t]);return W(n.length,e.length)}function ar(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=-62135596800,gh=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*gh);return new he(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ph)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gh}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ph;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new he(0,0))}static max(){return new q(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="__name__";class rt{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(),r===void 0?r=e.length-t:r>e.length-t&&$(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return rt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=rt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return W(e.length,t.length)}static compareSegments(e,t){const r=rt.isNumericId(e),s=rt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?rt.extractNumericId(e).compare(rt.extractNumericId(t)):$a(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ht.fromString(e.substring(4,e.length-2))}}class se extends rt{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const pE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends rt{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return pE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mh}static keyField(){return new we([mh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(se.fromString(e))}static fromName(e){return new U(se.fromString(e).popFirst(5))}static empty(){return new U(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new se(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=-1;function gE(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new Gt(s,U.empty(),e)}function mE(n){return new Gt(n.readTime,n.key,us)}class Gt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Gt(q.min(),U.empty(),us)}static max(){return new Gt(q.max(),U.empty(),us)}}function _E(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:W(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==yE)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function wE(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function _r(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}uo.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=-1;function ho(n){return n==null}function $i(n){return n===0&&1/n==-1/0}function TE(n){return typeof n=="number"&&Number.isInteger(n)&&!$i(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="";function EE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_h(e)),e=IE(n.get(t),e);return _h(e)}function IE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case yp:t+="";break;default:t+=i}}return t}function _h(n){return n+yp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ni(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ni(this.root,e,this.comparator,!1)}getReverseIterator(){return new ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ni(this.root,e,this.comparator,!0)}}class ni{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ve.RED,this.left=s??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vh(this.data.getIterator())}getIteratorFrom(e){return new vh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class vh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new de(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ar(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wp("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const bE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(Z(!!n),typeof n=="string"){let e=0;const t=bE.exec(n);if(Z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="server_timestamp",Ep="__type__",Ip="__previous_value__",bp="__local_write_time__";function Oc(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ep])===null||t===void 0?void 0:t.stringValue)===Tp}function fo(n){const e=n.mapValue.fields[Ip];return Oc(e)?fo(e):e}function hs(n){const e=Qt(n.mapValue.fields[bp].timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,t,r,s,i,o,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}const Bi="(default)";class ds{constructor(e,t){this.projectId=e,this.database=t||Bi}static empty(){return new ds("","")}get isDefaultDatabase(){return this.database===Bi}isEqual(e){return e instanceof ds&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="__type__",RE="__max__",ri={mapValue:{}},Rp="__vector__",qi="value";function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oc(n)?4:PE(n)?9007199254740991:SE(n)?10:11:$()}function lt(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hs(n).isEqual(hs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qt(s.timestampValue),c=Qt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Jt(s.bytesValue).isEqual(Jt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ae(s.geoPointValue.latitude)===ae(i.geoPointValue.latitude)&&ae(s.geoPointValue.longitude)===ae(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ae(s.integerValue)===ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ae(s.doubleValue),c=ae(i.doubleValue);return o===c?$i(o)===$i(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return ar(n.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(yh(o)!==yh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!lt(o[l],c[l])))return!1;return!0}(n,e);default:return $()}}function fs(n,e){return(n.values||[]).find(t=>lt(t,e))!==void 0}function cr(n,e){if(n===e)return 0;const t=Xt(n),r=Xt(e);if(t!==r)return W(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ae(i.integerValue||i.doubleValue),l=ae(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return wh(n.timestampValue,e.timestampValue);case 4:return wh(hs(n),hs(e));case 5:return $a(n.stringValue,e.stringValue);case 6:return function(i,o){const c=Jt(i),l=Jt(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=W(c[u],l[u]);if(d!==0)return d}return W(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=W(ae(i.latitude),ae(o.latitude));return c!==0?c:W(ae(i.longitude),ae(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Th(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,d;const p=i.fields||{},m=o.fields||{},w=(c=p[qi])===null||c===void 0?void 0:c.arrayValue,R=(l=m[qi])===null||l===void 0?void 0:l.arrayValue,N=W(((u=w?.values)===null||u===void 0?void 0:u.length)||0,((d=R?.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Th(w,R)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===ri.mapValue&&o===ri.mapValue)return 0;if(i===ri.mapValue)return 1;if(o===ri.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=$a(l[p],d[p]);if(m!==0)return m;const w=cr(c[l[p]],u[d[p]]);if(w!==0)return w}return W(l.length,d.length)}(n.mapValue,e.mapValue);default:throw $()}}function wh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return W(n,e);const t=Qt(n),r=Qt(e),s=W(t.seconds,r.seconds);return s!==0?s:W(t.nanos,r.nanos)}function Th(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=cr(t[s],r[s]);if(i)return i}return W(t.length,r.length)}function lr(n){return Ba(n)}function Ba(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ba(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ba(t.fields[o])}`;return s+"}"}(n.mapValue):$()}function bi(n){switch(Xt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fo(n);return e?16+bi(e):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+bi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Pn(r.fields,(i,o)=>{s+=i.length+bi(o)}),s}(n.mapValue);default:throw $()}}function Eh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qa(n){return!!n&&"integerValue"in n}function Nc(n){return!!n&&"arrayValue"in n}function Ih(n){return!!n&&"nullValue"in n}function bh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ai(n){return!!n&&"mapValue"in n}function SE(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ap])===null||t===void 0?void 0:t.stringValue)===Rp}function Jr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Pn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Jr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function PE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===RE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ai(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(t)}setAll(e){let t=we.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Jr(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ai(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ai(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Pn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(Jr(this.value))}}function Sp(n){const e=[];return Pn(n.fields,(t,r)=>{const s=new we([t]);if(Ai(r)){const i=Sp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ke(e,0,q.min(),q.min(),q.min(),ze.empty(),0)}static newFoundDocument(e,t,r,s){return new ke(e,1,t,q.min(),r,s,0)}static newNoDocument(e,t){return new ke(e,2,t,q.min(),q.min(),ze.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,q.min(),q.min(),ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){this.position=e,this.inclusive=t}}function Ah(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),t.key):r=cr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t="asc"){this.field=e,this.dir=t}}function kE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{}class le extends Pp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new OE(e,t,r):t==="array-contains"?new xE(e,r):t==="in"?new LE(e,r):t==="not-in"?new VE(e,r):t==="array-contains-any"?new ME(e,r):new le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new NE(e,r):new DE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(cr(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(cr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends Pp{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tt(e,t)}matches(e){return kp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function kp(n){return n.op==="and"}function Cp(n){return CE(n)&&kp(n)}function CE(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function za(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+lr(n.value);if(Cp(n))return n.filters.map(e=>za(e)).join(",");{const e=n.filters.map(t=>za(t)).join(",");return`${n.op}(${e})`}}function Op(n,e){return n instanceof le?function(r,s){return s instanceof le&&r.op===s.op&&r.field.isEqual(s.field)&&lt(r.value,s.value)}(n,e):n instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Op(o,s.filters[c]),!0):!1}(n,e):void $()}function Np(n){return n instanceof le?function(t){return`${t.field.canonicalString()} ${t.op} ${lr(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(Np).join(" ,")+"}"}(n):"Filter"}class OE extends le{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class NE extends le{constructor(e,t){super(e,"in",t),this.keys=Dp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class DE extends le{constructor(e,t){super(e,"not-in",t),this.keys=Dp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Dp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class xE extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Nc(t)&&fs(t.arrayValue,this.value)}}class LE extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fs(this.value.arrayValue,t)}}class VE extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!fs(this.value.arrayValue,t)}}class ME extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Nc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.le=null}}function Sh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new UE(n,e,t,r,s,i,o)}function Dc(n){const e=z(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>za(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ho(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>lr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>lr(r)).join(",")),e.le=t}return e.le}function xc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Op(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rh(n.startAt,e.startAt)&&Rh(n.endAt,e.endAt)}function Ha(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function FE(n,e,t,r,s,i,o,c){return new Rs(n,e,t,r,s,i,o,c)}function Lc(n){return new Rs(n)}function Ph(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xp(n){return n.collectionGroup!==null}function Xr(n){const e=z(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new de(we.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new Hi(i,r))}),t.has(we.keyField().canonicalString())||e.he.push(new Hi(we.keyField(),r))}return e.he}function ot(n){const e=z(n);return e.Pe||(e.Pe=jE(e,Xr(n))),e.Pe}function jE(n,e){if(n.limitType==="F")return Sh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hi(s.field,i)});const t=n.endAt?new zi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zi(n.startAt.position,n.startAt.inclusive):null;return Sh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wa(n,e){const t=n.filters.concat([e]);return new Rs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ka(n,e,t){return new Rs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function po(n,e){return xc(ot(n),ot(e))&&n.limitType===e.limitType}function Lp(n){return`${Dc(ot(n))}|lt:${n.limitType}`}function Kn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Np(s)).join(", ")}]`),ho(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>lr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>lr(s)).join(",")),`Target(${r})`}(ot(n))}; limitType=${n.limitType})`}function go(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Xr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Ah(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Xr(r),s)||r.endAt&&!function(o,c,l){const u=Ah(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Xr(r),s))}(n,e)}function $E(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vp(n){return(e,t)=>{let r=!1;for(const s of Xr(n)){const i=BE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BE(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?cr(l,u):$()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new ie(U.comparator);function It(){return qE}const Mp=new ie(U.comparator);function Hr(...n){let e=Mp;for(const t of n)e=e.insert(t.key,t);return e}function Up(n){let e=Mp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mn(){return Yr()}function Fp(){return Yr()}function Yr(){return new kn(n=>n.toString(),(n,e)=>n.isEqual(e))}const zE=new ie(U.comparator),HE=new de(U.comparator);function Q(...n){let e=HE;for(const t of n)e=e.add(t);return e}const WE=new de(W);function KE(){return WE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(e)?"-0":e}}function jp(n){return{integerValue:""+n}}function GE(n,e){return TE(e)?jp(e):Vc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this._=void 0}}function QE(n,e,t){return n instanceof ps?function(s,i){const o={fields:{[Ep]:{stringValue:Tp},[bp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oc(i)&&(i=fo(i)),i&&(o.fields[Ip]=i),{mapValue:o}}(t,e):n instanceof gs?Bp(n,e):n instanceof ms?qp(n,e):function(s,i){const o=$p(s,i),c=kh(o)+kh(s.Ie);return qa(o)&&qa(s.Ie)?jp(c):Vc(s.serializer,c)}(n,e)}function JE(n,e,t){return n instanceof gs?Bp(n,e):n instanceof ms?qp(n,e):t}function $p(n,e){return n instanceof Wi?function(r){return qa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ps extends mo{}class gs extends mo{constructor(e){super(),this.elements=e}}function Bp(n,e){const t=zp(e);for(const r of n.elements)t.some(s=>lt(s,r))||t.push(r);return{arrayValue:{values:t}}}class ms extends mo{constructor(e){super(),this.elements=e}}function qp(n,e){let t=zp(e);for(const r of n.elements)t=t.filter(s=>!lt(s,r));return{arrayValue:{values:t}}}class Wi extends mo{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function kh(n){return ae(n.integerValue||n.doubleValue)}function zp(n){return Nc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,t){this.field=e,this.transform=t}}function YE(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof gs&&s instanceof gs||r instanceof ms&&s instanceof ms?ar(r.elements,s.elements,lt):r instanceof Wi&&s instanceof Wi?lt(r.Ie,s.Ie):r instanceof ps&&s instanceof ps}(n.transform,e.transform)}class ZE{constructor(e,t){this.version=e,this.transformResults=t}}class vt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ri(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _o{}function Hp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Kp(n.key,vt.none()):new Ss(n.key,n.data,vt.none());{const t=n.data,r=ze.empty();let s=new de(we.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cn(n.key,r,new Ye(s.toArray()),vt.none())}}function e0(n,e,t){n instanceof Ss?function(s,i,o){const c=s.value.clone(),l=Oh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Cn?function(s,i,o){if(!Ri(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Oh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Wp(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Zr(n,e,t,r){return n instanceof Ss?function(i,o,c,l){if(!Ri(i.precondition,o))return c;const u=i.value.clone(),d=Nh(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof Cn?function(i,o,c,l){if(!Ri(i.precondition,o))return c;const u=Nh(i.fieldTransforms,l,o),d=o.data;return d.setAll(Wp(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,c){return Ri(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function t0(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=$p(r.transform,s||null);i!=null&&(t===null&&(t=ze.empty()),t.set(r.field,i))}return t||null}function Ch(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ar(r,s,(i,o)=>YE(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ss extends _o{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cn extends _o{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Oh(n,e,t){const r=new Map;Z(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,JE(o,c,t[s]))}return r}function Nh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,QE(i,o,e))}return r}class Kp extends _o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n0 extends _o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&e0(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Hp(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&ar(this.mutations,e.mutations,(t,r)=>Ch(t,r))&&ar(this.baseMutations,e.baseMutations,(t,r)=>Ch(t,r))}}class Mc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length);let s=function(){return zE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Mc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,X;function o0(n){switch(n){case C.OK:return $();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return $()}}function Gp(n){if(n===void 0)return Et("GRPC error has no .code"),C.UNKNOWN;switch(n){case ce.OK:return C.OK;case ce.CANCELLED:return C.CANCELLED;case ce.UNKNOWN:return C.UNKNOWN;case ce.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ce.INTERNAL:return C.INTERNAL;case ce.UNAVAILABLE:return C.UNAVAILABLE;case ce.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ce.NOT_FOUND:return C.NOT_FOUND;case ce.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ce.ABORTED:return C.ABORTED;case ce.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ce.DATA_LOSS:return C.DATA_LOSS;default:return $()}}(X=ce||(ce={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=new Ht([4294967295,4294967295],0);function Dh(n){const e=mp().encode(n),t=new lp;return t.update(e),new Uint8Array(t.digest())}function xh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ht([t,r],0),new Ht([s,i],0)]}class Uc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wr(`Invalid padding: ${t}`);if(r<0)throw new Wr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Ht.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(Ht.fromNumber(r)));return s.compare(a0)===1&&(s=new Ht([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Dh(e),[r,s]=xh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Uc(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ee===0)return;const t=Dh(e),[r,s]=xh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ps.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yo(q.min(),s,new ie(W),It(),Q())}}class Ps{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ps(r,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class Qp{constructor(e,t){this.targetId=e,this.ge=t}}class Jp{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Lh{constructor(){this.pe=0,this.ye=Vh(),this.we=Te.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Q(),t=Q(),r=Q();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$()}}),new Ps(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=Vh()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Z(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class c0{constructor(e){this.ke=e,this.qe=new Map,this.Qe=It(),this.$e=si(),this.Ue=si(),this.Ke=new ie(W)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(Ha(i))if(r===0){const o=new U(i.path);this.ze(t,o,ke.newNoDocument(o,q.min()))}else Z(r===1);else{const o=this.et(t);if(o!==r){const c=this.tt(e),l=c?this.nt(c,e,o):1;if(l!==0){this.Ye(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Jt(r).toUint8Array()}catch(l){if(l instanceof wp)return or("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Uc(o,s,i)}catch(l){return or(l instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ke.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,o)=>{const c=this.Xe(o);if(c){if(i.current&&Ha(c.target)){const l=new U(c.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,ke.newNoDocument(l,e))}i.ve&&(t.set(o,i.Fe()),i.Me())}});let r=Q();this.Ue.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new yo(e,t,this.Ke,this.Qe,r);return this.Qe=It(),this.$e=si(),this.Ue=si(),this.Ke=new ie(W),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Lh,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new de(W),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new de(W),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Lh),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function si(){return new ie(U.comparator)}function Vh(){return new ie(U.comparator)}const l0={asc:"ASCENDING",desc:"DESCENDING"},u0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},h0={and:"AND",or:"OR"};class d0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ga(n,e){return n.useProto3Json||ho(e)?e:{value:e}}function Ki(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function f0(n,e){return Ki(n,e.toTimestamp())}function at(n){return Z(!!n),q.fromTimestamp(function(t){const r=Qt(t);return new he(r.seconds,r.nanos)}(n))}function Fc(n,e){return Qa(n,e).canonicalString()}function Qa(n,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Yp(n){const e=se.fromString(n);return Z(rg(e)),e}function Ja(n,e){return Fc(n.databaseId,e.path)}function la(n,e){const t=Yp(e);if(t.get(1)!==n.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(eg(t))}function Zp(n,e){return Fc(n.databaseId,e)}function p0(n){const e=Yp(n);return e.length===4?se.emptyPath():eg(e)}function Xa(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function eg(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Mh(n,e,t){return{name:Ja(n,e),fields:t.value.mapValue.fields}}function g0(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Z(d===void 0||typeof d=="string"),Te.fromBase64String(d||"")):(Z(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Te.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?C.UNKNOWN:Gp(u.code);return new L(d,u.message||"")}(o);t=new Jp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=la(n,r.document.name),i=at(r.document.updateTime),o=r.document.createTime?at(r.document.createTime):q.min(),c=new ze({mapValue:{fields:r.document.fields}}),l=ke.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Si(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=la(n,r.document),i=r.readTime?at(r.readTime):q.min(),o=ke.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Si([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=la(n,r.document),i=r.removedTargetIds||[];t=new Si([],i,s,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new i0(s,i),c=r.targetId;t=new Qp(c,o)}}return t}function m0(n,e){let t;if(e instanceof Ss)t={update:Mh(n,e.key,e.value)};else if(e instanceof Kp)t={delete:Ja(n,e.key)};else if(e instanceof Cn)t={update:Mh(n,e.key,e.data),updateMask:A0(e.fieldMask)};else{if(!(e instanceof n0))return $();t={verify:Ja(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof ps)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof gs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ms)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Wi)return{fieldPath:o.field.canonicalString(),increment:c.Ie};throw $()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:f0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(n,e.precondition)),t}function _0(n,e){return n&&n.length>0?(Z(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?at(s.updateTime):at(i);return o.isEqual(q.min())&&(o=at(i)),new ZE(o,s.transformResults||[])}(t,e))):[]}function y0(n,e){return{documents:[Zp(n,e.path)]}}function v0(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Zp(n,s);const i=function(u){if(u.length!==0)return ng(tt.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Gn(m.field),direction:E0(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ga(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:t,parent:s}}function w0(n){let e=p0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const m=tg(p);return m instanceof tt&&Cp(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(R){return new Hi(Qn(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,ho(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(p){const m=!!p.before,w=p.values||[];return new zi(w,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,w=p.values||[];return new zi(w,m)}(t.endAt)),FE(e,s,o,i,c,"F",l,u)}function T0(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Qn(t.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qn(t.unaryFilter.field);return le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qn(t.unaryFilter.field);return le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qn(t.unaryFilter.field);return le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(t){return le.create(Qn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>tg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(t.compositeFilter.op))}(n):$()}function E0(n){return l0[n]}function I0(n){return u0[n]}function b0(n){return h0[n]}function Gn(n){return{fieldPath:n.canonicalString()}}function Qn(n){return we.fromServerFormat(n.fieldPath)}function ng(n){return n instanceof le?function(t){if(t.op==="=="){if(bh(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NAN"}};if(Ih(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bh(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NOT_NAN"}};if(Ih(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gn(t.field),op:I0(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(s=>ng(s));return r.length===1?r[0]:{compositeFilter:{op:b0(t.op),filters:r}}}(n):$()}function A0(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function rg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,r,s,i=q.min(),o=q.min(),c=Te.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.Tt=e}}function S0(n){const e=w0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ka(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.Tn=new k0}addToCollectionParentIndex(e,t){return this.Tn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Gt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Gt.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class k0{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new de(se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new de(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sg=41943040;class Le{static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(sg,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new ur(0)}static Kn(){return new ur(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="LruGarbageCollector",C0=1048576;function jh([n,e],[t,r]){const s=W(n,t);return s===0?W(e,r):s}class O0{constructor(e){this.Hn=e,this.buffer=new de(jh),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();jh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class N0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){x(Fh,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_r(t)?x(Fh,"Ignoring IndexedDB error during garbage collection: ",t):await mr(t)}await this.er(3e5)})}}class D0{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(uo.ae);const r=new O0(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Uh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Uh):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,o,c,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Wn()<=K.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function x0(n,e){return new D0(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.changes=new kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Zr(r.mutation,s,Ye.empty(),he.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const s=mn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Hr();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=mn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=It();const o=Yr(),c=function(){return Yr()}();return t.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Cn)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Zr(d.mutation,u,d.mutation.getFieldMask(),he.now())):o.set(u.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var p;return c.set(u,new V0(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Yr();let s=new ie((o,c)=>o-c),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let d=r.get(l)||Ye.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||Q()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=Fp();d.forEach(m=>{if(!i.has(m)){const w=Hp(t.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return U.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(mn());let c=us,l=i;return o.next(u=>k.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Q())).next(d=>({batchId:c,changes:Up(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let s=Hr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Hr();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,l=>{const u=function(p,m){return new Rs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ke.newInvalidDocument(d)))});let c=Hr();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&Zr(d.mutation,u,Ye.empty(),he.now()),go(t,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return k.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:at(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:S0(s.bundledQuery),readTime:at(s.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.overlays=new ie(U.comparator),this.Rr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mn();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=mn(),i=t.length+1,o=new U(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ie((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=mn(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=mn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return k.resolve(c)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new s0(t,r));let i=this.Rr.get(t);i===void 0&&(i=Q(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.Vr=new de(_e.mr),this.gr=new de(_e.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new _e(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new _e(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new U(new se([])),r=new _e(t,e),s=new _e(t,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new U(new se([])),r=new _e(t,e),s=new _e(t,e+1);let i=Q();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new _e(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return U.comparator(e.key,t.key)||W(e.Cr,t.Cr)}static pr(e,t){return W(e.Cr,t.Cr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new de(_e.mr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new r0(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Mr=this.Mr.add(new _e(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Cc:this.Fr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _e(t,0),s=new _e(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const c=this.Or(o.Cr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(W);return t.forEach(s=>{const i=new _e(s,0),o=new _e(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],c=>{r=r.add(c.Cr)})}),k.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const o=new _e(new U(i),0);let c=new de(W);return this.Mr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Cr)),!0)},o),k.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return k.forEach(t.mutations,s=>{const i=new _e(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new _e(t,0),s=this.Mr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.kr=e,this.docs=function(){return new ie(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=It();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ke.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=It();const o=t.path,c=new U(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_E(mE(d),r)<=0||(s.has(d.key)||go(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$()}qr(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new q0(this)}getSize(e){return k.resolve(this.size)}}class q0 extends L0{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.persistence=e,this.Qr=new kn(t=>Dc(t),xc),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.$r=0,this.Ur=new jc,this.targetCount=0,this.Kr=ur.Un()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),k.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new ur(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.zn(t),k.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new uo(0),this.zr=!1,this.zr=!0,this.jr=new j0,this.referenceDelegate=e(this),this.Hr=new z0(this),this.indexManager=new P0,this.remoteDocumentCache=function(s){return new B0(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new R0(t),this.Yr=new U0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new F0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new $0(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new H0(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return k.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class H0 extends vE{constructor(e){super(),this.currentSequenceNumber=e}}class $c{constructor(e){this.persistence=e,this.ti=new jc,this.ni=null}static ri(e){return new $c(e)}get ii(){if(this.ni)return this.ni;throw $()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),k.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.ii,r=>{const s=U.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,q.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return k.or([()=>k.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Gi{constructor(e,t){this.persistence=e,this.oi=new kn(r=>EE(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=x0(this,t)}static ri(e,t){return new Gi(e,t)}Zr(){}Xr(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return k.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,t).next(c=>{c||(r++,i.removeEntry(o,q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),k.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bi(e.data.value)),t}ar(e,t,r){return k.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Iy()?8:wE(Oe())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new W0;return this._s(e,t,o).next(c=>{if(i.result=c,this.Xi)return this.us(e,t,o,c.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(Wn()<=K.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),k.resolve()):(Wn()<=K.DEBUG&&x("QueryEngine","Query:",Kn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Wn()<=K.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ot(t))):k.resolve())}rs(e,t){if(Ph(t))return k.resolve(null);let r=ot(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ka(t,null,"F"),r=ot(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Q(...i);return this.ns.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.cs(t,c);return this.ls(t,u,o,l.readTime)?this.rs(e,Ka(t,null,"F")):this.hs(e,u,t,l)}))})))}ss(e,t,r,s){return Ph(t)||s.isEqual(q.min())?k.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(t,i);return this.ls(t,o,r,s)?k.resolve(null):(Wn()<=K.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kn(t)),this.hs(e,o,t,gE(s,us)).next(c=>c))})}cs(e,t){let r=new de(Vp(e));return t.forEach((s,i)=>{go(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return Wn()<=K.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Kn(t)),this.ns.getDocumentsMatchingQuery(e,t,Gt.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="LocalStore",G0=3e8;class Q0{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new ie(W),this.Is=new kn(i=>Dc(i),xc),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M0(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function J0(n,e,t,r){return new Q0(n,e,t,r)}async function og(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Q();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:c}))})})}function X0(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,m=p.keys();let w=k.resolve();return m.forEach(R=>{w=w.next(()=>d.getEntry(l,R)).next(N=>{const P=u.docVersions.get(R);Z(P!==null),N.version.compareTo(P)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Q();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function ag(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Y0(n,e){const t=z(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(t.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Hr.addMatchingKeys(i,d.addedDocuments,p)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Te.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(p,w),function(N,P,V){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=G0?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(m,w,d)&&c.push(t.Hr.updateTargetData(i,w))});let l=It(),u=Q();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(Z0(i,o,e.documentUpdates).next(d=>{l=d.Vs,u=d.fs})),!r.isEqual(q.min())){const d=t.Hr.getLastRemoteSnapshotVersion(i).next(p=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return k.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.Ts=s,i))}function Z0(n,e,t){let r=Q(),s=Q();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=It();return t.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):x(qc,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Vs:o,fs:s}})}function eI(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Cc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function tI(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Hr.allocateTargetId(r).next(o=>(s=new Bt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Ya(n,e,t){const r=z(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_r(o))throw o;x(qc,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function $h(n,e,t){const r=z(n);let s=q.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=z(l),m=p.Is.get(d);return m!==void 0?k.resolve(p.Ts.get(m)):p.Hr.getTargetData(u,d)}(r,o,ot(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?i:Q())).next(c=>(nI(r,$E(e),c),{documents:c,gs:i})))}function nI(n,e,t){let r=n.Es.get(e)||q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class Bh{constructor(){this.activeTargetIds=KE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rI{constructor(){this.ho=new Bh,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Bh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="ConnectivityMonitor";class zh{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){x(qh,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){x(qh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii=null;function Za(){return ii===null?ii=function(){return 268435456+Math.round(2147483648*Math.random())}():ii++,"0x"+ii.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="RestConnection",iI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oI{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Bi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,t,r,s,i){const o=Za(),c=this.bo(e,t.toUriEncodedString());x(ua,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,c,l,r).then(u=>(x(ua,`Received RPC '${e}' ${o}: `,u),u),u=>{throw or(ua,`RPC '${e}' ${o} failed with error: `,u,"url: ",c,"request:",r),u})}Co(e,t,r,s,i,o){return this.So(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,t){const r=iI[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class cI extends oI{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=Za();return new Promise((o,c)=>{const l=new up;l.setWithCredentials(!0),l.listenOnce(hp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ii.NO_ERROR:const d=l.getResponseJson();x(Re,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ii.TIMEOUT:x(Re,`RPC '${e}' ${i} timed out`),c(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ii.HTTP_ERROR:const p=l.getStatus();if(x(Re,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m?.error;if(w&&w.status&&w.message){const R=function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(V)>=0?V:C.UNKNOWN}(w.status);c(new L(R,w.message))}else c(new L(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new L(C.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{x(Re,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);x(Re,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",u,r,15)})}Wo(e,t,r){const s=Za(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pp(),c=fp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");x(Re,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,w=!1;const R=new aI({Fo:P=>{w?x(Re,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(x(Re,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),x(Re,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Mo:()=>p.close()}),N=(P,V,B)=>{P.listen(V,M=>{try{B(M)}catch(F){setTimeout(()=>{throw F},0)}})};return N(p,zr.EventType.OPEN,()=>{w||(x(Re,`RPC '${e}' stream ${s} transport opened.`),R.Qo())}),N(p,zr.EventType.CLOSE,()=>{w||(w=!0,x(Re,`RPC '${e}' stream ${s} transport closed`),R.Uo())}),N(p,zr.EventType.ERROR,P=>{w||(w=!0,or(Re,`RPC '${e}' stream ${s} transport errored:`,P),R.Uo(new L(C.UNAVAILABLE,"The operation could not be completed")))}),N(p,zr.EventType.MESSAGE,P=>{var V;if(!w){const B=P.data[0];Z(!!B);const M=B,F=M?.error||((V=M[0])===null||V===void 0?void 0:V.error);if(F){x(Re,`RPC '${e}' stream ${s} received error:`,F);const J=F.status;let ne=function(v){const T=ce[v];if(T!==void 0)return Gp(T)}(J),E=F.message;ne===void 0&&(ne=C.INTERNAL,E="Unknown error status: "+J+" with message "+F.message),w=!0,R.Uo(new L(ne,E)),p.close()}else x(Re,`RPC '${e}' stream ${s} received:`,B),R.Ko(B)}}),N(c,dp.STAT_EVENT,P=>{P.stat===ja.PROXY?x(Re,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===ja.NOPROXY&&x(Re,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.$o()},0),R}}function ha(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n){return new d0(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="PersistentStream";class lg{constructor(e,t,r,s,i,o,c,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new cg(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Et(t.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new L(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return x(Hh,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(x(Hh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lI extends lg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=g0(this.serializer,e),r=function(i){if(!("targetChange"in i))return q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?at(o.readTime):q.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Xa(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=Ha(l)?{documents:y0(i,l)}:{query:v0(i,l).ht},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Xp(i,o.resumeToken);const u=Ga(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=Ki(i,o.snapshotVersion.toTimestamp());const u=Ga(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=T0(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Xa(this.serializer),t.removeTarget=e,this.I_(t)}}class uI extends lg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=_0(e.writeResults,e.commitTime),r=at(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Xa(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>m0(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{}class dI extends hI{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Qa(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(C.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,Qa(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(C.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class fI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Et(t),this.N_=!1):x("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="RemoteStore";class pI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{On(this)&&(x(In,"Restarting streams for network reachability change."),await async function(l){const u=z(l);u.W_.add(4),await ks(u),u.j_.set("Unknown"),u.W_.delete(4),await wo(u)}(this))})}),this.j_=new fI(r,s)}}async function wo(n){if(On(n))for(const e of n.G_)await e(!0)}async function ks(n){for(const e of n.G_)await e(!1)}function ug(n,e){const t=z(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Kc(t)?Wc(t):yr(t).c_()&&Hc(t,e))}function zc(n,e){const t=z(n),r=yr(t);t.K_.delete(e),r.c_()&&hg(t,e),t.K_.size===0&&(r.c_()?r.P_():On(t)&&t.j_.set("Unknown"))}function Hc(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yr(n).y_(e)}function hg(n,e){n.H_.Ne(e),yr(n).w_(e)}function Wc(n){n.H_=new c0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),yr(n).start(),n.j_.B_()}function Kc(n){return On(n)&&!yr(n).u_()&&n.K_.size>0}function On(n){return z(n).W_.size===0}function dg(n){n.H_=void 0}async function gI(n){n.j_.set("Online")}async function mI(n){n.K_.forEach((e,t)=>{Hc(n,e)})}async function _I(n,e){dg(n),Kc(n)?(n.j_.q_(e),Wc(n)):n.j_.set("Unknown")}async function yI(n,e,t){if(n.j_.set("Online"),e instanceof Jp&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.K_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.K_.delete(c),s.H_.removeTarget(c))}(n,e)}catch(r){x(In,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qi(n,r)}else if(e instanceof Si?n.H_.We(e):e instanceof Qp?n.H_.Ze(e):n.H_.je(e),!t.isEqual(q.min()))try{const r=await ag(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.H_.ot(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.K_.get(u);d&&i.K_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.K_.get(l);if(!d)return;i.K_.set(l,d.withResumeToken(Te.EMPTY_BYTE_STRING,d.snapshotVersion)),hg(i,l);const p=new Bt(d.target,l,u,d.sequenceNumber);Hc(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){x(In,"Failed to raise snapshot:",r),await Qi(n,r)}}async function Qi(n,e,t){if(!_r(e))throw e;n.W_.add(1),await ks(n),n.j_.set("Offline"),t||(t=()=>ag(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(In,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await wo(n)})}function fg(n,e){return e().catch(t=>Qi(n,t,e))}async function To(n){const e=z(n),t=Yt(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Cc;for(;vI(e);)try{const s=await eI(e.localStore,r);if(s===null){e.U_.length===0&&t.P_();break}r=s.batchId,wI(e,s)}catch(s){await Qi(e,s)}pg(e)&&gg(e)}function vI(n){return On(n)&&n.U_.length<10}function wI(n,e){n.U_.push(e);const t=Yt(n);t.c_()&&t.S_&&t.b_(e.mutations)}function pg(n){return On(n)&&!Yt(n).u_()&&n.U_.length>0}function gg(n){Yt(n).start()}async function TI(n){Yt(n).C_()}async function EI(n){const e=Yt(n);for(const t of n.U_)e.b_(t.mutations)}async function II(n,e,t){const r=n.U_.shift(),s=Mc.from(r,e,t);await fg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await To(n)}async function bI(n,e){e&&Yt(n).S_&&await async function(r,s){if(function(o){return o0(o)&&o!==C.ABORTED}(s.code)){const i=r.U_.shift();Yt(r).h_(),await fg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await To(r)}}(n,e),pg(n)&&gg(n)}async function Wh(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),x(In,"RemoteStore received new credentials");const r=On(t);t.W_.add(3),await ks(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await wo(t)}async function AI(n,e){const t=z(n);e?(t.W_.delete(2),await wo(t)):e||(t.W_.add(2),await ks(t),t.j_.set("Unknown"))}function yr(n){return n.J_||(n.J_=function(t,r,s){const i=z(t);return i.M_(),new lI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:gI.bind(null,n),No:mI.bind(null,n),Lo:_I.bind(null,n),p_:yI.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Kc(n)?Wc(n):n.j_.set("Unknown")):(await n.J_.stop(),dg(n))})),n.J_}function Yt(n){return n.Y_||(n.Y_=function(t,r,s){const i=z(t);return i.M_(),new uI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:TI.bind(null,n),Lo:bI.bind(null,n),D_:EI.bind(null,n),v_:II.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await To(n)):(await n.Y_.stop(),n.U_.length>0&&(x(In,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Gc(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qc(n,e){if(Et("AsyncQueue",`${e}: ${n}`),_r(n))return new L(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{static emptySet(e){return new nr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=Hr(),this.sortedSet=new ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new nr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.Z_=new ie(U.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):$():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class hr{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new hr(e,t,nr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&po(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class SI{constructor(){this.queries=Gh(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=z(t),i=s.queries;s.queries=Gh(),i.forEach((o,c)=>{for(const l of c.ta)l.onError(r)})})(this,new L(C.ABORTED,"Firestore shutting down"))}}function Gh(){return new kn(n=>Lp(n),po)}async function mg(n,e){const t=z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new RI,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Qc(o,`Initialization of query '${Kn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&Jc(t)}async function _g(n,e){const t=z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function PI(n,e){const t=z(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.ta)c.oa(s)&&(r=!0);o.ea=s}}r&&Jc(t)}function kI(n,e,t){const r=z(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function Jc(n){n.ia.forEach(e=>{e.next()})}var ec,Qh;(Qh=ec||(ec={}))._a="default",Qh.Cache="cache";class yg{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=hr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==ec.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.key=e}}class wg{constructor(e){this.key=e}}class CI{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Q(),this.mutatedKeys=Q(),this.ya=Vp(e),this.wa=new nr(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new Kh,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),w=go(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),N=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;m&&w?m.data.isEqual(w.data)?R!==N&&(r.track({type:3,doc:w}),P=!0):this.va(m,w)||(r.track({type:2,doc:w}),P=!0,(l&&this.ya(w,l)>0||u&&this.ya(w,u)<0)&&(c=!0)):!m&&w?(r.track({type:0,doc:w}),P=!0):m&&!w&&(r.track({type:1,doc:m}),P=!0,(l||u)&&(c=!0)),P&&(w?(o=o.add(w),i=N?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:c,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(w,R){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return N(w)-N(R)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const c=t&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,u=l!==this.ga;return this.ga=l,o.length!==0||u?{snapshot:new hr(this.query,e.wa,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Kh,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Q(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new wg(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new vg(r))}),t}Oa(e){this.fa=e.gs,this.pa=Q();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return hr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Xc="SyncEngine";class OI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class NI{constructor(e){this.key=e,this.Ba=!1}}class DI{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new kn(c=>Lp(c),po),this.qa=new Map,this.Qa=new Set,this.$a=new ie(U.comparator),this.Ua=new Map,this.Ka=new jc,this.Wa={},this.Ga=new Map,this.za=ur.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function xI(n,e,t=!0){const r=Rg(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Tg(r,e,t,!0),s}async function LI(n,e){const t=Rg(n);await Tg(t,e,!0,!1)}async function Tg(n,e,t,r){const s=await tI(n.localStore,ot(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await VI(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&ug(n.remoteStore,s),c}async function VI(n,e,t,r,s){n.Ha=(p,m,w)=>async function(N,P,V,B){let M=P.view.ba(V);M.ls&&(M=await $h(N.localStore,P.query,!1).then(({documents:E})=>P.view.ba(E,M)));const F=B&&B.targetChanges.get(P.targetId),J=B&&B.targetMismatches.get(P.targetId)!=null,ne=P.view.applyChanges(M,N.isPrimaryClient,F,J);return Xh(N,P.targetId,ne.Ma),ne.snapshot}(n,p,m,w);const i=await $h(n.localStore,e,!0),o=new CI(e,i.gs),c=o.ba(i.documents),l=Ps.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);Xh(n,t,u.Ma);const d=new OI(e,t,o);return n.ka.set(e,d),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),u.snapshot}async function MI(n,e,t){const r=z(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!po(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ya(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&zc(r.remoteStore,s.targetId),tc(r,s.targetId)}).catch(mr)):(tc(r,s.targetId),await Ya(r.localStore,s.targetId,!0))}async function UI(n,e){const t=z(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),zc(t.remoteStore,r.targetId))}async function FI(n,e,t){const r=WI(n);try{const s=await function(o,c){const l=z(o),u=he.now(),d=c.reduce((w,R)=>w.add(R.key),Q());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let R=It(),N=Q();return l.ds.getEntries(w,d).next(P=>{R=P,R.forEach((V,B)=>{B.isValidDocument()||(N=N.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,R)).next(P=>{p=P;const V=[];for(const B of c){const M=t0(B,p.get(B.key).overlayedDocument);M!=null&&V.push(new Cn(B.key,M,Sp(M.value.mapValue),vt.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,V,c)}).next(P=>{m=P;const V=P.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(w,P.batchId,V)})}).then(()=>({batchId:m.batchId,changes:Up(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Wa[o.currentUser.toKey()];u||(u=new ie(W)),u=u.insert(c,l),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,t),await Cs(r,s.changes),await To(r.remoteStore)}catch(s){const i=Qc(s,"Failed to persist write");t.reject(i)}}async function Eg(n,e){const t=z(n);try{const r=await Y0(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ua.get(i);o&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Z(o.Ba):s.removedDocuments.size>0&&(Z(o.Ba),o.Ba=!1))}),await Cs(t,r,e)}catch(r){await mr(r)}}function Jh(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,o)=>{const c=o.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=z(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const m of p.ta)m.sa(c)&&(u=!0)}),u&&Jc(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jI(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new ie(U.comparator);o=o.insert(i,ke.newNoDocument(i,q.min()));const c=Q().add(i),l=new yo(q.min(),new Map,new ie(W),o,c);await Eg(r,l),r.$a=r.$a.remove(i),r.Ua.delete(e),Yc(r)}else await Ya(r.localStore,e,!1).then(()=>tc(r,e,t)).catch(mr)}async function $I(n,e){const t=z(n),r=e.batch.batchId;try{const s=await X0(t.localStore,e);bg(t,r,null),Ig(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Cs(t,s)}catch(s){await mr(s)}}async function BI(n,e,t){const r=z(n);try{const s=await function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Z(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);bg(r,e,t),Ig(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Cs(r,s)}catch(s){await mr(s)}}function Ig(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function bg(n,e,t){const r=z(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function tc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||Ag(n,r)})}function Ag(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(zc(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),Yc(n))}function Xh(n,e,t){for(const r of t)r instanceof vg?(n.Ka.addReference(r.key,e),qI(n,r)):r instanceof wg?(x(Xc,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||Ag(n,r.key)):$()}function qI(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(x(Xc,"New document in limbo: "+t),n.Qa.add(r),Yc(n))}function Yc(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new U(se.fromString(e)),r=n.za.next();n.Ua.set(r,new NI(t)),n.$a=n.$a.insert(t,r),ug(n.remoteStore,new Bt(ot(Lc(t.path)),r,"TargetPurposeLimboResolution",uo.ae))}}async function Cs(n,e,t){const r=z(n),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{o.push(r.Ha(l,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t?.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Bc.Yi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(l,u){const d=z(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(u,m=>k.forEach(m.Hi,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>k.forEach(m.Ji,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!_r(p))throw p;x(qc,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const w=d.Ts.get(m),R=w.snapshotVersion,N=w.withLastLimboFreeSnapshotVersion(R);d.Ts=d.Ts.insert(m,N)}}}(r.localStore,i))}async function zI(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){x(Xc,"User change. New user:",e.toKey());const r=await og(t.localStore,e);t.currentUser=e,function(i,o){i.Ga.forEach(c=>{c.forEach(l=>{l.reject(new L(C.CANCELLED,o))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cs(t,r.Rs)}}function HI(n,e){const t=z(n),r=t.Ua.get(e);if(r&&r.Ba)return Q().add(r.key);{let s=Q();const i=t.qa.get(e);if(!i)return s;for(const o of i){const c=t.ka.get(o);s=s.unionWith(c.view.Sa)}return s}}function Rg(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Eg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jI.bind(null,e),e.La.p_=PI.bind(null,e.eventManager),e.La.Ja=kI.bind(null,e.eventManager),e}function WI(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$I.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BI.bind(null,e),e}class Ji{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vo(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return J0(this.persistence,new K0,e.initialUser,this.serializer)}Xa(e){return new ig($c.ri,this.serializer)}Za(e){return new rI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ji.provider={build:()=>new Ji};class KI extends Ji{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Z(this.persistence.referenceDelegate instanceof Gi);const r=this.persistence.referenceDelegate.garbageCollector;return new N0(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new ig(r=>Gi.ri(r,t),this.serializer)}}class nc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zI.bind(null,this.syncEngine),await AI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SI}()}createDatastore(e){const t=vo(e.databaseInfo.databaseId),r=function(i){return new cI(i)}(e.databaseInfo);return function(i,o,c,l){return new dI(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new pI(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Jh(this.syncEngine,t,0),function(){return zh.D()?new zh:new sI}())}createSyncEngine(e,t){return function(s,i,o,c,l,u,d){const p=new DI(s,i,o,c,l,u);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=z(s);x(In,"RemoteStore shutting down."),i.W_.add(5),await ks(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nc.provider={build:()=>new nc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Et("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="FirestoreClient";class GI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Se.UNAUTHENTICATED,this.clientId=_p.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{x(Zt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x(Zt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Qc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function da(n,e){n.asyncQueue.verifyOperationInProgress(),x(Zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await og(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Yh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QI(n);x(Zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Wh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Wh(e.remoteStore,s)),n._onlineComponents=e}async function QI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(Zt,"Using user provided OfflineComponentProvider");try{await da(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;or("Error using user provided cache. Falling back to memory cache: "+t),await da(n,new Ji)}}else x(Zt,"Using default OfflineComponentProvider"),await da(n,new KI(void 0));return n._offlineComponents}async function Pg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(Zt,"Using user provided OnlineComponentProvider"),await Yh(n,n._uninitializedComponentsProvider._online)):(x(Zt,"Using default OnlineComponentProvider"),await Yh(n,new nc))),n._onlineComponents}function JI(n){return Pg(n).then(e=>e.syncEngine)}async function kg(n){const e=await Pg(n),t=e.eventManager;return t.onListen=xI.bind(null,e.syncEngine),t.onUnlisten=MI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=LI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=UI.bind(null,e.syncEngine),t}function XI(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Sg({next:m=>{d.su(),o.enqueueAndForget(()=>_g(i,p));const w=m.docs.has(c);!w&&m.fromCache?u.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?u.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new yg(Lc(c.path),d,{includeMetadataChanges:!0,Ta:!0});return mg(i,p)}(await kg(n),n.asyncQueue,e,t,r)),r.promise}function YI(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Sg({next:m=>{d.su(),o.enqueueAndForget(()=>_g(i,p)),m.fromCache&&l.source==="server"?u.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new yg(c,d,{includeMetadataChanges:!0,Ta:!0});return mg(i,p)}(await kg(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(n,e,t){if(!t)throw new L(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ZI(n,e,t,r){if(e===!0&&r===!0)throw new L(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ed(n){if(!U.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function td(n){if(U.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Eo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$()}function bn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Eo(n);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="firestore.googleapis.com",nd=!0;class rd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ng,this.ssl=nd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:nd;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<C0)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Io{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oE;switch(r.type){case"firstParty":return new uE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Zh.get(t);r&&(x("ComponentProvider","Removing Datastore"),Zh.delete(t),r.terminate())}(this),Promise.resolve()}}function eb(n,e,t,r={}){var s;const i=(n=bn(n,Io))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i.host!==Ng&&i.host!==c&&or("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!Kt(l,o)&&(n._setSettings(l),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=Se.MOCK_USER;else{u=Ef(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new L(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Se(p)}n._authCredentials=new aE(new gp(u,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vr(this.firestore,e,this._query)}}class Ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class Wt extends vr{constructor(e,t,r){super(e,t,Lc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new U(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function tb(n,e,...t){if(n=pe(n),Og("collection","path",e),n instanceof Io){const r=se.fromString(e,...t);return td(r),new Wt(n,null,r)}{if(!(n instanceof Ve||n instanceof Wt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return td(r),new Wt(n.firestore,null,r)}}function fa(n,e,...t){if(n=pe(n),arguments.length===1&&(e=_p.newId()),Og("doc","path",e),n instanceof Io){const r=se.fromString(e,...t);return ed(r),new Ve(n,null,new U(r))}{if(!(n instanceof Ve||n instanceof Wt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return ed(r),new Ve(n.firestore,n instanceof Wt?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="AsyncQueue";class id{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new cg(this,"async_queue_retry"),this.Su=()=>{const r=ha();r&&x(sd,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=ha();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=ha();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new yt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!_r(e))throw e;x(sd,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Et("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=Gc.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&$()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class bo extends Io{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new id,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new id(e),this._firestoreClient=void 0,await e}}}function nb(n,e){const t=typeof n=="object"?n:Ts(),r=typeof n=="string"?n:Bi,s=bt(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vf("firestore");i&&eb(s,...i)}return s}function Zc(n){if(n._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rb(n),n._firestoreClient}function rb(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,u,d){return new AE(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Cg(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new GI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dr(Te.fromBase64String(e))}catch(t){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dr(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=/^__.*__$/;class ib{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ss(e,this.data,t,this.fieldTransforms)}}function Dg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class sl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new sl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Xi(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Dg(this.Lu)&&sb.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class ob{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||vo(e)}ju(e,t,r,s=!1){return new sl({Lu:e,methodName:t,zu:r,path:we.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xg(n){const e=n._freezeSettings(),t=vo(n._databaseId);return new ob(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ab(n,e,t,r,s,i={}){const o=n.ju(i.merge||i.mergeFields?2:0,e,t,s);Mg("Data must be an object, but it was:",o,r);const c=Lg(r,o);let l,u;if(i.merge)l=new Ye(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=lb(e,p,t);if(!o.contains(m))throw new L(C.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hb(d,m)||d.push(m)}l=new Ye(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new ib(new ze(c),l,u)}class il extends tl{_toFieldTransform(e){return new XE(e.path,new ps)}isEqual(e){return e instanceof il}}function cb(n,e,t,r=!1){return ol(t,n.ju(r?4:3,e))}function ol(n,e){if(Vg(n=pe(n)))return Mg("Unsupported field value:",e,n),Lg(n,e);if(n instanceof tl)return function(r,s){if(!Dg(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ol(c,s.Ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=he.fromDate(r);return{timestampValue:Ki(s.serializer,i)}}if(r instanceof he){const i=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ki(s.serializer,i)}}if(r instanceof nl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dr)return{bytesValue:Xp(s.serializer,r._byteString)};if(r instanceof Ve){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof rl)return function(o,c){return{mapValue:{fields:{[Ap]:{stringValue:Rp},[qi]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Wu("VectorValues must only contain numeric values.");return Vc(c.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Eo(r)}`)}(n,e)}function Lg(n,e){const t={};return vp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pn(n,(r,s)=>{const i=ol(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Vg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof nl||n instanceof dr||n instanceof Ve||n instanceof tl||n instanceof rl)}function Mg(n,e,t){if(!Vg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Eo(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function lb(n,e,t){if((e=pe(e))instanceof el)return e._internalPath;if(typeof e=="string")return Ug(n,e);throw Xi("Field path arguments must be of type string or ",n,!1,void 0,t)}const ub=new RegExp("[~\\*/\\[\\]]");function Ug(n,e,t){if(e.search(ub)>=0)throw Xi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new el(...e.split("."))._internalPath}catch{throw Xi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xi(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new L(C.INVALID_ARGUMENT,c+n+l)}function hb(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new db(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(al("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class db extends Fg{data(){return super.data()}}function al(n,e){return typeof e=="string"?Ug(n,e):e instanceof el?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cl{}class pb extends cl{}function gb(n,e,...t){let r=[];e instanceof cl&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof ll).length,c=i.filter(l=>l instanceof Ao).length;if(o>1||o>0&&c>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ao extends pb{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ao(e,t,r)}_apply(e){const t=this._parse(e);return jg(e._query,t),new vr(e.firestore,e.converter,Wa(e._query,t))}_parse(e){const t=xg(e.firestore);return function(i,o,c,l,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ad(p,d);const R=[];for(const N of p)R.push(od(l,i,N));m={arrayValue:{values:R}}}else m=od(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ad(p,d),m=cb(c,o,p,d==="in"||d==="not-in");return le.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function mb(n,e,t){const r=e,s=al("where",n);return Ao._create(s,r,t)}class ll extends cl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ll(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)jg(o,l),o=Wa(o,l)}(e._query,t),new vr(e.firestore,e.converter,Wa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function od(n,e,t){if(typeof(t=pe(t))=="string"){if(t==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xp(e)&&t.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(se.fromString(t));if(!U.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Eh(n,new U(r))}if(t instanceof Ve)return Eh(n,t._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Eo(t)}.`)}function ad(n,e){if(!Array.isArray(n)||n.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jg(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class _b{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Pn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[qi].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ae(o.doubleValue));return new rl(i)}convertGeoPoint(e){return new nl(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=fo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hs(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);Z(rg(r));const s=new ds(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||Et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $g extends Fg{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(al("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Pi extends $g{data(e={}){return super.data(e)}}class vb{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Kr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Pi(this._firestore,this._userDataWriter,r.key,r,new Kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Pi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Pi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:wb(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(n){n=bn(n,Ve);const e=bn(n.firestore,bo);return XI(Zc(e),n._key).then(t=>bb(e,n,t))}class Bg extends _b{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,t)}}function Eb(n){n=bn(n,vr);const e=bn(n.firestore,bo),t=Zc(e),r=new Bg(e);return fb(n._query),YI(t,n._query).then(s=>new vb(e,r,n,s))}function cd(n,e,t){n=bn(n,Ve);const r=bn(n.firestore,bo),s=yb(n.converter,e);return Ib(r,[ab(xg(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,vt.none())])}function Ib(n,e){return function(r,s){const i=new yt;return r.asyncQueue.enqueueAndForget(async()=>FI(await JI(r),s,i)),i.promise}(Zc(n),e)}function bb(n,e,t){const r=t.docs.get(e._key),s=new Bg(n);return new $g(n,s,e._key,r,new Kr(t.hasPendingWrites,t.fromCache),e.converter)}function ld(){return new il("serverTimestamp")}(function(e,t=!0){(function(s){gr=s})(Sn),He(new qe("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new bo(new cE(r.getProvider("auth-internal")),new hE(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ds(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ce(uh,hh,e),Ce(uh,hh,"esm2017")})();var Ab="firebase",Rb="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce(Ab,Rb,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="firebasestorage.googleapis.com",Sb="storageBucket",Pb=2*60*1e3,kb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on=class zg extends We{constructor(e,t,r=0){super(pa(e),`Firebase Storage: ${t} (${pa(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zg.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}};var ut;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ut||(ut={}));function pa(n){return"storage/"+n}function Cb(){const n="An unknown error occurred, please check the error payload for server response.";return new on(ut.UNKNOWN,n)}function Ob(){return new on(ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Nb(){return new on(ut.CANCELED,"User canceled the upload/download.")}function Db(n){return new on(ut.INVALID_URL,"Invalid URL '"+n+"'.")}function xb(n){return new on(ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ud(n){return new on(ut.INVALID_ARGUMENT,n)}function Hg(){return new on(ut.APP_DELETED,"The Firebase app was deleted.")}function Lb(n){return new on(ut.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ze.makeFromUrl(e,t)}catch{return new Ze(e,"")}if(r.path==="")return r;throw xb(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(F){F.path_=decodeURIComponent(F.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),R={bucket:1,path:3},N=t===qg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",V=new RegExp(`^https?://${N}/${s}/${P}`,"i"),M=[{regex:c,indices:l,postModify:i},{regex:w,indices:R,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let F=0;F<M.length;F++){const J=M[F],ne=J.regex.exec(e);if(ne){const E=ne[J.indices.bucket];let _=ne[J.indices.path];_||(_=""),r=new Ze(E,_),J.postModify(r);break}}if(r==null)throw Db(e);return r}}class Vb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function d(...P){u||(u=!0,e.apply(null,P))}function p(P){s=setTimeout(()=>{s=null,n(w,l())},P)}function m(){i&&clearTimeout(i)}function w(P,...V){if(u){m();return}if(P){m(),d.call(null,P,...V);return}if(l()||o){m(),d.call(null,P,...V);return}r<64&&(r*=2);let M;c===1?(c=2,M=0):M=(r+Math.random())*1e3,p(M)}let R=!1;function N(P){R||(R=!0,m(),!u&&(s!==null?(P||(c=2),clearTimeout(s),p(0)):P||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},t),N}function Ub(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(n){return n!==void 0}function hd(n,e,t,r){if(r<e)throw ud(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ud(`Invalid value for '${n}'. Expected ${t} or less.`)}function jb(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Yi;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Yi||(Yi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,t,r,s,i,o,c,l,u,d,p,m=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,R)=>{this.resolve_=w,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new oi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Yi.NO_ERROR,l=i.getStatus();if(!c||$b(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Yi.ABORT;r(!1,new oi(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new oi(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Fb(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Cb();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Hg():Nb();o(l)}else{const l=Ob();o(l)}};this.canceled_?t(!1,new oi(!1,null,!0)):this.backoffId_=Mb(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ub(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function qb(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function zb(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Hb(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Wb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Kb(n,e,t,r,s,i,o=!0){const c=jb(n.urlParams),l=n.url+c,u=Object.assign({},n.headers);return Hb(u,e),qb(u,t),zb(u,i),Wb(u,r),new Bb(l,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Qb(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this._service=e,t instanceof Ze?this._location=t:this._location=Ze.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Zi(e,t)}get root(){const e=new Ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qb(this._location.path)}get storage(){return this._service}get parent(){const e=Gb(this._location.path);if(e===null)return null;const t=new Ze(this._location.bucket,e);return new Zi(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Lb(e)}}function dd(n,e){const t=e?.[Sb];return t==null?null:Ze.makeFromBucketSpec(t,n)}function Jb(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Ef(s,n.app.options.projectId))}class Xb{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=qg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Pb,this._maxUploadRetryTime=kb,this._requests=new Set,s!=null?this._bucket=Ze.makeFromBucketSpec(s,this._host):this._bucket=dd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ze.makeFromBucketSpec(this._url,e):this._bucket=dd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zi(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Vb(Hg());{const o=Kb(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const fd="@firebase/storage",pd="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="storage";function Yb(n=Ts(),e){n=pe(n);const r=bt(n,Wg).getImmediate({identifier:e}),s=vf("storage");return s&&Zb(r,...s),r}function Zb(n,e,t,r={}){Jb(n,e,t,r)}function eA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Xb(t,r,s,e,Sn)}function tA(){He(new qe(Wg,eA,"PUBLIC").setMultipleInstances(!0)),Ce(fd,pd,""),Ce(fd,pd,"esm2017")}tA();var rc,gd,Ro=function(){var n=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(n&&n.responseStart>0&&n.responseStart<performance.now())return n},Kg=function(n){if(document.readyState==="loading")return"loading";var e=Ro();if(e){if(n<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||n<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||n<e.domComplete)return"dom-content-loaded"}return"complete"},nA=function(n){var e=n.nodeName;return n.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},ul=function(n,e){var t="";try{for(;n&&n.nodeType!==9;){var r=n,s=r.id?"#"+r.id:nA(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(t.length+s.length>(e||100)-1)return t||s;if(t=t?s+">"+t:s,r.id)break;n=r.parentNode}}catch{}return t},Gg=-1,rA=function(){return Gg},Os=function(n){addEventListener("pageshow",function(e){e.persisted&&(Gg=e.timeStamp,n(e))},!0)},hl=function(){var n=Ro();return n&&n.activationStart||0},en=function(n,e){var t=Ro(),r="navigate";return rA()>=0?r="back-forward-cache":t&&(document.prerendering||hl()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:n,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},wr=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver(function(s){Promise.resolve().then(function(){e(s.getEntries())})});return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch{}},tn=function(n,e,t,r){var s,i;return function(o){e.value>=0&&(o||r)&&((i=e.value-(s||0))||s===void 0)&&(s=e.value,e.delta=i,e.rating=function(c,l){return c>l[1]?"poor":c>l[0]?"needs-improvement":"good"}(e.value,t),n(e))}},dl=function(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})},So=function(n){document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&n()})},fl=function(n){var e=!1;return function(){e||(n(),e=!0)}},Yn=-1,md=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},eo=function(n){document.visibilityState==="hidden"&&Yn>-1&&(Yn=n.type==="visibilitychange"?n.timeStamp:0,sA())},_d=function(){addEventListener("visibilitychange",eo,!0),addEventListener("prerenderingchange",eo,!0)},sA=function(){removeEventListener("visibilitychange",eo,!0),removeEventListener("prerenderingchange",eo,!0)},Qg=function(){return Yn<0&&(Yn=md(),_d(),Os(function(){setTimeout(function(){Yn=md(),_d()},0)})),{get firstHiddenTime(){return Yn}}},pl=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},yd=[1800,3e3],iA=function(n,e){e=e||{},pl(function(){var t,r=Qg(),s=en("FCP"),i=wr("paint",function(o){o.forEach(function(c){c.name==="first-contentful-paint"&&(i.disconnect(),c.startTime<r.firstHiddenTime&&(s.value=Math.max(c.startTime-hl(),0),s.entries.push(c),t(!0)))})});i&&(t=tn(n,s,yd,e.reportAllChanges),Os(function(o){s=en("FCP"),t=tn(n,s,yd,e.reportAllChanges),dl(function(){s.value=performance.now()-o.timeStamp,t(!0)})}))})},vd=[.1,.25],oA=function(n,e){(function(t,r){r=r||{},iA(fl(function(){var s,i=en("CLS",0),o=0,c=[],l=function(d){d.forEach(function(p){if(!p.hadRecentInput){var m=c[0],w=c[c.length-1];o&&p.startTime-w.startTime<1e3&&p.startTime-m.startTime<5e3?(o+=p.value,c.push(p)):(o=p.value,c=[p])}}),o>i.value&&(i.value=o,i.entries=c,s())},u=wr("layout-shift",l);u&&(s=tn(t,i,vd,r.reportAllChanges),So(function(){l(u.takeRecords()),s(!0)}),Os(function(){o=0,i=en("CLS",0),s=tn(t,i,vd,r.reportAllChanges),dl(function(){return s()})}),setTimeout(s,0))}))})(function(t){var r=function(s){var i,o={};if(s.entries.length){var c=s.entries.reduce(function(u,d){return u&&u.value>d.value?u:d});if(c&&c.sources&&c.sources.length){var l=(i=c.sources).find(function(u){return u.node&&u.node.nodeType===1})||i[0];l&&(o={largestShiftTarget:ul(l.node),largestShiftTime:c.startTime,largestShiftValue:c.value,largestShiftSource:l,largestShiftEntry:c,loadState:Kg(c.startTime)})}}return Object.assign(s,{attribution:o})}(t);n(r)},e)},Jg=0,ga=1/0,ai=0,aA=function(n){n.forEach(function(e){e.interactionId&&(ga=Math.min(ga,e.interactionId),ai=Math.max(ai,e.interactionId),Jg=ai?(ai-ga)/7+1:0)})},Xg=function(){return rc?Jg:performance.interactionCount||0},cA=function(){"interactionCount"in performance||rc||(rc=wr("event",aA,{type:"event",buffered:!0,durationThreshold:0}))},Qe=[],es=new Map,Yg=0,lA=function(){var n=Math.min(Qe.length-1,Math.floor((Xg()-Yg)/50));return Qe[n]},Zg=[],uA=function(n){if(Zg.forEach(function(s){return s(n)}),n.interactionId||n.entryType==="first-input"){var e=Qe[Qe.length-1],t=es.get(n.interactionId);if(t||Qe.length<10||n.duration>e.latency){if(t)n.duration>t.latency?(t.entries=[n],t.latency=n.duration):n.duration===t.latency&&n.startTime===t.entries[0].startTime&&t.entries.push(n);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};es.set(r.id,r),Qe.push(r)}Qe.sort(function(s,i){return i.latency-s.latency}),Qe.length>10&&Qe.splice(10).forEach(function(s){return es.delete(s.id)})}}},gl=function(n){var e=self.requestIdleCallback||self.setTimeout,t=-1;return n=fl(n),document.visibilityState==="hidden"?n():(t=e(n),So(n)),t},wd=[200,500],hA=function(n,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},pl(function(){var t;cA();var r,s=en("INP"),i=function(c){gl(function(){c.forEach(uA);var l=lA();l&&l.latency!==s.value&&(s.value=l.latency,s.entries=l.entries,r())})},o=wr("event",i,{durationThreshold:(t=e.durationThreshold)!==null&&t!==void 0?t:40});r=tn(n,s,wd,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),So(function(){i(o.takeRecords()),r(!0)}),Os(function(){Yg=Xg(),Qe.length=0,es.clear(),s=en("INP"),r=tn(n,s,wd,e.reportAllChanges)}))}))},rr=[],jt=[],sc=0,ml=new WeakMap,sr=new Map,ic=-1,dA=function(n){rr=rr.concat(n),em()},em=function(){ic<0&&(ic=gl(fA))},fA=function(){sr.size>10&&sr.forEach(function(o,c){es.has(c)||sr.delete(c)});var n=Qe.map(function(o){return ml.get(o.entries[0])}),e=jt.length-50;jt=jt.filter(function(o,c){return c>=e||n.includes(o)});for(var t=new Set,r=0;r<jt.length;r++){var s=jt[r];tm(s.startTime,s.processingEnd).forEach(function(o){t.add(o)})}var i=rr.length-1-50;rr=rr.filter(function(o,c){return o.startTime>sc&&c>i||t.has(o)}),ic=-1};Zg.push(function(n){n.interactionId&&n.target&&!sr.has(n.interactionId)&&sr.set(n.interactionId,n.target)},function(n){var e,t=n.startTime+n.duration;sc=Math.max(sc,n.processingEnd);for(var r=jt.length-1;r>=0;r--){var s=jt[r];if(Math.abs(t-s.renderTime)<=8){(e=s).startTime=Math.min(n.startTime,e.startTime),e.processingStart=Math.min(n.processingStart,e.processingStart),e.processingEnd=Math.max(n.processingEnd,e.processingEnd),e.entries.push(n);break}}e||(e={startTime:n.startTime,processingStart:n.processingStart,processingEnd:n.processingEnd,renderTime:t,entries:[n]},jt.push(e)),(n.interactionId||n.entryType==="first-input")&&ml.set(n,e),em()});var tm=function(n,e){for(var t,r=[],s=0;t=rr[s];s++)if(!(t.startTime+t.duration<n)){if(t.startTime>e)break;r.push(t)}return r},pA=function(n,e){gd||(gd=wr("long-animation-frame",dA)),hA(function(t){var r=function(s){var i=s.entries[0],o=ml.get(i),c=i.processingStart,l=o.processingEnd,u=o.entries.sort(function(P,V){return P.processingStart-V.processingStart}),d=tm(i.startTime,l),p=s.entries.find(function(P){return P.target}),m=p&&p.target||sr.get(i.interactionId),w=[i.startTime+i.duration,l].concat(d.map(function(P){return P.startTime+P.duration})),R=Math.max.apply(Math,w),N={interactionTarget:ul(m),interactionTargetElement:m,interactionType:i.name.startsWith("key")?"keyboard":"pointer",interactionTime:i.startTime,nextPaintTime:R,processedEventEntries:u,longAnimationFrameEntries:d,inputDelay:c-i.startTime,processingDuration:l-c,presentationDelay:Math.max(R-l,0),loadState:Kg(i.startTime)};return Object.assign(s,{attribution:N})}(t);n(r)},e)},Td=[2500,4e3],ma={},gA=function(n,e){(function(t,r){r=r||{},pl(function(){var s,i=Qg(),o=en("LCP"),c=function(d){r.reportAllChanges||(d=d.slice(-1)),d.forEach(function(p){p.startTime<i.firstHiddenTime&&(o.value=Math.max(p.startTime-hl(),0),o.entries=[p],s())})},l=wr("largest-contentful-paint",c);if(l){s=tn(t,o,Td,r.reportAllChanges);var u=fl(function(){ma[o.id]||(c(l.takeRecords()),l.disconnect(),ma[o.id]=!0,s(!0))});["keydown","click"].forEach(function(d){addEventListener(d,function(){return gl(u)},{once:!0,capture:!0})}),So(u),Os(function(d){o=en("LCP"),s=tn(t,o,Td,r.reportAllChanges),dl(function(){o.value=performance.now()-d.timeStamp,ma[o.id]=!0,s(!0)})})}})})(function(t){var r=function(s){var i={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:s.value};if(s.entries.length){var o=Ro();if(o){var c=o.activationStart||0,l=s.entries[s.entries.length-1],u=l.url&&performance.getEntriesByType("resource").filter(function(R){return R.name===l.url})[0],d=Math.max(0,o.responseStart-c),p=Math.max(d,u?(u.requestStart||u.startTime)-c:0),m=Math.max(p,u?u.responseEnd-c:0),w=Math.max(m,l.startTime-c);i={element:ul(l.element),timeToFirstByte:d,resourceLoadDelay:p-d,resourceLoadDuration:m-p,elementRenderDelay:w-m,navigationEntry:o,lcpEntry:l},l.url&&(i.url=l.url),u&&(i.lcpResourceEntry=u)}}return Object.assign(s,{attribution:i})}(t);n(r)},e)};const nm="@firebase/installations",_l="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=1e4,sm=`w:${_l}`,im="FIS_v2",mA="https://firebaseinstallations.googleapis.com/v1",_A=60*60*1e3,yA="installations",vA="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},An=new rn(yA,vA,wA);function om(n){return n instanceof We&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am({projectId:n}){return`${mA}/projects/${n}/installations`}function cm(n){return{token:n.token,requestStatus:2,expiresIn:EA(n.expiresIn),creationTime:Date.now()}}async function lm(n,e){const r=(await e.json()).error;return An.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function um({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function TA(n,{refreshToken:e}){const t=um(n);return t.append("Authorization",IA(e)),t}async function hm(n){const e=await n();return e.status>=500&&e.status<600?n():e}function EA(n){return Number(n.replace("s","000"))}function IA(n){return`${im} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=am(n),s=um(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:im,appId:n.appId,sdkVersion:sm},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await hm(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:cm(u.authToken)}}else throw await lm("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=/^[cdef][\w-]{21}$/,oc="";function SA(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=PA(n);return RA.test(t)?t:oc}catch{return oc}}function PA(n){return AA(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new Map;function pm(n,e){const t=Po(n);gm(t,e),kA(t,e)}function gm(n,e){const t=fm.get(n);if(t)for(const r of t)r(e)}function kA(n,e){const t=CA();t&&t.postMessage({key:n,fid:e}),OA()}let _n=null;function CA(){return!_n&&"BroadcastChannel"in self&&(_n=new BroadcastChannel("[Firebase] FID Change"),_n.onmessage=n=>{gm(n.data.key,n.data.fid)}),_n}function OA(){fm.size===0&&_n&&(_n.close(),_n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="firebase-installations-database",DA=1,Rn="firebase-installations-store";let _a=null;function yl(){return _a||(_a=Af(NA,DA,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rn)}}})),_a}async function to(n,e){const t=Po(n),s=(await yl()).transaction(Rn,"readwrite"),i=s.objectStore(Rn),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&pm(n,e.fid),e}async function mm(n){const e=Po(n),r=(await yl()).transaction(Rn,"readwrite");await r.objectStore(Rn).delete(e),await r.done}async function ko(n,e){const t=Po(n),s=(await yl()).transaction(Rn,"readwrite"),i=s.objectStore(Rn),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&pm(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(n){let e;const t=await ko(n.appConfig,r=>{const s=xA(r),i=LA(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===oc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function xA(n){const e=n||{fid:SA(),registrationStatus:0};return _m(e)}function LA(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(An.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=VA(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MA(n)}:{installationEntry:e}}async function VA(n,e){try{const t=await bA(n,e);return to(n.appConfig,t)}catch(t){throw om(t)&&t.customData.serverCode===409?await mm(n.appConfig):await to(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function MA(n){let e=await Ed(n.appConfig);for(;e.registrationStatus===1;)await dm(100),e=await Ed(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await vl(n);return r||t}return e}function Ed(n){return ko(n,e=>{if(!e)throw An.create("installation-not-found");return _m(e)})}function _m(n){return UA(n)?{fid:n.fid,registrationStatus:0}:n}function UA(n){return n.registrationStatus===1&&n.registrationTime+rm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA({appConfig:n,heartbeatServiceProvider:e},t){const r=jA(n,t),s=TA(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:sm,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await hm(()=>fetch(r,c));if(l.ok){const u=await l.json();return cm(u)}else throw await lm("Generate Auth Token",l)}function jA(n,{fid:e}){return`${am(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(n,e=!1){let t;const r=await ko(n.appConfig,i=>{if(!ym(i))throw An.create("not-registered");const o=i.authToken;if(!e&&qA(o))return i;if(o.requestStatus===1)return t=$A(n,e),i;{if(!navigator.onLine)throw An.create("app-offline");const c=HA(i);return t=BA(n,c),c}});return t?await t:r.authToken}async function $A(n,e){let t=await Id(n.appConfig);for(;t.authToken.requestStatus===1;)await dm(100),t=await Id(n.appConfig);const r=t.authToken;return r.requestStatus===0?wl(n,e):r}function Id(n){return ko(n,e=>{if(!ym(e))throw An.create("not-registered");const t=e.authToken;return WA(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function BA(n,e){try{const t=await FA(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await to(n.appConfig,r),t}catch(t){if(om(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await mm(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await to(n.appConfig,r)}throw t}}function ym(n){return n!==void 0&&n.registrationStatus===2}function qA(n){return n.requestStatus===2&&!zA(n)}function zA(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+_A}function HA(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function WA(n){return n.requestStatus===1&&n.requestTime+rm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KA(n){const e=n,{installationEntry:t,registrationPromise:r}=await vl(e);return r?r.catch(console.error):wl(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(n,e=!1){const t=n;return await QA(t),(await wl(t,e)).token}async function QA(n){const{registrationPromise:e}=await vl(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(n){if(!n||!n.options)throw ya("App Configuration");if(!n.name)throw ya("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ya(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ya(n){return An.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="installations",XA="installations-internal",YA=n=>{const e=n.getProvider("app").getImmediate(),t=JA(e),r=bt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ZA=n=>{const e=n.getProvider("app").getImmediate(),t=bt(e,vm).getImmediate();return{getId:()=>KA(t),getToken:s=>GA(t,s)}};function eR(){He(new qe(vm,YA,"PUBLIC")),He(new qe(XA,ZA,"PRIVATE"))}eR();Ce(nm,_l);Ce(nm,_l,"esm2017");const bd="@firebase/performance",ac="0.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=ac,tR="FB-PERF-TRACE-START",nR="FB-PERF-TRACE-STOP",cc="FB-PERF-TRACE-MEASURE",Tm="_wt_",Em="_fp",Im="_fcp",bm="_fid",Am="_lcp",rR="lcp_element",Rm="_inp",sR="inp_interactionTarget",Sm="_cls",iR="cls_largestShiftTarget",Pm="@firebase/performance/config",km="@firebase/performance/configexpire",oR="performance",Cm="Performance";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},Pe=new rn(oR,Cm,aR);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new ws(Cm);nn.logLevel=K.INFO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va,Om;class fe{constructor(e){if(this.window=e,!e)throw Pe.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay),this.onLCP=gA,this.onINP=pA,this.onCLS=oA}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,t,r){!this.performance||!this.performance.measure||this.performance.measure(e,t,r)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!yc()?(nn.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):io()?!0:(nn.info("IndexedDB is not supported by current browser"),!1)}setupObserver(e,t){if(!this.PerformanceObserver)return;new this.PerformanceObserver(s=>{for(const i of s.getEntries())t(i)}).observe({entryTypes:[e]})}static getInstance(){return va===void 0&&(va=new fe(Om)),va}}function cR(n){Om=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nm;function lR(n){const e=n.getId();return e.then(t=>{Nm=t}),e}function Tl(){return Nm}function uR(n){const e=n.getToken();return e.then(t=>{}),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(n,e){const t=n.length-e.length;if(t<0||t>1)throw Pe.create("invalid String merger input");const r=[];for(let s=0;s<n.length;s++)r.push(n.charAt(s)),e.length>s&&r.push(e.charAt(s));return r.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa;class $e{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Ad("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Ad("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return wa===void 0&&(wa=new $e),wa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ts;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.VISIBLE=1]="VISIBLE",n[n.HIDDEN=2]="HIDDEN"})(ts||(ts={}));const hR=["firebase_","google_","ga_"],dR=new RegExp("^[a-zA-Z]\\w*$"),fR=40,pR=100;function gR(){const n=fe.getInstance().navigator;return n?.serviceWorker?n.serviceWorker.controller?2:3:1}function mR(){switch(fe.getInstance().document.visibilityState){case"visible":return ts.VISIBLE;case"hidden":return ts.HIDDEN;default:return ts.UNKNOWN}}function _R(){const e=fe.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function yR(n){return n.length===0||n.length>fR?!1:!hR.some(t=>n.startsWith(t))&&!!n.match(dR)}function vR(n){return n.length!==0&&n.length<=pR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){var e;const t=(e=n.options)===null||e===void 0?void 0:e.appId;if(!t)throw Pe.create("no app id");return t}function wR(n){var e;const t=(e=n.options)===null||e===void 0?void 0:e.projectId;if(!t)throw Pe.create("no project id");return t}function TR(n){var e;const t=(e=n.options)===null||e===void 0?void 0:e.apiKey;if(!t)throw Pe.create("no api key");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="0.0.1",Ge={loggingEnabled:!0},IR="FIREBASE_INSTALLATIONS_AUTH";function bR(n,e){const t=AR();return t?(Rd(t),Promise.resolve()):PR(n,e).then(Rd).then(r=>RR(r),()=>{})}function AR(){const n=fe.getInstance().localStorage;if(!n)return;const e=n.getItem(km);if(!e||!kR(e))return;const t=n.getItem(Pm);if(t)try{return JSON.parse(t)}catch{return}}function RR(n){const e=fe.getInstance().localStorage;!n||!e||(e.setItem(Pm,JSON.stringify(n)),e.setItem(km,String(Date.now()+$e.getInstance().configTimeToLive*60*60*1e3)))}const SR="Could not fetch config, will use default configs";function PR(n,e){return uR(n.installations).then(t=>{const r=wR(n.app),s=TR(n.app),i=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${s}`,o=new Request(i,{method:"POST",headers:{Authorization:`${IR} ${t}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:t,app_id:Dm(n.app),app_version:wm,sdk_version:ER})});return fetch(o).then(c=>{if(c.ok)return c.json();throw Pe.create("RC response not ok")})}).catch(()=>{nn.info(SR)})}function Rd(n){if(!n)return n;const e=$e.getInstance(),t=n.entries||{};return t.fpr_enabled!==void 0?e.loggingEnabled=String(t.fpr_enabled)==="true":e.loggingEnabled=Ge.loggingEnabled,t.fpr_log_source?e.logSource=Number(t.fpr_log_source):Ge.logSource&&(e.logSource=Ge.logSource),t.fpr_log_endpoint_url?e.logEndPointUrl=t.fpr_log_endpoint_url:Ge.logEndPointUrl&&(e.logEndPointUrl=Ge.logEndPointUrl),t.fpr_log_transport_key?e.transportKey=t.fpr_log_transport_key:Ge.transportKey&&(e.transportKey=Ge.transportKey),t.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(t.fpr_vc_network_request_sampling_rate):Ge.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=Ge.networkRequestsSamplingRate),t.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(t.fpr_vc_trace_sampling_rate):Ge.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=Ge.tracesSamplingRate),e.logTraceAfterSampling=Sd(e.tracesSamplingRate),e.logNetworkAfterSampling=Sd(e.networkRequestsSamplingRate),n}function kR(n){return Number(n)>Date.now()}function Sd(n){return Math.random()<=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El=1,Ta;function xm(n){return El=2,Ta=Ta||OR(n),Ta}function CR(){return El===3}function OR(n){return NR().then(()=>lR(n.installations)).then(e=>bR(n,e)).then(()=>Pd(),()=>Pd())}function NR(){const n=fe.getInstance().document;return new Promise(e=>{if(n&&n.readyState!=="complete"){const t=()=>{n.readyState==="complete"&&(n.removeEventListener("readystatechange",t),e())};n.addEventListener("readystatechange",t)}else e()})}function Pd(){El=3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=10*1e3,DR=5.5*1e3,xR=1e3,Vm=3;let ki=Vm,vn=[],kd=!1;function LR(){kd||(Il(DR),kd=!0)}function Il(n){setTimeout(()=>{ki<=0||(vn.length>0&&Mm(),Il(Lm))},n)}function Mm(){const n=vn.splice(0,xR),e=n.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),t={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:$e.getInstance().logSource,log_event:e};VR(t).then(()=>{ki=Vm}).catch(()=>{vn=[...n,...vn],ki--,nn.info(`Tries left: ${ki}.`),Il(Lm)})}function VR(n){const e=$e.getInstance().getFlTransportFullUrl(),t=JSON.stringify(n);return navigator.sendBeacon&&navigator.sendBeacon(e,t)?Promise.resolve():fetch(e,{method:"POST",body:t,keepalive:!0}).then()}function MR(n){if(!n.eventTime||!n.message)throw Pe.create("invalid cc log");vn=[...vn,n]}function UR(n){return(...e)=>{const t=n(...e);MR({message:t,eventTime:Date.now()})}}function FR(){for(;vn.length>0;)Mm()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns;function Um(n,e){ns||(ns={send:UR(BR),flush:FR}),ns.send(n,e)}function ci(n){const e=$e.getInstance();!e.instrumentationEnabled&&n.isAuto||!e.dataCollectionEnabled&&!n.isAuto||fe.getInstance().requiredApisAvailable()&&(CR()?Ea(n):xm(n.performanceController).then(()=>Ea(n),()=>Ea(n)))}function jR(){ns&&ns.flush()}function Ea(n){if(!Tl())return;const e=$e.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||Um(n,1)}function $R(n){const e=$e.getInstance();if(!e.instrumentationEnabled)return;const t=n.url,r=e.logEndPointUrl.split("?")[0],s=e.flTransportEndpointUrl.split("?")[0];t===r||t===s||!e.loggingEnabled||!e.logNetworkAfterSampling||Um(n,0)}function BR(n,e){return e===0?qR(n):zR(n)}function qR(n){const e={url:n.url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},t={application_info:Fm(n.performanceController.app),network_request_metric:e};return JSON.stringify(t)}function zR(n){const e={name:n.name,is_auto:n.isAuto,client_start_time_us:n.startTimeUs,duration_us:n.durationUs};Object.keys(n.counters).length!==0&&(e.counters=n.counters);const t=n.getAttributes();Object.keys(t).length!==0&&(e.custom_attributes=t);const r={application_info:Fm(n.performanceController.app),trace_metric:e};return JSON.stringify(r)}function Fm(n){return{google_app_id:Dm(n),app_instance_id:Tl(),web_app_info:{sdk_version:wm,page_url:fe.getInstance().getUrl(),service_worker_status:gR(),visibility_state:mR(),effective_connection_type:_R()},application_process_state:0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n,e){const t=e;if(!t||t.responseStart===void 0)return;const r=fe.getInstance().getTimeOrigin(),s=Math.floor((t.startTime+r)*1e3),i=t.responseStart?Math.floor((t.responseStart-t.startTime)*1e3):void 0,o=Math.floor((t.responseEnd-t.startTime)*1e3),c=t.name&&t.name.split("?")[0],l={performanceController:n,url:c,responsePayloadBytes:t.transferSize,startTimeUs:s,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o};$R(l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=100,WR="_",KR=[Em,Im,bm,Am,Sm,Rm];function GR(n,e){return n.length===0||n.length>HR?!1:e&&e.startsWith(Tm)&&KR.indexOf(n)>-1||!n.startsWith(WR)}function QR(n){const e=Math.floor(n);return e<n&&nn.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t,r=!1,s){this.performanceController=e,this.name=t,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=fe.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${tR}-${this.randomId}-${this.name}`,this.traceStopMark=`${nR}-${this.randomId}-${this.name}`,this.traceMeasure=s||`${cc}-${this.randomId}-${this.name}`,s&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw Pe.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw Pe.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),ci(this)}record(e,t,r){if(e<=0)throw Pe.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw Pe.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(t*1e3),this.startTimeUs=Math.floor(e*1e3),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(const s of Object.keys(r.metrics))isNaN(Number(r.metrics[s]))||(this.counters[s]=Math.floor(Number(r.metrics[s])));ci(this)}incrementMetric(e,t=1){this.counters[e]===void 0?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){if(GR(e,this.name))this.counters[e]=QR(t??0);else throw Pe.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const r=yR(e),s=vR(t);if(r&&s){this.customAttributes[e]=t;return}if(!r)throw Pe.create("invalid attribute name",{attributeName:e});if(!s)throw Pe.create("invalid attribute value",{attributeValue:t})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(t.duration*1e3),this.startTimeUs=Math.floor((t.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,t,r,s,i){const o=fe.getInstance().getUrl();if(!o)return;const c=new _s(e,Tm+o,!0),l=Math.floor(fe.getInstance().getTimeOrigin()*1e3);c.setStartTime(l),t&&t[0]&&(c.setDuration(Math.floor(t[0].duration*1e3)),c.putMetric("domInteractive",Math.floor(t[0].domInteractive*1e3)),c.putMetric("domContentLoadedEventEnd",Math.floor(t[0].domContentLoadedEventEnd*1e3)),c.putMetric("loadEventEnd",Math.floor(t[0].loadEventEnd*1e3)));const u="first-paint",d="first-contentful-paint";if(r){const p=r.find(w=>w.name===u);p&&p.startTime&&c.putMetric(Em,Math.floor(p.startTime*1e3));const m=r.find(w=>w.name===d);m&&m.startTime&&c.putMetric(Im,Math.floor(m.startTime*1e3)),i&&c.putMetric(bm,Math.floor(i*1e3))}this.addWebVitalMetric(c,Am,rR,s.lcp),this.addWebVitalMetric(c,Sm,iR,s.cls),this.addWebVitalMetric(c,Rm,sR,s.inp),ci(c),jR()}static addWebVitalMetric(e,t,r,s){s&&(e.putMetric(t,Math.floor(s.value*1e3)),s.elementAttribution&&e.putAttribute(r,s.elementAttribution))}static createUserTimingTrace(e,t){const r=new _s(e,t,!1,t);ci(r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci={},Od=!1,jm;function Nd(n){Tl()&&(setTimeout(()=>XR(n),0),setTimeout(()=>JR(n),0),setTimeout(()=>YR(n),0))}function JR(n){const e=fe.getInstance(),t=e.getEntriesByType("resource");for(const r of t)Cd(n,r);e.setupObserver("resource",r=>Cd(n,r))}function XR(n){const e=fe.getInstance();"onpagehide"in window?e.document.addEventListener("pagehide",()=>Ia(n)):e.document.addEventListener("unload",()=>Ia(n)),e.document.addEventListener("visibilitychange",()=>{e.document.visibilityState==="hidden"&&Ia(n)}),e.onFirstInputDelay&&e.onFirstInputDelay(t=>{jm=t}),e.onLCP(t=>{var r;Ci.lcp={value:t.value,elementAttribution:(r=t.attribution)===null||r===void 0?void 0:r.element}}),e.onCLS(t=>{var r;Ci.cls={value:t.value,elementAttribution:(r=t.attribution)===null||r===void 0?void 0:r.largestShiftTarget}}),e.onINP(t=>{var r;Ci.inp={value:t.value,elementAttribution:(r=t.attribution)===null||r===void 0?void 0:r.interactionTarget}})}function YR(n){const e=fe.getInstance(),t=e.getEntriesByType("measure");for(const r of t)Dd(n,r);e.setupObserver("measure",r=>Dd(n,r))}function Dd(n,e){const t=e.name;t.substring(0,cc.length)!==cc&&_s.createUserTimingTrace(n,t)}function Ia(n){if(!Od){Od=!0;const e=fe.getInstance(),t=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");setTimeout(()=>{_s.createOobTrace(n,t,r,Ci,jm)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}_init(e){this.initialized||(e?.dataCollectionEnabled!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),e?.instrumentationEnabled!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),fe.getInstance().requiredApisAvailable()?oo().then(t=>{t&&(LR(),xm(this).then(()=>Nd(this),()=>Nd(this)),this.initialized=!0)}).catch(t=>{nn.info(`Environment doesn't support IndexedDB: ${t}`)}):nn.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){$e.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return $e.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){$e.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return $e.getInstance().dataCollectionEnabled}}const eS="[DEFAULT]";function tS(n=Ts()){return n=pe(n),bt(n,"performance").getImmediate()}const nS=(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),r=n.getProvider("installations-internal").getImmediate();if(t.name!==eS)throw Pe.create("FB not default");if(typeof window>"u")throw Pe.create("no window");cR(window);const s=new ZR(t,r);return s._init(e),s};function rS(){He(new qe("performance",nS,"PUBLIC")),Ce(bd,ac),Ce(bd,ac,"esm2017")}rS();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="analytics",sS="firebase_id",iS="origin",oS=60*1e3,aS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new ws("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new rn("analytics","Analytics",cS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(n){if(!n.startsWith(bl)){const e=Be.create("invalid-gtag-resource",{gtagURL:n});return Me.warn(e.message),""}return n}function $m(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function uS(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function hS(n,e){const t=uS("firebase-js-sdk-policy",{createScriptURL:lS}),r=document.createElement("script"),s=`${bl}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function dS(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function fS(n,e,t,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await $m(t)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Me.error(c)}n("config",s,i)}async function pS(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await $m(t);for(const l of o){const u=c.find(p=>p.measurementId===l),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Me.error(i)}}function gS(n,e,t,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await pS(n,e,t,c,l)}else if(i==="config"){const[c,l]=o;await fS(n,e,t,r,c,l)}else if(i==="consent"){const[c,l]=o;n("consent",c,l)}else if(i==="get"){const[c,l,u]=o;n("get",c,l,u)}else if(i==="set"){const[c]=o;n("set",c)}else n(i,...o)}catch(c){Me.error(c)}}return s}function mS(n,e,t,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=gS(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function _S(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(bl)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=30,vS=1e3;class wS{constructor(e={},t=vS){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Bm=new wS;function TS(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ES(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:TS(r)},i=aS.replace("{app-id}",t),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function IS(n,e=Bm,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Be.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Be.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new RS;return setTimeout(async()=>{c.abort()},oS),qm({appId:r,apiKey:s,measurementId:i},o,c,e)}async function qm(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Bm){var i;const{appId:o,measurementId:c}=n;try{await bS(r,e)}catch(l){if(c)return Me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:c};throw l}try{const l=await ES(n);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!AS(u)){if(s.deleteThrottleMetadata(o),c)return Me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=u?.customData)===null||i===void 0?void 0:i.httpStatus)===503?Lu(t,s.intervalMillis,yS):Lu(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(o,p),Me.debug(`Calling attemptFetch again in ${d} millis`),qm(n,p,r,s)}}function bS(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Be.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function AS(n){if(!(n instanceof We)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class RS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function SS(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(){if(io())try{await oo()}catch(n){return Me.warn(Be.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return Me.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kS(n,e,t,r,s,i,o){var c;const l=IS(n);l.then(w=>{t[w.measurementId]=w.appId,n.options.measurementId&&w.measurementId!==n.options.measurementId&&Me.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Me.error(w)),e.push(l);const u=PS().then(w=>{if(w)return r.getId()}),[d,p]=await Promise.all([l,u]);_S(i)||hS(i,d.measurementId),s("js",new Date);const m=(c=o?.config)!==null&&c!==void 0?c:{};return m[iS]="firebase",m.update=!0,p!=null&&(m[sS]=p),s("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.app=e}_delete(){return delete rs[this.app.options.appId],Promise.resolve()}}let rs={},xd=[];const Ld={};let ba="dataLayer",OS="gtag",Vd,zm,Md=!1;function NS(){const n=[];if(_c()&&n.push("This is a browser extension environment."),yc()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Be.create("invalid-analytics-context",{errorInfo:e});Me.warn(t.message)}}function DS(n,e,t){NS();const r=n.options.appId;if(!r)throw Be.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(rs[r]!=null)throw Be.create("already-exists",{id:r});if(!Md){dS(ba);const{wrappedGtag:i,gtagCore:o}=mS(rs,xd,Ld,ba,OS);zm=i,Vd=o,Md=!0}return rs[r]=kS(n,xd,Ld,e,Vd,ba,t),new CS(n)}function xS(n=Ts()){n=pe(n);const e=bt(n,no);return e.isInitialized()?e.getImmediate():LS(n)}function LS(n,e={}){const t=bt(n,no);if(t.isInitialized()){const s=t.getImmediate();if(Kt(e,t.getOptions()))return s;throw Be.create("already-initialized")}return t.initialize({options:e})}async function VS(){if(_c()||!yc()||!io())return!1;try{return await oo()}catch{return!1}}function MS(n,e,t,r){n=pe(n),SS(zm,rs[n.app.options.appId],e,t,r).catch(s=>Me.error(s))}const Ud="@firebase/analytics",Fd="0.10.12";function US(){He(new qe(no,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return DS(r,s,t)},"PUBLIC")),He(new qe("analytics-internal",n,"PRIVATE")),Ce(Ud,Fd),Ce(Ud,Fd,"esm2017");function n(e){try{const t=e.getProvider(no).getImmediate();return{logEvent:(r,s,i)=>MS(t,r,s,i)}}catch(t){throw Be.create("interop-component-reg-failed",{reason:t})}}}US();const FS={apiKey:"AIzaSyDk-_hxBNa1tRCosMO-FBplY5sGSj0jhEU",authDomain:"comet-scanner-template-wizard.firebaseapp.com",projectId:"comet-scanner-template-wizard",storageBucket:"comet-scanner-template-wizard.firebasestorage.app",messagingSenderId:"1073315238272",appId:"1:1073315238272:web:13e744ae6d06fa0949f165",measurementId:"G-D0CQ6B72BS"},Ns=Rf(FS),Fr=sE(Ns),li=nb(Ns);Yb(Ns);tS(Ns);VS().then(n=>{n?(xS(Ns),console.log("Firebase Analytics initialized.")):console.log("Firebase Analytics is not supported in this environment.")});const Hm=ue.createContext(void 0);function Wm({children:n}){const[e,t]=ue.useState(null),[r,s]=ue.useState(!0);ue.useEffect(()=>{const p=Ww(Fr,async m=>{s(!0);try{if(m){const w=fa(li,"users",m.uid),R=await Tb(w);let N=null;R.exists()?N=R.data():console.warn("User document not found in Firestore for UID:",m.uid),t({...m,profile:N,isOwner:N?.isOwner,username:N?.username})}else t(null)}catch(w){console.error("Error fetching user profile:",w)}s(!1)});return()=>p()},[]);const d={currentUser:e,signup:async(p,m,w)=>{if(w){const P=gb(tb(li,"users"),mb("isOwner","==",!0));if((await Eb(P)).docs.length>0)throw new Error("An owner account already exists.")}const N=(await Bw(Fr,p,m)).user;if(N){const P=fa(li,"users",N.uid),V={username:p,isOwner:w,createdAt:ld(),permissions:w?{contentManagement:!0,userManagement:!0,systemConfiguration:!0,mediaUploads:!0,securitySettings:!0,siteCustomization:!0}:{contentManagement:!1,userManagement:!1,systemConfiguration:!1,mediaUploads:!0,securitySettings:!1,siteCustomization:!1}};await cd(P,V)}else throw new Error("Failed to create user account.")},logout:async()=>{await Kw(Fr)},login:async(p,m)=>{try{await qw(Fr,p,m)}catch(w){throw w}},isLoading:r,saveTemplate:async(p,m,w)=>{if(w){const R=fa(li,"templates");await cd(R,{userId:w.uid,templateName:p,templateData:m,createdAt:ld()})}else throw new Error("Failed to create user account.")},sendPasswordResetEmail:async p=>{try{await $w(Fr,p)}catch(m){throw m}}};return O.jsx(Hm.Provider,{value:d,children:!r&&n})}function Km(){const n=ue.useContext(Hm);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n}const jS={currentStep:1,progress:{step1Complete:!1},answers:{},sections:[],questions:[]},Gm=ue.createContext(void 0);function $S(n,e){switch(e.type){case"SET_STEP":return{...n,currentStep:e.payload};case"SET_PROGRESS":return{...n,progress:{...n.progress,...e.payload}};case"SET_ANSWER":return{...n,answers:{...n.answers,[e.payload.questionId]:e.payload.value}};case"SET_SECTIONS":return{...n,sections:e.payload};case"SET_QUESTIONS":return{...n,questions:e.payload};default:return n}}function BS({children:n}){const[e,t]=ue.useReducer($S,jS);return O.jsx(Gm.Provider,{value:{state:e,dispatch:t},children:n})}function wC(){const n=ue.useContext(Gm);if(n===void 0)throw new Error("useWizard must be used within a WizardProvider");return n}const Qm=ue.createContext(void 0),qS={initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},zS=({type:n,message:e})=>{const t={success:"bg-green-500",error:"bg-red-500",info:"bg-blue-500"}[n],r={success:O.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),error:O.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}),info:O.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}[n];return O.jsxs(yn.div,{variants:qS,initial:"initial",animate:"animate",exit:"exit",className:`${t} text-white p-4 rounded-lg shadow-lg flex items-center space-x-3`,children:[O.jsx("span",{className:"flex-shrink-0",children:r}),O.jsx("p",{className:"text-sm font-medium",children:e})]})},HS=({children:n})=>{const[e,t]=ue.useState([]),r=ue.useCallback((s,i)=>{const o=Date.now().toString();t(c=>[...c,{id:o,type:s,message:i}]),setTimeout(()=>{t(c=>c.filter(l=>l.id!==o))},5e3)},[]);return O.jsxs(Qm.Provider,{value:{showToast:r},children:[n,O.jsx("div",{className:"fixed top-4 right-4 z-50 space-y-2",children:O.jsx(Oa,{mode:"popLayout",children:e.map(s=>O.jsx(zS,{type:s.type,message:s.message},s.id))})})]})},TC=()=>{const n=ue.useContext(Qm);if(!n)throw new Error("useToast must be used within a ToastProvider");return n},Jm=ue.createContext(void 0),WS=({children:n})=>{const[e,t]=ue.useState(()=>localStorage.getItem("theme")||"futuristic");ue.useEffect(()=>{localStorage.setItem("theme",e),document.documentElement.classList.remove("light","dark"),document.body.classList.remove("futuristic-theme"),e==="futuristic"?(document.documentElement.classList.add("dark"),document.body.classList.add("futuristic-theme")):document.documentElement.classList.add(e)},[e]);const r=()=>{t(s=>s==="dark"?"light":s==="light"?"futuristic":"dark")};return O.jsx(Jm.Provider,{value:{theme:e,toggleTheme:r},children:n})},Xm=()=>{const n=ue.useContext(Jm);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},jd=({children:n,requireOwner:e=!1})=>{const{currentUser:t,isLoading:r}=Km(),s=ff();return r?O.jsx("div",{className:"min-h-screen flex items-center justify-center",children:O.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[O.jsxs("svg",{className:"animate-spin h-8 w-8 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[O.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),O.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),O.jsx("span",{className:"text-gray-600",children:"Loading..."})]})}):t?e&&!t.isOwner?O.jsx(Oi,{to:"/scanner",state:{error:"Owner access required"},replace:!0}):O.jsx(O.Fragment,{children:n}):O.jsx(Oi,{to:"/login",state:{from:s},replace:!0})},KS=()=>{const{theme:n,toggleTheme:e}=Xm(),t=()=>{switch(n){case"dark":return"bg-gray-800/80 text-yellow-400 hover:bg-gray-700/80";case"light":return"bg-white/80 text-gray-800 hover:bg-gray-100/80";case"futuristic":return"bg-blue-900/60 text-cyan-300 hover:bg-blue-800/70 border border-cyan-500/50 shadow-[0_0_10px_rgba(0,200,255,0.3)]";default:return"bg-gray-800/80 text-yellow-400 hover:bg-gray-700/80"}},r=()=>{switch(n){case"dark":return O.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})});case"light":return O.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})});case"futuristic":return O.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})});default:return null}};return O.jsx(yn.button,{onClick:e,className:`
        fixed top-4 right-4 p-2 rounded-full
        flex items-center justify-center
        backdrop-blur-sm
        ${t()}
        shadow-lg
        transition-colors
        z-50
      `,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":"Toggle theme",children:r()})},ui=({children:n})=>{const{currentUser:e,logout:t}=Km(),{theme:r}=Xm(),s=ey(),i=ff(),o=async()=>{try{await t(),s("/login")}catch(l){console.error("Failed to log out:",l)}},c=l=>i.pathname.startsWith(l);return O.jsx("div",{className:`min-h-screen ${r==="dark"?"dark":""}`,children:O.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200",children:[O.jsx("header",{className:"bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200",children:O.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[O.jsxs("div",{className:"h-16 flex items-center justify-between",children:[O.jsx("div",{className:"flex items-center",children:O.jsx(yn.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-2xl font-bold text-gray-900 dark:text-white",children:"COMET Scanner Wizard"})}),O.jsx(Oa,{mode:"wait",children:e&&O.jsxs(yn.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:"flex items-center space-x-4",children:[O.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:[e.isOwner&&O.jsx("span",{className:"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium mr-2",children:"Owner"}),O.jsx("span",{children:e.username})]}),O.jsx("button",{onClick:o,className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"Logout"})]})})]}),e&&O.jsxs("nav",{className:"flex space-x-8 -mb-px",children:[O.jsx(Cu,{to:"/scanner",className:`border-b-2 py-4 px-1 inline-flex items-center text-sm font-medium transition-colors ${c("/scanner")?"border-blue-500 text-blue-600 dark:text-blue-400":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}`,children:"Scanner Templates"}),e.isOwner&&O.jsx(Cu,{to:"/admin",className:`border-b-2 py-4 px-1 inline-flex items-center text-sm font-medium transition-colors ${c("/admin")?"border-blue-500 text-blue-600 dark:text-blue-400":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}`,children:"Admin Dashboard"})]})]})}),O.jsxs("main",{className:"relative",children:[O.jsx(KS,{}),O.jsx(Oa,{mode:"wait",children:O.jsx(yn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},children:n},"content")})]}),O.jsx("footer",{className:"bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200",children:O.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[O.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:["© ",new Date().getFullYear()," COMET Scanner Wizard"]}),O.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Version 1.0.0"})]})})]})})},GS=({size:n="md",color:e="primary",fullScreen:t=!1,text:r})=>{const s={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"}[n],i={primary:"text-blue-600",white:"text-white",gray:"text-gray-600"}[e],o=O.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[O.jsx(yn.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},children:O.jsxs("svg",{className:`${s} ${i}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[O.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),O.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),r&&O.jsx("span",{className:`text-sm font-medium ${i}`,children:r})]});return t?O.jsx("div",{className:"fixed inset-0 bg-gray-50/80 backdrop-blur-sm flex items-center justify-center z-50",children:o}):o},hi=({message:n="Loading..."})=>O.jsx("div",{className:"min-h-[200px] flex flex-col items-center justify-center p-4",children:O.jsxs(yn.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"flex flex-col items-center",children:[O.jsx(GS,{size:"lg"}),O.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400 font-medium",children:n})]})}),QS=()=>{const[n,e]=ue.useState(!1),[t,r]=ue.useState([]);return ue.useEffect(()=>{},[]),null},{lazy:Co,Suspense:di}=pf,JS=Co(()=>ct(()=>import("./Login-BdP1QrBX.js"),__vite__mapDeps([0,1,2,3]))),XS=Co(()=>ct(()=>import("./Signup-CLjCtiuC.js"),__vite__mapDeps([4,1,2,3]))),YS=Co(()=>ct(()=>import("./ScannerWizard-C2RZUhsZ.js"),__vite__mapDeps([5,1,2,6,3]))),ZS=Co(()=>ct(()=>import("./AdminDashboard-CaTlXl50.js"),__vite__mapDeps([7,1,2,6,3])));function eP(){return O.jsx(ty,{children:O.jsx(Wm,{children:O.jsx(BS,{children:O.jsx(WS,{children:O.jsxs(HS,{children:[O.jsx(QS,{}),O.jsxs(ny,{children:[O.jsx(Mn,{path:"/login",element:O.jsx(ui,{children:O.jsx(di,{fallback:O.jsx(hi,{message:"Loading login page..."}),children:O.jsx(JS,{})})})}),O.jsx(Mn,{path:"/signup",element:O.jsx(ui,{children:O.jsx(di,{fallback:O.jsx(hi,{message:"Loading signup page..."}),children:O.jsx(XS,{})})})}),O.jsx(Mn,{path:"/scanner",element:O.jsx(jd,{children:O.jsx(ui,{children:O.jsx(di,{fallback:O.jsx(hi,{message:"Loading scanner wizard..."}),children:O.jsx(YS,{})})})})}),O.jsx(Mn,{path:"/admin",element:O.jsx(jd,{requireOwner:!0,children:O.jsx(ui,{children:O.jsx(di,{fallback:O.jsx(hi,{message:"Loading admin dashboard..."}),children:O.jsx(ZS,{})})})})}),O.jsx(Mn,{path:"/",element:O.jsx(Oi,{to:"/scanner",replace:!0})}),O.jsx(Mn,{path:"*",element:O.jsx(Oi,{to:"/scanner",replace:!0})})]})]})})})})})}const tP=()=>{console.log("Admin account initialization is now handled through Firebase Authentication")},nP=()=>{tP();const n=localStorage.getItem("user_ChasinAlts");if(!n)return console.error("Admin account initialization failed"),!1;try{const e=JSON.parse(n);return e.username!=="ChasinAlts"?(console.error("Admin username mismatch"),!1):e.isOwner?["contentManagement","userManagement","systemConfiguration","mediaUploads","securitySettings","siteCustomization"].every(s=>e.permissions[s])?!0:(console.error("Admin missing required permissions"),!1):(console.error("Admin is not set as owner"),!1)}catch(e){return console.error("Error verifying admin setup:",e),!1}},rP="serviceWorker"in navigator,sP=()=>{if(!rP){console.log("Service workers are not supported in this browser");return}window.addEventListener("load",()=>{const n=`${window.location.origin}/service-worker.js`;navigator.serviceWorker.register(n).then(e=>{console.log("Service Worker registered with scope:",e.scope),e.update(),e.onupdatefound=()=>{const t=e.installing;t&&(t.onstatechange=()=>{t.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),window.dispatchEvent(new CustomEvent("swUpdate"))):console.log("Content is cached for offline use."))})}}).catch(e=>{console.error("Error during service worker registration:",e)})})},iP={sampleRate:.1},oP=()=>{if(!aP()||typeof window>"u")return;window.EventTarget&&typeof EventTarget.prototype.setMaxListeners=="function"&&EventTarget.prototype.setMaxListeners(20),cP();const n=()=>{setTimeout(()=>{uP()},1e3),window.removeEventListener("load",n)};window.addEventListener("load",n)},aP=()=>Math.random()<iP.sampleRate,cP=()=>{if(window.PerformanceObserver)try{new PerformanceObserver(s=>{const i=s.getEntries(),o=i[i.length-1];o&&xt({name:"largest-contentful-paint",value:o.startTime,category:"paint"})}).observe({type:"largest-contentful-paint",buffered:!0}),new PerformanceObserver(s=>{s.getEntries().forEach(o=>{o.name==="first-input"&&xt({name:"first-input-delay",value:o.processingStart-o.startTime,category:"interaction"})})}).observe({type:"first-input",buffered:!0}),new PerformanceObserver(s=>{let i=0;s.getEntries().forEach(o=>{o.hadRecentInput||(i+=o.value)}),xt({name:"cumulative-layout-shift",value:i,category:"layout"})}).observe({type:"layout-shift",buffered:!0}),new PerformanceObserver(s=>{const i=s.getEntries()[0];if(i){const o=i;xt({name:"time-to-first-byte",value:o.responseStart-o.requestStart,category:"navigation"}),xt({name:"dom-content-loaded",value:o.domContentLoadedEventEnd-o.fetchStart,category:"navigation"}),xt({name:"window-loaded",value:o.loadEventEnd-o.fetchStart,category:"navigation"})}}).observe({type:"navigation",buffered:!0})}catch(n){console.error("Error setting up performance observers:",n)}},Ym={},xt=n=>{Ym[n.name]=n.value},lP=n=>{const e=performance.now();return()=>{const t=performance.now()-e;xt({name:n,value:t})}},uP=()=>{const n={...Ym};if(window.performance){performance.getEntriesByType("paint").forEach(r=>{r.name==="first-paint"?n.firstPaint=r.startTime:r.name==="first-contentful-paint"&&(n.firstContentfulPaint=r.startTime)});const t=performance.getEntriesByType("navigation")[0];t&&(n.timeToFirstByte=t.responseStart-t.requestStart,n.domContentLoaded=t.domContentLoadedEventEnd-t.fetchStart,n.windowLoaded=t.loadEventEnd-t.fetchStart)}return n},hP={init:oP,recordMetric:xt,startTiming:lP},dP=n=>{let e;return n?e=n:typeof fetch>"u"?e=(...t)=>ct(async()=>{const{default:r}=await Promise.resolve().then(()=>Tr);return{default:r}},void 0).then(({default:r})=>r(...t)):e=fetch,(...t)=>e(...t)};class Al extends Error{constructor(e,t="FunctionsError",r){super(e),this.name=t,this.context=r}}class fP extends Al{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class pP extends Al{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class gP extends Al{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var lc;(function(n){n.Any="any",n.ApNortheast1="ap-northeast-1",n.ApNortheast2="ap-northeast-2",n.ApSouth1="ap-south-1",n.ApSoutheast1="ap-southeast-1",n.ApSoutheast2="ap-southeast-2",n.CaCentral1="ca-central-1",n.EuCentral1="eu-central-1",n.EuWest1="eu-west-1",n.EuWest2="eu-west-2",n.EuWest3="eu-west-3",n.SaEast1="sa-east-1",n.UsEast1="us-east-1",n.UsWest1="us-west-1",n.UsWest2="us-west-2"})(lc||(lc={}));var mP=function(n,e,t,r){function s(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function c(d){try{u(r.next(d))}catch(p){o(p)}}function l(d){try{u(r.throw(d))}catch(p){o(p)}}function u(d){d.done?i(d.value):s(d.value).then(c,l)}u((r=r.apply(n,e||[])).next())})};class _P{constructor(e,{headers:t={},customFetch:r,region:s=lc.Any}={}){this.url=e,this.headers=t,this.region=s,this.fetch=dP(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e,t={}){var r;return mP(this,void 0,void 0,function*(){try{const{headers:s,method:i,body:o}=t;let c={},{region:l}=t;l||(l=this.region),l&&l!=="any"&&(c["x-region"]=l);let u;o&&(s&&!Object.prototype.hasOwnProperty.call(s,"Content-Type")||!s)&&(typeof Blob<"u"&&o instanceof Blob||o instanceof ArrayBuffer?(c["Content-Type"]="application/octet-stream",u=o):typeof o=="string"?(c["Content-Type"]="text/plain",u=o):typeof FormData<"u"&&o instanceof FormData?u=o:(c["Content-Type"]="application/json",u=JSON.stringify(o)));const d=yield this.fetch(`${this.url}/${e}`,{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},c),this.headers),s),body:u}).catch(R=>{throw new fP(R)}),p=d.headers.get("x-relay-error");if(p&&p==="true")throw new pP(d);if(!d.ok)throw new gP(d);let m=((r=d.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),w;return m==="application/json"?w=yield d.json():m==="application/octet-stream"?w=yield d.blob():m==="text/event-stream"?w=d:m==="multipart/form-data"?w=yield d.formData():w=yield d.text(),{data:w,error:null}}catch(s){return{data:null,error:s}}})}}var ge={},Un={},Fn={},jn={},$n={},Bn={},yP=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},fr=yP();const vP=fr.fetch,Zm=fr.fetch.bind(fr),e_=fr.Headers,wP=fr.Request,TP=fr.Response,Tr=Object.freeze(Object.defineProperty({__proto__:null,Headers:e_,Request:wP,Response:TP,default:Zm,fetch:vP},Symbol.toStringTag,{value:"Module"})),EP=ry(Tr);var fi={},$d;function t_(){if($d)return fi;$d=1,Object.defineProperty(fi,"__esModule",{value:!0});class n extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}}return fi.default=n,fi}var Bd;function n_(){if(Bd)return Bn;Bd=1;var n=Bn&&Bn.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Bn,"__esModule",{value:!0});const e=n(EP),t=n(t_());class r{constructor(i){this.shouldThrowOnError=!1,this.method=i.method,this.url=i.url,this.headers=i.headers,this.schema=i.schema,this.body=i.body,this.shouldThrowOnError=i.shouldThrowOnError,this.signal=i.signal,this.isMaybeSingle=i.isMaybeSingle,i.fetch?this.fetch=i.fetch:typeof fetch>"u"?this.fetch=e.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(i,o){return this.headers=Object.assign({},this.headers),this.headers[i]=o,this}then(i,o){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const c=this.fetch;let l=c(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async u=>{var d,p,m;let w=null,R=null,N=null,P=u.status,V=u.statusText;if(u.ok){if(this.method!=="HEAD"){const J=await u.text();J===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?R=J:R=JSON.parse(J))}const M=(d=this.headers.Prefer)===null||d===void 0?void 0:d.match(/count=(exact|planned|estimated)/),F=(p=u.headers.get("content-range"))===null||p===void 0?void 0:p.split("/");M&&F&&F.length>1&&(N=parseInt(F[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(R)&&(R.length>1?(w={code:"PGRST116",details:`Results contain ${R.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},R=null,N=null,P=406,V="Not Acceptable"):R.length===1?R=R[0]:R=null)}else{const M=await u.text();try{w=JSON.parse(M),Array.isArray(w)&&u.status===404&&(R=[],w=null,P=200,V="OK")}catch{u.status===404&&M===""?(P=204,V="No Content"):w={message:M}}if(w&&this.isMaybeSingle&&(!((m=w?.details)===null||m===void 0)&&m.includes("0 rows"))&&(w=null,P=200,V="OK"),w&&this.shouldThrowOnError)throw new t.default(w)}return{error:w,data:R,count:N,status:P,statusText:V}});return this.shouldThrowOnError||(l=l.catch(u=>{var d,p,m;return{error:{message:`${(d=u?.name)!==null&&d!==void 0?d:"FetchError"}: ${u?.message}`,details:`${(p=u?.stack)!==null&&p!==void 0?p:""}`,hint:"",code:`${(m=u?.code)!==null&&m!==void 0?m:""}`},data:null,count:null,status:0,statusText:""}})),l.then(i,o)}returns(){return this}overrideTypes(){return this}}return Bn.default=r,Bn}var qd;function r_(){if(qd)return $n;qd=1;var n=$n&&$n.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty($n,"__esModule",{value:!0});const e=n(n_());class t extends e.default{select(s){let i=!1;const o=(s??"*").split("").map(c=>/\s/.test(c)&&!i?"":(c==='"'&&(i=!i),c)).join("");return this.url.searchParams.set("select",o),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(s,{ascending:i=!0,nullsFirst:o,foreignTable:c,referencedTable:l=c}={}){const u=l?`${l}.order`:"order",d=this.url.searchParams.get(u);return this.url.searchParams.set(u,`${d?`${d},`:""}${s}.${i?"asc":"desc"}${o===void 0?"":o?".nullsfirst":".nullslast"}`),this}limit(s,{foreignTable:i,referencedTable:o=i}={}){const c=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(c,`${s}`),this}range(s,i,{foreignTable:o,referencedTable:c=o}={}){const l=typeof c>"u"?"offset":`${c}.offset`,u=typeof c>"u"?"limit":`${c}.limit`;return this.url.searchParams.set(l,`${s}`),this.url.searchParams.set(u,`${i-s+1}`),this}abortSignal(s){return this.signal=s,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:s=!1,verbose:i=!1,settings:o=!1,buffers:c=!1,wal:l=!1,format:u="text"}={}){var d;const p=[s?"analyze":null,i?"verbose":null,o?"settings":null,c?"buffers":null,l?"wal":null].filter(Boolean).join("|"),m=(d=this.headers.Accept)!==null&&d!==void 0?d:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${u}; for="${m}"; options=${p};`,u==="json"?this:this}rollback(){var s;return((s=this.headers.Prefer)!==null&&s!==void 0?s:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}return $n.default=t,$n}var zd;function Rl(){if(zd)return jn;zd=1;var n=jn&&jn.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(jn,"__esModule",{value:!0});const e=n(r_());class t extends e.default{eq(s,i){return this.url.searchParams.append(s,`eq.${i}`),this}neq(s,i){return this.url.searchParams.append(s,`neq.${i}`),this}gt(s,i){return this.url.searchParams.append(s,`gt.${i}`),this}gte(s,i){return this.url.searchParams.append(s,`gte.${i}`),this}lt(s,i){return this.url.searchParams.append(s,`lt.${i}`),this}lte(s,i){return this.url.searchParams.append(s,`lte.${i}`),this}like(s,i){return this.url.searchParams.append(s,`like.${i}`),this}likeAllOf(s,i){return this.url.searchParams.append(s,`like(all).{${i.join(",")}}`),this}likeAnyOf(s,i){return this.url.searchParams.append(s,`like(any).{${i.join(",")}}`),this}ilike(s,i){return this.url.searchParams.append(s,`ilike.${i}`),this}ilikeAllOf(s,i){return this.url.searchParams.append(s,`ilike(all).{${i.join(",")}}`),this}ilikeAnyOf(s,i){return this.url.searchParams.append(s,`ilike(any).{${i.join(",")}}`),this}is(s,i){return this.url.searchParams.append(s,`is.${i}`),this}in(s,i){const o=Array.from(new Set(i)).map(c=>typeof c=="string"&&new RegExp("[,()]").test(c)?`"${c}"`:`${c}`).join(",");return this.url.searchParams.append(s,`in.(${o})`),this}contains(s,i){return typeof i=="string"?this.url.searchParams.append(s,`cs.${i}`):Array.isArray(i)?this.url.searchParams.append(s,`cs.{${i.join(",")}}`):this.url.searchParams.append(s,`cs.${JSON.stringify(i)}`),this}containedBy(s,i){return typeof i=="string"?this.url.searchParams.append(s,`cd.${i}`):Array.isArray(i)?this.url.searchParams.append(s,`cd.{${i.join(",")}}`):this.url.searchParams.append(s,`cd.${JSON.stringify(i)}`),this}rangeGt(s,i){return this.url.searchParams.append(s,`sr.${i}`),this}rangeGte(s,i){return this.url.searchParams.append(s,`nxl.${i}`),this}rangeLt(s,i){return this.url.searchParams.append(s,`sl.${i}`),this}rangeLte(s,i){return this.url.searchParams.append(s,`nxr.${i}`),this}rangeAdjacent(s,i){return this.url.searchParams.append(s,`adj.${i}`),this}overlaps(s,i){return typeof i=="string"?this.url.searchParams.append(s,`ov.${i}`):this.url.searchParams.append(s,`ov.{${i.join(",")}}`),this}textSearch(s,i,{config:o,type:c}={}){let l="";c==="plain"?l="pl":c==="phrase"?l="ph":c==="websearch"&&(l="w");const u=o===void 0?"":`(${o})`;return this.url.searchParams.append(s,`${l}fts${u}.${i}`),this}match(s){return Object.entries(s).forEach(([i,o])=>{this.url.searchParams.append(i,`eq.${o}`)}),this}not(s,i,o){return this.url.searchParams.append(s,`not.${i}.${o}`),this}or(s,{foreignTable:i,referencedTable:o=i}={}){const c=o?`${o}.or`:"or";return this.url.searchParams.append(c,`(${s})`),this}filter(s,i,o){return this.url.searchParams.append(s,`${i}.${o}`),this}}return jn.default=t,jn}var Hd;function s_(){if(Hd)return Fn;Hd=1;var n=Fn&&Fn.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Fn,"__esModule",{value:!0});const e=n(Rl());class t{constructor(s,{headers:i={},schema:o,fetch:c}){this.url=s,this.headers=i,this.schema=o,this.fetch=c}select(s,{head:i=!1,count:o}={}){const c=i?"HEAD":"GET";let l=!1;const u=(s??"*").split("").map(d=>/\s/.test(d)&&!l?"":(d==='"'&&(l=!l),d)).join("");return this.url.searchParams.set("select",u),o&&(this.headers.Prefer=`count=${o}`),new e.default({method:c,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(s,{count:i,defaultToNull:o=!0}={}){const c="POST",l=[];if(this.headers.Prefer&&l.push(this.headers.Prefer),i&&l.push(`count=${i}`),o||l.push("missing=default"),this.headers.Prefer=l.join(","),Array.isArray(s)){const u=s.reduce((d,p)=>d.concat(Object.keys(p)),[]);if(u.length>0){const d=[...new Set(u)].map(p=>`"${p}"`);this.url.searchParams.set("columns",d.join(","))}}return new e.default({method:c,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}upsert(s,{onConflict:i,ignoreDuplicates:o=!1,count:c,defaultToNull:l=!0}={}){const u="POST",d=[`resolution=${o?"ignore":"merge"}-duplicates`];if(i!==void 0&&this.url.searchParams.set("on_conflict",i),this.headers.Prefer&&d.push(this.headers.Prefer),c&&d.push(`count=${c}`),l||d.push("missing=default"),this.headers.Prefer=d.join(","),Array.isArray(s)){const p=s.reduce((m,w)=>m.concat(Object.keys(w)),[]);if(p.length>0){const m=[...new Set(p)].map(w=>`"${w}"`);this.url.searchParams.set("columns",m.join(","))}}return new e.default({method:u,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}update(s,{count:i}={}){const o="PATCH",c=[];return this.headers.Prefer&&c.push(this.headers.Prefer),i&&c.push(`count=${i}`),this.headers.Prefer=c.join(","),new e.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}delete({count:s}={}){const i="DELETE",o=[];return s&&o.push(`count=${s}`),this.headers.Prefer&&o.unshift(this.headers.Prefer),this.headers.Prefer=o.join(","),new e.default({method:i,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}return Fn.default=t,Fn}var jr={},$r={},Wd;function IP(){return Wd||(Wd=1,Object.defineProperty($r,"__esModule",{value:!0}),$r.version=void 0,$r.version="0.0.0-automated"),$r}var Kd;function bP(){if(Kd)return jr;Kd=1,Object.defineProperty(jr,"__esModule",{value:!0}),jr.DEFAULT_HEADERS=void 0;const n=IP();return jr.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${n.version}`},jr}var Gd;function AP(){if(Gd)return Un;Gd=1;var n=Un&&Un.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Un,"__esModule",{value:!0});const e=n(s_()),t=n(Rl()),r=bP();class s{constructor(o,{headers:c={},schema:l,fetch:u}={}){this.url=o,this.headers=Object.assign(Object.assign({},r.DEFAULT_HEADERS),c),this.schemaName=l,this.fetch=u}from(o){const c=new URL(`${this.url}/${o}`);return new e.default(c,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(o){return new s(this.url,{headers:this.headers,schema:o,fetch:this.fetch})}rpc(o,c={},{head:l=!1,get:u=!1,count:d}={}){let p;const m=new URL(`${this.url}/rpc/${o}`);let w;l||u?(p=l?"HEAD":"GET",Object.entries(c).filter(([N,P])=>P!==void 0).map(([N,P])=>[N,Array.isArray(P)?`{${P.join(",")}}`:`${P}`]).forEach(([N,P])=>{m.searchParams.append(N,P)})):(p="POST",w=c);const R=Object.assign({},this.headers);return d&&(R.Prefer=`count=${d}`),new t.default({method:p,url:m,headers:R,schema:this.schemaName,body:w,fetch:this.fetch,allowEmpty:!1})}}return Un.default=s,Un}var Qd;function RP(){if(Qd)return ge;Qd=1;var n=ge&&ge.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(ge,"__esModule",{value:!0}),ge.PostgrestError=ge.PostgrestBuilder=ge.PostgrestTransformBuilder=ge.PostgrestFilterBuilder=ge.PostgrestQueryBuilder=ge.PostgrestClient=void 0;const e=n(AP());ge.PostgrestClient=e.default;const t=n(s_());ge.PostgrestQueryBuilder=t.default;const r=n(Rl());ge.PostgrestFilterBuilder=r.default;const s=n(r_());ge.PostgrestTransformBuilder=s.default;const i=n(n_());ge.PostgrestBuilder=i.default;const o=n(t_());return ge.PostgrestError=o.default,ge.default={PostgrestClient:e.default,PostgrestQueryBuilder:t.default,PostgrestFilterBuilder:r.default,PostgrestTransformBuilder:s.default,PostgrestBuilder:i.default,PostgrestError:o.default},ge}var SP=RP();const PP=df(SP),{PostgrestClient:kP,PostgrestQueryBuilder:EC,PostgrestFilterBuilder:IC,PostgrestTransformBuilder:bC,PostgrestBuilder:AC,PostgrestError:RC}=PP,CP="2.11.2",OP={"X-Client-Info":`realtime-js/${CP}`},NP="1.0.0",i_=1e4,DP=1e3;var ir;(function(n){n[n.connecting=0]="connecting",n[n.open=1]="open",n[n.closing=2]="closing",n[n.closed=3]="closed"})(ir||(ir={}));var Fe;(function(n){n.closed="closed",n.errored="errored",n.joined="joined",n.joining="joining",n.leaving="leaving"})(Fe||(Fe={}));var Je;(function(n){n.close="phx_close",n.error="phx_error",n.join="phx_join",n.reply="phx_reply",n.leave="phx_leave",n.access_token="access_token"})(Je||(Je={}));var uc;(function(n){n.websocket="websocket"})(uc||(uc={}));var gn;(function(n){n.Connecting="connecting",n.Open="open",n.Closing="closing",n.Closed="closed"})(gn||(gn={}));class xP{constructor(){this.HEADER_LENGTH=1}decode(e,t){return e.constructor===ArrayBuffer?t(this._binaryDecode(e)):t(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const t=new DataView(e),r=new TextDecoder;return this._decodeBroadcast(e,t,r)}_decodeBroadcast(e,t,r){const s=t.getUint8(1),i=t.getUint8(2);let o=this.HEADER_LENGTH+2;const c=r.decode(e.slice(o,o+s));o=o+s;const l=r.decode(e.slice(o,o+i));o=o+i;const u=JSON.parse(r.decode(e.slice(o,e.byteLength)));return{ref:null,topic:c,event:l,payload:u}}}class o_{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var te;(function(n){n.abstime="abstime",n.bool="bool",n.date="date",n.daterange="daterange",n.float4="float4",n.float8="float8",n.int2="int2",n.int4="int4",n.int4range="int4range",n.int8="int8",n.int8range="int8range",n.json="json",n.jsonb="jsonb",n.money="money",n.numeric="numeric",n.oid="oid",n.reltime="reltime",n.text="text",n.time="time",n.timestamp="timestamp",n.timestamptz="timestamptz",n.timetz="timetz",n.tsrange="tsrange",n.tstzrange="tstzrange"})(te||(te={}));const Jd=(n,e,t={})=>{var r;const s=(r=t.skipTypes)!==null&&r!==void 0?r:[];return Object.keys(e).reduce((i,o)=>(i[o]=LP(o,n,e,s),i),{})},LP=(n,e,t,r)=>{const s=e.find(c=>c.name===n),i=s?.type,o=t[n];return i&&!r.includes(i)?a_(i,o):hc(o)},a_=(n,e)=>{if(n.charAt(0)==="_"){const t=n.slice(1,n.length);return FP(e,t)}switch(n){case te.bool:return VP(e);case te.float4:case te.float8:case te.int2:case te.int4:case te.int8:case te.numeric:case te.oid:return MP(e);case te.json:case te.jsonb:return UP(e);case te.timestamp:return jP(e);case te.abstime:case te.date:case te.daterange:case te.int4range:case te.int8range:case te.money:case te.reltime:case te.text:case te.time:case te.timestamptz:case te.timetz:case te.tsrange:case te.tstzrange:return hc(e);default:return hc(e)}},hc=n=>n,VP=n=>{switch(n){case"t":return!0;case"f":return!1;default:return n}},MP=n=>{if(typeof n=="string"){const e=parseFloat(n);if(!Number.isNaN(e))return e}return n},UP=n=>{if(typeof n=="string")try{return JSON.parse(n)}catch(e){return console.log(`JSON parse error: ${e}`),n}return n},FP=(n,e)=>{if(typeof n!="string")return n;const t=n.length-1,r=n[t];if(n[0]==="{"&&r==="}"){let i;const o=n.slice(1,t);try{i=JSON.parse("["+o+"]")}catch{i=o?o.split(","):[]}return i.map(c=>a_(e,c))}return n},jP=n=>typeof n=="string"?n.replace(" ","T"):n,c_=n=>{let e=n;return e=e.replace(/^ws/i,"http"),e=e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),e.replace(/\/+$/,"")};class Aa{constructor(e,t,r={},s=i_){this.channel=e,this.event=t,this.payload=r,this.timeout=s,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var r;return this._hasReceived(e)&&t((r=this.receivedResp)===null||r===void 0?void 0:r.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=t=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=t,this._matchReceive(t)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(r=>r.status===e).forEach(r=>r.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var Xd;(function(n){n.SYNC="sync",n.JOIN="join",n.LEAVE="leave"})(Xd||(Xd={}));class ss{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const r=t?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(r.state,{},s=>{const{onJoin:i,onLeave:o,onSync:c}=this.caller;this.joinRef=this.channel._joinRef(),this.state=ss.syncState(this.state,s,i,o),this.pendingDiffs.forEach(l=>{this.state=ss.syncDiff(this.state,l,i,o)}),this.pendingDiffs=[],c()}),this.channel._on(r.diff,{},s=>{const{onJoin:i,onLeave:o,onSync:c}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(s):(this.state=ss.syncDiff(this.state,s,i,o),c())}),this.onJoin((s,i,o)=>{this.channel._trigger("presence",{event:"join",key:s,currentPresences:i,newPresences:o})}),this.onLeave((s,i,o)=>{this.channel._trigger("presence",{event:"leave",key:s,currentPresences:i,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,r,s){const i=this.cloneDeep(e),o=this.transformState(t),c={},l={};return this.map(i,(u,d)=>{o[u]||(l[u]=d)}),this.map(o,(u,d)=>{const p=i[u];if(p){const m=d.map(P=>P.presence_ref),w=p.map(P=>P.presence_ref),R=d.filter(P=>w.indexOf(P.presence_ref)<0),N=p.filter(P=>m.indexOf(P.presence_ref)<0);R.length>0&&(c[u]=R),N.length>0&&(l[u]=N)}else c[u]=d}),this.syncDiff(i,{joins:c,leaves:l},r,s)}static syncDiff(e,t,r,s){const{joins:i,leaves:o}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return r||(r=()=>{}),s||(s=()=>{}),this.map(i,(c,l)=>{var u;const d=(u=e[c])!==null&&u!==void 0?u:[];if(e[c]=this.cloneDeep(l),d.length>0){const p=e[c].map(w=>w.presence_ref),m=d.filter(w=>p.indexOf(w.presence_ref)<0);e[c].unshift(...m)}r(c,d,l)}),this.map(o,(c,l)=>{let u=e[c];if(!u)return;const d=l.map(p=>p.presence_ref);u=u.filter(p=>d.indexOf(p.presence_ref)<0),e[c]=u,s(c,u,l),u.length===0&&delete e[c]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(r=>t(r,e[r]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,r)=>{const s=e[r];return"metas"in s?t[r]=s.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i)):t[r]=s,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Yd;(function(n){n.ALL="*",n.INSERT="INSERT",n.UPDATE="UPDATE",n.DELETE="DELETE"})(Yd||(Yd={}));var Zd;(function(n){n.BROADCAST="broadcast",n.PRESENCE="presence",n.POSTGRES_CHANGES="postgres_changes",n.SYSTEM="system"})(Zd||(Zd={}));var pt;(function(n){n.SUBSCRIBED="SUBSCRIBED",n.TIMED_OUT="TIMED_OUT",n.CLOSED="CLOSED",n.CHANNEL_ERROR="CHANNEL_ERROR"})(pt||(pt={}));class Sl{constructor(e,t={config:{}},r){this.topic=e,this.params=t,this.socket=r,this.bindings={},this.state=Fe.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new Aa(this,Je.join,this.params,this.timeout),this.rejoinTimer=new o_(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Fe.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(s=>s.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Fe.closed,this.socket._remove(this)}),this._onError(s=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,s),this.state=Fe.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Fe.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Je.reply,{},(s,i)=>{this._trigger(this._replyEventName(i),s)}),this.presence=new ss(this),this.broadcastEndpointURL=c_(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(e,t=this.timeout){var r,s;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:i,presence:o,private:c}}=this.params;this._onError(d=>e?.(pt.CHANNEL_ERROR,d)),this._onClose(()=>e?.(pt.CLOSED));const l={},u={broadcast:i,presence:o,postgres_changes:(s=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(d=>d.filter))!==null&&s!==void 0?s:[],private:c};this.socket.accessTokenValue&&(l.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:u},l)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",async({postgres_changes:d})=>{var p;if(this.socket.setAuth(),d===void 0){e?.(pt.SUBSCRIBED);return}else{const m=this.bindings.postgres_changes,w=(p=m?.length)!==null&&p!==void 0?p:0,R=[];for(let N=0;N<w;N++){const P=m[N],{filter:{event:V,schema:B,table:M,filter:F}}=P,J=d&&d[N];if(J&&J.event===V&&J.schema===B&&J.table===M&&J.filter===F)R.push(Object.assign(Object.assign({},P),{id:J.id}));else{this.unsubscribe(),e?.(pt.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=R,e&&e(pt.SUBSCRIBED);return}}).receive("error",d=>{e?.(pt.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(d).join(", ")||"error")))}).receive("timeout",()=>{e?.(pt.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,r){return this._on(e,t,r)}async send(e,t={}){var r,s;if(!this._canPush()&&e.type==="broadcast"){const{event:i,payload:o}=e,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:o,private:this.private}]})};try{const u=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(r=t.timeout)!==null&&r!==void 0?r:this.timeout);return await((s=u.body)===null||s===void 0?void 0:s.cancel()),u.ok?"ok":"error"}catch(u){return u.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var o,c,l;const u=this._push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(c=(o=this.params)===null||o===void 0?void 0:o.config)===null||c===void 0?void 0:c.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),u.receive("ok",()=>i("ok")),u.receive("error",()=>i("error")),u.receive("timeout",()=>i("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=Fe.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Je.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(r=>{const s=new Aa(this,Je.leave,{},e);s.receive("ok",()=>{t(),r("ok")}).receive("timeout",()=>{t(),r("timed out")}).receive("error",()=>{r("error")}),s.send(),this._canPush()||s.trigger("ok",{})})}async _fetchWithTimeout(e,t,r){const s=new AbortController,i=setTimeout(()=>s.abort(),r),o=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:s.signal}));return clearTimeout(i),o}_push(e,t,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let s=new Aa(this,e,t,r);return this._canPush()?s.send():(s.startTimeout(),this.pushBuffer.push(s)),s}_onMessage(e,t,r){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,r){var s,i;const o=e.toLocaleLowerCase(),{close:c,error:l,leave:u,join:d}=Je;if(r&&[c,l,u,d].indexOf(o)>=0&&r!==this._joinRef())return;let m=this._onMessage(o,t,r);if(t&&!m)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(s=this.bindings.postgres_changes)===null||s===void 0||s.filter(w=>{var R,N,P;return((R=w.filter)===null||R===void 0?void 0:R.event)==="*"||((P=(N=w.filter)===null||N===void 0?void 0:N.event)===null||P===void 0?void 0:P.toLocaleLowerCase())===o}).map(w=>w.callback(m,r)):(i=this.bindings[o])===null||i===void 0||i.filter(w=>{var R,N,P,V,B,M;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in w){const F=w.id,J=(R=w.filter)===null||R===void 0?void 0:R.event;return F&&((N=t.ids)===null||N===void 0?void 0:N.includes(F))&&(J==="*"||J?.toLocaleLowerCase()===((P=t.data)===null||P===void 0?void 0:P.type.toLocaleLowerCase()))}else{const F=(B=(V=w?.filter)===null||V===void 0?void 0:V.event)===null||B===void 0?void 0:B.toLocaleLowerCase();return F==="*"||F===((M=t?.event)===null||M===void 0?void 0:M.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===o}).map(w=>{if(typeof m=="object"&&"ids"in m){const R=m.data,{schema:N,table:P,commit_timestamp:V,type:B,errors:M}=R;m=Object.assign(Object.assign({},{schema:N,table:P,commit_timestamp:V,eventType:B,new:{},old:{},errors:M}),this._getPayloadRecords(R))}w.callback(m,r)})}_isClosed(){return this.state===Fe.closed}_isJoined(){return this.state===Fe.joined}_isJoining(){return this.state===Fe.joining}_isLeaving(){return this.state===Fe.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,r){const s=e.toLocaleLowerCase(),i={type:s,filter:t,callback:r};return this.bindings[s]?this.bindings[s].push(i):this.bindings[s]=[i],this}_off(e,t){const r=e.toLocaleLowerCase();return this.bindings[r]=this.bindings[r].filter(s=>{var i;return!(((i=s.type)===null||i===void 0?void 0:i.toLocaleLowerCase())===r&&Sl.isEqual(s.filter,t))}),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(e[r]!==t[r])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(Je.close,{},e)}_onError(e){this._on(Je.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Fe.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=Jd(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=Jd(e.columns,e.old_record)),t}}const $P=()=>{},BP=typeof WebSocket<"u",qP=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class zP{constructor(e,t){var r;this.accessTokenValue=null,this.apiKey=null,this.channels=[],this.endPoint="",this.httpEndpoint="",this.headers=OP,this.params={},this.timeout=i_,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=$P,this.conn=null,this.sendBuffer=[],this.serializer=new xP,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=i=>{let o;return i?o=i:typeof fetch>"u"?o=(...c)=>ct(async()=>{const{default:l}=await Promise.resolve().then(()=>Tr);return{default:l}},void 0).then(({default:l})=>l(...c)):o=fetch,(...c)=>o(...c)},this.endPoint=`${e}/${uc.websocket}`,this.httpEndpoint=c_(e),t?.transport?this.transport=t.transport:this.transport=null,t?.params&&(this.params=t.params),t?.headers&&(this.headers=Object.assign(Object.assign({},this.headers),t.headers)),t?.timeout&&(this.timeout=t.timeout),t?.logger&&(this.logger=t.logger),t?.heartbeatIntervalMs&&(this.heartbeatIntervalMs=t.heartbeatIntervalMs);const s=(r=t?.params)===null||r===void 0?void 0:r.apikey;if(s&&(this.accessTokenValue=s,this.apiKey=s),this.reconnectAfterMs=t?.reconnectAfterMs?t.reconnectAfterMs:i=>[1e3,2e3,5e3,1e4][i-1]||1e4,this.encode=t?.encode?t.encode:(i,o)=>o(JSON.stringify(i)),this.decode=t?.decode?t.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new o_(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(t?.fetch),t?.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=t?.worker||!1,this.workerUrl=t?.workerUrl}this.accessToken=t?.accessToken||null}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this.endpointURL(),void 0,{headers:this.headers});return}if(BP){this.conn=new WebSocket(this.endpointURL()),this.setupConnection();return}this.conn=new HP(this.endpointURL(),void 0,{close:()=>{this.conn=null}}),ct(async()=>{const{default:e}=await import("./browser-BzhrmF_M.js").then(t=>t.b);return{default:e}},__vite__mapDeps([8,2])).then(({default:e})=>{this.conn=new e(this.endpointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:NP}))}disconnect(e,t){this.conn&&(this.conn.onclose=function(){},e?this.conn.close(e,t??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map(t=>t.unsubscribe()));return this.disconnect(),e}log(e,t,r){this.logger(e,t,r)}connectionState(){switch(this.conn&&this.conn.readyState){case ir.connecting:return gn.Connecting;case ir.open:return gn.Open;case ir.closing:return gn.Closing;default:return gn.Closed}}isConnected(){return this.connectionState()===gn.Open}channel(e,t={config:{}}){const r=new Sl(`realtime:${e}`,t,this);return this.channels.push(r),r}push(e){const{topic:t,event:r,payload:s,ref:i}=e,o=()=>{this.encode(e,c=>{var l;(l=this.conn)===null||l===void 0||l.send(c)})};this.log("push",`${t} ${r} (${i})`,s),this.isConnected()?o():this.sendBuffer.push(o)}async setAuth(e=null){let t=e||this.accessToken&&await this.accessToken()||this.accessTokenValue;if(t){let r=null;try{r=JSON.parse(atob(t.split(".")[1]))}catch{}if(r&&r.exp&&!(Math.floor(Date.now()/1e3)-r.exp<0))return this.log("auth",`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`),Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`);this.accessTokenValue=t,this.channels.forEach(s=>{t&&s.updateJoinPayload({access_token:t}),s.joinedOnce&&s._isJoined()&&s._push(Je.access_token,{access_token:t})})}}async sendHeartbeat(){var e;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(e=this.conn)===null||e===void 0||e.close(DP,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth()}}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(r=>r.topic===e&&(r._isJoined()||r._isJoining()));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t._joinRef()!==e._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_onConnMessage(e){this.decode(e.data,t=>{let{topic:r,event:s,payload:i,ref:o}=t;o&&o===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${i.status||""} ${r} ${s} ${o&&"("+o+")"||""}`,i),this.channels.filter(c=>c._isMember(r)).forEach(c=>c._trigger(s,i,o)),this.stateChangeCallbacks.message.forEach(c=>c(t))})}async _onConnOpen(){if(this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),!this.worker)this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs);else{this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this.workerRef.terminate()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}this.stateChangeCallbacks.open.forEach(e=>e())}_onConnClose(e){this.log("transport","close",e),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(t=>t(e))}_onConnError(e){this.log("transport",e.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(t=>t(e))}_triggerChanError(){this.channels.forEach(e=>e._trigger(Je.error))}_appendParams(e,t){if(Object.keys(t).length===0)return e;const r=e.match(/\?/)?"&":"?",s=new URLSearchParams(t);return`${e}${r}${s}`}_workerObjectUrl(e){let t;if(e)t=e;else{const r=new Blob([qP],{type:"application/javascript"});t=URL.createObjectURL(r)}return t}}class HP{constructor(e,t,r){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=ir.connecting,this.send=()=>{},this.url=null,this.url=e,this.close=r.close}}class Pl extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function me(n){return typeof n=="object"&&n!==null&&"__isStorageError"in n}class WP extends Pl{constructor(e,t){super(e),this.name="StorageApiError",this.status=t}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class dc extends Pl{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}var KP=function(n,e,t,r){function s(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function c(d){try{u(r.next(d))}catch(p){o(p)}}function l(d){try{u(r.throw(d))}catch(p){o(p)}}function u(d){d.done?i(d.value):s(d.value).then(c,l)}u((r=r.apply(n,e||[])).next())})};const l_=n=>{let e;return n?e=n:typeof fetch>"u"?e=(...t)=>ct(async()=>{const{default:r}=await Promise.resolve().then(()=>Tr);return{default:r}},void 0).then(({default:r})=>r(...t)):e=fetch,(...t)=>e(...t)},GP=()=>KP(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield ct(()=>Promise.resolve().then(()=>Tr),void 0)).Response:Response}),fc=n=>{if(Array.isArray(n))return n.map(t=>fc(t));if(typeof n=="function"||n!==Object(n))return n;const e={};return Object.entries(n).forEach(([t,r])=>{const s=t.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));e[s]=fc(r)}),e};var Nn=function(n,e,t,r){function s(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function c(d){try{u(r.next(d))}catch(p){o(p)}}function l(d){try{u(r.throw(d))}catch(p){o(p)}}function u(d){d.done?i(d.value):s(d.value).then(c,l)}u((r=r.apply(n,e||[])).next())})};const Ra=n=>n.msg||n.message||n.error_description||n.error||JSON.stringify(n),QP=(n,e,t)=>Nn(void 0,void 0,void 0,function*(){const r=yield GP();n instanceof r&&!t?.noResolveJson?n.json().then(s=>{e(new WP(Ra(s),n.status||500))}).catch(s=>{e(new dc(Ra(s),s))}):e(new dc(Ra(n),n))}),JP=(n,e,t,r)=>{const s={method:n,headers:e?.headers||{}};return n==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json"},e?.headers),r&&(s.body=JSON.stringify(r)),Object.assign(Object.assign({},s),t))};function Ds(n,e,t,r,s,i){return Nn(this,void 0,void 0,function*(){return new Promise((o,c)=>{n(t,JP(e,r,s,i)).then(l=>{if(!l.ok)throw l;return r?.noResolveJson?l:l.json()}).then(l=>o(l)).catch(l=>QP(l,c,r))})})}function ro(n,e,t,r){return Nn(this,void 0,void 0,function*(){return Ds(n,"GET",e,t,r)})}function Lt(n,e,t,r,s){return Nn(this,void 0,void 0,function*(){return Ds(n,"POST",e,r,s,t)})}function XP(n,e,t,r,s){return Nn(this,void 0,void 0,function*(){return Ds(n,"PUT",e,r,s,t)})}function YP(n,e,t,r){return Nn(this,void 0,void 0,function*(){return Ds(n,"HEAD",e,Object.assign(Object.assign({},t),{noResolveJson:!0}),r)})}function u_(n,e,t,r,s){return Nn(this,void 0,void 0,function*(){return Ds(n,"DELETE",e,r,s,t)})}var xe=function(n,e,t,r){function s(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function c(d){try{u(r.next(d))}catch(p){o(p)}}function l(d){try{u(r.throw(d))}catch(p){o(p)}}function u(d){d.done?i(d.value):s(d.value).then(c,l)}u((r=r.apply(n,e||[])).next())})};const ZP={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},ef={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class ek{constructor(e,t={},r,s){this.url=e,this.headers=t,this.bucketId=r,this.fetch=l_(s)}uploadOrUpdate(e,t,r,s){return xe(this,void 0,void 0,function*(){try{let i;const o=Object.assign(Object.assign({},ef),s);let c=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(o.upsert)});const l=o.metadata;typeof Blob<"u"&&r instanceof Blob?(i=new FormData,i.append("cacheControl",o.cacheControl),l&&i.append("metadata",this.encodeMetadata(l)),i.append("",r)):typeof FormData<"u"&&r instanceof FormData?(i=r,i.append("cacheControl",o.cacheControl),l&&i.append("metadata",this.encodeMetadata(l))):(i=r,c["cache-control"]=`max-age=${o.cacheControl}`,c["content-type"]=o.contentType,l&&(c["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),s?.headers&&(c=Object.assign(Object.assign({},c),s.headers));const u=this._removeEmptyFolders(t),d=this._getFinalPath(u),p=yield this.fetch(`${this.url}/object/${d}`,Object.assign({method:e,body:i,headers:c},o?.duplex?{duplex:o.duplex}:{})),m=yield p.json();return p.ok?{data:{path:u,id:m.Id,fullPath:m.Key},error:null}:{data:null,error:m}}catch(i){if(me(i))return{data:null,error:i};throw i}})}upload(e,t,r){return xe(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,t,r)})}uploadToSignedUrl(e,t,r,s){return xe(this,void 0,void 0,function*(){const i=this._removeEmptyFolders(e),o=this._getFinalPath(i),c=new URL(this.url+`/object/upload/sign/${o}`);c.searchParams.set("token",t);try{let l;const u=Object.assign({upsert:ef.upsert},s),d=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.append("cacheControl",u.cacheControl)):(l=r,d["cache-control"]=`max-age=${u.cacheControl}`,d["content-type"]=u.contentType);const p=yield this.fetch(c.toString(),{method:"PUT",body:l,headers:d}),m=yield p.json();return p.ok?{data:{path:i,fullPath:m.Key},error:null}:{data:null,error:m}}catch(l){if(me(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(e,t){return xe(this,void 0,void 0,function*(){try{let r=this._getFinalPath(e);const s=Object.assign({},this.headers);t?.upsert&&(s["x-upsert"]="true");const i=yield Lt(this.fetch,`${this.url}/object/upload/sign/${r}`,{},{headers:s}),o=new URL(this.url+i.url),c=o.searchParams.get("token");if(!c)throw new Pl("No token returned by API");return{data:{signedUrl:o.toString(),path:e,token:c},error:null}}catch(r){if(me(r))return{data:null,error:r};throw r}})}update(e,t,r){return xe(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,t,r)})}move(e,t,r){return xe(this,void 0,void 0,function*(){try{return{data:yield Lt(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:r?.destinationBucket},{headers:this.headers}),error:null}}catch(s){if(me(s))return{data:null,error:s};throw s}})}copy(e,t,r){return xe(this,void 0,void 0,function*(){try{return{data:{path:(yield Lt(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:r?.destinationBucket},{headers:this.headers})).Key},error:null}}catch(s){if(me(s))return{data:null,error:s};throw s}})}createSignedUrl(e,t,r){return xe(this,void 0,void 0,function*(){try{let s=this._getFinalPath(e),i=yield Lt(this.fetch,`${this.url}/object/sign/${s}`,Object.assign({expiresIn:t},r?.transform?{transform:r.transform}:{}),{headers:this.headers});const o=r?.download?`&download=${r.download===!0?"":r.download}`:"";return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${o}`)},{data:i,error:null}}catch(s){if(me(s))return{data:null,error:s};throw s}})}createSignedUrls(e,t,r){return xe(this,void 0,void 0,function*(){try{const s=yield Lt(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:t,paths:e},{headers:this.headers}),i=r?.download?`&download=${r.download===!0?"":r.download}`:"";return{data:s.map(o=>Object.assign(Object.assign({},o),{signedUrl:o.signedURL?encodeURI(`${this.url}${o.signedURL}${i}`):null})),error:null}}catch(s){if(me(s))return{data:null,error:s};throw s}})}download(e,t){return xe(this,void 0,void 0,function*(){const s=typeof t?.transform<"u"?"render/image/authenticated":"object",i=this.transformOptsToQueryString(t?.transform||{}),o=i?`?${i}`:"";try{const c=this._getFinalPath(e);return{data:yield(yield ro(this.fetch,`${this.url}/${s}/${c}${o}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(c){if(me(c))return{data:null,error:c};throw c}})}info(e){return xe(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{const r=yield ro(this.fetch,`${this.url}/object/info/${t}`,{headers:this.headers});return{data:fc(r),error:null}}catch(r){if(me(r))return{data:null,error:r};throw r}})}exists(e){return xe(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{return yield YP(this.fetch,`${this.url}/object/${t}`,{headers:this.headers}),{data:!0,error:null}}catch(r){if(me(r)&&r instanceof dc){const s=r.originalError;if([400,404].includes(s?.status))return{data:!1,error:r}}throw r}})}getPublicUrl(e,t){const r=this._getFinalPath(e),s=[],i=t?.download?`download=${t.download===!0?"":t.download}`:"";i!==""&&s.push(i);const c=typeof t?.transform<"u"?"render/image":"object",l=this.transformOptsToQueryString(t?.transform||{});l!==""&&s.push(l);let u=s.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${c}/public/${r}${u}`)}}}remove(e){return xe(this,void 0,void 0,function*(){try{return{data:yield u_(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(t){if(me(t))return{data:null,error:t};throw t}})}list(e,t,r){return xe(this,void 0,void 0,function*(){try{const s=Object.assign(Object.assign(Object.assign({},ZP),t),{prefix:e||""});return{data:yield Lt(this.fetch,`${this.url}/object/list/${this.bucketId}`,s,{headers:this.headers},r),error:null}}catch(s){if(me(s))return{data:null,error:s};throw s}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}}const tk="2.7.1",nk={"X-Client-Info":`storage-js/${tk}`};var qn=function(n,e,t,r){function s(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function c(d){try{u(r.next(d))}catch(p){o(p)}}function l(d){try{u(r.throw(d))}catch(p){o(p)}}function u(d){d.done?i(d.value):s(d.value).then(c,l)}u((r=r.apply(n,e||[])).next())})};class rk{constructor(e,t={},r){this.url=e,this.headers=Object.assign(Object.assign({},nk),t),this.fetch=l_(r)}listBuckets(){return qn(this,void 0,void 0,function*(){try{return{data:yield ro(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(me(e))return{data:null,error:e};throw e}})}getBucket(e){return qn(this,void 0,void 0,function*(){try{return{data:yield ro(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(t){if(me(t))return{data:null,error:t};throw t}})}createBucket(e,t={public:!1}){return qn(this,void 0,void 0,function*(){try{return{data:yield Lt(this.fetch,`${this.url}/bucket`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(me(r))return{data:null,error:r};throw r}})}updateBucket(e,t){return qn(this,void 0,void 0,function*(){try{return{data:yield XP(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(me(r))return{data:null,error:r};throw r}})}emptyBucket(e){return qn(this,void 0,void 0,function*(){try{return{data:yield Lt(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(t){if(me(t))return{data:null,error:t};throw t}})}deleteBucket(e){return qn(this,void 0,void 0,function*(){try{return{data:yield u_(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(me(t))return{data:null,error:t};throw t}})}}class sk extends rk{constructor(e,t={},r){super(e,t,r)}from(e){return new ek(this.url,this.headers,e,this.fetch)}}const ik="2.49.4";let Gr="";typeof Deno<"u"?Gr="deno":typeof document<"u"?Gr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Gr="react-native":Gr="node";const ok={"X-Client-Info":`supabase-js-${Gr}/${ik}`},ak={headers:ok},ck={schema:"public"},lk={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},uk={};var hk=function(n,e,t,r){function s(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function c(d){try{u(r.next(d))}catch(p){o(p)}}function l(d){try{u(r.throw(d))}catch(p){o(p)}}function u(d){d.done?i(d.value):s(d.value).then(c,l)}u((r=r.apply(n,e||[])).next())})};const dk=n=>{let e;return n?e=n:typeof fetch>"u"?e=Zm:e=fetch,(...t)=>e(...t)},fk=()=>typeof Headers>"u"?e_:Headers,pk=(n,e,t)=>{const r=dk(t),s=fk();return(i,o)=>hk(void 0,void 0,void 0,function*(){var c;const l=(c=yield e())!==null&&c!==void 0?c:n;let u=new s(o?.headers);return u.has("apikey")||u.set("apikey",n),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),r(i,Object.assign(Object.assign({},o),{headers:u}))})};var gk=function(n,e,t,r){function s(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function c(d){try{u(r.next(d))}catch(p){o(p)}}function l(d){try{u(r.throw(d))}catch(p){o(p)}}function u(d){d.done?i(d.value):s(d.value).then(c,l)}u((r=r.apply(n,e||[])).next())})};function mk(n){return n.replace(/\/$/,"")}function _k(n,e){const{db:t,auth:r,realtime:s,global:i}=n,{db:o,auth:c,realtime:l,global:u}=e,d={db:Object.assign(Object.assign({},o),t),auth:Object.assign(Object.assign({},c),r),realtime:Object.assign(Object.assign({},l),s),global:Object.assign(Object.assign({},u),i),accessToken:()=>gk(this,void 0,void 0,function*(){return""})};return n.accessToken?d.accessToken=n.accessToken:delete d.accessToken,d}const h_="2.69.1",Jn=30*1e3,pc=3,Sa=pc*Jn,yk="http://localhost:9999",vk="supabase.auth.token",wk={"X-Client-Info":`gotrue-js/${h_}`},gc="X-Supabase-Api-Version",d_={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Tk=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Ek=6e5;class kl extends Error{constructor(e,t,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=r}}function H(n){return typeof n=="object"&&n!==null&&"__isAuthError"in n}class Ik extends kl{constructor(e,t,r){super(e,t,r),this.name="AuthApiError",this.status=t,this.code=r}}function bk(n){return H(n)&&n.name==="AuthApiError"}class f_ extends kl{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class an extends kl{constructor(e,t,r,s){super(e,r,s),this.name=t,this.status=r}}class Nt extends an{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Ak(n){return H(n)&&n.name==="AuthSessionMissingError"}class Pa extends an{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class pi extends an{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class gi extends an{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function Rk(n){return H(n)&&n.name==="AuthImplicitGrantRedirectError"}class tf extends an{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class mc extends an{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function ka(n){return H(n)&&n.name==="AuthRetryableFetchError"}class nf extends an{constructor(e,t,r){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=r}}class is extends an{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const rf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),sf=` 	
\r=`.split(""),Sk=(()=>{const n=new Array(128);for(let e=0;e<n.length;e+=1)n[e]=-1;for(let e=0;e<sf.length;e+=1)n[sf[e].charCodeAt(0)]=-2;for(let e=0;e<rf.length;e+=1)n[rf[e].charCodeAt(0)]=e;return n})();function p_(n,e,t){const r=Sk[n];if(r>-1)for(e.queue=e.queue<<6|r,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`)}}function of(n){const e=[],t=o=>{e.push(String.fromCodePoint(o))},r={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},i=o=>{Ck(o,r,t)};for(let o=0;o<n.length;o+=1)p_(n.charCodeAt(o),s,i);return e.join("")}function Pk(n,e){if(n<=127){e(n);return}else if(n<=2047){e(192|n>>6),e(128|n&63);return}else if(n<=65535){e(224|n>>12),e(128|n>>6&63),e(128|n&63);return}else if(n<=1114111){e(240|n>>18),e(128|n>>12&63),e(128|n>>6&63),e(128|n&63);return}throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`)}function kk(n,e){for(let t=0;t<n.length;t+=1){let r=n.charCodeAt(t);if(r>55295&&r<=56319){const s=(r-55296)*1024&65535;r=(n.charCodeAt(t+1)-56320&65535|s)+65536,t+=1}Pk(r,e)}}function Ck(n,e,t){if(e.utf8seq===0){if(n<=127){t(n);return}for(let r=1;r<6;r+=1)if((n>>7-r&1)===0){e.utf8seq=r;break}if(e.utf8seq===2)e.codepoint=n&31;else if(e.utf8seq===3)e.codepoint=n&15;else if(e.utf8seq===4)e.codepoint=n&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(n<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|n&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function Ok(n){const e=[],t={queue:0,queuedBits:0},r=s=>{e.push(s)};for(let s=0;s<n.length;s+=1)p_(n.charCodeAt(s),t,r);return new Uint8Array(e)}function Nk(n){const e=[];return kk(n,t=>e.push(t)),new Uint8Array(e)}function Dk(n){return Math.round(Date.now()/1e3)+n}function xk(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){const e=Math.random()*16|0;return(n=="x"?e:e&3|8).toString(16)})}const nt=()=>typeof window<"u"&&typeof document<"u",dn={tested:!1,writable:!1},os=()=>{if(!nt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(dn.tested)return dn.writable;const n=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(n,n),globalThis.localStorage.removeItem(n),dn.tested=!0,dn.writable=!0}catch{dn.tested=!0,dn.writable=!1}return dn.writable};function Lk(n){const e={},t=new URL(n);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((s,i)=>{e[i]=s})}catch{}return t.searchParams.forEach((r,s)=>{e[s]=r}),e}const g_=n=>{let e;return n?e=n:typeof fetch>"u"?e=(...t)=>ct(async()=>{const{default:r}=await Promise.resolve().then(()=>Tr);return{default:r}},void 0).then(({default:r})=>r(...t)):e=fetch,(...t)=>e(...t)},Vk=n=>typeof n=="object"&&n!==null&&"status"in n&&"ok"in n&&"json"in n&&typeof n.json=="function",m_=async(n,e,t)=>{await n.setItem(e,JSON.stringify(t))},mi=async(n,e)=>{const t=await n.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return t}},_i=async(n,e)=>{await n.removeItem(e)};class Oo{constructor(){this.promise=new Oo.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}Oo.promiseConstructor=Promise;function Ca(n){const e=n.split(".");if(e.length!==3)throw new is("Invalid JWT structure");for(let r=0;r<e.length;r++)if(!Tk.test(e[r]))throw new is("JWT not in base64url format");return{header:JSON.parse(of(e[0])),payload:JSON.parse(of(e[1])),signature:Ok(e[2]),raw:{header:e[0],payload:e[1]}}}async function Mk(n){return await new Promise(e=>{setTimeout(()=>e(null),n)})}function Uk(n,e){return new Promise((r,s)=>{(async()=>{for(let i=0;i<1/0;i++)try{const o=await n(i);if(!e(i,null,o)){r(o);return}}catch(o){if(!e(i,o)){s(o);return}}})()})}function Fk(n){return("0"+n.toString(16)).substr(-2)}function jk(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=t.length;let s="";for(let i=0;i<56;i++)s+=t.charAt(Math.floor(Math.random()*r));return s}return crypto.getRandomValues(e),Array.from(e,Fk).join("")}async function $k(n){const t=new TextEncoder().encode(n),r=await crypto.subtle.digest("SHA-256",t),s=new Uint8Array(r);return Array.from(s).map(i=>String.fromCharCode(i)).join("")}async function Bk(n){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),n;const t=await $k(n);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function zn(n,e,t=!1){const r=jk();let s=r;t&&(s+="/PASSWORD_RECOVERY"),await m_(n,`${e}-code-verifier`,s);const i=await Bk(r);return[i,r===i?"plain":"s256"]}const qk=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function zk(n){const e=n.headers.get(gc);if(!e||!e.match(qk))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function Hk(n){if(!n)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(n<=e)throw new Error("JWT has expired")}function Wk(n){switch(n){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}var Kk=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t};const pn=n=>n.msg||n.message||n.error_description||n.error||JSON.stringify(n),Gk=[502,503,504];async function af(n){var e;if(!Vk(n))throw new mc(pn(n),0);if(Gk.includes(n.status))throw new mc(pn(n),n.status);let t;try{t=await n.json()}catch(i){throw new f_(pn(i),i)}let r;const s=zk(n);if(s&&s.getTime()>=d_["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?r=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(r=t.error_code),r){if(r==="weak_password")throw new nf(pn(t),n.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(r==="session_not_found")throw new Nt}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((i,o)=>i&&typeof o=="string",!0))throw new nf(pn(t),n.status,t.weak_password.reasons);throw new Ik(pn(t),n.status||500,r)}const Qk=(n,e,t,r)=>{const s={method:n,headers:e?.headers||{}};return n==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e?.headers),s.body=JSON.stringify(r),Object.assign(Object.assign({},s),t))};async function G(n,e,t,r){var s;const i=Object.assign({},r?.headers);i[gc]||(i[gc]=d_["2024-01-01"].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);const o=(s=r?.query)!==null&&s!==void 0?s:{};r?.redirectTo&&(o.redirect_to=r.redirectTo);const c=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",l=await Jk(n,e,t+c,{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(l):{data:Object.assign({},l),error:null}}async function Jk(n,e,t,r,s,i){const o=Qk(e,r,s,i);let c;try{c=await n(t,Object.assign({},o))}catch(l){throw console.error(l),new mc(pn(l),0)}if(c.ok||await af(c),r?.noResolveJson)return c;try{return await c.json()}catch(l){await af(l)}}function Dt(n){var e;let t=null;eC(n)&&(t=Object.assign({},n),n.expires_at||(t.expires_at=Dk(n.expires_in)));const r=(e=n.user)!==null&&e!==void 0?e:n;return{data:{session:t,user:r},error:null}}function cf(n){const e=Dt(n);return!e.error&&n.weak_password&&typeof n.weak_password=="object"&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.message&&typeof n.weak_password.message=="string"&&n.weak_password.reasons.reduce((t,r)=>t&&typeof r=="string",!0)&&(e.data.weak_password=n.weak_password),e}function $t(n){var e;return{data:{user:(e=n.user)!==null&&e!==void 0?e:n},error:null}}function Xk(n){return{data:n,error:null}}function Yk(n){const{action_link:e,email_otp:t,hashed_token:r,redirect_to:s,verification_type:i}=n,o=Kk(n,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),c={action_link:e,email_otp:t,hashed_token:r,redirect_to:s,verification_type:i},l=Object.assign({},o);return{data:{properties:c,user:l},error:null}}function Zk(n){return n}function eC(n){return n.access_token&&n.refresh_token&&n.expires_in}var tC=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t};class nC{constructor({url:e="",headers:t={},fetch:r}){this.url=e,this.headers=t,this.fetch=g_(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(e,t="global"){try{return await G(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(H(r))return{data:null,error:r};throw r}}async inviteUserByEmail(e,t={}){try{return await G(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:$t})}catch(r){if(H(r))return{data:{user:null},error:r};throw r}}async generateLink(e){try{const{options:t}=e,r=tC(e,["options"]),s=Object.assign(Object.assign({},r),t);return"newEmail"in r&&(s.new_email=r?.newEmail,delete s.newEmail),await G(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:s,headers:this.headers,xform:Yk,redirectTo:t?.redirectTo})}catch(t){if(H(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await G(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:$t})}catch(t){if(H(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,r,s,i,o,c,l;try{const u={nextPage:null,lastPage:0,total:0},d=await G(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(t=e?.page)===null||t===void 0?void 0:t.toString())!==null&&r!==void 0?r:"",per_page:(i=(s=e?.perPage)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:""},xform:Zk});if(d.error)throw d.error;const p=await d.json(),m=(o=d.headers.get("x-total-count"))!==null&&o!==void 0?o:0,w=(l=(c=d.headers.get("link"))===null||c===void 0?void 0:c.split(","))!==null&&l!==void 0?l:[];return w.length>0&&(w.forEach(R=>{const N=parseInt(R.split(";")[0].split("=")[1].substring(0,1)),P=JSON.parse(R.split(";")[1].split("=")[1]);u[`${P}Page`]=N}),u.total=parseInt(m)),{data:Object.assign(Object.assign({},p),u),error:null}}catch(u){if(H(u))return{data:{users:[]},error:u};throw u}}async getUserById(e){try{return await G(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:$t})}catch(t){if(H(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){try{return await G(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:$t})}catch(r){if(H(r))return{data:{user:null},error:r};throw r}}async deleteUser(e,t=!1){try{return await G(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:$t})}catch(r){if(H(r))return{data:{user:null},error:r};throw r}}async _listFactors(e){try{const{data:t,error:r}=await G(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:s=>({data:{factors:s},error:null})});return{data:t,error:r}}catch(t){if(H(t))return{data:null,error:t};throw t}}async _deleteFactor(e){try{return{data:await G(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(H(t))return{data:null,error:t};throw t}}}const rC={getItem:n=>os()?globalThis.localStorage.getItem(n):null,setItem:(n,e)=>{os()&&globalThis.localStorage.setItem(n,e)},removeItem:n=>{os()&&globalThis.localStorage.removeItem(n)}};function lf(n={}){return{getItem:e=>n[e]||null,setItem:(e,t)=>{n[e]=t},removeItem:e=>{delete n[e]}}}function sC(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Hn={debug:!!(globalThis&&os()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class __ extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class iC extends __{}async function oC(n,e,t){Hn.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",n,e);const r=new globalThis.AbortController;return e>0&&setTimeout(()=>{r.abort(),Hn.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",n)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(n,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:r.signal},async s=>{if(s){Hn.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",n,s.name);try{return await t()}finally{Hn.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",n,s.name)}}else{if(e===0)throw Hn.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",n),new iC(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`);if(Hn.debug)try{const i=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(i,null,"  "))}catch(i){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",i)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await t()}}))}sC();const aC={url:yk,storageKey:vk,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:wk,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function uf(n,e,t){return await t()}class ys{constructor(e){var t,r;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=ys.nextInstanceID,ys.nextInstanceID+=1,this.instanceID>0&&nt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const s=Object.assign(Object.assign({},aC),e);if(this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.persistSession=s.persistSession,this.storageKey=s.storageKey,this.autoRefreshToken=s.autoRefreshToken,this.admin=new nC({url:s.url,headers:s.headers,fetch:s.fetch}),this.url=s.url,this.headers=s.headers,this.fetch=g_(s.fetch),this.lock=s.lock||uf,this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,s.lock?this.lock=s.lock:nt()&&(!((t=globalThis?.navigator)===null||t===void 0)&&t.locks)?this.lock=oC:this.lock=uf,this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?s.storage?this.storage=s.storage:os()?this.storage=rC:(this.memoryStorage={},this.storage=lf(this.memoryStorage)):(this.memoryStorage={},this.storage=lf(this.memoryStorage)),nt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",i)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async i=>{this._debug("received broadcast notification from other tab or client",i),await this._notifyAllSubscribers(i.data.event,i.data.session,!1)})}this.initialize()}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${h_}) ${new Date().toISOString()}`,...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{const t=Lk(window.location.href);let r="none";if(this._isImplicitGrantCallback(t)?r="implicit":await this._isPKCECallback(t)&&(r="pkce"),nt()&&this.detectSessionInUrl&&r!=="none"){const{data:s,error:i}=await this._getSessionFromURL(t,r);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),Rk(i)){const l=(e=i.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return await this._removeSession(),{error:i}}const{session:o,redirectType:c}=s;return this._debug("#_initialize()","detected session in URL",o,"redirect type",c),await this._saveSession(o),setTimeout(async()=>{c==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",o):await this._notifyAllSubscribers("SIGNED_IN",o)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return H(t)?{error:t}:{error:new f_("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,r,s;try{const i=await G(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(t=e?.options)===null||t===void 0?void 0:t.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(s=e?.options)===null||s===void 0?void 0:s.captchaToken}},xform:Dt}),{data:o,error:c}=i;if(c||!o)return{data:{user:null,session:null},error:c};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(H(i))return{data:{user:null,session:null},error:i};throw i}}async signUp(e){var t,r,s;try{let i;if("email"in e){const{email:d,password:p,options:m}=e;let w=null,R=null;this.flowType==="pkce"&&([w,R]=await zn(this.storage,this.storageKey)),i=await G(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:m?.emailRedirectTo,body:{email:d,password:p,data:(t=m?.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:m?.captchaToken},code_challenge:w,code_challenge_method:R},xform:Dt})}else if("phone"in e){const{phone:d,password:p,options:m}=e;i=await G(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:d,password:p,data:(r=m?.data)!==null&&r!==void 0?r:{},channel:(s=m?.channel)!==null&&s!==void 0?s:"sms",gotrue_meta_security:{captcha_token:m?.captchaToken}},xform:Dt})}else throw new pi("You must provide either an email or phone number and a password");const{data:o,error:c}=i;if(c||!o)return{data:{user:null,session:null},error:c};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(H(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithPassword(e){try{let t;if("email"in e){const{email:i,password:o,options:c}=e;t=await G(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:o,gotrue_meta_security:{captcha_token:c?.captchaToken}},xform:cf})}else if("phone"in e){const{phone:i,password:o,options:c}=e;t=await G(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:o,gotrue_meta_security:{captcha_token:c?.captchaToken}},xform:cf})}else throw new pi("You must provide either an email or phone number and a password");const{data:r,error:s}=t;return s?{data:{user:null,session:null},error:s}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new Pa}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:s})}catch(t){if(H(t))return{data:{user:null,session:null},error:t};throw t}}async signInWithOAuth(e){var t,r,s,i;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(s=e.options)===null||s===void 0?void 0:s.queryParams,skipBrowserRedirect:(i=e.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async _exchangeCodeForSession(e){const t=await mi(this.storage,`${this.storageKey}-code-verifier`),[r,s]=(t??"").split("/");try{const{data:i,error:o}=await G(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:Dt});if(await _i(this.storage,`${this.storageKey}-code-verifier`),o)throw o;return!i||!i.session||!i.user?{data:{user:null,session:null,redirectType:null},error:new Pa}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign(Object.assign({},i),{redirectType:s??null}),error:o})}catch(i){if(H(i))return{data:{user:null,session:null,redirectType:null},error:i};throw i}}async signInWithIdToken(e){try{const{options:t,provider:r,token:s,access_token:i,nonce:o}=e,c=await G(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:s,access_token:i,nonce:o,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:Dt}),{data:l,error:u}=c;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new Pa}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(t){if(H(t))return{data:{user:null,session:null},error:t};throw t}}async signInWithOtp(e){var t,r,s,i,o;try{if("email"in e){const{email:c,options:l}=e;let u=null,d=null;this.flowType==="pkce"&&([u,d]=await zn(this.storage,this.storageKey));const{error:p}=await G(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:c,data:(t=l?.data)!==null&&t!==void 0?t:{},create_user:(r=l?.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l?.captchaToken},code_challenge:u,code_challenge_method:d},redirectTo:l?.emailRedirectTo});return{data:{user:null,session:null},error:p}}if("phone"in e){const{phone:c,options:l}=e,{data:u,error:d}=await G(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:c,data:(s=l?.data)!==null&&s!==void 0?s:{},create_user:(i=l?.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l?.captchaToken},channel:(o=l?.channel)!==null&&o!==void 0?o:"sms"}});return{data:{user:null,session:null,messageId:u?.message_id},error:d}}throw new pi("You must provide either an email or phone number.")}catch(c){if(H(c))return{data:{user:null,session:null},error:c};throw c}}async verifyOtp(e){var t,r;try{let s,i;"options"in e&&(s=(t=e.options)===null||t===void 0?void 0:t.redirectTo,i=(r=e.options)===null||r===void 0?void 0:r.captchaToken);const{data:o,error:c}=await G(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:i}}),redirectTo:s,xform:Dt});if(c)throw c;if(!o)throw new Error("An error occurred on token verification.");const l=o.session,u=o.user;return l?.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(H(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithSSO(e){var t,r,s;try{let i=null,o=null;return this.flowType==="pkce"&&([i,o]=await zn(this.storage,this.storageKey)),await G(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(r=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&r!==void 0?r:void 0}),!((s=e?.options)===null||s===void 0)&&s.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:o}),headers:this.headers,xform:Xk})}catch(i){if(H(i))return{data:null,error:i};throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:r}=e;if(r)throw r;if(!t)throw new Nt;const{error:s}=await G(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return{data:{user:null,session:null},error:s}})}catch(e){if(H(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:r,type:s,options:i}=e,{error:o}=await G(this.fetch,"POST",t,{headers:this.headers,body:{email:r,type:s,gotrue_meta_security:{captcha_token:i?.captchaToken}},redirectTo:i?.emailRedirectTo});return{data:{user:null,session:null},error:o}}else if("phone"in e){const{phone:r,type:s,options:i}=e,{data:o,error:c}=await G(this.fetch,"POST",t,{headers:this.headers,body:{phone:r,type:s,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return{data:{user:null,session:null,messageId:o?.message_id},error:c}}throw new pi("You must provide either an email or phone number and a type")}catch(t){if(H(t))return{data:{user:null,session:null},error:t};throw t}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await r,await t()))();return this.pendingInLock.push((async()=>{try{await s}catch{}})()),s}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=t();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const s=[...this.pendingInLock];await Promise.all(s),this.pendingInLock.splice(0,s.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await mi(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const r=e.expires_at?e.expires_at*1e3-Date.now()<Sa:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.storage.isServer){let o=this.suppressGetSessionWarning;e=new Proxy(e,{get:(l,u,d)=>(!o&&u==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),o=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,u,d))})}return{data:{session:e},error:null}}const{session:s,error:i}=await this._callRefreshToken(e.refresh_token);return i?{data:{session:null},error:i}:{data:{session:s},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await G(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:$t}):await this._useSession(async t=>{var r,s,i;const{data:o,error:c}=t;if(c)throw c;return!(!((r=o.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Nt}:await G(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(s=o.session)===null||s===void 0?void 0:s.access_token)!==null&&i!==void 0?i:void 0,xform:$t})})}catch(t){if(H(t))return Ak(t)&&(await this._removeSession(),await _i(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:t};throw t}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async r=>{const{data:s,error:i}=r;if(i)throw i;if(!s.session)throw new Nt;const o=s.session;let c=null,l=null;this.flowType==="pkce"&&e.email!=null&&([c,l]=await zn(this.storage,this.storageKey));const{data:u,error:d}=await G(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:c,code_challenge_method:l}),jwt:o.access_token,xform:$t});if(d)throw d;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),{data:{user:o.user},error:null}})}catch(r){if(H(r))return{data:{user:null},error:r};throw r}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Nt;const t=Date.now()/1e3;let r=t,s=!0,i=null;const{payload:o}=Ca(e.access_token);if(o.exp&&(r=o.exp,s=r<=t),s){const{session:c,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!c)return{data:{user:null,session:null},error:null};i=c}else{const{data:c,error:l}=await this._getUser(e.access_token);if(l)throw l;i={access_token:e.access_token,refresh_token:e.refresh_token,user:c.user,token_type:"bearer",expires_in:r-t,expires_at:r},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return{data:{user:i.user,session:i},error:null}}catch(t){if(H(t))return{data:{session:null,user:null},error:t};throw t}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{var r;if(!e){const{data:o,error:c}=t;if(c)throw c;e=(r=o.session)!==null&&r!==void 0?r:void 0}if(!e?.refresh_token)throw new Nt;const{session:s,error:i}=await this._callRefreshToken(e.refresh_token);return i?{data:{user:null,session:null},error:i}:s?{data:{user:s.user,session:s},error:null}:{data:{user:null,session:null},error:null}})}catch(t){if(H(t))return{data:{user:null,session:null},error:t};throw t}}async _getSessionFromURL(e,t){try{if(!nt())throw new gi("No browser detected.");if(e.error||e.error_description||e.error_code)throw new gi(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new tf("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new gi("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new tf("No code detected.");const{data:B,error:M}=await this._exchangeCodeForSession(e.code);if(M)throw M;const F=new URL(window.location.href);return F.searchParams.delete("code"),window.history.replaceState(window.history.state,"",F.toString()),{data:{session:B.session,redirectType:null},error:null}}const{provider_token:r,provider_refresh_token:s,access_token:i,refresh_token:o,expires_in:c,expires_at:l,token_type:u}=e;if(!i||!c||!o||!u)throw new gi("No session defined in URL");const d=Math.round(Date.now()/1e3),p=parseInt(c);let m=d+p;l&&(m=parseInt(l));const w=m-d;w*1e3<=Jn&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${p}s`);const R=m-p;d-R>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",R,m,d):d-R<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",R,m,d);const{data:N,error:P}=await this._getUser(i);if(P)throw P;const V={provider_token:r,provider_refresh_token:s,access_token:i,expires_in:p,expires_at:m,refresh_token:o,token_type:u,user:N.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:V,redirectType:e.type},error:null}}catch(r){if(H(r))return{data:{session:null,redirectType:null},error:r};throw r}}_isImplicitGrantCallback(e){return!!(e.access_token||e.error_description)}async _isPKCECallback(e){const t=await mi(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var r;const{data:s,error:i}=t;if(i)return{error:i};const o=(r=s.session)===null||r===void 0?void 0:r.access_token;if(o){const{error:c}=await this.admin.signOut(o,e);if(c&&!(bk(c)&&(c.status===404||c.status===401||c.status===403)))return{error:c}}return e!=="others"&&(await this._removeSession(),await _i(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(e){const t=xk(),r={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,r),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(t)})))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async t=>{var r,s;try{const{data:{session:i},error:o}=t;if(o)throw o;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",e,"session",i)}catch(i){await((s=this.stateChangeEmitters.get(e))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",i),console.error(i)}})}async resetPasswordForEmail(e,t={}){let r=null,s=null;this.flowType==="pkce"&&([r,s]=await zn(this.storage,this.storageKey,!0));try{return await G(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:s,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(i){if(H(i))return{data:null,error:i};throw i}}async getUserIdentities(){var e;try{const{data:t,error:r}=await this.getUser();if(r)throw r;return{data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null}}catch(t){if(H(t))return{data:null,error:t};throw t}}async linkIdentity(e){var t;try{const{data:r,error:s}=await this._useSession(async i=>{var o,c,l,u,d;const{data:p,error:m}=i;if(m)throw m;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(o=e.options)===null||o===void 0?void 0:o.redirectTo,scopes:(c=e.options)===null||c===void 0?void 0:c.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await G(this.fetch,"GET",w,{headers:this.headers,jwt:(d=(u=p.session)===null||u===void 0?void 0:u.access_token)!==null&&d!==void 0?d:void 0})});if(s)throw s;return nt()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(r?.url),{data:{provider:e.provider,url:r?.url},error:null}}catch(r){if(H(r))return{data:{provider:e.provider,url:null},error:r};throw r}}async unlinkIdentity(e){try{return await this._useSession(async t=>{var r,s;const{data:i,error:o}=t;if(o)throw o;return await G(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(s=(r=i.session)===null||r===void 0?void 0:r.access_token)!==null&&s!==void 0?s:void 0})})}catch(t){if(H(t))return{data:null,error:t};throw t}}async _refreshAccessToken(e){const t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,"begin");try{const r=Date.now();return await Uk(async s=>(s>0&&await Mk(200*Math.pow(2,s-1)),this._debug(t,"refreshing attempt",s),await G(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:Dt})),(s,i)=>{const o=200*Math.pow(2,s);return i&&ka(i)&&Date.now()+o-r<Jn})}catch(r){if(this._debug(t,"error",r),H(r))return{data:{session:null,user:null},error:r};throw r}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const r=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",r),nt()&&!t.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e;const t="#_recoverAndRefresh()";this._debug(t,"begin");try{const r=await mi(this.storage,this.storageKey);if(this._debug(t,"session from storage",r),!this._isValidSession(r)){this._debug(t,"session is not valid"),r!==null&&await this._removeSession();return}const s=((e=r.expires_at)!==null&&e!==void 0?e:1/0)*1e3-Date.now()<Sa;if(this._debug(t,`session has${s?"":" not"} expired with margin of ${Sa}s`),s){if(this.autoRefreshToken&&r.refresh_token){const{error:i}=await this._callRefreshToken(r.refresh_token);i&&(console.error(i),ka(i)||(this._debug(t,"refresh failed with a non-retryable error, removing the session",i),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(t,"error",r),console.error(r);return}finally{this._debug(t,"end")}}async _callRefreshToken(e){var t,r;if(!e)throw new Nt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const s=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(s,"begin");try{this.refreshingDeferred=new Oo;const{data:i,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!i.session)throw new Nt;await this._saveSession(i.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",i.session);const c={session:i.session,error:null};return this.refreshingDeferred.resolve(c),c}catch(i){if(this._debug(s,"error",i),H(i)){const o={session:null,error:i};return ka(i)||await this._removeSession(),(t=this.refreshingDeferred)===null||t===void 0||t.resolve(o),o}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(i),i}finally{this.refreshingDeferred=null,this._debug(s,"end")}}async _notifyAllSubscribers(e,t,r=!0){const s=`#_notifyAllSubscribers(${e})`;this._debug(s,"begin",t,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:t});const i=[],o=Array.from(this.stateChangeEmitters.values()).map(async c=>{try{await c.callback(e,t)}catch(l){i.push(l)}});if(await Promise.all(o),i.length>0){for(let c=0;c<i.length;c+=1)console.error(i[c]);throw i[0]}}finally{this._debug(s,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await m_(this.storage,this.storageKey,e)}async _removeSession(){this._debug("#_removeSession()"),await _i(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&nt()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Jn);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:r}}=t;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((r.expires_at*1e3-e)/Jn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${Jn}ms, refresh threshold is ${pc} ticks`),s<=pc&&await this._callRefreshToken(r.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof __)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!nt()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,r){const s=[`provider=${encodeURIComponent(t)}`];if(r?.redirectTo&&s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r?.scopes&&s.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[i,o]=await zn(this.storage,this.storageKey),c=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(o)}`});s.push(c.toString())}if(r?.queryParams){const i=new URLSearchParams(r.queryParams);s.push(i.toString())}return r?.skipBrowserRedirect&&s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${s.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var r;const{data:s,error:i}=t;return i?{data:null,error:i}:await G(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=s?.session)===null||r===void 0?void 0:r.access_token})})}catch(t){if(H(t))return{data:null,error:t};throw t}}async _enroll(e){try{return await this._useSession(async t=>{var r,s;const{data:i,error:o}=t;if(o)return{data:null,error:o};const c=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:{issuer:e.issuer}),{data:l,error:u}=await G(this.fetch,"POST",`${this.url}/factors`,{body:c,headers:this.headers,jwt:(r=i?.session)===null||r===void 0?void 0:r.access_token});return u?{data:null,error:u}:(e.factorType==="totp"&&(!((s=l?.totp)===null||s===void 0)&&s.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(t){if(H(t))return{data:null,error:t};throw t}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var r;const{data:s,error:i}=t;if(i)return{data:null,error:i};const{data:o,error:c}=await G(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:(r=s?.session)===null||r===void 0?void 0:r.access_token});return c?{data:null,error:c}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),{data:o,error:c})})}catch(t){if(H(t))return{data:null,error:t};throw t}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var r;const{data:s,error:i}=t;return i?{data:null,error:i}:await G(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:{channel:e.channel},headers:this.headers,jwt:(r=s?.session)===null||r===void 0?void 0:r.access_token})})}catch(t){if(H(t))return{data:null,error:t};throw t}})}async _challengeAndVerify(e){const{data:t,error:r}=await this._challenge({factorId:e.factorId});return r?{data:null,error:r}:await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){const{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};const r=e?.factors||[],s=r.filter(o=>o.factor_type==="totp"&&o.status==="verified"),i=r.filter(o=>o.factor_type==="phone"&&o.status==="verified");return{data:{all:r,totp:s,phone:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async e=>{var t,r;const{data:{session:s},error:i}=e;if(i)return{data:null,error:i};if(!s)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:o}=Ca(s.access_token);let c=null;o.aal&&(c=o.aal);let l=c;((r=(t=s.user.factors)===null||t===void 0?void 0:t.filter(p=>p.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(l="aal2");const d=o.amr||[];return{data:{currentLevel:c,nextLevel:l,currentAuthenticationMethods:d},error:null}}))}async fetchJwk(e,t={keys:[]}){let r=t.keys.find(o=>o.kid===e);if(r||(r=this.jwks.keys.find(o=>o.kid===e),r&&this.jwks_cached_at+Ek>Date.now()))return r;const{data:s,error:i}=await G(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(i)throw i;if(!s.keys||s.keys.length===0)throw new is("JWKS is empty");if(this.jwks=s,this.jwks_cached_at=Date.now(),r=s.keys.find(o=>o.kid===e),!r)throw new is("No matching signing key found in JWKS");return r}async getClaims(e,t={keys:[]}){try{let r=e;if(!r){const{data:w,error:R}=await this.getSession();if(R||!w.session)return{data:null,error:R};r=w.session.access_token}const{header:s,payload:i,signature:o,raw:{header:c,payload:l}}=Ca(r);if(Hk(i.exp),!s.kid||s.alg==="HS256"||!("crypto"in globalThis&&"subtle"in globalThis.crypto)){const{error:w}=await this.getUser(r);if(w)throw w;return{data:{claims:i,header:s,signature:o},error:null}}const u=Wk(s.alg),d=await this.fetchJwk(s.kid,t),p=await crypto.subtle.importKey("jwk",d,u,!0,["verify"]);if(!await crypto.subtle.verify(u,p,o,Nk(`${c}.${l}`)))throw new is("Invalid JWT signature");return{data:{claims:i,header:s,signature:o},error:null}}catch(r){if(H(r))return{data:null,error:r};throw r}}}ys.nextInstanceID=0;const cC=ys;class lC extends cC{constructor(e){super(e)}}var uC=function(n,e,t,r){function s(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function c(d){try{u(r.next(d))}catch(p){o(p)}}function l(d){try{u(r.throw(d))}catch(p){o(p)}}function u(d){d.done?i(d.value):s(d.value).then(c,l)}u((r=r.apply(n,e||[])).next())})};class hC{constructor(e,t,r){var s,i,o;if(this.supabaseUrl=e,this.supabaseKey=t,!e)throw new Error("supabaseUrl is required.");if(!t)throw new Error("supabaseKey is required.");const c=mk(e);this.realtimeUrl=`${c}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${c}/auth/v1`,this.storageUrl=`${c}/storage/v1`,this.functionsUrl=`${c}/functions/v1`;const l=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,u={db:ck,realtime:uk,auth:Object.assign(Object.assign({},lk),{storageKey:l}),global:ak},d=_k(r??{},u);this.storageKey=(s=d.auth.storageKey)!==null&&s!==void 0?s:"",this.headers=(i=d.global.headers)!==null&&i!==void 0?i:{},d.accessToken?(this.accessToken=d.accessToken,this.auth=new Proxy({},{get:(p,m)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(m)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((o=d.auth)!==null&&o!==void 0?o:{},this.headers,d.global.fetch),this.fetch=pk(t,this._getAccessToken.bind(this),d.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},d.realtime)),this.rest=new kP(`${c}/rest/v1`,{headers:this.headers,schema:d.db.schema,fetch:this.fetch}),d.accessToken||this._listenForAuthEvents()}get functions(){return new _P(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new sk(this.storageUrl,this.headers,this.fetch)}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},r={}){return this.rest.rpc(e,t,r)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e,t;return uC(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:r}=yield this.auth.getSession();return(t=(e=r.session)===null||e===void 0?void 0:e.access_token)!==null&&t!==void 0?t:null})}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:r,storage:s,storageKey:i,flowType:o,lock:c,debug:l},u,d){const p={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new lC({url:this.authUrl,headers:Object.assign(Object.assign({},p),u),storageKey:i,autoRefreshToken:e,persistSession:t,detectSessionInUrl:r,storage:s,flowType:o,lock:c,debug:l,fetch:d,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(e){return new zP(this.realtimeUrl,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,r)=>{this._handleTokenChanged(t,"CLIENT",r?.access_token)})}_handleTokenChanged(e,t,r){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==r?this.changedAccessToken=r:e==="SIGNED_OUT"&&(this.realtime.setAuth(),t=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const dC=(n,e,t)=>new hC(n,e,t),fC="https://hpbfipnhqakrhlnhluze.supabase.co",pC="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Mjc0NDgsImV4cCI6MjA2MDQwMzQ0OH0.kPZLOf0rKMn-FjEFgLG_cefIaRaLDdIILSjHzYK-b1w",hf=dC(fC,pC),yi="images",gC=async()=>{try{const{data:n}=await hf.storage.listBuckets();if(n?.some(t=>t.name===yi))console.log(`Storage bucket '${yi}' already exists`);else{const{error:t}=await hf.storage.createBucket(yi,{public:!0,fileSizeLimit:5242880});if(t)return console.error("Error creating storage bucket:",t),!1;console.log(`Storage bucket '${yi}' created successfully`)}return!0}catch(n){return console.error("Error initializing Supabase storage:",n),!1}};nP();oy.createRoot(document.getElementById("root")).render(O.jsx(pf.StrictMode,{children:O.jsx(Wm,{children:O.jsx(eP,{})})}));typeof window<"u"&&sP();typeof window<"u"&&(hP.init(),gC().then(n=>{n?console.log("Supabase storage initialized successfully"):console.warn("Failed to initialize Supabase storage")}).catch(n=>{console.error("Error initializing Supabase storage:",n)}));export{We as F,GS as L,yi as S,KS as T,wC as a,Xm as b,tb as c,li as d,TC as e,Eb as g,gb as q,hf as s,Km as u,mb as w};
