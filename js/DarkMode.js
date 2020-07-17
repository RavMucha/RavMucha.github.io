// Photo change on scroll
$(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 9000) {
        var face2 = $('.img-profile');
        face2.attr("src", "img/FACE2.png");
        face2.addClass("godForm");
      }
      if ($(this).scrollTop() < 9000) {
        var face1 = $('.img-profile');
        face1.attr("src", "img/profile.jpg");
        face1.removeClass("godForm");
      }
    })
// Dark mode
    $("#darkMode").on("click", function () {
      $('html').addClass('hack-bar');
      $('#sideNav').removeClass("bg-primary").addClass("bg-dark");
      $("#darkMode").hide();
      $("#lightMode").show();
      $("body").addClass("darkness");
      $("#infoAlert").addClass("sabre");
      $(".list-group-flush .list-group-item").addClass("darkness3");
      $("#pokaSkillsy").css("background-color", "#222");
      $("li .btn").removeClass("btn-light").addClass("btn-dark");
      $(".badge-dark").addClass("badge-light").removeClass("badge-dark");
      $("h1,h2,h3").addClass("darkness2");
      $(".badge-info").addClass("badge-danger").removeClass("badge-info");
      $(".text-primary").addClass("text-danger").removeClass("text-primary");
      $("#Raf").css("color", "#ddd");
      $(".fa-ul a, .subheading a").css("color", "#c20404");
      $(".bg-info").addClass("bg-danger").removeClass("bg-info");
      $("#guzik").css("background-color", "#c20404");
      $("h4 .text-info").addClass("text-danger").removeClass("text-info");
      $("h4 .text-form").addClass("text-form-dark").removeClass("text-form");
      $(".blueChange").addClass("redChange").removeClass("blueChange");
      $("i.devicons, i.newIcon, .fa-stack.fa-lg").addClass("hovCol");
      $('.img-profile').addClass("Sith").removeClass("Jedi");
      $("#guzikBug").css("background-color", "#ba8b00");
      $("#guzikChat").css("background-color", "#fd7e14");
      $('.modImg').addClass("modImgSith");
      $(".chatSend").removeClass("btn-outline-info").addClass("btn-outline-danger");
      $(".chatHead, .chatHolder").css("background-color", "#343a40");
      $(".chatInput").css("background-color", "#111");
    });
// Light mode
    $("#lightMode").on("click", function () {
      $('html').removeClass('hack-bar');
      $('#sideNav').removeClass("bg-dark").addClass("bg-primary");
      $("#lightMode").hide();
      $("#darkMode").show();
      $("body").removeClass("darkness");
      $("#infoAlert").removeClass("sabre");
      $(".list-group-flush .list-group-item").removeClass("darkness3");
      $("#pokaSkillsy").css("background-color", "#fff");
      $("li .btn").removeClass("btn-dark").addClass("btn-light");
      $(".badge-light").addClass("badge-dark").removeClass("badge-light");
      $("h1,h2,h3").removeClass("darkness2");
      $(".badge-danger").addClass("badge-info").removeClass("badge-danger");
      $(".text-danger").addClass("text-primary").removeClass("text-danger");
      $("#Raf").css("color", "#343a40");
      $(".fa-ul a, .subheading a").css("color", "#389bbd");
      $(".bg-danger").addClass("bg-info").removeClass("bg-danger");
      $("#guzik").css("background-color", "#389bbd");
      $("h4 .text-muted").addClass("text-info").removeClass("text-muted");
      $("h4 .text-form-dark").addClass("text-form").removeClass("text-form-dark");
      $(".redChange").addClass("blueChange").removeClass("redChange");
      $("i.devicons, i.newIcon, .fa-stack.fa-lg").removeClass("hovCol");
      $('.img-profile').removeClass("Sith").addClass("Jedi");
      $("#guzikBug").css("background-color", "#ffc107");
      $("#guzikChat").css("background-color", "#20c997");
      $('.modImg').removeClass("modImgSith");
      $(".chatSend").removeClass("btn-outline-danger").addClass("btn-outline-info");
      $(".chatHead, .chatHolder, .chatInput").css("background-color", "#fff");
    });
  });