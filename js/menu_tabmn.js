$(document).ready(function () {
  $(".mn_intro_area").hide();
  $(".mn_intro_area").eq(0).show();

  $(".tabMn li").click(function () {
    let i = $(this).index();
    // console.log(i);

    $(".mn_intro_area").each(function () {
      if ($(this).show()) {
        $(this).hide();
      }
    });
    $(".mn_intro_area").eq(i).show();
  });
});
