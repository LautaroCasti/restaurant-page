function createHome() {

  const main = document.querySelector("#main");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-container");

  const tabTitle = document.createElement("h2");
  tabTitle.classList.add("tab-title");
  tabTitle.textContent = "Restaurant Page";

  homeDiv.appendChild(tabTitle);

  main.appendChild(homeDiv)
}

export default createHome;