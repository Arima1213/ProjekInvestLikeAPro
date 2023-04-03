import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import root from "..";
import MainContent from "./maincontent";
import { NavLink } from "react-bootstrap";

/*untuk navbar pada tampilan atas*/
function NavBarKu() {
  function open(d) {
    root.render(
      <React.StrictMode>
        <MainContent />
      </React.StrictMode>
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function scrollToDiv(elementId, offset) {
    root.render(
      <React.StrictMode>
        <MainContent />
      </React.StrictMode>
    );
    const element = document.getElementById(elementId);
    const offsetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  return (
    <Navbar
      id="navbar"
      className="navbar bg-body-tertiary px-3 mb-3"
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand onClick={open}>
          <Nav.Link>
            Invest Like a <span className="text-primary">Pro</span>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link onClick={() => scrollToDiv("pertama", 80)}>Trending</Nav.Link>
            <Nav.Link onClick={() => scrollToDiv("kedua", 80)}>Terpopuler</Nav.Link>
            <Nav.Link onClick={() => scrollToDiv("ketiga", 80)}>Terbaru</Nav.Link>
            <Nav.Link onClick={() => scrollToDiv("keempat", 80)}>apps</Nav.Link>
            <Nav.Link onClick={() => scrollToDiv("kelima", 80)}>Vidio</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBarKu;
