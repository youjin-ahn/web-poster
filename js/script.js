console.log("lets see if this remains in your code")

const intro = document.getElementById("intro-screen");
const main = document.getElementById("main-screen");

let clicked = false;
let maskStarted = false;

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if (!maskStarted) {
    maskStarted = true;
    intro.style.transition = "none";
  }

  if (clicked) return;

  intro.style.maskImage = `radial-gradient(circle 150px at ${x}px ${y}px, black 100%, transparent 100%)`;
  intro.style.webkitMaskImage = `radial-gradient(circle 150px at ${x}px ${y}px, black 100%, transparent 100%)`;

  const dot = document.createElement("div");
  dot.classList.add("cursor-dot");
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  document.body.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 1500);
});

document.addEventListener("click", () => {
  clicked = true;
  intro.style.maskImage = "none";
  intro.style.webkitMaskImage = "none";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";
  }, 1000);
});
