// Packages
import { Link } from 'react-router-dom';

// CSS
import "./Nav.css";

// Services
import { svg } from '../../services/svg';

export default function Nav() {
  return (
    <nav>
      <div>
        <h1>Fetch</h1>
      </div>

      <div>
        <Link to='/'>
          {svg[0].svg}
        </Link>
      </div>
    </nav>
  );
}
