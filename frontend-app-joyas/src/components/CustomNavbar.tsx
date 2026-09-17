import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import SearchForm from './SearchForm';

const CustomNavbar = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary' data-bs-theme="dark">
      <Container>
        <Navbar.Brand className='fw-bold mx-0' href='/'>My Precious Spa</Navbar.Brand>
        <SearchForm
          
        />
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;