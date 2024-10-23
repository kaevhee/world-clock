
function updateTime(){//los angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesDateElement.innerHTML = moment().format("dddd Do MMMM yyyy");
losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("h:mm:ss [<small>]A[</small>]")

//paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
parisDateElement.innerHTML = moment().format("dddd Do MMMM yyyy");
parisTimeElement.innerHTML = moment()
  .tz("Europe/Paris")
  .format("h:mm:ss: [<small>]A[</small>]");
}
updateTime()
setInterval(updateTime, 1000)
