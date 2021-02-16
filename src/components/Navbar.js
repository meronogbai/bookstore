import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <span>BOOKS</span>
    <span>CATEGORIES</span>
    <FontAwesomeIcon icon={faUser} />
  </nav>
);

export default Navbar;
