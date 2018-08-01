// var today = new Date();
// var options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric"
// };

// document.getElementById("cur-date").innerText = today.toLocaleDateString(
//   "en-US",
//   options
// );

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  var time = days[date.getDay()] + ", " + h + ":" + m + " " + session;
  document.getElementById("cur-date").innerText = time;
  document.getElementById("cur-date").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
