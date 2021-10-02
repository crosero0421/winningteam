import './CrearProducto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
 

function CrearProducto() {
  return (
    <div className="App">
      
      <body className="body1">
        <h1>Productos</h1>
        <div className = "Cuadros">
          <form className="hh">
            <p>
              <div>
              <label htmlfor="nombre">ID producto:</label>
              </div>
              <div className="ID producto">
              <input className="boton1"name="nombre" type="text" placeholder="ID producto" className="mb-4" size="30" />
              </div>
            </p>

            <p>
              <div>
              <label htmlfor="nombre">Valor unitario:</label>
              </div>
              <div className="Valor">
              <input name="nombre" type="text" placeholder="Valor unitario" className="mb-4" size="30"/>
              </div>
            </p>

            <p>
              <div>
              <label htmlfor="nombre">Estado:</label>
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Estado
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Disponible</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">No disponible</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </p>

            <p>
              <div>
              <label htmlfor="nombre">Descripcion:</label>
              </div>
              <div className="Descripcion">
              <textarea rows="4" cols="32"></textarea>
              </div>
            </p>

              <div>
              <button type="button" class="btn btn-success">Registrar producto</button>
              </div>

          </form>
        </div> 
      </body>
    </div>
  );
}


export default CrearProducto;
