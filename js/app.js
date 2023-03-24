const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", (e) => {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
});

document.addEventListener("scroll", (e) => {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
});

function countUp() {
  counters.forEach((counter) => {
    counter.textContent = "0";

    const updateCounter = () => {
      const target = Number(counter.getAttribute("target"));

      //Get the current counter value
      const c = Number(counter.textContent);

      //Create an increment
      const increment = target / 100;

      //If counter is less than target, add increment
      if (c < target) {
        // Round up and set the counter value
        counter.textContent = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 20);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
