
{
  /* <section class="container-matches">
<div class="card">
  <div class="card-result-part">
    <p class="leg-name">SPAIN: LA LIGA</p>
    <h2 class="teams-name">BARCELONA VS RAYO VALLECANO</h2>
    <img class="result" src="./result-match.jpeg" alt="" />
    <p class="date-match">22:00, Saturday, August 13</p>
  </div>

  <div class="card-video-part">
    <h2>Watch the match summary</h2>
  
  </div>
</div>
</section> */
}

fetch("/getMatches")
  .then((response) => response.json())
  .then((response) => {
    
    console.log( response);
    const containerMatches = document.querySelector(`.container-matches`);


    //!
    response= response.slice(60,75)
    response.forEach((element , i ) => {

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
    leagueName.textContent = response[i].competition.name;
    cardResult.appendChild(leagueName);

    //!
    const teamsName = document.createElement("h2");
    teamsName.setAttribute("class", "teams-name");
    teamsName.textContent = response[i].title;
    // console.log('*******teams' ,response[i].title )
    cardResult.appendChild(teamsName);

    //!
    const resultimg = document.createElement("img");
    resultimg.setAttribute("class", "result");
    resultimg.src=`${response[i].thumbnail}`
    cardResult.appendChild(resultimg);
    //!
    const dateMatch = document.createElement("p");
    dateMatch.setAttribute("class", "date-match");
    dateMatch.textContent = response[i].date;
    cardResult.appendChild(dateMatch);
    //!

    const videoContainer = document.createElement("div");
    videoContainer.setAttribute("class", "card-video-part");
    videoContainer.innerHTML =`${response[i].embed}`
    card.appendChild(videoContainer);
  })
  }).catch((err) => console.error(err));


