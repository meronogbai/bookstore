import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="flex a-center jc-between">
    <div className="flex a-center">
      <h1 className="azure-text">Bookstore CMS</h1>
      <span>BOOKS</span>
      <span>CATEGORIES</span>
    </div>
    <div className="oval">
      <FontAwesomeIcon icon={faUser} className="azure-text" />
    </div>
  </nav>
);

export default Navbar;
