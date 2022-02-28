const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form div input");
const loginBtn = document.querySelector("#login-form input:last-child");
const greeting = document.querySelector("#greeting");
const container = document.querySelector(".container");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Have a good day, ${username} !`;
  loginForm.classList.remove("login-form");
  loginForm.classList.add(HIDDEN_CLASSNAME);
  container.classList.remove(HIDDEN_CLASSNAME);
  container.classList.add("fadein");
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

function fadeout() {
  loginForm.classList.remove("fadein");
  loginForm.classList.add("fadeout");
  loginForm.style.opacity = "0";
  setTimeout(hide, 2000);
}

function hide() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  container.classList.remove(HIDDEN_CLASSNAME);
  container.classList.add("fadein");
}

loginBtn.addEventListener("click", fadeout);
