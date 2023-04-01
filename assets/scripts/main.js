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
