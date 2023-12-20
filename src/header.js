export default function header(parentNode) {
  const header = document.createElement("header");
  header.classList.add("header")

  const btnHome = document.createElement("button");
  const btnMenu = document.createElement("button");
  const btnContact = document.createElement("button");
  btnHome.classList.add("header__btn");
  btnMenu.classList.add("header__btn");
  btnContact.classList.add("header__btn");

  header.appendChild(btnHome);
  header.appendChild(btnMenu);
  header.appendChild(btnContact);

  parentNode.appendChild(header);
};