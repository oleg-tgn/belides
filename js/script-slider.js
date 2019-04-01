$(document).ready(function(){
  $('.js-slick-products').slick({
        prevArrow: '<button type="button" class="product-home__prev-btn"><img src="img/icons/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="product-home__next-btn"><img src="img/icons/arrow-right.svg"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }]
    });
});