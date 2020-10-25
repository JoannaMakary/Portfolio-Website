// Nutritional Info - Python

// MapleRoyals - MongoDB, Express, React, Node.js(JavaScript)
// MAX Advanced - JavaScript
// Leaguelity - MongoDB, Express, Angular, Node.js
// YelpCamp - MongoDB, Express, Angular, Node.js
// boop-bot = JavaScript
// RGB-Color-Game = JavaScript
// Backbone = JavaScript

$(document).ready(function () {
  // Pop-up Boxes
  
  // OPEN PRC WORDPRESS POP-UP
  $("[data-popup-prc]").on("click", function (e) {
    var targeted_popup_class = jQuery(this).attr("data-popup-prc");
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

    //----- CLOSE PRC-POPUP WORDPRESS
    $("[data-popclose-prc]").on("click", function (e) {
      var targeted_popup_class = jQuery(this).attr("data-popclose-prc");
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
  
      e.preventDefault();
    });

      // OPEN PRC GRAPHIC DESIGN POP-UP
  $("[data-popup-prcc]").on("click", function (e) {
    var targeted_popup_class = jQuery(this).attr("data-popup-prcc");
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

    //----- CLOSE PRC-POPUP GRAPHIC DESIGN
    $("[data-popclose-prcc]").on("click", function (e) {
      var targeted_popup_class = jQuery(this).attr("data-popclose-prcc");
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
  
      e.preventDefault();
    });

          // OPEN JO NUTRITION
  $("[data-popup-nutr]").on("click", function (e) {
    var targeted_popup_class = jQuery(this).attr("data-popup-nutr");
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

    //----- CLOSE JO NUTRITION
    $("[data-popclose-nutr]").on("click", function (e) {
      var targeted_popup_class = jQuery(this).attr("data-popclose-nutr");
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
  
      e.preventDefault();
    });



  //----- OPEN 
  $("[data-popup-open]").on("click", function (e) {
    var targeted_popup_class = jQuery(this).attr("data-popup-open");
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

  //----- CLOSE
  $("[data-popup-close]").on("click", function (e) {
    var targeted_popup_class = jQuery(this).attr("data-popup-close");
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });

  // Shows all projects
  $("#filter-reset").click(function () {
    $("#prc-caterers").show();
    $("#prc-caterers2").show();
    $("#jo-nutritional").show();
    $("#maple-royals").show();
    $("#max-brakes").show();
    $("#leaguelity").show();
    $("#yelp-camp").show();
    $("#boop-bot").show();
    $("#art-store").show();
    $("#backbone").show();
    $("#rgb-game").show();
  });

  // Shows only projects with Javascript
  $("#filter-js").click(function () {
    $("#prc-caterers").show();
    $("#prc-caterers2").hide();
    $("#jo-nutritional").hide();
    $("#maple-royals").show();
    $("#max-brakes").show();
    $("#leaguelity").show();
    $("#yelp-camp").show();
    $("#boop-bot").show();
    $("#art-store").show();
    $("#backbone").show();
    $("#rgb-game").show();
  });

  // Shows only projects with Node.js
  $("#filter-node").click(function () {
    $("#prc-caterers").hide();
    $("#prc-caterers2").hide();
    $("#jo-nutritional").hide();
    $("#maple-royals").show();
    $("#max-brakes").hide();
    $("#leaguelity").show();
    $("#yelp-camp").show();
    $("#boop-bot").hide();
    $("#art-store").hide();
    $("#backbone").hide();
    $("#rgb-game").hide();
  });

  // Shows only projects with Python
  $("#filter-python").click(function () {
    $("#prc-caterers").hide();
    $("#prc-caterers2").hide();
    $("#jo-nutritional").show();
    $("#maple-royals").hide();
    $("#max-brakes").hide();
    $("#leaguelity").hide();
    $("#yelp-camp").hide();
    $("#boop-bot").hide();
    $("#art-store").hide();
    $("#backbone").hide();
    $("#rgb-game").hide();
  });

  // Shows only projects with Express
  $("#filter-express").click(function () {
    $("#prc-caterers").hide();
    $("#prc-caterers2").hide();
    $("#jo-nutritional").hide();
    $("#maple-royals").show();
    $("#max-brakes").hide();
    $("#leaguelity").show();
    $("#yelp-camp").show();
    $("#boop-bot").hide();
    $("#art-store").hide();
    $("#backbone").hide();
    $("#rgb-game").hide();
  });

  // Shows only projects with Angular
  $("#filter-angular").click(function () {
    $("#prc-caterers").hide();
    $("#prc-caterers2").hide();
    $("#jo-nutritional").hide();
    $("#maple-royals").hide();
    $("#max-brakes").hide();
    $("#leaguelity").show();
    $("#yelp-camp").show();
    $("#boop-bot").hide();
    $("#art-store").hide();
    $("#backbone").hide();
    $("#rgb-game").hide();
  });

  // Shows only projects with React
  $("#filter-react").click(function () {
    $("#prc-caterers").hide();
    $("#prc-caterers2").hide();
    $("#jo-nutritional").hide();
    $("#maple-royals").show();
    $("#max-brakes").hide();
    $("#leaguelity").hide();
    $("#yelp-camp").hide();
    $("#boop-bot").hide();
    $("#art-store").hide();
    $("#backbone").hide();
    $("#rgb-game").hide();
  });

  // Shows only projects with MongoDB
  $("#filter-mongo").click(function () {
    $("#prc-caterers").hide();
    $("#prc-caterers2").hide();
    $("#jo-nutritional").hide();
    $("#maple-royals").show();
    $("#max-brakes").hide();
    $("#leaguelity").show();
    $("#yelp-camp").show();
    $("#boop-bot").hide();
    $("#art-store").hide();
    $("#backbone").hide();
    $("#rgb-game").hide();
  });
});
