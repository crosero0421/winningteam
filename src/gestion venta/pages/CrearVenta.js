import './CrearVenta.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function CrearVenta() {
    return (

        <div className="App2">
            <body className="body2">
                <div className="h1">
                <h1>Ventas</h1>
                </div>
                <div className="formu1">
                    <form>
                        <p>
                            <div>
                            <label htmlfor="nombre">ID venta:</label>
                            </div>
                            <div className>
                            <input name="nombre" type="text" placeholder="ID venta" className="mb-4" size="25" />
                            </div>
                        </p>

                        <p>
                            <div>
                            <label htmlfor="nombre">Valor total venta:</label>
                            </div>
                            <div className>
                            <input name="nombre" type="text" placeholder="Valor total venta" className="mb-4" size="25" />
                            </div>
                       </p> 

                       <p>
                            <div>
                            <label htmlfor="nombre">Cantidad:</label>
                            </div>
                            <div className>
                            <input name="nombre" type="text" placeholder="Cantidad" className="mb-4" size="25" />
                            </div>
                        </p>

                        <p>
                            <div>
                            <label htmlfor="nombre">Precio unitario de cada producto:</label>
                            </div>
                            <div className>
                            <input name="nombre" type="text" placeholder="Precio unitario" className="mb-4" size="25" />
                            </div>
                        </p>

                        <p>
                            <div>
                            <label htmlfor="nombre">Fecha de venta:</label>
                            </div>
                            <div className>
                            <input name="nombre" type="text" placeholder="Fecha de venta" className="mb-4" size="25" />
                            </div>
                        </p>

                        <p>
                            <div>
                            <label htmlfor="nombre">Documento de identificacion:</label>
                            </div>
                            <div className>
                            <input name="nombre" type="text" placeholder="Documento de identificacion" className="mb-4" size="25" />
                            </div>
                        </p>

                        <p>
                            <div>
                            <label htmlfor="nombre">Nombre del cliente:</label>
                            </div>
                            <div className>
                            <input name="nombre" type="text" placeholder="Nombre del cliente" className="mb-4" size="25" />
                            </div>
                        </p>

                        <p>
                            <div>
                            <label htmlfor="nombre">Nombre del vendedor:</label>
                            </div>
                            <div>
                            <input name="nombre" type="text" placeholder="Nombre del vendedor" className="mb-4" size="25" />
                            </div>
                        </p>

                        <p>
                            <div>
                            <label htmlfor="nombre">Estado de la venta:</label>
                            </div>
                            <div >
                            <input name="nombre" type="text" placeholder="Estado" className="mb-4" size="25" />
                            </div>
                        </p>
                        <div>
                        <button type="button" class="btn btn-success">Registrar venta</button>
                        </div>

                    </form>
                </div>
            </body>
        </div>

    );
}
    

export default CrearVenta;
