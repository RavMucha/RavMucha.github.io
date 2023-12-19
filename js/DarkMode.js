if (
  navigator.userAgent.indexOf("Chrome") != -1 ||
  navigator.userAgent.indexOf("Edg") != -1 ||
  navigator.userAgent.indexOf("Firefox") != -1
) {
  console.log(
    "%c Good browser!",
    "font-weight: bold; font-family:monospace; font-size: 30px; color: gold; text-shadow: 1px 1px 0 rgb(226,91,14), 2px 2px 0 red, 3px 3px 0 rgb(5,148,68), 4px 4px 0 rgb(42,21,113)"
  );
} else {
  //alert("Please use Google Chrome or Microsoft Edge for best experience.\n\nFirefox and Internet Explorer can lose some styling elements.\nSafari should be OK, thou not tested.");
  $("#browserSupport").modal("show");
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
    let f2 = $(".img-profile");
    f2.attr("src", "img/FACE2.png");
  }
  if ($(this).scrollTop() < 9000) {
    let f1 = $(".img-profile");
    f1.attr("src", "img/profile.png");
  }
};

function playSaber(url) {
  var sound = new Audio(url);
  sound.play();
  sound.volume = 0.3;
  localStorage.setItem("dark", "true");
}
// Photo change on scroll
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 9000) {
      var face2 = $(".img-profile");
      face2.attr("src", "img/FACE2.png");
    }
    if ($(this).scrollTop() < 9000) {
      var face1 = $(".img-profile");
      face1.attr("src", "img/profile.png");
    }
  });

  // Dark mode
  $("#darkMode").on("click", dark);

  function dark() {
    $("html").addClass("hack-bar");
    $("#sideNav").removeClass("bg-primary").addClass("bg-dark");
    $("#darkMode").hide();
    $("#lightMode").show();
    $("body").addClass("darkness");
    $("#infoAlert").removeClass("inset").addClass("sabre");
    $(".list-group-flush .list-group-item").addClass("darkness3");
    $("#pokaSkillsy").css("background-color", "#222");
    $("li .btn").removeClass("btn-light").addClass("btn-dark");
    $(".badge-dark").addClass("badge-light").removeClass("badge-dark");
    $("h1,h2,h3").addClass("darkness2");
    $(".badge-info").addClass("badge-danger").removeClass("badge-info");
    $(".text-primary").addClass("text-danger").removeClass("text-primary");
    $(".flipLink").addClass("hovCol");
    $("#Raf").css("color", "#ddd");
    $(".fa-ul a, .subheading a").css("color", "#c20404");
    $(".bg-info").addClass("bg-danger").removeClass("bg-info");
    $("#actionBtn").css("background-color", "#c20404");
    $("h4 .text-info").addClass("text-danger").removeClass("text-info");
    $("h4 .text-form").addClass("text-form-dark").removeClass("text-form");
    $(".blueChange").addClass("redChange").removeClass("blueChange");
    $("#GSAP").addClass("redChange").removeClass("blueChangeGSAP");
    $("i.devicons, i.newIcon, .fa-stack.fa-lg").addClass("hovCol");
    $(".img-profile").addClass("Sith").removeClass("Jedi");
    $("#actionBtnBug").css("background-color", "#ba8b00");
    $("#actionBtnChat").css("background-color", "#fd7e14");
    $(".modalAddon").addClass("invertedBtn");
    $(".modImg").addClass("modImgSith");
    $("#loading-wrapper").addClass("inverted");
    $(".secHeading").addClass("subDark");
    $(".chatSend")
      .removeClass("btn-outline-info")
      .addClass("btn-outline-danger");
    $(".chatHead, .chatHolder").css("background-color", "#343a40");
    $(".chatInput").css("background-color", "#111");
  }
  // Light mode
  $("#lightMode").on("click", light);

  function light() {
    $("html").removeClass("hack-bar");
    $("#sideNav").removeClass("bg-dark").addClass("bg-primary");
    $("#lightMode").hide();
    $("#darkMode").show();
    $("body").removeClass("darkness");
    $("#infoAlert").removeClass("sabre").addClass("inset");
    $(".list-group-flush .list-group-item").removeClass("darkness3");
    $("#pokaSkillsy").css("background-color", "#fff");
    $("li .btn").removeClass("btn-dark").addClass("btn-light");
    $(".badge-light").addClass("badge-dark").removeClass("badge-light");
    $("h1,h2,h3").removeClass("darkness2");
    $(".badge-danger").addClass("badge-info").removeClass("badge-danger");
    $(".text-danger").addClass("text-primary").removeClass("text-danger");
    $(".flipLink").removeClass("hovCol");
    $("#Raf").css("color", "#343a40");
    $("#GSAP").addClass("blueChangeGSAP").removeClass("redChange");
    $(".fa-ul a, .subheading a").css("color", "#389bbd");
    $(".bg-danger").addClass("bg-info").removeClass("bg-danger");
    $("#actionBtn").css("background-color", "#389bbd");
    $("h4 .text-muted").addClass("text-info").removeClass("text-muted");
    $("h4 .text-form-dark").addClass("text-form").removeClass("text-form-dark");
    $(".redChange").addClass("blueChange").removeClass("redChange");
    $("i.devicons, i.newIcon, .fa-stack.fa-lg").removeClass("hovCol");
    $(".img-profile").removeClass("Sith").addClass("Jedi");
    $("#actionBtnBug").css("background-color", "#ffc107");
    $("#actionBtnChat").css("background-color", "#20c997");
    $(".modalAddon").removeClass("invertedBtn");
    $(".modImg").removeClass("modImgSith");
    $("#loading-wrapper").removeClass("inverted");
    $(".secHeading").removeClass("subDark");
    $(".chatSend")
      .removeClass("btn-outline-danger")
      .addClass("btn-outline-info");
    $(".chatHead, .chatHolder, .chatInput").css("background-color", "#fff");
    localStorage.clear();
  }

  // Setting DarkMode via localStorage
  if (localStorage.getItem("dark") === "true") {
    dark();
  }
});
