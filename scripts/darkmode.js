$(document).ready(function () {
  $("i").click(function () {
    $("#00").toggleClass("dark-image-main");
    $(".navbar-toggler-icon").toggleClass("img-bright");
    $("#night-mode-icon").toggleClass("img-bright");
    $("body").toggleClass("dark-bg");
    $(".title").toggleClass("perilight");
    $(".subtitle, .nav-link, #filter-reset").toggleClass("perilighter");
    $(".parallax-div-skills").toggleClass("blurple-bg");
    $("#skills").toggleClass("grey-bg");
    $(".parallax-div-projects").toggleClass("dark-image-bg");
    $(
      "#filter-node, #filter-js, #filter-python, #filter-express, #filter-angular, #filter-react, #filter-mongo"
    )
      .toggleClass("grey-bg")
      .toggleClass("perilighter");
    $(".parallax-div-about").toggleClass("dark-image-bg2");
    $(".box-fade").toggleClass("dark-fade");
    $("#contact-me").toggleClass("dark-contact");
    $("#contact-text, label").toggleClass("perilight");
    $("#name, #email, #message").toggleClass("dark-bg");
    $(".col-sm:nth-child(-n+2)").toggleClass("dark-border");
    $("#about-img").toggleClass("img-brighter");
    $(".popup-inner").toggleClass("innerpop-dark");
    $(".pop-title").toggleClass("perilight");
    $(".btn-popped").toggleClass("popbtn-dark");
    $(".modal-content").toggleClass("dark");
  });
});
