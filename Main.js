/*================ SCROLL REVEAL ================ */
document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });

  sr.reveal(".home-h3", { origin: "left" });
  sr.reveal(".home-h1", { delay: 500, origin: "left" });
  sr.reveal(".home-h2", { delay: 600, origin: "left" });
  sr.reveal(".home-h3", { delay: 400, origin: "left" });
  sr.reveal(".home-p", { delay: 800, origin: "left" });
  sr.reveal(".btn", { delay: 900, origin: "left" });
  sr.reveal(".social-media", { delay: 1000, origin: "left" });
  sr.reveal(".home-img", { delay: 1100, origin: "right" });
  // ==============================================================
  sr.reveal(".about-header ", { delay: 700 });
  sr.reveal(".about-background", { origin: "bottom" });
  sr.reveal(".about-experience ", { origin: "top" });
  sr.reveal(".front-end-container", { delay: 500 });
  sr.reveal(".back-end-container", { delay: 900 });
  sr.reveal(".ui-ux-container", { delay: 1400 });
  sr.reveal(".service-header", { delay: 500 });
  sr.reveal(".contact-input", { delay: 700 });
  sr.reveal(".contact-button", { delay: 800 });
});

/*================================= RESPONSIVE MENU BAR ==================================== */
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const closeToggle = document.querySelector(".close-btn");
  const navLinks = document.querySelector(".nav-links");

  let isNavLinksVisible = false;

  menuBtn.addEventListener("click", function () {
    if (!isNavLinksVisible) {
      navLinks.style.right = "-50%";
      closeToggle.style.display = "block"; // Show close toggle
      menuBtn.style.display = "none"; // Hide menu button
      isNavLinksVisible = true;
    } else {
      navLinks.style.right = "-100%";
      closeToggle.style.display = "none"; // Hide close toggle
      menuBtn.style.display = "block"; // Show menu button
      isNavLinksVisible = false;
    }
  });

  closeToggle.addEventListener("click", function () {
    navLinks.style.right = "-100%";
    closeToggle.style.display = "none"; // Hide close toggle
    menuBtn.style.display = "block"; // Show menu button
    isNavLinksVisible = false;
  });
});
