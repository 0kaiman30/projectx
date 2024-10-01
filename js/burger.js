// show-mobile-btn  - krestik
// show-nav  - навигация
// show-backdrop - backrop
const burgerMaker = () => {
  const burger = document.querySelector(".mobile-btn");
  const nav = document.querySelector(".nav");
  const backdrop = document.querySelector(".backdrop");
  const navItems = document.querySelectorAll(".nav > li");

  const removeClasses = () => {
    burger.classList.remove("show-mobile-btn");
    nav.classList.remove("show-nav");
    backdrop.classList.remove("show-backdrop");
  };

  burger.addEventListener("click", () => {
    burger.classList.toggle("show-mobile-btn");
    nav.classList.toggle("show-nav");
    backdrop.classList.toggle("show-backdrop");
  });

  backdrop.addEventListener("click", removeClasses);

  navItems.forEach((el) => {
    el.addEventListener("click", removeClasses);
  });
};
burgerMaker();
