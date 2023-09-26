// Set the date we're counting down to
var countDownDate = new Date("Nov 11, 2023 07:59:59 GMT+0700").getTime();

function addZero(num){
   if (num < 10){
      num = "0" + num;
      return num;
   } else {
     return num;
   }
}

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours   = addZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  var minutes = addZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = addZero(Math.floor((distance % (1000 * 60)) / 1000));
    
  // Output the result in an element with id="demo"
  var show_time = document.getElementById("counter");
  show_time.innerHTML = days + " days " + " - " + 
     + hours + " : "
     + minutes +  " : "
     + seconds + " hours";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "RACING!!!";
  }
}, 1000);
