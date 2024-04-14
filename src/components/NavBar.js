import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Your Application Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Application</Nav.Link>
            <Nav.Link href="#link">Affirmation</Nav.Link>
            <NavDropdown title="News" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tech</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Finance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Healthcare</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Breaking News
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;