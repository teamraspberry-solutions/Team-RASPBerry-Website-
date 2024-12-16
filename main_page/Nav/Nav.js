document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        // Toggle visibility of the nav links
        nav.classList.toggle("nav-active");

        // Optionally, animate each link
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""; // Reset animation
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`;
            }
        });

        // Animate the burger icon to an "X"
        burger.classList.toggle("toggle");
    });
});
