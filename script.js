console.log('is this on')

/*
==========================SOURCES==========================

GUIDE FOR USING cURL
https://blog.postman.com/curl-and-postman-work-wonderfully-together/
STACKOVERFLOW WITH LINK TO GUTHUB TO CONVERT cURL TO JS FETCH
https://stackoverflow.com/questions/31039629/convert-curl-get-to-javascript-fetch/37801251
LINK TO CONVERT cURL to JS FETCH
https://kigiri.github.io/fetch/
*/

/*
==========================Pseudocode==========================

1. Connect API & initiate fetch
  * ~~DONE~~ Fetch for bearer token
  * ~~DONE~~ Fetch for animal type
  * ~~DONE~~ Connect event listener to search button
  * ~~DONE~~ Connect "Next" button to display next pet in array
    ** ~~DONE~~ Connect event listener to next button to cycle through pets
    ** ~~DONE~~ Filter out animals without pictures w/ if statement
2. Be able to return results for pet details
  Keys for searches:
    age
    breeds
    gender
    name
    photos[i]
    species
    url
    description

3. ~~DONE~~ Pull pet picture, name, & description
  

NEED TO FIGURE OUT HOW TO CLEAR PREVIOUS SELECTION IF SELECTION CHANGES MID-ARRAY - NEXT BUTTON WILL REVERT TO PREVIOUS SEARCH


  Don't display Meet the Pets section until See Matches has been clicked
*/


const DOMAIN = 'https://api.petfinder.com/v2';
const CATEGORY = '/animals';
const API_KEY = 'YaPWOgbfJAuKvB8xziX6gCwdkWfonmZFLbd0iGdJWKBrDwjoTb';
const API_SECRET = 'gkhz8FQAcHCcqgj4m9bc6tfKr6LfTZPzqFAd91U5';

// ==========================FETCH==========================

const matchButton = document.querySelector('#see-matches');
const nextButton = document.querySelector('#next-match');
// const buttons = document.querySelectorAll('button');

matchButton.addEventListener('click', () => {
  fetch(`${DOMAIN}/oauth2/token`, {
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
      console.log(resultsJSON)
      mainFetch(resultsJSON);
    })
  // .catch((error) => {
  //   console.error(`ERROR: ${error}`);
  // })
});

// FETCH ADDING IN ACCESS TOKEN - FUNCTION USED ABOVE IN FETCH
const mainFetch = (data) => {
  const SPECIES = document.querySelector('#species');
  const SPECIES_VALUE = SPECIES.options[SPECIES.selectedIndex].text;
  console.log(SPECIES_VALUE)
  fetch(`${DOMAIN}${CATEGORY}?type=${SPECIES_VALUE}&limit=100`, {
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
      // renderFirstPet(resultsJSON.animals[0]);
      let i = 0;
      if (resultsJSON.animals[i].photos.length !== 0) {
        renderPets(resultsJSON.animals[i]);
      } else {
        console.log("NO PICTURE" + resultsJSON.animals[i]);
        i++;
        renderPets(resultsJSON.animals[i]);
      };
      i++;
      nextButton.addEventListener('click', () => {
        if (resultsJSON.animals[i].photos.length !== 0) {
          renderPets(resultsJSON.animals[i]);
        } else {
          console.log("NO PICTURE" + resultsJSON.animals[i]);
          i++;
          renderPets(resultsJSON.animals[i]);
        }
        i++;
      })
      // nextButton.addEventListener('click', () => {
      //   resultsJSON.animals.forEach(pet => {
      //     renderPets(pet);
      //   })
      // })
    })
  // .catch((error) => {
  //   console.error(`ERROR: ${error}`);
  // });
}

// add fetch for animal type - token, then type, then data

const renderPets = (petInfo) => {
  document.querySelector('.pet-pic').src = petInfo.photos[0].medium;
  document.querySelector('.pet-name').innerText = petInfo.name;
  document.querySelector('.pet-bio').innerText = petInfo.description;
  document.querySelector('.findPetHere').href = petInfo.url;
}










// const mainFetch = (data) => {
//   // ?type=dog after category
//   fetch(`${DOMAIN}/types`, {
//     headers: {
//       Authorization: `${data.token_type} ${data.access_token}`
//     }
//   })
//     .then((results) => {
//       return results.json();
//     })
//     .then((resultsJSON) => {
//       console.log(resultsJSON);
//       // need to figure out how to not use [0]? Names do change on refresh
//       renderPets(resultsJSON.animals)
//     })
//     .catch((error) => {
//       console.error(`ERROR: ${error}`);
//     });
// }