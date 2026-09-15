document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE MENU
  ========================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        navMenu.classList.remove("open");
      }
    });
  }


  /* =========================
     SMOOTH REVEAL
  ========================= */

  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-card, .reveal-image"
  );

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach(element => {
    observer.observe(element);
  });


  /* =========================
     SMOOTH ANCHOR NAVIGATION
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const headerOffset = 20;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  });


  /* =========================
     BUTTON ARROW MICRO MOTION
  ========================= */

  document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {
      const arrow = button.querySelector("b");

      if (arrow) {
        arrow.style.transform = "translate(4px, -2px)";
      }
    });

    button.addEventListener("mouseleave", () => {
      const arrow = button.querySelector("b");

      if (arrow) {
        arrow.style.transform = "";
      }
    });

  });

});
