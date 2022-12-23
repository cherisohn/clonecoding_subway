$(document).ready(function () {
  var current = 0;
  var setIntervalId;
  $(".btn li").eq(0).addClass("btn_on");

  $(".btn li").click(function (e) {
    e.preventDefault();

    var i = $(this).index();
    // console.log(i);
    move(i);
  });

  $(".main_img").on({
    mouseover: function () {
      clearInterval(setIntervalId);
    },
    mouseout: function () {
      timer();
    },
  });

  timer();
  function timer() {
    setIntervalId = setInterval(function () {
      var n = current + 1;
      // console.log(n);
      if (n == 5) {
        n = 0;
      }
      move(n);
    }, 3000);
  }

  function move(i) {
    if (i == current) return;
    var currentEl = $(".main_img li").eq(current);
    var nextEl = $(".main_img li").eq(i);

    currentEl.css({ left: "0%" }).animate({ left: "-100%" });
    nextEl.css({ left: "100%" }).animate({ left: "0%" });
    current = i;

    $(".btn li").removeClass("btn_on");
    $(".btn li").eq(i).addClass("btn_on");
  }
});
