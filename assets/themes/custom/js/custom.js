$(function() {
  // Smooth animation when page scrolls
  $("a.scroll-page").click(function (event) {
    event.preventDefault();
    event.stopPropagation();

    var self = $(this),
        elementClick = self.attr("href"),
        destination = $(elementClick).offset().top - 8,
        navbar = $('.navbar-fixed-top .navbar-inner, .navbar-static-top .navbar-inner');

    if (elementClick == "#home") {
      destination = 0;
      navbar.removeClass('navbar-shadow');
    } else {
      navbar.addClass('navbar-shadow');
    }

    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
  });

  $('.navbar li').on('activate', function(e) {
    var destinationElement = $(this).children('a').attr('href'),
        navbar = $('.navbar-fixed-top .navbar-inner, .navbar-static-top .navbar-inner');

    if (destinationElement == "#home") {
      navbar.removeClass('navbar-shadow');
    } else {
      navbar.addClass('navbar-shadow');
    }
  });

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this)
    $spy.scrollspy($spy.data(), {
      offset: 30
    });
  });
});
