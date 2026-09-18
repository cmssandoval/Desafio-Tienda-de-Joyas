import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import CustomCard from './CustomCard';

const ProductsGrid = () => {

  const x: string = 'A';

  return (
    <Container className="text-center">
      <Row className='my-4 px-2'>
          { x !== 'A' ?
            <h1>No hay productos</h1>
          : 
            <>
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </>
            // x.map(() => {
              
            //   })
          }
      </Row>
    </Container>
  );
};

export default ProductsGrid;