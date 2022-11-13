const i = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
}, m = [
  "/_app/immutable/start-c7d1818c.js",
  "/_app/immutable/pages/__layout.svelte-4b9e5fdf.js",
  "/_app/immutable/assets/__layout-d024e4af.css",
  "/_app/immutable/pages/__error.svelte-3893db4c.js",
  "/_app/immutable/assets/__error-e110fe52.css",
  "/_app/immutable/pages/envelope/_id_.svelte-9da8dbf1.js",
  "/_app/immutable/assets/[id]-1dfe0678.css",
  "/_app/immutable/pages/envelope/edit/_id_.svelte-e73e8b54.js",
  "/_app/immutable/assets/[id]-b4ff5028.css",
  "/_app/immutable/pages/index.svelte-3d036f84.js",
  "/_app/immutable/assets/index-11e754cf.css",
  "/_app/immutable/pages/settings.svelte-bda0f534.js",
  "/_app/immutable/pages/transactions.svelte-a6eedc6f.js",
  "/_app/immutable/assets/transactions-e1b5d252.css",
  "/_app/immutable/chunks/index-2c5b7e63.js",
  "/_app/immutable/chunks/index-a5fb40b1.js",
  "/_app/immutable/chunks/singletons-eca981c1.js",
  "/_app/immutable/chunks/stores-6241235a.js",
  "/_app/immutable/chunks/EnvelopeTransactions-57ab1454.js",
  "/_app/immutable/assets/EnvelopeTransactions-22c204af.css",
  "/_app/immutable/chunks/Envelope-cd4bcf64.js",
  "/_app/immutable/chunks/Trash2Icon-4a809962.js",
  "/_app/immutable/chunks/notionStore-ff41b8f5.js",
  "/_app/immutable/chunks/longpress-f0a75fa9.js",
  "/_app/immutable/chunks/BottomNavigation-4071f616.js",
  "/_app/immutable/assets/BottomNavigation-a95123cd.css"
], r = [
  "/favicon.ico",
  "/logo-192.png",
  "/logo-512.png",
  "/logo-maskable-512.png",
  "/manifest.json"
], t = self, o = `cache${i}`, p = m.concat(r), u = new Set(p);
t.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(p)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== o && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function h(s) {
  const e = await caches.open(`offline${i}`);
  try {
    const a = await fetch(s);
    return e.put(s, a.clone()), a;
  } catch (a) {
    const c = await e.match(s);
    if (c)
      return c;
    throw a;
  }
}
t.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && u.has(e.pathname), l = s.request.cache === "only-if-cached" && !n;
  a && !c && !l && s.respondWith(
    (async () => n && await caches.match(s.request) || h(s.request))()
  );
});
