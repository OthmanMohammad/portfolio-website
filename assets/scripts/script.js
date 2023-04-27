const navLinks = document.querySelectorAll('nav a');

// Set the current path for highlighting active links
const currentPath = window.location.pathname;


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
window.addEventListener('load', () => {
  console.log('Window loaded'); // Add this line
  const loader = document.querySelector('.loader');

  if (loader) {
    setTimeout(() => {
      loader.classList.add('fadeOut');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 200);
    }, 250);
  } else {
    console.error('Loader element not found');
  }
});





/* -------------skills in index---------------- */

const skills = document.querySelectorAll('.skill');

skills.forEach((skill) => {
    const borderColor = generateRandomColor();
    skill.style.borderColor = borderColor;
    skill.style.borderWidth = "3px"; // Increase border width
    skill.style.borderStyle = "solid";
    skill.style.borderRadius = "12px"; // Make borders rounder
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = borderColor;
    });
    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = '';
    });
});

function generateRandomColor() {
  const hue = Math.floor(Math.random() * 360); // random hue
  let saturation = Math.floor(Math.random() * 50) + 50; // saturation between 50% and 100%
  let lightness = Math.floor(Math.random() * 31) + 40; 
  let color;

  if (hue >= 200 && hue <= 240) { // blue range
    color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  } else if ((hue >= 350 && hue <= 360) || (hue >= 0 && hue <= 10) || (hue >= 340 && hue <= 345)) { // cherry red range
    saturation = Math.floor(Math.random() * 51) + 50; // saturation between 50% and 100%
    lightness = Math.floor(Math.random() * 21) + 25;
    color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  } else { // other colors
    color = generateRandomColor();
  }

  return color;
}


