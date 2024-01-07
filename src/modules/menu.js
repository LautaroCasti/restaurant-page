function createCard(img, plate, price) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.setAttribute("src", img);
  image.classList.add("card-img");

  const cardText = document.createElement("div");
  cardText.classList.add("card-text");

  const plateName = document.createElement("p");
  plateName.classList.add("card-plate");
  plateName.textContent = plate;

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.textContent = price;

  cardText.appendChild(plateName);
  cardText.appendChild(cardPrice);

  card.appendChild(image);
  card.appendChild(cardText);

  return card;
};

function createMenu() {

  const main = document.querySelector("#main");

  const tabTitle = document.createElement("h2");
  tabTitle.classList.add("tab-title");
  tabTitle.textContent = "Menu";

  const menu = document.createElement("div");
  menu.classList.add("menu")

  menu.appendChild(tabTitle);
  // Content for the menu cards
  menu.appendChild(createCard("./img/plates/noodles.jpg", "Noodles with shrink", "$20"));
  menu.appendChild(createCard("./img/plates/chocolate_cake.jpg", "Chocolate cake", "$10"));
  menu.appendChild(createCard("./img/plates/hamburger.jpg", "Hamburger", "$12"));




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

  main.appendChild(menu);
};

export default createMenu;