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
