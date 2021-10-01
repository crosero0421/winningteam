import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const HeaderButtons = ({ isLoggedIn }) => {
  return (
    <div>
      <Nav className="nav nav">
        <Nav className="nav-item">
          <NavLink to="/" className="nav-link " aria-current="page">
            Cerrar Sesion
          </NavLink>
        </Nav>
      </Nav>
    </div>
  );
};

export default HeaderButtons;
