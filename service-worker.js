"use strict";var precacheConfig=[["/clickyfive/index.html","f2f2debed4de428b8901c8ca02abb6c7"],["/clickyfive/static/css/main.b9158dc6.css","6e765f43b8722dd902a7346399889f05"],["/clickyfive/static/js/main.33d46ff0.js","89889d2a2aa0d6e346174041e38964bf"],["/clickyfive/static/media/LinHit.419212af.jpg","419212afdee03b0a5e46f02da75d8e1a"],["/clickyfive/static/media/jim.c204336a.jpg","c204336ae1c9775605a99722ef051821"],["/clickyfive/static/media/jirafe.475500ae.jpg","475500ae19056c0b52085b0a703bf8ff"],["/clickyfive/static/media/king.9c787462.jpg","9c78746250e35e4a94254e9b92793ca7"],["/clickyfive/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/clickyfive/static/media/mom.a8f1058c.png","a8f1058cf7cc0f1323675285726ef6dd"],["/clickyfive/static/media/monster.b4d5fe07.jpg","b4d5fe076b03814d4242d75f8725ae1a"],["/clickyfive/static/media/morty.bb35d93d.jpg","bb35d93d9b49741ada41791e2ce1da38"],["/clickyfive/static/media/rick.60c6cad0.jpg","60c6cad07fd64f849252fb856a3542e5"],["/clickyfive/static/media/rickGreen.2e99af9f.jpg","2e99af9f9caf37e739c76bc06dc45a70"],["/clickyfive/static/media/rocket.e337a3ff.jpg","e337a3ff98edef24cfe69a93a14c9362"],["/clickyfive/static/media/sister.ff8501c0.jpg","ff8501c04a5d3946b4634f275681333a"],["/clickyfive/static/media/snuffles.a7f68923.jpg","a7f689236deb24d189eea47697336a84"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/clickyfive/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});