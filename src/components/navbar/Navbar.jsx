import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./navbar.scss";

const NavbarWrapper = () => {
  const logo = require("../../assets/logo.png");
  const history = useHistory();

  return (
    <Navbar bg="light" expand="lg" className="navbar-container">
      <Container fluid>
        <Navbar.Brand
          className="pointer"
          onClick={() => history.push("/recipes")}
        >
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarWrapper;
