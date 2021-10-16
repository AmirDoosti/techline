$(document).ready(function () {

    // Navbar Sticky top
    navbarSticky();

    // Navbar Sticky top
    $(window).on('scroll', function () {
        navbarSticky();
    });

    // Navbar Sticky top
    function navbarSticky() {

        if ($(window).scrollTop() > 5) {
            $('header').addClass('scrolledDown');
        }
    
        if ($(window).scrollTop() < 5) {
            $('header').removeClass('scrolledDown');
        }
    }

    $('.humberger-icon').click(function(){
        $('.mobile-menu-opened').toggleClass('top-0');
    });

    $('.mobile-menu-opened .close').click(function(){
        $('.mobile-menu-opened').toggleClass('top-0');
    });

    $('#products .card .colors > .color').click(function(){
        
        $(this).toggleClass('active-color');
        
    });


    $('#testimonial_slider').owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        items:1,
        responsive:{
            0:{
                stagePadding: 0,
            },
            768:{
                stagePadding: 0,
            },
            1200:{
                stagePadding: 350,
            }
        }
    });

    var testimonial_owl = $('#testimonial_slider');
    testimonial_owl.owlCarousel();
    $('#testimonial_next_arrow').click(function() {
        testimonial_owl.trigger('next.owl.carousel', [400]);
    });
    $('#testimonial_prev_arrow').click(function() {
        testimonial_owl.trigger('prev.owl.carousel', [400]);
    });


    $('#client_slider').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        responsive:{
        stagePadding: 50,
            0:{
                items:1
            },
            500:{
                items:3
            },
            7680:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })

    var client_owl = $('#client_slider');
    client_owl.owlCarousel();
    $('#client_next_arrow').click(function() {
        client_owl.trigger('next.owl.carousel', [400]);
    });
    $('#client_prev_arrow').click(function() {
        client_owl.trigger('prev.owl.carousel', [400]);
    });

});

