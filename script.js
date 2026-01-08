// Ensure UnicornStudio initializes AFTER page load
window.addEventListener("load", () => {
  if (window.UnicornStudio) {
    UnicornStudio.init();
    console.log("UnicornStudio initialized");
  } else {
    console.error("UnicornStudio failed to load");
  }
});
// ---------------- TYPEWRITER EFFECT ----------------
const words = [
  "passionate developer",
  "Frontend Developer",
  "Competitive Programmer",
  "React Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 50;
const deletingSpeed = 100;
const delayBetweenWords = 1000;

const typewriter = document.getElementById("typewriter");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typewriter.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), delayBetweenWords);
    }
  } else {
    typewriter.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(
    typeEffect,
    isDeleting ? deletingSpeed : typingSpeed
  );
}

document.addEventListener("DOMContentLoaded", typeEffect);

