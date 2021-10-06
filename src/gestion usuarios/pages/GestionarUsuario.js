import React from 'react';
import './GestionarUsuario.css';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from "reactstrap";



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

handleChange =(e)=>{

  this.setState({
  form: {

      ...this.state.form,
      [e.target.name]: e.target.value,

   }

 });

}

mostrarModalInsertar=()=>{
 this.setState({modalInsertar:true});
}

ocultarModalInsertar=()=>{
   this.setState({modalInsertar:false});
 }


insertar= ()=>{
   
   var valorNuevo= {...this.state.form};
   valorNuevo.Id=this.state.data.length+1;
   valorNuevo.Estado = document.getElementById("estado").value;
   valorNuevo.Rol = document.getElementById("rol").value
   var lista= this.state.data;
   lista.push(valorNuevo);
   this.setState({ modalInsertar: false, data: lista });


 }

   render(){
    return (
            
      <div>
            <Container className="body">
            <h1 className="text-center">Gestion Usuario</h1>
            <form>
                <p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button className ="" color="primary" >Buscar usuario</Button>
                 </div>
                <div>
                <label>ID</label>
                </div>
                  <Form.Control type="text" placeholder="Busqueda de usuario por ID" />
                </p>
            </form>
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Agregar Usuario</Button>
           

            <Table>
                <thead><tr><th className="text-center">ID Usuario</th>
                <th className="text-center">Usuario</th>
                <th className="text-center">Fecha</th>
                <th className="text-center">Estado</th>
                <th className="text-center">Rol</th>
                <th className="text-center">Acciones</th>
                </tr></thead>
                <tbody>
                    {this.state.data.map((elemento)=>(
                        <tr>
                            <td className="text-center">{elemento.Id}</td>
                            <td className="text-center">{elemento.Usuario}</td>
                            <td className="text-center">{elemento.Fecha}</td>
                            <td className="text-center">{elemento.Estado}</td>
                            <td className="text-center">{elemento.Rol}</td>
                            <td className="text-center" ><Button className="text-center" color="primary"><FaPencilAlt /> </Button> 
                            <Button color="danger"><FaTimes /> </Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Container>
            <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Registrar Usuario</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <div>
                        <label>Id usuario:</label>
                        </div>
                        <input className="Form-control" readOnly name="Id" type="text"  value = {this.state.data.length+1}/>
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Usuario:</label>
                        </div>
                        <input className="Form-control" name="Usuario" type="text" onChange={this.handleChange} />

                     </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Fecha:</label>
                        </div>
                        <input className="Form-control" name="Fecha" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <p>
                        <div>
                        <label>Estado:</label>
                        </div>
                        <select id="estado" className="btn btn-info dropdown-toggle" >
                            <option className="btn btn-danger dropdown-toggle" value="Pendiente">Pendiente</option>
                            <option className="btn btn-success dropdown-toggle" value="Autorizado">Autorizado</option>
                            <option className="btn btn-success dropdown-toggle" value="No autorizado">No utorizado</option>

                        </select>
                        </p>

                    </FormGroup>



                    <FormGroup>
                        <p>
                        <div>
                        <label>Rol:</label>
                        </div>
                        <select id="rol" className="btn btn-info dropdown-toggle" >
                            <option className="btn btn-danger dropdown-toggle" value="Administrador">Administrador</option>
                            <option className="btn btn-success dropdown-toggle" value="Vendedor">Vendedor</option>
                        </select>
                        </p>

                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={()=>this.insertar()}>Agregar Usuario</Button>
                    <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                </ModalFooter>

            </Modal>
        </div>

    )
  }
}

export default GestionarUsuario;
