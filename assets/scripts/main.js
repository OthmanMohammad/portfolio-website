function setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        if (link.pathname === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setActiveLink();
});


document.addEventListener("DOMContentLoaded", function () {
    const lottieIcons = document.querySelectorAll(".lottie-icon");
  
    lottieIcons.forEach((icon) => {
      const animationDataUrl = icon.getAttribute("data-src");
      const loop = icon.getAttribute("data-loop") === "true";
  
      lottie.loadAnimation({
        container: icon,
        renderer: "svg",
        loop: loop,
        autoplay: true,
        path: animationDataUrl,
      });
    });
});


/* lottie icons */

document.addEventListener("DOMContentLoaded", function() {
    const lottieIcons = document.querySelectorAll(".lottie-icon");

    lottieIcons.forEach((icon) => {
        const animation = lottie.loadAnimation({
            container: icon,
            renderer: "svg",
            loop: JSON.parse(icon.dataset.loop),
            autoplay: true,
            path: icon.dataset.src,
        });

        icon.parentElement.addEventListener("mouseenter", () => {
            animation.setDirection(1);
            animation.play();
        });

        icon.parentElement.addEventListener("mouseleave", () => {
            animation.setDirection(-1);
            animation.play();
        });
    });
});

