const noise = document.querySelector(".noise");
const play = document.querySelector(".play");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".background-container video");


const sounds = document.querySelectorAll(".sounds button");

const clock = document.querySelector(".clock");
const length = outline.getTotalLength();

//The time set to one hour
const time = document.querySelectorAll(".time button");
let fakeTime = 3600;

outline.style.strokeDashoffset = length;
outline.style.strokeDasharray = length;
clock.textContent = `${Math.floor(fakeTime / 60)}:${Math.floor(
  fakeTime % 60
)}`;

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    noise.src = this.getAttribute("soundS");
    video.src = this.getAttribute("videoS");
    checkPlaying(noise);
  });
});

play.addEventListener("click", function() {
  checkPlaying(noise);
});

time.forEach(option => {
  option.addEventListener("click", function() {
    fakeTime = this.getAttribute("timeRange");
    clock.textContent = `${Math.floor(fakeTime / 60)}:${Math.floor(
      fakeTime % 60
    )}`;
  });
});

const checkPlaying = noise => {
  if (noise.paused) {
    noise.play();
    video.play();
    play.src = "./loop/pause.svg";
  } else {
    noise.pause();
    video.pause();
    play.src = "./loop/play.svg";
  }
};

noise.ontimeupdate = function() {
  let currentTime = noise.currentTime;
  let elapsed = fakeTime - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  clock.textContent = `${minutes}:${seconds}`;
  let progress = length - (currentTime / fakeTime) * length;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeTime) {
    noise.pause();
    noise.currentTime = 0;
    play.src = "./loop/play.svg";
    video.pause();
  }
};