$(document).ready(function () {

    $("i").click(function(){
        $("#night-mode-icon").toggleClass("img-bright");
        $("body").toggleClass("dark-bg");
        $(".title").toggleClass("perilight");
        $(".subtitle, .nav-link, #filter-reset").toggleClass("perilighter");
        $(".parallax-div-01").toggleClass("blurple-bg");
        $("#skills").toggleClass("grey-bg");
        $(".parallax-div-02").toggleClass("dark-image-bg2");
        $("#filter-node, #filter-js, #filter-python, #filter-express, #filter-angular, #filter-react, #filter-mongo").toggleClass("grey-bg").toggleClass("perilighter");
        $(".parallax-div-03").toggleClass("dark-image-bg");
        $(".box-fade").toggleClass("dark-fade");
        $("#contact-me").toggleClass("dark-contact");
        $("#contact-text, label").toggleClass("perilight");
        $("#name, #email, #message").toggleClass("dark-bg");
        $(".col-sm:nth-child(-n+2)").toggleClass("dark-border")
    })
});
