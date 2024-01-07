function createHome() {

  const main = document.querySelector("#main");

  const home = document.createElement("div");
  home.classList.add("home");

  const homeAbout = document.createElement("p");
  homeAbout.classList.add("home-about");
  homeAbout.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est debitis quae perferendis delectus quo cum quidem tempora, enim vitae non tempore, laudantium molestias iusto corporis? Voluptates harum dignissimos ratione rerum.
`;

  home.appendChild(homeAbout);

  main.appendChild(home);
}

export default createHome;