let finalDate = new Date("Oct 30, 2026 23:59:59").getTime();

let count = setInterval(function () {

   let nowDate = new Date().getTime();
   let difference = finalDate - nowDate;

   let day = Math.trunc(difference / (1000 * 60 * 60 * 24));
   let hour = Math.trunc((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minute = Math.trunc((difference % (1000 * 60 * 60)) / (1000 * 60));
   let second = Math.trunc((difference % (1000 * 60)) / 1000);

   document.querySelector("#day").innerHTML = day < 10 ? `0${day}` : day;
   document.querySelector("#hour").innerHTML = hour < 10 ? `0${hour}` : hour;
   document.querySelector("#minute").innerHTML = minute < 10 ? `0${minute}` : minute;
   document.querySelector("#second").innerHTML = second < 10 ? `0${second}` : second;

   if (difference < 0) {
      clearInterval(count);
   }

}, 1000)
//////////////////////////////////////
///////////////////////////////////////////
let numberStats = document.querySelectorAll(".box .number");
let statsSection = document.querySelector(".stats");
let skillSection = document.getElementById("our-skills");
let progress = document.querySelectorAll(".the-progress span");
let started = false;
window.onscroll = function () {
   if (scrollY >= statsSection.offsetTop - 10) {
      if (!started) {
         numberStats.forEach(number => {
            counting(number);
         });
         started = true;
      }
   }
   if (scrollY > skillSection.offsetTop + 50) {
      progress.forEach((span) => {
         span.style.width = span.dataset.width;
      })
   }
}
function counting(span) {
   let goal = span.dataset.goal;
   console.log(goal);
   let count = setInterval(function () {
      span.textContent++;
      if (span.textContent == goal) {
         clearInterval(count);
      }
   }, 1000 / goal);

}


