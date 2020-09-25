$(document).ready(function(){
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