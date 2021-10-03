import React from 'react';
import Table from 'react-bootstrap/Table';
import './GestionarUsuario.css';
import { Container,Button,FormGroup } from 'react-bootstrap';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';


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
             <FormGroup>
                <div>
                <label>Estado:</label>
                </div>
                <select id="estado" className="btn btn-info dropdown-toggle" >
                  <option className="btn btn-danger dropdown-toggle" value="Pendiente">Pendiente</option>
                  <option className="btn btn-success dropdown-toggle" value="Autorizado">Autorizado</option>
                  <option className="btn btn-file dropdown-toggle" value="No autorizado">No autorizado</option>
                </select>
              </FormGroup>
            </p>

            <p>
              <FormGroup>
                <div>
                <label>Rol:</label>
                </div>
                <select id="estado" className="btn btn-info dropdown-toggle" >
                  <option className="btn btn-danger dropdown-toggle" value="Administrador">Administrador</option>
                  <option className="btn btn-success dropdown-toggle" value="Vendedor">Vendedor</option>
                </select>
              </FormGroup>
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
                            <td className="text-center" ><Button className="text-center" color="primary"><FaPencilAlt /> </Button> 
                            <Button className="btn btn-danger "color="danger"><FaTimes/></Button></td>
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
