const quotes = [
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank",
  },
  {
    quote:
      "Life is a succession of lessons which must be lived to be understood.",
    author: "Ralph Waldo",
  },
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley",
  },
  {
    quote: "Life is made of ever so many partings welded together.",
    author: "Charles Dickens",
  },
  {
    quote: "Life is a long lesson in humility.",
    author: "James M. Barrie",
  },
  {
    quote: "Life is trying things to see if they work.",
    author: "Ray Bradbury",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//// Randomness ////
// Array 안에 object로 구성된 변수 quotes

//// Math module ////
// Math.random(): 0~1 사이 숫자 랜덤 호출
// Math.randome() * 10: 기존 random에 10을 곱하면 0에서 10 사이 숫자를 호출
// 정수가 아니기 때문에 n.13232645672687 으로 소수점 수가 나옴

//// 소수점 없애는 function 3 ////
// Math.round(1.2);라고 치면 1로 반환, (1.8)을 넣으면 2로 반환 = 숫자를 반올림
// Math.ceil(1.0)만이 1로 반환, (1.01)이상 치면 2로 반환 = 해당 수가 아니면 올림
// Math.floor(1.9999999)를 해도 1로 반환 = 해당 수가 아니면 내림

// 컴퓨터에서는 숫자 0부터 시작하기 때문에 배열 수가 10개라면 10번째 항목을 가져오기 위해선 숫자 9를 사용해야 하기 때문에 Math.random() * 요소.length를 하고 소수점을 제거할 때 floor로 숫자를 내려줘야 10번째까지 불러올 수 있다.
