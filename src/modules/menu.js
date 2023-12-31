export default function menu(parentNode) {
  // Content for the menu cards
  const pictures = ["./img/noodles.jpg", "./img/hamburger.jpg", "./img/chocolate_cake.jpg"];

  const text = ["Noodles with shrink, vegetables and a delicious sauce", "Hamburger with all you like", "A really sweet chocolate cake with cream and jam"];

  const titles = ["Noodles with shrink", "Hamburger", "Chocolate cake"];

  const prices = ["$20", "$12", "10"];

  const menuContainer = document.createElement("section");
  menuContainer.classList.add("container")

  const menu = document.createElement("div");
  menu.classList.add("container__menu")

  for (let i = 0; i < 3; i++) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu__card");

    const menuImg = document.createElement("img");
    menuImg.classList.add("menu__img");
    menuImg.setAttribute("src", pictures[i]);

    const menuContent = document.createElement("div")
    menuContent.classList.add("menu__content");

    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu__title");
    menuTitle.textContent = titles[i];

    const menuText = document.createElement("p");
    menuText.classList.add("menu__text");
    menuText.textContent = text[i];

    const menuPrice = document.createElement("p");
    menuPrice.classList.add("menu__price");
    menuPrice.textContent = prices[i];

    menuContent.appendChild(menuTitle);
    menuContent.appendChild(menuText);
    menuContent.appendChild(menuPrice);

    menuCard.appendChild(menuImg);
    menuCard.appendChild(menuContent);

    menu.appendChild(menuCard);
  }

  menuContainer.appendChild(menu);

  parentNode.appendChild(menuContainer);
}