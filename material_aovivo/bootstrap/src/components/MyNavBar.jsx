import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function MyNavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            NutriDev
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
