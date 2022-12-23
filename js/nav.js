$(document).ready(function () {
  $("#sub_mn_area").hide();
  var key = true;
  console.log(key);

  $("#nav > ul").mouseenter(function () {
    if (key == true) {
      key = false;
      // console.log(key);
      $("#sub_mn_area").slideDown(300);
    }
  });
  $("#sub_mn_area > ul").mouseleave(function () {
    if (key == false) {
      key = true;
      // console.log(key);
      $("#sub_mn_area").slideUp(300);
    }
  });

  $("#nav > ul > li").mouseover(function () {
    $("#nav > ul > li").removeClass("on");
    $(this).addClass("on");
    // console.log("on");
  });
  $("#nav > ul > li").mouseout(function () {
    $("#nav > ul > li").removeClass("on");
    // console.log("out");
  });

  $(".sub > li").mouseover(function () {
    $(".sub > li").removeClass("on2");
    $(this).addClass("on2");
  });
  $(".sub > li").mouseout(function () {
    $(".sub > li").removeClass("on2");
  });
});
