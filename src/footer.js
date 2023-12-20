export default function footer(parentNode) {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.classList.add("footer__copy");

  footer.appendChild(copyright);

  parentNode.appendChild(footer);
}