function createHeader(id, text) {
  const header = document.createElement("header");
  header.setAttribute("id", id);

  const logo = document.createElement("h1");
  logo.textContent = text;
  header.appendChild(logo);

  return header;
};

function createFooter(id, text) {
  const footer = document.createElement("footer");
  footer.setAttribute("id", id);
  const footerText = document.createElement("h3");
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

  const homeBtn = createBtn("home", "home");
  const menuBtn = createBtn("menu", "menu");
  const contactBtn = createBtn("contact", "contact");

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
};

function createBtn(id, text) {
  const btn = document.createElement("button");
  btn.setAttribute("id", id);
  const span = document.createElement("span");
  span.textContent = text;
  btn.appendChild(span);

  return btn;
};

function loadPage() {
  const container = document.querySelector("#content");

  // Header
  const header = createHeader("header", "La velette");
  container.appendChild(header);

  // Nav 
  const nav = createNav("nav");
  container.appendChild(nav);

  // Main
  const main = createMain("main");
  container.appendChild(main);

  // Footer
  const footer = createFooter("footer", "This page was created by LautiCas");
  container.appendChild(footer);
}

export default loadPage;