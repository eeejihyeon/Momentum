const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

//// JS에서 생성한 요소를 HTML에 추가하기 ////
// document.createElement("img"): Element 생성 -> <img>
/// append & prepend ///
// append: 가장 아래에 추가
// prepend: 가장 위에 추가
// document.body.appendChild(bgImage): 생성한 Element를 body에 추가
