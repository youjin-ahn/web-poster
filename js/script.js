console.log("lets see if this remains in your code");

document.addEventListener("DOMContentLoaded", function () {
  console.log("script loaded!");

  const intro = document.getElementById("intro-screen");
  const main = document.getElementById("main-screen");
  const homeLink = document.querySelector('.home-link');

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

  function handleIntroClick() {
    clicked = true;

    intro.style.maskImage = "none";
    intro.style.webkitMaskImage = "none";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
    }, 1000);

    intro.removeEventListener("click", handleIntroClick);
  }

  intro.addEventListener("click", handleIntroClick);

  homeLink.addEventListener('click', function(e) {
    e.preventDefault();

    main.style.display = 'none';
    intro.style.display = 'flex';
    intro.style.opacity = '1';
    intro.style.maskImage = 'none';
    intro.style.webkitMaskImage = 'none';

    clicked = false;
    maskStarted = false;

    intro.addEventListener("click", handleIntroClick);
  });

  const thumbnails = document.querySelectorAll('.thumbnail');
  const cards = document.querySelectorAll('.text-card');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('mouseenter', () => {
      const target = thumb.getAttribute('data-target');

      cards.forEach(card => {
        card.classList.remove('active');
      });

      document.getElementById(target).classList.add('active');
    });
  });

  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  cursor.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 5v14M5 12h14" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  thumbnails.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });

    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
});
