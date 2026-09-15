document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  // Mobile navigation
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }

  // Close mobile menu with Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      mobileMenu?.classList.remove("active");
    }
  });

  // Reveal sections as they enter the screen
  const revealItems = document.querySelectorAll(
    ".intro-grid, .section-heading, .collection-card, .feature-content, .feature-image, .about-grid, .visit-grid"
  );

  revealItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(24px)";
    item.style.transition =
      "opacity 0.8s ease, transform 0.8s cubic-bezier(.2,.7,.2,1)";
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observerInstance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => observer.observe(item));

  // Slight stagger for collection cards
  const cards = document.querySelectorAll(".collection-card");

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 100}ms`;
  });

  // Smooth anchor navigation fallback
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});