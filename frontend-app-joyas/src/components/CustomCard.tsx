import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";


const CustomCard = () => {
  return (
    <Col className='
      col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3
      g-4 my-1
      '>
      <Card style={{ width: '100%' }}>
        <Card.Img />
        <Card.Body>
          <Card.Title>Producto</Card.Title>
          <Card.Text>Descripción del producto</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomCard;