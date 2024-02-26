// Set the date we're counting down to
const raceDate= new Date("Mar 10, 2024 08:30:00 GMT+0700").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const gap = raceDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour   = minute * 60;
  const day    = hour * 24; 

  //time calculation for remaining days,hours, seconds
  let dd = Math.floor(gap / day);
  let hh = Math.floor((gap % day) / hour);
  let mm = Math.floor((gap % hour) / minute);
  let ss = Math.floor((gap % minute) / second);

  // add leading 0 to single digits
  hh < 10 ? hh = "0" + hh : hh = hh;
  mm < 10 ? mm = "0" + mm : mm = mm;
  ss < 10 ? ss = "0" + ss : ss = ss;

  if (document.getElementById('dd')) 
    document.getElementById('dd').innerHTML = `${dd}`;
  if (document.getElementById('hh')) 
    document.getElementById('hh').innerHTML = `${hh}`;
  if (document.getElementById('mm')) 
    document.getElementById('mm').innerHTML = `${mm}`;
  if (document.getElementById('ss')) 
    document.getElementById('ss').innerHTML = `${ss}`;

  if (document.getElementById('cd-time')) 
    document.getElementById('cd-time').innerText =
      dd + " days " + " - " + 
      hh + " : " + mm +  " : " + ss + " hours";

  // If the count down is over, write some text 
  if (gap < 0) {
    clearInterval(x);
    if (document.getElementById('cd-time')) 
      document.getElementById("cd-time").innerText = 
        "LET'S GO RACING!!!";
    if (document.getElementById('countdown')) 
      document.getElementById('countdown').classList.add('hidden');
    // if (document.getElementById('cd-time')) 
    //   document.getElementById('cd-time').innerHTML=`${txt}`;
  }
}, 1000);
