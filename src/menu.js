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

  }


}