if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const t={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return t;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-12865017"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"index.html",revision:"d99443e8969eea4e8dc0377ac6cb1d5c"},{url:"main.c9f021e6323c40e4e723.js",revision:"8f733a073a5ab78ba30850067c767dc7"},{url:"runtime.58908f3dbdb804a00215.js",revision:"bac88d544bdbbe5a66ee018b2815af84"},{url:"vendors~main.753d26eefef279c1437f.js",revision:"ff978db84e0fc6cbb1a965b262627fdd"}],{})}));
