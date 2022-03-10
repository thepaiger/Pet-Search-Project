// CSS
import "./PetSearch.css";

// Services
// import "../../services/fetch";

export default function PetSearch() {
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
