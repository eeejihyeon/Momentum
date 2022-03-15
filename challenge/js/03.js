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

// 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
// 범위에는 음수가 포함될 수 없습니다.
// 실시간으로 범위 값을 업데이트해야 합니다.
// 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
// 유저에게 게임의 승패를 알려야 합니다.
