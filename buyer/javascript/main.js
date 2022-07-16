var isActive = false;

$(".menu").on("click", function () {
  if (isActive) {
    $(this).removeClass("active");
    $("body").removeClass("menu-open");
  } else {
    $(this).addClass("active");
    $("body").addClass("menu-open");
  }

  isActive = !isActive;
});

const scroll = new SmoothScroll(' a[href*="#"]', {
  speed: 800,
});
