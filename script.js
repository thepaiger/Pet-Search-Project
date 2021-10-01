console.log('hi')

const DOMAIN = 'https://api.petfinder.com/v2';
const CATEGORY = '/animals';
const API_KEY = 'YaPWOgbfJAuKvB8xziX6gCwdkWfonmZFLbd0iGdJWKBrDwjoTb';
const API_SECRET = 'gkhz8FQAcHCcqgj4m9bc6tfKr6LfTZPzqFAd91U5';



// fetch(`${DOMAIN}${API_KEY}&s=${input}`)
//     .then((results) => {
//       return results.json();
//     })
//     .then((resultsJSON) => {
//       console.log(resultsJSON);

//       renderList(resultsJSON.Search);

//     })
//     .catch((error) => {
//       console.error(`ERROR: ${error}`);
//     });

fetch(`curl -H "Authorization: Bearer ${API_KEY}" GET ${DOMAIN}${CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}`)
    .then((results) => {
      return results.json();
    })
    .then((resultsJSON) => {
      console.log(resultsJSON);

      renderList(resultsJSON.Search);

    })
    .catch((error) => {
      console.error(`ERROR: ${error}`);
    });