import { Outlet, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <>
    <nav className="bg-color">
      <ul className="ps-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default NavBar;
