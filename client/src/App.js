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
        <Home />
        <Matches />
      </Layout>
    </div>
  );
}

export default App;
