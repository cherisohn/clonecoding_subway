window.addEventListener("load", () => {
  const area = document.querySelector(".tabMn_con_area");
  const menu = document.querySelectorAll(".mn_intro");
  const menuLi = document.querySelectorAll(".mn_intro > li");

  for (let i = 0; i < menuLi.length; i++) {
    menuLi[i].addEventListener("mouseenter", (e) => {
      e.preventDefault();
      e.target.index = i;

      for (let j = 0; j < menuLi.length; j++) {
        if (j == i) {
          menuLi[j].classList.add("effect");
        } else {
          menuLi[j].classList.remove("effect");
        }
      }
    });
  }
  // menu.addEventListener("mouseleave", () => {
  //   for (let k = 0; k < menuLi.length; k++) {
  //     menuLi[k].classList.remove("effect");
  //   }
  // });

  area.addEventListener("mouseleave", () => {
    for (let k = 0; k < menuLi.length; k++) {
      menuLi[k].classList.remove("effect");
    }
  });
});
