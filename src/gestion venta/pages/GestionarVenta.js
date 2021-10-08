import React from 'react';
import './GestionarVenta.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter } from "reactstrap";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

const data = [
    
  {IdVenta:'9001', ValorTotalVenta: '5000', Cantidad:'5', PrecioUnitarioCadaProducto:'1000', FechaVenta:'01/08/2021', DocumentoIdentificacion:'10029392', NombreCliente:' Luis', Vendedor:'Andres', EstadoVenta:'En proceso'},
  {IdVenta:'9002', ValorTotalVenta: '18000', Cantidad:'3', PrecioUnitarioCadaProducto:'6000', FechaVenta:'027/08/2021', DocumentoIdentificacion:'102229392', NombreCliente:' Carlos', Vendedor:'Felipe', EstadoVenta:'Cancelada'},



]


class GestionarVenta extends React.Component{
state={
    data:data,
    form: {IdVenta:'', ValorTotalVenta: '', Cantidad:'', PrecioUnitarioCadaProducto:'', FechaVenta:'', DocumentoIdentificacion:'', NombreCliente:'', Vendedor:'', EstadoVenta:''},
    modalInsertar: false,
    modalEditar: false,
};


handleChange =(e)=>{

   this.setState({
   form: {

       ...this.state.form,
       [e.target.name]: e.target.value,

    }

  });

}

/* FUNCIONES PARA MOSTRAR Y OCULTAR EL MODAL DE INSERTAR*/  
mostrarModalInsertar=()=>{
  this.setState({modalInsertar:true});
}

ocultarModalInsertar=()=>{
    this.setState({modalInsertar:false});
}

/* FUNCIONES PARA MOSTRAR Y OCULTAR EL MODAL DE EDITAR*/ 

mostrarModalEditar=(registro)=>{
    this.setState({modalEditar:true, form: registro});
}
  
ocultarModalEditar=()=>{
      this.setState({modalEditar:false});
}

/* FUNCION PARA EDITAR*/

editar=(dato)=>{
    var contador= 0;
    var lista=this.state.data;
    lista.map((registro)=>{
        if(dato.IdVenta==registro.IdVenta){
            lista[contador].ValorTotalVenta=dato.ValorTotalVenta;
            lista[contador].Cantidad=dato.Cantidad;
            lista[contador].PrecioUnitarioCadaProducto=dato.PrecioUnitarioCadaProducto;
            lista[contador].FechaVenta=dato.FechaVenta;
            lista[contador].DocumentoIdentificacion=dato.DocumentoIdentificacion;
            lista[contador].NombreCliente=dato.NombreCliente;
            lista[contador].Vendedor=dato.Vendedor;
            lista[contador].EstadoVenta=dato.EstadoVenta;
        }
        contador++;
    });
    this.setState({data: lista,modalEditar: false});
}

/* FUNCION PARA INSERTAR*/

insertar= ()=>{
    
    var valorNuevo= {...this.state.form};
    valorNuevo.IdVenta=this.state.data.length+9001;
    valorNuevo.EstadoVenta = document.getElementById("estadoventa").value;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });


  }

/* FUNCION PARA ELIMINAR*/

eliminar=(dato)=>{
    var opcion=window.confirm(" Seguro que desea eliminar la venta " + dato.IdVenta + " ? ")
    if(opcion){
        var contador=0;
        var lista = this.state.data;
        lista.map((registro)=>{
            if(registro.IdVenta==dato.IdVenta){
                lista.splice(contador, 1);
            }
            contador++;
        })
        this.setState({data:lista});
    }
}


    render(){


    return (

        <div>
            <Container className="body"> 
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
                <th className="text-center">Valor total de la venta</th>
                <th className="text-center">Cantidad</th>
                <th className="text-center">Precio unitario del producto</th>
                <th className="text-center">Fecha de la Venta</th>
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

                            <td className="text-center" ><Button className="text-center" color="primary" onClick={()=>this.mostrarModalEditar(elemento)}><FaPencilAlt /> </Button> 
                            <Button color="danger" onClick={()=>this.eliminar(elemento)}><FaTimes/></Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Container>
            <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Registrar ventas</h3>
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
                        <label>Precio unitario del producto:</label>
                        </div>
                        <input className="Form-control" name="PrecioUnitarioCadaProducto" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Fecha de la venta:</label>
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
                        <label>Estado venta:</label>
                        </div>
                        <select id="estadoventa" className="btn btn-info dropdown-toggle" >
                            <option className="btn btn-danger dropdown-toggle" value="Proceso">Proceso</option>
                            <option className="btn btn-success dropdown-toggle" value="Cancelada">Cancelada</option>
                            <option className="btn btn-file dropdown-toggle" value="Entregada">Entregada</option>
                        </select>
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={()=>this.insertar()}>Agregar Venta</Button>
                    <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        
        







            <Modal isOpen={this.state.modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>Editar ventas</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <div>
                        <label>Id Venta:</label>
                        </div>
                        <input className="Form-control" readOnly name="IdVenta" type="text" value={this.state.form.IdVenta}/>
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Valor total venta:</label>
                        </div>
                        <input className="Form-control" name="ValorTotalVenta" type="text" onChange={this.handleChange} value={this.state.form.ValorTotalVenta}/>
                     </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Cantidad:</label>
                        </div>
                        <input className="Form-control" name="Cantidad" type="text" onChange={this.handleChange} value={this.state.form.Cantidad} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Precio unitario del producto:</label>
                        </div>
                        <input className="Form-control" name="PrecioUnitarioCadaProducto" type="text" onChange={this.handleChange} value={this.state.form.PrecioUnitarioCadaProducto} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Fecha de la venta:</label>
                        </div>
                        <input className="Form-control" name="FechaVenta" type="text" onChange={this.handleChange} value={this.state.form.FechaVenta} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Documento de identificacion:</label>
                        </div>
                        <input className="Form-control" name="DocumentoIdentificacion" type="text" onChange={this.handleChange} value={this.state.form.DocumentoIdentificacion} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Nombre del cliente:</label>
                        </div>
                        <input className="Form-control" name="NombreCliente" type="text" onChange={this.handleChange} value={this.state.form.NombreCliente} />
                    </FormGroup>

                    <FormGroup>
                        <div>
                        <label>Vendedor:</label>
                        </div>
                        <input className="Form-control" name="Vendedor" type="text" onChange={this.handleChange} value={this.state.form.Vendedor} />
                    </FormGroup>

                    
                    <FormGroup>
                        <div>
                        <label>Estado venta:</label>
                        </div>
                        <select id="estadoventa" className="btn btn-info dropdown-toggle"  onChange={this.handleChange} value={this.state.form.EstadoVenta}>
                            <option className="btn btn-danger dropdown-toggle" value="Proceso">Proceso</option>
                            <option className="btn btn-success dropdown-toggle" value="Cancelada">Cancelada</option>
                            <option className="btn btn-file dropdown-toggle" value="Entregada">Entregada</option>
                        </select>
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={()=>this.editar(this.state.form)}>Editar</Button>
                    <Button color="danger" onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>

        </div>


       )
    }
}      
    

export default GestionarVenta;
