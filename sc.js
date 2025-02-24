// Toggle Dropdown Menu
function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
}

// Typewriter Effect
const typewriterText = document.querySelector(".typewriter-text");
const phrases = ["Full Stack Developer", "Web Developer", "Tech Enthusiast"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, currentLetterIndex - 1);
        currentLetterIndex--;
    } else {
        typewriterText.textContent = currentPhrase.substring(0, currentLetterIndex + 1);
        currentLetterIndex++;
    }

    if (!isDeleting && currentLetterIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && currentLetterIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, 100);
    }
}

type();