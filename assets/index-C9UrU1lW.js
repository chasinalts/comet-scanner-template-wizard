const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-CL1SVQZp.js","assets/vendor-ui-B2A3YeRo.js","assets/vendor-react-CTBdW232.js","assets/Signup-CYo75a9O.js","assets/ScannerWizard-uVxG4vdG.js","assets/FormField-CCsVGX-C.js","assets/AdminDashboard-CUoxfXkp.js"])))=>i.map(i=>d[i]);
import{j as C,A as Co,m as Yt}from"./vendor-ui-B2A3YeRo.js";import{b as Gm,g as Km,a as J,u as Sh,N as Ui,c as Qm,L as gu,B as Xm,R as Ym,d as _n,e as Jm}from"./vendor-react-CTBdW232.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var di={},_u;function Zm(){if(_u)return di;_u=1;var n=Gm();return di.createRoot=n.createRoot,di.hydrateRoot=n.hydrateRoot,di}var eg=Zm();const tg=Km(eg),ng="modulepreload",rg=function(n){return"/"+n},yu={},us=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");i=a(t.map(d=>{if(d=rg(d),d in yu)return;yu[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const T=document.createElement("link");if(T.rel=p?"stylesheet":ng,p||(T.as="script"),T.crossOrigin="",T.href=d,l&&T.setAttribute("nonce",l),document.head.appendChild(T),p)return new Promise((R,N)=>{T.addEventListener("load",R),T.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})},ig=()=>{};var vu={};/**
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
 */const Ph=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},sg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,m=(s&3)<<4|c>>4;let T=(c&15)<<2|d>>6,R=d&63;l||(R=64,a||(T=64)),r.push(t[p],t[m],t[T],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ph(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||m==null)throw new og;const T=s<<2|c>>4;if(r.push(T),d!==64){const R=c<<4&240|d>>2;if(r.push(R),m!==64){const N=d<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class og extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ag=function(n){const e=Ph(n);return Ch.encodeByteArray(e,!0)},Fi=function(n){return ag(n).replace(/\./g,"")},kh=function(n){try{return Ch.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ug=()=>cg().__FIREBASE_DEFAULTS__,lg=()=>{if(typeof process>"u"||typeof vu>"u")return;const n=vu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&kh(n[1]);return e&&JSON.parse(e)},ls=()=>{try{return ig()||ug()||lg()||hg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nh=n=>{var e,t;return(t=(e=ls())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Dh=n=>{const e=Nh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Oh=()=>{var n;return(n=ls())===null||n===void 0?void 0:n.config},Vh=n=>{var e;return(e=ls())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class dg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Mh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fi(JSON.stringify(t)),Fi(JSON.stringify(a)),""].join(".")}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function pg(){var n;const e=(n=ls())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ca(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _g(){const n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yg(){return!pg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hs(){try{return typeof indexedDB=="object"}catch{return!1}}function ds(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function ua(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vg="FirebaseError";class Fe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=vg,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bt.prototype.create)}}class Bt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Tg(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Fe(i,c,r)}}function Tg(n,e){return n.replace(Eg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Eg=/\{\$([^}]+)}/g;function Ig(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Tu(s)&&Tu(a)){if(!Nt(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Tu(n){return n!==null&&typeof n=="object"}/**
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
 */function Or(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ar(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function wg(n,e){const t=new Ag(n,e);return t.subscribe.bind(t)}class Ag{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Rg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=so),i.error===void 0&&(i.error=so),i.complete===void 0&&(i.complete=so);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function so(){}/**
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
 */const bg=1e3,Sg=2,Pg=4*60*60*1e3,Cg=.5;function Eu(n,e=bg,t=Sg){const r=e*Math.pow(t,n),i=Math.round(Cg*r*(Math.random()-.5)*2);return Math.min(Pg,r+i)}/**
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
 */function le(n){return n&&n._delegate?n._delegate:n}class xe{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class kg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new dg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dg(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ng(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ng(n){return n===Kt?void 0:n}function Dg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Og{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Vg={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Mg=z.INFO,xg={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Lg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=xg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vr{constructor(e){this.name=e,this._logLevel=Mg,this._logHandler=Lg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Ug=(n,e)=>e.some(t=>n instanceof t);let Iu,wu;function Fg(){return Iu||(Iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jg(){return wu||(wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xh=new WeakMap,ko=new WeakMap,Lh=new WeakMap,oo=new WeakMap,la=new WeakMap;function Bg(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(St(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&xh.set(t,n)}).catch(()=>{}),la.set(e,n),e}function $g(n){if(ko.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});ko.set(n,e)}let No={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ko.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Lh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return St(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qg(n){No=n(No)}function zg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ao(this),e,...t);return Lh.set(r,e.sort?e.sort():[e]),St(r)}:jg().includes(n)?function(...e){return n.apply(ao(this),e),St(xh.get(this))}:function(...e){return St(n.apply(ao(this),e))}}function Wg(n){return typeof n=="function"?zg(n):(n instanceof IDBTransaction&&$g(n),Ug(n,Fg())?new Proxy(n,No):n)}function St(n){if(n instanceof IDBRequest)return Bg(n);if(oo.has(n))return oo.get(n);const e=Wg(n);return e!==n&&(oo.set(n,e),la.set(e,n)),e}const ao=n=>la.get(n);function Uh(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=St(a);return r&&a.addEventListener("upgradeneeded",l=>{r(St(a.result),l.oldVersion,l.newVersion,St(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Hg=["get","getKey","getAll","getAllKeys","count"],Gg=["put","add","delete","clear"],co=new Map;function Au(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(co.get(e))return co.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Gg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hg.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return co.set(e,s),s}qg(n=>({...n,get:(e,t,r)=>Au(e,t)||n.get(e,t,r),has:(e,t)=>!!Au(e,t)||n.has(e,t)}));/**
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
 */class Kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qg(n){const e=n.getComponent();return e?.type==="VERSION"}const Do="@firebase/app",Ru="0.11.4";/**
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
 */const lt=new Vr("@firebase/app"),Xg="@firebase/app-compat",Yg="@firebase/analytics-compat",Jg="@firebase/analytics",Zg="@firebase/app-check-compat",e_="@firebase/app-check",t_="@firebase/auth",n_="@firebase/auth-compat",r_="@firebase/database",i_="@firebase/data-connect",s_="@firebase/database-compat",o_="@firebase/functions",a_="@firebase/functions-compat",c_="@firebase/installations",u_="@firebase/installations-compat",l_="@firebase/messaging",h_="@firebase/messaging-compat",d_="@firebase/performance",f_="@firebase/performance-compat",p_="@firebase/remote-config",m_="@firebase/remote-config-compat",g_="@firebase/storage",__="@firebase/storage-compat",y_="@firebase/firestore",v_="@firebase/vertexai",T_="@firebase/firestore-compat",E_="firebase",I_="11.6.0";/**
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
 */const Oo="[DEFAULT]",w_={[Do]:"fire-core",[Xg]:"fire-core-compat",[Jg]:"fire-analytics",[Yg]:"fire-analytics-compat",[e_]:"fire-app-check",[Zg]:"fire-app-check-compat",[t_]:"fire-auth",[n_]:"fire-auth-compat",[r_]:"fire-rtdb",[i_]:"fire-data-connect",[s_]:"fire-rtdb-compat",[o_]:"fire-fn",[a_]:"fire-fn-compat",[c_]:"fire-iid",[u_]:"fire-iid-compat",[l_]:"fire-fcm",[h_]:"fire-fcm-compat",[d_]:"fire-perf",[f_]:"fire-perf-compat",[p_]:"fire-rc",[m_]:"fire-rc-compat",[g_]:"fire-gcs",[__]:"fire-gcs-compat",[y_]:"fire-fst",[T_]:"fire-fst-compat",[v_]:"fire-vertex","fire-js":"fire-js",[E_]:"fire-js-all"};/**
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
 */const ji=new Map,A_=new Map,Vo=new Map;function bu(n,e){try{n.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ue(n){const e=n.name;if(Vo.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;Vo.set(e,n);for(const t of ji.values())bu(t,n);for(const t of A_.values())bu(t,n);return!0}function pt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Oe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const R_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new Bt("app","Firebase",R_);/**
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
 */class b_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const an=I_;function Fh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pt.create("bad-app-name",{appName:String(i)});if(t||(t=Oh()),!t)throw Pt.create("no-options");const s=ji.get(i);if(s){if(Nt(t,s.options)&&Nt(r,s.config))return s;throw Pt.create("duplicate-app",{appName:i})}const a=new Og(i);for(const l of Vo.values())a.addComponent(l);const c=new b_(t,r,a);return ji.set(i,c),c}function Mr(n=Oo){const e=ji.get(n);if(!e&&n===Oo&&Oh())return Fh();if(!e)throw Pt.create("no-app",{appName:n});return e}function Re(n,e,t){var r;let i=(r=w_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(c.join(" "));return}Ue(new xe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const S_="firebase-heartbeat-database",P_=1,Ir="firebase-heartbeat-store";let uo=null;function jh(){return uo||(uo=Uh(S_,P_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ir)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pt.create("idb-open",{originalErrorMessage:n.message})})),uo}async function C_(n){try{const t=(await jh()).transaction(Ir),r=await t.objectStore(Ir).get(Bh(n));return await t.done,r}catch(e){if(e instanceof Fe)lt.warn(e.message);else{const t=Pt.create("idb-get",{originalErrorMessage:e?.message});lt.warn(t.message)}}}async function Su(n,e){try{const r=(await jh()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(e,Bh(n)),await r.done}catch(t){if(t instanceof Fe)lt.warn(t.message);else{const r=Pt.create("idb-set",{originalErrorMessage:t?.message});lt.warn(r.message)}}}function Bh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const k_=1024,N_=30;class D_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new V_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>N_){const a=M_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pu(),{heartbeatsToSend:r,unsentEntries:i}=O_(this._heartbeatsCache.heartbeats),s=Fi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return lt.warn(t),""}}}function Pu(){return new Date().toISOString().substring(0,10)}function O_(n,e=k_){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Cu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Cu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class V_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hs()?ds().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await C_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Su(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Su(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cu(n){return Fi(JSON.stringify({version:2,heartbeats:n})).length}function M_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function x_(n){Ue(new xe("platform-logger",e=>new Kg(e),"PRIVATE")),Ue(new xe("heartbeat",e=>new D_(e),"PRIVATE")),Re(Do,Ru,n),Re(Do,Ru,"esm2017"),Re("fire-js","")}x_("");function ha(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function $h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const L_=$h,qh=new Bt("auth","Firebase",$h());/**
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
 */const Bi=new Vr("@firebase/auth");function U_(n,...e){Bi.logLevel<=z.WARN&&Bi.warn(`Auth (${an}): ${n}`,...e)}function bi(n,...e){Bi.logLevel<=z.ERROR&&Bi.error(`Auth (${an}): ${n}`,...e)}/**
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
 */function He(n,...e){throw da(n,...e)}function Qe(n,...e){return da(n,...e)}function zh(n,e,t){const r=Object.assign(Object.assign({},L_()),{[e]:t});return new Bt("auth","Firebase",r).create(e,{appName:n.name})}function at(n){return zh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function da(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return qh.create(n,...e)}function L(n,e,...t){if(!n)throw da(e,...t)}function st(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bi(e),new Error(e)}function ht(n,e){n||st(e)}/**
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
 */function Mo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function F_(){return ku()==="http:"||ku()==="https:"}function ku(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function j_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F_()||ca()||"connection"in navigator)?navigator.onLine:!0}function B_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class xr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ht(t>e,"Short delay should be less than long delay!"),this.isMobile=fg()||gg()}get(){return j_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fa(n,e){ht(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const q_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],z_=new xr(3e4,6e4);function $t(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qt(n,e,t,r,i={}){return Hh(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=Or(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},s);return mg()||(d.referrerPolicy="no-referrer"),Wh.fetch()(await Gh(n,n.config.apiHost,t,c),d)})}async function Hh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},$_),e);try{const i=new H_(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw fi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw fi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw fi(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw zh(n,p,d);He(n,p)}}catch(i){if(i instanceof Fe)throw i;He(n,"network-request-failed",{message:String(i)})}}async function Lr(n,e,t,r,i={}){const s=await qt(n,e,t,r,i);return"mfaPendingCredential"in s&&He(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Gh(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?fa(n.config,i):`${n.config.apiScheme}://${i}`;return q_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function W_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class H_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),z_.get())})}}function fi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Qe(n,e,r);return i.customData._tokenResponse=t,i}function Nu(n){return n!==void 0&&n.enterprise!==void 0}class G_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return W_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function K_(n,e){return qt(n,"GET","/v2/recaptchaConfig",$t(n,e))}/**
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
 */async function Q_(n,e){return qt(n,"POST","/v1/accounts:delete",e)}async function $i(n,e){return qt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function X_(n,e=!1){const t=le(n),r=await t.getIdToken(e),i=pa(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:fr(lo(i.auth_time)),issuedAtTime:fr(lo(i.iat)),expirationTime:fr(lo(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function lo(n){return Number(n)*1e3}function pa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=kh(t);return i?JSON.parse(i):(bi("Failed to decode base64 JWT payload"),null)}catch(i){return bi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Du(n){const e=pa(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Fe&&Y_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Y_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class J_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await wr(n,$i(t,{idToken:r}));L(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Kh(s.providerUserInfo):[],c=ey(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!c?.length,p=l?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new xo(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,m)}async function Z_(n){const e=le(n);await qi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ey(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kh(n){return n.map(e=>{var{providerId:t}=e,r=ha(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ty(n,e){const t=await Hh(n,{},async()=>{const r=Or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Gh(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Wh.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ny(n,e){return qt(n,"POST","/v2/accounts:revokeToken",$t(n,e))}/**
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
 */class An{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Du(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=Du(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await ty(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new An;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new An,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function vt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qe{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ha(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await wr(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return X_(this,e)}reload(){return Z_(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await qi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await wr(this,Q_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,l,d,p;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,B=(d=t.createdAt)!==null&&d!==void 0?d:void 0,H=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:$,emailVerified:K,isAnonymous:de,providerData:Z,stsTokenManager:E}=t;L($&&E,e,"internal-error");const g=An.fromJSON(this.name,E);L(typeof $=="string",e,"internal-error"),vt(m,e.name),vt(T,e.name),L(typeof K=="boolean",e,"internal-error"),L(typeof de=="boolean",e,"internal-error"),vt(R,e.name),vt(N,e.name),vt(O,e.name),vt(k,e.name),vt(B,e.name),vt(H,e.name);const y=new qe({uid:$,auth:e,email:T,emailVerified:K,displayName:m,isAnonymous:de,photoURL:N,phoneNumber:R,tenantId:O,stsTokenManager:g,createdAt:B,lastLoginAt:H});return Z&&Array.isArray(Z)&&(y.providerData=Z.map(v=>Object.assign({},v))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,t,r=!1){const i=new An;i.updateFromServerResponse(t);const s=new qe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Kh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new An;c.updateFromIdToken(r);const l=new qe({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}}/**
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
 */const Ou=new Map;function ot(n){ht(n instanceof Function,"Expected a class definition");let e=Ou.get(n);return e?(ht(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ou.set(n,e),e)}/**
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
 */class Qh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qh.type="NONE";const Vu=Qh;/**
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
 */function Si(n,e,t){return`firebase:${n}:${e}:${t}`}class Rn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Si(this.userKey,i.apiKey,s),this.fullPersistenceKey=Si("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $i(this.auth,{idToken:e}).catch(()=>{});return t?qe._fromGetAccountInfoResponse(this.auth,t,e):null}return qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Rn(ot(Vu),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||ot(Vu);const a=Si(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const T=await $i(e,{idToken:p}).catch(()=>{});if(!T)break;m=await qe._fromGetAccountInfoResponse(e,T,p)}else m=qe._fromJSON(e,p);d!==s&&(c=m),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Rn(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new Rn(s,e,r))}}/**
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
 */function Mu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(td(e))return"Blackberry";if(nd(e))return"Webos";if(Yh(e))return"Safari";if((e.includes("chrome/")||Jh(e))&&!e.includes("edge/"))return"Chrome";if(ed(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Xh(n=be()){return/firefox\//i.test(n)}function Yh(n=be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jh(n=be()){return/crios\//i.test(n)}function Zh(n=be()){return/iemobile/i.test(n)}function ed(n=be()){return/android/i.test(n)}function td(n=be()){return/blackberry/i.test(n)}function nd(n=be()){return/webos/i.test(n)}function ma(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ry(n=be()){var e;return ma(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iy(){return _g()&&document.documentMode===10}function rd(n=be()){return ma(n)||ed(n)||nd(n)||td(n)||/windows phone/i.test(n)||Zh(n)}/**
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
 */function id(n,e=[]){let t;switch(n){case"Browser":t=Mu(be());break;case"Worker":t=`${Mu(be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${an}/${r}`}/**
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
 */class sy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function oy(n,e={}){return qt(n,"GET","/v2/passwordPolicy",$t(n,e))}/**
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
 */const ay=6;class cy{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ay,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class uy{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xu(this),this.idTokenSubscription=new xu(this),this.beforeStateQueue=new sy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Rn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $i(this,{idToken:e}),r=await qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Oe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(at(this));const t=e?le(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oy(this),t=new cy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ny(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await Rn.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=id(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&U_(`Error while retrieving App Check token: ${t.error}`),t?.token}}function cn(n){return le(n)}class xu{constructor(e){this.auth=e,this.observer=null,this.addObserver=wg(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ly(n){fs=n}function sd(n){return fs.loadJS(n)}function hy(){return fs.recaptchaEnterpriseScript}function dy(){return fs.gapiScript}function fy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class py{constructor(){this.enterprise=new my}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class my{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const gy="recaptcha-enterprise",od="NO_RECAPTCHA";class _y{constructor(e){this.type=gy,this.auth=cn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{K_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new G_(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){const l=window.grecaptcha;Nu(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(od)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new py().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&Nu(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hy();l.length!==0&&(l+=c),sd(l).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Lu(n,e,t,r=!1,i=!1){const s=new _y(n);let a;if(i)a=od;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Lo(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Lu(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Lu(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function yy(n,e){const t=pt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Nt(s,e??{}))return i;He(i,"already-initialized")}return t.initialize({options:e})}function vy(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ot);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Ty(n,e,t){const r=cn(n);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ad(e),{host:a,port:c}=Ey(e),l=c===null?"":`:${c}`,d={url:`${s}//${a}${l}/`},p=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Nt(d,r.config.emulator)&&Nt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Iy()}function ad(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ey(n){const e=ad(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Uu(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Uu(a)}}}function Uu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Iy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ga{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function wy(n,e){return qt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ay(n,e){return Lr(n,"POST","/v1/accounts:signInWithPassword",$t(n,e))}/**
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
 */async function Ry(n,e){return Lr(n,"POST","/v1/accounts:signInWithEmailLink",$t(n,e))}async function by(n,e){return Lr(n,"POST","/v1/accounts:signInWithEmailLink",$t(n,e))}/**
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
 */class Ar extends ga{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ar(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ar(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lo(e,t,"signInWithPassword",Ay);case"emailLink":return Ry(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lo(e,r,"signUpPassword",wy);case"emailLink":return by(e,{idToken:t,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bn(n,e){return Lr(n,"POST","/v1/accounts:signInWithIdp",$t(n,e))}/**
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
 */const Sy="http://localhost";class Zt extends ga{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ha(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Zt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return bn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,bn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bn(e,t)}buildRequest(){const e={requestUri:Sy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Or(t)}return e}}/**
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
 */function Py(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cy(n){const e=ar(cr(n)).link,t=e?ar(cr(e)).deep_link_id:null,r=ar(cr(n)).deep_link_id;return(r?ar(cr(r)).link:null)||r||t||e||n}class _a{constructor(e){var t,r,i,s,a,c;const l=ar(cr(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,m=Py((i=l.mode)!==null&&i!==void 0?i:null);L(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Cy(e);try{return new _a(t)}catch{return null}}}/**
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
 */class Ln{constructor(){this.providerId=Ln.PROVIDER_ID}static credential(e,t){return Ar._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=_a.parseLink(t);return L(r,"argument-error"),Ar._fromEmailAndCode(e,r.code,r.tenantId)}}Ln.PROVIDER_ID="password";Ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class cd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ur extends cd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends Ur{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class It extends Ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return It.credential(t,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class wt extends Ur{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
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
 */class At extends Ur{constructor(){super("twitter.com")}static credential(e,t){return Zt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return At.credential(t,r)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
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
 */async function ky(n,e){return Lr(n,"POST","/v1/accounts:signUp",$t(n,e))}/**
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
 */class en{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await qe._fromIdTokenResponse(e,r,i),a=Fu(r);return new en({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Fu(r);return new en({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Fu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class zi extends Fe{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new zi(e,t,r,i)}}function ud(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zi._fromErrorAndOperation(n,s,e,r):s})}async function Ny(n,e,t=!1){const r=await wr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return en._forOperation(n,"link",r)}/**
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
 */async function Dy(n,e,t=!1){const{auth:r}=n;if(Oe(r.app))return Promise.reject(at(r));const i="reauthenticate";try{const s=await wr(n,ud(r,i,e,n),t);L(s.idToken,r,"internal-error");const a=pa(s.idToken);L(a,r,"internal-error");const{sub:c}=a;return L(n.uid===c,r,"user-mismatch"),en._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&He(r,"user-mismatch"),s}}/**
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
 */async function ld(n,e,t=!1){if(Oe(n.app))return Promise.reject(at(n));const r="signIn",i=await ud(n,r,e),s=await en._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Oy(n,e){return ld(cn(n),e)}/**
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
 */async function hd(n){const e=cn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vy(n,e,t){if(Oe(n.app))return Promise.reject(at(n));const r=cn(n),a=await Lo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ky).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&hd(n),l}),c=await en._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function My(n,e,t){return Oe(n.app)?Promise.reject(at(n)):Oy(le(n),Ln.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hd(n),r})}function xy(n,e,t,r){return le(n).onIdTokenChanged(e,t,r)}function Ly(n,e,t){return le(n).beforeAuthStateChanged(e,t)}function Uy(n,e,t,r){return le(n).onAuthStateChanged(e,t,r)}function Fy(n){return le(n).signOut()}const Wi="__sak";/**
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
 */class dd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wi,"1"),this.storage.removeItem(Wi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const jy=1e3,By=10;class fd extends dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);iy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,By):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fd.type="LOCAL";const $y=fd;/**
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
 */class pd extends dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pd.type="SESSION";const md=pd;/**
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
 */function qy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ps(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,s)),l=await qy(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ps.receivers=[];/**
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
 */function ya(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class zy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const d=ya("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const T=m;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(T.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Xe(){return window}function Wy(n){Xe().location.href=n}/**
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
 */function gd(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function Hy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gy(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ky(){return gd()?self:null}/**
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
 */const _d="firebaseLocalStorageDb",Qy=1,Hi="firebaseLocalStorage",yd="fbase_key";class Fr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ms(n,e){return n.transaction([Hi],e?"readwrite":"readonly").objectStore(Hi)}function Xy(){const n=indexedDB.deleteDatabase(_d);return new Fr(n).toPromise()}function Uo(){const n=indexedDB.open(_d,Qy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Hi,{keyPath:yd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Hi)?e(r):(r.close(),await Xy(),e(await Uo()))})})}async function ju(n,e,t){const r=ms(n,!0).put({[yd]:e,value:t});return new Fr(r).toPromise()}async function Yy(n,e){const t=ms(n,!1).get(e),r=await new Fr(t).toPromise();return r===void 0?null:r.value}function Bu(n,e){const t=ms(n,!0).delete(e);return new Fr(t).toPromise()}const Jy=800,Zy=3;class vd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Zy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ps._getInstance(Ky()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hy(),!this.activeServiceWorker)return;this.sender=new zy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uo();return await ju(e,Wi,"1"),await Bu(e,Wi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ju(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Yy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ms(i,!1).getAll();return new Fr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vd.type="LOCAL";const ev=vd;new xr(3e4,6e4);/**
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
 */function tv(n,e){return e?ot(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class va extends ga{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nv(n){return ld(n.auth,new va(n),n.bypassAuthState)}function rv(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Dy(t,new va(n),n.bypassAuthState)}async function iv(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Ny(t,new va(n),n.bypassAuthState)}/**
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
 */class Td{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nv;case"linkViaPopup":case"linkViaRedirect":return iv;case"reauthViaPopup":case"reauthViaRedirect":return rv;default:He(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sv=new xr(2e3,1e4);class In extends Td{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sv.get())};e()}}In.currentPopupAction=null;/**
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
 */const ov="pendingRedirect",Pi=new Map;class av extends Td{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const r=await cv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cv(n,e){const t=hv(e),r=lv(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function uv(n,e){Pi.set(n._key(),e)}function lv(n){return ot(n._redirectPersistence)}function hv(n){return Si(ov,n.config.apiKey,n.name)}async function dv(n,e,t=!1){if(Oe(n.app))return Promise.reject(at(n));const r=cn(n),i=tv(r,e),a=await new av(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const fv=10*60*1e3;class pv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ed(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fv&&this.cachedEventUids.clear(),this.cachedEventUids.has($u(e))}saveEventToCache(e){this.cachedEventUids.add($u(e)),this.lastProcessedEventTime=Date.now()}}function $u(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ed({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function mv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ed(n);default:return!1}}/**
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
 */async function gv(n,e={}){return qt(n,"GET","/v1/projects",e)}/**
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
 */const _v=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yv=/^https?/;async function vv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gv(n);for(const t of e)try{if(Tv(t))return}catch{}He(n,"unauthorized-domain")}function Tv(n){const e=Mo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!yv.test(t))return!1;if(_v.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ev=new xr(3e4,6e4);function qu(){const n=Xe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Iv(n){return new Promise((e,t)=>{var r,i,s;function a(){qu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qu(),t(Qe(n,"network-request-failed"))},timeout:Ev.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xe().gapi)===null||s===void 0)&&s.load)a();else{const c=fy("iframefcb");return Xe()[c]=()=>{gapi.load?a():t(Qe(n,"network-request-failed"))},sd(`${dy()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ci=null,e})}let Ci=null;function wv(n){return Ci=Ci||Iv(n),Ci}/**
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
 */const Av=new xr(5e3,15e3),Rv="__/auth/iframe",bv="emulator/auth/iframe",Sv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cv(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?fa(e,bv):`https://${n.config.authDomain}/${Rv}`,r={apiKey:e.apiKey,appName:n.name,v:an},i=Pv.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Or(r).slice(1)}`}async function kv(n){const e=await wv(n),t=Xe().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:Cv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Qe(n,"network-request-failed"),c=Xe().setTimeout(()=>{s(a)},Av.get());function l(){Xe().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const Nv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dv=500,Ov=600,Vv="_blank",Mv="http://localhost";class zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xv(n,e,t,r=Dv,i=Ov){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Nv),{width:r.toString(),height:i.toString(),top:s,left:a}),d=be().toLowerCase();t&&(c=Jh(d)?Vv:t),Xh(d)&&(e=e||Mv,l.scrollbars="yes");const p=Object.entries(l).reduce((T,[R,N])=>`${T}${R}=${N},`,"");if(ry(d)&&c!=="_self")return Lv(e||"",c),new zu(null);const m=window.open(e||"",c,p);L(m,n,"popup-blocked");try{m.focus()}catch{}return new zu(m)}function Lv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Uv="__/auth/handler",Fv="emulator/auth/handler",jv=encodeURIComponent("fac");async function Wu(n,e,t,r,i,s){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:an,eventId:i};if(e instanceof cd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ig(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof Ur){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),d=l?`#${jv}=${encodeURIComponent(l)}`:"";return`${Bv(n)}?${Or(c).slice(1)}${d}`}function Bv({config:n}){return n.emulator?fa(n,Fv):`https://${n.authDomain}/${Uv}`}/**
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
 */const ho="webStorageSupport";class $v{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=md,this._completeRedirectFn=dv,this._overrideRedirectResult=uv}async _openPopup(e,t,r,i){var s;ht((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Wu(e,t,r,Mo(),i);return xv(e,a,ya())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Wu(e,t,r,Mo(),i);return Wy(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ht(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await kv(e),r=new pv(e);return t.register("authEvent",i=>(L(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ho,{type:ho},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[ho];a!==void 0&&t(!!a),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rd()||Yh()||ma()}}const qv=$v;var Hu="@firebase/auth",Gu="1.10.0";/**
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
 */class zv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hv(n){Ue(new xe("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:id(n)},d=new uy(r,i,s,l);return vy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ue(new xe("auth-internal",e=>{const t=cn(e.getProvider("auth").getImmediate());return(r=>new zv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(Hu,Gu,Wv(n)),Re(Hu,Gu,"esm2017")}/**
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
 */const Gv=5*60,Kv=Vh("authIdTokenMaxAge")||Gv;let Ku=null;const Qv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Kv)return;const i=t?.token;Ku!==i&&(Ku=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Xv(n=Mr()){const e=pt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yy(n,{popupRedirectResolver:qv,persistence:[ev,$y,md]}),r=Vh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Qv(s.toString());Ly(t,a,()=>a(t.currentUser)),xy(t,c=>a(c))}}const i=Nh("auth");return i&&Ty(t,`http://${i}`),t}function Yv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ly({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Yv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hv("Browser");var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ct,Id;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function y(){}y.prototype=g.prototype,E.D=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(v,I,A){for(var _=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)_[nt-2]=arguments[nt];return g.prototype[I].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,y){y||(y=0);var v=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)v[I]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(I=0;16>I;++I)v[I]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],I=E.g[2];var A=E.g[3],_=g+(A^y&(I^A))+v[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+v[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+v[2]+606105819&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+v[3]+3250441966&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(A^y&(I^A))+v[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+v[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+v[6]+2821735955&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+v[7]+4249261313&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(A^y&(I^A))+v[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+v[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+v[10]+4294925233&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+v[11]+2304563134&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(A^y&(I^A))+v[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+v[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+v[14]+2792965006&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+v[15]+1236535329&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(I^A&(y^I))+v[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+v[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+v[11]+643717713&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+v[0]+3921069994&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^A&(y^I))+v[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+v[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+v[15]+3634488961&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+v[4]+3889429448&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^A&(y^I))+v[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+v[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+v[3]+4107603335&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+v[8]+1163531501&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^A&(y^I))+v[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+v[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+v[7]+1735328473&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+v[12]+2368359562&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(y^I^A)+v[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+v[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+v[11]+1839030562&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+v[14]+4259657740&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^A)+v[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+v[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+v[7]+4139469664&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+v[10]+3200236656&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^A)+v[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+v[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+v[3]+3572445317&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+v[6]+76029189&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^A)+v[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+v[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+v[15]+530742520&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+v[2]+3299628645&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(I^(y|~A))+v[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+v[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+v[14]+2878612391&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+v[5]+4237533241&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~A))+v[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+v[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+v[10]+4293915773&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+v[1]+2240044497&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~A))+v[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+v[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+v[6]+2734768916&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+v[13]+1309151649&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~A))+v[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+v[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+v[2]+718787259&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var y=g-this.blockSize,v=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=y;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<g;)if(v[I++]=E.charCodeAt(A++),I==this.blockSize){i(this,v),I=0;break}}else for(;A<g;)if(v[I++]=E[A++],I==this.blockSize){i(this,v),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var y=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=y&255,y/=256;for(this.u(E),E=Array(16),g=y=0;4>g;++g)for(var v=0;32>v;v+=8)E[y++]=this.g[g]>>>v&255;return E};function s(E,g){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function a(E,g){this.h=g;for(var y=[],v=!0,I=E.length-1;0<=I;I--){var A=E[I]|0;v&&A==g||(y[I]=A,v=!1)}this.g=y}var c={};function l(E){return-128<=E&&128>E?s(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return k(d(-E));for(var g=[],y=1,v=0;E>=y;v++)g[v]=E/y|0,y*=4294967296;return new a(g,0)}function p(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return k(p(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),v=m,I=0;I<E.length;I+=8){var A=Math.min(8,E.length-I),_=parseInt(E.substring(I,I+A),g);8>A?(A=d(Math.pow(g,A)),v=v.j(A).add(d(_))):(v=v.j(y),v=v.add(d(_)))}return v}var m=l(0),T=l(1),R=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-k(this).m();for(var E=0,g=1,y=0;y<this.g.length;y++){var v=this.i(y);E+=(0<=v?v:4294967296+v)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(O(this))return"-"+k(this).toString(E);for(var g=d(Math.pow(E,6)),y=this,v="";;){var I=K(y,g).g;y=B(y,I.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=I,N(y))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=B(this,E),O(E)?-1:N(E)?0:1};function k(E){for(var g=E.g.length,y=[],v=0;v<g;v++)y[v]=~E.g[v];return new a(y,~E.h).add(T)}n.abs=function(){return O(this)?k(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0,I=0;I<=g;I++){var A=v+(this.i(I)&65535)+(E.i(I)&65535),_=(A>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);v=_>>>16,A&=65535,_&=65535,y[I]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function B(E,g){return E.add(k(g))}n.j=function(E){if(N(this)||N(E))return m;if(O(this))return O(E)?k(this).j(k(E)):k(k(this).j(E));if(O(E))return k(this.j(k(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var g=this.g.length+E.g.length,y=[],v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<E.g.length;I++){var A=this.i(v)>>>16,_=this.i(v)&65535,nt=E.i(I)>>>16,zn=E.i(I)&65535;y[2*v+2*I]+=_*zn,H(y,2*v+2*I),y[2*v+2*I+1]+=A*zn,H(y,2*v+2*I+1),y[2*v+2*I+1]+=_*nt,H(y,2*v+2*I+1),y[2*v+2*I+2]+=A*nt,H(y,2*v+2*I+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new a(y,0)};function H(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function $(E,g){this.g=E,this.h=g}function K(E,g){if(N(g))throw Error("division by zero");if(N(E))return new $(m,m);if(O(E))return g=K(k(E),g),new $(k(g.g),k(g.h));if(O(g))return g=K(E,k(g)),new $(k(g.g),g.h);if(30<E.g.length){if(O(E)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var y=T,v=g;0>=v.l(E);)y=de(y),v=de(v);var I=Z(y,1),A=Z(v,1);for(v=Z(v,2),y=Z(y,2);!N(v);){var _=A.add(v);0>=_.l(E)&&(I=I.add(y),A=_),v=Z(v,1),y=Z(y,1)}return g=B(E,I.j(g)),new $(I,g)}for(I=m;0<=E.l(g);){for(y=Math.max(1,Math.floor(E.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(y),_=A.j(g);O(_)||0<_.l(E);)y-=v,A=d(y),_=A.j(g);N(A)&&(A=T),I=I.add(A),E=B(E,_)}return new $(I,E)}n.A=function(E){return K(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)&E.i(v);return new a(y,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)|E.i(v);return new a(y,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)^E.i(v);return new a(y,this.h^E.h)};function de(E){for(var g=E.g.length+1,y=[],v=0;v<g;v++)y[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(y,E.h)}function Z(E,g){var y=g>>5;g%=32;for(var v=E.g.length-y,I=[],A=0;A<v;A++)I[A]=0<g?E.i(A+y)>>>g|E.i(A+y+1)<<32-g:E.i(A+y);return new a(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Id=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ct=a}).apply(typeof Qu<"u"?Qu:typeof self<"u"?self:typeof window<"u"?window:{});var pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wd,ur,Ad,ki,Fo,Rd,bd,Sd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof pi=="object"&&pi];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var w=o[f];if(!(w in h))break e;h=h[w]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,f=!1,w={next:function(){if(!f&&h<o.length){var b=h++;return{value:u(b,o[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,h){return o.call.apply(o.bind,arguments)}function m(o,u,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),o.apply(u,w)}}return function(){return o.apply(u,arguments)}}function T(o,u,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,T.apply(null,arguments)}function R(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function N(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,w,b){for(var D=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)D[Y-2]=arguments[Y];return u.prototype[w].apply(f,D)}}function O(o){const u=o.length;if(0<u){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function k(o,u){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const w=o.length||0,b=f.length||0;o.length=w+b;for(let D=0;D<b;D++)o[w+D]=f[D]}else o.push(f)}}class B{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function H(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var de=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Z(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function E(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function g(o){const u={};for(const h in o)u[h]=o[h];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,u){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)o[h]=f[h];for(let b=0;b<y.length;b++)h=y[b],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function _(){var o=Ms;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class nt{constructor(){this.h=this.g=null}add(u,h){const f=zn.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var zn=new B(()=>new dm,o=>o.reset());class dm{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Wn,Hn=!1,Ms=new nt,gc=()=>{const o=c.Promise.resolve(void 0);Wn=()=>{o.then(fm)}};var fm=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){A(h)}var u=zn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Hn=!1};function mt(){this.s=this.s,this.C=this.C}mt.prototype.s=!1,mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var pm=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Gn(o,u){if(_e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(de){e:{try{K(u.nodeName);var w=!0;break e}catch{}w=!1}w||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:mm[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Gn.aa.h.call(this)}}N(Gn,_e);var mm={2:"touch",3:"pen",4:"mouse"};Gn.prototype.h=function(){Gn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Gr="closure_listenable_"+(1e6*Math.random()|0),gm=0;function _m(o,u,h,f,w){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=w,this.key=++gm,this.da=this.fa=!1}function Kr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Qr(o){this.src=o,this.g={},this.h=0}Qr.prototype.add=function(o,u,h,f,w){var b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);var D=Ls(o,u,f,w);return-1<D?(u=o[D],h||(u.fa=!1)):(u=new _m(u,this.src,b,!!f,w),u.fa=h,o.push(u)),u};function xs(o,u){var h=u.type;if(h in o.g){var f=o.g[h],w=Array.prototype.indexOf.call(f,u,void 0),b;(b=0<=w)&&Array.prototype.splice.call(f,w,1),b&&(Kr(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ls(o,u,h,f){for(var w=0;w<o.length;++w){var b=o[w];if(!b.da&&b.listener==u&&b.capture==!!h&&b.ha==f)return w}return-1}var Us="closure_lm_"+(1e6*Math.random()|0),Fs={};function _c(o,u,h,f,w){if(Array.isArray(u)){for(var b=0;b<u.length;b++)_c(o,u[b],h,f,w);return null}return h=Tc(h),o&&o[Gr]?o.K(u,h,d(f)?!!f.capture:!1,w):ym(o,u,h,!1,f,w)}function ym(o,u,h,f,w,b){if(!u)throw Error("Invalid event type");var D=d(w)?!!w.capture:!!w,Y=Bs(o);if(Y||(o[Us]=Y=new Qr(o)),h=Y.add(u,h,f,D,b),h.proxy)return h;if(f=vm(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)pm||(w=D),w===void 0&&(w=!1),o.addEventListener(u.toString(),f,w);else if(o.attachEvent)o.attachEvent(vc(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function vm(){function o(h){return u.call(o.src,o.listener,h)}const u=Tm;return o}function yc(o,u,h,f,w){if(Array.isArray(u))for(var b=0;b<u.length;b++)yc(o,u[b],h,f,w);else f=d(f)?!!f.capture:!!f,h=Tc(h),o&&o[Gr]?(o=o.i,u=String(u).toString(),u in o.g&&(b=o.g[u],h=Ls(b,h,f,w),-1<h&&(Kr(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete o.g[u],o.h--)))):o&&(o=Bs(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ls(u,h,f,w)),(h=-1<o?u[o]:null)&&js(h))}function js(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Gr])xs(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(vc(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=Bs(u))?(xs(h,o),h.h==0&&(h.src=null,u[Us]=null)):Kr(o)}}}function vc(o){return o in Fs?Fs[o]:Fs[o]="on"+o}function Tm(o,u){if(o.da)o=!0;else{u=new Gn(u,this);var h=o.listener,f=o.ha||o.src;o.fa&&js(o),o=h.call(f,u)}return o}function Bs(o){return o=o[Us],o instanceof Qr?o:null}var $s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tc(o){return typeof o=="function"?o:(o[$s]||(o[$s]=function(u){return o.handleEvent(u)}),o[$s])}function ye(){mt.call(this),this.i=new Qr(this),this.M=this,this.F=null}N(ye,mt),ye.prototype[Gr]=!0,ye.prototype.removeEventListener=function(o,u,h,f){yc(this,o,u,h,f)};function Se(o,u){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new _e(u,o);else if(u instanceof _e)u.target=u.target||o;else{var w=u;u=new _e(f,o),v(u,w)}if(w=!0,h)for(var b=h.length-1;0<=b;b--){var D=u.g=h[b];w=Xr(D,f,!0,u)&&w}if(D=u.g=o,w=Xr(D,f,!0,u)&&w,w=Xr(D,f,!1,u)&&w,h)for(b=0;b<h.length;b++)D=u.g=h[b],w=Xr(D,f,!1,u)&&w}ye.prototype.N=function(){if(ye.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],f=0;f<h.length;f++)Kr(h[f]);delete o.g[u],o.h--}}this.F=null},ye.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},ye.prototype.L=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function Xr(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,b=0;b<u.length;++b){var D=u[b];if(D&&!D.da&&D.capture==h){var Y=D.listener,fe=D.ha||D.src;D.fa&&xs(o.i,D),w=Y.call(fe,f)!==!1&&w}}return w&&!f.defaultPrevented}function Ec(o,u,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ic(o){o.g=Ec(()=>{o.g=null,o.i&&(o.i=!1,Ic(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Em extends mt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ic(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(o){mt.call(this),this.h=o,this.g={}}N(Kn,mt);var wc=[];function Ac(o){Z(o.g,function(u,h){this.g.hasOwnProperty(h)&&js(u)},o),o.g={}}Kn.prototype.N=function(){Kn.aa.N.call(this),Ac(this)},Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qs=c.JSON.stringify,Im=c.JSON.parse,wm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function zs(){}zs.prototype.h=null;function Rc(o){return o.h||(o.h=o.i())}function bc(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ws(){_e.call(this,"d")}N(Ws,_e);function Hs(){_e.call(this,"c")}N(Hs,_e);var zt={},Sc=null;function Yr(){return Sc=Sc||new ye}zt.La="serverreachability";function Pc(o){_e.call(this,zt.La,o)}N(Pc,_e);function Xn(o){const u=Yr();Se(u,new Pc(u))}zt.STAT_EVENT="statevent";function Cc(o,u){_e.call(this,zt.STAT_EVENT,o),this.stat=u}N(Cc,_e);function Pe(o){const u=Yr();Se(u,new Cc(u,o))}zt.Ma="timingevent";function kc(o,u){_e.call(this,zt.Ma,o),this.size=u}N(kc,_e);function Yn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Jn(){this.g=!0}Jn.prototype.xa=function(){this.g=!1};function Am(o,u,h,f,w,b){o.info(function(){if(o.g)if(b)for(var D="",Y=b.split("&"),fe=0;fe<Y.length;fe++){var Q=Y[fe].split("=");if(1<Q.length){var ve=Q[0];Q=Q[1];var Te=ve.split("_");D=2<=Te.length&&Te[1]=="type"?D+(ve+"="+Q+"&"):D+(ve+"=redacted&")}}else D=null;else D=b;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+u+`
`+h+`
`+D})}function Rm(o,u,h,f,w,b,D){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+u+`
`+h+`
`+b+" "+D})}function fn(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Sm(o,h)+(f?" "+f:"")})}function bm(o,u){o.info(function(){return"TIMEOUT: "+u})}Jn.prototype.info=function(){};function Sm(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var b=w[0];if(b!="noop"&&b!="stop"&&b!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return qs(h)}catch{return u}}var Jr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gs;function Zr(){}N(Zr,zs),Zr.prototype.g=function(){return new XMLHttpRequest},Zr.prototype.i=function(){return{}},Gs=new Zr;function gt(o,u,h,f){this.j=o,this.i=u,this.l=h,this.R=f||1,this.U=new Kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dc}function Dc(){this.i=null,this.g="",this.h=!1}var Oc={},Ks={};function Qs(o,u,h){o.L=1,o.v=ri(rt(u)),o.m=h,o.P=!0,Vc(o,null)}function Vc(o,u){o.F=Date.now(),ei(o),o.A=rt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Kc(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Dc,o.g=du(o.j,h?u:null,!o.m),0<o.O&&(o.M=new Em(T(o.Y,o,o.g),o.O)),u=o.U,h=o.g,f=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(wc[0]=w.toString()),w=wc);for(var b=0;b<w.length;b++){var D=_c(h,w[b],f||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Xn(),Am(o.i,o.u,o.A,o.l,o.R,o.m)}gt.prototype.ca=function(o){o=o.target;const u=this.M;u&&it(o)==3?u.j():this.Y(o)},gt.prototype.Y=function(o){try{if(o==this.g)e:{const Te=it(this.g);var u=this.g.Ba();const gn=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||tu(this.g)))){this.J||Te!=4||u==7||(u==8||0>=gn?Xn(3):Xn(2)),Xs(this);var h=this.g.Z();this.X=h;t:if(Mc(this)){var f=tu(this.g);o="";var w=f.length,b=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),Zn(this);var D="";break t}this.h.i=new c.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(b&&u==w-1)});f.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,Rm(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Y,fe=this.g;if((Y=fe.g?fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Y)){var Q=Y;break t}}Q=null}if(h=Q)fn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ys(this,h);else{this.o=!1,this.s=3,Pe(12),Wt(this),Zn(this);break e}}if(this.P){h=!0;let je;for(;!this.J&&this.C<D.length;)if(je=Pm(this,D),je==Ks){Te==4&&(this.s=4,Pe(14),h=!1),fn(this.i,this.l,null,"[Incomplete Response]");break}else if(je==Oc){this.s=4,Pe(15),fn(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else fn(this.i,this.l,je,null),Ys(this,je);if(Mc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||D.length!=0||this.h.h||(this.s=1,Pe(16),h=!1),this.o=this.o&&h,!h)fn(this.i,this.l,D,"[Invalid Chunked Response]"),Wt(this),Zn(this);else if(0<D.length&&!this.W){this.W=!0;var ve=this.j;ve.g==this&&ve.ba&&!ve.M&&(ve.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),ro(ve),ve.M=!0,Pe(11))}}else fn(this.i,this.l,D,null),Ys(this,D);Te==4&&Wt(this),this.o&&!this.J&&(Te==4?cu(this.j,this):(this.o=!1,ei(this)))}else Wm(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),Wt(this),Zn(this)}}}catch{}finally{}};function Mc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Pm(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?Ks:(h=Number(u.substring(h,f)),isNaN(h)?Oc:(f+=1,f+h>u.length?Ks:(u=u.slice(f,f+h),o.C=f+h,u)))}gt.prototype.cancel=function(){this.J=!0,Wt(this)};function ei(o){o.S=Date.now()+o.I,xc(o,o.I)}function xc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Yn(T(o.ba,o),u)}function Xs(o){o.B&&(c.clearTimeout(o.B),o.B=null)}gt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(bm(this.i,this.A),this.L!=2&&(Xn(),Pe(17)),Wt(this),this.s=2,Zn(this)):xc(this,this.S-o)};function Zn(o){o.j.G==0||o.J||cu(o.j,o)}function Wt(o){Xs(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ac(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ys(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Js(h.h,o))){if(!o.K&&Js(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ui(h),ai(h);else break e;no(h),Pe(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Yn(T(h.Za,h),6e3));if(1>=Fc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Gt(h,11)}else if((o.K||h.g==o)&&ui(h),!H(u))for(w=h.Da.g.parse(u),u=0;u<w.length;u++){let Q=w[u];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const ve=Q[3];ve!=null&&(h.la=ve,h.j.info("VER="+h.la));const Te=Q[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const gn=Q[5];gn!=null&&typeof gn=="number"&&0<gn&&(f=1.5*gn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const je=o.g;if(je){const hi=je.g?je.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hi){var b=f.h;b.g||hi.indexOf("spdy")==-1&&hi.indexOf("quic")==-1&&hi.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Zs(b,b.h),b.h=null))}if(f.D){const io=je.g?je.g.getResponseHeader("X-HTTP-Session-Id"):null;io&&(f.ya=io,ee(f.I,f.D,io))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var D=o;if(f.qa=hu(f,f.J?f.ia:null,f.W),D.K){jc(f.h,D);var Y=D,fe=f.L;fe&&(Y.I=fe),Y.B&&(Xs(Y),ei(Y)),f.g=D}else ou(f);0<h.i.length&&ci(h)}else Q[0]!="stop"&&Q[0]!="close"||Gt(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Gt(h,7):to(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}Xn(4)}catch{}}var Cm=class{constructor(o,u){this.g=o,this.map=u}};function Lc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Fc(o){return o.h?1:o.g?o.g.size:0}function Js(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Zs(o,u){o.g?o.g.add(u):o.h=u}function jc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Lc.prototype.cancel=function(){if(this.i=Bc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return O(o.i)}function km(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,f=0;f<h;f++)u.push(o[f]);return u}u=[],h=0;for(f in o)u[h++]=o[f];return u}function Nm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const f in o)u[h++]=f;return u}}}function $c(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=Nm(o),f=km(o),w=f.length,b=0;b<w;b++)u.call(void 0,f[b],h&&h[b],o)}var qc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dm(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),w=null;if(0<=f){var b=o[h].substring(0,f);w=o[h].substring(f+1)}else b=o[h];u(b,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Ht(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ht){this.h=o.h,ti(this,o.j),this.o=o.o,this.g=o.g,ni(this,o.s),this.l=o.l;var u=o.i,h=new nr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),zc(this,h),this.m=o.m}else o&&(u=String(o).match(qc))?(this.h=!1,ti(this,u[1]||"",!0),this.o=er(u[2]||""),this.g=er(u[3]||"",!0),ni(this,u[4]),this.l=er(u[5]||"",!0),zc(this,u[6]||"",!0),this.m=er(u[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Ht.prototype.toString=function(){var o=[],u=this.j;u&&o.push(tr(u,Wc,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(tr(u,Wc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(tr(h,h.charAt(0)=="/"?Mm:Vm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",tr(h,Lm)),o.join("")};function rt(o){return new Ht(o)}function ti(o,u,h){o.j=h?er(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ni(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function zc(o,u,h){u instanceof nr?(o.i=u,Um(o.i,o.h)):(h||(u=tr(u,xm)),o.i=new nr(u,o.h))}function ee(o,u,h){o.i.set(u,h)}function ri(o){return ee(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function er(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function tr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Om),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Om(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wc=/[#\/\?@]/g,Vm=/[#\?:]/g,Mm=/[#\?]/g,xm=/[#\?@]/g,Lm=/#/g;function nr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function _t(o){o.g||(o.g=new Map,o.h=0,o.i&&Dm(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=nr.prototype,n.add=function(o,u){_t(this),this.i=null,o=pn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Hc(o,u){_t(o),u=pn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Gc(o,u){return _t(o),u=pn(o,u),o.g.has(u)}n.forEach=function(o,u){_t(this),this.g.forEach(function(h,f){h.forEach(function(w){o.call(u,w,f,this)},this)},this)},n.na=function(){_t(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){const w=o[f];for(let b=0;b<w.length;b++)h.push(u[f])}return h},n.V=function(o){_t(this);let u=[];if(typeof o=="string")Gc(this,o)&&(u=u.concat(this.g.get(pn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return _t(this),this.i=null,o=pn(this,o),Gc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Kc(o,u,h){Hc(o,u),0<h.length&&(o.i=null,o.g.set(pn(o,u),O(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];const b=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var w=b;D[f]!==""&&(w+="="+encodeURIComponent(String(D[f]))),o.push(w)}}return this.i=o.join("&")};function pn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Um(o,u){u&&!o.j&&(_t(o),o.i=null,o.g.forEach(function(h,f){var w=f.toLowerCase();f!=w&&(Hc(this,f),Kc(this,w,h))},o)),o.j=u}function Fm(o,u){const h=new Jn;if(c.Image){const f=new Image;f.onload=R(yt,h,"TestLoadImage: loaded",!0,u,f),f.onerror=R(yt,h,"TestLoadImage: error",!1,u,f),f.onabort=R(yt,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=R(yt,h,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function jm(o,u){const h=new Jn,f=new AbortController,w=setTimeout(()=>{f.abort(),yt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(b=>{clearTimeout(w),b.ok?yt(h,"TestPingServer: ok",!0,u):yt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),yt(h,"TestPingServer: error",!1,u)})}function yt(o,u,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function Bm(){this.g=new wm}function $m(o,u,h){const f=h||"";try{$c(o,function(w,b){let D=w;d(w)&&(D=qs(w)),u.push(f+b+"="+encodeURIComponent(D))})}catch(w){throw u.push(f+"type="+encodeURIComponent("_badmap")),w}}function ii(o){this.l=o.Ub||null,this.j=o.eb||!1}N(ii,zs),ii.prototype.g=function(){return new si(this.l,this.j)},ii.prototype.i=function(o){return function(){return o}}({});function si(o,u){ye.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(si,ye),n=si.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ir(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ir(this)),this.g&&(this.readyState=3,ir(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?rr(this):ir(this),this.readyState==3&&Qc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,rr(this))},n.Qa=function(o){this.g&&(this.response=o,rr(this))},n.ga=function(){this.g&&rr(this)};function rr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ir(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function ir(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xc(o){let u="";return Z(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function eo(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Xc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ee(o,u,h))}function re(o){ye.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(re,ye);var qm=/^https?$/i,zm=["POST","PUT"];n=re.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gs.g(),this.v=this.o?Rc(this.o):Rc(Gs),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(b){Yc(this,b);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),w=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(zm,u,void 0))||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,D]of h)this.g.setRequestHeader(b,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{eu(this),this.u=!0,this.g.send(o),this.u=!1}catch(b){Yc(this,b)}};function Yc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Jc(o),oi(o)}function Jc(o){o.A||(o.A=!0,Se(o,"complete"),Se(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Se(this,"complete"),Se(this,"abort"),oi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oi(this,!0)),re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zc(this):this.bb())},n.bb=function(){Zc(this)};function Zc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||it(o)!=4||o.Z()!=2)){if(o.u&&it(o)==4)Ec(o.Ea,0,o);else if(Se(o,"readystatechange"),it(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=D===0){var w=String(o.D).match(qc)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),f=!qm.test(w?w.toLowerCase():"")}h=f}if(h)Se(o,"complete"),Se(o,"success");else{o.m=6;try{var b=2<it(o)?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.Z()+"]",Jc(o)}}finally{oi(o)}}}}function oi(o,u){if(o.g){eu(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Se(o,"ready");try{h.onreadystatechange=f}catch{}}}function eu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function it(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<it(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Im(u)}};function tu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Wm(o){const u={};o=(o.g&&2<=it(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(H(o[f]))continue;var h=I(o[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=u[w]||[];u[w]=b,b.push(h)}E(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function nu(o){this.Aa=0,this.i=[],this.j=new Jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,o),this.cb=sr("retryDelaySeedMs",1e4,o),this.Wa=sr("forwardChannelMaxRetries",2,o),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Lc(o&&o.concurrentRequestLimit),this.Da=new Bm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=nu.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,f){Pe(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=hu(this,null,this.W),ci(this)};function to(o){if(ru(o),o.G==3){var u=o.U++,h=rt(o.I);if(ee(h,"SID",o.K),ee(h,"RID",u),ee(h,"TYPE","terminate"),or(o,h),u=new gt(o,o.j,u),u.L=2,u.v=ri(rt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=du(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ei(u)}lu(o)}function ai(o){o.g&&(ro(o),o.g.cancel(),o.g=null)}function ru(o){ai(o),o.u&&(c.clearTimeout(o.u),o.u=null),ui(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ci(o){if(!Uc(o.h)&&!o.s){o.s=!0;var u=o.Ga;Wn||gc(),Hn||(Wn(),Hn=!0),Ms.add(u,o),o.B=0}}function Hm(o,u){return Fc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Yn(T(o.Ga,o,u),uu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new gt(this,this.j,o);let b=this.o;if(this.S&&(b?(b=g(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(w.H=b,b=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=su(this,w,u),h=rt(this.I),ee(h,"RID",o),ee(h,"CVER",22),this.D&&ee(h,"X-HTTP-Session-Id",this.D),or(this,h),b&&(this.O?u="headers="+encodeURIComponent(String(Xc(b)))+"&"+u:this.m&&eo(h,this.m,b)),Zs(this.h,w),this.Ua&&ee(h,"TYPE","init"),this.P?(ee(h,"$req",u),ee(h,"SID","null"),w.T=!0,Qs(w,h,null)):Qs(w,h,u),this.G=2}}else this.G==3&&(o?iu(this,o):this.i.length==0||Uc(this.h)||iu(this))};function iu(o,u){var h;u?h=u.l:h=o.U++;const f=rt(o.I);ee(f,"SID",o.K),ee(f,"RID",h),ee(f,"AID",o.T),or(o,f),o.m&&o.o&&eo(f,o.m,o.o),h=new gt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=su(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Zs(o.h,h),Qs(h,f,u)}function or(o,u){o.H&&Z(o.H,function(h,f){ee(u,f,h)}),o.l&&$c({},function(h,f){ee(u,f,h)})}function su(o,u,h){h=Math.min(o.i.length,h);var f=o.l?T(o.l.Na,o.l,o):null;e:{var w=o.i;let b=-1;for(;;){const D=["count="+h];b==-1?0<h?(b=w[0].g,D.push("ofs="+b)):b=0:D.push("ofs="+b);let Y=!0;for(let fe=0;fe<h;fe++){let Q=w[fe].g;const ve=w[fe].map;if(Q-=b,0>Q)b=Math.max(0,w[fe].g-100),Y=!1;else try{$m(ve,D,"req"+Q+"_")}catch{f&&f(ve)}}if(Y){f=D.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,f}function ou(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Wn||gc(),Hn||(Wn(),Hn=!0),Ms.add(u,o),o.v=0}}function no(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Yn(T(o.Fa,o),uu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,au(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Yn(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pe(10),ai(this),au(this))};function ro(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function au(o){o.g=new gt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=rt(o.qa);ee(u,"RID","rpc"),ee(u,"SID",o.K),ee(u,"AID",o.T),ee(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ee(u,"TO",o.ja),ee(u,"TYPE","xmlhttp"),or(o,u),o.m&&o.o&&eo(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ri(rt(u)),h.m=null,h.P=!0,Vc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ai(this),no(this),Pe(19))};function ui(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function cu(o,u){var h=null;if(o.g==u){ui(o),ro(o),o.g=null;var f=2}else if(Js(o.h,u))h=u.D,jc(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var w=o.B;f=Yr(),Se(f,new kc(f,h)),ci(o)}else ou(o);else if(w=u.s,w==3||w==0&&0<u.X||!(f==1&&Hm(o,u)||f==2&&no(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),w){case 1:Gt(o,5);break;case 4:Gt(o,10);break;case 3:Gt(o,6);break;default:Gt(o,2)}}}function uu(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Gt(o,u){if(o.j.info("Error code "+u),u==2){var h=T(o.fb,o),f=o.Xa;const w=!f;f=new Ht(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ti(f,"https"),ri(f),w?Fm(f.toString(),h):jm(f.toString(),h)}else Pe(2);o.G=0,o.l&&o.l.sa(u),lu(o),ru(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function lu(o){if(o.G=0,o.ka=[],o.l){const u=Bc(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function hu(o,u,h){var f=h instanceof Ht?rt(h):new Ht(h);if(f.g!="")u&&(f.g=u+"."+f.g),ni(f,f.s);else{var w=c.location;f=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var b=new Ht(null);f&&ti(b,f),u&&(b.g=u),w&&ni(b,w),h&&(b.l=h),f=b}return h=o.D,u=o.ya,h&&u&&ee(f,h,u),ee(f,"VER",o.la),or(o,f),f}function du(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new re(new ii({eb:h})):new re(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fu(){}n=fu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function li(){}li.prototype.g=function(o,u){return new De(o,u)};function De(o,u){ye.call(this),this.g=new nu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!H(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!H(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new mn(this)}N(De,ye),De.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){to(this.g)},De.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=qs(o),o=h);u.i.push(new Cm(u.Ya++,o)),u.G==3&&ci(u)},De.prototype.N=function(){this.g.l=null,delete this.j,to(this.g),delete this.g,De.aa.N.call(this)};function pu(o){Ws.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}N(pu,Ws);function mu(){Hs.call(this),this.status=1}N(mu,Hs);function mn(o){this.g=o}N(mn,fu),mn.prototype.ua=function(){Se(this.g,"a")},mn.prototype.ta=function(o){Se(this.g,new pu(o))},mn.prototype.sa=function(o){Se(this.g,new mu)},mn.prototype.ra=function(){Se(this.g,"b")},li.prototype.createWebChannel=li.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,Sd=function(){return new li},bd=function(){return Yr()},Rd=zt,Fo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jr.NO_ERROR=0,Jr.TIMEOUT=8,Jr.HTTP_ERROR=6,ki=Jr,Nc.COMPLETE="complete",Ad=Nc,bc.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",ye.prototype.listen=ye.prototype.K,ur=bc,re.prototype.listenOnce=re.prototype.L,re.prototype.getLastError=re.prototype.Ka,re.prototype.getLastErrorCode=re.prototype.Ba,re.prototype.getStatus=re.prototype.Z,re.prototype.getResponseJson=re.prototype.Oa,re.prototype.getResponseText=re.prototype.oa,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Ha,wd=re}).apply(typeof pi<"u"?pi:typeof self<"u"?self:typeof window<"u"?window:{});const Xu="@firebase/firestore",Yu="4.7.10";/**
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
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
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
 */let Un="11.5.0";/**
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
 */const tn=new Vr("@firebase/firestore");function yn(){return tn.logLevel}function V(n,...e){if(tn.logLevel<=z.DEBUG){const t=e.map(Ta);tn.debug(`Firestore (${Un}): ${n}`,...t)}}function dt(n,...e){if(tn.logLevel<=z.ERROR){const t=e.map(Ta);tn.error(`Firestore (${Un}): ${n}`,...t)}}function kn(n,...e){if(tn.logLevel<=z.WARN){const t=e.map(Ta);tn.warn(`Firestore (${Un}): ${n}`,...t)}}function Ta(n){if(typeof n=="string")return n;try{/**
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
 */function U(n="Unexpected state"){const e=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+n;throw dt(e),new Error(e)}function X(n,e){n||U()}function j(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Fe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ct{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Pd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ie.UNAUTHENTICATED))}shutdown(){}}class Zv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eT{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ct,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ct)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new Pd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new Ie(e)}}class tT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new tT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ju{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rT{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Oe(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){X(this.o===void 0);const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ju(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string"),this.R=t.token,new Ju(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Cd(){return new TextEncoder}/**
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
 */class kd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=iT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function jo(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return q(r,i);{const s=Cd(),a=sT(s.encode(Zu(n,t)),s.encode(Zu(e,t)));return a!==0?a:q(r,i)}}t+=r>65535?2:1}return q(n.length,e.length)}function Zu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function sT(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return q(n[t],e[t]);return q(n.length,e.length)}function Nn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const el=-62135596800,tl=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*tl);return new ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<el)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tl}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-el;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new ae(0,0))}static max(){return new F(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const nl="__name__";class Ke{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ke.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ke?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Ke.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return q(e.length,t.length)}static compareSegments(e,t){const r=Ke.isNumericId(e),i=Ke.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ke.extractNumericId(e).compare(Ke.extractNumericId(t)):jo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ct.fromString(e.substring(4,e.length-2))}}class te extends Ke{construct(e,t,r){return new te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new te(t)}static emptyPath(){return new te([])}}const oT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends Ke{construct(e,t,r){return new me(e,t,r)}static isValidIdentifier(e){return oT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nl}static keyField(){return new me([nl])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(te.fromString(e))}static fromName(e){return new x(te.fromString(e).popFirst(5))}static empty(){return new x(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new te(e.slice()))}}/**
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
 */const Rr=-1;function aT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new Dt(i,x.empty(),e)}function cT(n){return new Dt(n.readTime,n.key,Rr)}class Dt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Dt(F.min(),x.empty(),Rr)}static max(){return new Dt(F.max(),x.empty(),Rr)}}function uT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
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
 */const lT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==lT)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new S((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function dT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class gs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}gs.ae=-1;/**
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
 */const Ea=-1;function _s(n){return n==null}function Gi(n){return n===0&&1/n==-1/0}function fT(n){return typeof n=="number"&&Number.isInteger(n)&&!Gi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Nd="";function pT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=rl(e)),e=mT(n.get(t),e);return rl(e)}function mT(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Nd:t+="";break;default:t+=s}}return t}function rl(n){return n+Nd+""}/**
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
 */function il(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ne{constructor(e,t){this.comparator=e,this.root=t||pe.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pe.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mi(this.root,e,this.comparator,!0)}}class mi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??pe.RED,this.left=i??pe.EMPTY,this.right=s??pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new pe(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return pe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}pe.EMPTY=null,pe.RED=!0,pe.BLACK=!1;pe.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,i,s){return this}insert(e,t,r){return new pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ce{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sl(this.data.getIterator())}getIteratorFrom(e){return new sl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class sl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ze{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new ze([])}unionWith(e){let t=new ce(me.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Nn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Od extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Od("Invalid base64 string: "+s):s}}(e);return new ge(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const gT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(n){if(X(!!n),typeof n=="string"){let e=0;const t=gT.exec(n);if(X(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ie(n.seconds),nanos:ie(n.nanos)}}function ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vt(n){return typeof n=="string"?ge.fromBase64String(n):ge.fromUint8Array(n)}/**
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
 */const Vd="server_timestamp",Md="__type__",xd="__previous_value__",Ld="__local_write_time__";function Ia(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Md])===null||t===void 0?void 0:t.stringValue)===Vd}function ys(n){const e=n.mapValue.fields[xd];return Ia(e)?ys(e):e}function br(n){const e=Ot(n.mapValue.fields[Ld].timestampValue);return new ae(e.seconds,e.nanos)}/**
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
 */class _T{constructor(e,t,r,i,s,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}const Ki="(default)";class Sr{constructor(e,t){this.projectId=e,this.database=t||Ki}static empty(){return new Sr("","")}get isDefaultDatabase(){return this.database===Ki}isEqual(e){return e instanceof Sr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ud="__type__",yT="__max__",gi={mapValue:{}},Fd="__vector__",Qi="value";function Mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ia(n)?4:TT(n)?9007199254740991:vT(n)?10:11:U()}function Ze(n,e){if(n===e)return!0;const t=Mt(n);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return br(n).isEqual(br(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Ot(i.timestampValue),c=Ot(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Vt(i.bytesValue).isEqual(Vt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ie(i.geoPointValue.latitude)===ie(s.geoPointValue.latitude)&&ie(i.geoPointValue.longitude)===ie(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ie(i.integerValue)===ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ie(i.doubleValue),c=ie(s.doubleValue);return a===c?Gi(a)===Gi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Nn(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(il(a)!==il(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Ze(a[l],c[l])))return!1;return!0}(n,e);default:return U()}}function Pr(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function Dn(n,e){if(n===e)return 0;const t=Mt(n),r=Mt(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=ie(s.integerValue||s.doubleValue),l=ie(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return ol(n.timestampValue,e.timestampValue);case 4:return ol(br(n),br(e));case 5:return jo(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Vt(s),l=Vt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const p=q(c[d],l[d]);if(p!==0)return p}return q(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=q(ie(s.latitude),ie(a.latitude));return c!==0?c:q(ie(s.longitude),ie(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return al(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,l,d,p;const m=s.fields||{},T=a.fields||{},R=(c=m[Qi])===null||c===void 0?void 0:c.arrayValue,N=(l=T[Qi])===null||l===void 0?void 0:l.arrayValue,O=q(((d=R?.values)===null||d===void 0?void 0:d.length)||0,((p=N?.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:al(R,N)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===gi.mapValue&&a===gi.mapValue)return 0;if(s===gi.mapValue)return 1;if(a===gi.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let m=0;m<l.length&&m<p.length;++m){const T=jo(l[m],p[m]);if(T!==0)return T;const R=Dn(c[l[m]],d[p[m]]);if(R!==0)return R}return q(l.length,p.length)}(n.mapValue,e.mapValue);default:throw U()}}function ol(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=Ot(n),r=Ot(e),i=q(t.seconds,r.seconds);return i!==0?i:q(t.nanos,r.nanos)}function al(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Dn(t[i],r[i]);if(s)return s}return q(t.length,r.length)}function On(n){return Bo(n)}function Bo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ot(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return x.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Bo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Bo(t.fields[a])}`;return i+"}"}(n.mapValue):U()}function Ni(n){switch(Mt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ys(n);return e?16+Ni(e):16;case 5:return 2*n.stringValue.length;case 6:return Vt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ni(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return un(r.fields,(s,a)=>{i+=s.length+Ni(a)}),i}(n.mapValue);default:throw U()}}function cl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $o(n){return!!n&&"integerValue"in n}function wa(n){return!!n&&"arrayValue"in n}function ul(n){return!!n&&"nullValue"in n}function ll(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Di(n){return!!n&&"mapValue"in n}function vT(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ud])===null||t===void 0?void 0:t.stringValue)===Fd}function pr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return un(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=pr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function TT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===yT}/**
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
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Di(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pr(t)}setAll(e){let t=me.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=pr(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Di(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Di(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){un(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Le(pr(this.value))}}function jd(n){const e=[];return un(n.fields,(t,r)=>{const i=new me([t]);if(Di(r)){const s=jd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new ze(e)}/**
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
 */class Ae{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ae(e,0,F.min(),F.min(),F.min(),Le.empty(),0)}static newFoundDocument(e,t,r,i){return new Ae(e,1,t,F.min(),r,i,0)}static newNoDocument(e,t){return new Ae(e,2,t,F.min(),F.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,F.min(),F.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xi{constructor(e,t){this.position=e,this.inclusive=t}}function hl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),t.key):r=Dn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Yi{constructor(e,t="asc"){this.field=e,this.dir=t}}function ET(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Bd{}class oe extends Bd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wT(e,t,r):t==="array-contains"?new bT(e,r):t==="in"?new ST(e,r):t==="not-in"?new PT(e,r):t==="array-contains-any"?new CT(e,r):new oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new AT(e,r):new RT(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Dn(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(Dn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ge extends Bd{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Ge(e,t)}matches(e){return $d(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function $d(n){return n.op==="and"}function qd(n){return IT(n)&&$d(n)}function IT(n){for(const e of n.filters)if(e instanceof Ge)return!1;return!0}function qo(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+On(n.value);if(qd(n))return n.filters.map(e=>qo(e)).join(",");{const e=n.filters.map(t=>qo(t)).join(",");return`${n.op}(${e})`}}function zd(n,e){return n instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Ze(r.value,i.value)}(n,e):n instanceof Ge?function(r,i){return i instanceof Ge&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&zd(a,i.filters[c]),!0):!1}(n,e):void U()}function Wd(n){return n instanceof oe?function(t){return`${t.field.canonicalString()} ${t.op} ${On(t.value)}`}(n):n instanceof Ge?function(t){return t.op.toString()+" {"+t.getFilters().map(Wd).join(" ,")+"}"}(n):"Filter"}class wT extends oe{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class AT extends oe{constructor(e,t){super(e,"in",t),this.keys=Hd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class RT extends oe{constructor(e,t){super(e,"not-in",t),this.keys=Hd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>x.fromName(r.referenceValue))}class bT extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wa(t)&&Pr(t.arrayValue,this.value)}}class ST extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pr(this.value.arrayValue,t)}}class PT extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Pr(this.value.arrayValue,t)}}class CT extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Pr(this.value.arrayValue,r))}}/**
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
 */class kT{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.le=null}}function fl(n,e=null,t=[],r=[],i=null,s=null,a=null){return new kT(n,e,t,r,i,s,a)}function Aa(n){const e=j(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>qo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>On(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>On(r)).join(",")),e.le=t}return e.le}function Ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ET(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!dl(n.startAt,e.startAt)&&dl(n.endAt,e.endAt)}function zo(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class jr{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function NT(n,e,t,r,i,s,a,c){return new jr(n,e,t,r,i,s,a,c)}function ba(n){return new jr(n)}function pl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gd(n){return n.collectionGroup!==null}function mr(n){const e=j(n);if(e.he===null){e.he=[];const t=new Set;for(const s of e.explicitOrderBy)e.he.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ce(me.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new Yi(s,r))}),t.has(me.keyField().canonicalString())||e.he.push(new Yi(me.keyField(),r))}return e.he}function Ye(n){const e=j(n);return e.Pe||(e.Pe=DT(e,mr(n))),e.Pe}function DT(n,e){if(n.limitType==="F")return fl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yi(i.field,s)});const t=n.endAt?new Xi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xi(n.startAt.position,n.startAt.inclusive):null;return fl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wo(n,e){const t=n.filters.concat([e]);return new jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ho(n,e,t){return new jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vs(n,e){return Ra(Ye(n),Ye(e))&&n.limitType===e.limitType}function Kd(n){return`${Aa(Ye(n))}|lt:${n.limitType}`}function vn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Wd(i)).join(", ")}]`),_s(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>On(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>On(i)).join(",")),`Target(${r})`}(Ye(n))}; limitType=${n.limitType})`}function Ts(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):x.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of mr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){const d=hl(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,mr(r),i)||r.endAt&&!function(a,c,l){const d=hl(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,mr(r),i))}(n,e)}function OT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qd(n){return(e,t)=>{let r=!1;for(const i of mr(n)){const s=VT(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VT(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):function(s,a,c){const l=a.data.field(s),d=c.data.field(s);return l!==null&&d!==null?Dn(l,d):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class ln{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Dd(this.inner)}size(){return this.innerSize}}/**
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
 */const MT=new ne(x.comparator);function ft(){return MT}const Xd=new ne(x.comparator);function lr(...n){let e=Xd;for(const t of n)e=e.insert(t.key,t);return e}function Yd(n){let e=Xd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Qt(){return gr()}function Jd(){return gr()}function gr(){return new ln(n=>n.toString(),(n,e)=>n.isEqual(e))}const xT=new ne(x.comparator),LT=new ce(x.comparator);function W(...n){let e=LT;for(const t of n)e=e.add(t);return e}const UT=new ce(q);function FT(){return UT}/**
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
 */function Sa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gi(e)?"-0":e}}function Zd(n){return{integerValue:""+n}}function jT(n,e){return fT(e)?Zd(e):Sa(n,e)}/**
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
 */class Es{constructor(){this._=void 0}}function BT(n,e,t){return n instanceof Cr?function(i,s){const a={fields:{[Md]:{stringValue:Vd},[Ld]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ia(s)&&(s=ys(s)),s&&(a.fields[xd]=s),{mapValue:a}}(t,e):n instanceof kr?tf(n,e):n instanceof Nr?nf(n,e):function(i,s){const a=ef(i,s),c=ml(a)+ml(i.Ie);return $o(a)&&$o(i.Ie)?Zd(c):Sa(i.serializer,c)}(n,e)}function $T(n,e,t){return n instanceof kr?tf(n,e):n instanceof Nr?nf(n,e):t}function ef(n,e){return n instanceof Ji?function(r){return $o(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Cr extends Es{}class kr extends Es{constructor(e){super(),this.elements=e}}function tf(n,e){const t=rf(e);for(const r of n.elements)t.some(i=>Ze(i,r))||t.push(r);return{arrayValue:{values:t}}}class Nr extends Es{constructor(e){super(),this.elements=e}}function nf(n,e){let t=rf(e);for(const r of n.elements)t=t.filter(i=>!Ze(i,r));return{arrayValue:{values:t}}}class Ji extends Es{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ml(n){return ie(n.integerValue||n.doubleValue)}function rf(n){return wa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class qT{constructor(e,t){this.field=e,this.transform=t}}function zT(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof kr&&i instanceof kr||r instanceof Nr&&i instanceof Nr?Nn(r.elements,i.elements,Ze):r instanceof Ji&&i instanceof Ji?Ze(r.Ie,i.Ie):r instanceof Cr&&i instanceof Cr}(n.transform,e.transform)}class WT{constructor(e,t){this.version=e,this.transformResults=t}}class ut{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Is{}function sf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new af(n.key,ut.none()):new Br(n.key,n.data,ut.none());{const t=n.data,r=Le.empty();let i=new ce(me.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new hn(n.key,r,new ze(i.toArray()),ut.none())}}function HT(n,e,t){n instanceof Br?function(i,s,a){const c=i.value.clone(),l=_l(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof hn?function(i,s,a){if(!Oi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=_l(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(of(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function _r(n,e,t,r){return n instanceof Br?function(s,a,c,l){if(!Oi(s.precondition,a))return c;const d=s.value.clone(),p=yl(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof hn?function(s,a,c,l){if(!Oi(s.precondition,a))return c;const d=yl(s.fieldTransforms,l,a),p=a.data;return p.setAll(of(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,c){return Oi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function GT(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=ef(r.transform,i||null);s!=null&&(t===null&&(t=Le.empty()),t.set(r.field,s))}return t||null}function gl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Nn(r,i,(s,a)=>zT(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Br extends Is{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hn extends Is{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function of(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function _l(n,e,t){const r=new Map;X(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,$T(a,c,t[i]))}return r}function yl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,BT(s,a,e))}return r}class af extends Is{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KT extends Is{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QT{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&HT(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_r(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_r(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Jd();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const l=sf(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&Nn(this.mutations,e.mutations,(t,r)=>gl(t,r))&&Nn(this.baseMutations,e.baseMutations,(t,r)=>gl(t,r))}}class Pa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){X(e.mutations.length===r.length);let i=function(){return xT}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Pa(e,t,r,i)}}/**
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
 */class XT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class YT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var se,G;function JT(n){switch(n){case P.OK:return U();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return U()}}function cf(n){if(n===void 0)return dt("GRPC error has no .code"),P.UNKNOWN;switch(n){case se.OK:return P.OK;case se.CANCELLED:return P.CANCELLED;case se.UNKNOWN:return P.UNKNOWN;case se.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case se.INTERNAL:return P.INTERNAL;case se.UNAVAILABLE:return P.UNAVAILABLE;case se.UNAUTHENTICATED:return P.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case se.NOT_FOUND:return P.NOT_FOUND;case se.ALREADY_EXISTS:return P.ALREADY_EXISTS;case se.PERMISSION_DENIED:return P.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case se.ABORTED:return P.ABORTED;case se.OUT_OF_RANGE:return P.OUT_OF_RANGE;case se.UNIMPLEMENTED:return P.UNIMPLEMENTED;case se.DATA_LOSS:return P.DATA_LOSS;default:return U()}}(G=se||(se={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ZT=new Ct([4294967295,4294967295],0);function vl(n){const e=Cd().encode(n),t=new Id;return t.update(e),new Uint8Array(t.digest())}function Tl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ct([t,r],0),new Ct([i,s],0)]}class Ca{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hr(`Invalid padding: ${t}`);if(r<0)throw new hr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Ct.fromNumber(this.Ee)}Ae(e,t,r){let i=e.add(t.multiply(Ct.fromNumber(r)));return i.compare(ZT)===1&&(i=new Ct([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=vl(e),[r,i]=Tl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ae(r,i,s);if(!this.Re(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Ca(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ee===0)return;const t=vl(e),[r,i]=Tl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ae(r,i,s);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ws{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,$r.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ws(F.min(),i,new ne(q),ft(),W())}}class $r{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $r(r,t,W(),W(),W())}}/**
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
 */class Vi{constructor(e,t,r,i){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=i}}class uf{constructor(e,t){this.targetId=e,this.ge=t}}class lf{constructor(e,t,r=ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class El{constructor(){this.pe=0,this.ye=Il(),this.we=ge.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=W(),t=W(),r=W();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:U()}}),new $r(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=Il()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,X(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class eE{constructor(e){this.ke=e,this.qe=new Map,this.Qe=ft(),this.$e=_i(),this.Ue=_i(),this.Ke=new ne(q)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,r=e.ge.count,i=this.Xe(t);if(i){const s=i.target;if(zo(s))if(r===0){const a=new x(s.path);this.ze(t,a,Ae.newNoDocument(a,F.min()))}else X(r===1);else{const a=this.et(t);if(a!==r){const c=this.tt(e),l=c?this.nt(c,e,a):1;if(l!==0){this.Ye(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Vt(r).toUint8Array()}catch(l){if(l instanceof Od)return kn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ca(a,i,s)}catch(l){return kn(l instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.ze(t,s,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((s,a)=>{const c=this.Xe(a);if(c){if(s.current&&zo(c.target)){const l=new x(c.target.path);this._t(l).has(a)||this.ut(a,l)||this.ze(a,l,Ae.newNoDocument(l,e))}s.ve&&(t.set(a,s.Fe()),s.Me())}});let r=W();this.Ue.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Xe(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.Qe.forEach((s,a)=>a.setReadTime(e));const i=new ws(e,t,this.Ke,this.Qe,r);return this.Qe=ft(),this.$e=_i(),this.Ue=_i(),this.Ke=new ne(q),i}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new El,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new ce(q),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new ce(q),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new El),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function _i(){return new ne(x.comparator)}function Il(){return new ne(x.comparator)}const tE={asc:"ASCENDING",desc:"DESCENDING"},nE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rE={and:"AND",or:"OR"};class iE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Go(n,e){return n.useProto3Json||_s(e)?e:{value:e}}function Zi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function sE(n,e){return Zi(n,e.toTimestamp())}function Je(n){return X(!!n),F.fromTimestamp(function(t){const r=Ot(t);return new ae(r.seconds,r.nanos)}(n))}function ka(n,e){return Ko(n,e).canonicalString()}function Ko(n,e){const t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function df(n){const e=te.fromString(n);return X(_f(e)),e}function Qo(n,e){return ka(n.databaseId,e.path)}function fo(n,e){const t=df(e);if(t.get(1)!==n.databaseId.projectId)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(pf(t))}function ff(n,e){return ka(n.databaseId,e)}function oE(n){const e=df(n);return e.length===4?te.emptyPath():pf(e)}function Xo(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pf(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wl(n,e,t){return{name:Qo(n,e),fields:t.value.mapValue.fields}}function aE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(X(p===void 0||typeof p=="string"),ge.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ge.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?P.UNKNOWN:cf(d.code);return new M(p,d.message||"")}(a);t=new lf(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fo(n,r.document.name),s=Je(r.document.updateTime),a=r.document.createTime?Je(r.document.createTime):F.min(),c=new Le({mapValue:{fields:r.document.fields}}),l=Ae.newFoundDocument(i,s,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Vi(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fo(n,r.document),s=r.readTime?Je(r.readTime):F.min(),a=Ae.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Vi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fo(n,r.document),s=r.removedTargetIds||[];t=new Vi([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new YT(i,s),c=r.targetId;t=new uf(c,a)}}return t}function cE(n,e){let t;if(e instanceof Br)t={update:wl(n,e.key,e.value)};else if(e instanceof af)t={delete:Qo(n,e.key)};else if(e instanceof hn)t={update:wl(n,e.key,e.data),updateMask:_E(e.fieldMask)};else{if(!(e instanceof KT))return U();t={verify:Qo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof Cr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof kr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Nr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ji)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:sE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(n,e.precondition)),t}function uE(n,e){return n&&n.length>0?(X(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Je(i.updateTime):Je(s);return a.isEqual(F.min())&&(a=Je(s)),new WT(a,i.transformResults||[])}(t,e))):[]}function lE(n,e){return{documents:[ff(n,e.path)]}}function hE(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ff(n,i);const s=function(d){if(d.length!==0)return gf(Ge.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:Tn(T.field),direction:pE(T.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Go(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ht:t,parent:i}}function dE(n){let e=oE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){X(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(m){const T=mf(m);return T instanceof Ge&&qd(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(T=>function(N){return new Yi(En(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(m){let T;return T=typeof m=="object"?m.value:m,_s(T)?null:T}(t.limit));let l=null;t.startAt&&(l=function(m){const T=!!m.before,R=m.values||[];return new Xi(R,T)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const T=!m.before,R=m.values||[];return new Xi(R,T)}(t.endAt)),NT(e,i,a,s,c,"F",l,d)}function fE(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=En(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=En(t.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=En(t.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=En(t.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return oe.create(En(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ge.create(t.compositeFilter.filters.map(r=>mf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function pE(n){return tE[n]}function mE(n){return nE[n]}function gE(n){return rE[n]}function Tn(n){return{fieldPath:n.canonicalString()}}function En(n){return me.fromServerFormat(n.fieldPath)}function gf(n){return n instanceof oe?function(t){if(t.op==="=="){if(ll(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NAN"}};if(ul(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ll(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NAN"}};if(ul(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(t.field),op:mE(t.op),value:t.value}}}(n):n instanceof Ge?function(t){const r=t.getFilters().map(i=>gf(i));return r.length===1?r[0]:{compositeFilter:{op:gE(t.op),filters:r}}}(n):U()}function _E(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _f(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class bt{constructor(e,t,r,i,s=F.min(),a=F.min(),c=ge.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yE{constructor(e){this.Tt=e}}function vE(n){const e=dE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ho(e,e.limit,"L"):e}/**
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
 */class TE{constructor(){this.Tn=new EE}addToCollectionParentIndex(e,t){return this.Tn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(Dt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class EE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ce(te.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ce(te.comparator)).toArray()}}/**
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
 */const Al={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yf=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(yf,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);/**
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
 */class Vn{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Vn(0)}static Kn(){return new Vn(-1)}}/**
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
 */const Rl="LruGarbageCollector",IE=1048576;function bl([n,e],[t,r]){const i=q(n,t);return i===0?q(e,r):i}class wE{constructor(e){this.Hn=e,this.buffer=new ce(bl),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();bl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){V(Rl,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jn(t)?V(Rl,"Ignoring IndexedDB error during garbage collection: ",t):await Fn(t)}await this.er(3e5)})}}class RE{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(gs.ae);const r=new wE(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Al)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Al):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,s,a,c,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),yn()<=z.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function bE(n,e){return new RE(n,e)}/**
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
 */class SE{constructor(){this.changes=new ln(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class CE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&_r(r.mutation,i,ze.empty(),ae.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const i=Qt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=lr();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Qt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=ft();const a=gr(),c=function(){return gr()}();return t.forEach((l,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof hn)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),_r(p.mutation,d,p.mutation.getFieldMask(),ae.now())):a.set(d.key,ze.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var m;return c.set(d,new PE(p,(m=a.get(d))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=gr();let i=new ne((a,c)=>a-c),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||ze.empty();p=c.applyToLocalView(d,p),r.set(l,p);const m=(i.get(c.batchId)||W()).add(l);i=i.insert(c.batchId,m)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,p=l.value,m=Jd();p.forEach(T=>{if(!s.has(T)){const R=sf(t.get(T),r.get(T));R!==null&&m.set(T,R),s=s.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):S.resolve(Qt());let c=Rr,l=s;return a.next(d=>S.forEach(d,(p,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{l=l.insert(p,T)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,W())).next(p=>({batchId:c,changes:Yd(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(r=>{let i=lr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=lr();return this.indexManager.getCollectionParents(e,s).next(c=>S.forEach(c,l=>{const d=function(m,T){return new jr(T,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((m,T)=>{a=a.insert(m,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ae.newInvalidDocument(p)))});let c=lr();return a.forEach((l,d)=>{const p=s.get(l);p!==void 0&&_r(p.mutation,d,ze.empty(),ae.now()),Ts(t,d)&&(c=c.insert(l,d))}),c})}}/**
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
 */class kE{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return S.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Je(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:vE(i.bundledQuery),readTime:Je(i.readTime)}}(t)),S.resolve()}}/**
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
 */class NE{constructor(){this.overlays=new ne(x.comparator),this.Rr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Qt();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Et(e,t,s)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=Qt(),s=t.length+1,a=new x(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ne((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Qt(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Qt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return S.resolve(c)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new XT(t,r));let s=this.Rr.get(t);s===void 0&&(s=W(),this.Rr.set(t,s)),this.Rr.set(t,s.add(r.key))}}/**
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
 */class DE{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class Na{constructor(){this.Vr=new ce(he.mr),this.gr=new ce(he.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new he(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new he(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new x(new te([])),r=new he(t,e),i=new he(t,e+1),s=[];return this.gr.forEachInRange([r,i],a=>{this.wr(a),s.push(a.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new x(new te([])),r=new he(t,e),i=new he(t,e+1);let s=W();return this.gr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new he(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class he{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return x.comparator(e.key,t.key)||q(e.Cr,t.Cr)}static pr(e,t){return q(e.Cr,t.Cr)||x.comparator(e.key,t.key)}}/**
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
 */class OE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new ce(he.mr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new QT(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.Mr=this.Mr.add(new he(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Ea:this.Fr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new he(t,0),i=new he(t,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],a=>{const c=this.Or(a.Cr);s.push(c)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(q);return t.forEach(i=>{const s=new he(i,0),a=new he(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,a],c=>{r=r.add(c.Cr)})}),S.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;x.isDocumentKey(s)||(s=s.child(""));const a=new he(new x(s),0);let c=new ce(q);return this.Mr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.Cr)),!0)},a),S.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){X(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return S.forEach(t.mutations,i=>{const s=new he(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new he(t,0),i=this.Mr.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class VE{constructor(e){this.kr=e,this.docs=function(){return new ne(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=ft();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ae.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ft();const a=t.path,c=new x(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||uT(cT(p),r)<=0||(i.has(p.key)||Ts(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,t,r,i){U()}qr(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ME(this)}getSize(e){return S.resolve(this.size)}}class ME extends SE{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class xE{constructor(e){this.persistence=e,this.Qr=new ln(t=>Aa(t),Ra),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Na,this.targetCount=0,this.Kr=Vn.Un()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),S.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Vn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.zn(t),S.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Ur.containsKey(t))}}/**
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
 */class vf{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new gs(0),this.zr=!1,this.zr=!0,this.jr=new DE,this.referenceDelegate=e(this),this.Hr=new xE(this),this.indexManager=new TE,this.remoteDocumentCache=function(i){return new VE(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new yE(t),this.Yr=new kE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new NE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new OE(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const i=new LE(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,t){return S.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class LE extends hT{constructor(e){super(),this.currentSequenceNumber=e}}class Da{constructor(e){this.persistence=e,this.ti=new Na,this.ni=null}static ri(e){return new Da(e)}get ii(){if(this.ni)return this.ni;throw U()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),S.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.ii,r=>{const i=x.fromPath(r);return this.si(e,i).next(s=>{s||t.removeEntry(i,F.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return S.or([()=>S.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class es{constructor(e,t){this.persistence=e,this.oi=new ln(r=>pT(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=bE(this,t)}static ri(e,t){return new es(e,t)}Zr(){}Xr(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return S.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?S.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,a=>this.ar(e,a,t).next(c=>{c||(r++,s.removeEntry(a,F.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),S.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ni(e.data.value)),t}ar(e,t,r){return S.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Oa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=W(),i=W();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Oa(e,t.fromCache,r,i)}}/**
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
 */class UE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class FE{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return yg()?8:dT(be())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.rs(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ss(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new UE;return this._s(e,t,a).next(c=>{if(s.result=c,this.Xi)return this.us(e,t,a,c.size)})}).next(()=>s.result)}us(e,t,r,i){return r.documentReadCount<this.es?(yn()<=z.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",vn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),S.resolve()):(yn()<=z.DEBUG&&V("QueryEngine","Query:",vn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(yn()<=z.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",vn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ye(t))):S.resolve())}rs(e,t){if(pl(t))return S.resolve(null);let r=Ye(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ho(t,null,"F"),r=Ye(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=W(...s);return this.ns.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.cs(t,c);return this.ls(t,d,a,l.readTime)?this.rs(e,Ho(t,null,"F")):this.hs(e,d,t,l)}))})))}ss(e,t,r,i){return pl(t)||i.isEqual(F.min())?S.resolve(null):this.ns.getDocuments(e,r).next(s=>{const a=this.cs(t,s);return this.ls(t,a,r,i)?S.resolve(null):(yn()<=z.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vn(t)),this.hs(e,a,t,aT(i,Rr)).next(c=>c))})}cs(e,t){let r=new ce(Qd(e));return t.forEach((i,s)=>{Ts(e,s)&&(r=r.add(s))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,t,r){return yn()<=z.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",vn(t)),this.ns.getDocumentsMatchingQuery(e,t,Dt.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const Va="LocalStore",jE=3e8;class BE{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new ne(q),this.Is=new ln(s=>Aa(s),Ra),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CE(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function $E(n,e,t,r){return new BE(n,e,t,r)}async function Tf(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let l=W();for(const d of i){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of s){c.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:c}))})})}function qE(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){const m=d.batch,T=m.keys();let R=S.resolve();return T.forEach(N=>{R=R.next(()=>p.getEntry(l,N)).next(O=>{const k=d.docVersions.get(N);X(k!==null),O.version.compareTo(k)<0&&(m.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=W();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Ef(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function zE(n,e){const t=j(n),r=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const c=[];e.targetChanges.forEach((p,m)=>{const T=i.get(m);if(!T)return;c.push(t.Hr.removeMatchingKeys(s,p.removedDocuments,m).next(()=>t.Hr.addMatchingKeys(s,p.addedDocuments,m)));let R=T.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(ge.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(m,R),function(O,k,B){return O.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=jE?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(T,R,p)&&c.push(t.Hr.updateTargetData(s,R))});let l=ft(),d=W();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(WE(s,a,e.documentUpdates).next(p=>{l=p.Vs,d=p.fs})),!r.isEqual(F.min())){const p=t.Hr.getLastRemoteSnapshotVersion(s).next(m=>t.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return S.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.Ts=i,s))}function WE(n,e,t){let r=W(),i=W();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=ft();return t.forEach((c,l)=>{const d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):V(Va,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Vs:a,fs:i}})}function HE(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ea),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GE(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Hr.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):t.Hr.allocateTargetId(r).next(a=>(i=new bt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function Yo(n,e,t){const r=j(n),i=r.Ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!jn(a))throw a;V(Va,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function Sl(n,e,t){const r=j(n);let i=F.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const m=j(l),T=m.Is.get(p);return T!==void 0?S.resolve(m.Ts.get(T)):m.Hr.getTargetData(d,p)}(r,a,Ye(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?i:F.min(),t?s:W())).next(c=>(KE(r,OT(e),c),{documents:c,gs:s})))}function KE(n,e,t){let r=n.Es.get(e)||F.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Es.set(e,r)}class Pl{constructor(){this.activeTargetIds=FT()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QE{constructor(){this.ho=new Pl,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Pl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XE{To(e){}shutdown(){}}/**
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
 */const Cl="ConnectivityMonitor";class kl{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){V(Cl,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){V(Cl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yi=null;function Jo(){return yi===null?yi=function(){return 268435456+Math.round(2147483648*Math.random())}():yi++,"0x"+yi.toString(16)}/**
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
 */const po="RestConnection",YE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JE{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===Ki?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,t,r,i,s){const a=Jo(),c=this.bo(e,t.toUriEncodedString());V(po,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,i,s),this.vo(e,c,l,r).then(d=>(V(po,`Received RPC '${e}' ${a}: `,d),d),d=>{throw kn(po,`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Co(e,t,r,i,s,a){return this.So(e,t,r,i,s)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Un}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}bo(e,t){const r=YE[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class ZE{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const Ee="WebChannelConnection";class eI extends JE{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const s=Jo();return new Promise((a,c)=>{const l=new wd;l.setWithCredentials(!0),l.listenOnce(Ad.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ki.NO_ERROR:const p=l.getResponseJson();V(Ee,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case ki.TIMEOUT:V(Ee,`RPC '${e}' ${s} timed out`),c(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case ki.HTTP_ERROR:const m=l.getStatus();if(V(Ee,`RPC '${e}' ${s} failed with status:`,m,"response text:",l.getResponseText()),m>0){let T=l.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T?.error;if(R&&R.status&&R.message){const N=function(k){const B=k.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN}(R.status);c(new M(N,R.message))}else c(new M(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new M(P.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{V(Ee,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);V(Ee,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}Wo(e,t,r){const i=Jo(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Sd(),c=bd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=s.join("");V(Ee,`Creating RPC '${e}' stream ${i}: ${p}`,l);const m=a.createWebChannel(p,l);let T=!1,R=!1;const N=new ZE({Fo:k=>{R?V(Ee,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(T||(V(Ee,`Opening RPC '${e}' stream ${i} transport.`),m.open(),T=!0),V(Ee,`RPC '${e}' stream ${i} sending:`,k),m.send(k))},Mo:()=>m.close()}),O=(k,B,H)=>{k.listen(B,$=>{try{H($)}catch(K){setTimeout(()=>{throw K},0)}})};return O(m,ur.EventType.OPEN,()=>{R||(V(Ee,`RPC '${e}' stream ${i} transport opened.`),N.Qo())}),O(m,ur.EventType.CLOSE,()=>{R||(R=!0,V(Ee,`RPC '${e}' stream ${i} transport closed`),N.Uo())}),O(m,ur.EventType.ERROR,k=>{R||(R=!0,kn(Ee,`RPC '${e}' stream ${i} transport errored:`,k),N.Uo(new M(P.UNAVAILABLE,"The operation could not be completed")))}),O(m,ur.EventType.MESSAGE,k=>{var B;if(!R){const H=k.data[0];X(!!H);const $=H,K=$?.error||((B=$[0])===null||B===void 0?void 0:B.error);if(K){V(Ee,`RPC '${e}' stream ${i} received error:`,K);const de=K.status;let Z=function(y){const v=se[y];if(v!==void 0)return cf(v)}(de),E=K.message;Z===void 0&&(Z=P.INTERNAL,E="Unknown error status: "+de+" with message "+K.message),R=!0,N.Uo(new M(Z,E)),m.close()}else V(Ee,`RPC '${e}' stream ${i} received:`,H),N.Ko(H)}}),O(c,Rd.STAT_EVENT,k=>{k.stat===Fo.PROXY?V(Ee,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Fo.NOPROXY&&V(Ee,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.$o()},0),N}}function mo(){return typeof document<"u"?document:null}/**
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
 */function As(n){return new iE(n,!0)}/**
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
 */class If{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Nl="PersistentStream";class wf{constructor(e,t,r,i,s,a,c,l){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new If(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(dt(t.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new M(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return V(Nl,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(V(Nl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tI extends wf{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=aE(this.serializer,e),r=function(s){if(!("targetChange"in s))return F.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Je(a.readTime):F.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Xo(this.serializer),t.addTarget=function(s,a){let c;const l=a.target;if(c=zo(l)?{documents:lE(s,l)}:{query:hE(s,l).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=hf(s,a.resumeToken);const d=Go(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=Zi(s,a.snapshotVersion.toTimestamp());const d=Go(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=fE(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Xo(this.serializer),t.removeTarget=e,this.I_(t)}}class nI extends wf{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return X(!!e.streamToken),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=uE(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Xo(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>cE(this.serializer,r))};this.I_(t)}}/**
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
 */class rI{}class iI extends rI{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.So(e,Ko(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(P.UNKNOWN,s.toString())})}Co(e,t,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(e,Ko(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(P.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class sI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(dt(t),this.N_=!1):V("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const nn="RemoteStore";class oI{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(a=>{r.enqueueAndForget(async()=>{dn(this)&&(V(nn,"Restarting streams for network reachability change."),await async function(l){const d=j(l);d.W_.add(4),await qr(d),d.j_.set("Unknown"),d.W_.delete(4),await Rs(d)}(this))})}),this.j_=new sI(r,i)}}async function Rs(n){if(dn(n))for(const e of n.G_)await e(!0)}async function qr(n){for(const e of n.G_)await e(!1)}function Af(n,e){const t=j(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Ua(t)?La(t):Bn(t).c_()&&xa(t,e))}function Ma(n,e){const t=j(n),r=Bn(t);t.K_.delete(e),r.c_()&&Rf(t,e),t.K_.size===0&&(r.c_()?r.P_():dn(t)&&t.j_.set("Unknown"))}function xa(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bn(n).y_(e)}function Rf(n,e){n.H_.Ne(e),Bn(n).w_(e)}function La(n){n.H_=new eE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Bn(n).start(),n.j_.B_()}function Ua(n){return dn(n)&&!Bn(n).u_()&&n.K_.size>0}function dn(n){return j(n).W_.size===0}function bf(n){n.H_=void 0}async function aI(n){n.j_.set("Online")}async function cI(n){n.K_.forEach((e,t)=>{xa(n,e)})}async function uI(n,e){bf(n),Ua(n)?(n.j_.q_(e),La(n)):n.j_.set("Unknown")}async function lI(n,e,t){if(n.j_.set("Online"),e instanceof lf&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.K_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.K_.delete(c),i.H_.removeTarget(c))}(n,e)}catch(r){V(nn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ts(n,r)}else if(e instanceof Vi?n.H_.We(e):e instanceof uf?n.H_.Ze(e):n.H_.je(e),!t.isEqual(F.min()))try{const r=await Ef(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.H_.ot(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=s.K_.get(d);p&&s.K_.set(d,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const p=s.K_.get(l);if(!p)return;s.K_.set(l,p.withResumeToken(ge.EMPTY_BYTE_STRING,p.snapshotVersion)),Rf(s,l);const m=new bt(p.target,l,d,p.sequenceNumber);xa(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V(nn,"Failed to raise snapshot:",r),await ts(n,r)}}async function ts(n,e,t){if(!jn(e))throw e;n.W_.add(1),await qr(n),n.j_.set("Offline"),t||(t=()=>Ef(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(nn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Rs(n)})}function Sf(n,e){return e().catch(t=>ts(n,t,e))}async function bs(n){const e=j(n),t=xt(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ea;for(;hI(e);)try{const i=await HE(e.localStore,r);if(i===null){e.U_.length===0&&t.P_();break}r=i.batchId,dI(e,i)}catch(i){await ts(e,i)}Pf(e)&&Cf(e)}function hI(n){return dn(n)&&n.U_.length<10}function dI(n,e){n.U_.push(e);const t=xt(n);t.c_()&&t.S_&&t.b_(e.mutations)}function Pf(n){return dn(n)&&!xt(n).u_()&&n.U_.length>0}function Cf(n){xt(n).start()}async function fI(n){xt(n).C_()}async function pI(n){const e=xt(n);for(const t of n.U_)e.b_(t.mutations)}async function mI(n,e,t){const r=n.U_.shift(),i=Pa.from(r,e,t);await Sf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await bs(n)}async function gI(n,e){e&&xt(n).S_&&await async function(r,i){if(function(a){return JT(a)&&a!==P.ABORTED}(i.code)){const s=r.U_.shift();xt(r).h_(),await Sf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bs(r)}}(n,e),Pf(n)&&Cf(n)}async function Dl(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),V(nn,"RemoteStore received new credentials");const r=dn(t);t.W_.add(3),await qr(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Rs(t)}async function _I(n,e){const t=j(n);e?(t.W_.delete(2),await Rs(t)):e||(t.W_.add(2),await qr(t),t.j_.set("Unknown"))}function Bn(n){return n.J_||(n.J_=function(t,r,i){const s=j(t);return s.M_(),new tI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:aI.bind(null,n),No:cI.bind(null,n),Lo:uI.bind(null,n),p_:lI.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Ua(n)?La(n):n.j_.set("Unknown")):(await n.J_.stop(),bf(n))})),n.J_}function xt(n){return n.Y_||(n.Y_=function(t,r,i){const s=j(t);return s.M_(),new nI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:fI.bind(null,n),Lo:gI.bind(null,n),D_:pI.bind(null,n),v_:mI.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await bs(n)):(await n.Y_.stop(),n.U_.length>0&&(V(nn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class Fa{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new Fa(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ja(n,e){if(dt("AsyncQueue",`${e}: ${n}`),jn(n))return new M(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Sn{static emptySet(e){return new Sn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=lr(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Sn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ol{constructor(){this.Z_=new ne(x.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):U():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Mn{constructor(e,t,r,i,s,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Mn(e,t,Sn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yI{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class vI{constructor(){this.queries=Vl(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=j(t),s=i.queries;i.queries=Vl(),s.forEach((a,c)=>{for(const l of c.ta)l.onError(r)})})(this,new M(P.ABORTED,"Firestore shutting down"))}}function Vl(){return new ln(n=>Kd(n),vs)}async function kf(n,e){const t=j(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new yI,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await t.onListen(i,!0);break;case 1:s.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=ja(a,`Initialization of query '${vn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.ta.push(e),e.sa(t.onlineState),s.ea&&e.oa(s.ea)&&Ba(t)}async function Nf(n,e){const t=j(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.ta.indexOf(e);a>=0&&(s.ta.splice(a,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function TI(n,e){const t=j(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.ta)c.oa(i)&&(r=!0);a.ea=i}}r&&Ba(t)}function EI(n,e,t){const r=j(n),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(t);r.queries.delete(e)}function Ba(n){n.ia.forEach(e=>{e.next()})}var Zo,Ml;(Ml=Zo||(Zo={}))._a="default",Ml.Cache="cache";class Df{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Zo.Cache}}/**
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
 */class Of{constructor(e){this.key=e}}class Vf{constructor(e){this.key=e}}class II{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=W(),this.mutatedKeys=W(),this.ya=Qd(e),this.wa=new Sn(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new Ol,i=t?t.wa:this.wa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const T=i.get(p),R=Ts(this.query,m)?m:null,N=!!T&&this.mutatedKeys.has(T.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let k=!1;T&&R?T.data.isEqual(R.data)?N!==O&&(r.track({type:3,doc:R}),k=!0):this.va(T,R)||(r.track({type:2,doc:R}),k=!0,(l&&this.ya(R,l)>0||d&&this.ya(R,d)<0)&&(c=!0)):!T&&R?(r.track({type:0,doc:R}),k=!0):T&&!R&&(r.track({type:1,doc:T}),k=!0,(l||d)&&(c=!0)),k&&(R?(a=a.add(R),s=O?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{wa:a,Da:r,ls:c,mutatedKeys:s}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((p,m)=>function(R,N){const O=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return O(R)-O(N)}(p.type,m.type)||this.ya(p.doc,m.doc)),this.Ca(r),i=i!=null&&i;const c=t&&!i?this.Fa():[],l=this.pa.size===0&&this.current&&!i?1:0,d=l!==this.ga;return this.ga=l,a.length!==0||d?{snapshot:new Mn(this.query,e.wa,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Ol,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=W(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new Vf(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new Of(r))}),t}Oa(e){this.fa=e.gs,this.pa=W();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Mn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const $a="SyncEngine";class wI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class AI{constructor(e){this.key=e,this.Ba=!1}}class RI{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new ln(c=>Kd(c),vs),this.qa=new Map,this.Qa=new Set,this.$a=new ne(x.comparator),this.Ua=new Map,this.Ka=new Na,this.Wa={},this.Ga=new Map,this.za=Vn.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function bI(n,e,t=!0){const r=jf(n);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Mf(r,e,t,!0),i}async function SI(n,e){const t=jf(n);await Mf(t,e,!0,!1)}async function Mf(n,e,t,r){const i=await GE(n.localStore,Ye(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await PI(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Af(n.remoteStore,i),c}async function PI(n,e,t,r,i){n.Ha=(m,T,R)=>async function(O,k,B,H){let $=k.view.ba(B);$.ls&&($=await Sl(O.localStore,k.query,!1).then(({documents:E})=>k.view.ba(E,$)));const K=H&&H.targetChanges.get(k.targetId),de=H&&H.targetMismatches.get(k.targetId)!=null,Z=k.view.applyChanges($,O.isPrimaryClient,K,de);return Ll(O,k.targetId,Z.Ma),Z.snapshot}(n,m,T,R);const s=await Sl(n.localStore,e,!0),a=new II(e,s.gs),c=a.ba(s.documents),l=$r.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,l);Ll(n,t,d.Ma);const p=new wI(e,t,a);return n.ka.set(e,p),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),d.snapshot}async function CI(n,e,t){const r=j(n),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(a=>!vs(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ma(r.remoteStore,i.targetId),ea(r,i.targetId)}).catch(Fn)):(ea(r,i.targetId),await Yo(r.localStore,i.targetId,!0))}async function kI(n,e){const t=j(n),r=t.ka.get(e),i=t.qa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ma(t.remoteStore,r.targetId))}async function NI(n,e,t){const r=UI(n);try{const i=await function(a,c){const l=j(a),d=ae.now(),p=c.reduce((R,N)=>R.add(N.key),W());let m,T;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=ft(),O=W();return l.ds.getEntries(R,p).next(k=>{N=k,N.forEach((B,H)=>{H.isValidDocument()||(O=O.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,N)).next(k=>{m=k;const B=[];for(const H of c){const $=GT(H,m.get(H.key).overlayedDocument);$!=null&&B.push(new hn(H.key,$,jd($.value.mapValue),ut.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,B,c)}).next(k=>{T=k;const B=k.applyToLocalDocumentSet(m,O);return l.documentOverlayCache.saveOverlays(R,k.batchId,B)})}).then(()=>({batchId:T.batchId,changes:Yd(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let d=a.Wa[a.currentUser.toKey()];d||(d=new ne(q)),d=d.insert(c,l),a.Wa[a.currentUser.toKey()]=d}(r,i.batchId,t),await zr(r,i.changes),await bs(r.remoteStore)}catch(i){const s=ja(i,"Failed to persist write");t.reject(s)}}async function xf(n,e){const t=j(n);try{const r=await zE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ua.get(s);a&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?X(a.Ba):i.removedDocuments.size>0&&(X(a.Ba),a.Ba=!1))}),await zr(t,r,e)}catch(r){await Fn(r)}}function xl(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((s,a)=>{const c=a.view.sa(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=j(a);l.onlineState=c;let d=!1;l.queries.forEach((p,m)=>{for(const T of m.ta)T.sa(c)&&(d=!0)}),d&&Ba(l)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DI(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ua.get(e),s=i&&i.key;if(s){let a=new ne(x.comparator);a=a.insert(s,Ae.newNoDocument(s,F.min()));const c=W().add(s),l=new ws(F.min(),new Map,new ne(q),a,c);await xf(r,l),r.$a=r.$a.remove(s),r.Ua.delete(e),qa(r)}else await Yo(r.localStore,e,!1).then(()=>ea(r,e,t)).catch(Fn)}async function OI(n,e){const t=j(n),r=e.batch.batchId;try{const i=await qE(t.localStore,e);Uf(t,r,null),Lf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await zr(t,i)}catch(i){await Fn(i)}}async function VI(n,e,t){const r=j(n);try{const i=await function(a,c){const l=j(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(m=>(X(m!==null),p=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Uf(r,e,t),Lf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await zr(r,i)}catch(i){await Fn(i)}}function Lf(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Uf(n,e,t){const r=j(n);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function ea(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||Ff(n,r)})}function Ff(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Ma(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),qa(n))}function Ll(n,e,t){for(const r of t)r instanceof Of?(n.Ka.addReference(r.key,e),MI(n,r)):r instanceof Vf?(V($a,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||Ff(n,r.key)):U()}function MI(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(V($a,"New document in limbo: "+t),n.Qa.add(r),qa(n))}function qa(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new x(te.fromString(e)),r=n.za.next();n.Ua.set(r,new AI(t)),n.$a=n.$a.insert(t,r),Af(n.remoteStore,new bt(Ye(ba(t.path)),r,"TargetPurposeLimboResolution",gs.ae))}}async function zr(n,e,t){const r=j(n),i=[],s=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{a.push(r.Ha(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Oa.Yi(l.targetId,d);s.push(m)}}))}),await Promise.all(a),r.La.p_(i),await async function(l,d){const p=j(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>S.forEach(d,T=>S.forEach(T.Hi,R=>p.persistence.referenceDelegate.addReference(m,T.targetId,R)).next(()=>S.forEach(T.Ji,R=>p.persistence.referenceDelegate.removeReference(m,T.targetId,R)))))}catch(m){if(!jn(m))throw m;V(Va,"Failed to update sequence numbers: "+m)}for(const m of d){const T=m.targetId;if(!m.fromCache){const R=p.Ts.get(T),N=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(N);p.Ts=p.Ts.insert(T,O)}}}(r.localStore,s))}async function xI(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){V($a,"User change. New user:",e.toKey());const r=await Tf(t.localStore,e);t.currentUser=e,function(s,a){s.Ga.forEach(c=>{c.forEach(l=>{l.reject(new M(P.CANCELLED,a))})}),s.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zr(t,r.Rs)}}function LI(n,e){const t=j(n),r=t.Ua.get(e);if(r&&r.Ba)return W().add(r.key);{let i=W();const s=t.qa.get(e);if(!s)return i;for(const a of s){const c=t.ka.get(a);i=i.unionWith(c.view.Sa)}return i}}function jf(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DI.bind(null,e),e.La.p_=TI.bind(null,e.eventManager),e.La.Ja=EI.bind(null,e.eventManager),e}function UI(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VI.bind(null,e),e}class ns{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=As(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return $E(this.persistence,new FE,e.initialUser,this.serializer)}Xa(e){return new vf(Da.ri,this.serializer)}Za(e){return new QE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ns.provider={build:()=>new ns};class FI extends ns{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){X(this.persistence.referenceDelegate instanceof es);const r=this.persistence.referenceDelegate.garbageCollector;return new AE(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new vf(r=>es.ri(r,t),this.serializer)}}class ta{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xI.bind(null,this.syncEngine),await _I(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vI}()}createDatastore(e){const t=As(e.databaseInfo.databaseId),r=function(s){return new eI(s)}(e.databaseInfo);return function(s,a,c,l){return new iI(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new oI(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>xl(this.syncEngine,t,0),function(){return kl.D()?new kl:new XE}())}createSyncEngine(e,t){return function(i,s,a,c,l,d,p){const m=new RI(i,s,a,c,l,d);return p&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=j(i);V(nn,"RemoteStore shutting down."),s.W_.add(5),await qr(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ta.provider={build:()=>new ta};/**
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
 */class Bf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):dt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Lt="FirestoreClient";class jI{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ie.UNAUTHENTICATED,this.clientId=kd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{V(Lt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(Lt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ja(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function go(n,e){n.asyncQueue.verifyOperationInProgress(),V(Lt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Tf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ul(n,e){n.asyncQueue.verifyOperationInProgress();const t=await BI(n);V(Lt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Dl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Dl(e.remoteStore,i)),n._onlineComponents=e}async function BI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Lt,"Using user provided OfflineComponentProvider");try{await go(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;kn("Error using user provided cache. Falling back to memory cache: "+t),await go(n,new ns)}}else V(Lt,"Using default OfflineComponentProvider"),await go(n,new FI(void 0));return n._offlineComponents}async function $f(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Lt,"Using user provided OnlineComponentProvider"),await Ul(n,n._uninitializedComponentsProvider._online)):(V(Lt,"Using default OnlineComponentProvider"),await Ul(n,new ta))),n._onlineComponents}function $I(n){return $f(n).then(e=>e.syncEngine)}async function qf(n){const e=await $f(n),t=e.eventManager;return t.onListen=bI.bind(null,e.syncEngine),t.onUnlisten=CI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kI.bind(null,e.syncEngine),t}function qI(n,e,t={}){const r=new ct;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){const p=new Bf({next:T=>{p.su(),a.enqueueAndForget(()=>Nf(s,m));const R=T.docs.has(c);!R&&T.fromCache?d.reject(new M(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&l&&l.source==="server"?d.reject(new M(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),m=new Df(ba(c.path),p,{includeMetadataChanges:!0,Ta:!0});return kf(s,m)}(await qf(n),n.asyncQueue,e,t,r)),r.promise}function zI(n,e,t={}){const r=new ct;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){const p=new Bf({next:T=>{p.su(),a.enqueueAndForget(()=>Nf(s,m)),T.fromCache&&l.source==="server"?d.reject(new M(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),m=new Df(c,p,{includeMetadataChanges:!0,Ta:!0});return kf(s,m)}(await qf(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function zf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Fl=new Map;/**
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
 */function Wf(n,e,t){if(!t)throw new M(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function WI(n,e,t,r){if(e===!0&&r===!0)throw new M(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jl(n){if(!x.isDocumentKey(n))throw new M(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bl(n){if(x.isDocumentKey(n))throw new M(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ss(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function rn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ss(n);throw new M(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Hf="firestore.googleapis.com",$l=!0;class ql{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hf,this.ssl=$l}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$l;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<IE)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ps{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ql({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ql(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Jv;switch(r.type){case"firstParty":return new nT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Fl.get(t);r&&(V("ComponentProvider","Removing Datastore"),Fl.delete(t),r.terminate())}(this),Promise.resolve()}}function HI(n,e,t,r={}){var i;const s=(n=rn(n,Ps))._getSettings(),a=Object.assign(Object.assign({},s),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;s.host!==Hf&&s.host!==c&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},s),{host:c,ssl:!1,emulatorOptions:r});if(!Nt(l,a)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Ie.MOCK_USER;else{d=Mh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ie(m)}n._authCredentials=new Zv(new Pd(d,p))}}/**
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
 */class $n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $n(this.firestore,e,this._query)}}class ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class kt extends $n{constructor(e,t,r){super(e,t,ba(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new x(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function rb(n,e,...t){if(n=le(n),Wf("collection","path",e),n instanceof Ps){const r=te.fromString(e,...t);return Bl(r),new kt(n,null,r)}{if(!(n instanceof ke||n instanceof kt))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return Bl(r),new kt(n.firestore,null,r)}}function _o(n,e,...t){if(n=le(n),arguments.length===1&&(e=kd.newId()),Wf("doc","path",e),n instanceof Ps){const r=te.fromString(e,...t);return jl(r),new ke(n,null,new x(r))}{if(!(n instanceof ke||n instanceof kt))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return jl(r),new ke(n.firestore,n instanceof kt?n.converter:null,new x(r))}}/**
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
 */const zl="AsyncQueue";class Wl{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new If(this,"async_queue_retry"),this.Su=()=>{const r=mo();r&&V(zl,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=mo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=mo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ct;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!jn(e))throw e;V(zl,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw dt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=Fa.createAndSchedule(this,e,t,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&U()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Cs extends Ps{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Wl,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wl(e),this._firestoreClient=void 0,await e}}}function GI(n,e){const t=typeof n=="object"?n:Mr(),r=typeof n=="string"?n:Ki,i=pt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Dh("firestore");s&&HI(i,...s)}return i}function za(n){if(n._terminated)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KI(n),n._firestoreClient}function KI(n){var e,t,r;const i=n._freezeSettings(),s=function(c,l,d,p){return new _T(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,zf(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jI(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(ge.fromBase64String(e))}catch(t){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xn(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ha{constructor(e){this._methodName=e}}/**
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
 */class Ga{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
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
 */class Ka{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const QI=/^__.*__$/;class XI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Br(e,this.data,t,this.fieldTransforms)}}function Gf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Qa{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Qa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return rs(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Gf(this.Lu)&&QI.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class YI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||As(e)}ju(e,t,r,i=!1){return new Qa({Lu:e,methodName:t,zu:r,path:me.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kf(n){const e=n._freezeSettings(),t=As(n._databaseId);return new YI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function JI(n,e,t,r,i,s={}){const a=n.ju(s.merge||s.mergeFields?2:0,e,t,i);Yf("Data must be an object, but it was:",a,r);const c=Qf(r,a);let l,d;if(s.merge)l=new ze(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const T=ew(e,m,t);if(!a.contains(T))throw new M(P.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);nw(p,T)||p.push(T)}l=new ze(p),d=a.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=a.fieldTransforms;return new XI(new Le(c),l,d)}class Xa extends Ha{_toFieldTransform(e){return new qT(e.path,new Cr)}isEqual(e){return e instanceof Xa}}function ZI(n,e,t,r=!1){return Ya(t,n.ju(r?4:3,e))}function Ya(n,e){if(Xf(n=le(n)))return Yf("Unsupported field value:",e,n),Qf(n,e);if(n instanceof Ha)return function(r,i){if(!Gf(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let l=Ya(c,i.Ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ae.fromDate(r);return{timestampValue:Zi(i.serializer,s)}}if(r instanceof ae){const s=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zi(i.serializer,s)}}if(r instanceof Ga)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xn)return{bytesValue:hf(i.serializer,r._byteString)};if(r instanceof ke){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ka(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ka)return function(a,c){return{mapValue:{fields:{[Ud]:{stringValue:Fd},[Qi]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return Sa(c.serializer,d)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${Ss(r)}`)}(n,e)}function Qf(n,e){const t={};return Dd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,(r,i)=>{const s=Ya(i,e.qu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Xf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof Ga||n instanceof xn||n instanceof ke||n instanceof Ha||n instanceof Ka)}function Yf(n,e,t){if(!Xf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ss(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function ew(n,e,t){if((e=le(e))instanceof Wa)return e._internalPath;if(typeof e=="string")return Jf(n,e);throw rs("Field path arguments must be of type string or ",n,!1,void 0,t)}const tw=new RegExp("[~\\*/\\[\\]]");function Jf(n,e,t){if(e.search(tw)>=0)throw rs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wa(...e.split("."))._internalPath}catch{throw rs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function rs(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new M(P.INVALID_ARGUMENT,c+n+l)}function nw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Zf{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ja("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rw extends Zf{data(){return super.data()}}function Ja(n,e){return typeof e=="string"?Jf(n,e):e instanceof Wa?e._internalPath:e._delegate._internalPath}/**
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
 */function iw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Za{}class sw extends Za{}function ib(n,e,...t){let r=[];e instanceof Za&&r.push(e),r=r.concat(t),function(s){const a=s.filter(l=>l instanceof ec).length,c=s.filter(l=>l instanceof ks).length;if(a>1||a>0&&c>0)throw new M(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ks extends sw{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ks(e,t,r)}_apply(e){const t=this._parse(e);return ep(e._query,t),new $n(e.firestore,e.converter,Wo(e._query,t))}_parse(e){const t=Kf(e.firestore);return function(s,a,c,l,d,p,m){let T;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new M(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Gl(m,p);const N=[];for(const O of m)N.push(Hl(l,s,O));T={arrayValue:{values:N}}}else T=Hl(l,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Gl(m,p),T=ZI(c,a,m,p==="in"||p==="not-in");return oe.create(d,p,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sb(n,e,t){const r=e,i=Ja("where",n);return ks._create(i,r,t)}class ec extends Za{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ec(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ge.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const l of c)ep(a,l),a=Wo(a,l)}(e._query,t),new $n(e.firestore,e.converter,Wo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Hl(n,e,t){if(typeof(t=le(t))=="string"){if(t==="")throw new M(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gd(e)&&t.indexOf("/")!==-1)throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(te.fromString(t));if(!x.isDocumentKey(r))throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cl(n,new x(r))}if(t instanceof ke)return cl(n,t._key);throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ss(t)}.`)}function Gl(n,e){if(!Array.isArray(n)||n.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ep(n,e){const t=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new M(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ow{convertValue(e,t="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return un(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Qi].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ie(a.doubleValue));return new Ka(s)}convertGeoPoint(e){return new Ga(ie(e.latitude),ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ys(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(br(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=te.fromString(e);X(_f(r));const i=new Sr(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(t)||dt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function aw(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class dr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tp extends Zf{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ja("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Mi extends tp{data(e={}){return super.data(e)}}class cw{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new dr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Mi(this._firestore,this._userDataWriter,r.key,r,new dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const l=new Mi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new dr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new Mi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new dr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:uw(c.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function uw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
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
 */function lw(n){n=rn(n,ke);const e=rn(n.firestore,Cs);return qI(za(e),n._key).then(t=>dw(e,n,t))}class np extends ow{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function ob(n){n=rn(n,$n);const e=rn(n.firestore,Cs),t=za(e),r=new np(e);return iw(n._query),zI(t,n._query).then(i=>new cw(e,r,n,i))}function Kl(n,e,t){n=rn(n,ke);const r=rn(n.firestore,Cs),i=aw(n.converter,e);return hw(r,[JI(Kf(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ut.none())])}function hw(n,e){return function(r,i){const s=new ct;return r.asyncQueue.enqueueAndForget(async()=>NI(await $I(r),i,s)),s.promise}(za(n),e)}function dw(n,e,t){const r=t.docs.get(e._key),i=new np(n);return new tp(n,i,e._key,r,new dr(t.hasPendingWrites,t.fromCache),e.converter)}function Ql(){return new Xa("serverTimestamp")}(function(e,t=!0){(function(i){Un=i})(an),Ue(new xe("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new Cs(new eT(r.getProvider("auth-internal")),new rT(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sr(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Re(Xu,Yu,e),Re(Xu,Yu,"esm2017")})();var fw="firebase",pw="11.6.0";/**
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
 */Re(fw,pw,"app");/**
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
 */const rp="firebasestorage.googleapis.com",mw="storageBucket",gw=2*60*1e3,_w=10*60*1e3;/**
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
 */class tt extends Fe{constructor(e,t,r=0){super(yo(e),`Firebase Storage: ${t} (${yo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function yo(n){return"storage/"+n}function yw(){const n="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,n)}function vw(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Tw(){return new tt(et.CANCELED,"User canceled the upload/download.")}function Ew(n){return new tt(et.INVALID_URL,"Invalid URL '"+n+"'.")}function Iw(n){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Xl(n){return new tt(et.INVALID_ARGUMENT,n)}function ip(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function ww(n){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class We{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=We.makeFromUrl(e,t)}catch{return new We(e,"")}if(r.path==="")return r;throw Iw(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),l={bucket:1,path:3};function d(K){K.path_=decodeURIComponent(K.path)}const p="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",R=new RegExp(`^https?://${m}/${p}/b/${i}/o${T}`,"i"),N={bucket:1,path:3},O=t===rp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",B=new RegExp(`^https?://${O}/${i}/${k}`,"i"),$=[{regex:c,indices:l,postModify:s},{regex:R,indices:N,postModify:d},{regex:B,indices:{bucket:1,path:2},postModify:d}];for(let K=0;K<$.length;K++){const de=$[K],Z=de.regex.exec(e);if(Z){const E=Z[de.indices.bucket];let g=Z[de.indices.path];g||(g=""),r=new We(E,g),de.postModify(r);break}}if(r==null)throw Ew(e);return r}}class Aw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Rw(n,e,t){let r=1,i=null,s=null,a=!1,c=0;function l(){return c===2}let d=!1;function p(...k){d||(d=!0,e.apply(null,k))}function m(k){i=setTimeout(()=>{i=null,n(R,l())},k)}function T(){s&&clearTimeout(s)}function R(k,...B){if(d){T();return}if(k){T(),p.call(null,k,...B);return}if(l()||a){T(),p.call(null,k,...B);return}r<64&&(r*=2);let $;c===1?(c=2,$=0):$=(r+Math.random())*1e3,m($)}let N=!1;function O(k){N||(N=!0,T(),!d&&(i!==null?(k||(c=2),clearTimeout(i),m(0)):k||(c=1)))}return m(0),s=setTimeout(()=>{a=!0,O(!0)},t),O}function bw(n){n(!1)}/**
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
 */function Sw(n){return n!==void 0}function Yl(n,e,t,r){if(r<e)throw Xl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Xl(`Invalid value for '${n}'. Expected ${t} or less.`)}function Pw(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var is;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(is||(is={}));/**
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
 */function Cw(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class kw{constructor(e,t,r,i,s,a,c,l,d,p,m,T=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=m,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,N)=>{this.resolve_=R,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new vi(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const c=s.getErrorCode()===is.NO_ERROR,l=s.getStatus();if(!c||Cw(l,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===is.ABORT;r(!1,new vi(!1,null,p));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new vi(d,s))})},t=(r,i)=>{const s=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Sw(l)?s(l):s()}catch(l){a(l)}else if(c!==null){const l=yw();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(i.canceled){const l=this.appDelete_?ip():Tw();a(l)}else{const l=vw();a(l)}};this.canceled_?t(!1,new vi(!1,null,!0)):this.backoffId_=Rw(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Nw(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Dw(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ow(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Vw(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Mw(n,e,t,r,i,s,a=!0){const c=Pw(n.urlParams),l=n.url+c,d=Object.assign({},n.headers);return Ow(d,e),Nw(d,t),Dw(d,s),Vw(d,r),new kw(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
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
 */function xw(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Lw(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class ss{constructor(e,t){this._service=e,t instanceof We?this._location=t:this._location=We.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ss(e,t)}get root(){const e=new We(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lw(this._location.path)}get storage(){return this._service}get parent(){const e=xw(this._location.path);if(e===null)return null;const t=new We(this._location.bucket,e);return new ss(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ww(e)}}function Jl(n,e){const t=e?.[mw];return t==null?null:We.makeFromBucketSpec(t,n)}function Uw(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Mh(i,n.app.options.projectId))}class Fw{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=rp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gw,this._maxUploadRetryTime=_w,this._requests=new Set,i!=null?this._bucket=We.makeFromBucketSpec(i,this._host):this._bucket=Jl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=We.makeFromBucketSpec(this._url,e):this._bucket=Jl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ss(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new Aw(ip());{const a=Mw(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Zl="@firebase/storage",eh="0.13.7";/**
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
 */const sp="storage";function jw(n=Mr(),e){n=le(n);const r=pt(n,sp).getImmediate({identifier:e}),i=Dh("storage");return i&&Bw(r,...i),r}function Bw(n,e,t,r={}){Uw(n,e,t,r)}function $w(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Fw(t,r,i,e,an)}function qw(){Ue(new xe(sp,$w,"PUBLIC").setMultipleInstances(!0)),Re(Zl,eh,""),Re(Zl,eh,"esm2017")}qw();var na,th,Ns=function(){var n=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(n&&n.responseStart>0&&n.responseStart<performance.now())return n},op=function(n){if(document.readyState==="loading")return"loading";var e=Ns();if(e){if(n<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||n<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||n<e.domComplete)return"dom-content-loaded"}return"complete"},zw=function(n){var e=n.nodeName;return n.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},tc=function(n,e){var t="";try{for(;n&&n.nodeType!==9;){var r=n,i=r.id?"#"+r.id:zw(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(t.length+i.length>(e||100)-1)return t||i;if(t=t?i+">"+t:i,r.id)break;n=r.parentNode}}catch{}return t},ap=-1,Ww=function(){return ap},Wr=function(n){addEventListener("pageshow",function(e){e.persisted&&(ap=e.timeStamp,n(e))},!0)},nc=function(){var n=Ns();return n&&n.activationStart||0},Ut=function(n,e){var t=Ns(),r="navigate";return Ww()>=0?r="back-forward-cache":t&&(document.prerendering||nc()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:n,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},qn=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver(function(i){Promise.resolve().then(function(){e(i.getEntries())})});return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch{}},Ft=function(n,e,t,r){var i,s;return function(a){e.value>=0&&(a||r)&&((s=e.value-(i||0))||i===void 0)&&(i=e.value,e.delta=s,e.rating=function(c,l){return c>l[1]?"poor":c>l[0]?"needs-improvement":"good"}(e.value,t),n(e))}},rc=function(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})},Ds=function(n){document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&n()})},ic=function(n){var e=!1;return function(){e||(n(),e=!0)}},wn=-1,nh=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},os=function(n){document.visibilityState==="hidden"&&wn>-1&&(wn=n.type==="visibilitychange"?n.timeStamp:0,Hw())},rh=function(){addEventListener("visibilitychange",os,!0),addEventListener("prerenderingchange",os,!0)},Hw=function(){removeEventListener("visibilitychange",os,!0),removeEventListener("prerenderingchange",os,!0)},cp=function(){return wn<0&&(wn=nh(),rh(),Wr(function(){setTimeout(function(){wn=nh(),rh()},0)})),{get firstHiddenTime(){return wn}}},sc=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},ih=[1800,3e3],Gw=function(n,e){e=e||{},sc(function(){var t,r=cp(),i=Ut("FCP"),s=qn("paint",function(a){a.forEach(function(c){c.name==="first-contentful-paint"&&(s.disconnect(),c.startTime<r.firstHiddenTime&&(i.value=Math.max(c.startTime-nc(),0),i.entries.push(c),t(!0)))})});s&&(t=Ft(n,i,ih,e.reportAllChanges),Wr(function(a){i=Ut("FCP"),t=Ft(n,i,ih,e.reportAllChanges),rc(function(){i.value=performance.now()-a.timeStamp,t(!0)})}))})},sh=[.1,.25],Kw=function(n,e){(function(t,r){r=r||{},Gw(ic(function(){var i,s=Ut("CLS",0),a=0,c=[],l=function(p){p.forEach(function(m){if(!m.hadRecentInput){var T=c[0],R=c[c.length-1];a&&m.startTime-R.startTime<1e3&&m.startTime-T.startTime<5e3?(a+=m.value,c.push(m)):(a=m.value,c=[m])}}),a>s.value&&(s.value=a,s.entries=c,i())},d=qn("layout-shift",l);d&&(i=Ft(t,s,sh,r.reportAllChanges),Ds(function(){l(d.takeRecords()),i(!0)}),Wr(function(){a=0,s=Ut("CLS",0),i=Ft(t,s,sh,r.reportAllChanges),rc(function(){return i()})}),setTimeout(i,0))}))})(function(t){var r=function(i){var s,a={};if(i.entries.length){var c=i.entries.reduce(function(d,p){return d&&d.value>p.value?d:p});if(c&&c.sources&&c.sources.length){var l=(s=c.sources).find(function(d){return d.node&&d.node.nodeType===1})||s[0];l&&(a={largestShiftTarget:tc(l.node),largestShiftTime:c.startTime,largestShiftValue:c.value,largestShiftSource:l,largestShiftEntry:c,loadState:op(c.startTime)})}}return Object.assign(i,{attribution:a})}(t);n(r)},e)},up=0,vo=1/0,Ti=0,Qw=function(n){n.forEach(function(e){e.interactionId&&(vo=Math.min(vo,e.interactionId),Ti=Math.max(Ti,e.interactionId),up=Ti?(Ti-vo)/7+1:0)})},lp=function(){return na?up:performance.interactionCount||0},Xw=function(){"interactionCount"in performance||na||(na=qn("event",Qw,{type:"event",buffered:!0,durationThreshold:0}))},$e=[],yr=new Map,hp=0,Yw=function(){var n=Math.min($e.length-1,Math.floor((lp()-hp)/50));return $e[n]},dp=[],Jw=function(n){if(dp.forEach(function(i){return i(n)}),n.interactionId||n.entryType==="first-input"){var e=$e[$e.length-1],t=yr.get(n.interactionId);if(t||$e.length<10||n.duration>e.latency){if(t)n.duration>t.latency?(t.entries=[n],t.latency=n.duration):n.duration===t.latency&&n.startTime===t.entries[0].startTime&&t.entries.push(n);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};yr.set(r.id,r),$e.push(r)}$e.sort(function(i,s){return s.latency-i.latency}),$e.length>10&&$e.splice(10).forEach(function(i){return yr.delete(i.id)})}}},oc=function(n){var e=self.requestIdleCallback||self.setTimeout,t=-1;return n=ic(n),document.visibilityState==="hidden"?n():(t=e(n),Ds(n)),t},oh=[200,500],Zw=function(n,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},sc(function(){var t;Xw();var r,i=Ut("INP"),s=function(c){oc(function(){c.forEach(Jw);var l=Yw();l&&l.latency!==i.value&&(i.value=l.latency,i.entries=l.entries,r())})},a=qn("event",s,{durationThreshold:(t=e.durationThreshold)!==null&&t!==void 0?t:40});r=Ft(n,i,oh,e.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),Ds(function(){s(a.takeRecords()),r(!0)}),Wr(function(){hp=lp(),$e.length=0,yr.clear(),i=Ut("INP"),r=Ft(n,i,oh,e.reportAllChanges)}))}))},Pn=[],Rt=[],ra=0,ac=new WeakMap,Cn=new Map,ia=-1,eA=function(n){Pn=Pn.concat(n),fp()},fp=function(){ia<0&&(ia=oc(tA))},tA=function(){Cn.size>10&&Cn.forEach(function(a,c){yr.has(c)||Cn.delete(c)});var n=$e.map(function(a){return ac.get(a.entries[0])}),e=Rt.length-50;Rt=Rt.filter(function(a,c){return c>=e||n.includes(a)});for(var t=new Set,r=0;r<Rt.length;r++){var i=Rt[r];pp(i.startTime,i.processingEnd).forEach(function(a){t.add(a)})}var s=Pn.length-1-50;Pn=Pn.filter(function(a,c){return a.startTime>ra&&c>s||t.has(a)}),ia=-1};dp.push(function(n){n.interactionId&&n.target&&!Cn.has(n.interactionId)&&Cn.set(n.interactionId,n.target)},function(n){var e,t=n.startTime+n.duration;ra=Math.max(ra,n.processingEnd);for(var r=Rt.length-1;r>=0;r--){var i=Rt[r];if(Math.abs(t-i.renderTime)<=8){(e=i).startTime=Math.min(n.startTime,e.startTime),e.processingStart=Math.min(n.processingStart,e.processingStart),e.processingEnd=Math.max(n.processingEnd,e.processingEnd),e.entries.push(n);break}}e||(e={startTime:n.startTime,processingStart:n.processingStart,processingEnd:n.processingEnd,renderTime:t,entries:[n]},Rt.push(e)),(n.interactionId||n.entryType==="first-input")&&ac.set(n,e),fp()});var pp=function(n,e){for(var t,r=[],i=0;t=Pn[i];i++)if(!(t.startTime+t.duration<n)){if(t.startTime>e)break;r.push(t)}return r},nA=function(n,e){th||(th=qn("long-animation-frame",eA)),Zw(function(t){var r=function(i){var s=i.entries[0],a=ac.get(s),c=s.processingStart,l=a.processingEnd,d=a.entries.sort(function(k,B){return k.processingStart-B.processingStart}),p=pp(s.startTime,l),m=i.entries.find(function(k){return k.target}),T=m&&m.target||Cn.get(s.interactionId),R=[s.startTime+s.duration,l].concat(p.map(function(k){return k.startTime+k.duration})),N=Math.max.apply(Math,R),O={interactionTarget:tc(T),interactionTargetElement:T,interactionType:s.name.startsWith("key")?"keyboard":"pointer",interactionTime:s.startTime,nextPaintTime:N,processedEventEntries:d,longAnimationFrameEntries:p,inputDelay:c-s.startTime,processingDuration:l-c,presentationDelay:Math.max(N-l,0),loadState:op(s.startTime)};return Object.assign(i,{attribution:O})}(t);n(r)},e)},ah=[2500,4e3],To={},rA=function(n,e){(function(t,r){r=r||{},sc(function(){var i,s=cp(),a=Ut("LCP"),c=function(p){r.reportAllChanges||(p=p.slice(-1)),p.forEach(function(m){m.startTime<s.firstHiddenTime&&(a.value=Math.max(m.startTime-nc(),0),a.entries=[m],i())})},l=qn("largest-contentful-paint",c);if(l){i=Ft(t,a,ah,r.reportAllChanges);var d=ic(function(){To[a.id]||(c(l.takeRecords()),l.disconnect(),To[a.id]=!0,i(!0))});["keydown","click"].forEach(function(p){addEventListener(p,function(){return oc(d)},{once:!0,capture:!0})}),Ds(d),Wr(function(p){a=Ut("LCP"),i=Ft(t,a,ah,r.reportAllChanges),rc(function(){a.value=performance.now()-p.timeStamp,To[a.id]=!0,i(!0)})})}})})(function(t){var r=function(i){var s={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:i.value};if(i.entries.length){var a=Ns();if(a){var c=a.activationStart||0,l=i.entries[i.entries.length-1],d=l.url&&performance.getEntriesByType("resource").filter(function(N){return N.name===l.url})[0],p=Math.max(0,a.responseStart-c),m=Math.max(p,d?(d.requestStart||d.startTime)-c:0),T=Math.max(m,d?d.responseEnd-c:0),R=Math.max(T,l.startTime-c);s={element:tc(l.element),timeToFirstByte:p,resourceLoadDelay:m-p,resourceLoadDuration:T-m,elementRenderDelay:R-T,navigationEntry:a,lcpEntry:l},l.url&&(s.url=l.url),d&&(s.lcpResourceEntry=d)}}return Object.assign(i,{attribution:s})}(t);n(r)},e)};const mp="@firebase/installations",cc="0.6.13";/**
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
 */const gp=1e4,_p=`w:${cc}`,yp="FIS_v2",iA="https://firebaseinstallations.googleapis.com/v1",sA=60*60*1e3,oA="installations",aA="Installations";/**
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
 */const cA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},sn=new Bt(oA,aA,cA);function vp(n){return n instanceof Fe&&n.code.includes("request-failed")}/**
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
 */function Tp({projectId:n}){return`${iA}/projects/${n}/installations`}function Ep(n){return{token:n.token,requestStatus:2,expiresIn:lA(n.expiresIn),creationTime:Date.now()}}async function Ip(n,e){const r=(await e.json()).error;return sn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wp({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function uA(n,{refreshToken:e}){const t=wp(n);return t.append("Authorization",hA(e)),t}async function Ap(n){const e=await n();return e.status>=500&&e.status<600?n():e}function lA(n){return Number(n.replace("s","000"))}function hA(n){return`${yp} ${n}`}/**
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
 */async function dA({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Tp(n),i=wp(n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:t,authVersion:yp,appId:n.appId,sdkVersion:_p},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Ap(()=>fetch(r,c));if(l.ok){const d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ep(d.authToken)}}else throw await Ip("Create Installation",l)}/**
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
 */function Rp(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function fA(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const pA=/^[cdef][\w-]{21}$/,sa="";function mA(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=gA(n);return pA.test(t)?t:sa}catch{return sa}}function gA(n){return fA(n).substr(0,22)}/**
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
 */function Os(n){return`${n.appName}!${n.appId}`}/**
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
 */const bp=new Map;function Sp(n,e){const t=Os(n);Pp(t,e),_A(t,e)}function Pp(n,e){const t=bp.get(n);if(t)for(const r of t)r(e)}function _A(n,e){const t=yA();t&&t.postMessage({key:n,fid:e}),vA()}let Xt=null;function yA(){return!Xt&&"BroadcastChannel"in self&&(Xt=new BroadcastChannel("[Firebase] FID Change"),Xt.onmessage=n=>{Pp(n.data.key,n.data.fid)}),Xt}function vA(){bp.size===0&&Xt&&(Xt.close(),Xt=null)}/**
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
 */const TA="firebase-installations-database",EA=1,on="firebase-installations-store";let Eo=null;function uc(){return Eo||(Eo=Uh(TA,EA,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(on)}}})),Eo}async function as(n,e){const t=Os(n),i=(await uc()).transaction(on,"readwrite"),s=i.objectStore(on),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Sp(n,e.fid),e}async function Cp(n){const e=Os(n),r=(await uc()).transaction(on,"readwrite");await r.objectStore(on).delete(e),await r.done}async function Vs(n,e){const t=Os(n),i=(await uc()).transaction(on,"readwrite"),s=i.objectStore(on),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&Sp(n,c.fid),c}/**
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
 */async function lc(n){let e;const t=await Vs(n.appConfig,r=>{const i=IA(r),s=wA(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===sa?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function IA(n){const e=n||{fid:mA(),registrationStatus:0};return kp(e)}function wA(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(sn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=AA(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RA(n)}:{installationEntry:e}}async function AA(n,e){try{const t=await dA(n,e);return as(n.appConfig,t)}catch(t){throw vp(t)&&t.customData.serverCode===409?await Cp(n.appConfig):await as(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function RA(n){let e=await ch(n.appConfig);for(;e.registrationStatus===1;)await Rp(100),e=await ch(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await lc(n);return r||t}return e}function ch(n){return Vs(n,e=>{if(!e)throw sn.create("installation-not-found");return kp(e)})}function kp(n){return bA(n)?{fid:n.fid,registrationStatus:0}:n}function bA(n){return n.registrationStatus===1&&n.registrationTime+gp<Date.now()}/**
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
 */async function SA({appConfig:n,heartbeatServiceProvider:e},t){const r=PA(n,t),i=uA(n,t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:_p,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Ap(()=>fetch(r,c));if(l.ok){const d=await l.json();return Ep(d)}else throw await Ip("Generate Auth Token",l)}function PA(n,{fid:e}){return`${Tp(n)}/${e}/authTokens:generate`}/**
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
 */async function hc(n,e=!1){let t;const r=await Vs(n.appConfig,s=>{if(!Np(s))throw sn.create("not-registered");const a=s.authToken;if(!e&&NA(a))return s;if(a.requestStatus===1)return t=CA(n,e),s;{if(!navigator.onLine)throw sn.create("app-offline");const c=OA(s);return t=kA(n,c),c}});return t?await t:r.authToken}async function CA(n,e){let t=await uh(n.appConfig);for(;t.authToken.requestStatus===1;)await Rp(100),t=await uh(n.appConfig);const r=t.authToken;return r.requestStatus===0?hc(n,e):r}function uh(n){return Vs(n,e=>{if(!Np(e))throw sn.create("not-registered");const t=e.authToken;return VA(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function kA(n,e){try{const t=await SA(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await as(n.appConfig,r),t}catch(t){if(vp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Cp(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await as(n.appConfig,r)}throw t}}function Np(n){return n!==void 0&&n.registrationStatus===2}function NA(n){return n.requestStatus===2&&!DA(n)}function DA(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+sA}function OA(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function VA(n){return n.requestStatus===1&&n.requestTime+gp<Date.now()}/**
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
 */async function MA(n){const e=n,{installationEntry:t,registrationPromise:r}=await lc(e);return r?r.catch(console.error):hc(e).catch(console.error),t.fid}/**
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
 */async function xA(n,e=!1){const t=n;return await LA(t),(await hc(t,e)).token}async function LA(n){const{registrationPromise:e}=await lc(n);e&&await e}/**
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
 */function UA(n){if(!n||!n.options)throw Io("App Configuration");if(!n.name)throw Io("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Io(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Io(n){return sn.create("missing-app-config-values",{valueName:n})}/**
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
 */const Dp="installations",FA="installations-internal",jA=n=>{const e=n.getProvider("app").getImmediate(),t=UA(e),r=pt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},BA=n=>{const e=n.getProvider("app").getImmediate(),t=pt(e,Dp).getImmediate();return{getId:()=>MA(t),getToken:i=>xA(t,i)}};function $A(){Ue(new xe(Dp,jA,"PUBLIC")),Ue(new xe(FA,BA,"PRIVATE"))}$A();Re(mp,cc);Re(mp,cc,"esm2017");const lh="@firebase/performance",oa="0.7.2";/**
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
 */const Op=oa,qA="FB-PERF-TRACE-START",zA="FB-PERF-TRACE-STOP",aa="FB-PERF-TRACE-MEASURE",Vp="_wt_",Mp="_fp",xp="_fcp",Lp="_fid",Up="_lcp",WA="lcp_element",Fp="_inp",HA="inp_interactionTarget",jp="_cls",GA="cls_largestShiftTarget",Bp="@firebase/performance/config",$p="@firebase/performance/configexpire",KA="performance",qp="Performance";/**
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
 */const QA={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},we=new Bt(KA,qp,QA);/**
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
 */const jt=new Vr(qp);jt.logLevel=z.INFO;/**
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
 */let wo,zp;class ue{constructor(e){if(this.window=e,!e)throw we.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay),this.onLCP=rA,this.onINP=nA,this.onCLS=Kw}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,t,r){!this.performance||!this.performance.measure||this.performance.measure(e,t,r)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!ua()?(jt.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):hs()?!0:(jt.info("IndexedDB is not supported by current browser"),!1)}setupObserver(e,t){if(!this.PerformanceObserver)return;new this.PerformanceObserver(i=>{for(const s of i.getEntries())t(s)}).observe({entryTypes:[e]})}static getInstance(){return wo===void 0&&(wo=new ue(zp)),wo}}function XA(n){zp=n}/**
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
 */let Wp;function YA(n){const e=n.getId();return e.then(t=>{Wp=t}),e}function dc(){return Wp}function JA(n){const e=n.getToken();return e.then(t=>{}),e}/**
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
 */function hh(n,e){const t=n.length-e.length;if(t<0||t>1)throw we.create("invalid String merger input");const r=[];for(let i=0;i<n.length;i++)r.push(n.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}/**
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
 */let Ao;class Ve{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=hh("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=hh("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return Ao===void 0&&(Ao=new Ve),Ao}}/**
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
 */var vr;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.VISIBLE=1]="VISIBLE",n[n.HIDDEN=2]="HIDDEN"})(vr||(vr={}));const ZA=["firebase_","google_","ga_"],e0=new RegExp("^[a-zA-Z]\\w*$"),t0=40,n0=100;function r0(){const n=ue.getInstance().navigator;return n?.serviceWorker?n.serviceWorker.controller?2:3:1}function i0(){switch(ue.getInstance().document.visibilityState){case"visible":return vr.VISIBLE;case"hidden":return vr.HIDDEN;default:return vr.UNKNOWN}}function s0(){const e=ue.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function o0(n){return n.length===0||n.length>t0?!1:!ZA.some(t=>n.startsWith(t))&&!!n.match(e0)}function a0(n){return n.length!==0&&n.length<=n0}/**
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
 */function Hp(n){var e;const t=(e=n.options)===null||e===void 0?void 0:e.appId;if(!t)throw we.create("no app id");return t}function c0(n){var e;const t=(e=n.options)===null||e===void 0?void 0:e.projectId;if(!t)throw we.create("no project id");return t}function u0(n){var e;const t=(e=n.options)===null||e===void 0?void 0:e.apiKey;if(!t)throw we.create("no api key");return t}/**
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
 */const l0="0.0.1",Be={loggingEnabled:!0},h0="FIREBASE_INSTALLATIONS_AUTH";function d0(n,e){const t=f0();return t?(dh(t),Promise.resolve()):g0(n,e).then(dh).then(r=>p0(r),()=>{})}function f0(){const n=ue.getInstance().localStorage;if(!n)return;const e=n.getItem($p);if(!e||!_0(e))return;const t=n.getItem(Bp);if(t)try{return JSON.parse(t)}catch{return}}function p0(n){const e=ue.getInstance().localStorage;!n||!e||(e.setItem(Bp,JSON.stringify(n)),e.setItem($p,String(Date.now()+Ve.getInstance().configTimeToLive*60*60*1e3)))}const m0="Could not fetch config, will use default configs";function g0(n,e){return JA(n.installations).then(t=>{const r=c0(n.app),i=u0(n.app),s=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,a=new Request(s,{method:"POST",headers:{Authorization:`${h0} ${t}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:t,app_id:Hp(n.app),app_version:Op,sdk_version:l0})});return fetch(a).then(c=>{if(c.ok)return c.json();throw we.create("RC response not ok")})}).catch(()=>{jt.info(m0)})}function dh(n){if(!n)return n;const e=Ve.getInstance(),t=n.entries||{};return t.fpr_enabled!==void 0?e.loggingEnabled=String(t.fpr_enabled)==="true":e.loggingEnabled=Be.loggingEnabled,t.fpr_log_source?e.logSource=Number(t.fpr_log_source):Be.logSource&&(e.logSource=Be.logSource),t.fpr_log_endpoint_url?e.logEndPointUrl=t.fpr_log_endpoint_url:Be.logEndPointUrl&&(e.logEndPointUrl=Be.logEndPointUrl),t.fpr_log_transport_key?e.transportKey=t.fpr_log_transport_key:Be.transportKey&&(e.transportKey=Be.transportKey),t.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(t.fpr_vc_network_request_sampling_rate):Be.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=Be.networkRequestsSamplingRate),t.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(t.fpr_vc_trace_sampling_rate):Be.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=Be.tracesSamplingRate),e.logTraceAfterSampling=fh(e.tracesSamplingRate),e.logNetworkAfterSampling=fh(e.networkRequestsSamplingRate),n}function _0(n){return Number(n)>Date.now()}function fh(n){return Math.random()<=n}/**
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
 */let fc=1,Ro;function Gp(n){return fc=2,Ro=Ro||v0(n),Ro}function y0(){return fc===3}function v0(n){return T0().then(()=>YA(n.installations)).then(e=>d0(n,e)).then(()=>ph(),()=>ph())}function T0(){const n=ue.getInstance().document;return new Promise(e=>{if(n&&n.readyState!=="complete"){const t=()=>{n.readyState==="complete"&&(n.removeEventListener("readystatechange",t),e())};n.addEventListener("readystatechange",t)}else e()})}function ph(){fc=3}/**
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
 */const Kp=10*1e3,E0=5.5*1e3,I0=1e3,Qp=3;let xi=Qp,Jt=[],mh=!1;function w0(){mh||(pc(E0),mh=!0)}function pc(n){setTimeout(()=>{xi<=0||(Jt.length>0&&Xp(),pc(Kp))},n)}function Xp(){const n=Jt.splice(0,I0),e=n.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),t={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Ve.getInstance().logSource,log_event:e};A0(t).then(()=>{xi=Qp}).catch(()=>{Jt=[...n,...Jt],xi--,jt.info(`Tries left: ${xi}.`),pc(Kp)})}function A0(n){const e=Ve.getInstance().getFlTransportFullUrl(),t=JSON.stringify(n);return navigator.sendBeacon&&navigator.sendBeacon(e,t)?Promise.resolve():fetch(e,{method:"POST",body:t,keepalive:!0}).then()}function R0(n){if(!n.eventTime||!n.message)throw we.create("invalid cc log");Jt=[...Jt,n]}function b0(n){return(...e)=>{const t=n(...e);R0({message:t,eventTime:Date.now()})}}function S0(){for(;Jt.length>0;)Xp()}/**
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
 */let Tr;function Yp(n,e){Tr||(Tr={send:b0(k0),flush:S0}),Tr.send(n,e)}function Ei(n){const e=Ve.getInstance();!e.instrumentationEnabled&&n.isAuto||!e.dataCollectionEnabled&&!n.isAuto||ue.getInstance().requiredApisAvailable()&&(y0()?bo(n):Gp(n.performanceController).then(()=>bo(n),()=>bo(n)))}function P0(){Tr&&Tr.flush()}function bo(n){if(!dc())return;const e=Ve.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||Yp(n,1)}function C0(n){const e=Ve.getInstance();if(!e.instrumentationEnabled)return;const t=n.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];t===r||t===i||!e.loggingEnabled||!e.logNetworkAfterSampling||Yp(n,0)}function k0(n,e){return e===0?N0(n):D0(n)}function N0(n){const e={url:n.url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},t={application_info:Jp(n.performanceController.app),network_request_metric:e};return JSON.stringify(t)}function D0(n){const e={name:n.name,is_auto:n.isAuto,client_start_time_us:n.startTimeUs,duration_us:n.durationUs};Object.keys(n.counters).length!==0&&(e.counters=n.counters);const t=n.getAttributes();Object.keys(t).length!==0&&(e.custom_attributes=t);const r={application_info:Jp(n.performanceController.app),trace_metric:e};return JSON.stringify(r)}function Jp(n){return{google_app_id:Hp(n),app_instance_id:dc(),web_app_info:{sdk_version:Op,page_url:ue.getInstance().getUrl(),service_worker_status:r0(),visibility_state:i0(),effective_connection_type:s0()},application_process_state:0}}/**
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
 */function gh(n,e){const t=e;if(!t||t.responseStart===void 0)return;const r=ue.getInstance().getTimeOrigin(),i=Math.floor((t.startTime+r)*1e3),s=t.responseStart?Math.floor((t.responseStart-t.startTime)*1e3):void 0,a=Math.floor((t.responseEnd-t.startTime)*1e3),c=t.name&&t.name.split("?")[0],l={performanceController:n,url:c,responsePayloadBytes:t.transferSize,startTimeUs:i,timeToResponseInitiatedUs:s,timeToResponseCompletedUs:a};C0(l)}/**
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
 */const O0=100,V0="_",M0=[Mp,xp,Lp,Up,jp,Fp];function x0(n,e){return n.length===0||n.length>O0?!1:e&&e.startsWith(Vp)&&M0.indexOf(n)>-1||!n.startsWith(V0)}function L0(n){const e=Math.floor(n);return e<n&&jt.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
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
 */class Dr{constructor(e,t,r=!1,i){this.performanceController=e,this.name=t,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=ue.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${qA}-${this.randomId}-${this.name}`,this.traceStopMark=`${zA}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${aa}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw we.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw we.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Ei(this)}record(e,t,r){if(e<=0)throw we.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw we.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(t*1e3),this.startTimeUs=Math.floor(e*1e3),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(const i of Object.keys(r.metrics))isNaN(Number(r.metrics[i]))||(this.counters[i]=Math.floor(Number(r.metrics[i])));Ei(this)}incrementMetric(e,t=1){this.counters[e]===void 0?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){if(x0(e,this.name))this.counters[e]=L0(t??0);else throw we.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const r=o0(e),i=a0(t);if(r&&i){this.customAttributes[e]=t;return}if(!r)throw we.create("invalid attribute name",{attributeName:e});if(!i)throw we.create("invalid attribute value",{attributeValue:t})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(t.duration*1e3),this.startTimeUs=Math.floor((t.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,t,r,i,s){const a=ue.getInstance().getUrl();if(!a)return;const c=new Dr(e,Vp+a,!0),l=Math.floor(ue.getInstance().getTimeOrigin()*1e3);c.setStartTime(l),t&&t[0]&&(c.setDuration(Math.floor(t[0].duration*1e3)),c.putMetric("domInteractive",Math.floor(t[0].domInteractive*1e3)),c.putMetric("domContentLoadedEventEnd",Math.floor(t[0].domContentLoadedEventEnd*1e3)),c.putMetric("loadEventEnd",Math.floor(t[0].loadEventEnd*1e3)));const d="first-paint",p="first-contentful-paint";if(r){const m=r.find(R=>R.name===d);m&&m.startTime&&c.putMetric(Mp,Math.floor(m.startTime*1e3));const T=r.find(R=>R.name===p);T&&T.startTime&&c.putMetric(xp,Math.floor(T.startTime*1e3)),s&&c.putMetric(Lp,Math.floor(s*1e3))}this.addWebVitalMetric(c,Up,WA,i.lcp),this.addWebVitalMetric(c,jp,GA,i.cls),this.addWebVitalMetric(c,Fp,HA,i.inp),Ei(c),P0()}static addWebVitalMetric(e,t,r,i){i&&(e.putMetric(t,Math.floor(i.value*1e3)),i.elementAttribution&&e.putAttribute(r,i.elementAttribution))}static createUserTimingTrace(e,t){const r=new Dr(e,t,!1,t);Ei(r)}}/**
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
 */let Li={},_h=!1,Zp;function yh(n){dc()&&(setTimeout(()=>F0(n),0),setTimeout(()=>U0(n),0),setTimeout(()=>j0(n),0))}function U0(n){const e=ue.getInstance(),t=e.getEntriesByType("resource");for(const r of t)gh(n,r);e.setupObserver("resource",r=>gh(n,r))}function F0(n){const e=ue.getInstance();"onpagehide"in window?e.document.addEventListener("pagehide",()=>So(n)):e.document.addEventListener("unload",()=>So(n)),e.document.addEventListener("visibilitychange",()=>{e.document.visibilityState==="hidden"&&So(n)}),e.onFirstInputDelay&&e.onFirstInputDelay(t=>{Zp=t}),e.onLCP(t=>{var r;Li.lcp={value:t.value,elementAttribution:(r=t.attribution)===null||r===void 0?void 0:r.element}}),e.onCLS(t=>{var r;Li.cls={value:t.value,elementAttribution:(r=t.attribution)===null||r===void 0?void 0:r.largestShiftTarget}}),e.onINP(t=>{var r;Li.inp={value:t.value,elementAttribution:(r=t.attribution)===null||r===void 0?void 0:r.interactionTarget}})}function j0(n){const e=ue.getInstance(),t=e.getEntriesByType("measure");for(const r of t)vh(n,r);e.setupObserver("measure",r=>vh(n,r))}function vh(n,e){const t=e.name;t.substring(0,aa.length)!==aa&&Dr.createUserTimingTrace(n,t)}function So(n){if(!_h){_h=!0;const e=ue.getInstance(),t=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");setTimeout(()=>{Dr.createOobTrace(n,t,r,Li,Zp)},0)}}/**
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
 */class B0{constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}_init(e){this.initialized||(e?.dataCollectionEnabled!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),e?.instrumentationEnabled!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),ue.getInstance().requiredApisAvailable()?ds().then(t=>{t&&(w0(),Gp(this).then(()=>yh(this),()=>yh(this)),this.initialized=!0)}).catch(t=>{jt.info(`Environment doesn't support IndexedDB: ${t}`)}):jt.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){Ve.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return Ve.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){Ve.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return Ve.getInstance().dataCollectionEnabled}}const $0="[DEFAULT]";function q0(n=Mr()){return n=le(n),pt(n,"performance").getImmediate()}const z0=(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),r=n.getProvider("installations-internal").getImmediate();if(t.name!==$0)throw we.create("FB not default");if(typeof window>"u")throw we.create("no window");XA(window);const i=new B0(t,r);return i._init(e),i};function W0(){Ue(new xe("performance",z0,"PUBLIC")),Re(lh,oa),Re(lh,oa,"esm2017")}W0();/**
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
 */const cs="analytics",H0="firebase_id",G0="origin",K0=60*1e3,Q0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",mc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ne=new Vr("@firebase/analytics");/**
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
 */const X0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new Bt("analytics","Analytics",X0);/**
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
 */function Y0(n){if(!n.startsWith(mc)){const e=Me.create("invalid-gtag-resource",{gtagURL:n});return Ne.warn(e.message),""}return n}function em(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function J0(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Z0(n,e){const t=J0("firebase-js-sdk-policy",{createScriptURL:Y0}),r=document.createElement("script"),i=`${mc}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function eR(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function tR(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await em(t)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(c){Ne.error(c)}n("config",i,s)}async function nR(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await em(t);for(const l of a){const d=c.find(m=>m.measurementId===l),p=d&&e[d.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){Ne.error(s)}}function rR(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[c,l]=a;await nR(n,e,t,c,l)}else if(s==="config"){const[c,l]=a;await tR(n,e,t,r,c,l)}else if(s==="consent"){const[c,l]=a;n("consent",c,l)}else if(s==="get"){const[c,l,d]=a;n("get",c,l,d)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){Ne.error(c)}}return i}function iR(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=rR(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function sR(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(mc)&&t.src.includes(n))return t;return null}/**
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
 */const oR=30,aR=1e3;class cR{constructor(e={},t=aR){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tm=new cR;function uR(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function lR(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:uR(r)},s=Q0.replace("{app-id}",t),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function hR(n,e=tm,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw Me.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Me.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new pR;return setTimeout(async()=>{c.abort()},K0),nm({appId:r,apiKey:i,measurementId:s},a,c,e)}async function nm(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=tm){var s;const{appId:a,measurementId:c}=n;try{await dR(r,e)}catch(l){if(c)return Ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:a,measurementId:c};throw l}try{const l=await lR(n);return i.deleteThrottleMetadata(a),l}catch(l){const d=l;if(!fR(d)){if(i.deleteThrottleMetadata(a),c)return Ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:a,measurementId:c};throw l}const p=Number((s=d?.customData)===null||s===void 0?void 0:s.httpStatus)===503?Eu(t,i.intervalMillis,oR):Eu(t,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return i.setThrottleMetadata(a,m),Ne.debug(`Calling attemptFetch again in ${p} millis`),nm(n,m,r,i)}}function dR(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Me.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fR(n){if(!(n instanceof Fe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class pR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mR(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});n("event",t,a)}}/**
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
 */async function gR(){if(hs())try{await ds()}catch(n){return Ne.warn(Me.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return Ne.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _R(n,e,t,r,i,s,a){var c;const l=hR(n);l.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&Ne.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>Ne.error(R)),e.push(l);const d=gR().then(R=>{if(R)return r.getId()}),[p,m]=await Promise.all([l,d]);sR(s)||Z0(s,p.measurementId),i("js",new Date);const T=(c=a?.config)!==null&&c!==void 0?c:{};return T[G0]="firebase",T.update=!0,m!=null&&(T[H0]=m),i("config",p.measurementId,T),p.measurementId}/**
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
 */class yR{constructor(e){this.app=e}_delete(){return delete Er[this.app.options.appId],Promise.resolve()}}let Er={},Th=[];const Eh={};let Po="dataLayer",vR="gtag",Ih,rm,wh=!1;function TR(){const n=[];if(ca()&&n.push("This is a browser extension environment."),ua()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Me.create("invalid-analytics-context",{errorInfo:e});Ne.warn(t.message)}}function ER(n,e,t){TR();const r=n.options.appId;if(!r)throw Me.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(Er[r]!=null)throw Me.create("already-exists",{id:r});if(!wh){eR(Po);const{wrappedGtag:s,gtagCore:a}=iR(Er,Th,Eh,Po,vR);rm=s,Ih=a,wh=!0}return Er[r]=_R(n,Th,Eh,e,Ih,Po,t),new yR(n)}function IR(n=Mr()){n=le(n);const e=pt(n,cs);return e.isInitialized()?e.getImmediate():wR(n)}function wR(n,e={}){const t=pt(n,cs);if(t.isInitialized()){const i=t.getImmediate();if(Nt(e,t.getOptions()))return i;throw Me.create("already-initialized")}return t.initialize({options:e})}async function AR(){if(ca()||!ua()||!hs())return!1;try{return await ds()}catch{return!1}}function RR(n,e,t,r){n=le(n),mR(rm,Er[n.app.options.appId],e,t,r).catch(i=>Ne.error(i))}const Ah="@firebase/analytics",Rh="0.10.12";function bR(){Ue(new xe(cs,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ER(r,i,t)},"PUBLIC")),Ue(new xe("analytics-internal",n,"PRIVATE")),Re(Ah,Rh),Re(Ah,Rh,"esm2017");function n(e){try{const t=e.getProvider(cs).getImmediate();return{logEvent:(r,i,s)=>RR(t,r,i,s)}}catch(t){throw Me.create("interop-component-reg-failed",{reason:t})}}}bR();const SR={apiKey:"AIzaSyDk-_hxBNa1tRCosMO-FBplY5sGSj0jhEU",authDomain:"comet-scanner-template-wizard.firebaseapp.com",projectId:"comet-scanner-template-wizard",storageBucket:"comet-scanner-template-wizard.firebasestorage.app",messagingSenderId:"1073315238272",appId:"1:1073315238272:web:13e744ae6d06fa0949f165",measurementId:"G-D0CQ6B72BS"},Hr=Fh(SR),Ii=Xv(Hr),wi=GI(Hr);jw(Hr);q0(Hr);AR().then(n=>{n?(IR(Hr),console.log("Firebase Analytics initialized.")):console.log("Firebase Analytics is not supported in this environment.")});const im=J.createContext(void 0);function sm({children:n}){const[e,t]=J.useState(null),[r,i]=J.useState(!0);J.useEffect(()=>{const m=Uy(Ii,async T=>{i(!0);try{if(T){const R=_o(wi,"users",T.uid),N=await lw(R);let O=null;N.exists()?O=N.data():console.warn("User document not found in Firestore for UID:",T.uid),t({...T,profile:O,isOwner:O?.isOwner,username:O?.username})}else t(null)}catch(R){console.error("Error fetching user profile:",R)}i(!1)});return()=>m()},[]);const s=async(m,T)=>{try{await My(Ii,m,T)}catch(R){throw R}},a=async(m,T,R)=>{if(R&&!(await wi.collection("users").where("isOwner","==",!0).get()).empty)throw new Error("An owner account already exists.");const O=(await Vy(Ii,m,T)).user;if(O){const k=_o(wi,"users",O.uid),B={username:m,isOwner:R,createdAt:Ql(),permissions:R?{contentManagement:!0,userManagement:!0,systemConfiguration:!0,mediaUploads:!0,securitySettings:!0,siteCustomization:!0}:{contentManagement:!1,userManagement:!1,systemConfiguration:!1,mediaUploads:!0,securitySettings:!1,siteCustomization:!1}};await Kl(k,B)}else throw new Error("Failed to create user account.")},c=async m=>{await c()},p={currentUser:e,sendPasswordResetEmail:c,login:s,signup:a,logout:async()=>{await Fy(Ii)},isLoading:r,saveTemplate:async(m,T,R)=>{if(R){const N=_o(wi,"templates");await Kl(N,{userId:R.uid,templateName:m,templateData:T,createdAt:Ql()})}else throw new Error("Failed to create user account.")}};return C.jsx(im.Provider,{value:p,children:!r&&n})}function om(){const n=J.useContext(im);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n}const PR={currentStep:1,progress:{step1Complete:!1},answers:{},sections:[],questions:[]},am=J.createContext(void 0);function CR(n,e){switch(e.type){case"SET_STEP":return{...n,currentStep:e.payload};case"SET_PROGRESS":return{...n,progress:{...n.progress,...e.payload}};case"SET_ANSWER":return{...n,answers:{...n.answers,[e.payload.questionId]:e.payload.value}};case"SET_SECTIONS":return{...n,sections:e.payload};case"SET_QUESTIONS":return{...n,questions:e.payload};default:return n}}function kR({children:n}){const[e,t]=J.useReducer(CR,PR);return C.jsx(am.Provider,{value:{state:e,dispatch:t},children:n})}function ab(){const n=J.useContext(am);if(n===void 0)throw new Error("useWizard must be used within a WizardProvider");return n}const cm=J.createContext(void 0),NR={initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},DR=({type:n,message:e})=>{const t={success:"bg-green-500",error:"bg-red-500",info:"bg-blue-500"}[n],r={success:C.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),error:C.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}),info:C.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}[n];return C.jsxs(Yt.div,{variants:NR,initial:"initial",animate:"animate",exit:"exit",className:`${t} text-white p-4 rounded-lg shadow-lg flex items-center space-x-3`,children:[C.jsx("span",{className:"flex-shrink-0",children:r}),C.jsx("p",{className:"text-sm font-medium",children:e})]})},OR=({children:n})=>{const[e,t]=J.useState([]),r=J.useCallback((i,s)=>{const a=Date.now().toString();t(c=>[...c,{id:a,type:i,message:s}]),setTimeout(()=>{t(c=>c.filter(l=>l.id!==a))},5e3)},[]);return C.jsxs(cm.Provider,{value:{showToast:r},children:[n,C.jsx("div",{className:"fixed top-4 right-4 z-50 space-y-2",children:C.jsx(Co,{mode:"popLayout",children:e.map(i=>C.jsx(DR,{type:i.type,message:i.message},i.id))})})]})},cb=()=>{const n=J.useContext(cm);if(!n)throw new Error("useToast must be used within a ToastProvider");return n},um=J.createContext(void 0),VR=({children:n})=>{const[e,t]=J.useState(()=>localStorage.getItem("theme")||"dark");J.useEffect(()=>{localStorage.setItem("theme",e),document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(e)},[e]);const r=()=>{t(i=>i==="dark"?"light":"dark")};return C.jsx(um.Provider,{value:{theme:e,toggleTheme:r},children:n})},lm=()=>{const n=J.useContext(um);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},bh=({children:n,requireOwner:e=!1})=>{const{currentUser:t,isLoading:r}=om(),i=Sh();return r?C.jsx("div",{className:"min-h-screen flex items-center justify-center",children:C.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[C.jsxs("svg",{className:"animate-spin h-8 w-8 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[C.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),C.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),C.jsx("span",{className:"text-gray-600",children:"Loading..."})]})}):t?e&&!t.isOwner?C.jsx(Ui,{to:"/scanner",state:{error:"Owner access required"},replace:!0}):C.jsx(C.Fragment,{children:n}):C.jsx(Ui,{to:"/login",state:{from:i},replace:!0})},MR=()=>{const{theme:n,toggleTheme:e}=lm();return C.jsx(Yt.button,{onClick:e,className:`
        fixed top-4 right-4 p-2 rounded-full
        flex items-center justify-center
        backdrop-blur-sm
        ${n==="dark"?"bg-gray-800/80 text-yellow-400 hover:bg-gray-700/80":"bg-white/80 text-gray-800 hover:bg-gray-100/80"}
        shadow-lg
        transition-colors
        z-50
      `,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":"Toggle theme",children:n==="dark"?C.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):C.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})},Ai=({children:n})=>{const{currentUser:e,logout:t}=om(),{theme:r}=lm(),i=Qm(),s=Sh(),a=async()=>{try{await t(),i("/login")}catch(l){console.error("Failed to log out:",l)}},c=l=>s.pathname.startsWith(l);return C.jsx("div",{className:`min-h-screen ${r==="dark"?"dark":""}`,children:C.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200",children:[C.jsx("header",{className:"bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200",children:C.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[C.jsxs("div",{className:"h-16 flex items-center justify-between",children:[C.jsx("div",{className:"flex items-center",children:C.jsx(Yt.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-2xl font-bold text-gray-900 dark:text-white",children:"COMET Scanner Wizard"})}),C.jsx(Co,{mode:"wait",children:e&&C.jsxs(Yt.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:"flex items-center space-x-4",children:[C.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:[e.isOwner&&C.jsx("span",{className:"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium mr-2",children:"Owner"}),C.jsx("span",{children:e.username})]}),C.jsx("button",{onClick:a,className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"Logout"})]})})]}),e&&C.jsxs("nav",{className:"flex space-x-8 -mb-px",children:[C.jsx(gu,{to:"/scanner",className:`border-b-2 py-4 px-1 inline-flex items-center text-sm font-medium transition-colors ${c("/scanner")?"border-blue-500 text-blue-600 dark:text-blue-400":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}`,children:"Scanner Templates"}),e.isOwner&&C.jsx(gu,{to:"/admin",className:`border-b-2 py-4 px-1 inline-flex items-center text-sm font-medium transition-colors ${c("/admin")?"border-blue-500 text-blue-600 dark:text-blue-400":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}`,children:"Admin Dashboard"})]})]})}),C.jsxs("main",{className:"relative",children:[C.jsx(MR,{}),C.jsx(Co,{mode:"wait",children:C.jsx(Yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},children:n},"content")})]}),C.jsx("footer",{className:"bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200",children:C.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[C.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:["© ",new Date().getFullYear()," COMET Scanner Wizard"]}),C.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Version 1.0.0"})]})})]})})},xR=({size:n="md",color:e="primary",fullScreen:t=!1,text:r})=>{const i={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"}[n],s={primary:"text-blue-600",white:"text-white",gray:"text-gray-600"}[e],a=C.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[C.jsx(Yt.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},children:C.jsxs("svg",{className:`${i} ${s}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[C.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),C.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),r&&C.jsx("span",{className:`text-sm font-medium ${s}`,children:r})]});return t?C.jsx("div",{className:"fixed inset-0 bg-gray-50/80 backdrop-blur-sm flex items-center justify-center z-50",children:a}):a},Ri=({message:n="Loading..."})=>C.jsx("div",{className:"min-h-[200px] flex flex-col items-center justify-center p-4",children:C.jsxs(Yt.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"flex flex-col items-center",children:[C.jsx(xR,{size:"lg"}),C.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400 font-medium",children:n})]})}),LR=()=>{const[n,e]=J.useState(!1),[t,r]=J.useState([]);return J.useEffect(()=>{},[]),null},UR=J.lazy(()=>us(()=>import("./Login-CL1SVQZp.js"),__vite__mapDeps([0,1,2]))),FR=J.lazy(()=>us(()=>import("./Signup-CYo75a9O.js"),__vite__mapDeps([3,1,2]))),jR=J.lazy(()=>us(()=>import("./ScannerWizard-uVxG4vdG.js"),__vite__mapDeps([4,1,2,5]))),BR=J.lazy(()=>us(()=>import("./AdminDashboard-CUoxfXkp.js"),__vite__mapDeps([6,1,2,5])));function $R(){return C.jsx(Xm,{children:C.jsx(sm,{children:C.jsx(kR,{children:C.jsx(VR,{children:C.jsxs(OR,{children:[C.jsx(LR,{}),C.jsxs(Ym,{children:[C.jsx(_n,{path:"/login",element:C.jsx(Ai,{children:C.jsx(J.Suspense,{fallback:C.jsx(Ri,{message:"Loading login page..."}),children:C.jsx(UR,{})})})}),C.jsx(_n,{path:"/signup",element:C.jsx(Ai,{children:C.jsx(J.Suspense,{fallback:C.jsx(Ri,{message:"Loading signup page..."}),children:C.jsx(FR,{})})})}),C.jsx(_n,{path:"/scanner",element:C.jsx(bh,{children:C.jsx(Ai,{children:C.jsx(J.Suspense,{fallback:C.jsx(Ri,{message:"Loading scanner wizard..."}),children:C.jsx(jR,{})})})})}),C.jsx(_n,{path:"/admin",element:C.jsx(bh,{requireOwner:!0,children:C.jsx(Ai,{children:C.jsx(J.Suspense,{fallback:C.jsx(Ri,{message:"Loading admin dashboard..."}),children:C.jsx(BR,{})})})})}),C.jsx(_n,{path:"/",element:C.jsx(Ui,{to:"/scanner",replace:!0})}),C.jsx(_n,{path:"*",element:C.jsx(Ui,{to:"/scanner",replace:!0})})]})]})})})})})}const qR=()=>{const n="ChasinAlts",e="Chaseburger856!";if(!localStorage.getItem(`user_${n}`)){const t={username:n,password:e,isOwner:!0,createdAt:Date.now(),permissions:{contentManagement:!0,userManagement:!0,systemConfiguration:!0,mediaUploads:!0,securitySettings:!0,siteCustomization:!0}};localStorage.setItem(`user_${n}`,JSON.stringify(t))}},zR=()=>{qR();const n=localStorage.getItem("user_ChasinAlts");if(!n)return console.error("Admin account initialization failed"),!1;try{const e=JSON.parse(n);return e.username!=="ChasinAlts"?(console.error("Admin username mismatch"),!1):e.isOwner?["contentManagement","userManagement","systemConfiguration","mediaUploads","securitySettings","siteCustomization"].every(i=>e.permissions[i])?!0:(console.error("Admin missing required permissions"),!1):(console.error("Admin is not set as owner"),!1)}catch(e){return console.error("Error verifying admin setup:",e),!1}},WR="serviceWorker"in navigator,HR=()=>{if(!WR){console.log("Service workers are not supported in this browser");return}window.addEventListener("load",()=>{const n=`${window.location.origin}/service-worker.js`;navigator.serviceWorker.register(n).then(e=>{console.log("Service Worker registered with scope:",e.scope),e.update(),e.onupdatefound=()=>{const t=e.installing;t&&(t.onstatechange=()=>{t.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),window.dispatchEvent(new CustomEvent("swUpdate"))):console.log("Content is cached for offline use."))})}}).catch(e=>{console.error("Error during service worker registration:",e)})})},GR={sampleRate:.1},KR=()=>{if(!QR()||typeof window>"u")return;window.EventTarget&&typeof EventTarget.prototype.setMaxListeners=="function"&&EventTarget.prototype.setMaxListeners(20),XR();const n=()=>{setTimeout(()=>{JR()},1e3),window.removeEventListener("load",n)};window.addEventListener("load",n)},QR=()=>Math.random()<GR.sampleRate,XR=()=>{if(window.PerformanceObserver)try{new PerformanceObserver(i=>{const s=i.getEntries(),a=s[s.length-1];a&&Tt({name:"largest-contentful-paint",value:a.startTime,category:"paint"})}).observe({type:"largest-contentful-paint",buffered:!0}),new PerformanceObserver(i=>{i.getEntries().forEach(a=>{a.name==="first-input"&&Tt({name:"first-input-delay",value:a.processingStart-a.startTime,category:"interaction"})})}).observe({type:"first-input",buffered:!0}),new PerformanceObserver(i=>{let s=0;i.getEntries().forEach(a=>{a.hadRecentInput||(s+=a.value)}),Tt({name:"cumulative-layout-shift",value:s,category:"layout"})}).observe({type:"layout-shift",buffered:!0}),new PerformanceObserver(i=>{const s=i.getEntries()[0];if(s){const a=s;Tt({name:"time-to-first-byte",value:a.responseStart-a.requestStart,category:"navigation"}),Tt({name:"dom-content-loaded",value:a.domContentLoadedEventEnd-a.fetchStart,category:"navigation"}),Tt({name:"window-loaded",value:a.loadEventEnd-a.fetchStart,category:"navigation"})}}).observe({type:"navigation",buffered:!0})}catch(n){console.error("Error setting up performance observers:",n)}},hm={},Tt=n=>{hm[n.name]=n.value},YR=n=>{const e=performance.now();return()=>{const t=performance.now()-e;Tt({name:n,value:t})}},JR=()=>{const n={...hm};if(window.performance){performance.getEntriesByType("paint").forEach(r=>{r.name==="first-paint"?n.firstPaint=r.startTime:r.name==="first-contentful-paint"&&(n.firstContentfulPaint=r.startTime)});const t=performance.getEntriesByType("navigation")[0];t&&(n.timeToFirstByte=t.responseStart-t.requestStart,n.domContentLoaded=t.domContentLoadedEventEnd-t.fetchStart,n.windowLoaded=t.loadEventEnd-t.fetchStart)}return n},ZR={init:KR,recordMetric:Tt,startTiming:YR};zR();tg.createRoot(document.getElementById("root")).render(C.jsx(Jm.StrictMode,{children:C.jsx(sm,{children:C.jsx($R,{})})}));typeof window<"u"&&HR();typeof window<"u"&&ZR.init();export{Fe as F,xR as L,MR as T,ab as a,lm as b,rb as c,wi as d,cb as e,ob as g,ib as q,om as u,sb as w};
