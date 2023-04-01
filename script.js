const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const navLinks = document.querySelectorAll('nav a');
const currentPath = window.location.pathname;

navLinks.forEach((link) => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

gsap.from('nav a', {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 1,
    delay: 0.5,
    ease: 'back.out(1.5)',
});

/* Add animations for other elements on the page */
gsap.from('h1, h2, p, img, form, input, textarea, button, pre', {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    delay: 1,
    ease: 'power3.out',
});

// Add this function to enable smooth scrolling between pages
function smoothScrollingTo(target) {
    const topOfElement = target.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scroll({ top: topOfElement, behavior: 'smooth' });
}

// Update the event listener for nav links
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId) || document.getElementsByName(targetId.slice(1))[0];
        if (target) {
            smoothScrollingTo(target);
        } else {
            location.href = targetId;
        }
    });
});

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scroll({ top: 0, behavior: 'smooth' });
});

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Removed duplicate load event listener
// window.addEventListener('load', () => {
//     const loader = document.querySelector('.loader');
//     loader.classList.add('fadeOut');
//     setTimeout(() => {
//         loader.style.display = 'none';
//     }, 500);
// });

// Updated menu item selection to use 'nav a' instead of '.menu-item'
document.querySelectorAll("nav a").forEach(function (menuItem) {
    menuItem.addEventListener("mouseenter", function () {
      if (!this.classList.contains("no-animation")) {
        this.classList.add("animate-me");
      }
    });
  
    menuItem.addEventListener("animationend", function () {
      this.classList.remove("animate-me");
      this.classList.add("no-animation");
    });
});

// ...
// Previous code remains the same

// Wrap the navigation menu animation in a function
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
  
  // Rest of the code remains the same
  