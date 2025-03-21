document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi Typed.js untuk dua elemen sekaligus
  new Typed(".auto-type", {
    strings: ["English Teacher", "Interpreter"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });

  new Typed(".type-auto", {
    strings: ["Kelompok 4", "Biografi"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
  });

  // Pastikan fungsi updateCounter tersedia sebelum memanggilnya
  if (typeof updateCounter === "function") {
    updateCounter();
  }
});


//============================= scroll reveal =============================//
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

// Reveal sections on scroll
ScrollReveal().reveal(".home-content, .heading, .about-content", {
  origin: "top",
});
ScrollReveal().reveal(".home-img, .services-container", { origin: "bottom" });
ScrollReveal().reveal(
  ".home-content h1, .about-img, .headingg, .portfolio-box",
  { origin: "left" },
);
ScrollReveal().reveal(".home-content p", { origin: "right" });

// Adding additional reveal options for footer
ScrollReveal().reveal(".footer", { origin: "bottom", interval: 200 });