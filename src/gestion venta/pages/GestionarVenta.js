import React from 'react';
import './GestionarVenta.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from "reactstrap";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
const data = [
    
  {IdVenta:'9001', ValorTotalVenta: '5000', Cantidad:'5', PrecioUnitarioCadaProducto:'1000', FechaVenta:'01/08/2021', DocumentoIdentificacion:'10029392', NombreCliente:' Luis', Vendedor:'Andres', EstadoVenta:'En proceso'},
  {IdVenta:'9002', ValorTotalVenta: '18000', Cantidad:'3', PrecioUnitarioCadaProducto:'6000', FechaVenta:'027/08/2021', DocumentoIdentificacion:'102229392', NombreCliente:' Carlos', Vendedor:'Felipe', EstadoVenta:'Cancelada'},



]


class GestionarVenta extends React.Component{
state={
    data:data,
<<<<<<< HEAD
    form: {IdVenta:'', ValorTotalVenta: '', Cantidad:'', PrecioUnitarioCadaProducto:'', FechaVenta:'', DocumentoIdentificacion:'', NombreCliente:'', Vendedor:'', EstadoVenta:''},
=======
    form: {IdVenta:'', ValorTotalVenta: '', Cantidad:'', PrecioUnitarioCadaProducto:'', FechaVenta:'', DocumentoIdentificacion:'', NombreCliente:'', Vendedor:''},
>>>>>>> a46ed632cdc875dbfd8c680b2f02f6eddcaf981e
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
    valorNuevo.IdVenta=this.state.data.length+9001;
<<<<<<< HEAD
    valorNuevo.EstadoVenta = document.getElementById("estadoventa").value;
=======
>>>>>>> a46ed632cdc875dbfd8c680b2f02f6eddcaf981e
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });


  }



    render(){


    return (

        <div>
            <Container className="Container">
            <h1 className="text-center">Gestion ventas</h1>
            <form>
                <p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button className ="" color="primary" >Buscar Venta</Button>
                 </div>
                <div>
                <label>ID</label>
                </div>
                  <Form.Control type="text" placeholder="Busqueda de venta por ID" />
                </p>

            </form>
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Agregar Venta</Button>

            <Table>
                <thead><tr><th className="text-center">ID Venta</th> 
                <th className="text-center">Valor total venta</th>
                <th className="text-center">Cantidad</th>
                <th className="text-center">Precio unitario de cada producto</th>
                <th className="text-center">Fecha de Venta</th>
                <th className="text-center">Documento de identificacion</th>
                <th className="text-center">Nombre del cliente</th>
                <th className="text-center">Vendedor</th>
                <th className="text-center">Estado venta</th>
                <th className="text-center">Acciones</th>
                </tr></thead>
                <tbody>
                    {this.state.data.map((elemento)=>(
                        <tr>
                            <td className="text-center">{elemento.IdVenta}</td> 
                            <td className="text-center">{elemento.ValorTotalVenta}</td>
                            <td className="text-center">{elemento.Cantidad}</td>
                            <td className="text-center">{elemento.PrecioUnitarioCadaProducto}</td>
                            <td className="text-center">{elemento.FechaVenta}</td>
                            <td className="text-center">{elemento.DocumentoIdentificacion}</td>
                            <td className="text-center">{elemento.NombreCliente}</td>
                            <td className="text-center">{elemento.Vendedor}</td>
                            <td className="text-center">{elemento.EstadoVenta}</td>

                            <td className="text-center" ><Button className="text-center" color="primary">Editar</Button> 
                            <Button color="danger">Eliminar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Container>
            <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader>
                    <div>
<<<<<<< HEAD
                        <h3>Registrar ventas</h3>
=======
                        <h3>Registrar Producto</h3>
>>>>>>> a46ed632cdc875dbfd8c680b2f02f6eddcaf981e
                    </div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <div>
                        <label>Id Venta:</label>
                        </div>
                        <input className="Form-control" readOnly name="IdVenta" type="text"  value = {this.state.data.length+9001}/>
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Valor total venta:</label>
                        </div>
                        <input className="Form-control" name="ValorTotalVenta" type="text" onChange={this.handleChange} />
                     </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Cantidad:</label>
                        </div>
                        <input className="Form-control" name="Cantidad" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Precio unitario de cada producto:</label>
                        </div>
                        <input className="Form-control" name="PrecioUnitarioCadaProducto" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Fecha de venta:</label>
                        </div>
                        <input className="Form-control" name="FechaVenta" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Documento de identificacion:</label>
                        </div>
                        <input className="Form-control" name="DocumentoIdentificacion" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Nombre del cliente:</label>
                        </div>
                        <input className="Form-control" name="NombreCliente" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Vendedor:</label>
                        </div>
                        <input className="Form-control" name="Vendedor" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    
                    <FormGroup>
                        <div>
<<<<<<< HEAD
                        <label>Estado venta:</label>
                        </div>
                        <select id="estadoventa" className="btn btn-info dropdown-toggle" >
                            <option className="btn btn-danger dropdown-toggle" value="Proceso">Proceso</option>
                            <option className="btn btn-success dropdown-toggle" value="Cancelada">Cancelada</option>
                            <option className="btn btn-file dropdown-toggle" value="Entregada">Entregada</option>
                        </select>
=======
                        <label>Estado Venta:</label>
                        </div>
                        <input className="Form-control" name="EstadoVenta" type="text" onChange={this.handleChange} />
>>>>>>> a46ed632cdc875dbfd8c680b2f02f6eddcaf981e
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
<<<<<<< HEAD
                    <Button color="success" onClick={()=>this.insertar()}>Agregar Venta</Button>
=======
                    <Button color="success" onClick={()=>this.insertar()}>Agregar Producto</Button>
>>>>>>> a46ed632cdc875dbfd8c680b2f02f6eddcaf981e
                    <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>

       )
    }
}      
    

export default GestionarVenta;
