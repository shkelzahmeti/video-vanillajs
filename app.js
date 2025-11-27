const btnEl = document.querySelector(".switch-btn");
const videoEl = document.querySelector(".video-container");
const preloaderEl = document.querySelector(".preloader");

btnEl.addEventListener("click", function () {
  if (!btnEl.classList.contains("slide")) {
    btnEl.classList.add("slide");
    videoEl.pause();
  } else {
    btnEl.classList.remove("slide");
    videoEl.play();
  }
  // We didn't use toggle, because we also
  // wanted to add some functionality.
});

window.addEventListener("load", function () {
  preloaderEl.classList.add("hide-preloader");
});
