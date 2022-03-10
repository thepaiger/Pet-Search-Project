// Packages
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { axios } from 'axios';

// Components
import Layout from './layout/Layout';
import Home from './screens/Home/Home';
import Matches from './screens/Matches/Matches';

// CSS
import './App.css';
// import getToken from './services/apiConfig';

function App() {
  const [pets, setPets] = useState([]);
  const [token, setToken] = useState(null);

  const DOMAIN = 'https://api.petfinder.com/v2';
  const CATEGORY = '/animals';
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_SECRET = process.env.REACT_APP_API_SECRET;

  useEffect(() => {
    const getToken = () => fetch(`${DOMAIN}/oauth2/token`, {
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
        // console.log(resultsJSON)
        // mainFetch(resultsJSON);
        setToken(resultsJSON.access_token)
      })
      .catch((error) => {
        console.error(`ERROR: ${error}`);
      })

    getToken();
  }, [])

  console.log(token)



  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/matches'>
            <Matches pets={pets} setPets={setPets} />
          </Route>
          <Route path='/'>
            <Home pets={pets} setPets={setPets} token={token} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
