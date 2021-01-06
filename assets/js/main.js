$('.getstarted-carousel').slick({
  dots: true,
  infinite: false,
  navigation:false,
  speed: 500,
  fade: true,
  speed: 300,
  slidesToShow: 1,
});


$('.study-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  dots:false,
  // center:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
$('.exam-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  dots:false,
  center:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
})


/************Bottom-Modal**********/

$( function() {
    $( ".bottom-modal .bar" ).on( "click", function() {
      $( ".bottom-modal" ).toggleClass( "open", 1000 );
    });
  } );

  $( function() {
    $( ".friends-online .bar" ).on( "click", function() {
      $( ".c-content.friends-online" ).toggleClass( "open", 1000 );
    });
  } );
