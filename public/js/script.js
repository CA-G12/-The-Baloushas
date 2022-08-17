const containerMatches = document.querySelector(`.container-matches`);
const getData = (endPoint) => {
  fetch(endPoint)
    .then((response) => response.json())
    .then((response) => {
      buildMainList(response);
    })
    .catch((err) => console.error(err));
};

const buildMainList = (response) => {
  response.forEach((element) => {
    renderCard(element);
  });
};

const renderCard = (node) => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  containerMatches.appendChild(card);

  //!
  const cardResult = document.createElement("div");
  cardResult.setAttribute("class", "card-result-part");
  card.appendChild(cardResult);

  //!
  const leagueName = document.createElement("p");
  leagueName.setAttribute("class", "leg-name");
  leagueName.textContent = node.competition.name;
  cardResult.appendChild(leagueName);

  //!
  const teamsName = document.createElement("h2");
  teamsName.setAttribute("class", "teams-name");
  teamsName.textContent = node.title;
  cardResult.appendChild(teamsName);

  //!
  const resultimg = document.createElement("img");
  resultimg.setAttribute("class", "result");
  resultimg.src = `${node.thumbnail}`;
  cardResult.appendChild(resultimg);
  //!
  const dateMatch = document.createElement("p");
  dateMatch.setAttribute("class", "date-match");
  dateMatch.textContent = node.date;
  cardResult.appendChild(dateMatch);
  //!

  const videoContainer = document.createElement("div");
  videoContainer.setAttribute("class", "card-video-part");
  videoContainer.innerHTML = `${node.embed}`;
  card.appendChild(videoContainer);
};

getData("/getMatches");

const sideMenu = document.querySelectorAll(`ul li p`);
sideMenu.forEach((ele) => {
  ele.addEventListener("click", () => {
    containerMatches.textContent = "";
    getData(`/getLeagueMatches/${ele.textContent}`);
  });
});
