"use strict";
const test = document.querySelectorAll(".key");

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function getId(e) {
  const value = e.currentTarget.id;
  const audio = document.querySelector(`audio[data-key="${value}"]`);
  const key = document.querySelector(`.key[data-key="${value}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

test.forEach((item) => {
  item.addEventListener("click", getId);
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
