// Components
import Header from '../../components/Header/Header';
import PetSearch from '../../components/PetSearch/PetSearch';

// CSS
import './Home.css'

export default function Home({ pets, setPets }) {
  return (
    <div>
      <Header />

      <PetSearch pets={pets} setPets={setPets} />
    </div>
  )
}
