// element를 더 자세히 보여줌
console.dir(document)


// JavaScript에서 HTML document 객체로부터 title 같은 무언갈 가져올 수 있다.

// 콘솔에 document.title 입력으로 document의 title 확인 가능
// JavaScript로 properties 변경 가능
document.title = "change title"


// JavaScript로 HTML에 접근하기
// const title = document.getElementById("idName");

// title.innerText("Got you!");

// console.log(title.id);
// console.log(title.className);

//// Searching for Elements ////

// class는 하나의 이름으로 여러개가 있을 수 있기 때문에 배열로 나타남
const hellos = document.getElementsByClassName("hello");

// 하나의 element를 return 해줘서 배열이 아닌 메소드에 사용이 가능
// javascript는 순차적으로 실행하기 때문에 여러개일 때 하나만 불러낼 경우 첫번째만 return
// selector 안의 조건에 부합하는 모든 element 가져오고 싶다면 querySelectorAll(); 사용
// querySelectorAll();은 array를 return
const h1 = document.querySelector(".hello h1");

// querySelector는 CSS selector를 사용해 검색 가능
const hello1 = document.querySelector(".hello h1:first-child");

// 아래 두 개는 같은 의미이지만 하위 element를 가져오고 싶다면 querySelector 사용
const exp = document.getElementById("hello");
const exp = document.querySelector("#hello h1");


exp.innerText = "Hello!";