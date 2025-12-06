export function initMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const closeBtn = document.querySelector(".close-btn");

  const openMenu = () => {
    navLinks.classList.add("mobile-active");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    navLinks.classList.remove("mobile-active");
    document.body.style.overflow = "";
  };

  // Open menu
  hamburger.addEventListener("click", openMenu);

  // Close menu using X button
  closeBtn.addEventListener("click", closeMenu);

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}
