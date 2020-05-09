$(document).ready(function() {

  $(".sample ul li:first-child").toggleClass('active');
  $(".code-sample-body div:first-child").toggleClass('active');

  $("table tbody tr td").each((el) => {
    var idx = $("table tbody tr td").eq(el).index();
    var label =  $("table thead tr th").eq(idx).html();
    $("table tbody tr td").eq(el).attr('data-label', label);
  });

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

$(".sample ul li a").click(function(event) {
  var li = $(event.target).parent();
  var ul = li.parent();
  ul.children().removeClass('active');
  li.toggleClass('active');
  var i = li.index();
  var divCode =  ul.parent().find(".code-sample-body");
  divCode.children().removeClass('active');
  divCode.children().eq(i).toggleClass('active');
});
