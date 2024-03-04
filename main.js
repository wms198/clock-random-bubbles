const span1 = document.querySelector("#counterDiv span:nth-child(1)");
const span2 = document.querySelector("#counterDiv span:nth-child(2)");
const span3 = document.querySelector("#counterDiv span:nth-child(3)");
const stopBTN = document.querySelector("#stopBTN");
let seconds = 0;
let mins = 0;
let hours = 0;

const counterPID = setInterval(() => {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    mins++;
    if (mins === 60) {
      mins = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
      }
    }
  }

  span3.textContent = String(seconds).padStart(2, "0");
  span2.textContent = String(mins).padStart(2, "0");
  span1.textContent = String(hours).padStart(2, "0");
}, 100);
stopBTN.addEventListener("click", () => {
  clearInterval(counterPID);
});

setInterval(() => {
  // creat bubble
  const newSpan = document.createElement("span");
  newSpan.className = "bubble";
  // get page size
  const pageHeigh = screen.height;
  const pageWidth = screen.width;
  // get random numbers for top and left
  const randomTop = Math.floor(Math.random() * pageHeigh) + 1;
  const randomLeft = Math.floor(Math.random() * pageWidth) + 1;
  // set the random numbers for left and top of the new span
  newSpan.style.left = randomLeft + "px";
  newSpan.style.top = randomTop + "px";
  // add  the new created span
  document.body.append(newSpan);
}, 200);
