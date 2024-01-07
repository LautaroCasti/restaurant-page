function createHeader(id, text) {
  const header = document.createElement("header");
  header.setAttribute("id", id);

  const logo = document.createElement("h1");
  logo.textContent = text;
  header.appendChild(logo);

  const nav = createNav("nav");
  header.appendChild(nav);

  return header;
};

function createFooter(id, text) {
  const footer = document.createElement("footer");
  footer.setAttribute("id", id);
  const footerText = document.createElement("p");
  footerText.textContent = text;
  footer.appendChild(footerText);
  return footer;
};

function createMain(id) {
  const main = document.createElement("main");
  main.setAttribute("id", id);
  return main;
};

function createNav(id) {
  const nav = document.createElement("nav");
  nav.setAttribute("id", id);

  const homeBtn = createBtn("home-btn", "Home");
  homeBtn.classList.add("active");
  const menuBtn = createBtn("menu-btn", "Menu");
  const contactBtn = createBtn("contact-btn", "Contact");

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
};

function createBtn(id, text) {
  const btn = document.createElement("button");
  btn.setAttribute("id", id);
  btn.textContent = text;

  return btn;
};

function loadPage() {
  const container = document.querySelector("#content");

  // Header
  const header = createHeader("header", "La velette");
  container.appendChild(header);

  // Main
  const main = createMain("main");
  container.appendChild(main);

  // Footer
  const footer = createFooter("footer", "This page was created by LautiCas");
  container.appendChild(footer);
}

export default loadPage;