const containerMatches = document.querySelector(`.container-matches`);
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
prevBtn.disabled = true;
let start = 7;
const getData = (endPoint) => {
  fetch(endPoint)
    .then((response) => response.json())
    .then((response) => {
      localStorage.setItem("allmatches", JSON.stringify(response));
      buildMainList(response.slice(0,7));
    })
    .catch((err) => console.error(err));
};

const buildMainList = (response) => {
  console.log(response)
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

nextBtn.addEventListener("click", () => {
  prevBtn.disabled = false;
  containerMatches.textContent = "";
  let matches = localStorage.getItem("allmatches");
  matches = JSON.parse(matches);

  if (matches.length <= 7) {
    buildMainList(matches);

    return;
  }

  if (start + 7 < matches.length) {
    buildMainList(matches.slice(start, start + 7));
    start += 7;
  } else {
    buildMainList(matches.slice(start));

    nextBtn.disabled = true;
  }
});

prevBtn.addEventListener("click", () => {
  let matches = localStorage.getItem("allmatches");
  matches = JSON.parse(matches);

  if (matches.length <= 7) {
    buildMainList(matches);

    return;
  }

  if (start - 14 >= 0) {
    if (nextBtn.disabled) {
      nextBtn.disabled = false;
    }
    containerMatches.textContent = "";
    start -= 7;
    buildMainList(matches.slice(start - 7, start));
    if (start - 7 === 0) {
      prevBtn.disabled = true;
    }
  }
});
