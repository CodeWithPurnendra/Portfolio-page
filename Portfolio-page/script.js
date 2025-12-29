const progressBar = document.querySelectorAll(".progress-bar");

progressBar.forEach((bar) => {
  let target = bar.getAttribute("data-percentage");
  let current = 0;
  const intervel = setInterval(() => {
    if (current >= target) {
      clearInterval(intervel);
    } else {
      current++;
      bar.style.width = current + "%";
    }
  }, 20);
});
