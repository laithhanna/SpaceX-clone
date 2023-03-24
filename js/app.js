const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");

btn.addEventListener("click", (e) => {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
});
