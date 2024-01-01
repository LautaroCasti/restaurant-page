import loadPage from "./modules/initial-page-load";
import createMenu from "./modules/menu";
import createContact from "./modules/contact";
import createHome from "./modules/home";

function addEventsToNav() {

  const main = document.querySelector("#main");

  const homeBtn = document.querySelector("#home");
  const menuBtn = document.querySelector("#menu");
  const contactBtn = document.querySelector("#contact");

  homeBtn.addEventListener("click", () => {
    main.textContent = "";
    createHome();
  });

  menuBtn.addEventListener("click", () => {
    main.textContent = "";
    createMenu();
  });

  contactBtn.addEventListener("click", () => {
    main.textContent = "";
    createContact();
  });
}

// First load of the page
loadPage();
createHome();
addEventsToNav();