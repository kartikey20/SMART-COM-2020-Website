const navSlide = function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    burger.addEventListener("click", function() {
        /*Toggle Nav*/
        nav.classList.toggle("nav-active");
        //Animate Links
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 +
            10}s`;
        });
    });
};
navSlide();