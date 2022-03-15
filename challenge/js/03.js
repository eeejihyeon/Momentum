const body = document.body;
const inputForm = document.querySelector("#inputForm");
const generateNbr = document.querySelector("#generateNbr");
const guessNbr = document.querySelector("#guessNbr");
const button = document.querySelector("button");

const span = document.createElement("span");
const h3 = document.createElement("h3");

function userChoseNumber(event) {
  // 1. 버튼 누르면 guessNbr에 유저가 입력한 숫자 출력
  //    - localStorage와 preventDefault ?
  //      (입력한 데이터 저장, 새로고침 방지)
  event.preventDefault();

  // 2. 랜덤으로 0부터 generateNbr에 입력한 사이의 숫자 출력
  // 3. 유저가 숫자 선택하지 않으면 게임을 플레이할 수 없음
  // 4. generateNbr에 입력한 숫자보다 usernumber가 크면 안 됨
  const setnumber = generateNbr.value;
  const usernumber = guessNbr.value;
  const parseSetnumber = parseInt(setnumber);
  const parseUsernumber = parseInt(usernumber);

  const random = Math.floor(Math.random() * setnumber);

  if (usernumber === "" || setnumber === "") {
    alert("Please write number");
  } else if (parseUsernumber > parseSetnumber) {
    alert(`Please write between 0 and ${setnumber}`);
  } else {
    inputForm.appendChild(span);
    span.innerText = `You chose: ${usernumber}, the machine chose: ${random}`;
  }

  if (usernumber === random) {
    h3.innerText = `You won!`;
    inputForm.appendChild(h3);
  } else {
    console.log(`You lost!`);
  }

  // 5. 1과 2가 동일하다면 You won!, 아니라면 You lost! 출력
  //    - if else ?
}

inputForm.addEventListener("submit", userChoseNumber);

// 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
// 범위에는 음수가 포함될 수 없습니다.
// 실시간으로 범위 값을 업데이트해야 합니다.
// 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
// 유저에게 게임의 승패를 알려야 합니다.
