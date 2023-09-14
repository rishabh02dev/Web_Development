const clock = document.querySelector(".clock");

let second = 0,
  min = 0,
  hr = 0,
  intervalId;

const startStopWatch = () => {
  intervalId = setInterval(() => {
    if (second < 59) {
      second++;
    }
    else if (min >= 59) {
      hr++;
      min = 0;
    } else {
      second = 0;
      min++;
    }

    const seconds = String(second).padStart(2, "0");
    const mins = String(min).padStart(2,"0");
    const hrs = String(hr).padStart(2,"0");

    clock.innerText =`${hrs}: ${mins}: ${seconds}`;

  }, 1000);
};

const stopStopWatch = () => {
  clearInterval(intervalId);
};
