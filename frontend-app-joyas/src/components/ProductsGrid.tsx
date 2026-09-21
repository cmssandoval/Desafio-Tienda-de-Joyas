import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CustomCard from './CustomCard';

import useJoyasContext from '../context/JoyasContext/useJoyasContext.ts';

const ProductsGrid = () => {
  const { loading, error, joyas } = useJoyasContext();

  const getErrorMessage = ( error: unknown ): string => {
    if ( error instanceof Error ) return error.message;
    return String(error);
  }

  if ( loading ) return <div className='fetch-status'><h1 className="fetch-loading">Cargando Joyas...</h1></div>;
  if ( error ) return <div className='fetch-status'><h1 className="fetch-error">Error: { getErrorMessage(error) }</h1></div>;
  if ( joyas.length === 0 ) return <div className='fetch-status'><h1 className="fetch-empty">No hay joyas para mostrar</h1></div>;

  return (
    <Container className="flex-grow-1 text-center">
      <Row className='mt-4 px-2'>
          {joyas.map(( joya ) => (
            <CustomCard {...joya} />
          ))}
      </Row>
    </Container>
  );
};

export default ProductsGrid;