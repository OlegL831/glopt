/*carusel*/
$(document).ready(function () {
    $('.carusel_item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-prev"><img src="img/reviews/left.png"></button>',
        prevArrow: '<button type="button" class="slick-next"><img src="img/reviews/right.png"></button>',
        autoplay: false,
        autoplaySpeed: 3000,

    })
    /*hamburger*/
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');
        hamburger.addEventListener('click', () => {
            menu.classList.add('active');
        })
        close.addEventListener('click', () => {
            menu.classList.remove('active');
        })

    /*tabs*/
    $('.btn_catalog').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.delivery_catalog').eq(i).toggleClass('delivery_catalog_active');
            $('.delivery_active').eq(i).toggleClass('delivery_active_block');
        })
    });
    $('.delivery_active_block_a').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.delivery_catalog').eq(i).toggleClass('delivery_catalog_active');
            $('.delivery_active').eq(i).toggleClass('delivery_active_block');
        })
    });

    /*scroll*/
    $(window).scroll(function() {
        if($(this).scrollTop()>500) {
        $('.pageup').fadeIn();
        } else {
        $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html,body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

});

/*yndex.map*/
ymaps.ready(init);
var myMap;

function init(){
    var myMap = new ymaps.Map("map", {
        center:[55.747956, 37.627211],
        zoom: 17,
        controls: []
    });
    myMap.behaviors.disable([
        'drag', 
        'scrollZoom'
    ]);
    var myPlacemark1 = new ymaps.Placemark([55.747956, 37.627211], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map/pin.png',
        iconImageSize: [62, 63],
        iconImageOffset: [-25, -70]
        
    });
    var myPlacemark2 = new ymaps.Placemark([55.747956, 37.627211], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map/adress.png',
        iconImageSize: [329, 158],
        iconImageOffset: [50, -120]
        
    });
    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2);   
}


  


  
   