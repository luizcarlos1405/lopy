const i = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
}, m = [
  "/_app/immutable/start-aca5b326.js",
  "/_app/immutable/pages/__layout.svelte-36900d43.js",
  "/_app/immutable/assets/__layout-7872798b.css",
  "/_app/immutable/pages/__error.svelte-46665dcd.js",
  "/_app/immutable/assets/__error-222277ab.css",
  "/_app/immutable/pages/envelope/_id_.svelte-49313f31.js",
  "/_app/immutable/assets/[id]-ad3ef020.css",
  "/_app/immutable/pages/envelope/edit/_id_.svelte-94a62ab7.js",
  "/_app/immutable/assets/[id]-98577166.css",
  "/_app/immutable/pages/index.svelte-2b97a019.js",
  "/_app/immutable/assets/index-e4405f24.css",
  "/_app/immutable/pages/settings.svelte-159a0674.js",
  "/_app/immutable/pages/transactions.svelte-bb6aa0be.js",
  "/_app/immutable/assets/transactions-fab3a9ea.css",
  "/_app/immutable/chunks/index-2c5b7e63.js",
  "/_app/immutable/chunks/index-a5fb40b1.js",
  "/_app/immutable/chunks/singletons-eca981c1.js",
  "/_app/immutable/chunks/stores-6241235a.js",
  "/_app/immutable/chunks/EnvelopeTransactions-166505be.js",
  "/_app/immutable/assets/EnvelopeTransactions-9a6e8b8e.css",
  "/_app/immutable/chunks/Envelope-87461f17.js",
  "/_app/immutable/chunks/Trash2Icon-4a809962.js",
  "/_app/immutable/chunks/notionStore-61880af3.js",
  "/_app/immutable/chunks/longpress-f0a75fa9.js",
  "/_app/immutable/chunks/BottomNavigation-5e4ce5cd.js",
  "/_app/immutable/assets/BottomNavigation-d370ba13.css"
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
