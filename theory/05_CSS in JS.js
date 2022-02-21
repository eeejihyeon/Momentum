const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  /// 1
  // const currentColor = h1.style.color;
  // let newColor;

  // if (currentColor === "blue") {
  //   newColor = "tomato";
  // } else {
  //  newColor = "blue"
  // }
  // h1.style.color = newColor;

  // className은 getter이면서 setter
  // class명으로 사용된 string은 오타 등으로 error의 위험이 있다.
  // 변수로 저장해서 사용하자!

  /// 2
  // const clickedClass = "clicked"

  // if (h1.className === clickedClass) {
  //   h1.className = "";
  // } else {
  //   h1.className = clickedClass;
  // };

  /// 3
  // const clickedClass = "clicked"

  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // };

  ///4
  // "clicked" class를 반복 사용하지 않고 한 번만 사용하기 때문에 const 변수 저장하지 않고 바로 class명으로 넣음
  // 한 줄로 3번과 같은 결과
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

/// 2
// 1. class를 가지고 있는 element에 style이 변경되는 event 시
//    기존의 class명을 없애게 되어 기존 CSS는 무시되는 경우
//    (class를 저장한 변수에 기존 class명을 추가하는 방법은
//    class 변경/추가 시 CSS, JS도 모두 수정해야해서 아주 좋지 않음! 사용X)
// 2. "cute" class를 삭제하지 않고, "clicked" class를 변경하는 방법 = 3

/// 3
// classList: class들의 목록으로 작업할 수 있도록 허용 (className은 이전의 class등 상관없이 모든 걸 교체)
// contains: classList의 function,
// JS에서 명시한 class가 HTML element의 class에 포함되어 있는지 확인
