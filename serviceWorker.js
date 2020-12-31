let CACHE_NAME = 'lopy-v1';
let urlsToCache = [
  '/',
  '/manifest.json',
  '/images/pwa-icon-192.jpeg',
  '/elm.js',
  '/minimongoPromises.js',
  '/execute.js',
];

self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  console.log(event);
  if (event.request.url.includes("localhost")) {
    console.log("Development, skipping cache.")
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // Cache hit - return response
          console.log("Cache hit");
          console.log(response);
          return response;
          }

        console.log("Fetching data from server");
          return fetch(event.request);
        }
      )
  );
});
