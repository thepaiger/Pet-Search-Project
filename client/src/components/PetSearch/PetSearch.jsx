// Packages
import { useEffect } from 'react';

// CSS
import "./PetSearch.css";

// Services
// import getToken from "../../services/apiConfig";

export default function PetSearch({ pets, setPets, token }) {

  // const DOMAIN = 'https://api.petfinder.com/v2';
  // const CATEGORY = '/animals';
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const API_SECRET = process.env.REACT_APP_API_SECRET;

  // Fetch pet data
  // const fetchPets = async (token) => {
  //   try {
  //     const res = await api.get('https://api.tvmaze.com/search/shows?q=girls')
  //     setPets(res.data);
  //   } catch (err) {
  //     if (err.res) {
  //       // Not in 200 range
  //       console.log(err.res.data);
  //       console.log(err.res.status);
  //       console.log(err.res.headers);
  //     } else {
  //       // No response, any other error
  //       console.log(`Error: ${err.message}`);
  //     }
  //   }
  // }


  // console.log(pets)

  return (
    <section className="select">
      <div>
        <h2 className="header">Let us help you find your new best friend!</h2>
        <div className="select">
          {/* FIX ON SUBMIT */}
          <form onsubmit="return false">
            <div>
              <label htmlFor="species-dog">What are you looking for?</label>
              <select name="species" id="species">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="horse">Horse</option>
                <option value="bird">Bird</option>
              </select>
            </div>

            <div>
              <button id="see-matches">See Matches</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
