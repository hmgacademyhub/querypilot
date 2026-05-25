/* QueryPilot v8 — Service Worker
   Cache-first for the shell, network-first for everything else (fonts).
   Bump CACHE on every release so users get the new files. */
var CACHE = "querypilot-v9.0.0";
var SHELL = [
  "./",
  "./index.html",
  "./assets/styles.css",
  "./assets/enterprise.css",
  "./assets/app.js",
  "./assets/enterprise.js",
  "./assets/learn.css",
  "./assets/curriculum.js",
  "./assets/curriculum_part2.js",
  "./assets/curriculum_part3.js",
  "./assets/curriculum_part4.js",
  "./assets/learn.js",
  "./manifest.json"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k !== CACHE) return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);
  var sameOrigin = url.origin === self.location.origin;

  if(sameOrigin){
    e.respondWith(
      caches.match(req).then(function(cached){
        return cached || fetch(req).then(function(res){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
          return res;
        }).catch(function(){ return caches.match("./index.html"); })
      })
    );
  } else {
    e.respondWith(
      caches.match(req).then(function(cached){
        var net = fetch(req).then(function(res){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
          return res;
        }).catch(function(){ return cached; });
        return cached || net;
      })
    );
  }
});
