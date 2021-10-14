import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

import GoogleLogin from "react-google-login";

const HeaderButtons = ({ isLoggedIn, setLogin }) => {
  const respuestaGoogle = (respuesta) => {
    setLogin(true);
    localStorage.setItem("isLogged", true);
  };

  const logout = () => {
    setLogin(false);
    localStorage.setItem("isLogged", false);
  };

  if (isLoggedIn) {
    return (
      <React.Fragment>
        <Nav className="me-auto">
          <Nav.Link href="/Presentacion">Presentacion</Nav.Link>
          <Nav.Link href="/GestionarProducto">Gestionar Productos</Nav.Link>
          <Nav.Link href="/GestionarVenta">Gestionar Ventas</Nav.Link>
          <Nav.Link href="/GestionarUsuario">Gestionar Usuarios</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Button variant="outline-light" onClick={logout}>
            Cerrar Sesion
          </Button>
        </Nav>
      </React.Fragment>
    );
  } else {
    return (
      <div className="App">
        <GoogleLogin
          clientId="135325355635-gg79ugh2ugpdaq7qjp22dbctkn2nriq6.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button variant="light" onClick={renderProps.onClick}>
              Ingresar
            </Button>
          )}
          buttonText="Login"
          onSuccess={respuestaGoogle}
          onFailure={respuestaGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
};

export default HeaderButtons;