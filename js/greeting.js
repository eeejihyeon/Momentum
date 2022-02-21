const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  /// JavaScript 이용한 유효성 검사
  // const nameValue = loginInput.value;
  // if (nameValue === "") {
  //   alert("Please write your name.");
  // } else if (nameValue.length > 15) {
  //   alert("Your name is too long.");
  // }

  /// HTML에서 제한(required, maxlength...)을 지정했을 경우
  /// preventDefault(); 로 submit 시 기본 동작인 새로고침을 실행하지 않도록 지정
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  // 문자열 표기법 1
  // greeting.innerText = "Hello " + username + "!";
  // 문자열 표기법 2
  // greeting.innerText = `Hello ${username}!`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);

  // 위 두줄을 function paintGreetings으로 저장했기 때문에 아래 코드 한줄로!
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // Show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // Show the greetings
  paintGreetings(savedUsername);
}

// localStorage: 작은 미니 DB 같은 API, key(username... )와 value 입력하면 브라우저가 기억(저장)
// loacalStorage.setItem("key", "value")
// loacalStorage.getItem("key");
// loacalStorage.removeItem("key");
