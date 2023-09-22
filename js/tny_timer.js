"use strict";

showClock();
setInterval("showClock()", 1000)
function showClock() {
   var currentDay = new Date();
   var localDate = currentDay.toLocaleDateString();
   var localTime = currentDay.toLocaleTimeString();

   document.getElementById("currentTime").innerHTML = "<span>"+localDate+"</span><span>"+localTime+"</span>"; 
   
   var j4Date = nextJuly4(currentDay);
   j4Date - Math.floor(j4Date)*24;
   console.log(j4Date);
   var days = (j4Date - currentDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;

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