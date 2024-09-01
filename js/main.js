const navbarVisibilityThreshold = 400;

function updateNavbarVisibility() {
    const scrollPosition = window.scrollY;
    const navbar = document.getElementById("navbar")

    if (scrollPosition >= navbarVisibilityThreshold) {
        navbar.style.visibility = "visible";
        navbar.classList.add("fadeInDown");
    } else {
        navbar.style.visibility = "hidden";
        navbar.classList.remove("fadeInDown");
    }
}

window.addEventListener("scroll", updateNavbarVisibility);
updateNavbarVisibility();

