$(".accordion-item .title").click(function () {
  $(".accordion-item").removeClass("active");
  $(this).parent().addClass("active");
});
