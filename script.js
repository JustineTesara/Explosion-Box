const box = document.getElementById("explosionBox");
const body = document.querySelector("body");

box.addEventListener("click", () => {
  box.classList.toggle("open");

  // spawn floating hearts if opening
  if (box.classList.contains("open")) {
    for (let i = 0; i < 15; i++) {
      let heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.bottom = "0px";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      body.appendChild(heart);

      // remove after animation
      setTimeout(() => {
        heart.remove();
      }, 4000);
    }
  }
});
