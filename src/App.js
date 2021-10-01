import React from "react";
import "./App.css";
import "./login/components/Login.css";
import Login from "./login/pages/Login";
import Home from "./home/pages/Home";
import Header from "./shared/Header";
import CrearProducto from "./gestion producto/pages/CrearProducto";
import GestionarProducto from "./gestion producto/pages/GestionarProducto";
import GestionarUsuario from "./gestion usuarios/pages/GestionarUsuario";
import CrearVenta from "./gestion venta/pages/CrearVenta";
import GestionarVenta from "./gestion venta/pages/GestionarVenta";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/Home" exact>
          <Home />
        </Route>
        <Route path="/CrearProducto/2.1" exact>
          <CrearProducto />
        </Route>
        <Route path="/GestionarProducto/2.2" exact>
          <GestionarProducto />
        </Route>
        <Route path="/CrearVenta/2.1" exact>
          <CrearVenta />
        </Route>
        <Route path="/GestionarVenta/2.2" exact>
          <GestionarVenta />
        </Route>
        <Route path="/GestionarUsuario" exact>
          <GestionarUsuario />
        </Route>
        <Redirect to="/Login" />
      </Switch>
    </Router>
  );
};

export default App;
