$(document).ready(function(){
  $('.js-slick-products').slick({
        prevArrow: '<button type="button" class="product-home__prev-btn"><i class="icon-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="product-home__next-btn"><i class="icon-arrow-right"></i></button>',
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