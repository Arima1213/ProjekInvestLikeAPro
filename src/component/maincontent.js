import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CarouselHero from "./carousel";
import FirstContent from "./contentfirst";
import SecondContent from "./contentsecond";
import ThirdContent from "./contentthird";
import FourContent from "./contentfour";
import FiveContent from "./contentfive";
import SixContent from "./contentsix";
import SevenContent from "./contentseven";

const MainContent = () => {
  return (
    <div>
      <Navbar
        id="navbar"
        className="navbar bg-body-tertiary px-3 mb-3"
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#content1">Home</Nav.Link>
              <Nav.Link href="#content2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#content3">content</NavDropdown.Item>
                <NavDropdown.Item href="#content4">
                  Another content
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#content5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
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
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabIndex={0}
      >
        <div id="#hero">
          <CarouselHero />
        </div>
        <div id="#content1">
          <FirstContent />
        </div>
        <div id="#content2">
          <SecondContent />
        </div>
        <div id="#content3">
          <ThirdContent />
        </div>
        <div id="#content4">
          <FourContent />
        </div>
        <div id="#content5">
          <FiveContent />
        </div>
        <div id="#content6">
          <SixContent />
        </div>
        <div id="#content7">
          <SevenContent />
        </div>
      </div>
    </div>
  );
};
export default MainContent;
