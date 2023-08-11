const body = document.querySelector("body");
function countdown() {
  const day0 = document.getElementById("day0");
  const day1 = document.getElementById("day1");
  const hour0 = document.getElementById("hour0");
  const hour1 = document.getElementById("hour1");
  const minute0 = document.getElementById("minute0");
  const minute1 = document.getElementById("minute1");
  const seconds0 = document.getElementById("seconds0");
  const seconds1 = document.getElementById("seconds1");
  let particularDate = new Date("August 19, 2023, 09:00:00").getTime();
  let currentDate = new Date().getTime();
  const remainingTime = particularDate - currentDate;
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
  day0.innerText = Math.floor(days / 10);
  day1.innerText = days % 10;
  hour0.innerText = Math.floor(hours / 10);
  hour1.innerText = hours % 10;
  minute0.innerText = Math.floor(minutes / 10);
  minute1.innerText = minutes % 10;
  seconds0.innerText = Math.floor(seconds / 10);
  seconds1.innerText = seconds % 10;
}

// setInterval(countdown, 1000);


// TO SHOW TIME 
function showTime(){
  const hour0 = document.getElementById("time-hr-0");
  const hour1 = document.getElementById("time-hr-1");
  const minute0 = document.getElementById("time-min-0");
  const minute1 = document.getElementById("time-min-1");
  const seconds0 = document.getElementById("time-sec-0");
  const seconds1 = document.getElementById("time-sec-1");
  let Hour = new Date().getHours()
  let currentHour;
  if (Hour <= 12) {
    currentHour = Hour;
  } else {
    currentHour = Hour - 12;
  }

  if (currentHour < 10) {
    hour0.innerText = 0
    hour1.innerText = (currentHour.toString())[0]
  } else {
    hour0.innerText = (currentHour.toString())[0]
    hour1.innerText = (currentHour.toString())[1]
  }
  let currentMinute = new Date().getMinutes()
  let currentSecond = new Date().getSeconds()
  
  if (currentMinute < 10) {
    minute0.innerText = 0
    minute1.innerText = (currentMinute.toString())[0]
  } else {
    minute0.innerText = (currentMinute.toString())[0]
    minute1.innerText = (currentMinute.toString())[1]
}
  if (currentSecond < 10) {
    seconds0.innerText = 0
    seconds1.innerText = (currentSecond.toString())[0]
  } else {
  seconds0.innerText = (currentSecond.toString())[0]
  seconds1.innerText = (currentSecond.toString())[1]
}
}
setInterval(showTime, 1000);



const flashyImg = document.getElementById("flashy-img");
const flashyHeader = document.getElementById("flashy-header");
const header = document.querySelector("header");

setInterval(()=> {
  flashyImg.classList.toggle("transformRight");
  flashyHeader.classList.toggle("transformLeft");
}, 10000);


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");

setInterval(() => {
  if (window.scrollY > 20) {
    header.style.background = "black"
  }
  else {
    header.style.background = "transparent"
  }

  if (window.innerWidth > 1024) {
    navLinks.classList.remove("active")
  }
}, 10);


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".navlinks li");

links.forEach(el => {
  el.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  })
})

