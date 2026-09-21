import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import type { Joya } from '../context/JoyasContext/JoyasContextTypes.ts';


const CustomCard = ({ nombre, categoria, metal, precio, stock }: Joya) => {

  const fixedCardProps = {
    fixedCategoria: categoria[0].toUpperCase() + categoria.slice(1),
    fixedMetal: metal[0].toUpperCase() + metal.slice(1),
    fixedPrecio: precio.toLocaleString(),
  }

  return (
    <Col className='
      col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3
      g-4 mt-0 mb-4 d-flex 
      '>
      <Card style={{ width: '100%' }}>
        <Card.Img className='rounded-bottom-0' src='https://placeimg.dev/500x350/FFC107' />
        <Card.Body className='d-flex flex-column justify-content-between gap-1'>
          
          <Card.Title
            className='fw-bold my-auto'
          >{nombre}</Card.Title>
          
          <Container className='text-start px-1 my-2'>
            <Card.Text className='my-1'><span
              className='fw-bold'> Categoría:
            </span> {fixedCardProps.fixedCategoria}</Card.Text>
            <Card.Text className='my-1'><span
              className='fw-bold'>Metal:
            </span> {fixedCardProps.fixedMetal}</Card.Text>
            <Card.Text className='my-1'><span
              className='fw-bold'>Stock:
            </span> {stock}</Card.Text>
            <Card.Text className='my-1'><span
              className='fw-bold'>Precio:
            </span> ${fixedCardProps.fixedPrecio}</Card.Text>
          </Container>

          <Container className='p-1 d-grid gap-3 px-0'>
            <Button
              variant='primary'
              className='btn-warning'
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