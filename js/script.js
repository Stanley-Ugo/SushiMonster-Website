$(document).ready(function(){
    //toggler btn
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    })

    //sticky navbar and less padding
    $(window).scroll(function(){

        let position = $(this).scrollTop();
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