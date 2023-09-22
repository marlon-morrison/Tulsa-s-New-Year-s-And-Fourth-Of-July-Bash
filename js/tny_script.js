"use strict";
runClock();
setInterval("runClock()", 1000)

function runClock() {
   
   var currentDay = new Date();
   var datestr = currentDay.toLocaleDateString();
   var timestr = currentDay.toLocaleTimeString();
   
   document.getElementById("dateNow").innerHTML = datestr + "<br />" + timestr;
   
   var newYear = new Date("January 1, 2018");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay)/(1000*60*60*24);
   
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
   
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
   
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
   
}

showClock();
setInterval("showClock()", 1000)
function showClock() {
   var currentDay = new Date();
   var localDate = currentDay.toLocaleDateString();
   var localTime = currentDay.toLocaleTimeString();
   
   var j4Date = nextJuly4(currentDay);
   j4Date - Math.floor(j4Date)*24;
   console.log(j4Date);
   var days = (j4Date - currentDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;
console.log(days);
   document.getElementById("dLeft").textContent = Math.trunc(days);
   document.getElementById("hLeft").textContent = Math.trunc(hrs);
   document.getElementById("mLeft").textContent = Math.trunc(mins);
   document.getElementById("sLeft").textContent = Math.trunc(secs);
}
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}