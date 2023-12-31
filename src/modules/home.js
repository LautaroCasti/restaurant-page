export default function home(parentNode) {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const h1 = document.createElement("h1");
  h1.classList.add("home__title");
  h1.textContent = "Restaurant Page";

  const btn = document.createElement("button");
  btn.classList.add("button home__btn");
  btn.textContent = "Go to menu";

  homeDiv.appendChild(h1);
  homeDiv.appendChild(btn);

  parentNode.appendChild(homeDiv);
}