function onGoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live it", lat, lng);
}

function onGoErr() {
  console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGoOk, onGoErr);

// getCurrentPosition(모든 게 잘 됐을 때 실행 될 함수, 에러가 발생했을 때 실행 될 함수)
