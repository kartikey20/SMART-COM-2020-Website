const navSlide = function() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const body = document.querySelector("body");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    /*Toggle Nav*/
    nav.classList.toggle("nav-active");
    /*  Toggle body*/
    body.classList.toggle("nav-body");
    /*    Animate links*/
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        /*Burger Animation*/
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.4}s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};
navSlide();
