document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  try {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const accent = "rgba(255, 152, 0, 1)";
    const dark = "#000";
    const light = "#fff";

    const timeline = gsap.timeline();
    timeline
      .to(".mil-preloader-animation", { opacity: 1, duration: 0.3 })
      .fromTo(
        ".mil-animation-1 .mil-h3",
        { y: "30px", opacity: 0 },
        { y: "0px", opacity: 1, stagger: 0.4, duration: 0.5 }
      )
      .to(
        ".mil-animation-1 .mil-h3",
        { opacity: 0, y: "-30", duration: 0.5 },
        "+=0.3"
      )
      .fromTo(
        ".mil-reveal-box",
        { opacity: 0 },
        { opacity: 1, x: "-30", duration: 0.1 }
      )
      .to(".mil-reveal-box", { width: "100%", x: 0, duration: 0.45 }, "+=0.1")
      .to(".mil-reveal-box", { right: "0", duration: 0 })
      .to(".mil-reveal-box", { width: "0%", duration: 0.3 })
      .fromTo(
        ".mil-animation-2 .mil-h3",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.5"
      )
      .to(
        ".mil-animation-2 .mil-h3",
        { opacity: 0, y: "-30", duration: 0.6 },
        "+=0.5"
      )
      .to(
        ".mil-preloader",
        { opacity: 0, ease: "sine", duration: 0.8 },
        "+=0.2"
      )
      .fromTo(
        ".mil-up",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "sine",
          duration: 0.8,
          onComplete: () => {
            const preloader = document.querySelector(".mil-preloader");
            if (preloader) preloader.classList.add("mil-hidden");
          },
        },
        "-=1"
      );
  } catch (e) {
    console.error("Preloader animation failed:", e);
  }

  try {
    const typed1 = new Typed(".auto-type", {
      strings: ["English Teacher", "Interpreter"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      smartBackspace: true,
      fadeOut: false,
    });

    const typed2 = new Typed(".type-auto", {
      strings: ["Kelompok 4", "Biografi"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      smartBackspace: true,
      fadeOut: false,
    });
  } catch (e) {
    console.error("Typed.js initialization failed:", e);
  }

  try {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
      menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
      });
    }
  } catch (e) {
    console.error("Hamburger menu initialization failed:", e);
  }

  try {
    const slider = document.querySelector(".card-slider");
    const cards = document.querySelectorAll(".team-card");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (!slider || cards.length === 0 || !prevBtn || !nextBtn) {
      throw new Error("Slider elements not found");
    }

    let cardWidth = cards[0].offsetWidth + 20;
    let currentPosition = 0;
    let visibleCards = window.innerWidth > 768 ? 3 : 1;
    let maxPosition = -(cards.length - visibleCards) * cardWidth;

    window.addEventListener("resize", () => {
      cardWidth = cards[0].offsetWidth + 20;
      visibleCards = window.innerWidth > 768 ? 3 : 1;
      maxPosition = -(cards.length - visibleCards) * cardWidth;
      currentPosition = Math.min(0, Math.max(currentPosition, maxPosition));
      slider.style.transform = `translateX(${currentPosition}px)`;
    });

    const updateSliderPosition = () => {
      slider.style.transition = "transform 0.5s ease";
      slider.style.transform = `translateX(${currentPosition}px)`;
    };

    nextBtn.addEventListener("click", () => {
      if (currentPosition > maxPosition) {
        currentPosition -= cardWidth;
        updateSliderPosition();
      } else {
        currentPosition = 0;
        updateSliderPosition();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentPosition < 0) {
        currentPosition += cardWidth;
        updateSliderPosition();
      } else {
        currentPosition = maxPosition;
        updateSliderPosition();
      }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    });

    slider.addEventListener("touchmove", (e) => {
      touchEndX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", () => {
      if (touchStartX - touchEndX > 50) {
        if (currentPosition > maxPosition) {
          currentPosition -= cardWidth;
          updateSliderPosition();
        } else {
          currentPosition = 0;
          updateSliderPosition();
        }
      }
      if (touchStartX - touchEndX < -50) {
        if (currentPosition < 0) {
          currentPosition += cardWidth;
          updateSliderPosition();
        } else {
          currentPosition = maxPosition;
          updateSliderPosition();
        }
      }
    });
  } catch (e) {
    console.error("Card slider initialization failed:", e);
  }

  try {
    const modal = document.getElementById("teamModal");
    const modalImg = modal.querySelector(".modal-img");
    const modalName = modal.querySelector(".modal-name");
    const modalRole = modal.querySelector(".modal-role");
    const modalBio = modal.querySelector(".modal-bio");
    const closeModal = modal.querySelector(".close-modal");

    if (
      !modal ||
      !modalImg ||
      !modalName ||
      !modalRole ||
      !modalBio ||
      !closeModal
    ) {
      throw new Error("Modal elements not found");
    }

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const imgSrc = card.querySelector("img").src;
        const name = card.querySelector("h3").textContent;
        const role = card.querySelector("p").textContent;

        modalImg.src = imgSrc;
        modalName.textContent = name;
        modalRole.textContent = role;
        modalBio.textContent = role;
        modal.style.display = "flex";
      });
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  } catch (e) {
    console.error("Modal initialization failed:", e);
  }

  try {
    ScrollReveal({
      reset: false,
      distance: "80px",
      duration: 2000,
      delay: 200,
      mobile: false,
    });

    ScrollReveal().reveal(".home-content, .heading, .about-content", {
      origin: "top",
    });
    ScrollReveal().reveal(".home-img, .services-container", {
      origin: "bottom",
    });
    ScrollReveal().reveal(
      ".home-content h1, .about-img, .headingg, .portfolio-box",
      { origin: "left" }
    );
    ScrollReveal().reveal(".home-content p", { origin: "right" });
    ScrollReveal().reveal(".footer", { origin: "bottom", interval: 200 });
  } catch (e) {
    console.error("ScrollReveal initialization failed:", e);
  }
});
