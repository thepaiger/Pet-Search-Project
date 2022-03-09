// Components
import Layout from './layout/Layout';
import Home from './screens/Home/Home'

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
