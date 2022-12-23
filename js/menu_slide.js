$(document).ready(function () {
  let idx = 0;

  $(".next").click(function () {
    idx = 1;
    // console.log(idx);
    move(idx);
  });

  $(".prev").click(function () {
    idx = 0;
    // console.log(idx);
    move(idx);
  });

  function move(n) {
    let pos = -1186 * n + "px";
    $(".mn_intro").animate({ left: pos }, 500);
  }
});
