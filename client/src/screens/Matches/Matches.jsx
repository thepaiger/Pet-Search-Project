// Components
import PetResults from '../../components/PetResults/PetResults'

// CSS
import './Matches.css'

export default function Matches({ pets, setPets }) {
  return (
    <div>
      <PetResults pets={pets} setPets={setPets} />
    </div>
  )
}
