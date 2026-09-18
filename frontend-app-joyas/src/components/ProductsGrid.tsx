import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import CustomCard from './CustomCard';
import useJoyasContext from "../context/JoyasContext/useJoyasContext";

const ProductsGrid = () => {
  const { loading, error, joyas } = useJoyasContext();

  const getErrorMessage = ( error: unknown ): string => {
    if ( error instanceof Error ) return error.message;
    return String(error);
  }

  if ( loading ) return <div className='fetch-loading'><h1>Cargando Joyas...</h1></div>;
  if ( error ) return <div className='fetch-error'><h1>Error: { getErrorMessage(error) }</h1></div>;
  if ( joyas.length === 0 ) return <div className='fetch-empty'><h1>No hay joyas para mostrar</h1></div>;

  return (
    <Container className="text-center">
      <Row className='my-4 px-2'>
          {joyas.map(( joya ) => (
            <CustomCard {...joya} />
          ))}
      </Row>
    </Container>
  );
};

export default ProductsGrid;