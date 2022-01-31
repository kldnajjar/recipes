import { Container, Row, Col, Navbar } from "react-bootstrap";
import NavbarWrapper from "./components/Navbar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/components.scss";
import "./styles/elements.scss";
import "./styles/media.scss";

function App() {
  return (
    <>
      <NavbarWrapper />
      <Container>
        <Navbar fixed="top" />
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
