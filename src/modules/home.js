function createHome() {

  const tabContainer = document.createElement("div");
  tabContainer.classList.add("tab-container");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-container");

  const tabTitle = document.createElement("h2");
  tabTitle.classList.add("tab-title");
  tabTitle.textContent = "Restaurant Page";

  const homeAbout = document.createElement("p");
  homeAbout.classList.add("home-about");
  homeAbout.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est debitis quae perferendis delectus quo cum quidem tempora, enim vitae non tempore, laudantium molestias iusto corporis? Voluptates harum dignissimos ratione rerum.
`;

  homeDiv.appendChild(tabTitle);

  main.appendChild(homeDiv);
}

export default createHome;