(function() {
  $(document).ready(function() {
    var filtered;
    $('.gallery').slick({
      arrows: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      swipe: false
    });
    filtered = false;
    $('.js-filter').on('click', function() {
      if (filtered === false) {
        $('.filtering').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        return filtered = true;
      } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        return filtered = false;
      }
    });
    return $('.gallery-2').slick({
      arrows: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      swipe: false
    });
  });

}).call(this);
