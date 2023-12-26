//PWA required ServiceWorker installation script
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "../serviceWorker.js",
        {
          scope: "/",
        }
      );
      if (registration.installing) {
        console.log("Service Worker is installing...");
      } else if (registration.waiting) {
        console.log("Service Worker is installed.");
      } else if (registration.active) {
        console.log("Service Worker is active!");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};
registerServiceWorker();
//Variables
const loader = document.getElementById("loading-container");
const modalImage = document.getElementById("imageModal");
const image = document.getElementById("imageTag");
const modalFrame = document.getElementById("websiteModal");
const frame = document.getElementById("websiteModalIframe");
const anchor = document.getElementById("websiteModalAnchor");
//Check user browser
if (
  navigator.userAgent.indexOf("Chrome") != -1 ||
  navigator.userAgent.indexOf("Edg") != -1 ||
  navigator.userAgent.indexOf("Firefox") != -1
) {
  console.log(
    "%c Good browser!",
    "font-weight: bold; font-family:monospace; font-size: 30px; color: gold; text-shadow: 1px 1px 0 rgb(226,91,14), 2px 2px 0 red, 3px 3px 0 rgb(5,148,68), 4px 4px 0 rgb(42,21,113)"
  );
}
//Closing the alert until session end
if (sessionStorage.getItem("dismiss") === "true") {
  document.getElementById("infoAlert").style.display = "none";
}
//Play sound on mode change
function playSound(url) {
  let sound = new Audio(url);
  sound.play();
  sound.volume = 0.2;
}
//Photo change on scroll
function AvatarChangeOnScroll() {
  if (window.scrollY > 10000) {
    document
      .querySelector(".img-profile")
      .setAttribute("src", "img/profile_alt.png");
  } else if (window.scrollY < 10000) {
    document
      .querySelector(".img-profile")
      .setAttribute("src", "img/profile.png");
  }
}
//Dark/light mode change
function darkModeSwitch() {
  localStorage.setItem("darkMode", "true");
  document.querySelector("body").classList.add("dark_mode");
}
function lightModeSwitch() {
  localStorage.clear();
  document.querySelector("body").classList.remove("dark_mode");
}
// Setting DarkMode via localStorage
if (localStorage.getItem("darkMode")) {
  darkModeSwitch();
}
// Photo change and loader close on window load
window.onload = function () {
  AvatarChangeOnScroll();
  loader.style.display = "none";
};
// Dynamically add iframe or img src when needed
modalImage.addEventListener("show.bs.modal", function (e) {
  image.src = e.relatedTarget.id;
  if (
    e.relatedTarget.classList.contains("modal-medium") &&
    modalImage.classList.contains("bd-modal-lg")
  ) {
    modalImage.querySelector(".modal-dialog").classList.remove("modal-lg");
  } else {
    modalImage.querySelector(".modal-dialog").classList.add("modal-lg");
  }
});
modalFrame.addEventListener("show.bs.modal", function (e) {
  loader.style.display = "block";
  frame.src = e.relatedTarget.id;
  anchor.href = e.relatedTarget.id;
  if (
    e.relatedTarget.id === "https://rafal-mucha.pl/" ||
    e.relatedTarget.id ===
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4400.156110345693!2d20.002538803666585!3d50.08093989726195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471645337160b089%3A0x84a5709cc373db92!2z8J-PoQ!5e0!3m2!1spl!2spl!4v1532419377895"
  ) {
    anchor.style.display = "none";
  } else {
    anchor.style.display = "";
  }
});
//Close modal loader once inner page appears
frame.addEventListener("load", function () {
  loader.style.display = "none";
});
//Reset iFrame to default
modalFrame.addEventListener("hidden.bs.modal", function () {
  frame.src = "";
});
//Keep header alert closed after user closure
document.getElementById("alert_closer").addEventListener("click", () => {
  sessionStorage.setItem("dismiss", "true");
});
//Clear forms
document.getElementById("form_clearer").addEventListener("click", () => {
  document.getElementById("contact-form").reset();
});
document.getElementById("form_clearer2").addEventListener("click", () => {
  document.getElementById("contact-form2").reset();
});
//Dark/light mode switch
document.getElementById("darkMode").addEventListener("click", function () {
  playSound("../media/saberOn.mp3");
  darkModeSwitch();
});
document.getElementById("lightMode").addEventListener("click", function () {
  playSound("../media/saberOff.mp3");
  lightModeSwitch();
});
//On scroll pic changer
window.addEventListener("scroll", AvatarChangeOnScroll);
