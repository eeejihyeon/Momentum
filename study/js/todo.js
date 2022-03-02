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
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
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

// parsedToDos.forEach(paintToDo);
// forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행
// forEach는 각각의 item을 줌

//// Filter ////
// 만약 array에서 뭔가 삭제할 때 실제로 array를 지우는 게 아닌 지우고 싶은 item을 제외하고 새 array를 만든다
// = item을 지우는 게 아니라 item을 제외 (말 그대로 필터링!)

// function sexyFilter() {}

// [1, 2, 3, 4].filter(sexyFilter);

// sexyFilter()

// 새 array에서 object를 유지하고 싶다면 반드시 true를 리턴
