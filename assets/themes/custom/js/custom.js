$(function() {
  // Smooth animation when page scrolls
  $("a.scroll-page").click(function (event) {
    event.preventDefault();
    event.stopPropagation();

    var self = $(this),
        elementClick = self.attr("href"),
        destination = $(elementClick).offset().top - 60;

    if (elementClick == "#home") {
      destination = 0;
    }

    if (!self.hasClass('to-top')) {
      $.each(self.parent().parent().children('li'), function(index, item) {
        var itemElementClick = $(item).children('a').attr('href');

        if (elementClick !== itemElementClick) {
          $(item).removeClass('active');
        }
      });

      self.parent().toggleClass('active');
    }

    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
  });
});
