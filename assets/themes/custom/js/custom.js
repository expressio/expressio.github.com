$(function() {
  // Smooth animation when page scrolls
  $("a.scroll-page").scrollToSection();
})(jQuery);

jQuery.fn.scrollToSection = function(settings) {
  settings = jQuery.extend({
    speed : 1100
  }, settings);

  return this.each(function(){
    var caller = this;

    $(caller).click(function (event) {
      event.preventDefault();

      var elementClick = $(caller).attr("href"),
          destination = $(elementClick).offset().top;

      // if (elementClick == "#home") {
      //   destination = 0;
      // }

      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);

      return false;
    });
  });
}
