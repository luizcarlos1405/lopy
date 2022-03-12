const timestamp = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
};
const build = [
  "/_app/start-182e9086.js",
  "/_app/pages/__layout.svelte-995c650f.js",
  "/_app/assets/pages/__layout.svelte-436812f1.css",
  "/_app/pages/__error.svelte-fbc5c071.js",
  "/_app/assets/pages/__error.svelte-c5da8346.css",
  "/_app/pages/index.svelte-512bb456.js",
  "/_app/assets/pages/index.svelte-e9433e1a.css",
  "/_app/pages/transactions.svelte-3e134999.js",
  "/_app/pages/envelope/edit/_id_.svelte-1b13b897.js",
  "/_app/assets/pages/envelope/edit/_id_.svelte-3e00504f.css",
  "/_app/pages/envelope/_id_.svelte-79f94ccc.js",
  "/_app/assets/pages/envelope/_id_.svelte-0bed5e77.css",
  "/_app/chunks/vendor-f84f3f19.js",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/Envelope-01f651f0.js",
  "/_app/chunks/BottomNavigation-bf1cfa7a.js",
  "/_app/chunks/stores-8d0d68fa.js",
  "/_app/chunks/longpress-a7a6c534.js",
  "/_app/chunks/EnvelopeTransactions-588f413e.js",
  "/_app/assets/EnvelopeTransactions-1c9b6573.css"
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
