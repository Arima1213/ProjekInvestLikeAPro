import BigCard from "./bigcard";
import React from "react";
import LandingPage from "./landingpage";
import root from "..";
import database from "./dataobjec";
import "aos/dist/aos.css";
import Aos from "aos";

/*berisi konten ke tiga*/
function ThirdContent(props) {
  Aos.init();
  function open(d) {
    root.render(
      <React.StrictMode>
        <LandingPage image={database[d].image} judul={database[d].judul} isi={database[d].isi} />
      </React.StrictMode>
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="container" id="pertama">
      <h4 className="text-center my-3 mt-5">Trending Terkini</h4>
      <div className="row my-3">
        <div data-aos="fade-right" data-aos-offset="150" className="col-12 col-lg-6 mt-3">
          <a onClick={open.bind(this, 8)}>
            <BigCard image={database[8].image} />
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row my-3">
            <div data-aos="fade-left" data-aos-offset="150" className="col">
              <a onClick={open.bind(this, 9)}>
                <BigCard image={database[9].image} />
              </a>
            </div>
          </div>
          <div className="row my-3">
            <div data-aos="fade-up" data-aos-offset="150" className="col">
              <a onClick={open.bind(this, 10)}>
                <BigCard image={database[10].image} />
              </a>
            </div>
            <div data-aos="fade-up" data-aos-offset="150" data-aos-delay="300" className="col">
              <a onClick={open.bind(this, 11)}>
                <BigCard image={database[11].image} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdContent;
