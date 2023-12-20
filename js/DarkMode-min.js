function addSrc(e) {
  document.getElementById(e).src = "https://" + e;
}
function addSrcImg(e) {
  document.getElementById(e).src = e;
}
function playSaber(e) {
  var a = new Audio(e);
  a.play(), (a.volume = 0.3), localStorage.setItem("darkMode", "true");
}
-1 != navigator.userAgent.indexOf("Chrome") ||
  -1 != navigator.userAgent.indexOf("Edg") ||
  navigator.userAgent.indexOf("Firefox"),
  "true" === sessionStorage.getItem("dismiss") &&
    ((document.getElementById("infoAlert").style.display = "none"),
    $("#infoAlert").alert("close")),
  (window.onload = function () {
    (document.getElementById("loading-container").style.display = "none"),
      $(this).scrollTop() > 9e3 &&
        $(".img-profile").attr("src", "img/FACE2.png"),
      $(this).scrollTop() < 9e3 &&
        $(".img-profile").attr("src", "img/profile.png");
  }),
  $(function () {
    function e() {
      $("html").addClass("dark_mode_on"),
        $("#sideNav").removeClass("bg-primary").addClass("bg-dark"),
        $("#darkMode").hide(),
        $("#lightMode").show(),
        $("body").addClass("dark_mode"),
        $("#infoAlert").removeClass("inset").addClass("info_alert_dark"),
        $(".list-group-flush .list-group-item").addClass("dark_mode3"),
        $("li .btn").removeClass("btn-light").addClass("btn-dark"),
        $(".badge-dark").addClass("badge-light").removeClass("badge-dark"),
        $("h1,h2,h3").addClass("dark_mode2"),
        $(".badge-info").addClass("badge-danger").removeClass("badge-info"),
        $(".text-primary").addClass("text-danger").removeClass("text-primary"),
        $(".flipLink").addClass("hovCol"),
        $(".bg-info").addClass("bg-danger").removeClass("bg-info"),
        $("h4 .text-info").addClass("text-danger").removeClass("text-info"),
        $("h4 .text-form").addClass("text-form-dark").removeClass("text-form"),
        $(".blueChange").addClass("redChange").removeClass("blueChange"),
        $("#GSAP").addClass("redChange").removeClass("blueChangeGSAP"),
        $("i.devicons, i.newIcon, .fa-stack.fa-lg").addClass("hovCol"),
        $(".img-profile")
          .addClass("avatar_dark_mode_modifier")
          .removeClass("avatar_light_mode_modifier"),
        $(".modalAddon").addClass("invertedBtn"),
        $(".modImg").addClass("img_avatar_dark_mode_modifier"),
        $("#loading-wrapper").addClass("inverted"),
        $(".secHeading").addClass("subDark"),
        $(".chatSend")
          .removeClass("btn-outline-info")
          .addClass("btn-outline-danger");
    }
    $(window).scroll(function () {
      $(this).scrollTop() > 9e3 &&
        $(".img-profile").attr("src", "img/FACE2.png"),
        $(this).scrollTop() < 9e3 &&
          $(".img-profile").attr("src", "img/profile.png");
    }),
      document.getElementById("darkMode").addEventListener("click", e),
      document
        .getElementById("lightMode")
        .addEventListener("click", function () {
          $("html").removeClass("dark_mode_on"),
            $("#sideNav").removeClass("bg-dark").addClass("bg-primary"),
            $("#lightMode").hide(),
            $("#darkMode").show(),
            $("body").removeClass("dark_mode"),
            $("#infoAlert").removeClass("info_alert_dark").addClass("inset"),
            $(".list-group-flush .list-group-item").removeClass("dark_mode3"),
            $("li .btn").removeClass("btn-dark").addClass("btn-light"),
            $(".badge-light").addClass("badge-dark").removeClass("badge-light"),
            $("h1,h2,h3").removeClass("dark_mode2"),
            $(".badge-danger")
              .addClass("badge-info")
              .removeClass("badge-danger"),
            $(".text-danger")
              .addClass("text-primary")
              .removeClass("text-danger"),
            $(".flipLink").removeClass("hovCol"),
            $("#GSAP").addClass("blueChangeGSAP").removeClass("redChange"),
            $(".bg-danger").addClass("bg-info").removeClass("bg-danger"),
            $("h4 .text-muted").addClass("text-info").removeClass("text-muted"),
            $("h4 .text-form-dark")
              .addClass("text-form")
              .removeClass("text-form-dark"),
            $(".redChange").addClass("blueChange").removeClass("redChange"),
            $("i.devicons, i.newIcon, .fa-stack.fa-lg").removeClass("hovCol"),
            $(".img-profile")
              .removeClass("avatar_dark_mode_modifier")
              .addClass("avatar_light_mode_modifier"),
            $(".modalAddon").removeClass("invertedBtn"),
            $(".modImg").removeClass("img_avatar_dark_mode_modifier"),
            $("#loading-wrapper").removeClass("inverted"),
            $(".secHeading").removeClass("subDark"),
            $(".chatSend")
              .removeClass("btn-outline-danger")
              .addClass("btn-outline-info"),
            localStorage.clear();
        }),
      "true" === localStorage.getItem("darkMode") && e();
  });
