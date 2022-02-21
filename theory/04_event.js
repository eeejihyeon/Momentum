const h1 = document.querySelector(".hello:first-child h1");
 
h1.innerText = "Hello!";
// h1.style.color = "skyblue";

// Event(click...) 시 무언가 작동 되려면 function 정의
function handleTitleClick() {
  h1.style.color = "tomato";
}

function event2() {
  h1.innerText = "Mouse is here!";
}

function event3() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "skyblue";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOOD");
}

// Element listen
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", event2);
h1.addEventListener("mouseleave", event3);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// oneventname
h1.onclick = handleTitleClick;


