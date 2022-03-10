const title = document.querySelector("#title");
const colors = [
  "lightcoral",
  "cornflowerblue",
  "lightseagreen",
  "palevioletred",
];

const superEventHandler = {
  mouseenter: function handleMouseenter() {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },

  mouseleave: function handleMouseleave() {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },

  resize: function handleResize() {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },

  contextmenu: function handelContextmenu() {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.mouseenter);
title.addEventListener("mouseleave", superEventHandler.mouseleave);
window.addEventListener("resize", superEventHandler.resize);
title.addEventListener("contextmenu", superEventHandler.contextmenu);
