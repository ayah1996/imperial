// Initiate the wowjs
new WOW().init();

$(document).ready(function () {
    "use strict";
    // Nice Scroll
    $("body").niceScroll({
        cursorcolor: "#03C4EB",
        cursorwidth: "6px",
        cursorborder: "none"
    });

});
// scroll to top
    var scrollTop = $("#scroll-to-top");
    $(window).scroll(function () {
        $(this).scrollTop() >= 600 ? scrollTop.show() :scrollTop.hide();
    });
        scrollTop.click(function () {
            $("html,body").animate({scrollTop : 0},600);
        });
   

// Smoth Scroll

    var scroll = new SmoothScroll('a[href*="#"]',{
        speed : 1500 ,
        offset : 100
        });

    $(window).scroll(function () {

       var navbar = $('.navbar');
       var header = $('.header');
        if ($(window).scrollTop() >= header.height()){
            //navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
