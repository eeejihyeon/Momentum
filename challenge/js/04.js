const clock = document.querySelector("h2");

function getDday() {
  const christmasDate = new Date("december 25, 2022 00:00:00");
  const date = new Date().getTime();
  const days = christmasDate - date;

  const day = Math.floor(days / (1000 * 60 * 60 * 24));
  const hour = String(
    Math.floor((days % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const min = String(
    Math.floor((days % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const sec = String(Math.floor((days % (1000 * 60)) / 1000)).padStart(2, "0");

  clock.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

getDday();
setInterval(getDday, 1000);
