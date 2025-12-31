self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('focus-timer-cache').then(function(cache) {
      return cache.addAll(['./', './index.html', './manifest.json', './wind.mp3', './rain.mp3']);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
