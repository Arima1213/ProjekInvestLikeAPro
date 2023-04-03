import NavBarKu from "./navbarnew";
import CardSimple from "./simplecard";
import MainContent from "./maincontent";
import React from "react";
import root from "..";
import database from "./dataobjec";

/*untuk menampilkan artikel2 saat di tekan*/
function LandingPageVidio(props) {
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
            <img
              className="my-3 col-12"
              style={{ height: "300px", objectFit: "cover", objectPosition: "center" }}
              src={props.image}
            ></img>
            <h4 className="my-3">{props.judul}</h4>
            <p>{props.isi}</p>
          </div>
          <div className="col-12 col-lg-4">
            <h5 className="text-center my-3 mt-5">Artikel Terpopuler</h5>
            <div className="row">
              <div className="col-12 my-2">
                <CardSimple judul="#1 Wahyu Kenzo" deskripsi="8.909.123x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#2 Bos BCA" deskripsi="8.909.123x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#3 Batu Bara" deskripsi="8.909.123x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#4 IHSG" deskripsi="8.909.123x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#5 Industri" deskripsi="8.909.123x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#6 Borong Saham" deskripsi="8.909.123x Dilihat" />
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
