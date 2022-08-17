const path = require("path");
const fetch = require("node-fetch");

const getMatches = (req, res) => {
  console.log("Here is the getMatches controller ");

  const url = "https://free-football-soccer-videos1.p.rapidapi.com/v1/";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8cb17f407cmsh5da2090b6ffbac0p13821ejsn48ad67b6ea9b",
      "X-RapidAPI-Host": "free-football-soccer-videos1.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      res.json(json);
    })
    .catch((err) => console.error("error:" + err));
};



module.exports = { getMatches };
