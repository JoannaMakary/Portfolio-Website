// Nutritional Info - Python

// MapleRoyals - MongoDB, Express, React, Node.js(JavaScript)
// MAX Advanced - JavaScript
// Leaguelity - MongoDB, Express, Angular, Node.js
// YelpCamp - MongoDB, Express, Angular, Node.js
// boop-bot = JavaScript
// RGB-Color-Game = JavaScript
// Backbone = JavaScript

$(document).ready(function () {
  // Shows all projects
  $("#filter-reset").click(function () {
    $("#world-of-league").show();
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

  // Shows only projects with PHP
  $("#filter-php").click(function () {
    $("#world-of-league").show();
    $("#prc-caterers").hide();
    $("#prc-caterers2").hide();
    $("#jo-nutritional").hide();
    $("#maple-royals").hide();
    $("#max-brakes").hide();
    $("#leaguelity").hide();
    $("#yelp-camp").hide();
    $("#boop-bot").hide();
    $("#art-store").hide();
    $("#backbone").hide();
    $("#rgb-game").hide();
  });

  // Shows only projects with Javascript
  $("#filter-js").click(function () {
    $("#world-of-league").hide();
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
    $("#world-of-league").hide();
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
    $("#world-of-league").hide();
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
    $("#world-of-league").hide();
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
    $("#world-of-league").hide();
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
    $("#world-of-league").hide();
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
    $("#world-of-league").hide();
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
