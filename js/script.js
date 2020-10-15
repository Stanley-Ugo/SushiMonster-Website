$(document).ready(function(){
    //toggler btn
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    })

    //sticky navbar and less padding
    $(window).scroll(function(){

        let position = $(this).scrollTop();

        if(position >= 718){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        }
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    })


    //Smooth scroll
    $('.nav-item a').click(function(){
        link.preventDefault();

        let target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top - 25
        }, 3000);
    })


    //ripples
    $("#header, .info").ripples({
        dropRadius: 25,
        perturbance: 0.6,
    });
    //magnific popup
    $('.parent-container').magnificPopup({
        delegate: 'a', //child item selector,
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});