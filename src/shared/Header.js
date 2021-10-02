import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import HeaderButtons from "./components/HeaderButtons";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <Navbar bg="success" expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/Home">Inicio</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Gestionar Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="/GestionarProducto/2.2">
                  Gestionar Productos
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Gestionar Ventas" id="basic-nav-dropdown">
                <NavDropdown.Item href="/GestionarVenta/2.2">
                  Gestionar Ventas
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/GestionarUsuario">Gestionar Usuarios</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="justify-content-end">
            <HeaderButtons />
          </Nav>
        </Container>
      </Navbar>
    </div>

    // <div>
    //   <Navbar o bg="success" variant="dark">
    //     <Container>
    //       <Navbar.Brand href="/Home">Inicio</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link color="success" href="/CrearProducto">
    //           Crear Producto
    //         </Nav.Link>
    //         <Nav.Link href="/GestionarProducto">Gestionar Productos</Nav.Link>
    //         <Nav.Link href="/CrearVenta">Crear Venta</Nav.Link>
    //         <Nav.Link href="/GestionarVenta">Gestionar Ventas</Nav.Link>
    //         <Nav.Link href="/GestionarUsuario">Gestionar Usuarios</Nav.Link>
    //       </Nav>
    //       <Nav className="justify-content-end">
    //         <HeaderButtons />
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </div>
  );
};
export default Header;
