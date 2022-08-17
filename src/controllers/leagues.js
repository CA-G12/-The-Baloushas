const path = require("path");
const fetch = require("node-fetch");

const url = "https://free-football-soccer-videos1.p.rapidapi.com/v1/";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8cb17f407cmsh5da2090b6ffbac0p13821ejsn48ad67b6ea9b",
    "X-RapidAPI-Host": "free-football-soccer-videos1.p.rapidapi.com",
  },
};

const getMatches = (req, res) => {
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      res.json(json);
    })
    .catch((err) => console.error("error:" + err));
};

const getLeagueMatches = (req, res) => {
  fetch(url, options)
    .then((response) => response.json())
    .then((matches) => {
      res.json(getTopLegues(matches));
    })
    .catch((err) => console.error("error:" + err));
};

const getTopLegues = (matches) => {
  let topLeages = {
    "ENGLAND: Premier League": [],
    "SPAIN: La Liga": [],
    "ITALY: Serie A": [],
    "GERMANY: Bundesliga": [],
    "FRANCE: Ligue 1": [],
  };

  matches.forEach(match => {
    if (match.competition.name in topLeages) {
      topLeages[match.competition.name].push(match);
    }

  });
  return topLeages;
};

module.exports = { getMatches, getLeagueMatches };