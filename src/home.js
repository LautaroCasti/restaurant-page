export default function home(parentNode) {
  const h1 = document.createElement("h1")
  h1.classList.add("main__title")

  const btn = document.createElement("button");
  btn.classList.add("button");

  parentNode.appendChild(h1);
  parentNode.appendChild(btn);
}