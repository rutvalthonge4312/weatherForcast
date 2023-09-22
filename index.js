let temparature = document.getElementById("temparature");
let windSpeed = document.getElementById("windSpeed");
let humidityPer = document.getElementById("humidityPer");
let location12 = document.getElementById("location12");
let buttons = document.getElementById("buttons");
let currentDate = document.getElementById("currentDate");
let descriptionWeathoe = document.getElementById("descriptionWeathoe");
const apiKey = "074e3cf34f29d282a0d174bf7f90581b";
showDetail();
function showDetail() {
  let inputVal = location12.value;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let cDate = `${day}-${month}-${year}`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  const request = new Request(apiUrl, {
    method: "GET",
  });
  fetch(request)
    .then((response) => response.json())
    .then((responseJson) => {
      //var y = document.createTextNode(responseJson.wind);
      // para.appendChild(y);
      console.log(responseJson);
      /*/
      temparature.appendChild(document.createTextNode(responseJson.main.temp));
      humidityPer.appendChild(
        document.createTextNode(responseJson.main.humidity)
      );
      windSpeed.appendChild(document.createTextNode(responseJson.wind.speed));
      descriptionWeathoe.appendChild(
        document.createTextNode(responseJson.weather[0].description)
      );*/
      temparature.innerHTML = responseJson.main.temp + "&degc";
      humidityPer.innerHTML = responseJson.main.humidity + "%";
      windSpeed.innerHTML = responseJson.wind.speed + " mps";
      descriptionWeathoe.innerHTML = responseJson.weather[0].description;
      currentDate.innerHTML = cDate;
    })
    .catch((err) => {
      console.log(err);
    });
}
buttons.addEventListener("click", showDetail);
