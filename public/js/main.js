/** @format */

$(document).ready(function () {
  // تنظیم اولیه
  if (window.innerWidth <= 992) {
    $(".sidebar").removeClass("active");
    $(".devgame").removeClass("sidebar-open");
  }

  $("#Burger").click(function () {
    $(".sidebar").addClass("active");
    $(".devgame").addClass("sidebar-open");
  });

  $("#Close").click(function () {
    $(".sidebar").removeClass("active");
    $(".devgame").removeClass("sidebar-open");
  });

  $(window).resize(function () {
    if (window.innerWidth > 992) {
      $(".sidebar").addClass("active");
      $(".devgame").removeClass("sidebar-open");
    } else {
      $(".sidebar").removeClass("active");
      $(".devgame").removeClass("sidebar-open");
    }
  });
});
