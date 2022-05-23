$(document).ready(function(){
    // Hero_car
    $('.hero_car').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplayTimeout: 5000,
        smartSpeed: 6000,
    });
})