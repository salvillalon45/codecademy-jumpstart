$(document).ready(function() {
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false;
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

var howFarUserScroll = 0;
var scrollEvent = (function() {
  var currentVerticalPositionOfScrollBar = $(this).scrollTop();
  if (currentVerticalPositionOfScrollBar - howFarUserScroll > 50) {
      var heightOfNavbar = $('.navbar').css('height');
      heightOfNavbar.animate()
  }
});

$(window).scroll(scrollEvent);
