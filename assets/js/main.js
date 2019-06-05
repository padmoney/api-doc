$(document).ready(function() {
  $('.menu').click(function() {
    $('.barra-lateral').toggleClass('active');
    $('.overlay').toggleClass('active');
    $('.btn').toggleClass('img');
  });
  $('.fechar, .barra-lateral a').click(function() {
    $(".overlay").removeClass('active');
    $(".barra-lateral").removeClass('active');
  });
  $(".span").hover(function() {
    var id = "#" + $(this).attr('id');
    $(this).append($("<span><a href=" + id + " class=" + 'span' + "> #</a></span>"));
  }, function() {
    $(this).find("span:last").remove();
  });
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    offset: 61,
    easing: 'easeInOutQuart',
  });
  $(".copy").click(function() {
    var clipboard = new Clipboard('.copy');
    clipboard.on('success', function(e) {
      e.clearSelection();
    });
  });
});

// **********************************
//             Accordion
// **********************************

$(".trigger").click(function() {
  $(this).toggleClass('ativo');
  $(this).next('.hidden').slideToggle('swing');
});

$(".has-accordion a").click(function() {
  $(this).toggleClass('ativo');
  $(this).next('ul').slideToggle('swing');
});
