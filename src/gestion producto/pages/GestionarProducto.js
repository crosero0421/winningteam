import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GestionarProducto.css';
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from "reactstrap";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

const data = [
    
    {IdProducto: 1, Descripcion: "Es recomendado", ValorUnitario: 4000, Estado: "No disponible" },
    {IdProducto: 2, Descripcion: "Es recomendado", ValorUnitario: 3600, Estado: "Disponible" },
    {IdProducto: 3, Descripcion: "Es recomendado", ValorUnitario: 55000, Estado: "No disponible" },
    {IdProducto: 4, Descripcion: "Es recomendado", ValorUnitario: 92000, Estado: "Disponible" },
    {IdProducto: 5, Descripcion: "Es recomendado", ValorUnitario: 19000, Estado: "No disponible" },


]


class GestionarProducto extends React.Component{
state={
    data:data,
    form: {IdProducto:'', Descripcion: '', ValorUnitario:'', Estado:''},
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
    valorNuevo.IdProducto=this.state.data.length+1;
    valorNuevo.Estado = document.getElementById("estado").value;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });


  }



    render(){


    return (

        <div>
            <Container className="body">
            <h1 className="text-center">Gestion productos</h1>
            <form>
                <p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button className ="" color="primary" >Buscar Producto</Button>
                 </div>
                <div>
                <label>ID</label>
                </div>
                  <Form.Control type="text" placeholder="Busqueda de producto por ID" />
                </p>
            </form>
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Agregar Producto</Button>
           

            <Table>
                <thead><tr><th className="text-center">ID Producto</th>
                <th className="text-center">Descripcion</th>
                <th className="text-center">Valor unitario</th>
                <th className="text-center">Estado</th>
                <th className="text-center">Acciones</th>
                </tr></thead>
                <tbody>
                    {this.state.data.map((elemento)=>(
                        <tr>
                            <td className="text-center">{elemento.IdProducto}</td>
                            <td className="text-center">{elemento.Descripcion}</td>
                            <td className="text-center">{elemento.ValorUnitario}</td>
                            <td className="text-center">{elemento.Estado}</td>
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
                        <h3>Registrar Producto</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <div>
                        <label>Id Producto:</label>
                        </div>
                        <input className="Form-control" readOnly name="IdProducto" type="text"  value = {this.state.data.length+1}/>
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Descripcion:</label>
                        </div>
                        <textarea rows="4" cols="32" name="Descripcion" Type ="text" onChange={this.handleChange} />
                     </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Valor unitario:</label>
                        </div>
                        <input className="Form-control" name="ValorUnitario" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <p>
                        <div>
                        <label>Estado:</label>
                        </div>
                        <select id="estado" className="btn btn-info dropdown-toggle" >
                            <option className="btn btn-danger dropdown-toggle" value="No disponible">No disponible</option>
                            <option className="btn btn-success dropdown-toggle" value="Disponible">Disponible</option>
                        </select>
                        </p>

                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={()=>this.insertar()}>Agregar Producto</Button>
                    <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                </ModalFooter>

            </Modal>
        </div>

       )
    }
}      
    
export default GestionarProducto;