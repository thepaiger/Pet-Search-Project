/*
==========================SOURCES==========================

GUIDE FOR USING cURL
https://blog.postman.com/curl-and-postman-work-wonderfully-together/
STACKOVERFLOW WITH LINK TO GUTHUB TO CONVERT cURL TO JS FETCH
https://stackoverflow.com/questions/31039629/convert-curl-get-to-javascript-fetch/37801251
LINK TO CONVERT cURL to JS FETCH
https://kigiri.github.io/fetch/
*/

// ==========================API ACCESS DETAILS==========================

const DOMAIN = 'https://api.petfinder.com/v2';
const CATEGORY = '/animals';
const API_KEY = 'YaPWOgbfJAuKvB8xziX6gCwdkWfonmZFLbd0iGdJWKBrDwjoTb';
const API_SECRET = 'gkhz8FQAcHCcqgj4m9bc6tfKr6LfTZPzqFAd91U5';

// ==========================FETCH==========================

fetch("https://api.petfinder.com/v2/oauth2/token", {
  body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})
  .then((results) => {
    return results.json();
  })
  .then((resultsJSON) => {
    mainFetch(resultsJSON);
  })
  .catch((error) => {
    console.error(`ERROR: ${error}`);
  });

// FETCH ADDING IN ACCESS TOKEN - FUNCTION USED ABOVE IN FETCH
const mainFetch = (data) => {
  fetch(`https://api.petfinder.com/v2/${CATEGORY}`, {
    headers: {
      Authorization: `${data.token_type} ${data.access_token}`
    }
  })
    .then((results) => {
      return results.json();
    })
    .then((resultsJSON) => {
      console.log(resultsJSON);
      // need to figure out how to not use [0]? Names do change on refresh
      renderPets(resultsJSON.animals[0])
    })
    .catch((error) => {
      console.error(`ERROR: ${error}`);
    });
}

/* 
Connect API & initiate fetch
Be able to return results for species, gender, picture, name, bio
  Keys for searches:
    age
    breeds
    gender
    name
    photos[i]
    species
    url
    description

  pull pet picture, name, & description
  randomize info that is pulled up


  in renderPets - get 1 pet displaying and a new pet loaded on click of the 'next' button
    How to only access 1 at a time?
    
*/

const renderPets = (petInfo) => {
  // petInfo.forEach(pet => {
  document.querySelector('.pet-pic').src = petInfo.photos[0].medium;
  document.querySelector('.pet-name').innerText = petInfo.name;
  document.querySelector('.pet-bio').innerText = petInfo.description;
  // })
}





