// const endDate = "30 september 2023 11:00 PM"

// document.getElementById("end-date").innerText = endDate;
// const inputs = document.querySelectorAll("input")
//     // const clock = () => {

// // }

// function clock() {
//     const end = new Date(endDate)
//     const now = new Date()
//     const diff = (end - now) / 1000;

//     if (diff < 0) return;

//     // convert into days;
//     inputs[0].value = Math.floor(diff / 3600 / 24);
//     inputs[1].value = Math.floor(diff / 3600) % 24;
//     inputs[2].value = Math.floor(diff / 60) % 60;
//     inputs[3].value = Math.floor(diff) % 60;
// }

// // initial call
// clock()

// /**
//  *  1 day = 24 hrs
//  *  1 hr = 60 mins
//  *  60 min = 3600 sec
//  */

// setInterval(
//     () => {
//         clock()
//     },
//     1000
// )


function setCountDown(){

    let daysElement= document.getElementById('days')
    let hoursElement= document.getElementById('hours')
    let minElement= document.getElementById('min')
    let secondsElement= document.getElementById('seconds')




var countDownDate = new Date("30 september 2024 11:00 PM").getTime();


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.value=days;
    hoursElement.value=hours;
    minElement.value=minutes;
    secondsElement.value=seconds


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
}
