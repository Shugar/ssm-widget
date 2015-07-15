$(document).ready ->
  $('.gallery').slick
    arrows: true
    dots: true
    slidesToShow: 4
    slidesToScroll: 4
    swipe: false

  
    

  filtered = false

  $('.js-filter').on 'click', ->
    if filtered == false
      $('.filtering').slick 'slickFilter', ':even'
      $(this).text 'Unfilter Slides'
      filtered = true
    else
      $('.filtering').slick 'slickUnfilter'
      $(this).text 'Filter Slides'
      filtered = false

  $('.gallery-2').slick
    arrows: true
    dots: true
    slidesToShow: 4
    slidesToScroll: 2 
    swipe: false