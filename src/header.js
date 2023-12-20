export default function header(parentNode) {
  const header = document.createElement("header");
  header.classList.add("header")

  const nav = document.createElement("nav");
  nav.classList.add("header__nav")

  const btnHome = document.createElement("button");
  const btnMenu = document.createElement("button");
  const btnContact = document.createElement("button");
  btnHome.classList.add("header__btn");
  btnMenu.classList.add("header__btn");
  btnContact.classList.add("header__btn");

  nav.appendChild(btnHome);
  nav.appendChild(btnMenu);
  nav.appendChild(btnContact);

  header.appendChild(nav);

  parentNode.appendChild(header);
};