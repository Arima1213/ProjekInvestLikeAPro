import NavBarKu from "./navbarnew";
import MainContent from "./maincontent";
import React from "react";
import root from "..";
import database from "./dataobjec";
import CardVidioSimple from "./cardvidiosimple";

/*untuk menampilkan artikel2 saat di tekan*/
function LandingPageVidio(props) {
  function openVid(d) {
    root.render(
      <React.StrictMode>
        <LandingPageVidio
          image={database[d].image}
          judul={database[d].judul}
          link={database[d].link}
        />
      </React.StrictMode>
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function open(d) {
    root.render(
      <React.StrictMode>
        <MainContent />
      </React.StrictMode>
    );
  }

  function generateRandomNumber() {
    const min = 22;
    const max = 35;
    const range = max - min;
    const randomNumber = Math.floor(Math.random() * range) + min;
    return randomNumber;
  }

  function OpenRandom() {
    var random = generateRandomNumber();
    root.render(
      <React.StrictMode>
        <LandingPageVidio
          image={database[random].image}
          judul={database[random].judul}
          link={database[random].link}
        />
      </React.StrictMode>
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <NavBarKu />
      <div className="container mt-5 pt-5 ">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div
              className="my-3 col-12"
              style={{ height: "300px", objectFit: "cover", objectPosition: "center" }}
            >
              {props.link}
            </div>
            <h4 className="my-3">{props.judul}</h4>
          </div>
          <div className="col-12 col-lg-4">
            <h5 className="text-center my-3 mt-5">Trending</h5>
            <div className="row">
              <div className="col-12 my-2">
                <a onClick={openVid.bind(this, 33)}>
                  <CardVidioSimple
                    image={database[33].image}
                    judul={database[33].judul}
                    view="34.785x Ditonton"
                    waktu="10 hari yang lalu"
                  />
                </a>
              </div>
              <div className="col-12 my-2">
                <a onClick={openVid.bind(this, 34)}>
                  <CardVidioSimple
                    image={database[34].image}
                    judul={database[34].judul}
                    view="34.785x Ditonton"
                    waktu="10 hari yang lalu"
                  />
                </a>
              </div>
              <div className="col-12 my-2">
                <a onClick={openVid.bind(this, 35)}>
                  <CardVidioSimple
                    image={database[35].image}
                    judul={database[35].judul}
                    view="34.785x Ditonton"
                    waktu="10 hari yang lalu"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 d-flex justify-content-between">
          <button type="button" class="btn btn-primary" onClick={open}>
            Kembali
          </button>
          <button type="button" class="btn btn-secondary" onClick={OpenRandom}>
            Random Vidio
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPageVidio;
