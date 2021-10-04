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

// ==========================API ACCESS DETAILS==========================

const DOMAIN = 'https://api.petfinder.com/v2';
const CATEGORY = '/animals';
const API_KEY = 'YaPWOgbfJAuKvB8xziX6gCwdkWfonmZFLbd0iGdJWKBrDwjoTb';
const API_SECRET = 'gkhz8FQAcHCcqgj4m9bc6tfKr6LfTZPzqFAd91U5';
// const SPECIES = document.querySelector('#species');
// const SPECIES_VALUE = SPECIES.value;

// ==========================FETCH==========================

const button = document.querySelector('#see-matches');
// document.body.addEventListener('click', () => {
//   console.log('hi');
// })

button.addEventListener('click', () => {
  console.log('hello');

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

  // })
  // .catch((error) => {
  //   console.error(`ERROR: ${error}`);
});

// add event listener on original fetch, second fetch for type, 

// FETCH ADDING IN ACCESS TOKEN - FUNCTION USED ABOVE IN FETCH
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

const mainFetch = (data) => {
  // ?type=dog after category
  const SPECIES = document.querySelector('#species');
  const SPECIES_VALUE = SPECIES.options[SPECIES.selectedIndex].text;
  console.log(SPECIES_VALUE)
  fetch(`${DOMAIN}${CATEGORY}?type=${SPECIES_VALUE}`, {
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
  // .catch((error) => {
  //   console.error(`ERROR: ${error}`);
  // });
}

// add fetch for animal type - token, then type, then data


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
    Add if statement to filter out pets w/o photos
*/



// FIGURE OUT HOW TO FILTER OUT PETS W/O IMAGES & how to select only pets in filters
// if statement or .includes?

const renderPets = (petInfo) => {
  // petInfo.forEach(pet => {
  document.querySelector('.pet-pic').src = petInfo.photos[0].medium;
  document.querySelector('.pet-name').innerText = petInfo.name;
  document.querySelector('.pet-bio').innerText = petInfo.description;
  // })
}



// see this video for tutorial for sending form data to fetch API
// https://www.youtube.com/watch?v=c3qWHnJJbSY
// const form = document.querySelector('.form');
// form.addEventListener('submit', () => {

//   const formData = new FormData(this);


// })


