import React from 'react';
import Table from 'react-bootstrap/Table';
import './GestionarUsuario.css';
import { Container,Button } from 'react-bootstrap';


const data = [
    
  {Id:'1', Usuario: 'Andres Felipe Perez', Fecha:'12/09/2021', Estado:'Autorizado', Rol:'Administrador'},  
  {Id:'2', Usuario: 'Jesus Andres Peña', Fecha:'29/09/2021', Estado:'Pendiente', Rol:'Vendedor'},
  {Id:'3', Usuario: 'Manuel jose Ortiz', Fecha:'16/09/2021', Estado:'No autorizado', Rol:'Vendedor'},

]

class GestionarUsuario extends React.Component{

  state={
    data:data,
    form: {Id:'', Usuario: '', Fecha:'', Estado:'', Rol:''},
    modalInsertar: false
};

   render(){
    return (
      <div>
        
      <Container className="body">
      <h1 className="text-center">Gestion usuarios</h1> 
        <div className="formulario">
          <form>
            <p>
              <div>
              <label htmlfor="nombre">ID:</label>
              </div>
              <div className="ID producto">
              <input type="text" placeholder="ID Usuario" className="mb-4" size="30" />
              </div>
            </p>

            <p>
              <div>
              <label htmlfor="nombre">Usuario:</label>
              </div>
              <div>
              <input type="text" placeholder="Usuario" className="mb-4" size="30" />
              </div>
            </p>

            <p>
              <div>
              <label htmlfor="nombre">Fecha:</label>
              </div>
              <div>
              <input type="text" placeholder="Fecha" className="mb-4" size="30" />
              </div>
            </p>

             <p>
              <div>
              <label htmlfor="nombre">Estado:</label>
              </div>
              <div>
              <input type="text" placeholder="Estado" className="mb-4" size="30" />
              </div>
            </p>

            <p>
              <div>
              <label htmlfor="nombre">Rol:</label>
              </div>
              <div>
              <input type="text" placeholder="Rol" className="mb-4" size="30" />
              </div>
            </p>
            <div className="button">
            <button type="button"  class="btn btn-success">Registrar usuario</button>
            </div>
          </form>
        </div>
      <React.Fragment>
            <Table fluid>
              <thead>
                <tr>
                  <th className="text-center">Id</th>
                  <th className="text-center">Usuario</th>
                  <th className="text-center">Fecha</th>
                  <th className="text-center">Estado</th>
                  <th className="text-center">Rol</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                     {this.state.data.map((elemento)=>(
                        <tr>
                            <td className="text-center">{elemento.Id}</td>
                            <td className="text-center">{elemento.Usuario}</td>
                            <td className="text-center">{elemento.Fecha}</td>
                            <td className="text-center">{elemento.Estado}</td>
                            <td className="text-center">{elemento.Rol}</td>
                            <td className="text-center"><Button variant="primary">Editar</Button>{" "}
                            <Button className="text-center" variant="danger">Eliminar</Button></td>
                        </tr>
                    ))}  
              </tbody>
            </Table>
          </React.Fragment>
          </Container>
      </div>
    )
  }
}

export default GestionarUsuario;
