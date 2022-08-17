const btn = document.querySelector(`#test`);


  fetch("/getMatches")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
