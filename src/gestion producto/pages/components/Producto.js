import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Producto = ({ producto }) => {
  return (
    <Card bg="success" style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src={producto.url} />
      <Card.Body >
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text >{producto.description}</Card.Text>
        <Button variant="light">${producto.price}</Button>
      </Card.Body>
    </Card>
  );
};

export default Producto;