// Бургер-меню
const burger = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = mobileMenu.style.display === "flex";
    mobileMenu.style.display = isOpen ? "none" : "flex";
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });
}

// Плавний скрол до секцій
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const headerOffset = 80;
        const rect = el.getBoundingClientRect();
        const offset = rect.top + window.scrollY - headerOffset;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
  });
});

// Сабміт форми (демо)
function handleFormSubmit(e) {
  e.preventDefault();
  alert(
    "Дякуємо за звернення до IT SOLVER. Ми зв’яжемося з вами після опрацювання запиту."
  );
  e.target.reset();
  return false;
}

// Галерея кейсов (одно активное окно с iframe)
(function () {
  const slides = Array.from(document.querySelectorAll(".work-slide"));
  if (!slides.length) return;

  const prevBtn = document.querySelector(".gallery-arrow-prev");
  const nextBtn = document.querySelector(".gallery-arrow-next");
  const currentEl = document.getElementById("work-gallery-current");
  const totalEl = document.getElementById("work-gallery-total");

  let index = 0;
  const total = slides.length;
  if (totalEl) totalEl.textContent = String(total);

  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    if (currentEl) currentEl.textContent = String(index + 1);
  }

  function goNext() {
    index = (index + 1) % total;
    updateSlides();
  }

  function goPrev() {
    index = (index - 1 + total) % total;
    updateSlides();
  }

  if (nextBtn) nextBtn.addEventListener("click", goNext);
  if (prevBtn) prevBtn.addEventListener("click", goPrev);

  // свайп для мобіли (опціонально)
  let startX = null;

  const track = document.querySelector(".work-gallery-track");
  if (track) {
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) goNext();
        else goPrev();
      }
      startX = null;
    });
  }

  updateSlides();
})();
