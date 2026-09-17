import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, type ChangeEvent, type SubmitEvent } from 'react';

const SearchForm = () => {
  const [ name, setName ] = useState('');

  const handleSumbit = ( e: SubmitEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if ( !name ) return;
    
    setName('');
  };

  const handleInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setName(e.target.value)
  };

  return (
    <Form onSubmit={handleSumbit}>
      <Row>
        <Col>
          <Form.Control
            type='text'
            placeholder='Buscar'
            className=" mr-sm-2"
            value={ name }
            onChange={ handleInputChange }
          />
        </Col>
        <Col xs='auto'>
          <Button type='submit'>
            Buscar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;