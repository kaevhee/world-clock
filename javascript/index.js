function updateTime() {
  //los angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesDateElement.innerHTML = moment().format("dddd Do MMMM yyyy");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    parisDateElement.innerHTML = moment().format("dddd Do MMMM yyyy");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss: [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  console.log(cityTimeZone);
  citiesElement.innerHTML = `
  <div class="city">
      <div>
      <h2>${cityName}</h2>
      <div class="date" >${cityTime.format("dddd Do MMMM yyyy")}</div>
    </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
