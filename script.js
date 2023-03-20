$(function() {
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html');

  /*category accordion*/
  $('.category-accordion .detail').eq(0).show()
  $('.category-accordion .title').click(function() {
    $(this).next().show();
    $(this).siblings('.category-accordion .title').next().stop().slideUp();

    $(this).addClass('active')
    $(this).siblings('.category-accordion .title').removeClass('active');
  });

    /*recent search result*/
  $('.search-recent .btn-clear').click(function() {
    $(this).parent().hide();
  });
  $('.search-recent .btn-all-clear').click(function() {
    $('.search-recent .item').hide();
  });

  /*Front Slider*/
  $('.front-slider').slick({
    slidesToShow: 1,
    dots: false, 
    arows:true,
    autoplay: false,
    autoplaySpeed: 3000,
    slideToScroll: 1
  });
  

  /*Cart Items*/
  $('.cart-content .btn-all-clear').click(function() {
    $('.cart-items').hide();
  });
  $('.cart-content .btn-clear').click(function() {
    $(this).parent().parent().hide();
  });


  /*Goods Suggestion Slider*/
  $('.goods-suggestion-items').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    slideToScroll: 2
  });

  /*wish*/
  $('.wish').click(function() {
    $(this).toggleClass('active')
  });

  /*front*/
  $('.btn-view-more').click(function() {
    $('.company-info-more').toggle()
  });
});