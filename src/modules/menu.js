function createCard(img, plate, price) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.setAttribute("src", img);
  image.classList.add("card-img");

  const plateName = document.createElement("p");
  plateName.classList.add("card-plate");

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");

  card.appendChild(image);
  card.appendChild(plateName);
  card.appendChild(cardPrice);

  return card;
};

function createMenu() {

  const tabContainer = document.createElement("div");
  tabContainer.classList.add("tab-container")

  const tabTitle = document.createElement("h2");
  tabTitle.classList.add("tab-title");
  tabTitle.textContent = "menu";

  const menuContainer = document.createElement("article");
  menuContainer.classList.add("menu-container")

  // Content for the menu cards
  menuContainer.appendChild(createCard("./img/plates/noodles.jpg", "Noodles with shrink", "$20"));
  menuContainer.appendChild(createCard("./img/plates/chocolate_cake.jpg", "Chocolate cake", "$10"));
  menuContainer.appendChild(createCard("./img/plates/hamburger.jpg", "Hamburger", "$12"));




  // for (let i = 0; i < 3; i++) {
  //   const menuCard = document.createElement("div");
  //   menuCard.classList.add("menu__card");

  //   const menuImg = document.createElement("img");
  //   menuImg.classList.add("menu__img");
  //   menuImg.setAttribute("src", pictures[i]);

  //   const menuContent = document.createElement("div")
  //   menuContent.classList.add("menu__content");

  //   const menuTitle = document.createElement("h2");
  //   menuTitle.classList.add("menu__title");
  //   menuTitle.textContent = titles[i];

  //   const menuText = document.createElement("p");
  //   menuText.classList.add("menu__text");
  //   menuText.textContent = text[i];

  //   const menuPrice = document.createElement("p");
  //   menuPrice.classList.add("menu__price");
  //   menuPrice.textContent = prices[i];

  //   menuContent.appendChild(menuTitle);
  //   menuContent.appendChild(menuText);
  //   menuContent.appendChild(menuPrice);

  //   menuCard.appendChild(menuImg);
  //   menuCard.appendChild(menuContent);

  //   menu.appendChild(menuCard);
  // }

  tabContainer.appendChild(tabTitle);
  tabContainer.appendChild(menuContainer);

  return tabContainer;
};

export default createMenu;