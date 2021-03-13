if ($.cookie("popup") == "popped") {
  //if the cookie exists with the value 'popped', no popup
  $(".popup").toggle(); //show the popup by toggling away its display-none status

  $(".popup button").click(function () {
    //toggle the popup when close button is hit
    $(".popup").toggle();
  });
  console.log("The cookie is still valid, no popup today!");
} //if there's no cookie, fire the popup, then give them a cookie
else {
  $(".popup").toggle(); //show the popup by toggling away its display-none status

  $(".popup button").click(function () {
    //toggle the popup when close button is hit
    $(".popup").toggle();
  });

  $.cookie("popup", "popped", { expires: 1, path: "/" }); //this is the cookie, named popup with the value popped, expires after 1 day and is relevant to the whole site. see 'jquery-cookie' documentation for more details: https://github.com/carhartl/jquery-cookie

  console.log("The cookie is null, you get a popup");
}
