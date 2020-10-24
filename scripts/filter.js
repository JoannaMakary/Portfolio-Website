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
