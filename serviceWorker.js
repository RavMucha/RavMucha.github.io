const staticCV = "rafal_mucha_cv";
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
console.log(
  "%c The Service Worker is active!",
  "font-family:monospace; font-size: 18px; color: gold; text-shadow: 0.5px 0.5px 0 rgb(220,90,10), 1px 1px 0 red, 1.5px 1.5px 0 rgb(5,140,60)"
);
self.addEventListener("install", (installEvent) => {
  self.skipWaiting();
  const files = (cache) => {
    const stack = [];
    assets.forEach((file) =>
      stack.push(
        cache
          .add(file)
          .catch((_) => console.info(`Load ${file} to cache has failed.`))
      )
    );
    return Promise.all(stack);
  };
  installEvent.waitUntil(caches.open(staticCV).then(files));
});

self.addEventListener("fetch", (fetchEvent) => {
  if (fetchEvent.respondWith) {
    try {
      fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((event) => {
          return event || fetch(fetchEvent.request);
        })
      );
    } catch (e) {
      console.error(e, "Fetch failure on:", fetchEvent);
    }
  } else {
    console.log("ServiceWorker: nothing to fetch.");
    return false;
  }
});
