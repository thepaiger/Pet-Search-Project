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
  * Fetch for animal type
  * Connect event listener to search button
  * Connect "Next" button to display next pet in array
    ** Need loop connected to next button to cycle through pets
    ** Use for loop starting at index 1? or forEach for entire 
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

  pull pet picture, name, & description
  randomize info that is pulled up

  in renderPets - get 1 pet displaying and a new pet loaded on click of the 'next' button
    How to only access 1 at a time?
    Add if statement to filter out pets w/o photos

  If statement to ignore pets without pictures
  




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
      renderFirstPet(resultsJSON.animals[0]);
      let i = 1;
      nextButton.addEventListener('click', () => {
        renderMorePets(resultsJSON.animals[i]);
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






// FIGURE OUT HOW TO FILTER OUT PETS W/O IMAGES & how to select only pets in filters
// if statement or .includes?

const renderFirstPet = (petInfo) => {
  document.querySelector('.pet-pic').src = petInfo.photos[0].medium;
  document.querySelector('.pet-name').innerText = petInfo.name;
  document.querySelector('.pet-bio').innerText = petInfo.description;
}

const renderMorePets = (petInfo) => {
  document.querySelector('.pet-pic').src = petInfo.photos[0].medium;
  console.log(petInfo);
  document.querySelector('.pet-name').innerText = petInfo.name;
  document.querySelector('.pet-bio').innerText = petInfo.description;
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