import { Container, Row, Col } from "react-bootstrap";
import Producto from "./Producto";
import './Producto.css';

const ListaProductos = () => {
  const productos = [
    {
      title: "Manubrio GW INSTINCT MTB",
      description: "Material aluminio",
      price: 100,
      url: "https://http2.mlstatic.com/D_NQ_NP_932873-MCO32794924034_112019-O.webp",
    },
    {
      title: "Suspención delantera",
      description: "Con sistema hidráulico",
      price: 50,
      url: "https://media.istockphoto.com/photos/generic-mountain-bike-suspension-fork-with-disc-brakes-and-wheel-hub-picture-id666976506?k=20&m=666976506&s=612x612&w=0&h=2jpd0GDa7Qb4KmCbjPEs5aPHOiPbDol-Cf6qrYOENUk=",
    },
    {
      title: "Manzanas De Rodamiento",
      description: "Funciona en Pachas de Rosca",
      price: 200,
      url: "https://http2.mlstatic.com/D_NQ_NP_808388-MCO32706895201_102019-O.webp",
    },
    {
      title: "Tensor de 6 velocidades",
      description: "Metalico liviano",
      price: 200,
      url: "https://http2.mlstatic.com/D_NQ_NP_647390-MCO47218346615_082021-O.webp",
    },
    {
      title: "Set de marco y tenedor innova k2",
      description: "Para armar tu Fixie",
      price: 200,
      url: "https://http2.mlstatic.com/D_NQ_NP_895542-MCO27147042452_042018-O.webp",
    },
    {
      title: "Combo pedales",
      description: "Mayor agarre y resistencia",
      price: 200,
      url: "https://media.istockphoto.com/photos/bike-crankset-chainring-and-pedals-set-picture-id532971620?k=20&m=532971620&s=612x612&w=0&h=eOyFZmy0aYzhCqEz0UaUPCTIik28aRVAhQRSSt6MQUw=",
    },
    {
      title: "Pedales Shimano M520 para cala SPD",
      description: "Diseño del cuerpo compacto",
      price: 200,
      url: "https://http2.mlstatic.com/D_NQ_NP_999885-MCO46870672428_072021-O.webp",
    },
    {
      title: "Cañas Potencias Aluminio",
      description: "Potencias ak88 y hell",
      price: 200,
      url: "https://http2.mlstatic.com/D_NQ_NP_845523-MCO45015261430_022021-O.webp",
    },
    {
      title: "Luz Bicicleta delante y trasera",
      description: "Bicicletas Ruta Mtb",
      price: 200,
      url: "https://http2.mlstatic.com/D_NQ_NP_984045-MCO44170770167_112020-O.webp",
    },
  ];

  return (
    <Container className="body">
      <Row >
        {productos.map((producto) => (
          <Col xs={4}>
            <Producto producto={producto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListaProductos;