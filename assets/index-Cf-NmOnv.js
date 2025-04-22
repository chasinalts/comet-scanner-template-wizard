const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-CAuKOxfA.js","assets/vendor-ui-CMso90iE.js","assets/vendor-react-V1NwqAnN.js","assets/Signup-k5o18S54.js","assets/ScannerWizard-CEoCekJr.js","assets/FormField-Bc5oSVOO.js","assets/AdminDashboard-XGv6VzFc.js"])))=>i.map(i=>d[i]);
import{j as N,A as Qo,m as sn}from"./vendor-ui-CMso90iE.js";import{b as Mg,g as Ug,a as le,u as ed,N as es,c as Fg,L as qu,R as td,B as jg,d as Bg,e as bn}from"./vendor-react-V1NwqAnN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Si={},$u;function qg(){if($u)return Si;$u=1;var n=Mg();return Si.createRoot=n.createRoot,Si.hydrateRoot=n.hydrateRoot,Si}var $g=qg();const zg=Ug($g),Hg="modulepreload",Wg=function(n){return"/"+n},zu={},Rs=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");i=a(t.map(d=>{if(d=Wg(d),d in zu)return;zu[d]=!0;const f=d.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":Hg,f||(v.as="script"),v.crossOrigin="",v.href=d,l&&v.setAttribute("nonce",l),document.head.appendChild(v),f)return new Promise((R,P)=>{v.addEventListener("load",R),v.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})},Gg=()=>{};var Hu={};/**
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
 */const nd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Kg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let v=(c&15)<<2|d>>6,R=d&63;l||(R=64,a||(v=64)),r.push(t[f],t[m],t[v],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Kg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||m==null)throw new Qg;const v=s<<2|c>>4;if(r.push(v),d!==64){const R=c<<4&240|d>>2;if(r.push(R),m!==64){const P=d<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Qg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xg=function(n){const e=nd(n);return rd.encodeByteArray(e,!0)},ts=function(n){return Xg(n).replace(/\./g,"")},id=function(n){try{return rd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jg=()=>Yg().__FIREBASE_DEFAULTS__,Zg=()=>{if(typeof process>"u"||typeof Hu>"u")return;const n=Hu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},e_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&id(n[1]);return e&&JSON.parse(e)},bs=()=>{try{return Gg()||Jg()||Zg()||e_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sd=n=>{var e,t;return(t=(e=bs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},od=n=>{const e=sd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ad=()=>{var n;return(n=bs())===null||n===void 0?void 0:n.config},cd=n=>{var e;return(e=bs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class t_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ud(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ts(JSON.stringify(t)),ts(JSON.stringify(a)),""].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function n_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function r_(){var n;const e=(n=bs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function i_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pa(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function s_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o_(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function a_(){return!r_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ss(){try{return typeof indexedDB=="object"}catch{return!1}}function Ps(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Ca(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const c_="FirebaseError";class ze extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=c_,Object.setPrototypeOf(this,ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kt.prototype.create)}}class Kt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?u_(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new ze(i,c,r)}}function u_(n,e){return n.replace(l_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const l_=/\{\$([^}]+)}/g;function h_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ut(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Wu(s)&&Wu(a)){if(!Ut(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Wu(n){return n!==null&&typeof n=="object"}/**
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
 */function Gr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Er(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function d_(n,e){const t=new f_(n,e);return t.subscribe.bind(t)}class f_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");p_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ao),i.error===void 0&&(i.error=Ao),i.complete===void 0&&(i.complete=Ao);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function p_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ao(){}/**
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
 */const m_=1e3,g_=2,__=4*60*60*1e3,y_=.5;function Gu(n,e=m_,t=g_){const r=e*Math.pow(t,n),i=Math.round(y_*r*(Math.random()-.5)*2);return Math.min(__,r+i)}/**
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
 */function ne(n){return n&&n._delegate?n._delegate:n}class Be{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const en="[DEFAULT]";/**
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
 */class v_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new t_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E_(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:T_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T_(n){return n===en?void 0:n}function E_(n){return n.instantiationMode==="EAGER"}/**
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
 */class I_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new v_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const w_={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},A_=W.INFO,R_={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},b_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=R_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kr{constructor(e){this.name=e,this._logLevel=A_,this._logHandler=b_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const S_=(n,e)=>e.some(t=>n instanceof t);let Ku,Qu;function P_(){return Ku||(Ku=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C_(){return Qu||(Qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ld=new WeakMap,Xo=new WeakMap,hd=new WeakMap,Ro=new WeakMap,ka=new WeakMap;function k_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Vt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ld.set(t,n)}).catch(()=>{}),ka.set(e,n),e}function N_(n){if(Xo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Xo.set(n,e)}let Yo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function O_(n){Yo=n(Yo)}function D_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bo(this),e,...t);return hd.set(r,e.sort?e.sort():[e]),Vt(r)}:C_().includes(n)?function(...e){return n.apply(bo(this),e),Vt(ld.get(this))}:function(...e){return Vt(n.apply(bo(this),e))}}function V_(n){return typeof n=="function"?D_(n):(n instanceof IDBTransaction&&N_(n),S_(n,P_())?new Proxy(n,Yo):n)}function Vt(n){if(n instanceof IDBRequest)return k_(n);if(Ro.has(n))return Ro.get(n);const e=V_(n);return e!==n&&(Ro.set(n,e),ka.set(e,n)),e}const bo=n=>ka.get(n);function dd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=Vt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Vt(a.result),l.oldVersion,l.newVersion,Vt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const x_=["get","getKey","getAll","getAllKeys","count"],L_=["put","add","delete","clear"],So=new Map;function Xu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(So.get(e))return So.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=L_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||x_.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return So.set(e,s),s}O_(n=>({...n,get:(e,t,r)=>Xu(e,t)||n.get(e,t,r),has:(e,t)=>!!Xu(e,t)||n.has(e,t)}));/**
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
 */class M_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(U_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function U_(n){const e=n.getComponent();return e?.type==="VERSION"}const Jo="@firebase/app",Yu="0.11.4";/**
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
 */const pt=new Kr("@firebase/app"),F_="@firebase/app-compat",j_="@firebase/analytics-compat",B_="@firebase/analytics",q_="@firebase/app-check-compat",$_="@firebase/app-check",z_="@firebase/auth",H_="@firebase/auth-compat",W_="@firebase/database",G_="@firebase/data-connect",K_="@firebase/database-compat",Q_="@firebase/functions",X_="@firebase/functions-compat",Y_="@firebase/installations",J_="@firebase/installations-compat",Z_="@firebase/messaging",ey="@firebase/messaging-compat",ty="@firebase/performance",ny="@firebase/performance-compat",ry="@firebase/remote-config",iy="@firebase/remote-config-compat",sy="@firebase/storage",oy="@firebase/storage-compat",ay="@firebase/firestore",cy="@firebase/vertexai",uy="@firebase/firestore-compat",ly="firebase",hy="11.6.0";/**
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
 */const Zo="[DEFAULT]",dy={[Jo]:"fire-core",[F_]:"fire-core-compat",[B_]:"fire-analytics",[j_]:"fire-analytics-compat",[$_]:"fire-app-check",[q_]:"fire-app-check-compat",[z_]:"fire-auth",[H_]:"fire-auth-compat",[W_]:"fire-rtdb",[G_]:"fire-data-connect",[K_]:"fire-rtdb-compat",[Q_]:"fire-fn",[X_]:"fire-fn-compat",[Y_]:"fire-iid",[J_]:"fire-iid-compat",[Z_]:"fire-fcm",[ey]:"fire-fcm-compat",[ty]:"fire-perf",[ny]:"fire-perf-compat",[ry]:"fire-rc",[iy]:"fire-rc-compat",[sy]:"fire-gcs",[oy]:"fire-gcs-compat",[ay]:"fire-fst",[uy]:"fire-fst-compat",[cy]:"fire-vertex","fire-js":"fire-js",[ly]:"fire-js-all"};/**
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
 */const ns=new Map,fy=new Map,ea=new Map;function Ju(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $e(n){const e=n.name;if(ea.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;ea.set(e,n);for(const t of ns.values())Ju(t,n);for(const t of fy.values())Ju(t,n);return!0}function yt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Me(n){return n==null?!1:n.settings!==void 0}/**
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
 */const py={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new Kt("app","Firebase",py);/**
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
 */class my{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const gn=hy;function fd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(t||(t=ad()),!t)throw xt.create("no-options");const s=ns.get(i);if(s){if(Ut(t,s.options)&&Ut(r,s.config))return s;throw xt.create("duplicate-app",{appName:i})}const a=new I_(i);for(const l of ea.values())a.addComponent(l);const c=new my(t,r,a);return ns.set(i,c),c}function Qr(n=Zo){const e=ns.get(n);if(!e&&n===Zo&&ad())return fd();if(!e)throw xt.create("no-app",{appName:n});return e}function Se(n,e,t){var r;let i=(r=dy[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(c.join(" "));return}$e(new Be(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gy="firebase-heartbeat-database",_y=1,Lr="firebase-heartbeat-store";let Po=null;function pd(){return Po||(Po=dd(gy,_y,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw xt.create("idb-open",{originalErrorMessage:n.message})})),Po}async function yy(n){try{const t=(await pd()).transaction(Lr),r=await t.objectStore(Lr).get(md(n));return await t.done,r}catch(e){if(e instanceof ze)pt.warn(e.message);else{const t=xt.create("idb-get",{originalErrorMessage:e?.message});pt.warn(t.message)}}}async function Zu(n,e){try{const r=(await pd()).transaction(Lr,"readwrite");await r.objectStore(Lr).put(e,md(n)),await r.done}catch(t){if(t instanceof ze)pt.warn(t.message);else{const r=xt.create("idb-set",{originalErrorMessage:t?.message});pt.warn(r.message)}}}function md(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vy=1024,Ty=30;class Ey{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=el();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Ty){const a=Ay(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=el(),{heartbeatsToSend:r,unsentEntries:i}=Iy(this._heartbeatsCache.heartbeats),s=ts(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return pt.warn(t),""}}}function el(){return new Date().toISOString().substring(0,10)}function Iy(n,e=vy){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),tl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),tl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class wy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ss()?Ps().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yy(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tl(n){return ts(JSON.stringify({version:2,heartbeats:n})).length}function Ay(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Ry(n){$e(new Be("platform-logger",e=>new M_(e),"PRIVATE")),$e(new Be("heartbeat",e=>new Ey(e),"PRIVATE")),Se(Jo,Yu,n),Se(Jo,Yu,"esm2017"),Se("fire-js","")}Ry("");function Na(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function gd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const by=gd,_d=new Kt("auth","Firebase",gd());/**
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
 */const rs=new Kr("@firebase/auth");function Sy(n,...e){rs.logLevel<=W.WARN&&rs.warn(`Auth (${gn}): ${n}`,...e)}function qi(n,...e){rs.logLevel<=W.ERROR&&rs.error(`Auth (${gn}): ${n}`,...e)}/**
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
 */function Xe(n,...e){throw Oa(n,...e)}function et(n,...e){return Oa(n,...e)}function yd(n,e,t){const r=Object.assign(Object.assign({},by()),{[e]:t});return new Kt("auth","Firebase",r).create(e,{appName:n.name})}function lt(n){return yd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return _d.create(n,...e)}function U(n,e,...t){if(!n)throw Oa(e,...t)}function ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qi(e),new Error(e)}function mt(n,e){n||ct(e)}/**
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
 */function ta(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Py(){return nl()==="http:"||nl()==="https:"}function nl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Cy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Py()||Pa()||"connection"in navigator)?navigator.onLine:!0}function ky(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Xr{constructor(e,t){this.shortDelay=e,this.longDelay=t,mt(t>e,"Short delay should be less than long delay!"),this.isMobile=n_()||s_()}get(){return Cy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Da(n,e){mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class vd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ny={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Oy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Dy=new Xr(3e4,6e4);function vt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Tt(n,e,t,r,i={}){return Td(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=Gr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},s);return i_()||(d.referrerPolicy="no-referrer"),vd.fetch()(await Ed(n,n.config.apiHost,t,c),d)})}async function Td(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ny),e);try{const i=new xy(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Pi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Pi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Pi(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw yd(n,f,d);Xe(n,f)}}catch(i){if(i instanceof ze)throw i;Xe(n,"network-request-failed",{message:String(i)})}}async function Yr(n,e,t,r,i={}){const s=await Tt(n,e,t,r,i);return"mfaPendingCredential"in s&&Xe(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ed(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Da(n.config,i):`${n.config.apiScheme}://${i}`;return Oy.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function Vy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Dy.get())})}}function Pi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=et(n,e,r);return i.customData._tokenResponse=t,i}function rl(n){return n!==void 0&&n.enterprise!==void 0}class Ly{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Vy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function My(n,e){return Tt(n,"GET","/v2/recaptchaConfig",vt(n,e))}/**
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
 */async function Uy(n,e){return Tt(n,"POST","/v1/accounts:delete",e)}async function is(n,e){return Tt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function br(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fy(n,e=!1){const t=ne(n),r=await t.getIdToken(e),i=Va(r);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:br(Co(i.auth_time)),issuedAtTime:br(Co(i.iat)),expirationTime:br(Co(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Co(n){return Number(n)*1e3}function Va(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const i=id(t);return i?JSON.parse(i):(qi("Failed to decode base64 JWT payload"),null)}catch(i){return qi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function il(n){const e=Va(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ze&&jy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class By{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class na{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ss(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Mr(n,is(t,{idToken:r}));U(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Id(s.providerUserInfo):[],c=$y(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!c?.length,f=l?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new na(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function qy(n){const e=ne(n);await ss(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $y(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Id(n){return n.map(e=>{var{providerId:t}=e,r=Na(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zy(n,e){const t=await Td(n,{},async()=>{const r=Gr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Ed(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",vd.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Hy(n,e){return Tt(n,"POST","/v2/accounts:revokeToken",vt(n,e))}/**
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
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):il(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=il(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await zy(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Vn;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function Rt(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ke{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Na(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new By(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new na(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Mr(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fy(this,e)}reload(){return qy(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ss(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(lt(this.auth));const e=await this.getIdToken();return await Mr(this,Uy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,l,d,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,j=(d=t.createdAt)!==null&&d!==void 0?d:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:z,isAnonymous:ue,providerData:Y,stsTokenManager:E}=t;U(M&&E,e,"internal-error");const g=Vn.fromJSON(this.name,E);U(typeof M=="string",e,"internal-error"),Rt(m,e.name),Rt(v,e.name),U(typeof z=="boolean",e,"internal-error"),U(typeof ue=="boolean",e,"internal-error"),Rt(R,e.name),Rt(P,e.name),Rt(D,e.name),Rt(k,e.name),Rt(j,e.name),Rt(B,e.name);const _=new Ke({uid:M,auth:e,email:v,emailVerified:z,displayName:m,isAnonymous:ue,photoURL:P,phoneNumber:R,tenantId:D,stsTokenManager:g,createdAt:j,lastLoginAt:B});return Y&&Array.isArray(Y)&&(_.providerData=Y.map(T=>Object.assign({},T))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new Vn;i.updateFromServerResponse(t);const s=new Ke({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ss(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Id(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new Vn;c.updateFromIdToken(r);const l=new Ke({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new na(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}}/**
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
 */const sl=new Map;function ut(n){mt(n instanceof Function,"Expected a class definition");let e=sl.get(n);return e?(mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sl.set(n,e),e)}/**
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
 */class wd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wd.type="NONE";const ol=wd;/**
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
 */function $i(n,e,t){return`firebase:${n}:${e}:${t}`}class xn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$i(this.userKey,i.apiKey,s),this.fullPersistenceKey=$i("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await is(this.auth,{idToken:e}).catch(()=>{});return t?Ke._fromGetAccountInfoResponse(this.auth,t,e):null}return Ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xn(ut(ol),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||ut(ol);const a=$i(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){let m;if(typeof f=="string"){const v=await is(e,{idToken:f}).catch(()=>{});if(!v)break;m=await Ke._fromGetAccountInfoResponse(e,v,f)}else m=Ke._fromJSON(e,f);d!==s&&(c=m),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xn(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new xn(s,e,r))}}/**
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
 */function al(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ad(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cd(e))return"Blackberry";if(kd(e))return"Webos";if(Rd(e))return"Safari";if((e.includes("chrome/")||bd(e))&&!e.includes("edge/"))return"Chrome";if(Pd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ad(n=Pe()){return/firefox\//i.test(n)}function Rd(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bd(n=Pe()){return/crios\//i.test(n)}function Sd(n=Pe()){return/iemobile/i.test(n)}function Pd(n=Pe()){return/android/i.test(n)}function Cd(n=Pe()){return/blackberry/i.test(n)}function kd(n=Pe()){return/webos/i.test(n)}function xa(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wy(n=Pe()){var e;return xa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gy(){return o_()&&document.documentMode===10}function Nd(n=Pe()){return xa(n)||Pd(n)||kd(n)||Cd(n)||/windows phone/i.test(n)||Sd(n)}/**
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
 */function Od(n,e=[]){let t;switch(n){case"Browser":t=al(Pe());break;case"Worker":t=`${al(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${gn}/${r}`}/**
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
 */class Ky{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Qy(n,e={}){return Tt(n,"GET","/v2/passwordPolicy",vt(n,e))}/**
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
 */const Xy=6;class Yy{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Xy,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Jy{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cl(this),this.idTokenSubscription=new cl(this),this.beforeStateQueue=new Ky(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ut(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await xn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await is(this,{idToken:e}),r=await Ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Me(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ss(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ky()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(lt(this));const t=e?ne(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qy(this),t=new Yy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Kt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ut(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[ut(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Od(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Sy(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Qt(n){return ne(n)}class cl{constructor(e){this.auth=e,this.observer=null,this.addObserver=d_(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Cs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zy(n){Cs=n}function Dd(n){return Cs.loadJS(n)}function ev(){return Cs.recaptchaEnterpriseScript}function tv(){return Cs.gapiScript}function nv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class rv{constructor(){this.enterprise=new iv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class iv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const sv="recaptcha-enterprise",Vd="NO_RECAPTCHA";class ov{constructor(e){this.type=sv,this.auth=Qt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{My(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ly(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){const l=window.grecaptcha;rl(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(Vd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rv().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&rl(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ev();l.length!==0&&(l+=c),Dd(l).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function ul(n,e,t,r=!1,i=!1){const s=new ov(n);let a;if(i)a=Vd;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function os(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ul(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ul(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function av(n,e){const t=yt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ut(s,e??{}))return i;Xe(i,"already-initialized")}return t.initialize({options:e})}function cv(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ut);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function uv(n,e,t){const r=Qt(n);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=xd(e),{host:a,port:c}=lv(e),l=c===null?"":`:${c}`,d={url:`${s}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(Ut(d,r.config.emulator)&&Ut(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,hv()}function xd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lv(n){const e=xd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ll(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:ll(a)}}}function ll(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class La{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,t){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function dv(n,e){return Tt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fv(n,e){return Yr(n,"POST","/v1/accounts:signInWithPassword",vt(n,e))}async function pv(n,e){return Tt(n,"POST","/v1/accounts:sendOobCode",vt(n,e))}async function mv(n,e){return pv(n,e)}/**
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
 */async function gv(n,e){return Yr(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}async function _v(n,e){return Yr(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}/**
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
 */class Ur extends La{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ur(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ur(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return os(e,t,"signInWithPassword",fv);case"emailLink":return gv(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return os(e,r,"signUpPassword",dv);case"emailLink":return _v(e,{idToken:t,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ln(n,e){return Yr(n,"POST","/v1/accounts:signInWithIdp",vt(n,e))}/**
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
 */const yv="http://localhost";class cn extends La{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Na(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new cn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ln(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ln(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ln(e,t)}buildRequest(){const e={requestUri:yv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gr(t)}return e}}/**
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
 */function vv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tv(n){const e=Tr(Er(n)).link,t=e?Tr(Er(e)).deep_link_id:null,r=Tr(Er(n)).deep_link_id;return(r?Tr(Er(r)).link:null)||r||t||e||n}class Ma{constructor(e){var t,r,i,s,a,c;const l=Tr(Er(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=vv((i=l.mode)!==null&&i!==void 0?i:null);U(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Tv(e);try{return new Ma(t)}catch{return null}}}/**
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
 */class Gn{constructor(){this.providerId=Gn.PROVIDER_ID}static credential(e,t){return Ur._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ma.parseLink(t);return U(r,"argument-error"),Ur._fromEmailAndCode(e,r.code,r.tenantId)}}Gn.PROVIDER_ID="password";Gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ld{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jr extends Ld{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class St extends Jr{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class Pt extends Jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Pt.credential(t,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
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
 */class Ct extends Jr{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
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
 */class kt extends Jr{constructor(){super("twitter.com")}static credential(e,t){return cn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return kt.credential(t,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */async function Ev(n,e){return Yr(n,"POST","/v1/accounts:signUp",vt(n,e))}/**
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
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ke._fromIdTokenResponse(e,r,i),a=hl(r);return new un({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=hl(r);return new un({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function hl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class as extends ze{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,as.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new as(e,t,r,i)}}function Md(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?as._fromErrorAndOperation(n,s,e,r):s})}async function Iv(n,e,t=!1){const r=await Mr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return un._forOperation(n,"link",r)}/**
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
 */async function wv(n,e,t=!1){const{auth:r}=n;if(Me(r.app))return Promise.reject(lt(r));const i="reauthenticate";try{const s=await Mr(n,Md(r,i,e,n),t);U(s.idToken,r,"internal-error");const a=Va(s.idToken);U(a,r,"internal-error");const{sub:c}=a;return U(n.uid===c,r,"user-mismatch"),un._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Xe(r,"user-mismatch"),s}}/**
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
 */async function Ud(n,e,t=!1){if(Me(n.app))return Promise.reject(lt(n));const r="signIn",i=await Md(n,r,e),s=await un._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Av(n,e){return Ud(Qt(n),e)}/**
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
 */async function Fd(n){const e=Qt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Rv(n,e,t){const r=Qt(n);await os(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",mv)}async function bv(n,e,t){if(Me(n.app))return Promise.reject(lt(n));const r=Qt(n),a=await os(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ev).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Fd(n),l}),c=await un._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Sv(n,e,t){return Me(n.app)?Promise.reject(lt(n)):Av(ne(n),Gn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fd(n),r})}function Pv(n,e,t,r){return ne(n).onIdTokenChanged(e,t,r)}function Cv(n,e,t){return ne(n).beforeAuthStateChanged(e,t)}function kv(n,e,t,r){return ne(n).onAuthStateChanged(e,t,r)}function Nv(n){return ne(n).signOut()}const cs="__sak";/**
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
 */class jd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cs,"1"),this.storage.removeItem(cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ov=1e3,Dv=10;class Bd extends jd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Gy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ov)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bd.type="LOCAL";const Vv=Bd;/**
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
 */class qd extends jd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qd.type="SESSION";const $d=qd;/**
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
 */function xv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ks(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,s)),l=await xv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ks.receivers=[];/**
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
 */function Ua(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Lv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const d=Ua("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const v=m;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(v.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function tt(){return window}function Mv(n){tt().location.href=n}/**
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
 */function zd(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Uv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fv(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jv(){return zd()?self:null}/**
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
 */const Hd="firebaseLocalStorageDb",Bv=1,us="firebaseLocalStorage",Wd="fbase_key";class Zr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ns(n,e){return n.transaction([us],e?"readwrite":"readonly").objectStore(us)}function qv(){const n=indexedDB.deleteDatabase(Hd);return new Zr(n).toPromise()}function ra(){const n=indexedDB.open(Hd,Bv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(us,{keyPath:Wd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(us)?e(r):(r.close(),await qv(),e(await ra()))})})}async function dl(n,e,t){const r=Ns(n,!0).put({[Wd]:e,value:t});return new Zr(r).toPromise()}async function $v(n,e){const t=Ns(n,!1).get(e),r=await new Zr(t).toPromise();return r===void 0?null:r.value}function fl(n,e){const t=Ns(n,!0).delete(e);return new Zr(t).toPromise()}const zv=800,Hv=3;class Gd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ra(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Hv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ks._getInstance(jv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Uv(),!this.activeServiceWorker)return;this.sender=new Lv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ra();return await dl(e,cs,"1"),await fl(e,cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>$v(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ns(i,!1).getAll();return new Zr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gd.type="LOCAL";const Wv=Gd;new Xr(3e4,6e4);/**
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
 */function Gv(n,e){return e?ut(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Fa extends La{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ln(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ln(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Kv(n){return Ud(n.auth,new Fa(n),n.bypassAuthState)}function Qv(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),wv(t,new Fa(n),n.bypassAuthState)}async function Xv(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Iv(t,new Fa(n),n.bypassAuthState)}/**
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
 */class Kd{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kv;case"linkViaPopup":case"linkViaRedirect":return Xv;case"reauthViaPopup":case"reauthViaRedirect":return Qv;default:Xe(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yv=new Xr(2e3,1e4);class On extends Kd{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Ua();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yv.get())};e()}}On.currentPopupAction=null;/**
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
 */const Jv="pendingRedirect",zi=new Map;class Zv extends Kd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const r=await eT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eT(n,e){const t=rT(e),r=nT(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function tT(n,e){zi.set(n._key(),e)}function nT(n){return ut(n._redirectPersistence)}function rT(n){return $i(Jv,n.config.apiKey,n.name)}async function iT(n,e,t=!1){if(Me(n.app))return Promise.reject(lt(n));const r=Qt(n),i=Gv(r,e),a=await new Zv(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const sT=10*60*1e3;class oT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Qd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(et(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sT&&this.cachedEventUids.clear(),this.cachedEventUids.has(pl(e))}saveEventToCache(e){this.cachedEventUids.add(pl(e)),this.lastProcessedEventTime=Date.now()}}function pl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Qd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function aT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qd(n);default:return!1}}/**
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
 */async function cT(n,e={}){return Tt(n,"GET","/v1/projects",e)}/**
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
 */const uT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lT=/^https?/;async function hT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cT(n);for(const t of e)try{if(dT(t))return}catch{}Xe(n,"unauthorized-domain")}function dT(n){const e=ta(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!lT.test(t))return!1;if(uT.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const fT=new Xr(3e4,6e4);function ml(){const n=tt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function pT(n){return new Promise((e,t)=>{var r,i,s;function a(){ml(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ml(),t(et(n,"network-request-failed"))},timeout:fT.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)a();else{const c=nv("iframefcb");return tt()[c]=()=>{gapi.load?a():t(et(n,"network-request-failed"))},Dd(`${tv()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Hi=null,e})}let Hi=null;function mT(n){return Hi=Hi||pT(n),Hi}/**
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
 */const gT=new Xr(5e3,15e3),_T="__/auth/iframe",yT="emulator/auth/iframe",vT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ET(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Da(e,yT):`https://${n.config.authDomain}/${_T}`,r={apiKey:e.apiKey,appName:n.name,v:gn},i=TT.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Gr(r).slice(1)}`}async function IT(n){const e=await mT(n),t=tt().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:ET(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=et(n,"network-request-failed"),c=tt().setTimeout(()=>{s(a)},gT.get());function l(){tt().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const wT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AT=500,RT=600,bT="_blank",ST="http://localhost";class gl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PT(n,e,t,r=AT,i=RT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},wT),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Pe().toLowerCase();t&&(c=bd(d)?bT:t),Ad(d)&&(e=e||ST,l.scrollbars="yes");const f=Object.entries(l).reduce((v,[R,P])=>`${v}${R}=${P},`,"");if(Wy(d)&&c!=="_self")return CT(e||"",c),new gl(null);const m=window.open(e||"",c,f);U(m,n,"popup-blocked");try{m.focus()}catch{}return new gl(m)}function CT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const kT="__/auth/handler",NT="emulator/auth/handler",OT=encodeURIComponent("fac");async function _l(n,e,t,r,i,s){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:gn,eventId:i};if(e instanceof Ld){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",h_(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Jr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${OT}=${encodeURIComponent(l)}`:"";return`${DT(n)}?${Gr(c).slice(1)}${d}`}function DT({config:n}){return n.emulator?Da(n,NT):`https://${n.authDomain}/${kT}`}/**
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
 */const ko="webStorageSupport";class VT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$d,this._completeRedirectFn=iT,this._overrideRedirectResult=tT}async _openPopup(e,t,r,i){var s;mt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await _l(e,t,r,ta(),i);return PT(e,a,Ua())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await _l(e,t,r,ta(),i);return Mv(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await IT(e),r=new oT(e);return t.register("authEvent",i=>(U(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ko,{type:ko},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[ko];a!==void 0&&t(!!a),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nd()||Rd()||xa()}}const xT=VT;var yl="@firebase/auth",vl="1.10.0";/**
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
 */class LT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UT(n){$e(new Be("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Od(n)},d=new Jy(r,i,s,l);return cv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$e(new Be("auth-internal",e=>{const t=Qt(e.getProvider("auth").getImmediate());return(r=>new LT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se(yl,vl,MT(n)),Se(yl,vl,"esm2017")}/**
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
 */const FT=5*60,jT=cd("authIdTokenMaxAge")||FT;let Tl=null;const BT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>jT)return;const i=t?.token;Tl!==i&&(Tl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qT(n=Qr()){const e=yt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=av(n,{popupRedirectResolver:xT,persistence:[Wv,Vv,$d]}),r=cd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=BT(s.toString());Cv(t,a,()=>a(t.currentUser)),Pv(t,c=>a(c))}}const i=sd("auth");return i&&uv(t,`http://${i}`),t}function $T(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Zy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=et("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",$T().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UT("Browser");var El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lt,Xd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.D=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(T,I,A){for(var y=Array(arguments.length-2),st=2;st<arguments.length;st++)y[st-2]=arguments[st];return g.prototype[I].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,_){_||(_=0);var T=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)T[I]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(I=0;16>I;++I)T[I]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],I=E.g[2];var A=E.g[3],y=g+(A^_&(I^A))+T[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=A+(I^g&(_^I))+T[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(_^A&(g^_))+T[2]+606105819&4294967295,I=A+(y<<17&4294967295|y>>>15),y=_+(g^I&(A^g))+T[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(A^_&(I^A))+T[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(I^g&(_^I))+T[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(_^A&(g^_))+T[6]+2821735955&4294967295,I=A+(y<<17&4294967295|y>>>15),y=_+(g^I&(A^g))+T[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(A^_&(I^A))+T[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(I^g&(_^I))+T[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(_^A&(g^_))+T[10]+4294925233&4294967295,I=A+(y<<17&4294967295|y>>>15),y=_+(g^I&(A^g))+T[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(A^_&(I^A))+T[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(I^g&(_^I))+T[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(_^A&(g^_))+T[14]+2792965006&4294967295,I=A+(y<<17&4294967295|y>>>15),y=_+(g^I&(A^g))+T[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=g+(I^A&(_^I))+T[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^I&(g^_))+T[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(A^g))+T[11]+643717713&4294967295,I=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(I^A))+T[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(_^I))+T[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^I&(g^_))+T[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(A^g))+T[15]+3634488961&4294967295,I=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(I^A))+T[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(_^I))+T[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^I&(g^_))+T[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(A^g))+T[3]+4107603335&4294967295,I=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(I^A))+T[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(_^I))+T[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^I&(g^_))+T[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^_&(A^g))+T[7]+1735328473&4294967295,I=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(I^A))+T[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=g+(_^I^A)+T[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^I)+T[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^_)+T[11]+1839030562&4294967295,I=A+(y<<16&4294967295|y>>>16),y=_+(I^A^g)+T[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^A)+T[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^I)+T[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^_)+T[7]+4139469664&4294967295,I=A+(y<<16&4294967295|y>>>16),y=_+(I^A^g)+T[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^A)+T[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^I)+T[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^_)+T[3]+3572445317&4294967295,I=A+(y<<16&4294967295|y>>>16),y=_+(I^A^g)+T[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(_^I^A)+T[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^I)+T[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^_)+T[15]+530742520&4294967295,I=A+(y<<16&4294967295|y>>>16),y=_+(I^A^g)+T[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=g+(I^(_|~A))+T[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~I))+T[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~_))+T[14]+2878612391&4294967295,I=A+(y<<15&4294967295|y>>>17),y=_+(A^(I|~g))+T[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~A))+T[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~I))+T[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~_))+T[10]+4293915773&4294967295,I=A+(y<<15&4294967295|y>>>17),y=_+(A^(I|~g))+T[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~A))+T[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~I))+T[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~_))+T[6]+2734768916&4294967295,I=A+(y<<15&4294967295|y>>>17),y=_+(A^(I|~g))+T[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=g+(I^(_|~A))+T[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~I))+T[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~_))+T[2]+718787259&4294967295,I=A+(y<<15&4294967295|y>>>17),y=_+(A^(I|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var _=g-this.blockSize,T=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=_;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<g;)if(T[I++]=E.charCodeAt(A++),I==this.blockSize){i(this,T),I=0;break}}else for(;A<g;)if(T[I++]=E[A++],I==this.blockSize){i(this,T),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var _=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.u(E),E=Array(16),g=_=0;4>g;++g)for(var T=0;32>T;T+=8)E[_++]=this.g[g]>>>T&255;return E};function s(E,g){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;for(var _=[],T=!0,I=E.length-1;0<=I;I--){var A=E[I]|0;T&&A==g||(_[I]=A,T=!1)}this.g=_}var c={};function l(E){return-128<=E&&128>E?s(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return k(d(-E));for(var g=[],_=1,T=0;E>=_;T++)g[T]=E/_|0,_*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return k(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(g,8)),T=m,I=0;I<E.length;I+=8){var A=Math.min(8,E.length-I),y=parseInt(E.substring(I,I+A),g);8>A?(A=d(Math.pow(g,A)),T=T.j(A).add(d(y))):(T=T.j(_),T=T.add(d(y)))}return T}var m=l(0),v=l(1),R=l(16777216);n=a.prototype,n.m=function(){if(D(this))return-k(this).m();for(var E=0,g=1,_=0;_<this.g.length;_++){var T=this.i(_);E+=(0<=T?T:4294967296+T)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(D(this))return"-"+k(this).toString(E);for(var g=d(Math.pow(E,6)),_=this,T="";;){var I=z(_,g).g;_=j(_,I.j(g));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=I,P(_))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=j(this,E),D(E)?-1:P(E)?0:1};function k(E){for(var g=E.g.length,_=[],T=0;T<g;T++)_[T]=~E.g[T];return new a(_,~E.h).add(v)}n.abs=function(){return D(this)?k(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],T=0,I=0;I<=g;I++){var A=T+(this.i(I)&65535)+(E.i(I)&65535),y=(A>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);T=y>>>16,A&=65535,y&=65535,_[I]=y<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(E,g){return E.add(k(g))}n.j=function(E){if(P(this)||P(E))return m;if(D(this))return D(E)?k(this).j(k(E)):k(k(this).j(E));if(D(E))return k(this.j(k(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var g=this.g.length+E.g.length,_=[],T=0;T<2*g;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<E.g.length;I++){var A=this.i(T)>>>16,y=this.i(T)&65535,st=E.i(I)>>>16,tr=E.i(I)&65535;_[2*T+2*I]+=y*tr,B(_,2*T+2*I),_[2*T+2*I+1]+=A*tr,B(_,2*T+2*I+1),_[2*T+2*I+1]+=y*st,B(_,2*T+2*I+1),_[2*T+2*I+2]+=A*st,B(_,2*T+2*I+2)}for(T=0;T<g;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=g;T<2*g;T++)_[T]=0;return new a(_,0)};function B(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function M(E,g){this.g=E,this.h=g}function z(E,g){if(P(g))throw Error("division by zero");if(P(E))return new M(m,m);if(D(E))return g=z(k(E),g),new M(k(g.g),k(g.h));if(D(g))return g=z(E,k(g)),new M(k(g.g),g.h);if(30<E.g.length){if(D(E)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var _=v,T=g;0>=T.l(E);)_=ue(_),T=ue(T);var I=Y(_,1),A=Y(T,1);for(T=Y(T,2),_=Y(_,2);!P(T);){var y=A.add(T);0>=y.l(E)&&(I=I.add(_),A=y),T=Y(T,1),_=Y(_,1)}return g=j(E,I.j(g)),new M(I,g)}for(I=m;0<=E.l(g);){for(_=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=d(_),y=A.j(g);D(y)||0<y.l(E);)_-=T,A=d(_),y=A.j(g);P(A)&&(A=v),I=I.add(A),E=j(E,y)}return new M(I,E)}n.A=function(E){return z(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)&E.i(T);return new a(_,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)|E.i(T);return new a(_,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)^E.i(T);return new a(_,this.h^E.h)};function ue(E){for(var g=E.g.length+1,_=[],T=0;T<g;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(_,E.h)}function Y(E,g){var _=g>>5;g%=32;for(var T=E.g.length-_,I=[],A=0;A<T;A++)I[A]=0<g?E.i(A+_)>>>g|E.i(A+_+1)<<32-g:E.i(A+_);return new a(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Xd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Lt=a}).apply(typeof El<"u"?El:typeof self<"u"?self:typeof window<"u"?window:{});var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yd,Ir,Jd,Wi,ia,Zd,ef,tf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ci=="object"&&Ci];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var w=o[p];if(!(w in h))break e;h=h[w]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,p=!1,w={next:function(){if(!p&&h<o.length){var b=h++;return{value:u(b,o[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,h){return o.call.apply(o.bind,arguments)}function m(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,p),o.apply(u,w)}}return function(){return o.apply(u,arguments)}}function v(o,u,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,v.apply(null,arguments)}function R(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,w,b){for(var O=Array(arguments.length-2),J=2;J<arguments.length;J++)O[J-2]=arguments[J];return u.prototype[w].apply(p,O)}}function D(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function k(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(l(p)){const w=o.length||0,b=p.length||0;o.length=w+b;for(let O=0;O<b;O++)o[w+O]=p[O]}else o.push(p)}}class j{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function M(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var ue=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function Y(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function E(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function g(o){const u={};for(const h in o)u[h]=o[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let h,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(h in p)o[h]=p[h];for(let b=0;b<_.length;b++)h=_[b],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Zs;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class st{constructor(){this.h=this.g=null}add(u,h){const p=tr.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var tr=new j(()=>new ng,o=>o.reset());class ng{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let nr,rr=!1,Zs=new st,qc=()=>{const o=c.Promise.resolve(void 0);nr=()=>{o.then(rg)}};var rg=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){A(h)}var u=tr;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}rr=!1};function Et(){this.s=this.s,this.C=this.C}Et.prototype.s=!1,Et.prototype.ma=function(){this.s||(this.s=!0,this.N())},Et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var ig=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function ir(o,u){if(ve.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ue){e:{try{z(u.nodeName);var w=!0;break e}catch{}w=!1}w||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:sg[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ir.aa.h.call(this)}}P(ir,ve);var sg={2:"touch",3:"pen",4:"mouse"};ir.prototype.h=function(){ir.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ci="closure_listenable_"+(1e6*Math.random()|0),og=0;function ag(o,u,h,p,w){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=w,this.key=++og,this.da=this.fa=!1}function ui(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function li(o){this.src=o,this.g={},this.h=0}li.prototype.add=function(o,u,h,p,w){var b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);var O=to(o,u,p,w);return-1<O?(u=o[O],h||(u.fa=!1)):(u=new ag(u,this.src,b,!!p,w),u.fa=h,o.push(u)),u};function eo(o,u){var h=u.type;if(h in o.g){var p=o.g[h],w=Array.prototype.indexOf.call(p,u,void 0),b;(b=0<=w)&&Array.prototype.splice.call(p,w,1),b&&(ui(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function to(o,u,h,p){for(var w=0;w<o.length;++w){var b=o[w];if(!b.da&&b.listener==u&&b.capture==!!h&&b.ha==p)return w}return-1}var no="closure_lm_"+(1e6*Math.random()|0),ro={};function $c(o,u,h,p,w){if(Array.isArray(u)){for(var b=0;b<u.length;b++)$c(o,u[b],h,p,w);return null}return h=Wc(h),o&&o[ci]?o.K(u,h,d(p)?!!p.capture:!1,w):cg(o,u,h,!1,p,w)}function cg(o,u,h,p,w,b){if(!u)throw Error("Invalid event type");var O=d(w)?!!w.capture:!!w,J=so(o);if(J||(o[no]=J=new li(o)),h=J.add(u,h,p,O,b),h.proxy)return h;if(p=ug(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)ig||(w=O),w===void 0&&(w=!1),o.addEventListener(u.toString(),p,w);else if(o.attachEvent)o.attachEvent(Hc(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ug(){function o(h){return u.call(o.src,o.listener,h)}const u=lg;return o}function zc(o,u,h,p,w){if(Array.isArray(u))for(var b=0;b<u.length;b++)zc(o,u[b],h,p,w);else p=d(p)?!!p.capture:!!p,h=Wc(h),o&&o[ci]?(o=o.i,u=String(u).toString(),u in o.g&&(b=o.g[u],h=to(b,h,p,w),-1<h&&(ui(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete o.g[u],o.h--)))):o&&(o=so(o))&&(u=o.g[u.toString()],o=-1,u&&(o=to(u,h,p,w)),(h=-1<o?u[o]:null)&&io(h))}function io(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ci])eo(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(Hc(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=so(u))?(eo(h,o),h.h==0&&(h.src=null,u[no]=null)):ui(o)}}}function Hc(o){return o in ro?ro[o]:ro[o]="on"+o}function lg(o,u){if(o.da)o=!0;else{u=new ir(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&io(o),o=h.call(p,u)}return o}function so(o){return o=o[no],o instanceof li?o:null}var oo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wc(o){return typeof o=="function"?o:(o[oo]||(o[oo]=function(u){return o.handleEvent(u)}),o[oo])}function Te(){Et.call(this),this.i=new li(this),this.M=this,this.F=null}P(Te,Et),Te.prototype[ci]=!0,Te.prototype.removeEventListener=function(o,u,h,p){zc(this,o,u,h,p)};function Ce(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new ve(u,o);else if(u instanceof ve)u.target=u.target||o;else{var w=u;u=new ve(p,o),T(u,w)}if(w=!0,h)for(var b=h.length-1;0<=b;b--){var O=u.g=h[b];w=hi(O,p,!0,u)&&w}if(O=u.g=o,w=hi(O,p,!0,u)&&w,w=hi(O,p,!1,u)&&w,h)for(b=0;b<h.length;b++)O=u.g=h[b],w=hi(O,p,!1,u)&&w}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)ui(h[p]);delete o.g[u],o.h--}}this.F=null},Te.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},Te.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function hi(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,b=0;b<u.length;++b){var O=u[b];if(O&&!O.da&&O.capture==h){var J=O.listener,me=O.ha||O.src;O.fa&&eo(o.i,O),w=J.call(me,p)!==!1&&w}}return w&&!p.defaultPrevented}function Gc(o,u,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Kc(o){o.g=Gc(()=>{o.g=null,o.i&&(o.i=!1,Kc(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class hg extends Et{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Kc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sr(o){Et.call(this),this.h=o,this.g={}}P(sr,Et);var Qc=[];function Xc(o){Y(o.g,function(u,h){this.g.hasOwnProperty(h)&&io(u)},o),o.g={}}sr.prototype.N=function(){sr.aa.N.call(this),Xc(this)},sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ao=c.JSON.stringify,dg=c.JSON.parse,fg=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function co(){}co.prototype.h=null;function Yc(o){return o.h||(o.h=o.i())}function Jc(){}var or={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uo(){ve.call(this,"d")}P(uo,ve);function lo(){ve.call(this,"c")}P(lo,ve);var Xt={},Zc=null;function di(){return Zc=Zc||new Te}Xt.La="serverreachability";function eu(o){ve.call(this,Xt.La,o)}P(eu,ve);function ar(o){const u=di();Ce(u,new eu(u))}Xt.STAT_EVENT="statevent";function tu(o,u){ve.call(this,Xt.STAT_EVENT,o),this.stat=u}P(tu,ve);function ke(o){const u=di();Ce(u,new tu(u,o))}Xt.Ma="timingevent";function nu(o,u){ve.call(this,Xt.Ma,o),this.size=u}P(nu,ve);function cr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ur(){this.g=!0}ur.prototype.xa=function(){this.g=!1};function pg(o,u,h,p,w,b){o.info(function(){if(o.g)if(b)for(var O="",J=b.split("&"),me=0;me<J.length;me++){var Q=J[me].split("=");if(1<Q.length){var Ee=Q[0];Q=Q[1];var Ie=Ee.split("_");O=2<=Ie.length&&Ie[1]=="type"?O+(Ee+"="+Q+"&"):O+(Ee+"=redacted&")}}else O=null;else O=b;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+u+`
`+h+`
`+O})}function mg(o,u,h,p,w,b,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+u+`
`+h+`
`+b+" "+O})}function In(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+_g(o,h)+(p?" "+p:"")})}function gg(o,u){o.info(function(){return"TIMEOUT: "+u})}ur.prototype.info=function(){};function _g(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var w=p[1];if(Array.isArray(w)&&!(1>w.length)){var b=w[0];if(b!="noop"&&b!="stop"&&b!="close")for(var O=1;O<w.length;O++)w[O]=""}}}}return ao(h)}catch{return u}}var fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ru={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ho;function pi(){}P(pi,co),pi.prototype.g=function(){return new XMLHttpRequest},pi.prototype.i=function(){return{}},ho=new pi;function It(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new sr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new iu}function iu(){this.i=null,this.g="",this.h=!1}var su={},fo={};function po(o,u,h){o.L=1,o.v=yi(ot(u)),o.m=h,o.P=!0,ou(o,null)}function ou(o,u){o.F=Date.now(),mi(o),o.A=ot(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Tu(h.i,"t",p),o.C=0,h=o.j.J,o.h=new iu,o.g=Uu(o.j,h?u:null,!o.m),0<o.O&&(o.M=new hg(v(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(Qc[0]=w.toString()),w=Qc);for(var b=0;b<w.length;b++){var O=$c(h,w[b],p||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ar(),pg(o.i,o.u,o.A,o.l,o.R,o.m)}It.prototype.ca=function(o){o=o.target;const u=this.M;u&&at(o)==3?u.j():this.Y(o)},It.prototype.Y=function(o){try{if(o==this.g)e:{const Ie=at(this.g);var u=this.g.Ba();const Rn=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||Su(this.g)))){this.J||Ie!=4||u==7||(u==8||0>=Rn?ar(3):ar(2)),mo(this);var h=this.g.Z();this.X=h;t:if(au(this)){var p=Su(this.g);o="";var w=p.length,b=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),lr(this);var O="";break t}this.h.i=new c.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(b&&u==w-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=h==200,mg(this.i,this.u,this.A,this.l,this.R,Ie,h),this.o){if(this.T&&!this.K){t:{if(this.g){var J,me=this.g;if((J=me.g?me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(J)){var Q=J;break t}}Q=null}if(h=Q)In(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,go(this,h);else{this.o=!1,this.s=3,ke(12),Yt(this),lr(this);break e}}if(this.P){h=!0;let He;for(;!this.J&&this.C<O.length;)if(He=yg(this,O),He==fo){Ie==4&&(this.s=4,ke(14),h=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(He==su){this.s=4,ke(15),In(this.i,this.l,O,"[Invalid Chunk]"),h=!1;break}else In(this.i,this.l,He,null),go(this,He);if(au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||O.length!=0||this.h.h||(this.s=1,ke(16),h=!1),this.o=this.o&&h,!h)In(this.i,this.l,O,"[Invalid Chunked Response]"),Yt(this),lr(this);else if(0<O.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Io(Ee),Ee.M=!0,ke(11))}}else In(this.i,this.l,O,null),go(this,O);Ie==4&&Yt(this),this.o&&!this.J&&(Ie==4?Vu(this.j,this):(this.o=!1,mi(this)))}else xg(this.g),h==400&&0<O.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Yt(this),lr(this)}}}catch{}finally{}};function au(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function yg(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?fo:(h=Number(u.substring(h,p)),isNaN(h)?su:(p+=1,p+h>u.length?fo:(u=u.slice(p,p+h),o.C=p+h,u)))}It.prototype.cancel=function(){this.J=!0,Yt(this)};function mi(o){o.S=Date.now()+o.I,cu(o,o.I)}function cu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=cr(v(o.ba,o),u)}function mo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}It.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(gg(this.i,this.A),this.L!=2&&(ar(),ke(17)),Yt(this),this.s=2,lr(this)):cu(this,this.S-o)};function lr(o){o.j.G==0||o.J||Vu(o.j,o)}function Yt(o){mo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Xc(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function go(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||_o(h.h,o))){if(!o.K&&_o(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ai(h),Ii(h);else break e;Eo(h),ke(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=cr(v(h.Za,h),6e3));if(1>=hu(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Zt(h,11)}else if((o.K||h.g==o)&&Ai(h),!B(u))for(w=h.Da.g.parse(u),u=0;u<w.length;u++){let Q=w[u];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const Ee=Q[3];Ee!=null&&(h.la=Ee,h.j.info("VER="+h.la));const Ie=Q[4];Ie!=null&&(h.Aa=Ie,h.j.info("SVER="+h.Aa));const Rn=Q[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(p=1.5*Rn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const He=o.g;if(He){const bi=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var b=p.h;b.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(yo(b,b.h),b.h=null))}if(p.D){const wo=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;wo&&(p.ya=wo,Z(p.I,p.D,wo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var O=o;if(p.qa=Mu(p,p.J?p.ia:null,p.W),O.K){du(p.h,O);var J=O,me=p.L;me&&(J.I=me),J.B&&(mo(J),mi(J)),p.g=O}else Ou(p);0<h.i.length&&wi(h)}else Q[0]!="stop"&&Q[0]!="close"||Zt(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Zt(h,7):To(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}ar(4)}catch{}}var vg=class{constructor(o,u){this.g=o,this.map=u}};function uu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function hu(o){return o.h?1:o.g?o.g.size:0}function _o(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function yo(o,u){o.g?o.g.add(u):o.h=u}function du(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}uu.prototype.cancel=function(){if(this.i=fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return D(o.i)}function Tg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function Eg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function pu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=Eg(o),p=Tg(o),w=p.length,b=0;b<w;b++)u.call(void 0,p[b],h&&h[b],o)}var mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ig(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),w=null;if(0<=p){var b=o[h].substring(0,p);w=o[h].substring(p+1)}else b=o[h];u(b,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Jt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jt){this.h=o.h,gi(this,o.j),this.o=o.o,this.g=o.g,_i(this,o.s),this.l=o.l;var u=o.i,h=new fr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),gu(this,h),this.m=o.m}else o&&(u=String(o).match(mu))?(this.h=!1,gi(this,u[1]||"",!0),this.o=hr(u[2]||""),this.g=hr(u[3]||"",!0),_i(this,u[4]),this.l=hr(u[5]||"",!0),gu(this,u[6]||"",!0),this.m=hr(u[7]||"")):(this.h=!1,this.i=new fr(null,this.h))}Jt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(dr(u,_u,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(dr(u,_u,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(dr(h,h.charAt(0)=="/"?Rg:Ag,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",dr(h,Sg)),o.join("")};function ot(o){return new Jt(o)}function gi(o,u,h){o.j=h?hr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function _i(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function gu(o,u,h){u instanceof fr?(o.i=u,Pg(o.i,o.h)):(h||(u=dr(u,bg)),o.i=new fr(u,o.h))}function Z(o,u,h){o.i.set(u,h)}function yi(o){return Z(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function hr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function dr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,wg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function wg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var _u=/[#\/\?@]/g,Ag=/[#\?:]/g,Rg=/[#\?]/g,bg=/[#\?@]/g,Sg=/#/g;function fr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function wt(o){o.g||(o.g=new Map,o.h=0,o.i&&Ig(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=fr.prototype,n.add=function(o,u){wt(this),this.i=null,o=wn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function yu(o,u){wt(o),u=wn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function vu(o,u){return wt(o),u=wn(o,u),o.g.has(u)}n.forEach=function(o,u){wt(this),this.g.forEach(function(h,p){h.forEach(function(w){o.call(u,w,p,this)},this)},this)},n.na=function(){wt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const w=o[p];for(let b=0;b<w.length;b++)h.push(u[p])}return h},n.V=function(o){wt(this);let u=[];if(typeof o=="string")vu(this,o)&&(u=u.concat(this.g.get(wn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return wt(this),this.i=null,o=wn(this,o),vu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Tu(o,u,h){yu(o,u),0<h.length&&(o.i=null,o.g.set(wn(o,u),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const b=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var w=b;O[p]!==""&&(w+="="+encodeURIComponent(String(O[p]))),o.push(w)}}return this.i=o.join("&")};function wn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Pg(o,u){u&&!o.j&&(wt(o),o.i=null,o.g.forEach(function(h,p){var w=p.toLowerCase();p!=w&&(yu(this,p),Tu(this,w,h))},o)),o.j=u}function Cg(o,u){const h=new ur;if(c.Image){const p=new Image;p.onload=R(At,h,"TestLoadImage: loaded",!0,u,p),p.onerror=R(At,h,"TestLoadImage: error",!1,u,p),p.onabort=R(At,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(At,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function kg(o,u){const h=new ur,p=new AbortController,w=setTimeout(()=>{p.abort(),At(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(b=>{clearTimeout(w),b.ok?At(h,"TestPingServer: ok",!0,u):At(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),At(h,"TestPingServer: error",!1,u)})}function At(o,u,h,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(h)}catch{}}function Ng(){this.g=new fg}function Og(o,u,h){const p=h||"";try{pu(o,function(w,b){let O=w;d(w)&&(O=ao(w)),u.push(p+b+"="+encodeURIComponent(O))})}catch(w){throw u.push(p+"type="+encodeURIComponent("_badmap")),w}}function vi(o){this.l=o.Ub||null,this.j=o.eb||!1}P(vi,co),vi.prototype.g=function(){return new Ti(this.l,this.j)},vi.prototype.i=function(o){return function(){return o}}({});function Ti(o,u){Te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ti,Te),n=Ti.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,mr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,mr(this)),this.g&&(this.readyState=3,mr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?pr(this):mr(this),this.readyState==3&&Eu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,pr(this))},n.Qa=function(o){this.g&&(this.response=o,pr(this))},n.ga=function(){this.g&&pr(this)};function pr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,mr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function mr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Iu(o){let u="";return Y(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function vo(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Iu(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Z(o,u,h))}function se(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(se,Te);var Dg=/^https?$/i,Vg=["POST","PUT"];n=se.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ho.g(),this.v=this.o?Yc(this.o):Yc(ho),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(b){wu(this,b);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)h.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())h.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),w=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Vg,u,void 0))||p||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,O]of h)this.g.setRequestHeader(b,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bu(this),this.u=!0,this.g.send(o),this.u=!1}catch(b){wu(this,b)}};function wu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Au(o),Ei(o)}function Au(o){o.A||(o.A=!0,Ce(o,"complete"),Ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ce(this,"complete"),Ce(this,"abort"),Ei(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ru(this):this.bb())},n.bb=function(){Ru(this)};function Ru(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)Gc(o.Ea,0,o);else if(Ce(o,"readystatechange"),at(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=O===0){var w=String(o.D).match(mu)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),p=!Dg.test(w?w.toLowerCase():"")}h=p}if(h)Ce(o,"complete"),Ce(o,"success");else{o.m=6;try{var b=2<at(o)?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.Z()+"]",Au(o)}}finally{Ei(o)}}}}function Ei(o,u){if(o.g){bu(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ce(o,"ready");try{h.onreadystatechange=p}catch{}}}function bu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),dg(u)}};function Su(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function xg(o){const u={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(B(o[p]))continue;var h=I(o[p]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=u[w]||[];u[w]=b,b.push(h)}E(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Pu(o){this.Aa=0,this.i=[],this.j=new ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gr("baseRetryDelayMs",5e3,o),this.cb=gr("retryDelaySeedMs",1e4,o),this.Wa=gr("forwardChannelMaxRetries",2,o),this.wa=gr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new uu(o&&o.concurrentRequestLimit),this.Da=new Ng,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pu.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,p){ke(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Mu(this,null,this.W),wi(this)};function To(o){if(Cu(o),o.G==3){var u=o.U++,h=ot(o.I);if(Z(h,"SID",o.K),Z(h,"RID",u),Z(h,"TYPE","terminate"),_r(o,h),u=new It(o,o.j,u),u.L=2,u.v=yi(ot(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Uu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),mi(u)}Lu(o)}function Ii(o){o.g&&(Io(o),o.g.cancel(),o.g=null)}function Cu(o){Ii(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ai(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function wi(o){if(!lu(o.h)&&!o.s){o.s=!0;var u=o.Ga;nr||qc(),rr||(nr(),rr=!0),Zs.add(u,o),o.B=0}}function Lg(o,u){return hu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=cr(v(o.Ga,o,u),xu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new It(this,this.j,o);let b=this.o;if(this.S&&(b?(b=g(b),T(b,this.S)):b=this.S),this.m!==null||this.O||(w.H=b,b=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Nu(this,w,u),h=ot(this.I),Z(h,"RID",o),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),_r(this,h),b&&(this.O?u="headers="+encodeURIComponent(String(Iu(b)))+"&"+u:this.m&&vo(h,this.m,b)),yo(this.h,w),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",u),Z(h,"SID","null"),w.T=!0,po(w,h,null)):po(w,h,u),this.G=2}}else this.G==3&&(o?ku(this,o):this.i.length==0||lu(this.h)||ku(this))};function ku(o,u){var h;u?h=u.l:h=o.U++;const p=ot(o.I);Z(p,"SID",o.K),Z(p,"RID",h),Z(p,"AID",o.T),_r(o,p),o.m&&o.o&&vo(p,o.m,o.o),h=new It(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Nu(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),yo(o.h,h),po(h,p,u)}function _r(o,u){o.H&&Y(o.H,function(h,p){Z(u,p,h)}),o.l&&pu({},function(h,p){Z(u,p,h)})}function Nu(o,u,h){h=Math.min(o.i.length,h);var p=o.l?v(o.l.Na,o.l,o):null;e:{var w=o.i;let b=-1;for(;;){const O=["count="+h];b==-1?0<h?(b=w[0].g,O.push("ofs="+b)):b=0:O.push("ofs="+b);let J=!0;for(let me=0;me<h;me++){let Q=w[me].g;const Ee=w[me].map;if(Q-=b,0>Q)b=Math.max(0,w[me].g-100),J=!1;else try{Og(Ee,O,"req"+Q+"_")}catch{p&&p(Ee)}}if(J){p=O.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function Ou(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;nr||qc(),rr||(nr(),rr=!0),Zs.add(u,o),o.v=0}}function Eo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=cr(v(o.Fa,o),xu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=cr(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Ii(this),Du(this))};function Io(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Du(o){o.g=new It(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ot(o.qa);Z(u,"RID","rpc"),Z(u,"SID",o.K),Z(u,"AID",o.T),Z(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Z(u,"TO",o.ja),Z(u,"TYPE","xmlhttp"),_r(o,u),o.m&&o.o&&vo(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=yi(ot(u)),h.m=null,h.P=!0,ou(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Ii(this),Eo(this),ke(19))};function Ai(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Vu(o,u){var h=null;if(o.g==u){Ai(o),Io(o),o.g=null;var p=2}else if(_o(o.h,u))h=u.D,du(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var w=o.B;p=di(),Ce(p,new nu(p,h)),wi(o)}else Ou(o);else if(w=u.s,w==3||w==0&&0<u.X||!(p==1&&Lg(o,u)||p==2&&Eo(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),w){case 1:Zt(o,5);break;case 4:Zt(o,10);break;case 3:Zt(o,6);break;default:Zt(o,2)}}}function xu(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Zt(o,u){if(o.j.info("Error code "+u),u==2){var h=v(o.fb,o),p=o.Xa;const w=!p;p=new Jt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||gi(p,"https"),yi(p),w?Cg(p.toString(),h):kg(p.toString(),h)}else ke(2);o.G=0,o.l&&o.l.sa(u),Lu(o),Cu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Lu(o){if(o.G=0,o.ka=[],o.l){const u=fu(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Mu(o,u,h){var p=h instanceof Jt?ot(h):new Jt(h);if(p.g!="")u&&(p.g=u+"."+p.g),_i(p,p.s);else{var w=c.location;p=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var b=new Jt(null);p&&gi(b,p),u&&(b.g=u),w&&_i(b,w),h&&(b.l=h),p=b}return h=o.D,u=o.ya,h&&u&&Z(p,h,u),Z(p,"VER",o.la),_r(o,p),p}function Uu(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new se(new vi({eb:h})):new se(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fu(){}n=Fu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ri(){}Ri.prototype.g=function(o,u){return new Le(o,u)};function Le(o,u){Te.call(this),this.g=new Pu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new An(this)}P(Le,Te),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){To(this.g)},Le.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ao(o),o=h);u.i.push(new vg(u.Ya++,o)),u.G==3&&wi(u)},Le.prototype.N=function(){this.g.l=null,delete this.j,To(this.g),delete this.g,Le.aa.N.call(this)};function ju(o){uo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(ju,uo);function Bu(){lo.call(this),this.status=1}P(Bu,lo);function An(o){this.g=o}P(An,Fu),An.prototype.ua=function(){Ce(this.g,"a")},An.prototype.ta=function(o){Ce(this.g,new ju(o))},An.prototype.sa=function(o){Ce(this.g,new Bu)},An.prototype.ra=function(){Ce(this.g,"b")},Ri.prototype.createWebChannel=Ri.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,tf=function(){return new Ri},ef=function(){return di()},Zd=Xt,ia={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fi.NO_ERROR=0,fi.TIMEOUT=8,fi.HTTP_ERROR=6,Wi=fi,ru.COMPLETE="complete",Jd=ru,Jc.EventType=or,or.OPEN="a",or.CLOSE="b",or.ERROR="c",or.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Ir=Jc,se.prototype.listenOnce=se.prototype.L,se.prototype.getLastError=se.prototype.Ka,se.prototype.getLastErrorCode=se.prototype.Ba,se.prototype.getStatus=se.prototype.Z,se.prototype.getResponseJson=se.prototype.Oa,se.prototype.getResponseText=se.prototype.oa,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Ha,Yd=se}).apply(typeof Ci<"u"?Ci:typeof self<"u"?self:typeof window<"u"?window:{});const Il="@firebase/firestore",wl="4.7.10";/**
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
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
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
 */let Kn="11.5.0";/**
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
 */const ln=new Kr("@firebase/firestore");function Pn(){return ln.logLevel}function V(n,...e){if(ln.logLevel<=W.DEBUG){const t=e.map(ja);ln.debug(`Firestore (${Kn}): ${n}`,...t)}}function gt(n,...e){if(ln.logLevel<=W.ERROR){const t=e.map(ja);ln.error(`Firestore (${Kn}): ${n}`,...t)}}function jn(n,...e){if(ln.logLevel<=W.WARN){const t=e.map(ja);ln.warn(`Firestore (${Kn}): ${n}`,...t)}}function ja(n){if(typeof n=="string")return n;try{/**
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
 */function F(n="Unexpected state"){const e=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: `+n;throw gt(e),new Error(e)}function X(n,e){n||F()}function $(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends ze{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ht{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class nf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ae.UNAUTHENTICATED))}shutdown(){}}class HT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class WT{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ht,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ht)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new nf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new Ae(e)}}class GT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class KT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new GT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Al{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QT{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Me(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){X(this.o===void 0);const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Al(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string"),this.R=t.token,new Al(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function XT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function rf(){return new TextEncoder}/**
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
 */class sf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=XT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function sa(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return H(r,i);{const s=rf(),a=YT(s.encode(Rl(n,t)),s.encode(Rl(e,t)));return a!==0?a:H(r,i)}}t+=r>65535?2:1}return H(n.length,e.length)}function Rl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function YT(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return H(n[t],e[t]);return H(n.length,e.length)}function Bn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const bl=-62135596800,Sl=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Sl);return new he(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bl)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sl}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-bl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const Pl="__name__";class Je{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(),r===void 0?r=e.length-t:r>e.length-t&&F(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Je?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Je.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return H(e.length,t.length)}static compareSegments(e,t){const r=Je.isNumericId(e),i=Je.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Je.extractNumericId(e).compare(Je.extractNumericId(t)):sa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lt.fromString(e.substring(4,e.length-2))}}class ee extends Je{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const JT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Je{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return JT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pl}static keyField(){return new _e([Pl])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ee.fromString(e))}static fromName(e){return new L(ee.fromString(e).popFirst(5))}static empty(){return new L(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ee(e.slice()))}}/**
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
 */const Fr=-1;function ZT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new Ft(i,L.empty(),e)}function eE(n){return new Ft(n.readTime,n.key,Fr)}class Ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ft(q.min(),L.empty(),Fr)}static max(){return new Ft(q.max(),L.empty(),Fr)}}function tE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
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
 */const nE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==nE)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const d=l;t(e[d]).next(f=>{a[d]=f,++c,c===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new S((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function iE(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Os{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Os.ae=-1;/**
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
 */const Ba=-1;function Ds(n){return n==null}function ls(n){return n===0&&1/n==-1/0}function sE(n){return typeof n=="number"&&Number.isInteger(n)&&!ls(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const of="";function oE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Cl(e)),e=aE(n.get(t),e);return Cl(e)}function aE(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case of:t+="";break;default:t+=s}}return t}function Cl(n){return n+of+""}/**
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
 */function kl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _n(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function af(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class re{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ki(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ki(this.root,e,this.comparator,!1)}getReverseIterator(){return new ki(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ki(this.root,e,this.comparator,!0)}}class ki{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ge.RED,this.left=i??ge.EMPTY,this.right=s??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ge(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class de{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nl(this.data.getIterator())}getIteratorFrom(e){return new Nl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class Nl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qe{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new de(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class cf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cf("Invalid base64 string: "+s):s}}(e);return new ye(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const cE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(X(!!n),typeof n=="string"){let e=0;const t=cE.exec(n);if(X(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
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
 */const uf="server_timestamp",lf="__type__",hf="__previous_value__",df="__local_write_time__";function qa(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[lf])===null||t===void 0?void 0:t.stringValue)===uf}function Vs(n){const e=n.mapValue.fields[hf];return qa(e)?Vs(e):e}function jr(n){const e=jt(n.mapValue.fields[df].timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class uE{constructor(e,t,r,i,s,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}const hs="(default)";class Br{constructor(e,t){this.projectId=e,this.database=t||hs}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database===hs}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ff="__type__",lE="__max__",Ni={mapValue:{}},pf="__vector__",ds="value";function qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qa(n)?4:dE(n)?9007199254740991:hE(n)?10:11:F()}function it(n,e){if(n===e)return!0;const t=qt(n);if(t!==qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jr(n).isEqual(jr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=jt(i.timestampValue),c=jt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Bt(i.bytesValue).isEqual(Bt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return oe(i.geoPointValue.latitude)===oe(s.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return oe(i.integerValue)===oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=oe(i.doubleValue),c=oe(s.doubleValue);return a===c?ls(a)===ls(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Bn(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(kl(a)!==kl(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!it(a[l],c[l])))return!1;return!0}(n,e);default:return F()}}function qr(n,e){return(n.values||[]).find(t=>it(t,e))!==void 0}function qn(n,e){if(n===e)return 0;const t=qt(n),r=qt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=oe(s.integerValue||s.doubleValue),l=oe(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Ol(n.timestampValue,e.timestampValue);case 4:return Ol(jr(n),jr(e));case 5:return sa(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Bt(s),l=Bt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=H(c[d],l[d]);if(f!==0)return f}return H(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=H(oe(s.latitude),oe(a.latitude));return c!==0?c:H(oe(s.longitude),oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Dl(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,l,d,f;const m=s.fields||{},v=a.fields||{},R=(c=m[ds])===null||c===void 0?void 0:c.arrayValue,P=(l=v[ds])===null||l===void 0?void 0:l.arrayValue,D=H(((d=R?.values)===null||d===void 0?void 0:d.length)||0,((f=P?.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Dl(R,P)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ni.mapValue&&a===Ni.mapValue)return 0;if(s===Ni.mapValue)return 1;if(a===Ni.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const v=sa(l[m],f[m]);if(v!==0)return v;const R=qn(c[l[m]],d[f[m]]);if(R!==0)return R}return H(l.length,f.length)}(n.mapValue,e.mapValue);default:throw F()}}function Ol(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=jt(n),r=jt(e),i=H(t.seconds,r.seconds);return i!==0?i:H(t.nanos,r.nanos)}function Dl(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=qn(t[i],r[i]);if(s)return s}return H(t.length,r.length)}function $n(n){return oa(n)}function oa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Bt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=oa(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${oa(t.fields[a])}`;return i+"}"}(n.mapValue):F()}function Gi(n){switch(qt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vs(n);return e?16+Gi(e):16;case 5:return 2*n.stringValue.length;case 6:return Bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Gi(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return _n(r.fields,(s,a)=>{i+=s.length+Gi(a)}),i}(n.mapValue);default:throw F()}}function Vl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function aa(n){return!!n&&"integerValue"in n}function $a(n){return!!n&&"arrayValue"in n}function xl(n){return!!n&&"nullValue"in n}function Ll(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ki(n){return!!n&&"mapValue"in n}function hE(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[ff])===null||t===void 0?void 0:t.stringValue)===pf}function Sr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return _n(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Sr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function dE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===lE}/**
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
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ki(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sr(t)}setAll(e){let t=_e.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Sr(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ki(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ki(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){_n(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new qe(Sr(this.value))}}function mf(n){const e=[];return _n(n.fields,(t,r)=>{const i=new _e([t]);if(Ki(r)){const s=mf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Qe(e)}/**
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
 */class be{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new be(e,0,q.min(),q.min(),q.min(),qe.empty(),0)}static newFoundDocument(e,t,r,i){return new be(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new be(e,2,t,q.min(),q.min(),qe.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,q.min(),q.min(),qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fs{constructor(e,t){this.position=e,this.inclusive=t}}function Ml(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=qn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ul(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ps{constructor(e,t="asc"){this.field=e,this.dir=t}}function fE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class gf{}class ce extends gf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new mE(e,t,r):t==="array-contains"?new yE(e,r):t==="in"?new vE(e,r):t==="not-in"?new TE(e,r):t==="array-contains-any"?new EE(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new gE(e,r):new _E(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(qn(t,this.value)):t!==null&&qt(this.value)===qt(t)&&this.matchesComparison(qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ye extends gf{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Ye(e,t)}matches(e){return _f(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function _f(n){return n.op==="and"}function yf(n){return pE(n)&&_f(n)}function pE(n){for(const e of n.filters)if(e instanceof Ye)return!1;return!0}function ca(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+$n(n.value);if(yf(n))return n.filters.map(e=>ca(e)).join(",");{const e=n.filters.map(t=>ca(t)).join(",");return`${n.op}(${e})`}}function vf(n,e){return n instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&it(r.value,i.value)}(n,e):n instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&vf(a,i.filters[c]),!0):!1}(n,e):void F()}function Tf(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${$n(t.value)}`}(n):n instanceof Ye?function(t){return t.op.toString()+" {"+t.getFilters().map(Tf).join(" ,")+"}"}(n):"Filter"}class mE extends ce{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class gE extends ce{constructor(e,t){super(e,"in",t),this.keys=Ef("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _E extends ce{constructor(e,t){super(e,"not-in",t),this.keys=Ef("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ef(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class yE extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $a(t)&&qr(t.arrayValue,this.value)}}class vE extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qr(this.value.arrayValue,t)}}class TE extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qr(this.value.arrayValue,t)}}class EE extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$a(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qr(this.value.arrayValue,r))}}/**
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
 */class IE{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.le=null}}function Fl(n,e=null,t=[],r=[],i=null,s=null,a=null){return new IE(n,e,t,r,i,s,a)}function za(n){const e=$(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ca(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ds(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>$n(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>$n(r)).join(",")),e.le=t}return e.le}function Ha(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!fE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!vf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ul(n.startAt,e.startAt)&&Ul(n.endAt,e.endAt)}function ua(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ei{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function wE(n,e,t,r,i,s,a,c){return new ei(n,e,t,r,i,s,a,c)}function Wa(n){return new ei(n)}function jl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function If(n){return n.collectionGroup!==null}function Pr(n){const e=$(n);if(e.he===null){e.he=[];const t=new Set;for(const s of e.explicitOrderBy)e.he.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new de(_e.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new ps(s,r))}),t.has(_e.keyField().canonicalString())||e.he.push(new ps(_e.keyField(),r))}return e.he}function nt(n){const e=$(n);return e.Pe||(e.Pe=AE(e,Pr(n))),e.Pe}function AE(n,e){if(n.limitType==="F")return Fl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ps(i.field,s)});const t=n.endAt?new fs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fs(n.startAt.position,n.startAt.inclusive):null;return Fl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function la(n,e){const t=n.filters.concat([e]);return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ha(n,e,t){return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xs(n,e){return Ha(nt(n),nt(e))&&n.limitType===e.limitType}function wf(n){return`${za(nt(n))}|lt:${n.limitType}`}function Cn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Tf(i)).join(", ")}]`),Ds(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>$n(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>$n(i)).join(",")),`Target(${r})`}(nt(n))}; limitType=${n.limitType})`}function Ls(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Pr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){const d=Ml(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,Pr(r),i)||r.endAt&&!function(a,c,l){const d=Ml(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,Pr(r),i))}(n,e)}function RE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Af(n){return(e,t)=>{let r=!1;for(const i of Pr(n)){const s=bE(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bE(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(s,a,c){const l=a.data.field(s),d=c.data.field(s);return l!==null&&d!==null?qn(l,d):F()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
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
 */class yn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_n(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return af(this.inner)}size(){return this.innerSize}}/**
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
 */const SE=new re(L.comparator);function _t(){return SE}const Rf=new re(L.comparator);function wr(...n){let e=Rf;for(const t of n)e=e.insert(t.key,t);return e}function bf(n){let e=Rf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function nn(){return Cr()}function Sf(){return Cr()}function Cr(){return new yn(n=>n.toString(),(n,e)=>n.isEqual(e))}const PE=new re(L.comparator),CE=new de(L.comparator);function G(...n){let e=CE;for(const t of n)e=e.add(t);return e}const kE=new de(H);function NE(){return kE}/**
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
 */function Ga(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ls(e)?"-0":e}}function Pf(n){return{integerValue:""+n}}function OE(n,e){return sE(e)?Pf(e):Ga(n,e)}/**
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
 */class Ms{constructor(){this._=void 0}}function DE(n,e,t){return n instanceof $r?function(i,s){const a={fields:{[lf]:{stringValue:uf},[df]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qa(s)&&(s=Vs(s)),s&&(a.fields[hf]=s),{mapValue:a}}(t,e):n instanceof zr?kf(n,e):n instanceof Hr?Nf(n,e):function(i,s){const a=Cf(i,s),c=Bl(a)+Bl(i.Ie);return aa(a)&&aa(i.Ie)?Pf(c):Ga(i.serializer,c)}(n,e)}function VE(n,e,t){return n instanceof zr?kf(n,e):n instanceof Hr?Nf(n,e):t}function Cf(n,e){return n instanceof ms?function(r){return aa(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $r extends Ms{}class zr extends Ms{constructor(e){super(),this.elements=e}}function kf(n,e){const t=Of(e);for(const r of n.elements)t.some(i=>it(i,r))||t.push(r);return{arrayValue:{values:t}}}class Hr extends Ms{constructor(e){super(),this.elements=e}}function Nf(n,e){let t=Of(e);for(const r of n.elements)t=t.filter(i=>!it(i,r));return{arrayValue:{values:t}}}class ms extends Ms{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Bl(n){return oe(n.integerValue||n.doubleValue)}function Of(n){return $a(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class xE{constructor(e,t){this.field=e,this.transform=t}}function LE(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof zr&&i instanceof zr||r instanceof Hr&&i instanceof Hr?Bn(r.elements,i.elements,it):r instanceof ms&&i instanceof ms?it(r.Ie,i.Ie):r instanceof $r&&i instanceof $r}(n.transform,e.transform)}class ME{constructor(e,t){this.version=e,this.transformResults=t}}class dt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new dt}static exists(e){return new dt(void 0,e)}static updateTime(e){return new dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Us{}function Df(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xf(n.key,dt.none()):new ti(n.key,n.data,dt.none());{const t=n.data,r=qe.empty();let i=new de(_e.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new vn(n.key,r,new Qe(i.toArray()),dt.none())}}function UE(n,e,t){n instanceof ti?function(i,s,a){const c=i.value.clone(),l=$l(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof vn?function(i,s,a){if(!Qi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=$l(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Vf(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function kr(n,e,t,r){return n instanceof ti?function(s,a,c,l){if(!Qi(s.precondition,a))return c;const d=s.value.clone(),f=zl(s.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof vn?function(s,a,c,l){if(!Qi(s.precondition,a))return c;const d=zl(s.fieldTransforms,l,a),f=a.data;return f.setAll(Vf(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,c){return Qi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function FE(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Cf(r.transform,i||null);s!=null&&(t===null&&(t=qe.empty()),t.set(r.field,s))}return t||null}function ql(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bn(r,i,(s,a)=>LE(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ti extends Us{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vn extends Us{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Vf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function $l(n,e,t){const r=new Map;X(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,VE(a,c,t[i]))}return r}function zl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,DE(s,a,e))}return r}class xf extends Us{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jE extends Us{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class BE{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&UE(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=kr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=kr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Sf();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const l=Df(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&Bn(this.mutations,e.mutations,(t,r)=>ql(t,r))&&Bn(this.baseMutations,e.baseMutations,(t,r)=>ql(t,r))}}class Ka{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){X(e.mutations.length===r.length);let i=function(){return PE}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Ka(e,t,r,i)}}/**
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
 */class qE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $E{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ae,K;function zE(n){switch(n){case C.OK:return F();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return F()}}function Lf(n){if(n===void 0)return gt("GRPC error has no .code"),C.UNKNOWN;switch(n){case ae.OK:return C.OK;case ae.CANCELLED:return C.CANCELLED;case ae.UNKNOWN:return C.UNKNOWN;case ae.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ae.INTERNAL:return C.INTERNAL;case ae.UNAVAILABLE:return C.UNAVAILABLE;case ae.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ae.NOT_FOUND:return C.NOT_FOUND;case ae.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ae.ABORTED:return C.ABORTED;case ae.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ae.DATA_LOSS:return C.DATA_LOSS;default:return F()}}(K=ae||(ae={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const HE=new Lt([4294967295,4294967295],0);function Hl(n){const e=rf().encode(n),t=new Xd;return t.update(e),new Uint8Array(t.digest())}function Wl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Lt([t,r],0),new Lt([i,s],0)]}class Qa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ar(`Invalid padding: ${t}`);if(r<0)throw new Ar(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ar(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ar(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Lt.fromNumber(this.Ee)}Ae(e,t,r){let i=e.add(t.multiply(Lt.fromNumber(r)));return i.compare(HE)===1&&(i=new Lt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Hl(e),[r,i]=Wl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ae(r,i,s);if(!this.Re(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Qa(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ee===0)return;const t=Hl(e),[r,i]=Wl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ae(r,i,s);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ni.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Fs(q.min(),i,new re(H),_t(),G())}}class ni{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ni(r,t,G(),G(),G())}}/**
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
 */class Xi{constructor(e,t,r,i){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=i}}class Mf{constructor(e,t){this.targetId=e,this.ge=t}}class Uf{constructor(e,t,r=ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Gl{constructor(){this.pe=0,this.ye=Kl(),this.we=ye.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=G(),t=G(),r=G();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:F()}}),new ni(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=Kl()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,X(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class WE{constructor(e){this.ke=e,this.qe=new Map,this.Qe=_t(),this.$e=Oi(),this.Ue=Oi(),this.Ke=new re(H)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,r=e.ge.count,i=this.Xe(t);if(i){const s=i.target;if(ua(s))if(r===0){const a=new L(s.path);this.ze(t,a,be.newNoDocument(a,q.min()))}else X(r===1);else{const a=this.et(t);if(a!==r){const c=this.tt(e),l=c?this.nt(c,e,a):1;if(l!==0){this.Ye(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Bt(r).toUint8Array()}catch(l){if(l instanceof cf)return jn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Qa(a,i,s)}catch(l){return jn(l instanceof Ar?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.ze(t,s,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((s,a)=>{const c=this.Xe(a);if(c){if(s.current&&ua(c.target)){const l=new L(c.target.path);this._t(l).has(a)||this.ut(a,l)||this.ze(a,l,be.newNoDocument(l,e))}s.ve&&(t.set(a,s.Fe()),s.Me())}});let r=G();this.Ue.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Xe(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.Qe.forEach((s,a)=>a.setReadTime(e));const i=new Fs(e,t,this.Ke,this.Qe,r);return this.Qe=_t(),this.$e=Oi(),this.Ue=Oi(),this.Ke=new re(H),i}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Gl,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new de(H),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new de(H),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Gl),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Oi(){return new re(L.comparator)}function Kl(){return new re(L.comparator)}const GE={asc:"ASCENDING",desc:"DESCENDING"},KE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QE={and:"AND",or:"OR"};class XE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function da(n,e){return n.useProto3Json||Ds(e)?e:{value:e}}function gs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ff(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function YE(n,e){return gs(n,e.toTimestamp())}function rt(n){return X(!!n),q.fromTimestamp(function(t){const r=jt(t);return new he(r.seconds,r.nanos)}(n))}function Xa(n,e){return fa(n,e).canonicalString()}function fa(n,e){const t=function(i){return new ee(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function jf(n){const e=ee.fromString(n);return X(Hf(e)),e}function pa(n,e){return Xa(n.databaseId,e.path)}function No(n,e){const t=jf(e);if(t.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(qf(t))}function Bf(n,e){return Xa(n.databaseId,e)}function JE(n){const e=jf(n);return e.length===4?ee.emptyPath():qf(e)}function ma(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qf(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ql(n,e,t){return{name:pa(n,e),fields:t.value.mapValue.fields}}function ZE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(X(f===void 0||typeof f=="string"),ye.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ye.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?C.UNKNOWN:Lf(d.code);return new x(f,d.message||"")}(a);t=new Uf(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=No(n,r.document.name),s=rt(r.document.updateTime),a=r.document.createTime?rt(r.document.createTime):q.min(),c=new qe({mapValue:{fields:r.document.fields}}),l=be.newFoundDocument(i,s,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Xi(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=No(n,r.document),s=r.readTime?rt(r.readTime):q.min(),a=be.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Xi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=No(n,r.document),s=r.removedTargetIds||[];t=new Xi([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new $E(i,s),c=r.targetId;t=new Mf(c,a)}}return t}function eI(n,e){let t;if(e instanceof ti)t={update:Ql(n,e.key,e.value)};else if(e instanceof xf)t={delete:pa(n,e.key)};else if(e instanceof vn)t={update:Ql(n,e.key,e.data),updateMask:uI(e.fieldMask)};else{if(!(e instanceof jE))return F();t={verify:pa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof $r)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof zr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Hr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ms)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw F()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:YE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(n,e.precondition)),t}function tI(n,e){return n&&n.length>0?(X(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?rt(i.updateTime):rt(s);return a.isEqual(q.min())&&(a=rt(s)),new ME(a,i.transformResults||[])}(t,e))):[]}function nI(n,e){return{documents:[Bf(n,e.path)]}}function rI(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Bf(n,i);const s=function(d){if(d.length!==0)return zf(Ye.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(v){return{field:kn(v.field),direction:oI(v.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=da(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ht:t,parent:i}}function iI(n){let e=JE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){X(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const v=$f(m);return v instanceof Ye&&yf(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(v=>function(P){return new ps(Nn(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(m){let v;return v=typeof m=="object"?m.value:m,Ds(v)?null:v}(t.limit));let l=null;t.startAt&&(l=function(m){const v=!!m.before,R=m.values||[];return new fs(R,v)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const v=!m.before,R=m.values||[];return new fs(R,v)}(t.endAt)),wE(e,i,a,s,c,"F",l,d)}function sI(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $f(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Nn(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Nn(t.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Nn(t.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nn(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return ce.create(Nn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ye.create(t.compositeFilter.filters.map(r=>$f(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function oI(n){return GE[n]}function aI(n){return KE[n]}function cI(n){return QE[n]}function kn(n){return{fieldPath:n.canonicalString()}}function Nn(n){return _e.fromServerFormat(n.fieldPath)}function zf(n){return n instanceof ce?function(t){if(t.op==="=="){if(Ll(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NAN"}};if(xl(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ll(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NAN"}};if(xl(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kn(t.field),op:aI(t.op),value:t.value}}}(n):n instanceof Ye?function(t){const r=t.getFilters().map(i=>zf(i));return r.length===1?r[0]:{compositeFilter:{op:cI(t.op),filters:r}}}(n):F()}function uI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Hf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Dt{constructor(e,t,r,i,s=q.min(),a=q.min(),c=ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lI{constructor(e){this.Tt=e}}function hI(n){const e=iI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ha(e,e.limit,"L"):e}/**
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
 */class dI{constructor(){this.Tn=new fI}addToCollectionParentIndex(e,t){return this.Tn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(Ft.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class fI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new de(ee.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new de(ee.comparator)).toArray()}}/**
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
 */const Xl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wf=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(Wf,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
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
 */class zn{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new zn(0)}static Kn(){return new zn(-1)}}/**
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
 */const Yl="LruGarbageCollector",pI=1048576;function Jl([n,e],[t,r]){const i=H(n,t);return i===0?H(e,r):i}class mI{constructor(e){this.Hn=e,this.buffer=new de(Jl),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Jl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class gI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){V(Yl,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xn(t)?V(Yl,"Ignoring IndexedDB error during garbage collection: ",t):await Qn(t)}await this.er(3e5)})}}class _I{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Os.ae);const r=new mI(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Xl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xl):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,s,a,c,l,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),Pn()<=W.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function yI(n,e){return new _I(n,e)}/**
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
 */class vI{constructor(){this.changes=new yn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class EI{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&kr(r.mutation,i,Qe.empty(),he.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const i=nn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=wr();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=nn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=_t();const a=Cr(),c=function(){return Cr()}();return t.forEach((l,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof vn)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),kr(f.mutation,d,f.mutation.getFieldMask(),he.now())):a.set(d.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var m;return c.set(d,new TI(f,(m=a.get(d))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Cr();let i=new re((a,c)=>a-c),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let f=r.get(l)||Qe.empty();f=c.applyToLocalView(d,f),r.set(l,f);const m=(i.get(c.batchId)||G()).add(l);i=i.insert(c.batchId,m)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,m=Sf();f.forEach(v=>{if(!s.has(v)){const R=Df(t.get(v),r.get(v));R!==null&&m.set(v,R),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):If(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):S.resolve(nn());let c=Fr,l=s;return a.next(d=>S.forEach(d,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{l=l.insert(f,v)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,G())).next(f=>({batchId:c,changes:bf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=wr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=wr();return this.indexManager.getCollectionParents(e,s).next(c=>S.forEach(c,l=>{const d=function(m,v){return new ei(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,v)=>{a=a.insert(m,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,be.newInvalidDocument(f)))});let c=wr();return a.forEach((l,d)=>{const f=s.get(l);f!==void 0&&kr(f.mutation,d,Qe.empty(),he.now()),Ls(t,d)&&(c=c.insert(l,d))}),c})}}/**
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
 */class II{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return S.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:rt(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:hI(i.bundledQuery),readTime:rt(i.readTime)}}(t)),S.resolve()}}/**
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
 */class wI{constructor(){this.overlays=new re(L.comparator),this.Rr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=nn();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Et(e,t,s)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=nn(),s=t.length+1,a=new L(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new re((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=nn(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=nn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=i)););return S.resolve(c)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new qE(t,r));let s=this.Rr.get(t);s===void 0&&(s=G(),this.Rr.set(t,s)),this.Rr.set(t,s.add(r.key))}}/**
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
 */class AI{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class Ya{constructor(){this.Vr=new de(pe.mr),this.gr=new de(pe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new pe(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new L(new ee([])),r=new pe(t,e),i=new pe(t,e+1),s=[];return this.gr.forEachInRange([r,i],a=>{this.wr(a),s.push(a.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new L(new ee([])),r=new pe(t,e),i=new pe(t,e+1);let s=G();return this.gr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new pe(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return L.comparator(e.key,t.key)||H(e.Cr,t.Cr)}static pr(e,t){return H(e.Cr,t.Cr)||L.comparator(e.key,t.key)}}/**
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
 */class RI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new de(pe.mr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new BE(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.Mr=this.Mr.add(new pe(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Ba:this.Fr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),i=new pe(t,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],a=>{const c=this.Or(a.Cr);s.push(c)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(H);return t.forEach(i=>{const s=new pe(i,0),a=new pe(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,a],c=>{r=r.add(c.Cr)})}),S.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const a=new pe(new L(s),0);let c=new de(H);return this.Mr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.Cr)),!0)},a),S.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){X(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return S.forEach(t.mutations,i=>{const s=new pe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new pe(t,0),i=this.Mr.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class bI{constructor(e){this.kr=e,this.docs=function(){return new re(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let r=_t();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():be.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=_t();const a=t.path,c=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||tE(eE(f),r)<=0||(i.has(f.key)||Ls(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,t,r,i){F()}qr(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new SI(this)}getSize(e){return S.resolve(this.size)}}class SI extends vI{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class PI{constructor(e){this.persistence=e,this.Qr=new yn(t=>za(t),Ha),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ya,this.targetCount=0,this.Kr=zn.Un()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),S.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new zn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.zn(t),S.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Ur.containsKey(t))}}/**
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
 */class Gf{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Os(0),this.zr=!1,this.zr=!0,this.jr=new AI,this.referenceDelegate=e(this),this.Hr=new PI(this),this.indexManager=new dI,this.remoteDocumentCache=function(i){return new bI(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new lI(t),this.Yr=new II(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new RI(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const i=new CI(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,t){return S.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class CI extends rE{constructor(e){super(),this.currentSequenceNumber=e}}class Ja{constructor(e){this.persistence=e,this.ti=new Ya,this.ni=null}static ri(e){return new Ja(e)}get ii(){if(this.ni)return this.ni;throw F()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),S.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.ii,r=>{const i=L.fromPath(r);return this.si(e,i).next(s=>{s||t.removeEntry(i,q.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return S.or([()=>S.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class _s{constructor(e,t){this.persistence=e,this.oi=new yn(r=>oE(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=yI(this,t)}static ri(e,t){return new _s(e,t)}Zr(){}Xr(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return S.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?S.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,a=>this.ar(e,a,t).next(c=>{c||(r++,s.removeEntry(a,q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),S.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gi(e.data.value)),t}ar(e,t,r){return S.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Za{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=G(),i=G();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Za(e,t.fromCache,r,i)}}/**
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
 */class kI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class NI{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return a_()?8:iE(Pe())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.rs(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ss(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new kI;return this._s(e,t,a).next(c=>{if(s.result=c,this.Xi)return this.us(e,t,a,c.size)})}).next(()=>s.result)}us(e,t,r,i){return r.documentReadCount<this.es?(Pn()<=W.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Cn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),S.resolve()):(Pn()<=W.DEBUG&&V("QueryEngine","Query:",Cn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Pn()<=W.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Cn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):S.resolve())}rs(e,t){if(jl(t))return S.resolve(null);let r=nt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ha(t,null,"F"),r=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=G(...s);return this.ns.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.cs(t,c);return this.ls(t,d,a,l.readTime)?this.rs(e,ha(t,null,"F")):this.hs(e,d,t,l)}))})))}ss(e,t,r,i){return jl(t)||i.isEqual(q.min())?S.resolve(null):this.ns.getDocuments(e,r).next(s=>{const a=this.cs(t,s);return this.ls(t,a,r,i)?S.resolve(null):(Pn()<=W.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cn(t)),this.hs(e,a,t,ZT(i,Fr)).next(c=>c))})}cs(e,t){let r=new de(Af(e));return t.forEach((i,s)=>{Ls(e,s)&&(r=r.add(s))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,t,r){return Pn()<=W.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Cn(t)),this.ns.getDocumentsMatchingQuery(e,t,Ft.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const ec="LocalStore",OI=3e8;class DI{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new re(H),this.Is=new yn(s=>za(s),Ha),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EI(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function VI(n,e,t,r){return new DI(n,e,t,r)}async function Kf(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let l=G();for(const d of i){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of s){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:c}))})})}function xI(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){const m=d.batch,v=m.keys();let R=S.resolve();return v.forEach(P=>{R=R.next(()=>f.getEntry(l,P)).next(D=>{const k=d.docVersions.get(P);X(k!==null),D.version.compareTo(k)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=G();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Qf(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function LI(n,e){const t=$(n),r=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const c=[];e.targetChanges.forEach((f,m)=>{const v=i.get(m);if(!v)return;c.push(t.Hr.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Hr.addMatchingKeys(s,f.addedDocuments,m)));let R=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(ye.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(m,R),function(D,k,j){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=OI?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(v,R,f)&&c.push(t.Hr.updateTargetData(s,R))});let l=_t(),d=G();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(MI(s,a,e.documentUpdates).next(f=>{l=f.Vs,d=f.fs})),!r.isEqual(q.min())){const f=t.Hr.getLastRemoteSnapshotVersion(s).next(m=>t.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return S.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.Ts=i,s))}function MI(n,e,t){let r=G(),i=G();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=_t();return t.forEach((c,l)=>{const d=s.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):V(ec,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Vs:a,fs:i}})}function UI(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ba),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function FI(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Hr.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):t.Hr.allocateTargetId(r).next(a=>(i=new Dt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function ga(n,e,t){const r=$(n),i=r.Ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Xn(a))throw a;V(ec,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function Zl(n,e,t){const r=$(n);let i=q.min(),s=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const m=$(l),v=m.Is.get(f);return v!==void 0?S.resolve(m.Ts.get(v)):m.Hr.getTargetData(d,f)}(r,a,nt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?i:q.min(),t?s:G())).next(c=>(jI(r,RE(e),c),{documents:c,gs:s})))}function jI(n,e,t){let r=n.Es.get(e)||q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Es.set(e,r)}class eh{constructor(){this.activeTargetIds=NE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BI{constructor(){this.ho=new eh,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new eh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qI{To(e){}shutdown(){}}/**
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
 */const th="ConnectivityMonitor";class nh{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){V(th,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){V(th,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Di=null;function _a(){return Di===null?Di=function(){return 268435456+Math.round(2147483648*Math.random())}():Di++,"0x"+Di.toString(16)}/**
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
 */const Oo="RestConnection",$I={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class zI{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===hs?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,t,r,i,s){const a=_a(),c=this.bo(e,t.toUriEncodedString());V(Oo,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,i,s),this.vo(e,c,l,r).then(d=>(V(Oo,`Received RPC '${e}' ${a}: `,d),d),d=>{throw jn(Oo,`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Co(e,t,r,i,s,a){return this.So(e,t,r,i,s)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}bo(e,t){const r=$I[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class HI{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const we="WebChannelConnection";class WI extends zI{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const s=_a();return new Promise((a,c)=>{const l=new Yd;l.setWithCredentials(!0),l.listenOnce(Jd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wi.NO_ERROR:const f=l.getResponseJson();V(we,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Wi.TIMEOUT:V(we,`RPC '${e}' ${s} timed out`),c(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case Wi.HTTP_ERROR:const m=l.getStatus();if(V(we,`RPC '${e}' ${s} failed with status:`,m,"response text:",l.getResponseText()),m>0){let v=l.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v?.error;if(R&&R.status&&R.message){const P=function(k){const j=k.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(j)>=0?j:C.UNKNOWN}(R.status);c(new x(P,R.message))}else c(new x(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new x(C.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{V(we,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);V(we,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}Wo(e,t,r){const i=_a(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=tf(),c=ef(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=s.join("");V(we,`Creating RPC '${e}' stream ${i}: ${f}`,l);const m=a.createWebChannel(f,l);let v=!1,R=!1;const P=new HI({Fo:k=>{R?V(we,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(v||(V(we,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),V(we,`RPC '${e}' stream ${i} sending:`,k),m.send(k))},Mo:()=>m.close()}),D=(k,j,B)=>{k.listen(j,M=>{try{B(M)}catch(z){setTimeout(()=>{throw z},0)}})};return D(m,Ir.EventType.OPEN,()=>{R||(V(we,`RPC '${e}' stream ${i} transport opened.`),P.Qo())}),D(m,Ir.EventType.CLOSE,()=>{R||(R=!0,V(we,`RPC '${e}' stream ${i} transport closed`),P.Uo())}),D(m,Ir.EventType.ERROR,k=>{R||(R=!0,jn(we,`RPC '${e}' stream ${i} transport errored:`,k),P.Uo(new x(C.UNAVAILABLE,"The operation could not be completed")))}),D(m,Ir.EventType.MESSAGE,k=>{var j;if(!R){const B=k.data[0];X(!!B);const M=B,z=M?.error||((j=M[0])===null||j===void 0?void 0:j.error);if(z){V(we,`RPC '${e}' stream ${i} received error:`,z);const ue=z.status;let Y=function(_){const T=ae[_];if(T!==void 0)return Lf(T)}(ue),E=z.message;Y===void 0&&(Y=C.INTERNAL,E="Unknown error status: "+ue+" with message "+z.message),R=!0,P.Uo(new x(Y,E)),m.close()}else V(we,`RPC '${e}' stream ${i} received:`,B),P.Ko(B)}}),D(c,Zd.STAT_EVENT,k=>{k.stat===ia.PROXY?V(we,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===ia.NOPROXY&&V(we,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function Do(){return typeof document<"u"?document:null}/**
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
 */function js(n){return new XE(n,!0)}/**
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
 */class Xf{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const rh="PersistentStream";class Yf{constructor(e,t,r,i,s,a,c,l){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Xf(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(gt(t.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new x(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return V(rh,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(V(rh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GI extends Yf{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=ZE(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?rt(a.readTime):q.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=ma(this.serializer),t.addTarget=function(s,a){let c;const l=a.target;if(c=ua(l)?{documents:nI(s,l)}:{query:rI(s,l).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ff(s,a.resumeToken);const d=da(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=gs(s,a.snapshotVersion.toTimestamp());const d=da(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=sI(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=ma(this.serializer),t.removeTarget=e,this.I_(t)}}class KI extends Yf{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return X(!!e.streamToken),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=tI(e.writeResults,e.commitTime),r=rt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=ma(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>eI(this.serializer,r))};this.I_(t)}}/**
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
 */class QI{}class XI extends QI{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.So(e,fa(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(C.UNKNOWN,s.toString())})}Co(e,t,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(e,fa(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class YI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(gt(t),this.N_=!1):V("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const hn="RemoteStore";class JI{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(a=>{r.enqueueAndForget(async()=>{Tn(this)&&(V(hn,"Restarting streams for network reachability change."),await async function(l){const d=$(l);d.W_.add(4),await ri(d),d.j_.set("Unknown"),d.W_.delete(4),await Bs(d)}(this))})}),this.j_=new YI(r,i)}}async function Bs(n){if(Tn(n))for(const e of n.G_)await e(!0)}async function ri(n){for(const e of n.G_)await e(!1)}function Jf(n,e){const t=$(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),ic(t)?rc(t):Yn(t).c_()&&nc(t,e))}function tc(n,e){const t=$(n),r=Yn(t);t.K_.delete(e),r.c_()&&Zf(t,e),t.K_.size===0&&(r.c_()?r.P_():Tn(t)&&t.j_.set("Unknown"))}function nc(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yn(n).y_(e)}function Zf(n,e){n.H_.Ne(e),Yn(n).w_(e)}function rc(n){n.H_=new WE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Yn(n).start(),n.j_.B_()}function ic(n){return Tn(n)&&!Yn(n).u_()&&n.K_.size>0}function Tn(n){return $(n).W_.size===0}function ep(n){n.H_=void 0}async function ZI(n){n.j_.set("Online")}async function ew(n){n.K_.forEach((e,t)=>{nc(n,e)})}async function tw(n,e){ep(n),ic(n)?(n.j_.q_(e),rc(n)):n.j_.set("Unknown")}async function nw(n,e,t){if(n.j_.set("Online"),e instanceof Uf&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.K_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.K_.delete(c),i.H_.removeTarget(c))}(n,e)}catch(r){V(hn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ys(n,r)}else if(e instanceof Xi?n.H_.We(e):e instanceof Mf?n.H_.Ze(e):n.H_.je(e),!t.isEqual(q.min()))try{const r=await Qf(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.H_.ot(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.K_.get(d);f&&s.K_.set(d,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const f=s.K_.get(l);if(!f)return;s.K_.set(l,f.withResumeToken(ye.EMPTY_BYTE_STRING,f.snapshotVersion)),Zf(s,l);const m=new Dt(f.target,l,d,f.sequenceNumber);nc(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V(hn,"Failed to raise snapshot:",r),await ys(n,r)}}async function ys(n,e,t){if(!Xn(e))throw e;n.W_.add(1),await ri(n),n.j_.set("Offline"),t||(t=()=>Qf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(hn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Bs(n)})}function tp(n,e){return e().catch(t=>ys(n,t,e))}async function qs(n){const e=$(n),t=$t(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ba;for(;rw(e);)try{const i=await UI(e.localStore,r);if(i===null){e.U_.length===0&&t.P_();break}r=i.batchId,iw(e,i)}catch(i){await ys(e,i)}np(e)&&rp(e)}function rw(n){return Tn(n)&&n.U_.length<10}function iw(n,e){n.U_.push(e);const t=$t(n);t.c_()&&t.S_&&t.b_(e.mutations)}function np(n){return Tn(n)&&!$t(n).u_()&&n.U_.length>0}function rp(n){$t(n).start()}async function sw(n){$t(n).C_()}async function ow(n){const e=$t(n);for(const t of n.U_)e.b_(t.mutations)}async function aw(n,e,t){const r=n.U_.shift(),i=Ka.from(r,e,t);await tp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await qs(n)}async function cw(n,e){e&&$t(n).S_&&await async function(r,i){if(function(a){return zE(a)&&a!==C.ABORTED}(i.code)){const s=r.U_.shift();$t(r).h_(),await tp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qs(r)}}(n,e),np(n)&&rp(n)}async function ih(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),V(hn,"RemoteStore received new credentials");const r=Tn(t);t.W_.add(3),await ri(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Bs(t)}async function uw(n,e){const t=$(n);e?(t.W_.delete(2),await Bs(t)):e||(t.W_.add(2),await ri(t),t.j_.set("Unknown"))}function Yn(n){return n.J_||(n.J_=function(t,r,i){const s=$(t);return s.M_(),new GI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:ZI.bind(null,n),No:ew.bind(null,n),Lo:tw.bind(null,n),p_:nw.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),ic(n)?rc(n):n.j_.set("Unknown")):(await n.J_.stop(),ep(n))})),n.J_}function $t(n){return n.Y_||(n.Y_=function(t,r,i){const s=$(t);return s.M_(),new KI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:sw.bind(null,n),Lo:cw.bind(null,n),D_:ow.bind(null,n),v_:aw.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await qs(n)):(await n.Y_.stop(),n.U_.length>0&&(V(hn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class sc{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new sc(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oc(n,e){if(gt("AsyncQueue",`${e}: ${n}`),Xn(n))return new x(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Mn{static emptySet(e){return new Mn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=wr(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Mn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class sh{constructor(){this.Z_=new re(L.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):F():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Hn{constructor(e,t,r,i,s,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Hn(e,t,Mn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class lw{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class hw{constructor(){this.queries=oh(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=$(t),s=i.queries;i.queries=oh(),s.forEach((a,c)=>{for(const l of c.ta)l.onError(r)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function oh(){return new yn(n=>wf(n),xs)}async function ip(n,e){const t=$(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new lw,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await t.onListen(i,!0);break;case 1:s.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=oc(a,`Initialization of query '${Cn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.ta.push(e),e.sa(t.onlineState),s.ea&&e.oa(s.ea)&&ac(t)}async function sp(n,e){const t=$(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.ta.indexOf(e);a>=0&&(s.ta.splice(a,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function dw(n,e){const t=$(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.ta)c.oa(i)&&(r=!0);a.ea=i}}r&&ac(t)}function fw(n,e,t){const r=$(n),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(t);r.queries.delete(e)}function ac(n){n.ia.forEach(e=>{e.next()})}var ya,ah;(ah=ya||(ya={}))._a="default",ah.Cache="cache";class op{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Hn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==ya.Cache}}/**
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
 */class ap{constructor(e){this.key=e}}class cp{constructor(e){this.key=e}}class pw{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=G(),this.mutatedKeys=G(),this.ya=Af(e),this.wa=new Mn(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new sh,i=t?t.wa:this.wa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const v=i.get(f),R=Ls(this.query,m)?m:null,P=!!v&&this.mutatedKeys.has(v.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let k=!1;v&&R?v.data.isEqual(R.data)?P!==D&&(r.track({type:3,doc:R}),k=!0):this.va(v,R)||(r.track({type:2,doc:R}),k=!0,(l&&this.ya(R,l)>0||d&&this.ya(R,d)<0)&&(c=!0)):!v&&R?(r.track({type:0,doc:R}),k=!0):v&&!R&&(r.track({type:1,doc:v}),k=!0,(l||d)&&(c=!0)),k&&(R?(a=a.add(R),s=D?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{wa:a,Da:r,ls:c,mutatedKeys:s}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,m)=>function(R,P){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return D(R)-D(P)}(f.type,m.type)||this.ya(f.doc,m.doc)),this.Ca(r),i=i!=null&&i;const c=t&&!i?this.Fa():[],l=this.pa.size===0&&this.current&&!i?1:0,d=l!==this.ga;return this.ga=l,a.length!==0||d?{snapshot:new Hn(this.query,e.wa,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new sh,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=G(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new cp(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new ap(r))}),t}Oa(e){this.fa=e.gs,this.pa=G();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Hn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const cc="SyncEngine";class mw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class gw{constructor(e){this.key=e,this.Ba=!1}}class _w{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new yn(c=>wf(c),xs),this.qa=new Map,this.Qa=new Set,this.$a=new re(L.comparator),this.Ua=new Map,this.Ka=new Ya,this.Wa={},this.Ga=new Map,this.za=zn.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function yw(n,e,t=!0){const r=pp(n);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await up(r,e,t,!0),i}async function vw(n,e){const t=pp(n);await up(t,e,!0,!1)}async function up(n,e,t,r){const i=await FI(n.localStore,nt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await Tw(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Jf(n.remoteStore,i),c}async function Tw(n,e,t,r,i){n.Ha=(m,v,R)=>async function(D,k,j,B){let M=k.view.ba(j);M.ls&&(M=await Zl(D.localStore,k.query,!1).then(({documents:E})=>k.view.ba(E,M)));const z=B&&B.targetChanges.get(k.targetId),ue=B&&B.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(M,D.isPrimaryClient,z,ue);return uh(D,k.targetId,Y.Ma),Y.snapshot}(n,m,v,R);const s=await Zl(n.localStore,e,!0),a=new pw(e,s.gs),c=a.ba(s.documents),l=ni.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,l);uh(n,t,d.Ma);const f=new mw(e,t,a);return n.ka.set(e,f),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),d.snapshot}async function Ew(n,e,t){const r=$(n),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(a=>!xs(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ga(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&tc(r.remoteStore,i.targetId),va(r,i.targetId)}).catch(Qn)):(va(r,i.targetId),await ga(r.localStore,i.targetId,!0))}async function Iw(n,e){const t=$(n),r=t.ka.get(e),i=t.qa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),tc(t.remoteStore,r.targetId))}async function ww(n,e,t){const r=kw(n);try{const i=await function(a,c){const l=$(a),d=he.now(),f=c.reduce((R,P)=>R.add(P.key),G());let m,v;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=_t(),D=G();return l.ds.getEntries(R,f).next(k=>{P=k,P.forEach((j,B)=>{B.isValidDocument()||(D=D.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,P)).next(k=>{m=k;const j=[];for(const B of c){const M=FE(B,m.get(B.key).overlayedDocument);M!=null&&j.push(new vn(B.key,M,mf(M.value.mapValue),dt.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,j,c)}).next(k=>{v=k;const j=k.applyToLocalDocumentSet(m,D);return l.documentOverlayCache.saveOverlays(R,k.batchId,j)})}).then(()=>({batchId:v.batchId,changes:bf(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let d=a.Wa[a.currentUser.toKey()];d||(d=new re(H)),d=d.insert(c,l),a.Wa[a.currentUser.toKey()]=d}(r,i.batchId,t),await ii(r,i.changes),await qs(r.remoteStore)}catch(i){const s=oc(i,"Failed to persist write");t.reject(s)}}async function lp(n,e){const t=$(n);try{const r=await LI(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ua.get(s);a&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?X(a.Ba):i.removedDocuments.size>0&&(X(a.Ba),a.Ba=!1))}),await ii(t,r,e)}catch(r){await Qn(r)}}function ch(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((s,a)=>{const c=a.view.sa(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=$(a);l.onlineState=c;let d=!1;l.queries.forEach((f,m)=>{for(const v of m.ta)v.sa(c)&&(d=!0)}),d&&ac(l)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Aw(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ua.get(e),s=i&&i.key;if(s){let a=new re(L.comparator);a=a.insert(s,be.newNoDocument(s,q.min()));const c=G().add(s),l=new Fs(q.min(),new Map,new re(H),a,c);await lp(r,l),r.$a=r.$a.remove(s),r.Ua.delete(e),uc(r)}else await ga(r.localStore,e,!1).then(()=>va(r,e,t)).catch(Qn)}async function Rw(n,e){const t=$(n),r=e.batch.batchId;try{const i=await xI(t.localStore,e);dp(t,r,null),hp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ii(t,i)}catch(i){await Qn(i)}}async function bw(n,e,t){const r=$(n);try{const i=await function(a,c){const l=$(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(m=>(X(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);dp(r,e,t),hp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ii(r,i)}catch(i){await Qn(i)}}function hp(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function dp(n,e,t){const r=$(n);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function va(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||fp(n,r)})}function fp(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(tc(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),uc(n))}function uh(n,e,t){for(const r of t)r instanceof ap?(n.Ka.addReference(r.key,e),Sw(n,r)):r instanceof cp?(V(cc,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||fp(n,r.key)):F()}function Sw(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(V(cc,"New document in limbo: "+t),n.Qa.add(r),uc(n))}function uc(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new L(ee.fromString(e)),r=n.za.next();n.Ua.set(r,new gw(t)),n.$a=n.$a.insert(t,r),Jf(n.remoteStore,new Dt(nt(Wa(t.path)),r,"TargetPurposeLimboResolution",Os.ae))}}async function ii(n,e,t){const r=$(n),i=[],s=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{a.push(r.Ha(l,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Za.Yi(l.targetId,d);s.push(m)}}))}),await Promise.all(a),r.La.p_(i),await async function(l,d){const f=$(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>S.forEach(d,v=>S.forEach(v.Hi,R=>f.persistence.referenceDelegate.addReference(m,v.targetId,R)).next(()=>S.forEach(v.Ji,R=>f.persistence.referenceDelegate.removeReference(m,v.targetId,R)))))}catch(m){if(!Xn(m))throw m;V(ec,"Failed to update sequence numbers: "+m)}for(const m of d){const v=m.targetId;if(!m.fromCache){const R=f.Ts.get(v),P=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(P);f.Ts=f.Ts.insert(v,D)}}}(r.localStore,s))}async function Pw(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){V(cc,"User change. New user:",e.toKey());const r=await Kf(t.localStore,e);t.currentUser=e,function(s,a){s.Ga.forEach(c=>{c.forEach(l=>{l.reject(new x(C.CANCELLED,a))})}),s.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ii(t,r.Rs)}}function Cw(n,e){const t=$(n),r=t.Ua.get(e);if(r&&r.Ba)return G().add(r.key);{let i=G();const s=t.qa.get(e);if(!s)return i;for(const a of s){const c=t.ka.get(a);i=i.unionWith(c.view.Sa)}return i}}function pp(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Aw.bind(null,e),e.La.p_=dw.bind(null,e.eventManager),e.La.Ja=fw.bind(null,e.eventManager),e}function kw(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bw.bind(null,e),e}class vs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=js(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return VI(this.persistence,new NI,e.initialUser,this.serializer)}Xa(e){return new Gf(Ja.ri,this.serializer)}Za(e){return new BI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vs.provider={build:()=>new vs};class Nw extends vs{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){X(this.persistence.referenceDelegate instanceof _s);const r=this.persistence.referenceDelegate.garbageCollector;return new gI(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new Gf(r=>_s.ri(r,t),this.serializer)}}class Ta{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ch(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pw.bind(null,this.syncEngine),await uw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hw}()}createDatastore(e){const t=js(e.databaseInfo.databaseId),r=function(s){return new WI(s)}(e.databaseInfo);return function(s,a,c,l){return new XI(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new JI(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ch(this.syncEngine,t,0),function(){return nh.D()?new nh:new qI}())}createSyncEngine(e,t){return function(i,s,a,c,l,d,f){const m=new _w(i,s,a,c,l,d);return f&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=$(i);V(hn,"RemoteStore shutting down."),s.W_.add(5),await ri(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ta.provider={build:()=>new Ta};/**
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
 */class mp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const zt="FirestoreClient";class Ow{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=sf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{V(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=oc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vo(n,e){n.asyncQueue.verifyOperationInProgress(),V(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Kf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function lh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Dw(n);V(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ih(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ih(e.remoteStore,i)),n._onlineComponents=e}async function Dw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(zt,"Using user provided OfflineComponentProvider");try{await Vo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;jn("Error using user provided cache. Falling back to memory cache: "+t),await Vo(n,new vs)}}else V(zt,"Using default OfflineComponentProvider"),await Vo(n,new Nw(void 0));return n._offlineComponents}async function gp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(zt,"Using user provided OnlineComponentProvider"),await lh(n,n._uninitializedComponentsProvider._online)):(V(zt,"Using default OnlineComponentProvider"),await lh(n,new Ta))),n._onlineComponents}function Vw(n){return gp(n).then(e=>e.syncEngine)}async function _p(n){const e=await gp(n),t=e.eventManager;return t.onListen=yw.bind(null,e.syncEngine),t.onUnlisten=Ew.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=vw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Iw.bind(null,e.syncEngine),t}function xw(n,e,t={}){const r=new ht;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){const f=new mp({next:v=>{f.su(),a.enqueueAndForget(()=>sp(s,m));const R=v.docs.has(c);!R&&v.fromCache?d.reject(new x(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&v.fromCache&&l&&l.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),m=new op(Wa(c.path),f,{includeMetadataChanges:!0,Ta:!0});return ip(s,m)}(await _p(n),n.asyncQueue,e,t,r)),r.promise}function Lw(n,e,t={}){const r=new ht;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,d){const f=new mp({next:v=>{f.su(),a.enqueueAndForget(()=>sp(s,m)),v.fromCache&&l.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),m=new op(c,f,{includeMetadataChanges:!0,Ta:!0});return ip(s,m)}(await _p(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function yp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const hh=new Map;/**
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
 */function vp(n,e,t){if(!t)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Mw(n,e,t,r){if(e===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dh(n){if(!L.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function fh(n){if(L.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $s(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$s(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Tp="firestore.googleapis.com",ph=!0;class mh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tp,this.ssl=ph}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ph;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Wf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pI)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Mw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zT;switch(r.type){case"firstParty":return new KT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hh.get(t);r&&(V("ComponentProvider","Removing Datastore"),hh.delete(t),r.terminate())}(this),Promise.resolve()}}function Uw(n,e,t,r={}){var i;const s=(n=dn(n,zs))._getSettings(),a=Object.assign(Object.assign({},s),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;s.host!==Tp&&s.host!==c&&jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},s),{host:c,ssl:!1,emulatorOptions:r});if(!Ut(l,a)&&(n._setSettings(l),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Ae.MOCK_USER;else{d=ud(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ae(m)}n._authCredentials=new HT(new nf(d,f))}}/**
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
 */class Jn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jn(this.firestore,e,this._query)}}class Ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class Mt extends Jn{constructor(e,t,r){super(e,t,Wa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new L(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function Fw(n,e,...t){if(n=ne(n),vp("collection","path",e),n instanceof zs){const r=ee.fromString(e,...t);return fh(r),new Mt(n,null,r)}{if(!(n instanceof Ve||n instanceof Mt))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return fh(r),new Mt(n.firestore,null,r)}}function xo(n,e,...t){if(n=ne(n),arguments.length===1&&(e=sf.newId()),vp("doc","path",e),n instanceof zs){const r=ee.fromString(e,...t);return dh(r),new Ve(n,null,new L(r))}{if(!(n instanceof Ve||n instanceof Mt))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return dh(r),new Ve(n.firestore,n instanceof Mt?n.converter:null,new L(r))}}/**
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
 */const gh="AsyncQueue";class _h{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Xf(this,"async_queue_retry"),this.Su=()=>{const r=Do();r&&V(gh,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Do();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Do();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ht;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Xn(e))throw e;V(gh,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw gt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=sc.createAndSchedule(this,e,t,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&F()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Hs extends zs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new _h,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _h(e),this._firestoreClient=void 0,await e}}}function jw(n,e){const t=typeof n=="object"?n:Qr(),r=typeof n=="string"?n:hs,i=yt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=od("firestore");s&&Uw(i,...s)}return i}function lc(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Bw(n),n._firestoreClient}function Bw(n){var e,t,r;const i=n._freezeSettings(),s=function(c,l,d,f){return new uE(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yp(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Ow(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class Wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wn(ye.fromBase64String(e))}catch(t){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wn(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class dc{constructor(e){this._methodName=e}}/**
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
 */class fc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
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
 */class pc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const qw=/^__.*__$/;class $w{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new vn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ti(e,this.data,t,this.fieldTransforms)}}function Ep(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class mc{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new mc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ts(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Ep(this.Lu)&&qw.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class zw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||js(e)}ju(e,t,r,i=!1){return new mc({Lu:e,methodName:t,zu:r,path:_e.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ip(n){const e=n._freezeSettings(),t=js(n._databaseId);return new zw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Hw(n,e,t,r,i,s={}){const a=n.ju(s.merge||s.mergeFields?2:0,e,t,i);Rp("Data must be an object, but it was:",a,r);const c=wp(r,a);let l,d;if(s.merge)l=new Qe(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const v=Gw(e,m,t);if(!a.contains(v))throw new x(C.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Qw(f,v)||f.push(v)}l=new Qe(f),d=a.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=a.fieldTransforms;return new $w(new qe(c),l,d)}class gc extends dc{_toFieldTransform(e){return new xE(e.path,new $r)}isEqual(e){return e instanceof gc}}function Ww(n,e,t,r=!1){return _c(t,n.ju(r?4:3,e))}function _c(n,e){if(Ap(n=ne(n)))return Rp("Unsupported field value:",e,n),wp(n,e);if(n instanceof dc)return function(r,i){if(!Ep(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let l=_c(c,i.Ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=he.fromDate(r);return{timestampValue:gs(i.serializer,s)}}if(r instanceof he){const s=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gs(i.serializer,s)}}if(r instanceof fc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wn)return{bytesValue:Ff(i.serializer,r._byteString)};if(r instanceof Ve){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof pc)return function(a,c){return{mapValue:{fields:{[ff]:{stringValue:pf},[ds]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return Ga(c.serializer,d)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${$s(r)}`)}(n,e)}function wp(n,e){const t={};return af(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_n(n,(r,i)=>{const s=_c(i,e.qu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Ap(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof fc||n instanceof Wn||n instanceof Ve||n instanceof dc||n instanceof pc)}function Rp(n,e,t){if(!Ap(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=$s(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Gw(n,e,t){if((e=ne(e))instanceof hc)return e._internalPath;if(typeof e=="string")return bp(n,e);throw Ts("Field path arguments must be of type string or ",n,!1,void 0,t)}const Kw=new RegExp("[~\\*/\\[\\]]");function bp(n,e,t){if(e.search(Kw)>=0)throw Ts(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new hc(...e.split("."))._internalPath}catch{throw Ts(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ts(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new x(C.INVALID_ARGUMENT,c+n+l)}function Qw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Sp{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Xw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(yc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Xw extends Sp{data(){return super.data()}}function yc(n,e){return typeof e=="string"?bp(n,e):e instanceof hc?e._internalPath:e._delegate._internalPath}/**
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
 */function Yw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vc{}class Jw extends vc{}function Zw(n,e,...t){let r=[];e instanceof vc&&r.push(e),r=r.concat(t),function(s){const a=s.filter(l=>l instanceof Tc).length,c=s.filter(l=>l instanceof Ws).length;if(a>1||a>0&&c>0)throw new x(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ws extends Jw{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ws(e,t,r)}_apply(e){const t=this._parse(e);return Pp(e._query,t),new Jn(e.firestore,e.converter,la(e._query,t))}_parse(e){const t=Ip(e.firestore);return function(s,a,c,l,d,f,m){let v;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){vh(m,f);const P=[];for(const D of m)P.push(yh(l,s,D));v={arrayValue:{values:P}}}else v=yh(l,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||vh(m,f),v=Ww(c,a,m,f==="in"||f==="not-in");return ce.create(d,f,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function eA(n,e,t){const r=e,i=yc("where",n);return Ws._create(i,r,t)}class Tc extends vc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Tc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ye.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const l of c)Pp(a,l),a=la(a,l)}(e._query,t),new Jn(e.firestore,e.converter,la(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function yh(n,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new x(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!If(e)&&t.indexOf("/")!==-1)throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!L.isDocumentKey(r))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vl(n,new L(r))}if(t instanceof Ve)return Vl(n,t._key);throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$s(t)}.`)}function vh(n,e){if(!Array.isArray(n)||n.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Pp(n,e){const t=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class tA{convertValue(e,t="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _n(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[ds].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>oe(a.doubleValue));return new pc(s)}convertGeoPoint(e){return new fc(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Vs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(jr(e));default:return null}}convertTimestamp(e){const t=jt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);X(Hf(r));const i=new Br(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(t)||gt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function nA(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cp extends Sp{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(yc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Yi extends Cp{data(e={}){return super.data(e)}}class rA{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Rr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Yi(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const l=new Yi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Rr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new Yi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Rr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:iA(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function iA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function sA(n){n=dn(n,Ve);const e=dn(n.firestore,Hs);return xw(lc(e),n._key).then(t=>cA(e,n,t))}class kp extends tA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,t)}}function oA(n){n=dn(n,Jn);const e=dn(n.firestore,Hs),t=lc(e),r=new kp(e);return Yw(n._query),Lw(t,n._query).then(i=>new rA(e,r,n,i))}function Th(n,e,t){n=dn(n,Ve);const r=dn(n.firestore,Hs),i=nA(n.converter,e);return aA(r,[Hw(Ip(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,dt.none())])}function aA(n,e){return function(r,i){const s=new ht;return r.asyncQueue.enqueueAndForget(async()=>ww(await Vw(r),i,s)),s.promise}(lc(n),e)}function cA(n,e,t){const r=t.docs.get(e._key),i=new kp(n);return new Cp(n,i,e._key,r,new Rr(t.hasPendingWrites,t.fromCache),e.converter)}function Eh(){return new gc("serverTimestamp")}(function(e,t=!0){(function(i){Kn=i})(gn),$e(new Be("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new Hs(new WT(r.getProvider("auth-internal")),new QT(a,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Se(Il,wl,e),Se(Il,wl,"esm2017")})();var uA="firebase",lA="11.6.0";/**
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
 */Se(uA,lA,"app");/**
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
 */const Np="firebasestorage.googleapis.com",Op="storageBucket",hA=2*60*1e3,dA=10*60*1e3,fA=1e3;/**
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
 */class ie extends ze{constructor(e,t,r=0){super(Lo(e),`Firebase Storage: ${t} (${Lo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ie.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var te;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(te||(te={}));function Lo(n){return"storage/"+n}function Ec(){const n="An unknown error occurred, please check the error payload for server response.";return new ie(te.UNKNOWN,n)}function pA(n){return new ie(te.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function mA(n){return new ie(te.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gA(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ie(te.UNAUTHENTICATED,n)}function _A(){return new ie(te.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yA(n){return new ie(te.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Dp(){return new ie(te.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Vp(){return new ie(te.CANCELED,"User canceled the upload/download.")}function vA(n){return new ie(te.INVALID_URL,"Invalid URL '"+n+"'.")}function TA(n){return new ie(te.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function EA(){return new ie(te.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Op+"' property when initializing the app?")}function xp(){return new ie(te.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function IA(){return new ie(te.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function wA(){return new ie(te.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function AA(n){return new ie(te.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ea(n){return new ie(te.INVALID_ARGUMENT,n)}function Lp(){return new ie(te.APP_DELETED,"The Firebase app was deleted.")}function RA(n){return new ie(te.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Nr(n,e){return new ie(te.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function yr(n){throw new ie(te.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Ue{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ue.makeFromUrl(e,t)}catch{return new Ue(e,"")}if(r.path==="")return r;throw TA(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),l={bucket:1,path:3};function d(z){z.path_=decodeURIComponent(z.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",R=new RegExp(`^https?://${m}/${f}/b/${i}/o${v}`,"i"),P={bucket:1,path:3},D=t===Np?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",j=new RegExp(`^https?://${D}/${i}/${k}`,"i"),M=[{regex:c,indices:l,postModify:s},{regex:R,indices:P,postModify:d},{regex:j,indices:{bucket:1,path:2},postModify:d}];for(let z=0;z<M.length;z++){const ue=M[z],Y=ue.regex.exec(e);if(Y){const E=Y[ue.indices.bucket];let g=Y[ue.indices.path];g||(g=""),r=new Ue(E,g),ue.postModify(r);break}}if(r==null)throw vA(e);return r}}class bA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function SA(n,e,t){let r=1,i=null,s=null,a=!1,c=0;function l(){return c===2}let d=!1;function f(...k){d||(d=!0,e.apply(null,k))}function m(k){i=setTimeout(()=>{i=null,n(R,l())},k)}function v(){s&&clearTimeout(s)}function R(k,...j){if(d){v();return}if(k){v(),f.call(null,k,...j);return}if(l()||a){v(),f.call(null,k,...j);return}r<64&&(r*=2);let M;c===1?(c=2,M=0):M=(r+Math.random())*1e3,m(M)}let P=!1;function D(k){P||(P=!0,v(),!d&&(i!==null?(k||(c=2),clearTimeout(i),m(0)):k||(c=1)))}return m(0),s=setTimeout(()=>{a=!0,D(!0)},t),D}function PA(n){n(!1)}/**
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
 */function CA(n){return n!==void 0}function kA(n){return typeof n=="function"}function NA(n){return typeof n=="object"&&!Array.isArray(n)}function Gs(n){return typeof n=="string"||n instanceof String}function Ih(n){return Ic()&&n instanceof Blob}function Ic(){return typeof Blob<"u"}function wh(n,e,t,r){if(r<e)throw Ea(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ea(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Zn(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Mp(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var on;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(on||(on={}));/**
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
 */function Up(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class OA{constructor(e,t,r,i,s,a,c,l,d,f,m,v=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,P)=>{this.resolve_=R,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Vi(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const c=s.getErrorCode()===on.NO_ERROR,l=s.getStatus();if(!c||Up(l,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===on.ABORT;r(!1,new Vi(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new Vi(d,s))})},t=(r,i)=>{const s=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());CA(l)?s(l):s()}catch(l){a(l)}else if(c!==null){const l=Ec();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(i.canceled){const l=this.appDelete_?Lp():Vp();a(l)}else{const l=Dp();a(l)}};this.canceled_?t(!1,new Vi(!1,null,!0)):this.backoffId_=SA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function DA(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function VA(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xA(n,e){e&&(n["X-Firebase-GMPID"]=e)}function LA(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function MA(n,e,t,r,i,s,a=!0){const c=Mp(n.urlParams),l=n.url+c,d=Object.assign({},n.headers);return xA(d,e),DA(d,t),VA(d,s),LA(d,r),new OA(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
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
 */function UA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FA(...n){const e=UA();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Ic())return new Blob(n);throw new ie(te.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jA(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function BA(n){if(typeof atob>"u")throw AA("base-64");return atob(n)}/**
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
 */const Ze={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mo{constructor(e,t){this.data=e,this.contentType=t||null}}function qA(n,e){switch(n){case Ze.RAW:return new Mo(Fp(e));case Ze.BASE64:case Ze.BASE64URL:return new Mo(jp(n,e));case Ze.DATA_URL:return new Mo(zA(e),HA(e))}throw Ec()}function Fp(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=n.charCodeAt(++t);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $A(n){let e;try{e=decodeURIComponent(n)}catch{throw Nr(Ze.DATA_URL,"Malformed data URL.")}return Fp(e)}function jp(n,e){switch(n){case Ze.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Nr(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ze.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Nr(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=BA(e)}catch(i){throw i.message.includes("polyfill")?i:Nr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class Bp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Nr(Ze.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=WA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function zA(n){const e=new Bp(n);return e.base64?jp(Ze.BASE64,e.rest):$A(e.rest)}function HA(n){return new Bp(n).contentType}function WA(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Nt{constructor(e,t){let r=0,i="";Ih(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ih(this.data_)){const r=this.data_,i=jA(r,e,t);return i===null?null:new Nt(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Nt(r,!0)}}static getBlob(...e){if(Ic()){const t=e.map(r=>r instanceof Nt?r.data_:r);return new Nt(FA.apply(null,t))}else{const t=e.map(a=>Gs(a)?qA(Ze.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)i[s++]=a[c]}),new Nt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function qp(n){let e;try{e=JSON.parse(n)}catch{return null}return NA(e)?e:null}/**
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
 */function GA(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function KA(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function $p(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function QA(n,e){return e}class Ne{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||QA}}let xi=null;function XA(n){return!Gs(n)||n.length<2?n:$p(n)}function zp(){if(xi)return xi;const n=[];n.push(new Ne("bucket")),n.push(new Ne("generation")),n.push(new Ne("metageneration")),n.push(new Ne("name","fullPath",!0));function e(s,a){return XA(a)}const t=new Ne("name");t.xform=e,n.push(t);function r(s,a){return a!==void 0?Number(a):a}const i=new Ne("size");return i.xform=r,n.push(i),n.push(new Ne("timeCreated")),n.push(new Ne("updated")),n.push(new Ne("md5Hash",null,!0)),n.push(new Ne("cacheControl",null,!0)),n.push(new Ne("contentDisposition",null,!0)),n.push(new Ne("contentEncoding",null,!0)),n.push(new Ne("contentLanguage",null,!0)),n.push(new Ne("contentType",null,!0)),n.push(new Ne("metadata","customMetadata",!0)),xi=n,xi}function YA(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Ue(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function JA(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const a=t[s];r[a.local]=a.xform(r,e[a.server])}return YA(r,n),r}function Hp(n,e,t){const r=qp(e);return r===null?null:JA(n,r,t)}function ZA(n,e,t,r){const i=qp(e);if(i===null||!Gs(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(d=>{const f=n.bucket,m=n.fullPath,v="/b/"+a(f)+"/o/"+a(m),R=Zn(v,t,r),P=Mp({alt:"media",token:d});return R+P})[0]}function Wp(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class En{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ft(n){if(!n)throw Ec()}function wc(n,e){function t(r,i){const s=Hp(n,i,e);return ft(s!==null),s}return t}function e0(n,e){function t(r,i){const s=Hp(n,i,e);return ft(s!==null),ZA(s,i,n.host,n._protocol)}return t}function si(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=_A():i=gA():t.getStatus()===402?i=mA(n.bucket):t.getStatus()===403?i=yA(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Ac(n){const e=si(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=pA(n.path)),s.serverResponse=i.serverResponse,s}return t}function t0(n,e,t){const r=e.fullServerUrl(),i=Zn(r,n.host,n._protocol),s="GET",a=n.maxOperationRetryTime,c=new En(i,s,wc(n,t),a);return c.errorHandler=Ac(e),c}function n0(n,e,t){const r=e.fullServerUrl(),i=Zn(r,n.host,n._protocol),s="GET",a=n.maxOperationRetryTime,c=new En(i,s,e0(n,t),a);return c.errorHandler=Ac(e),c}function r0(n,e){const t=e.fullServerUrl(),r=Zn(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function a(l,d){}const c=new En(r,i,a,s);return c.successCodes=[200,204],c.errorHandler=Ac(e),c}function i0(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Gp(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=i0(null,e)),r}function s0(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let z=0;z<2;z++)M=M+Math.random().toString().slice(2);return M}const l=c();a["Content-Type"]="multipart/related; boundary="+l;const d=Gp(e,r,i),f=Wp(d,t),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,v=`\r
--`+l+"--",R=Nt.getBlob(m,r,v);if(R===null)throw xp();const P={name:d.fullPath},D=Zn(s,n.host,n._protocol),k="POST",j=n.maxUploadRetryTime,B=new En(D,k,wc(n,t),j);return B.urlParams=P,B.headers=a,B.body=R.uploadData(),B.errorHandler=si(e),B}class Es{constructor(e,t,r,i){this.current=e,this.total=t,this.finalized=!!r,this.metadata=i||null}}function Rc(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{ft(!1)}return ft(!!t&&(e||["active"]).indexOf(t)!==-1),t}function o0(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),a=Gp(e,r,i),c={name:a.fullPath},l=Zn(s,n.host,n._protocol),d="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},m=Wp(a,t),v=n.maxUploadRetryTime;function R(D){Rc(D);let k;try{k=D.getResponseHeader("X-Goog-Upload-URL")}catch{ft(!1)}return ft(Gs(k)),k}const P=new En(l,d,R,v);return P.urlParams=c,P.headers=f,P.body=m,P.errorHandler=si(e),P}function a0(n,e,t,r){const i={"X-Goog-Upload-Command":"query"};function s(d){const f=Rc(d,["active","final"]);let m=null;try{m=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ft(!1)}m||ft(!1);const v=Number(m);return ft(!isNaN(v)),new Es(v,r.size(),f==="final")}const a="POST",c=n.maxUploadRetryTime,l=new En(t,a,s,c);return l.headers=i,l.errorHandler=si(e),l}const Ah=256*1024;function c0(n,e,t,r,i,s,a,c){const l=new Es(0,0);if(a?(l.current=a.current,l.total=a.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw IA();const d=l.total-l.current;let f=d;i>0&&(f=Math.min(f,i));const m=l.current,v=m+f;let R="";f===0?R="finalize":d===f?R="upload, finalize":R="upload";const P={"X-Goog-Upload-Command":R,"X-Goog-Upload-Offset":`${l.current}`},D=r.slice(m,v);if(D===null)throw xp();function k(z,ue){const Y=Rc(z,["active","final"]),E=l.current+f,g=r.size();let _;return Y==="final"?_=wc(e,s)(z,ue):_=null,new Es(E,g,Y==="final",_)}const j="POST",B=e.maxUploadRetryTime,M=new En(t,j,k,B);return M.headers=P,M.body=D.uploadData(),M.progressCallback=c||null,M.errorHandler=si(n),M}const De={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Uo(n){switch(n){case"running":case"pausing":case"canceling":return De.RUNNING;case"paused":return De.PAUSED;case"success":return De.SUCCESS;case"canceled":return De.CANCELED;case"error":return De.ERROR;default:return De.ERROR}}/**
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
 */class u0{constructor(e,t,r){if(kA(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Sn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class l0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=on.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=on.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=on.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw yr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw yr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw yr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw yr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw yr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class h0 extends l0{initXhr(){this.xhr_.responseType="text"}}function tn(){return new h0}/**
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
 */class d0{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=zp(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(te.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Up(i.status,[]))if(s)i=Dp();else{this.sleepTime=Math.max(this.sleepTime*2,fA),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(te.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=o0(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,tn,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const i=a0(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,tn,t,r);this._request=s,s.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ah*this._chunkMultiplier,t=new Es(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let a;try{a=c0(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const c=this._ref.storage._makeRequest(a,tn,i,s,!1);this._request=c,c.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ah*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=t0(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,tn,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=s0(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,tn,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Vp(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Uo(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,i){const s=new u0(t||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Uo(this._state)){case De.SUCCESS:Sn(this._resolve.bind(null,this.snapshot))();break;case De.CANCELED:case De.ERROR:const t=this._reject;Sn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Uo(this._state)){case De.RUNNING:case De.PAUSED:e.next&&Sn(e.next.bind(e,this.snapshot))();break;case De.SUCCESS:e.complete&&Sn(e.complete.bind(e))();break;case De.CANCELED:case De.ERROR:e.error&&Sn(e.error.bind(e,this._error))();break;default:e.error&&Sn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class fn{constructor(e,t){this._service=e,t instanceof Ue?this._location=t:this._location=Ue.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new fn(e,t)}get root(){const e=new Ue(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $p(this._location.path)}get storage(){return this._service}get parent(){const e=GA(this._location.path);if(e===null)return null;const t=new Ue(this._location.bucket,e);return new fn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw RA(e)}}function f0(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new d0(n,new Nt(e),t)}function p0(n){n._throwIfRoot("getDownloadURL");const e=n0(n.storage,n._location,zp());return n.storage.makeRequestWithTokens(e,tn).then(t=>{if(t===null)throw wA();return t})}function m0(n){n._throwIfRoot("deleteObject");const e=r0(n.storage,n._location);return n.storage.makeRequestWithTokens(e,tn)}function g0(n,e){const t=KA(n._location.path,e),r=new Ue(n._location.bucket,t);return new fn(n.storage,r)}/**
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
 */function _0(n){return/^[A-Za-z]+:\/\//.test(n)}function y0(n,e){return new fn(n,e)}function Kp(n,e){if(n instanceof bc){const t=n;if(t._bucket==null)throw EA();const r=new fn(t,t._bucket);return e!=null?Kp(r,e):r}else return e!==void 0?g0(n,e):n}function v0(n,e){if(e&&_0(e)){if(n instanceof bc)return y0(n,e);throw Ea("To use ref(service, url), the first argument must be a Storage instance.")}else return Kp(n,e)}function Rh(n,e){const t=e?.[Op];return t==null?null:Ue.makeFromBucketSpec(t,n)}function T0(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:ud(i,n.app.options.projectId))}class bc{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Np,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hA,this._maxUploadRetryTime=dA,this._requests=new Set,i!=null?this._bucket=Ue.makeFromBucketSpec(i,this._host):this._bucket=Rh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ue.makeFromBucketSpec(this._url,e):this._bucket=Rh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new bA(Lp());{const a=MA(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const bh="@firebase/storage",Sh="0.13.7";/**
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
 */const Qp="storage";function US(n,e,t){return n=ne(n),f0(n,e,t)}function FS(n){return n=ne(n),p0(n)}function jS(n){return n=ne(n),m0(n)}function BS(n,e){return n=ne(n),v0(n,e)}function E0(n=Qr(),e){n=ne(n);const r=yt(n,Qp).getImmediate({identifier:e}),i=od("storage");return i&&I0(r,...i),r}function I0(n,e,t,r={}){T0(n,e,t,r)}function w0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new bc(t,r,i,e,gn)}function A0(){$e(new Be(Qp,w0,"PUBLIC").setMultipleInstances(!0)),Se(bh,Sh,""),Se(bh,Sh,"esm2017")}A0();var Ia,Ph,Ks=function(){var n=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(n&&n.responseStart>0&&n.responseStart<performance.now())return n},Xp=function(n){if(document.readyState==="loading")return"loading";var e=Ks();if(e){if(n<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||n<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||n<e.domComplete)return"dom-content-loaded"}return"complete"},R0=function(n){var e=n.nodeName;return n.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},Sc=function(n,e){var t="";try{for(;n&&n.nodeType!==9;){var r=n,i=r.id?"#"+r.id:R0(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(t.length+i.length>(e||100)-1)return t||i;if(t=t?i+">"+t:i,r.id)break;n=r.parentNode}}catch{}return t},Yp=-1,b0=function(){return Yp},oi=function(n){addEventListener("pageshow",function(e){e.persisted&&(Yp=e.timeStamp,n(e))},!0)},Pc=function(){var n=Ks();return n&&n.activationStart||0},Ht=function(n,e){var t=Ks(),r="navigate";return b0()>=0?r="back-forward-cache":t&&(document.prerendering||Pc()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:n,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},er=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver(function(i){Promise.resolve().then(function(){e(i.getEntries())})});return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch{}},Wt=function(n,e,t,r){var i,s;return function(a){e.value>=0&&(a||r)&&((s=e.value-(i||0))||i===void 0)&&(i=e.value,e.delta=s,e.rating=function(c,l){return c>l[1]?"poor":c>l[0]?"needs-improvement":"good"}(e.value,t),n(e))}},Cc=function(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})},Qs=function(n){document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&n()})},kc=function(n){var e=!1;return function(){e||(n(),e=!0)}},Dn=-1,Ch=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},Is=function(n){document.visibilityState==="hidden"&&Dn>-1&&(Dn=n.type==="visibilitychange"?n.timeStamp:0,S0())},kh=function(){addEventListener("visibilitychange",Is,!0),addEventListener("prerenderingchange",Is,!0)},S0=function(){removeEventListener("visibilitychange",Is,!0),removeEventListener("prerenderingchange",Is,!0)},Jp=function(){return Dn<0&&(Dn=Ch(),kh(),oi(function(){setTimeout(function(){Dn=Ch(),kh()},0)})),{get firstHiddenTime(){return Dn}}},Nc=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},Nh=[1800,3e3],P0=function(n,e){e=e||{},Nc(function(){var t,r=Jp(),i=Ht("FCP"),s=er("paint",function(a){a.forEach(function(c){c.name==="first-contentful-paint"&&(s.disconnect(),c.startTime<r.firstHiddenTime&&(i.value=Math.max(c.startTime-Pc(),0),i.entries.push(c),t(!0)))})});s&&(t=Wt(n,i,Nh,e.reportAllChanges),oi(function(a){i=Ht("FCP"),t=Wt(n,i,Nh,e.reportAllChanges),Cc(function(){i.value=performance.now()-a.timeStamp,t(!0)})}))})},Oh=[.1,.25],C0=function(n,e){(function(t,r){r=r||{},P0(kc(function(){var i,s=Ht("CLS",0),a=0,c=[],l=function(f){f.forEach(function(m){if(!m.hadRecentInput){var v=c[0],R=c[c.length-1];a&&m.startTime-R.startTime<1e3&&m.startTime-v.startTime<5e3?(a+=m.value,c.push(m)):(a=m.value,c=[m])}}),a>s.value&&(s.value=a,s.entries=c,i())},d=er("layout-shift",l);d&&(i=Wt(t,s,Oh,r.reportAllChanges),Qs(function(){l(d.takeRecords()),i(!0)}),oi(function(){a=0,s=Ht("CLS",0),i=Wt(t,s,Oh,r.reportAllChanges),Cc(function(){return i()})}),setTimeout(i,0))}))})(function(t){var r=function(i){var s,a={};if(i.entries.length){var c=i.entries.reduce(function(d,f){return d&&d.value>f.value?d:f});if(c&&c.sources&&c.sources.length){var l=(s=c.sources).find(function(d){return d.node&&d.node.nodeType===1})||s[0];l&&(a={largestShiftTarget:Sc(l.node),largestShiftTime:c.startTime,largestShiftValue:c.value,largestShiftSource:l,largestShiftEntry:c,loadState:Xp(c.startTime)})}}return Object.assign(i,{attribution:a})}(t);n(r)},e)},Zp=0,Fo=1/0,Li=0,k0=function(n){n.forEach(function(e){e.interactionId&&(Fo=Math.min(Fo,e.interactionId),Li=Math.max(Li,e.interactionId),Zp=Li?(Li-Fo)/7+1:0)})},em=function(){return Ia?Zp:performance.interactionCount||0},N0=function(){"interactionCount"in performance||Ia||(Ia=er("event",k0,{type:"event",buffered:!0,durationThreshold:0}))},Ge=[],Or=new Map,tm=0,O0=function(){var n=Math.min(Ge.length-1,Math.floor((em()-tm)/50));return Ge[n]},nm=[],D0=function(n){if(nm.forEach(function(i){return i(n)}),n.interactionId||n.entryType==="first-input"){var e=Ge[Ge.length-1],t=Or.get(n.interactionId);if(t||Ge.length<10||n.duration>e.latency){if(t)n.duration>t.latency?(t.entries=[n],t.latency=n.duration):n.duration===t.latency&&n.startTime===t.entries[0].startTime&&t.entries.push(n);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};Or.set(r.id,r),Ge.push(r)}Ge.sort(function(i,s){return s.latency-i.latency}),Ge.length>10&&Ge.splice(10).forEach(function(i){return Or.delete(i.id)})}}},Oc=function(n){var e=self.requestIdleCallback||self.setTimeout,t=-1;return n=kc(n),document.visibilityState==="hidden"?n():(t=e(n),Qs(n)),t},Dh=[200,500],V0=function(n,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},Nc(function(){var t;N0();var r,i=Ht("INP"),s=function(c){Oc(function(){c.forEach(D0);var l=O0();l&&l.latency!==i.value&&(i.value=l.latency,i.entries=l.entries,r())})},a=er("event",s,{durationThreshold:(t=e.durationThreshold)!==null&&t!==void 0?t:40});r=Wt(n,i,Dh,e.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),Qs(function(){s(a.takeRecords()),r(!0)}),oi(function(){tm=em(),Ge.length=0,Or.clear(),i=Ht("INP"),r=Wt(n,i,Dh,e.reportAllChanges)}))}))},Un=[],Ot=[],wa=0,Dc=new WeakMap,Fn=new Map,Aa=-1,x0=function(n){Un=Un.concat(n),rm()},rm=function(){Aa<0&&(Aa=Oc(L0))},L0=function(){Fn.size>10&&Fn.forEach(function(a,c){Or.has(c)||Fn.delete(c)});var n=Ge.map(function(a){return Dc.get(a.entries[0])}),e=Ot.length-50;Ot=Ot.filter(function(a,c){return c>=e||n.includes(a)});for(var t=new Set,r=0;r<Ot.length;r++){var i=Ot[r];im(i.startTime,i.processingEnd).forEach(function(a){t.add(a)})}var s=Un.length-1-50;Un=Un.filter(function(a,c){return a.startTime>wa&&c>s||t.has(a)}),Aa=-1};nm.push(function(n){n.interactionId&&n.target&&!Fn.has(n.interactionId)&&Fn.set(n.interactionId,n.target)},function(n){var e,t=n.startTime+n.duration;wa=Math.max(wa,n.processingEnd);for(var r=Ot.length-1;r>=0;r--){var i=Ot[r];if(Math.abs(t-i.renderTime)<=8){(e=i).startTime=Math.min(n.startTime,e.startTime),e.processingStart=Math.min(n.processingStart,e.processingStart),e.processingEnd=Math.max(n.processingEnd,e.processingEnd),e.entries.push(n);break}}e||(e={startTime:n.startTime,processingStart:n.processingStart,processingEnd:n.processingEnd,renderTime:t,entries:[n]},Ot.push(e)),(n.interactionId||n.entryType==="first-input")&&Dc.set(n,e),rm()});var im=function(n,e){for(var t,r=[],i=0;t=Un[i];i++)if(!(t.startTime+t.duration<n)){if(t.startTime>e)break;r.push(t)}return r},M0=function(n,e){Ph||(Ph=er("long-animation-frame",x0)),V0(function(t){var r=function(i){var s=i.entries[0],a=Dc.get(s),c=s.processingStart,l=a.processingEnd,d=a.entries.sort(function(k,j){return k.processingStart-j.processingStart}),f=im(s.startTime,l),m=i.entries.find(function(k){return k.target}),v=m&&m.target||Fn.get(s.interactionId),R=[s.startTime+s.duration,l].concat(f.map(function(k){return k.startTime+k.duration})),P=Math.max.apply(Math,R),D={interactionTarget:Sc(v),interactionTargetElement:v,interactionType:s.name.startsWith("key")?"keyboard":"pointer",interactionTime:s.startTime,nextPaintTime:P,processedEventEntries:d,longAnimationFrameEntries:f,inputDelay:c-s.startTime,processingDuration:l-c,presentationDelay:Math.max(P-l,0),loadState:Xp(s.startTime)};return Object.assign(i,{attribution:D})}(t);n(r)},e)},Vh=[2500,4e3],jo={},U0=function(n,e){(function(t,r){r=r||{},Nc(function(){var i,s=Jp(),a=Ht("LCP"),c=function(f){r.reportAllChanges||(f=f.slice(-1)),f.forEach(function(m){m.startTime<s.firstHiddenTime&&(a.value=Math.max(m.startTime-Pc(),0),a.entries=[m],i())})},l=er("largest-contentful-paint",c);if(l){i=Wt(t,a,Vh,r.reportAllChanges);var d=kc(function(){jo[a.id]||(c(l.takeRecords()),l.disconnect(),jo[a.id]=!0,i(!0))});["keydown","click"].forEach(function(f){addEventListener(f,function(){return Oc(d)},{once:!0,capture:!0})}),Qs(d),oi(function(f){a=Ht("LCP"),i=Wt(t,a,Vh,r.reportAllChanges),Cc(function(){a.value=performance.now()-f.timeStamp,jo[a.id]=!0,i(!0)})})}})})(function(t){var r=function(i){var s={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:i.value};if(i.entries.length){var a=Ks();if(a){var c=a.activationStart||0,l=i.entries[i.entries.length-1],d=l.url&&performance.getEntriesByType("resource").filter(function(P){return P.name===l.url})[0],f=Math.max(0,a.responseStart-c),m=Math.max(f,d?(d.requestStart||d.startTime)-c:0),v=Math.max(m,d?d.responseEnd-c:0),R=Math.max(v,l.startTime-c);s={element:Sc(l.element),timeToFirstByte:f,resourceLoadDelay:m-f,resourceLoadDuration:v-m,elementRenderDelay:R-v,navigationEntry:a,lcpEntry:l},l.url&&(s.url=l.url),d&&(s.lcpResourceEntry=d)}}return Object.assign(i,{attribution:s})}(t);n(r)},e)};const sm="@firebase/installations",Vc="0.6.13";/**
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
 */const om=1e4,am=`w:${Vc}`,cm="FIS_v2",F0="https://firebaseinstallations.googleapis.com/v1",j0=60*60*1e3,B0="installations",q0="Installations";/**
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
 */const $0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pn=new Kt(B0,q0,$0);function um(n){return n instanceof ze&&n.code.includes("request-failed")}/**
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
 */function lm({projectId:n}){return`${F0}/projects/${n}/installations`}function hm(n){return{token:n.token,requestStatus:2,expiresIn:H0(n.expiresIn),creationTime:Date.now()}}async function dm(n,e){const r=(await e.json()).error;return pn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fm({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function z0(n,{refreshToken:e}){const t=fm(n);return t.append("Authorization",W0(e)),t}async function pm(n){const e=await n();return e.status>=500&&e.status<600?n():e}function H0(n){return Number(n.replace("s","000"))}function W0(n){return`${cm} ${n}`}/**
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
 */async function G0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=lm(n),i=fm(n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:t,authVersion:cm,appId:n.appId,sdkVersion:am},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await pm(()=>fetch(r,c));if(l.ok){const d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:hm(d.authToken)}}else throw await dm("Create Installation",l)}/**
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
 */function mm(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function K0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Q0=/^[cdef][\w-]{21}$/,Ra="";function X0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Y0(n);return Q0.test(t)?t:Ra}catch{return Ra}}function Y0(n){return K0(n).substr(0,22)}/**
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
 */function Xs(n){return`${n.appName}!${n.appId}`}/**
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
 */const gm=new Map;function _m(n,e){const t=Xs(n);ym(t,e),J0(t,e)}function ym(n,e){const t=gm.get(n);if(t)for(const r of t)r(e)}function J0(n,e){const t=Z0();t&&t.postMessage({key:n,fid:e}),eR()}let rn=null;function Z0(){return!rn&&"BroadcastChannel"in self&&(rn=new BroadcastChannel("[Firebase] FID Change"),rn.onmessage=n=>{ym(n.data.key,n.data.fid)}),rn}function eR(){gm.size===0&&rn&&(rn.close(),rn=null)}/**
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
 */const tR="firebase-installations-database",nR=1,mn="firebase-installations-store";let Bo=null;function xc(){return Bo||(Bo=dd(tR,nR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(mn)}}})),Bo}async function ws(n,e){const t=Xs(n),i=(await xc()).transaction(mn,"readwrite"),s=i.objectStore(mn),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&_m(n,e.fid),e}async function vm(n){const e=Xs(n),r=(await xc()).transaction(mn,"readwrite");await r.objectStore(mn).delete(e),await r.done}async function Ys(n,e){const t=Xs(n),i=(await xc()).transaction(mn,"readwrite"),s=i.objectStore(mn),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&_m(n,c.fid),c}/**
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
 */async function Lc(n){let e;const t=await Ys(n.appConfig,r=>{const i=rR(r),s=iR(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Ra?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function rR(n){const e=n||{fid:X0(),registrationStatus:0};return Tm(e)}function iR(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(pn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=sR(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oR(n)}:{installationEntry:e}}async function sR(n,e){try{const t=await G0(n,e);return ws(n.appConfig,t)}catch(t){throw um(t)&&t.customData.serverCode===409?await vm(n.appConfig):await ws(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function oR(n){let e=await xh(n.appConfig);for(;e.registrationStatus===1;)await mm(100),e=await xh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Lc(n);return r||t}return e}function xh(n){return Ys(n,e=>{if(!e)throw pn.create("installation-not-found");return Tm(e)})}function Tm(n){return aR(n)?{fid:n.fid,registrationStatus:0}:n}function aR(n){return n.registrationStatus===1&&n.registrationTime+om<Date.now()}/**
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
 */async function cR({appConfig:n,heartbeatServiceProvider:e},t){const r=uR(n,t),i=z0(n,t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:am,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await pm(()=>fetch(r,c));if(l.ok){const d=await l.json();return hm(d)}else throw await dm("Generate Auth Token",l)}function uR(n,{fid:e}){return`${lm(n)}/${e}/authTokens:generate`}/**
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
 */async function Mc(n,e=!1){let t;const r=await Ys(n.appConfig,s=>{if(!Em(s))throw pn.create("not-registered");const a=s.authToken;if(!e&&dR(a))return s;if(a.requestStatus===1)return t=lR(n,e),s;{if(!navigator.onLine)throw pn.create("app-offline");const c=pR(s);return t=hR(n,c),c}});return t?await t:r.authToken}async function lR(n,e){let t=await Lh(n.appConfig);for(;t.authToken.requestStatus===1;)await mm(100),t=await Lh(n.appConfig);const r=t.authToken;return r.requestStatus===0?Mc(n,e):r}function Lh(n){return Ys(n,e=>{if(!Em(e))throw pn.create("not-registered");const t=e.authToken;return mR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function hR(n,e){try{const t=await cR(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ws(n.appConfig,r),t}catch(t){if(um(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await vm(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ws(n.appConfig,r)}throw t}}function Em(n){return n!==void 0&&n.registrationStatus===2}function dR(n){return n.requestStatus===2&&!fR(n)}function fR(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+j0}function pR(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function mR(n){return n.requestStatus===1&&n.requestTime+om<Date.now()}/**
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
 */async function gR(n){const e=n,{installationEntry:t,registrationPromise:r}=await Lc(e);return r?r.catch(console.error):Mc(e).catch(console.error),t.fid}/**
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
 */async function _R(n,e=!1){const t=n;return await yR(t),(await Mc(t,e)).token}async function yR(n){const{registrationPromise:e}=await Lc(n);e&&await e}/**
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
 */function vR(n){if(!n||!n.options)throw qo("App Configuration");if(!n.name)throw qo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw qo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function qo(n){return pn.create("missing-app-config-values",{valueName:n})}/**
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
 */const Im="installations",TR="installations-internal",ER=n=>{const e=n.getProvider("app").getImmediate(),t=vR(e),r=yt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},IR=n=>{const e=n.getProvider("app").getImmediate(),t=yt(e,Im).getImmediate();return{getId:()=>gR(t),getToken:i=>_R(t,i)}};function wR(){$e(new Be(Im,ER,"PUBLIC")),$e(new Be(TR,IR,"PRIVATE"))}wR();Se(sm,Vc);Se(sm,Vc,"esm2017");const Mh="@firebase/performance",ba="0.7.2";/**
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
 */const wm=ba,AR="FB-PERF-TRACE-START",RR="FB-PERF-TRACE-STOP",Sa="FB-PERF-TRACE-MEASURE",Am="_wt_",Rm="_fp",bm="_fcp",Sm="_fid",Pm="_lcp",bR="lcp_element",Cm="_inp",SR="inp_interactionTarget",km="_cls",PR="cls_largestShiftTarget",Nm="@firebase/performance/config",Om="@firebase/performance/configexpire",CR="performance",Dm="Performance";/**
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
 */const kR={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},Re=new Kt(CR,Dm,kR);/**
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
 */const Gt=new Kr(Dm);Gt.logLevel=W.INFO;/**
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
 */let $o,Vm;class fe{constructor(e){if(this.window=e,!e)throw Re.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay),this.onLCP=U0,this.onINP=M0,this.onCLS=C0}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,t,r){!this.performance||!this.performance.measure||this.performance.measure(e,t,r)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!Ca()?(Gt.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):Ss()?!0:(Gt.info("IndexedDB is not supported by current browser"),!1)}setupObserver(e,t){if(!this.PerformanceObserver)return;new this.PerformanceObserver(i=>{for(const s of i.getEntries())t(s)}).observe({entryTypes:[e]})}static getInstance(){return $o===void 0&&($o=new fe(Vm)),$o}}function NR(n){Vm=n}/**
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
 */let xm;function OR(n){const e=n.getId();return e.then(t=>{xm=t}),e}function Uc(){return xm}function DR(n){const e=n.getToken();return e.then(t=>{}),e}/**
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
 */function Uh(n,e){const t=n.length-e.length;if(t<0||t>1)throw Re.create("invalid String merger input");const r=[];for(let i=0;i<n.length;i++)r.push(n.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}/**
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
 */let zo;class Fe{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Uh("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Uh("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return zo===void 0&&(zo=new Fe),zo}}/**
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
 */var Dr;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.VISIBLE=1]="VISIBLE",n[n.HIDDEN=2]="HIDDEN"})(Dr||(Dr={}));const VR=["firebase_","google_","ga_"],xR=new RegExp("^[a-zA-Z]\\w*$"),LR=40,MR=100;function UR(){const n=fe.getInstance().navigator;return n?.serviceWorker?n.serviceWorker.controller?2:3:1}function FR(){switch(fe.getInstance().document.visibilityState){case"visible":return Dr.VISIBLE;case"hidden":return Dr.HIDDEN;default:return Dr.UNKNOWN}}function jR(){const e=fe.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function BR(n){return n.length===0||n.length>LR?!1:!VR.some(t=>n.startsWith(t))&&!!n.match(xR)}function qR(n){return n.length!==0&&n.length<=MR}/**
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
 */function Lm(n){var e;const t=(e=n.options)===null||e===void 0?void 0:e.appId;if(!t)throw Re.create("no app id");return t}function $R(n){var e;const t=(e=n.options)===null||e===void 0?void 0:e.projectId;if(!t)throw Re.create("no project id");return t}function zR(n){var e;const t=(e=n.options)===null||e===void 0?void 0:e.apiKey;if(!t)throw Re.create("no api key");return t}/**
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
 */const HR="0.0.1",We={loggingEnabled:!0},WR="FIREBASE_INSTALLATIONS_AUTH";function GR(n,e){const t=KR();return t?(Fh(t),Promise.resolve()):YR(n,e).then(Fh).then(r=>QR(r),()=>{})}function KR(){const n=fe.getInstance().localStorage;if(!n)return;const e=n.getItem(Om);if(!e||!JR(e))return;const t=n.getItem(Nm);if(t)try{return JSON.parse(t)}catch{return}}function QR(n){const e=fe.getInstance().localStorage;!n||!e||(e.setItem(Nm,JSON.stringify(n)),e.setItem(Om,String(Date.now()+Fe.getInstance().configTimeToLive*60*60*1e3)))}const XR="Could not fetch config, will use default configs";function YR(n,e){return DR(n.installations).then(t=>{const r=$R(n.app),i=zR(n.app),s=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,a=new Request(s,{method:"POST",headers:{Authorization:`${WR} ${t}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:t,app_id:Lm(n.app),app_version:wm,sdk_version:HR})});return fetch(a).then(c=>{if(c.ok)return c.json();throw Re.create("RC response not ok")})}).catch(()=>{Gt.info(XR)})}function Fh(n){if(!n)return n;const e=Fe.getInstance(),t=n.entries||{};return t.fpr_enabled!==void 0?e.loggingEnabled=String(t.fpr_enabled)==="true":e.loggingEnabled=We.loggingEnabled,t.fpr_log_source?e.logSource=Number(t.fpr_log_source):We.logSource&&(e.logSource=We.logSource),t.fpr_log_endpoint_url?e.logEndPointUrl=t.fpr_log_endpoint_url:We.logEndPointUrl&&(e.logEndPointUrl=We.logEndPointUrl),t.fpr_log_transport_key?e.transportKey=t.fpr_log_transport_key:We.transportKey&&(e.transportKey=We.transportKey),t.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(t.fpr_vc_network_request_sampling_rate):We.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=We.networkRequestsSamplingRate),t.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(t.fpr_vc_trace_sampling_rate):We.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=We.tracesSamplingRate),e.logTraceAfterSampling=jh(e.tracesSamplingRate),e.logNetworkAfterSampling=jh(e.networkRequestsSamplingRate),n}function JR(n){return Number(n)>Date.now()}function jh(n){return Math.random()<=n}/**
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
 */let Fc=1,Ho;function Mm(n){return Fc=2,Ho=Ho||eb(n),Ho}function ZR(){return Fc===3}function eb(n){return tb().then(()=>OR(n.installations)).then(e=>GR(n,e)).then(()=>Bh(),()=>Bh())}function tb(){const n=fe.getInstance().document;return new Promise(e=>{if(n&&n.readyState!=="complete"){const t=()=>{n.readyState==="complete"&&(n.removeEventListener("readystatechange",t),e())};n.addEventListener("readystatechange",t)}else e()})}function Bh(){Fc=3}/**
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
 */const Um=10*1e3,nb=5.5*1e3,rb=1e3,Fm=3;let Ji=Fm,an=[],qh=!1;function ib(){qh||(jc(nb),qh=!0)}function jc(n){setTimeout(()=>{Ji<=0||(an.length>0&&jm(),jc(Um))},n)}function jm(){const n=an.splice(0,rb),e=n.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),t={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Fe.getInstance().logSource,log_event:e};sb(t).then(()=>{Ji=Fm}).catch(()=>{an=[...n,...an],Ji--,Gt.info(`Tries left: ${Ji}.`),jc(Um)})}function sb(n){const e=Fe.getInstance().getFlTransportFullUrl(),t=JSON.stringify(n);return navigator.sendBeacon&&navigator.sendBeacon(e,t)?Promise.resolve():fetch(e,{method:"POST",body:t,keepalive:!0}).then()}function ob(n){if(!n.eventTime||!n.message)throw Re.create("invalid cc log");an=[...an,n]}function ab(n){return(...e)=>{const t=n(...e);ob({message:t,eventTime:Date.now()})}}function cb(){for(;an.length>0;)jm()}/**
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
 */let Vr;function Bm(n,e){Vr||(Vr={send:ab(hb),flush:cb}),Vr.send(n,e)}function Mi(n){const e=Fe.getInstance();!e.instrumentationEnabled&&n.isAuto||!e.dataCollectionEnabled&&!n.isAuto||fe.getInstance().requiredApisAvailable()&&(ZR()?Wo(n):Mm(n.performanceController).then(()=>Wo(n),()=>Wo(n)))}function ub(){Vr&&Vr.flush()}function Wo(n){if(!Uc())return;const e=Fe.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||Bm(n,1)}function lb(n){const e=Fe.getInstance();if(!e.instrumentationEnabled)return;const t=n.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];t===r||t===i||!e.loggingEnabled||!e.logNetworkAfterSampling||Bm(n,0)}function hb(n,e){return e===0?db(n):fb(n)}function db(n){const e={url:n.url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},t={application_info:qm(n.performanceController.app),network_request_metric:e};return JSON.stringify(t)}function fb(n){const e={name:n.name,is_auto:n.isAuto,client_start_time_us:n.startTimeUs,duration_us:n.durationUs};Object.keys(n.counters).length!==0&&(e.counters=n.counters);const t=n.getAttributes();Object.keys(t).length!==0&&(e.custom_attributes=t);const r={application_info:qm(n.performanceController.app),trace_metric:e};return JSON.stringify(r)}function qm(n){return{google_app_id:Lm(n),app_instance_id:Uc(),web_app_info:{sdk_version:wm,page_url:fe.getInstance().getUrl(),service_worker_status:UR(),visibility_state:FR(),effective_connection_type:jR()},application_process_state:0}}/**
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
 */function $h(n,e){const t=e;if(!t||t.responseStart===void 0)return;const r=fe.getInstance().getTimeOrigin(),i=Math.floor((t.startTime+r)*1e3),s=t.responseStart?Math.floor((t.responseStart-t.startTime)*1e3):void 0,a=Math.floor((t.responseEnd-t.startTime)*1e3),c=t.name&&t.name.split("?")[0],l={performanceController:n,url:c,responsePayloadBytes:t.transferSize,startTimeUs:i,timeToResponseInitiatedUs:s,timeToResponseCompletedUs:a};lb(l)}/**
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
 */const pb=100,mb="_",gb=[Rm,bm,Sm,Pm,km,Cm];function _b(n,e){return n.length===0||n.length>pb?!1:e&&e.startsWith(Am)&&gb.indexOf(n)>-1||!n.startsWith(mb)}function yb(n){const e=Math.floor(n);return e<n&&Gt.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
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
 */class Wr{constructor(e,t,r=!1,i){this.performanceController=e,this.name=t,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=fe.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${AR}-${this.randomId}-${this.name}`,this.traceStopMark=`${RR}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${Sa}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw Re.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw Re.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Mi(this)}record(e,t,r){if(e<=0)throw Re.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw Re.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(t*1e3),this.startTimeUs=Math.floor(e*1e3),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(const i of Object.keys(r.metrics))isNaN(Number(r.metrics[i]))||(this.counters[i]=Math.floor(Number(r.metrics[i])));Mi(this)}incrementMetric(e,t=1){this.counters[e]===void 0?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){if(_b(e,this.name))this.counters[e]=yb(t??0);else throw Re.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const r=BR(e),i=qR(t);if(r&&i){this.customAttributes[e]=t;return}if(!r)throw Re.create("invalid attribute name",{attributeName:e});if(!i)throw Re.create("invalid attribute value",{attributeValue:t})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(t.duration*1e3),this.startTimeUs=Math.floor((t.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,t,r,i,s){const a=fe.getInstance().getUrl();if(!a)return;const c=new Wr(e,Am+a,!0),l=Math.floor(fe.getInstance().getTimeOrigin()*1e3);c.setStartTime(l),t&&t[0]&&(c.setDuration(Math.floor(t[0].duration*1e3)),c.putMetric("domInteractive",Math.floor(t[0].domInteractive*1e3)),c.putMetric("domContentLoadedEventEnd",Math.floor(t[0].domContentLoadedEventEnd*1e3)),c.putMetric("loadEventEnd",Math.floor(t[0].loadEventEnd*1e3)));const d="first-paint",f="first-contentful-paint";if(r){const m=r.find(R=>R.name===d);m&&m.startTime&&c.putMetric(Rm,Math.floor(m.startTime*1e3));const v=r.find(R=>R.name===f);v&&v.startTime&&c.putMetric(bm,Math.floor(v.startTime*1e3)),s&&c.putMetric(Sm,Math.floor(s*1e3))}this.addWebVitalMetric(c,Pm,bR,i.lcp),this.addWebVitalMetric(c,km,PR,i.cls),this.addWebVitalMetric(c,Cm,SR,i.inp),Mi(c),ub()}static addWebVitalMetric(e,t,r,i){i&&(e.putMetric(t,Math.floor(i.value*1e3)),i.elementAttribution&&e.putAttribute(r,i.elementAttribution))}static createUserTimingTrace(e,t){const r=new Wr(e,t,!1,t);Mi(r)}}/**
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
 */let Zi={},zh=!1,$m;function Hh(n){Uc()&&(setTimeout(()=>Tb(n),0),setTimeout(()=>vb(n),0),setTimeout(()=>Eb(n),0))}function vb(n){const e=fe.getInstance(),t=e.getEntriesByType("resource");for(const r of t)$h(n,r);e.setupObserver("resource",r=>$h(n,r))}function Tb(n){const e=fe.getInstance();"onpagehide"in window?e.document.addEventListener("pagehide",()=>Go(n)):e.document.addEventListener("unload",()=>Go(n)),e.document.addEventListener("visibilitychange",()=>{e.document.visibilityState==="hidden"&&Go(n)}),e.onFirstInputDelay&&e.onFirstInputDelay(t=>{$m=t}),e.onLCP(t=>{var r;Zi.lcp={value:t.value,elementAttribution:(r=t.attribution)===null||r===void 0?void 0:r.element}}),e.onCLS(t=>{var r;Zi.cls={value:t.value,elementAttribution:(r=t.attribution)===null||r===void 0?void 0:r.largestShiftTarget}}),e.onINP(t=>{var r;Zi.inp={value:t.value,elementAttribution:(r=t.attribution)===null||r===void 0?void 0:r.interactionTarget}})}function Eb(n){const e=fe.getInstance(),t=e.getEntriesByType("measure");for(const r of t)Wh(n,r);e.setupObserver("measure",r=>Wh(n,r))}function Wh(n,e){const t=e.name;t.substring(0,Sa.length)!==Sa&&Wr.createUserTimingTrace(n,t)}function Go(n){if(!zh){zh=!0;const e=fe.getInstance(),t=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");setTimeout(()=>{Wr.createOobTrace(n,t,r,Zi,$m)},0)}}/**
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
 */class Ib{constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}_init(e){this.initialized||(e?.dataCollectionEnabled!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),e?.instrumentationEnabled!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),fe.getInstance().requiredApisAvailable()?Ps().then(t=>{t&&(ib(),Mm(this).then(()=>Hh(this),()=>Hh(this)),this.initialized=!0)}).catch(t=>{Gt.info(`Environment doesn't support IndexedDB: ${t}`)}):Gt.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){Fe.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return Fe.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){Fe.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return Fe.getInstance().dataCollectionEnabled}}const wb="[DEFAULT]";function Ab(n=Qr()){return n=ne(n),yt(n,"performance").getImmediate()}const Rb=(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),r=n.getProvider("installations-internal").getImmediate();if(t.name!==wb)throw Re.create("FB not default");if(typeof window>"u")throw Re.create("no window");NR(window);const i=new Ib(t,r);return i._init(e),i};function bb(){$e(new Be("performance",Rb,"PUBLIC")),Se(Mh,ba),Se(Mh,ba,"esm2017")}bb();/**
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
 */const As="analytics",Sb="firebase_id",Pb="origin",Cb=60*1e3,kb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bc="https://www.googletagmanager.com/gtag/js";/**
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
 */const xe=new Kr("@firebase/analytics");/**
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
 */const Nb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},je=new Kt("analytics","Analytics",Nb);/**
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
 */function Ob(n){if(!n.startsWith(Bc)){const e=je.create("invalid-gtag-resource",{gtagURL:n});return xe.warn(e.message),""}return n}function zm(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Db(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Vb(n,e){const t=Db("firebase-js-sdk-policy",{createScriptURL:Ob}),r=document.createElement("script"),i=`${Bc}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function xb(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Lb(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await zm(t)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(c){xe.error(c)}n("config",i,s)}async function Mb(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await zm(t);for(const l of a){const d=c.find(m=>m.measurementId===l),f=d&&e[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){xe.error(s)}}function Ub(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[c,l]=a;await Mb(n,e,t,c,l)}else if(s==="config"){const[c,l]=a;await Lb(n,e,t,r,c,l)}else if(s==="consent"){const[c,l]=a;n("consent",c,l)}else if(s==="get"){const[c,l,d]=a;n("get",c,l,d)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){xe.error(c)}}return i}function Fb(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Ub(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function jb(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Bc)&&t.src.includes(n))return t;return null}/**
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
 */const Bb=30,qb=1e3;class $b{constructor(e={},t=qb){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Hm=new $b;function zb(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Hb(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:zb(r)},s=kb.replace("{app-id}",t),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw je.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function Wb(n,e=Hm,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw je.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw je.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Qb;return setTimeout(async()=>{c.abort()},Cb),Wm({appId:r,apiKey:i,measurementId:s},a,c,e)}async function Wm(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Hm){var s;const{appId:a,measurementId:c}=n;try{await Gb(r,e)}catch(l){if(c)return xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:a,measurementId:c};throw l}try{const l=await Hb(n);return i.deleteThrottleMetadata(a),l}catch(l){const d=l;if(!Kb(d)){if(i.deleteThrottleMetadata(a),c)return xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:a,measurementId:c};throw l}const f=Number((s=d?.customData)===null||s===void 0?void 0:s.httpStatus)===503?Gu(t,i.intervalMillis,Bb):Gu(t,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return i.setThrottleMetadata(a,m),xe.debug(`Calling attemptFetch again in ${f} millis`),Wm(n,m,r,i)}}function Gb(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Kb(n){if(!(n instanceof ze)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Qb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Xb(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});n("event",t,a)}}/**
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
 */async function Yb(){if(Ss())try{await Ps()}catch(n){return xe.warn(je.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return xe.warn(je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Jb(n,e,t,r,i,s,a){var c;const l=Wb(n);l.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&xe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>xe.error(R)),e.push(l);const d=Yb().then(R=>{if(R)return r.getId()}),[f,m]=await Promise.all([l,d]);jb(s)||Vb(s,f.measurementId),i("js",new Date);const v=(c=a?.config)!==null&&c!==void 0?c:{};return v[Pb]="firebase",v.update=!0,m!=null&&(v[Sb]=m),i("config",f.measurementId,v),f.measurementId}/**
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
 */class Zb{constructor(e){this.app=e}_delete(){return delete xr[this.app.options.appId],Promise.resolve()}}let xr={},Gh=[];const Kh={};let Ko="dataLayer",eS="gtag",Qh,Gm,Xh=!1;function tS(){const n=[];if(Pa()&&n.push("This is a browser extension environment."),Ca()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=je.create("invalid-analytics-context",{errorInfo:e});xe.warn(t.message)}}function nS(n,e,t){tS();const r=n.options.appId;if(!r)throw je.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw je.create("no-api-key");if(xr[r]!=null)throw je.create("already-exists",{id:r});if(!Xh){xb(Ko);const{wrappedGtag:s,gtagCore:a}=Fb(xr,Gh,Kh,Ko,eS);Gm=s,Qh=a,Xh=!0}return xr[r]=Jb(n,Gh,Kh,e,Qh,Ko,t),new Zb(n)}function rS(n=Qr()){n=ne(n);const e=yt(n,As);return e.isInitialized()?e.getImmediate():iS(n)}function iS(n,e={}){const t=yt(n,As);if(t.isInitialized()){const i=t.getImmediate();if(Ut(e,t.getOptions()))return i;throw je.create("already-initialized")}return t.initialize({options:e})}async function sS(){if(Pa()||!Ca()||!Ss())return!1;try{return await Ps()}catch{return!1}}function oS(n,e,t,r){n=ne(n),Xb(Gm,xr[n.app.options.appId],e,t,r).catch(i=>xe.error(i))}const Yh="@firebase/analytics",Jh="0.10.12";function aS(){$e(new Be(As,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return nS(r,i,t)},"PUBLIC")),$e(new Be("analytics-internal",n,"PRIVATE")),Se(Yh,Jh),Se(Yh,Jh,"esm2017");function n(e){try{const t=e.getProvider(As).getImmediate();return{logEvent:(r,i,s)=>oS(t,r,i,s)}}catch(t){throw je.create("interop-component-reg-failed",{reason:t})}}}aS();const cS={apiKey:"AIzaSyDk-_hxBNa1tRCosMO-FBplY5sGSj0jhEU",authDomain:"comet-scanner-template-wizard.firebaseapp.com",projectId:"comet-scanner-template-wizard",storageBucket:"comet-scanner-template-wizard.firebasestorage.app",messagingSenderId:"1073315238272",appId:"1:1073315238272:web:13e744ae6d06fa0949f165",measurementId:"G-D0CQ6B72BS"},ai=fd(cS),vr=qT(ai),Ui=jw(ai),qS=E0(ai);Ab(ai);sS().then(n=>{n?(rS(ai),console.log("Firebase Analytics initialized.")):console.log("Firebase Analytics is not supported in this environment.")});const Km=le.createContext(void 0);function Qm({children:n}){const[e,t]=le.useState(null),[r,i]=le.useState(!0);le.useEffect(()=>{const v=kv(vr,async R=>{i(!0);try{if(R){const P=xo(Ui,"users",R.uid),D=await sA(P);let k=null;D.exists()?k=D.data():console.warn("User document not found in Firestore for UID:",R.uid),t({...R,profile:k,isOwner:k?.isOwner,username:k?.username})}else t(null)}catch(P){console.error("Error fetching user profile:",P)}i(!1)});return()=>v()},[]);const m={currentUser:e,signup:async(v,R,P)=>{if(P){const j=Zw(Fw(Ui,"users"),eA("isOwner","==",!0));if((await oA(j)).docs.length>0)throw new Error("An owner account already exists.")}const k=(await bv(vr,v,R)).user;if(k){const j=xo(Ui,"users",k.uid),B={username:v,isOwner:P,createdAt:Eh(),permissions:P?{contentManagement:!0,userManagement:!0,systemConfiguration:!0,mediaUploads:!0,securitySettings:!0,siteCustomization:!0}:{contentManagement:!1,userManagement:!1,systemConfiguration:!1,mediaUploads:!0,securitySettings:!1,siteCustomization:!1}};await Th(j,B)}else throw new Error("Failed to create user account.")},logout:async()=>{await Nv(vr)},login:async(v,R)=>{try{await Sv(vr,v,R)}catch(P){throw P}},isLoading:r,saveTemplate:async(v,R,P)=>{if(P){const D=xo(Ui,"templates");await Th(D,{userId:P.uid,templateName:v,templateData:R,createdAt:Eh()})}else throw new Error("Failed to create user account.")},guestLogin:async()=>{i(!0),t({uid:"guest-user",profile:null,isAnonymous:!0}),i(!1)},sendPasswordResetEmail:async v=>{try{await Rv(vr,v)}catch(R){throw R}}};return N.jsx(Km.Provider,{value:m,children:!r&&n})}function Xm(){const n=le.useContext(Km);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n}const uS={currentStep:1,progress:{step1Complete:!1},answers:{},sections:[],questions:[]},Ym=le.createContext(void 0);function lS(n,e){switch(e.type){case"SET_STEP":return{...n,currentStep:e.payload};case"SET_PROGRESS":return{...n,progress:{...n.progress,...e.payload}};case"SET_ANSWER":return{...n,answers:{...n.answers,[e.payload.questionId]:e.payload.value}};case"SET_SECTIONS":return{...n,sections:e.payload};case"SET_QUESTIONS":return{...n,questions:e.payload};default:return n}}function hS({children:n}){const[e,t]=le.useReducer(lS,uS);return N.jsx(Ym.Provider,{value:{state:e,dispatch:t},children:n})}function $S(){const n=le.useContext(Ym);if(n===void 0)throw new Error("useWizard must be used within a WizardProvider");return n}const Jm=le.createContext(void 0),dS={initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},fS=({type:n,message:e})=>{const t={success:"bg-green-500",error:"bg-red-500",info:"bg-blue-500"}[n],r={success:N.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),error:N.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}),info:N.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}[n];return N.jsxs(sn.div,{variants:dS,initial:"initial",animate:"animate",exit:"exit",className:`${t} text-white p-4 rounded-lg shadow-lg flex items-center space-x-3`,children:[N.jsx("span",{className:"flex-shrink-0",children:r}),N.jsx("p",{className:"text-sm font-medium",children:e})]})},pS=({children:n})=>{const[e,t]=le.useState([]),r=le.useCallback((i,s)=>{const a=Date.now().toString();t(c=>[...c,{id:a,type:i,message:s}]),setTimeout(()=>{t(c=>c.filter(l=>l.id!==a))},5e3)},[]);return N.jsxs(Jm.Provider,{value:{showToast:r},children:[n,N.jsx("div",{className:"fixed top-4 right-4 z-50 space-y-2",children:N.jsx(Qo,{mode:"popLayout",children:e.map(i=>N.jsx(fS,{type:i.type,message:i.message},i.id))})})]})},zS=()=>{const n=le.useContext(Jm);if(!n)throw new Error("useToast must be used within a ToastProvider");return n},Zm=le.createContext(void 0),mS=({children:n})=>{const[e,t]=le.useState(()=>localStorage.getItem("theme")||"dark");le.useEffect(()=>{localStorage.setItem("theme",e),document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(e)},[e]);const r=()=>{t(i=>i==="dark"?"light":"dark")};return N.jsx(Zm.Provider,{value:{theme:e,toggleTheme:r},children:n})},eg=()=>{const n=le.useContext(Zm);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},Zh=({children:n,requireOwner:e=!1})=>{const{currentUser:t,isLoading:r}=Xm(),i=ed();return r?N.jsx("div",{className:"min-h-screen flex items-center justify-center",children:N.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[N.jsxs("svg",{className:"animate-spin h-8 w-8 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[N.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),N.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),N.jsx("span",{className:"text-gray-600",children:"Loading..."})]})}):t?e&&!t.isOwner?N.jsx(es,{to:"/scanner",state:{error:"Owner access required"},replace:!0}):N.jsx(N.Fragment,{children:n}):N.jsx(es,{to:"/login",state:{from:i},replace:!0})},gS=()=>{const{theme:n,toggleTheme:e}=eg();return N.jsx(sn.button,{onClick:e,className:`
        fixed top-4 right-4 p-2 rounded-full
        flex items-center justify-center
        backdrop-blur-sm
        ${n==="dark"?"bg-gray-800/80 text-yellow-400 hover:bg-gray-700/80":"bg-white/80 text-gray-800 hover:bg-gray-100/80"}
        shadow-lg
        transition-colors
        z-50
      `,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":"Toggle theme",children:n==="dark"?N.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):N.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})},Fi=({children:n})=>{const{currentUser:e,logout:t}=Xm(),{theme:r}=eg(),i=Fg(),s=ed(),a=async()=>{try{await t(),i("/login")}catch(l){console.error("Failed to log out:",l)}},c=l=>s.pathname.startsWith(l);return N.jsx("div",{className:`min-h-screen ${r==="dark"?"dark":""}`,children:N.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200",children:[N.jsx("header",{className:"bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"h-16 flex items-center justify-between",children:[N.jsx("div",{className:"flex items-center",children:N.jsx(sn.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-2xl font-bold text-gray-900 dark:text-white",children:"COMET Scanner Wizard"})}),N.jsx(Qo,{mode:"wait",children:e&&N.jsxs(sn.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:"flex items-center space-x-4",children:[N.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:[e.isOwner&&N.jsx("span",{className:"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium mr-2",children:"Owner"}),N.jsx("span",{children:e.username})]}),N.jsx("button",{onClick:a,className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"Logout"})]})})]}),e&&N.jsxs("nav",{className:"flex space-x-8 -mb-px",children:[N.jsx(qu,{to:"/scanner",className:`border-b-2 py-4 px-1 inline-flex items-center text-sm font-medium transition-colors ${c("/scanner")?"border-blue-500 text-blue-600 dark:text-blue-400":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}`,children:"Scanner Templates"}),e.isOwner&&N.jsx(qu,{to:"/admin",className:`border-b-2 py-4 px-1 inline-flex items-center text-sm font-medium transition-colors ${c("/admin")?"border-blue-500 text-blue-600 dark:text-blue-400":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}`,children:"Admin Dashboard"})]})]})}),N.jsxs("main",{className:"relative",children:[N.jsx(gS,{}),N.jsx(Qo,{mode:"wait",children:N.jsx(sn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},children:n},"content")})]}),N.jsx("footer",{className:"bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[N.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:["© ",new Date().getFullYear()," COMET Scanner Wizard"]}),N.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Version 1.0.0"})]})})]})})},_S=({size:n="md",color:e="primary",fullScreen:t=!1,text:r})=>{const i={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"}[n],s={primary:"text-blue-600",white:"text-white",gray:"text-gray-600"}[e],a=N.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[N.jsx(sn.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},children:N.jsxs("svg",{className:`${i} ${s}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[N.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),N.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),r&&N.jsx("span",{className:`text-sm font-medium ${s}`,children:r})]});return t?N.jsx("div",{className:"fixed inset-0 bg-gray-50/80 backdrop-blur-sm flex items-center justify-center z-50",children:a}):a},ji=({message:n="Loading..."})=>N.jsx("div",{className:"min-h-[200px] flex flex-col items-center justify-center p-4",children:N.jsxs(sn.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"flex flex-col items-center",children:[N.jsx(_S,{size:"lg"}),N.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400 font-medium",children:n})]})}),yS=()=>{const[n,e]=le.useState(!1),[t,r]=le.useState([]);return le.useEffect(()=>{},[]),null},{lazy:Js,Suspense:Bi}=td,vS=Js(()=>Rs(()=>import("./Login-CAuKOxfA.js"),__vite__mapDeps([0,1,2]))),TS=Js(()=>Rs(()=>import("./Signup-k5o18S54.js"),__vite__mapDeps([3,1,2]))),ES=Js(()=>Rs(()=>import("./ScannerWizard-CEoCekJr.js"),__vite__mapDeps([4,1,2,5]))),IS=Js(()=>Rs(()=>import("./AdminDashboard-XGv6VzFc.js"),__vite__mapDeps([6,1,2,5])));function wS(){return N.jsx(jg,{children:N.jsx(Qm,{children:N.jsx(hS,{children:N.jsx(mS,{children:N.jsxs(pS,{children:[N.jsx(yS,{}),N.jsxs(Bg,{children:[N.jsx(bn,{path:"/login",element:N.jsx(Fi,{children:N.jsx(Bi,{fallback:N.jsx(ji,{message:"Loading login page..."}),children:N.jsx(vS,{})})})}),N.jsx(bn,{path:"/signup",element:N.jsx(Fi,{children:N.jsx(Bi,{fallback:N.jsx(ji,{message:"Loading signup page..."}),children:N.jsx(TS,{})})})}),N.jsx(bn,{path:"/scanner",element:N.jsx(Zh,{children:N.jsx(Fi,{children:N.jsx(Bi,{fallback:N.jsx(ji,{message:"Loading scanner wizard..."}),children:N.jsx(ES,{})})})})}),N.jsx(bn,{path:"/admin",element:N.jsx(Zh,{requireOwner:!0,children:N.jsx(Fi,{children:N.jsx(Bi,{fallback:N.jsx(ji,{message:"Loading admin dashboard..."}),children:N.jsx(IS,{})})})})}),N.jsx(bn,{path:"/",element:N.jsx(es,{to:"/scanner",replace:!0})}),N.jsx(bn,{path:"*",element:N.jsx(es,{to:"/scanner",replace:!0})})]})]})})})})})}const AS=()=>{console.log("Admin account initialization is now handled through Firebase Authentication")},RS=()=>{AS();const n=localStorage.getItem("user_ChasinAlts");if(!n)return console.error("Admin account initialization failed"),!1;try{const e=JSON.parse(n);return e.username!=="ChasinAlts"?(console.error("Admin username mismatch"),!1):e.isOwner?["contentManagement","userManagement","systemConfiguration","mediaUploads","securitySettings","siteCustomization"].every(i=>e.permissions[i])?!0:(console.error("Admin missing required permissions"),!1):(console.error("Admin is not set as owner"),!1)}catch(e){return console.error("Error verifying admin setup:",e),!1}},bS="serviceWorker"in navigator,SS=()=>{if(!bS){console.log("Service workers are not supported in this browser");return}window.addEventListener("load",()=>{const n=`${window.location.origin}/service-worker.js`;navigator.serviceWorker.register(n).then(e=>{console.log("Service Worker registered with scope:",e.scope),e.update(),e.onupdatefound=()=>{const t=e.installing;t&&(t.onstatechange=()=>{t.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),window.dispatchEvent(new CustomEvent("swUpdate"))):console.log("Content is cached for offline use."))})}}).catch(e=>{console.error("Error during service worker registration:",e)})})},PS={sampleRate:.1},CS=()=>{if(!kS()||typeof window>"u")return;window.EventTarget&&typeof EventTarget.prototype.setMaxListeners=="function"&&EventTarget.prototype.setMaxListeners(20),NS();const n=()=>{setTimeout(()=>{DS()},1e3),window.removeEventListener("load",n)};window.addEventListener("load",n)},kS=()=>Math.random()<PS.sampleRate,NS=()=>{if(window.PerformanceObserver)try{new PerformanceObserver(i=>{const s=i.getEntries(),a=s[s.length-1];a&&bt({name:"largest-contentful-paint",value:a.startTime,category:"paint"})}).observe({type:"largest-contentful-paint",buffered:!0}),new PerformanceObserver(i=>{i.getEntries().forEach(a=>{a.name==="first-input"&&bt({name:"first-input-delay",value:a.processingStart-a.startTime,category:"interaction"})})}).observe({type:"first-input",buffered:!0}),new PerformanceObserver(i=>{let s=0;i.getEntries().forEach(a=>{a.hadRecentInput||(s+=a.value)}),bt({name:"cumulative-layout-shift",value:s,category:"layout"})}).observe({type:"layout-shift",buffered:!0}),new PerformanceObserver(i=>{const s=i.getEntries()[0];if(s){const a=s;bt({name:"time-to-first-byte",value:a.responseStart-a.requestStart,category:"navigation"}),bt({name:"dom-content-loaded",value:a.domContentLoadedEventEnd-a.fetchStart,category:"navigation"}),bt({name:"window-loaded",value:a.loadEventEnd-a.fetchStart,category:"navigation"})}}).observe({type:"navigation",buffered:!0})}catch(n){console.error("Error setting up performance observers:",n)}},tg={},bt=n=>{tg[n.name]=n.value},OS=n=>{const e=performance.now();return()=>{const t=performance.now()-e;bt({name:n,value:t})}},DS=()=>{const n={...tg};if(window.performance){performance.getEntriesByType("paint").forEach(r=>{r.name==="first-paint"?n.firstPaint=r.startTime:r.name==="first-contentful-paint"&&(n.firstContentfulPaint=r.startTime)});const t=performance.getEntriesByType("navigation")[0];t&&(n.timeToFirstByte=t.responseStart-t.requestStart,n.domContentLoaded=t.domContentLoadedEventEnd-t.fetchStart,n.windowLoaded=t.loadEventEnd-t.fetchStart)}return n},VS={init:CS,recordMetric:bt,startTiming:OS};RS();zg.createRoot(document.getElementById("root")).render(N.jsx(td.StrictMode,{children:N.jsx(Qm,{children:N.jsx(wS,{})})}));typeof window<"u"&&SS();typeof window<"u"&&VS.init();export{ze as F,_S as L,gS as T,$S as a,eg as b,Fw as c,Ui as d,zS as e,US as f,oA as g,FS as h,jS as i,Zw as q,BS as r,qS as s,Xm as u,eA as w};
