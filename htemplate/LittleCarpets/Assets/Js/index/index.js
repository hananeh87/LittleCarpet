//اسلایدر محصولات 
$('.slider.owl-carousel').owlCarousel({
  loop: true,
  margin: 40,
  rtl: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
      stagePadding: 10,
    },
    768: {
      items: 2,
      dots: false,
      nav: true,
      stagePadding: 20,
    },
    1024: {
      items: 3,
      dots: false,
      nav: true,
      margin: 30,
    }
  }
})
//اسلایدر محصولات 

//2اسلایدر محصولات 
$('.slider2.owl-carousel').owlCarousel({
  loop: true,
  rtl: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    768: {
      items: 2,
      dots: false,
      nav: true,
      margin: 30
    },
    1024: {
      items: 3,
      dots: false,
      nav: true,
      margin: 30,
    },
    1440: {
      items: 4,
      dots: false,
      nav: true,
      margin: 30,
    }
  }
})
//2اسلایدر محصولات 

