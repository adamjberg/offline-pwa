var CACHE_NAME = "offline-pwa";

self.addEventListener("fetch", function (event) {
  var requestURL = new URL(event.request.url);
  if (requestURL.pathname === "/") {
    event.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return cache.match(event.request.url).then(function (cachedResponse) {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request.url).then(function (networkResponse) {
            cache.put(event.request.url, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});
