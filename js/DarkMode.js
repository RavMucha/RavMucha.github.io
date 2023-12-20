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
  $("#infoAlert").alert("close");
}

function addSrc(id) {
  document.getElementById(id).src = "https://" + id;
}

function addSrcImg(id) {
  document.getElementById(id).src = id;
}

window.onload = function () {
  document.getElementById("loading-container").style.display = "none";
  if ($(this).scrollTop() > 9000) {
    $(".img-profile").attr("src", "img/FACE2.png");
  }
  if ($(this).scrollTop() < 9000) {
    $(".img-profile").attr("src", "img/profile.png");
  }
};

function playSaber(url) {
  var sound = new Audio(url);
  sound.play();
  sound.volume = 0.3;
  localStorage.setItem("darkMode", "true");
}
// Photo change on scroll
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 9000) {
      $(".img-profile").attr("src", "img/FACE2.png");
    }
    if ($(this).scrollTop() < 9000) {
      $(".img-profile").attr("src", "img/profile.png");
    }
  });

  // Dark/light mode listeners
  document.getElementById("darkMode").addEventListener("click", darkModeSwitch);
  document
    .getElementById("lightMode")
    .addEventListener("click", lightModeSwitch);
  function darkModeSwitch() {
    $("html").addClass("dark_mode_on");
    $("#sideNav").removeClass("bg-primary").addClass("bg-dark");
    $("#darkMode").hide();
    $("#lightMode").show();
    $("body").addClass("dark_mode");
    $("#infoAlert").removeClass("inset").addClass("info_alert_dark");
    $(".list-group-flush .list-group-item").addClass("dark_mode3");
    $("li .btn").removeClass("btn-light").addClass("btn-dark");
    $(".badge-dark").addClass("badge-light").removeClass("badge-dark");
    $("h1,h2,h3").addClass("dark_mode2");
    $(".badge-info").addClass("badge-danger").removeClass("badge-info");
    $(".text-primary").addClass("text-danger").removeClass("text-primary");
    $(".flipLink").addClass("hovCol");
    $(".bg-info").addClass("bg-danger").removeClass("bg-info");
    $("h4 .text-info").addClass("text-danger").removeClass("text-info");
    $("h4 .text-form").addClass("text-form-dark").removeClass("text-form");
    $(".blueChange").addClass("redChange").removeClass("blueChange");
    $("#GSAP").addClass("redChange").removeClass("blueChangeGSAP");
    $("i.devicons, i.newIcon, .fa-stack.fa-lg").addClass("hovCol");
    $(".img-profile")
      .addClass("avatar_dark_mode_modifier")
      .removeClass("avatar_light_mode_modifier");
    $(".modalAddon").addClass("invertedBtn");
    $(".modImg").addClass("img_avatar_dark_mode_modifier");
    $("#loading-wrapper").addClass("inverted");
    $(".secHeading").addClass("subDark");
    $(".chatSend")
      .removeClass("btn-outline-info")
      .addClass("btn-outline-danger");
  }

  function lightModeSwitch() {
    $("html").removeClass("dark_mode_on");
    $("#sideNav").removeClass("bg-dark").addClass("bg-primary");
    $("#lightMode").hide();
    $("#darkMode").show();
    $("body").removeClass("dark_mode");
    $("#infoAlert").removeClass("info_alert_dark").addClass("inset");
    $(".list-group-flush .list-group-item").removeClass("dark_mode3");
    $("li .btn").removeClass("btn-dark").addClass("btn-light");
    $(".badge-light").addClass("badge-dark").removeClass("badge-light");
    $("h1,h2,h3").removeClass("dark_mode2");
    $(".badge-danger").addClass("badge-info").removeClass("badge-danger");
    $(".text-danger").addClass("text-primary").removeClass("text-danger");
    $(".flipLink").removeClass("hovCol");
    $("#GSAP").addClass("blueChangeGSAP").removeClass("redChange");
    $(".bg-danger").addClass("bg-info").removeClass("bg-danger");
    $("h4 .text-muted").addClass("text-info").removeClass("text-muted");
    $("h4 .text-form-dark").addClass("text-form").removeClass("text-form-dark");
    $(".redChange").addClass("blueChange").removeClass("redChange");
    $("i.devicons, i.newIcon, .fa-stack.fa-lg").removeClass("hovCol");
    $(".img-profile")
      .removeClass("avatar_dark_mode_modifier")
      .addClass("avatar_light_mode_modifier");
    $(".modalAddon").removeClass("invertedBtn");
    $(".modImg").removeClass("img_avatar_dark_mode_modifier");
    $("#loading-wrapper").removeClass("inverted");
    $(".secHeading").removeClass("subDark");
    $(".chatSend")
      .removeClass("btn-outline-danger")
      .addClass("btn-outline-info");
    localStorage.clear();
  }

  // Setting DarkMode via localStorage
  if (localStorage.getItem("darkMode") === "true") {
    darkModeSwitch();
  }
});
