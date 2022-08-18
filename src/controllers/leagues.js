const path = require("path");
const fetch = require("node-fetch");
const { json } = require("express");
require('dotenv').config()


const url = "https://free-football-soccer-videos1.p.rapidapi.com/v1/";

const options = {
  method: "GET",
  headers: {
    
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "free-football-soccer-videos1.p.rapidapi.com"

  },
};

const getMatches = (req, res) => {

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      json = json.slice(50)
      res.json(json);
    })
    .catch((err) => console.error("error:" + err));
};

const getLeagueMatches = (req, res) => {
  console.log(req.params)
  let keys = {
    'Premier League': "ENGLAND: Premier League",
    'La Liga': "SPAIN: La Liga",
    'Serie A': "ITALY: Serie A",
    'Bundesliga': "GERMANY: Bundesliga",
    'Ligue 1': "FRANCE: Ligue 1"
  }
  fetch(url, options)
    .then((response) => response.json())
    .then((matches) => {
      //console.log(getTopLegues(matches)[keys[req.params['name']]])

      res.json(getTopLegues(matches)[keys[req.params['name']]]);
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


