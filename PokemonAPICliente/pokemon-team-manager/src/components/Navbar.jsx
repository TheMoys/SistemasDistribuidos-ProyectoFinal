import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/team">Equipo</Link></li>
      <li><Link to="/box">Caja</Link></li>
    </ul>
  </nav>
);

export default Navbar;
