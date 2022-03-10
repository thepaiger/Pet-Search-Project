// Packages
// import axios from 'axios';

// // ==========================API DETAILS==========================

// const DOMAIN = 'https://api.petfinder.com/v2';
// const CATEGORY = '/animals';
// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_SECRET = process.env.REACT_APP_API_SECRET;

// // ==========================AXIOS CALL FOR TOKEN==========================

// const getToken = async () => {
//   try {
//     const token = await axios.get(`${DOMAIN}/oauth2/token`, {
//       body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//       method: "POST"
//     })
//   } catch (err) {
//     console.log(`Error: ${err.message}`);
//   }
// }

// export default getToken;



// const getToken = async () => {
//   const config = {
//     headers: { "Content-Type": "application/x-www-form-urlencoded" }
//   };

//   const bodyParameters = { body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}` };

//   try {
//     const res = await axios.post(`${DOMAIN}/oauth2/token`,
//       bodyParameters,
//       config
//     )
//     console.log(res.data)
//     setToken(res.data)
//   } catch (err) {
//     console.log(`Error: ${err.message}`);
//   }
// }




// ==========================SEND DATA TO MATCHES SCREEN??==========================

// IS THIS NEEDED IF NOT USING OWN BACKEND??
// NEED TO UPDATE FOR PRODUCTION
// const api = axios.create({
//   baseURL: `https://localhost:3000/matches/`
// });


// export default api;

