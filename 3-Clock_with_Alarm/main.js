




function showtime() {
  const time = new Date();

  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let amorpm = document.getElementById("am-pm");

  //assigning 'am' or 'pm' to indicate time of the day
  if (h >= 12) {
    amorpm.innerHTML = "PM";
  } else {
    amorpm.innerHTML = "AM";
  }

  //make clock a 12-hour time clock
  if (h > 12) {
    h = h - 12;
  }

  //add '0' to hour, minute & second when they are less 10
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  setInterval(showtime, 1000);

  //print current date and time to the DOM
  document.getElementById("hours").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = s;
}
showtime();


