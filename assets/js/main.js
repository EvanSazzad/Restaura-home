$(document).ready(function () {
    $(".menu-toggler").click(function () {
        $("nav").slideToggle("slow"),
            $(this).toggleClass("active")
    });

    

    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            $(".hero").addClass("active"),
                $("header").addClass("active")
        
        } else {
            $("header").removeClass("active"),
                $(".hero").removeClass("active")
        };
    });

    // owl carousel
    $('.offer .owl-carousel').owlCarousel({
        items: 1,
        dots: true, 
        nav: false,
        margin: 20,
        loop: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                margin: 20
            },
            767: {
                margin: 100
            }
        }
    
    });

    
    $('.testimonial .owl-carousel').owlCarousel({
        items: 1,
        dots: true, 
        margin: 20,
        loop: true,
        nav: true,
        navText: ['<img src="./assets/img/arrow-left-ash.png">','<img src="./assets/img/arrow-right-ash.png">'],
        autoplay: true,
        autoplayTimeout: 5000
    });


     $('.news .owl-carousel').owlCarousel({
        items: 2,
        dots: true, 
        nav: true,
        navText: ['<img src="./assets/img/arrow-left-ash.png">','<img src="./assets/img/arrow-right-ash.png">'],
        margin: 10,
        loop: true,    
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            }
        }    
    });


    // offerd menu
    $(".offerd-menu a").click(function () {
        $(this).parent().siblings().children().removeClass("active"),
            $(this).addClass("active");
    });
    

    // offerd menu item
    $("#special").click(function (e) {
        e.preventDefault();
        $("#special-item").addClass("active").siblings().removeClass("active");
    });
    $("#breakfast").click(function (e) {
        e.preventDefault();
        $("#breakfast-item").addClass("active").siblings().removeClass("active");        
    });
    $("#lunch").click(function (e) {
        e.preventDefault();
        $("#lunch-item").addClass("active").siblings().removeClass("active");
    });
    $("#dinner").click(function (e) {
        e.preventDefault();
        $("#dinner-item").addClass("active").siblings().removeClass("active");
    });
    $("#drinks").click(function (e) {
        e.preventDefault();
        $("#drinks-item").addClass("active").siblings().removeClass("active");
    });
});



    /*======= type writter =======*/
var typed = new Typed(".auto-type",{
    strings:["Delicius Foods Zone","Online Restaurent","Hot and Spicy Foods"],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true
});


