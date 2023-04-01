// Check sessionStorage for the theme
const savedTheme = sessionStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
}

// Get the theme toggle button and navigation links
const themeToggle = document.getElementById('themeToggle');
const navLinks = document.querySelectorAll('nav a');

// Set the current path for highlighting active links
const currentPath = window.location.pathname;

// Add event listener to the theme toggle button
themeToggle.addEventListener('click', () => {
  // Toggle the dark-theme class on the body element
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    sessionStorage.setItem('theme', '');
  } else {
    document.body.classList.add('dark-theme');
    sessionStorage.setItem('theme', 'dark-theme');
  }
});

// Highlight the active link based on the current path
navLinks.forEach((link) => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

// Animate navigation menu on page load
function animateNavMenu() {
  gsap.from('nav a', {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 1,
    delay: 0.5,
    ease: 'back.out(1.5)',
  });
}

// Check sessionStorage to see if the menu has already been animated
if (!sessionStorage.getItem('navAnimated')) {
  animateNavMenu();
  // Set the flag in sessionStorage to prevent further animations
  sessionStorage.setItem('navAnimated', 'true');
}

// Loader
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('fadeOut');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 200);
  }, 250);
});
