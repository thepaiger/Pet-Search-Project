// CSS
import "./PetSearch.css";

// Services
// import "../../services/fetch";

export default function PetSearch() {
  return (
    <main>
      <section className="select">
        <div>
          <h2 className="header">Let us help you find your new best friend!</h2>
          <div className="select">
            {/* FIX ON SUBMIT */}
            <form onsubmit="return false">
              <div>
                <label for="species-dog">What are you looking for?</label>
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
    </main>
  );
}
