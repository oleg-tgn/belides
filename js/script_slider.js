// $('#single-slide-popular, #single-slide-rose, #single-slide-mixed, #single-slide-basket, #single-slide-hat, #single-slide-presents').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

$('.single-slide')
    .on('init', function(event, slick) {
       $('.js-before-load').fadeOut(3000);
    })
    .slick({
      infinite: false,
      slidesToShow: 4,
      dots: true,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1023.99,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,            
          }
        },
        {
          breakpoint: 767.99,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,            
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
