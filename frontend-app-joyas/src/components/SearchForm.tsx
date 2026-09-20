import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import useJoyasContext from '../context/JoyasContext/useJoyasContext';

const SearchForm = () => {
  const [ name, setName ] = useState('');
  const { setApiFilters } = useJoyasContext();

  const handleSumbit = ( e: SubmitEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if ( !name ) return;
    setApiFilters({nombre: name});
    setName('');
  };

  const handleInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setName(e.target.value)
  };

  return (
    <Form onSubmit={handleSumbit}>
      <Row className='me-1 px-3'>
        <Col className='col-8 col-md-9 col-xl-10 px-2' >
          <Form.Control
            type='text'
            placeholder='Buscar'
            value={ name }
            onChange={ handleInputChange }
          />
        </Col>
        <Col className='col-4 col-md-3 col-xl-2 px-0'>
          <Button
            type='submit'
            className='w-100'
          >
            Buscar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;