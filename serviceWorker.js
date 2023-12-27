const staticCV = "rafal_mucha_cv";
const assets = [
  "/",
  "/index.html",
  "/css/main-min.css",
  "/js/main.js",
  "vendor/bootstrap/css/bootstrap.min.css",
  "vendor/font-awesome/css/font-awesome.min.css",
  "vendor/devicon/devicon.min.css",
  "vendor/bootstrap/js/bootstrap.bundle.min.js",
  "media/saberOff.mp3",
  "media/saberOn.mp3",
  "/img/PWA_Icons/icon-72-72.png",
  "/img/PWA_Icons/icon-96-96.png",
  "/img/PWA_Icons/icon-144-144.png",
  "/img/PWA_Icons/icon-192-192.png",
  "/img/PWA_Icons/icon-512-512.png",
  "/img/PWA_Icons/maskable_icon_x384.png",
  "/img/Card_Images/Card.png",
  "/img/Card_Images/Coin.png",
  "/img/Card_Images/Converter.png",
  "/img/Card_Images/Dear.png",
  "/img/Card_Images/Figma.png",
  "/img/Card_Images/Liczy.png",
  "/img/Card_Images/Portfolio.png",
  "/img/Card_Images/RAD.png",
  "/img/Card_Images/Splash.png",
  "/img/Card_Images/TB.png",
  "/img/Card_Images/ToDo.png",
  "/img/Card_Images/XO.png",
  "/img/Card_Images/Resume.png",
  "/img/Slider_Images/slide0.webp",
  "/img/Slider_Images/slide1.webp",
  "/img/Slider_Images/slide2.webp",
  "/img/00.png",
  "/img/01.png",
  "/img/02.png",
  "/img/03.png",
  "/img/04.png",
  "/img/05.png",
  "/img/06.png",
  "/img/07.png",
  "/img/08.png",
  "/img/09.png",
  "/img/10.png",
  "/img/11_AGH.png",
  "/img/Bug.png",
  "/img/CiscoSys.png",
  "/img/DL.png",
  "/img/DTray.png",
  "/img/Empire.png",
  "/img/profile_alt.png",
  "/img/GH.png",
  "/img/GL.png",
  "/img/LUXOFT.png",
  "/img/Link.png",
  "/img/M1M0.png",
  "/img/Rebel.png",
  "/img/SL.PNG",
  "/img/SS.png",
  "/img/SixS.png",
  "/img/PHlog.png",
  "/img/PWA.svg",
  "/img/Solo.svg",
  "/img/UI.jpg",
  "/img/chat.png",
  "/img/fig.svg",
  "/img/flag-GR.png",
  "/img/flag-PL.png",
  "/img/flag-UK.png",
  "/img/gsap.svg",
  "/img/materialize.svg",
  "/img/me_ico.PNG",
  "/img/profile.png",
  "/img/udemy.png",
];
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
  console.log(
    "%c The Service Worker is active!",
    "font-family:monospace; font-size: 18px; color: gold; text-shadow: 0.5px 0.5px 0 rgb(220,90,10), 1px 1px 0 red, 1.5px 1.5px 0 rgb(5,140,60)"
  );
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
