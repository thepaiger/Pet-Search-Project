/*  
GUIDE FOR USING cURL
https://blog.postman.com/curl-and-postman-work-wonderfully-together/
STACKOVERFLOW WITH LINK TO GUTHUB TO CONVERT cURL TO JS FETCH
https://stackoverflow.com/questions/31039629/convert-curl-get-to-javascript-fetch/37801251
LINK TO CONVERT cURL to JS FETCH
https://kigiri.github.io/fetch/
*/



const DOMAIN = 'https://api.petfinder.com/v2';
const CATEGORY = '/animals';
const API_KEY = 'YaPWOgbfJAuKvB8xziX6gCwdkWfonmZFLbd0iGdJWKBrDwjoTb';
const API_SECRET = 'gkhz8FQAcHCcqgj4m9bc6tfKr6LfTZPzqFAd91U5';


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
    })
    .catch((error) => {
      console.error(`ERROR: ${error}`);
    });
}








