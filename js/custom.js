$(function (){

    /*** Navbar ***/
    // Scroll To Element
    $('.nav li a').on('click', function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        });
    });

    // Add Class Active
    $('.nav li').on('click', function () {
        $('.nav li').removeClass('active');
        $(this).addClass('active');
    });

    // Sync With Links
    $(window).scroll(function () {
        $('section').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 1) {
                var divID = $(this).attr('id');
                $('.nav li').removeClass('active');
                $('.nav li a[data-scroll="' + divID + '"]').parent().addClass('active');
            }
        })
    })

    // Show And Hide Menu On Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() < 200) {
            $('nav').removeClass('navbar-dark');
        } else {
            $('nav').addClass('navbar-dark');
        }
    });

    /*** Particles ***/
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });



    /*** MixItUp ***/
    mixitup('.mixitup');
    mixitup('.mixitup', {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });

    new WOW().init();

});