$(".navbar .btn-burger").click(function () {
  $(".nav-section-2").toggleClass("hidden");
  if ($(".nav-section-2").hasClass("hidden") == 1) {
    $(document.body).css("overflow", "visible");
  } else {
    $(document.body).css("overflow", "hidden");
  }
});
