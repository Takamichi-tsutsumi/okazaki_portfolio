$(function () {
  if ($('.slick').length > 0) {
    setTimeout(function () {
      $('.slick').slick({
        autoplay: true,
        draggable: false,
        autoplaySpeed: 2000,
        arrows: false
      });
    }, 1000);
  }
  if ($('.js-modal-btn').length > 0) {
    $(".js-modal-btn").modalVideo();
  }
});

