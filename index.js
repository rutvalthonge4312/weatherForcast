let temparature = document.getElementById("temparature");
let windSpeed = document.getElementById("windSpeed");
let humidityPer = document.getElementById("humidityPer");
let location12 = document.getElementById("location12");
let buttons = document.getElementById("buttons");
let currentDate = document.getElementById("currentDate");
let iconWeather = document.getElementById("iconWeather");
let currentTime = document.getElementById("currentTime");
let descriptionWeathoe = document.getElementById("descriptionWeathoe");
let maxTemp = document.getElementById("maxTemp");
let minTemp = document.getElementById("minTemp");
let duplicateDesc = document.getElementById("duplicateDesc");
let feelsLike = document.getElementById("feelsLike");
const apiKey = "074e3cf34f29d282a0d174bf7f90581b";
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function displayTime() {
  currentTime.innerHTML = new Date().toLocaleTimeString();
}
// let time = `${date.getHours()}:${date.getMinutes()}`;

setInterval(displayTime, 1000);

location12.addEventListener("click", function () {
  location12.style.border = "1px solid grey";
});

showDetail();
function showDetail() {
  let inputVal = location12.value;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDay = date.getDay();
  let cDate = `${day}-${month}-${year}`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  const request = new Request(apiUrl, {
    method: "GET",
  });
  fetch(request)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.cod == 404) {
        alert("City Not Found");
      } else {
        console.log(responseJson);
        maxTemp.innerHTML = responseJson.main.temp_max + "&degc";
        minTemp.innerHTML = responseJson.main.temp_min + "&degc";
        temparature.innerHTML = responseJson.main.temp + "&degc";
        humidityPer.innerHTML = responseJson.main.humidity + "%";
        windSpeed.innerHTML = responseJson.wind.speed + " mps";
        descriptionWeathoe.innerHTML = responseJson.weather[0].description;
        duplicateDesc.innerHTML = responseJson.weather[0].description;
        currentDate.innerHTML = weekday[currentDay] + " , " + cDate;
        let iconVal = responseJson.weather[0].icon;
        feelsLike.innerHTML =
          "Feels Like " + responseJson.main.feels_like + "&degc";
        iconWeather.src = `https://openweathermap.org/img/wn/${iconVal}.png`;
      }
    })
    .catch((err) => {
      if ((err = "Failed to fetch")) {
        alert("Check Your Internet Connection");
      }
      console.log(err);
    });
}
buttons.addEventListener("click", showDetail);
