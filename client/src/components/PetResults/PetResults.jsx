// CSS
import './PetResults.css';

export default function PetResults() {
  return (
    <section className="pets">
      <div className="pets">
        <div>
          <div className="pet-name-div">
            <h3 className="pet-name"></h3>
          </div>

          <div className="pet-pic-div">
            <img className="pet-pic" src="" alt="pet-picture" />
          </div>

          <div className="pet-details-div">
            <h3 className="pet-details"></h3>
          </div>

          <div className="pet-bio-div">
            <p className="pet-bio"></p>
          </div>

          <div>
            <button className="findPetHere">
              <a className="findPetHere" href="">
                Find this pet here
              </a>
            </button>
          </div>

          <button id="next-match">Next</button>
        </div>
      </div>
    </section>
  )
}
