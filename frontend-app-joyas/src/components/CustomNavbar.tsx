import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import SearchForm from './SearchForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CustomNavbar = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary' data-bs-theme="dark">
      <Container className='justify-content-center p-0'>
        <Row className='w-100'>
          <Col className='col-5 my-auto'>
            <Navbar.Brand className='fw-bold ms-2' href='/'>My Precious Spa</Navbar.Brand>
          </Col>
          <Col className='col-7 p-0'>
            <SearchForm />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;