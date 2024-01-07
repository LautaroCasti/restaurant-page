import loadPage from "./modules/initial-page-load";
import createMenu from "./modules/menu";
import createContact from "./modules/contact";
import createHome from "./modules/home";

function addEventsToNav() {

  const main = document.querySelector("#main");

  const homeBtn = document.querySelector("#home-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const contactBtn = document.querySelector("#contact-btn");

  homeBtn.addEventListener("click", () => {
    main.textContent = "";
    homeBtn.classList.toggle("active");
    menuBtn.classList.remove("active");
    contactBtn.classList.remove("active");
    createHome();
  });

  menuBtn.addEventListener("click", () => {
    main.textContent = "";
    homeBtn.classList.remove("active");
    menuBtn.classList.toggle("active");
    contactBtn.classList.remove("active");
    createMenu();
  });

  contactBtn.addEventListener("click", () => {
    main.textContent = "";
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
    contactBtn.classList.toggle("active");
    createContact();
  });
}

// First load of the page
loadPage();
createHome();
addEventsToNav();