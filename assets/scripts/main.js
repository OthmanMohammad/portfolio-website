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
