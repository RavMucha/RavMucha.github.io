const staticCoinz = "rafal_mucha_cv";
const assets = [
  "/",
  "/index.html",
  "/css/main-min.css",
  "/js/main.js",
  "/img/Icons/icon-72-72.png",
  "/img/Icons/icon-96-96.png",
  "/img/Icons/icon-144-144.png",
  "/img/Icons/icon-192-192.png",
  "/img/Icons/icon-512-512.png",
  "/img/Icons/maskable_icon_x384.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticCoinz).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
