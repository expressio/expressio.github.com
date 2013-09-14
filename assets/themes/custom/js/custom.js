$(function() {
  // Smooth animation when page scrolls
  $("a.scroll-page").click(function (event) {
    event.preventDefault();
    event.stopPropagation();

    var elementClick = $(this).attr("href"),
        destination = $(elementClick).offset().top - 60;

    if (elementClick == "#home") {
      destination = 0;
    }

    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
  });
});
