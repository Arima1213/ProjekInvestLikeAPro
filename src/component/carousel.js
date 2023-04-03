import Carousel from "react-bootstrap/Carousel";
import hero1 from "./../asset/image 1.png";
import hero2 from "./../asset/image 2.png";
import hero3 from "./../asset/image 3.png";
import "./carousel.css";

/*baground besar bawah navbar*/
function CarouselHero() {
  return (
    <Carousel id="hero">
      <Carousel.Item>
        <img className="d-block" style={{ objectFit: "cover" }} src={hero1} alt="First slide" />
        <Carousel.Caption>
          <h3>"Invest Wisely, Reap Rewards Easily"</h3>
          <p style={{ fontSize: "0.8rem" }}>
            Membantu investor untuk mengambil keputusan investasi yang bijak, sehingga dapat
            memperoleh hasil investasi yang optimal.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " style={{ objectFit: "cover" }} src={hero2} alt="Second slide" />

        <Carousel.Caption>
          <h3>"Empowering You to Invest Like a Pro"</h3>
          <p style={{ fontSize: "0.8rem" }}>
            Pengetahuan dan pemahaman yang sama seperti para ahli investasi, sehingga mereka dapat
            mengambil keputusan investasi yang lebih cerdas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " style={{ objectFit: "cover" }} src={hero3} alt="Third slide" />

        <Carousel.Caption>
          <h3>"Your Guide to Successful Investing"</h3>
          <p style={{ fontSize: "0.8rem" }}>
            Panduan dan informasi yang dibutuhkan oleh para investor untuk mencapai kesuksesan dalam
            berinvestasi.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHero;
