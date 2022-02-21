console.log("Hello World")

//// Variable ////
// Always const, Sometimes let, Never var
const a = "Hey~";
let b = true;

console.log(a + b);
// let update 시 앞에 let 쓰지 않고 변수명 = 업데이트값;
b = false;

console.log(b);



//// Array ////
// 투 두 리스트 처럼 리스트 만들 때

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);
console.log(daysOfWeek[4]);

// Update item
daysOfWeek[0] = "hell"
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);



//// Object ////
// 정보 리스트 같은 설명이 필요한 걸 만들 때
// 의미가 있는 property를 저장 / 연관되어있는 property 그룹으로  묶어서 저장해야 할 때

// const playerName = "jane";
// const playerPoints = 121212;
// const playerHandsome = true;
// const playerLastName = "Lee";

const player = {
  name: "jane",
  points: 121212,
  handsome: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

// Update item
// 변수 player 안의 Object의 무언가는 수정 가능
// 변수.오브젝트 = 수정사항;
player.handsome = false;
console.log(player);

// Add object
player.lastName = "Lee";
console.log(player);

player.points = player.points + 10000;
console.log(player.points);



//// Function ////

function sayHello(nameOfPerson , age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("jane", 28);
sayHello("hehe", 23);
sayHello("gun", 29);


function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function divide(a, b) {
  console.log(a / b);
}

plus(8, 20);
divide(98, 20);


const user = {
  name: "jane",
  sayHello: function (otherPersonsName) {
    console.log("Hello! " + otherPersonsName + " nice to meet you");
  },
};

user.sayHello("jane");
user.sayHello("gun");



// Recap Challenge

// const calculator = {
//   plus: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
//   times: function (a, b) {
//     console.log(a * b);
//   },
//   powerof: function (a, b) {
//     console.log(a ** b);
//   }
// };

// calculator.plus(2, 3);
// calculator.minus(2, 3);
// calculator.divide(2, 3);
// calculator.times(2, 3);
// calculator.powerof(2, 3);




//// Return ////
// return을 쓰면 해당 function은 종료됨 그 다음에 값을 입력해도 출력되지 않음
// console.log는 콘솔에 입력 값을 보여주는 거라
// Javascript에 값이 반환되지 않음 (값이 정의되지 않음 undefined)
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
  powerof: function (a, b) {
    return a ** b;
  }
};

// console.log(calculator.plus(2, 3));
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const divideResult = calculator.divide(timesResult, plusResult);
const timesResult = calculator.times(10, minusResult);
const powerofResult = calculator.powerof(divideResult, minusResult);

console.log(plusResult);



const age = 26;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);