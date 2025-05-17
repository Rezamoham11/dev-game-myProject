/** @format */

$(document).ready(function () {
  $("#Close").click(function () {
    $(".sidebar").removeClass("active").addClass("hidden");
    $("#Burger").addClass("show");
  });

  $("#Burger").click(function () {
    $(".sidebar").addClass("active").removeClass("hidden");
    $("#Burger").removeClass("show");
  });
});
