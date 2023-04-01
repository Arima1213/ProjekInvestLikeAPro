import useTransition from "react";
import Carousel from "react-bootstrap/Carousel";
import hero1 from "./../asset/image 1.png";
import hero2 from "./../asset/image 2.png";
import hero3 from "./../asset/image 3.png";

function CarouselHero() {
  return (
    <Carousel pause="hover" id="#hero">
      <Carousel.Item>
        <img className="d-block w-100 h-100l" src={hero1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100l" src={hero2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100l" src={hero3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default CarouselHero;
