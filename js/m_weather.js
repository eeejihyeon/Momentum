const API_KEY = "6b6c4fa3d880c0aafac6b8e946c8a285";

function onGoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )} °C`;
    })
  );
}

function onGoErr() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGoOk, onGoErr);

// getCurrentPosition(모든 게 잘 됐을 때 실행 될 함수, 에러가 발생했을 때 실행 될 함수)

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API Key}
// API Key
// 6b6c4fa3d880c0aafac6b8e946c8a285

// fetch = promise로 당장 실행되지 않고 시간이 좀 걸린 뒤에 실행
// 응답 시간을 기다리기 위해 then 사용
