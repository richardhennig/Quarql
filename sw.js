/* Quarql Zettel – Offline-Cache.
   Bei einer neuen Version die Zahl in CACHE erhöhen, dann laden alle Geräte neu. */
var CACHE = "quarql-v1";
var ASSETS = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png",
  "./apple-touch-icon.png", "./favicon-32.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }).then(function(){ self.skipWaiting(); }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;

  /* Seitenaufrufe: erst Netz, sonst die gespeicherte Startseite. */
  if(req.mode === "navigate"){
    e.respondWith(
      fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put("./index.html", copy); });
        return res;
      }).catch(function(){
        return caches.match("./index.html").then(function(r){ return r || caches.match("./"); });
      })
    );
    return;
  }

  /* Alles andere: erst Cache, sonst Netz. */
  e.respondWith(
    caches.match(req).then(function(hit){
      return hit || fetch(req).then(function(res){
        if(res && res.status === 200 && res.type === "basic"){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){ return hit; });
    })
  );
});
