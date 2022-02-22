const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
// append는 항상 마지막에 와야 한다!

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

//// JSON,stringify() ////
// 값을 string으로 저장하고 싶을 때 사용
// Array를 stringify할 때

// JSON.stringify: Array를 String으로
// JSON.parse: String을 Array로

//// Arrow Function ////
// 아래 function과 arrow function이 하는 일은 parsedToDos 배열의 각각의 요소를 item으로 하나씩 실행하는 것. arrow function이 더 짧게 쓸 수 있다.

// function
// function sayHello(item) {
//   console.log("this is the turn of", item);
// }
// parsedToDos.forEach(sayHello);

// arrow function
// parsedToDos.forEach((item) => console.log("this is the turn of", item));
