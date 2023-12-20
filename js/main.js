// Check user browser
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

// Closing the alert until session end
if (sessionStorage.getItem("dismiss") === "true") {
  document.getElementById("infoAlert").style.display = "none";
}

function addSrc(id) {
  document.getElementById(id).src = "https://" + id;
}

function addSrcImg(id) {
  document.getElementById(id).src = id;
}

window.onload = function () {
  document.getElementById("loading-container").style.display = "none";
  if (window.scrollY > 10000) {
    document.querySelector(".img-profile").setAttribute("src", "img/FACE2.png");
  }
  if (window.scrollY < 10000) {
    document
      .querySelector(".img-profile")
      .setAttribute("src", "img/profile.png");
  }
};

function playSaber(url) {
  var sound = new Audio(url);
  sound.play();
  sound.volume = 0.3;
}
// Photo change on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10000) {
    document.querySelector(".img-profile").setAttribute("src", "img/FACE2.png");
  }
  if (window.scrollY < 10000) {
    document
      .querySelector(".img-profile")
      .setAttribute("src", "img/profile.png");
  }
});

// Dark/light mode listeners
document.getElementById("darkMode").addEventListener("click", darkModeSwitch);
document.getElementById("lightMode").addEventListener("click", lightModeSwitch);
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
