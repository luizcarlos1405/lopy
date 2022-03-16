const timestamp = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
};
const build = [
  "/_app/start-f80a9bc4.js",
  "/_app/pages/__layout.svelte-9626ae71.js",
  "/_app/assets/pages/__layout.svelte-22f9851f.css",
  "/_app/pages/__error.svelte-9d246db1.js",
  "/_app/assets/pages/__error.svelte-c5da8346.css",
  "/_app/pages/index.svelte-7cf34cf6.js",
  "/_app/assets/pages/index.svelte-e9433e1a.css",
  "/_app/pages/transactions.svelte-66409fa3.js",
  "/_app/assets/pages/transactions.svelte-3b7c7fb7.css",
  "/_app/pages/envelope/edit/_id_.svelte-1645225c.js",
  "/_app/assets/pages/envelope/edit/_id_.svelte-3e00504f.css",
  "/_app/pages/envelope/_id_.svelte-d4eac462.js",
  "/_app/assets/pages/envelope/_id_.svelte-0bed5e77.css",
  "/_app/chunks/vendor-330cf7b4.js",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/Envelope-f6548ab2.js",
  "/_app/chunks/BottomNavigation-52e572a6.js",
  "/_app/assets/BottomNavigation-a22f806f.css",
  "/_app/chunks/stores-fe43886f.js",
  "/_app/chunks/longpress-a7a6c534.js",
  "/_app/chunks/EnvelopeTransactions-cf17085b.js",
  "/_app/assets/EnvelopeTransactions-74bb8ea9.css"
];
const files = [
  "/favicon.ico",
  "/logo-192.png",
  "/logo-512.png",
  "/logo-maskable-512.png",
  "/manifest.json"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
