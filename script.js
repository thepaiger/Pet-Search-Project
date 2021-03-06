/*
==========================SOURCES==========================

GUIDE FOR USING cURL
https://blog.postman.com/curl-and-postman-work-wonderfully-together/
STACKOVERFLOW WITH LINK TO GUTHUB TO CONVERT cURL TO JS FETCH
https://stackoverflow.com/questions/31039629/convert-curl-get-to-javascript-fetch/37801251
LINK TO CONVERT cURL to JS FETCH
https://kigiri.github.io/fetch/
PAGE REFRESH FUNCTION
https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click
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
2. ~~DONE~~ Be able to return results for pet details
  * Keys for searches:
    ** age
    ** breeds
    ** gender
    ** name
    ** photos[i]
    ** species
    ** url
    ** description
3. ~~DONE~~ Pull pet picture, name, & description
4. ~~DONE~~ Don't display Meet the Pets section until See Matches has been clicked
*/

// ==========================FETCH DETAILS==========================

const DOMAIN = 'https://api.petfinder.com/v2';
const CATEGORY = '/animals';
const API_KEY = 'YaPWOgbfJAuKvB8xziX6gCwdkWfonmZFLbd0iGdJWKBrDwjoTb';
const API_SECRET = 'gkhz8FQAcHCcqgj4m9bc6tfKr6LfTZPzqFAd91U5';

// ==========================BUTTON DECLARATIONS==========================

const matchButton = document.querySelector('#see-matches');
const nextButton = document.querySelector('#next-match');

// ==========================FETCH FOR TOKEN==========================

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
    .catch((error) => {
      console.error(`ERROR: ${error}`);
    })
});

// ==========================FETCH FUNCTION FOR DATA==========================
// USED ABOVE IN FETCH

const mainFetch = (data) => {
  const SPECIES = document.querySelector('#species');
  const SPECIES_VALUE = SPECIES.options[SPECIES.selectedIndex].text;
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
      // HIDE SELECT SECTION AFTER FETCH
      const selectSection = document.querySelector("section.select");
      selectSection.style.display = "none";

      // SHOW PETS SECTION
      const petSection = document.querySelector("section.pets");
      petSection.style.display = "flex";
      // SET ANIMALS ARRAY INDEX
      let i = 0;
      // FIRST BUTTON
      // CHECK IF THERE IS A PHOTO
      if (resultsJSON.animals[i].photos.length !== 0 && resultsJSON.animals[i].photos[0].medium !== undefined && i !== 99) {
        console.log(i);
        renderPets(resultsJSON.animals[i]);
      // CHECK IF LAST ANIMAL HAS PHOTO, INCREMENT IF NOT
      } else if (i === 99 && resultsJSON.animals[i].photos.length === 0) {
        i = 0;
        while (resultsJSON.animals[i].photos.length === 0 || resultsJSON.animals[i].photos[0].medium === undefined) {
          console.log("NO PICTURE" + i);
          i++;
        }
        renderPets(resultsJSON.animals[i]);
      // CHECK IF ON LAST ANIMAL
      } else if (i === 99) {
        i = 0;
        while (resultsJSON.animals[i].photos.length === 0 || resultsJSON.animals[i].photos[0].medium === undefined) {
          console.log("NO PICTURE" + i);
          i++;
        }
        renderPets(resultsJSON.animals[i]);
      // IF NO PHOTOS, INCREMENT & TRY AGAIN
      } else {
        while (resultsJSON.animals[i].photos.length === 0 || resultsJSON.animals[i].photos[0].medium === undefined) {
          console.log("NO PICTURE" + i);
          i++;
        }
        renderPets(resultsJSON.animals[i]);
      };
      // INCREMENT FOR NEXT CLICK
      i++;
      // MOVE TO NEXT BUTTON
      nextButton.addEventListener('click', () => {
        // CHECK IF THERE IS A PHOTO
        if (resultsJSON.animals[i].photos.length !== 0 && resultsJSON.animals[i].photos[0].medium !== undefined && i !== 99) {
          console.log(i);
          renderPets(resultsJSON.animals[i]);
        // CHECK IF LAST ANIMAL HAS PHOTO, INCREMENT IF NOT
        } else if (i === 99 && resultsJSON.animals[i].photos.length === 0) {
          i = 0;
          while (resultsJSON.animals[i].photos.length === 0 || resultsJSON.animals[i].photos[0].medium === undefined) {
            console.log("NO PICTURE" + i);
            i++;
          }
          renderPets(resultsJSON.animals[i]);
        // CHECK IF ON LAST ANIMAL
        } else if (i === 99) {
          i = 0;
          while (resultsJSON.animals[i].photos.length === 0 || resultsJSON.animals[i].photos[0].medium === undefined) {
            console.log("NO PICTURE" + i);
            i++;
          }
          renderPets(resultsJSON.animals[i]);
        // IF NO PHOTOS, INCREMENT & TRY AGAIN
        } else {
          while (resultsJSON.animals[i].photos.length === 0 || resultsJSON.animals[i].photos[0].medium === undefined) {
            console.log("NO PICTURE" + i);
            i++;
          }
          renderPets(resultsJSON.animals[i]);
        }
        // INCREMENT FOR NEXT CLICK
        i++;
      })
    })
    .catch((error) => {
      console.error(`ERROR: ${error}`);
    });
}

// ==========================ADDING IN PET DETAILS==========================

const renderPets = (petInfo) => {
  document.querySelector('.pet-pic').src = petInfo.photos[0].medium;
  document.querySelector('.pet-name').innerText = petInfo.name;
  document.querySelector('.pet-details').innerText = `${petInfo.gender}  ??  ${petInfo.age}`;
  document.querySelector('.pet-bio').innerText = petInfo.description;
  document.querySelector('a.findPetHere').href = petInfo.url;
}

// ==========================HOME BUTTON REFRESH==========================

const refreshPage = () => {
  window.location.reload();
}

