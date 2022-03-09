// Packages
import { Switch, Route } from 'react-router-dom';

// Components
import Layout from './layout/Layout';
import Home from './screens/Home/Home';
import Matches from './screens/Matches/Matches';

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/matches'>
            <Matches />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
