const ddayFrom = document.querySelector("#dday-form");
const ddayInput = ddayFrom.querySelector("input");
const p = ddayFrom.querySelector("p");

function getDday() {
  const inputValue = ddayInput.value;

  const setDay = new Date(inputValue);
  const today = new Date();
  const dday = setDay - today;

  const day = Math.floor(dday / (1000 * 60 * 60 * 24));

  ddayInput.classList.add("hidden");
  p.classList.remove("hidden");

  p.innerText = `${setDay.toDateString()} - ${day}day`;
}

ddayInput.addEventListener("change", getDday);
