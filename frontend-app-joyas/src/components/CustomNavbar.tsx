import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const CustomNavbar = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary' data-bs-theme="dark">
      <Container>
        <Navbar.Brand className='fw-bold mx-0' href='/'>My Precious Spa</Navbar.Brand>
        <Form>
          <Row>
            <Col>
              <Form.Control
                type='text'
                placeholder='Buscar'
                className=" mr-sm-2"
              />
            </Col>
            <Col xs='auto'>
              <Button type='submit'>
                Buscar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;