// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
}

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Toggle on button click
themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});


// welcome message
const slides = document.querySelectorAll('main article');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Initialize first slide active
showSlide(currentIndex);


//Scrolling Animation
var copy = document.querySelector(".loop-slide").cloneNode(true);
document.querySelector('.loop').appendChild(copy);


// Destination Section
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.destination-card');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        // Collapse other expanded cards
        cards.forEach(c => {
          if (c !== card) {
            c.classList.remove('expanded');
          }
        });

        // Toggle current card
        card.classList.toggle('expanded');
      });
    });
  });