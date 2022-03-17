const body = document.body;
const btn = document.querySelector("#btn");
const colors = [
  "#eae4e9",
  "#fff1e6",
  "#fde2e4",
  "#fad2e1",
  "#e2ece9",
  "#bee1e6",
  "#f0efeb",
  "#dfe7fd",
  "#cddafd",
  "#ffb4a2",
  "#e5989b",
  "#fe6d73",
  "#ffcb77",
  "#abc4ff",
  "#bee3db",
  "#c8e7ff",
  "#f8f7ff",
  "#b8b8ff",
];

function changeBgColor() {
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];

  body.style.background = `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`;
}

btn.addEventListener("click", changeBgColor);
