document.addEventListener("DOMContentLoaded", function () {
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

  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  const slider = document.querySelector(".card-slider");
  const cards = document.querySelectorAll(".team-card");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

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

  const modal = document.getElementById("teamModal");
  const modalImg = modal.querySelector(".modal-img");
  const modalName = modal.querySelector(".modal-name");
  const modalRole = modal.querySelector(".modal-role");
  const modalBio = modal.querySelector(".modal-bio");
  const closeModal = modal.querySelector(".close-modal");

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
  ScrollReveal().reveal(".home-img, .services-container", { origin: "bottom" });
  ScrollReveal().reveal(
    ".home-content h1, .about-img, .headingg, .portfolio-box",
    { origin: "left" }
  );
  ScrollReveal().reveal(".home-content p", { origin: "right" });
  ScrollReveal().reveal(".footer", { origin: "bottom", interval: 200 });
});