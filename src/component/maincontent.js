import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CarouselHero from "./carousel";
import FirstContent from "./contentfirst";
import SecondContent from "./contentsecond";
import ThirdContent from "./contentthird";
import FourContent from "./contentfour";
import FiveContent from "./contentfive";
import SixContent from "./contentsix";
import SevenContent from "./contentseven";
import Preloader from "./preloader";

const MainContent = () => {
  return (
    <div>
      <Preloader />
      <Navbar
        id="navbar"
        className="navbar bg-body-tertiary px-3 mb-3"
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#">
            Invest Like a <span className="text-primary">Pro</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#content1">Terkini</Nav.Link>
              <Nav.Link href="#content2">Trending</Nav.Link>
              <Nav.Link href="#content3">apps</Nav.Link>
              <Nav.Link href="#content4">Vidio</Nav.Link>
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
      // data-bs-spy="scroll"
      // data-bs-target="#navbar"
      // data-bs-root-margin="0px 0px -40%"
      // data-bs-smooth-scroll="true"
      // className="scrollspy-example bg-body-tertiary p-3 mx-0"
      // tabIndex={0}
      >
        <div >
          <CarouselHero />
        </div>
        <div>
          <FirstContent />
        </div>
        <div >
          <SecondContent />
        </div>
        <div>
          <ThirdContent />
        </div>
        <div>
          <FourContent />
        </div>
        <div >
          <FiveContent />
        </div>
        <div>
          <SixContent />
        </div>
        <div >
          <SevenContent />
        </div>
        <div style={{ marginBottom: "300px" }}></div>
      </div>
    </div>
  );
};
export default MainContent;
