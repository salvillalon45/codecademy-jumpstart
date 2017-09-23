$(document).ready(function() {
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

var howFarUserScroll = 0;
var scrollEvent = (function() {
  var currentVerticalPositionOfScrollBar = $(this).scrollTop();
  if (currentVerticalPositionOfScrollBar - howFarUserScroll > 50) {
      var heightOfNavbar = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + heightOfNavbar}, 150);
      howFarUserScroll = currentVerticalPositionOfScrollBar;
  } else if (currentVerticalPositionOfScrollBar - howFarUserScroll < 50) {
      $('.navbar').animate({top: 0}, 150);
      howFarUserScroll = currentVerticalPositionOfScrollBar;
  }
});

$(window).scroll(scrollEvent);
