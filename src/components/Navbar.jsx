import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";

function NavbarWrapper() {
  const logo = require("../assets/logo.png");

  return (
    <Navbar bg="light" expand="lg" className="navbar-container">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src={logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#ingredients">Ingredients</Nav.Link>
            <NavDropdown title="Menu Items">
              <NavDropdown.Item href="#menu_items">
                Menu Information
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#menu_of_the_week">
                Menu of the week
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWrapper;
