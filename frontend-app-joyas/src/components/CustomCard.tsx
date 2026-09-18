import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import type { Joya } from '../context/JoyasContext/JoyasContextTypes';
import Container from 'react-bootstrap/Container';


const CustomCard = ({ nombre, categoria, metal, precio, stock }: Joya) => {

  const fixedCardProps = {
    fixedCategoria: categoria[0].toUpperCase() + categoria.slice(1),
    fixedMetal: metal[0].toUpperCase() + metal.slice(1),
    fixedPrecio: precio.toLocaleString(),
  }

  return (
    <Col className='
      col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3
      g-4 mt-0 mb-4
      '>
      <Card style={{ width: '100%' }}>
        <Card.Img />
        <Card.Body>
          <Card.Title
            className='fw-bold mb-4'
          >{nombre}</Card.Title>
          
          <Card.Text
            className='text-start px-2'
          ><span className='fw-bold'>Categoría: </span>{fixedCardProps.fixedCategoria}</Card.Text>
          <Card.Text
            className='text-start px-2'
          ><span className='fw-bold'>Metal: </span>{fixedCardProps.fixedMetal}</Card.Text>
          <Card.Text
            className='text-end px-2'
          ><span className='fw-bold'>Stock: </span>{stock}</Card.Text>
          <Card.Text
            className='text-end px-2'
          ><span className='fw-bold'>Precio: </span>${fixedCardProps.fixedPrecio}</Card.Text>

          <Container className='p-1 d-grid gap-3 px-0'>
            <Button
              variant='primary'
              className=''
            >Ver</Button>
            <Button
              variant='secondary'
              className=''
              disabled
            >Añadir</Button>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomCard;