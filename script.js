const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = "14 Jan 2021";

function countdown() {
 const newYearDate = new Date(newYears);
 const currentDate = new Date();
 const totalSeconds = new Date(newYearDate - currentDate) / 1000;
 const days = Math.floor(totalSeconds / 3600 / 24);
 const hours = Math.floor(totalSeconds / 3600) % 24;
 const minutes = Math.floor(totalSeconds / 60) % 60;
 const seconds = Math.floor(totalSeconds) % 60;


 myConverter(days, daysEl)
 myConverter(hours, hoursEl)
 myConverter(minutes, minsEl)
 myConverter(seconds, secondsEl)
}


function myConverter(time, htmlTag) {
 if (time < 10) {
  htmlTag.innerHTML = '0' + time;
 } else {
  htmlTag.innerHTML = time;
 }
}

//countdown timer

// initial call
countdown()

setInterval(countdown, 1000);


