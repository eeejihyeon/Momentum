const inputForm = document.querySelector("#inputForm");
const generateNbr = document.querySelector("#generateNbr");
const guessNbr = document.querySelector("#guessNbr");
const button = document.querySelector("button");
const h3 = document.querySelector("h3");

const span = document.createElement("span");

const HIDDEN_CLASS = "hidden";

function userChoseNumber(event) {
  event.preventDefault();

  const setnumber = generateNbr.value;
  const usernumber = guessNbr.value;
  const parseSetnumber = parseInt(setnumber);
  const parseUsernumber = parseInt(usernumber);
  const random = Math.round(Math.random() * parseSetnumber);

  if (usernumber === "" || setnumber === "") {
    alert("Please write number");
  } else if (parseUsernumber > parseSetnumber) {
    alert(`Please write between 0 and ${setnumber}`);
  } else {
    span.innerText = `You chose: ${usernumber}, the machine chose: ${random}`;
    inputForm.appendChild(span);

    if (parseUsernumber === random) {
      h3.innerText = "You won!";
    } else {
      h3.innerText = "You lost!";
    }
  }
}

inputForm.addEventListener("submit", userChoseNumber);
