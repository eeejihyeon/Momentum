const body = document.querySelector("body");
const BG_COLOR1 = "bgColor1";
const BG_COLOR2 = "bgColor2";
const BG_COLOR3 = "bgColor3";

function changeBgColor() {
  const width = window.innerWidth;

  if (width > 800) {
    body.classList.remove(BG_COLOR2, BG_COLOR3);
    body.classList.add(BG_COLOR1);
  } else if (width > 500 && width <= 800) {
    body.classList.remove(BG_COLOR1, BG_COLOR3);
    body.classList.add(BG_COLOR2);
  } else {
    body.classList.remove(BG_COLOR1, BG_COLOR2);
    body.classList.add(BG_COLOR3);
  }
}

window.addEventListener("resize", changeBgColor);
