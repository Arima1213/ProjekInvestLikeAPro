import NavBarKu from "./navbarnew";
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
      <NavBarKu />
      <div
      // data-bs-spy="scroll"
      // data-bs-target="#navbar"
      // data-bs-root-margin="0px 0px -40%"
      // data-bs-smooth-scroll="true"
      // className="scrollspy-example bg-body-tertiary p-3 mx-0"
      // tabIndex={0}
      >
        <div>
          <CarouselHero />
        </div>
        <div>
          <FirstContent />
        </div>
        <div>
          <SecondContent />
        </div>
        <div>
          <ThirdContent />
        </div>
        <div>
          <FourContent />
        </div>
        <div>
          <FiveContent />
        </div>
        <div>
          <SixContent />
        </div>
        <div>
          <SevenContent />
        </div>
        <div style={{ marginBottom: "300px" }}></div>
      </div>
    </div>
  );
};
export default MainContent;
