var $start = 1;
var $curr = 1;
var $items = $(".products-item");
var $itemContainer = $(".products-list");
var $itemGap = 36;
var $itemWidth = 300 + $itemGap;
var $itemGapMobile = 16;
var $itemWidthMobile = 163 + $itemGapMobile;
var $mobileScreen = 990;

$(".product-list-navigator-prev-btn").click(function () {
  if ($curr <= 0) {
    return;
  }

  var $width =
    document.body.clientWidth <= $mobileScreen ? $itemWidthMobile : $itemWidth;

  $curr--;
  $(".products-item").removeClass("active");
  var $itemActive = $items.eq($curr);
  $itemActive.addClass("active");
  $itemContainer.css("transform", `translateX(${$width * ($start - $curr)}px)`);
});

$(".product-list-navigator-next-btn").click(function () {
  if ($curr >= $items.length - 1) {
    return;
  }

  var $width =
    document.body.clientWidth <= $mobileScreen ? $itemWidthMobile : $itemWidth;

  $curr++;
  $(".products-item").removeClass("active");
  var $itemActive = $items.eq($curr);
  $itemActive.addClass("active");
  $itemContainer.css("transform", `translateX(${$width * ($start - $curr)}px)`);
});
