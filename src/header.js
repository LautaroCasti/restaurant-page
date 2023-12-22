export default function header(parentNode) {
  const header = document.createElement("header");
  header.classList.add("header")

  const nav = document.createElement("nav");
  nav.classList.add("header__nav")

  const menuList = document.createElement("ul");
  menuList.classList.add("nav__list")

  // This create the 3 links in the nav
  const itemHome = document.createElement("li");
  itemHome.classList.add("nav__item");
  const linkHome = document.createElement("a");
  linkHome.classList.add("nav__link");
  linkHome.textContent = "HOME"
  itemHome.appendChild(linkHome);

  const itemMenu = document.createElement("li");
  itemMenu.classList.add("nav__item");
  const linkMenu = document.createElement("a");
  linkMenu.classList.add("nav__link");
  linkMenu.textContent = "MENU";
  itemMenu.appendChild(linkMenu);

  const itemContact = document.createElement("li");
  itemContact.classList.add("nav__item");
  const linkContact = document.createElement("a");
  linkContact.classList.add("nav__link");
  linkContact.textContent = "CONTACT";
  itemContact.appendChild(linkContact);


  menuList.appendChild(itemHome);
  menuList.appendChild(itemMenu);
  menuList.appendChild(itemContact);

  nav.appendChild(menuList);

  header.appendChild(nav);

  parentNode.appendChild(header);
};