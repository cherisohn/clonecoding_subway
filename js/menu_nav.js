$(document).ready(function () {
  $(".type li").removeClass("active");
  $(".type li").eq(0).addClass("active");

  $(".type li").click(function (e) {
    e.preventDefault();
    $(".type li").removeClass("active");
    $(this).addClass("active");
  });
});
