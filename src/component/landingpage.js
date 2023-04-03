import NavBarKu from "./navbarnew";
import CardSimple from "./simplecard";
import MainContent from "./maincontent";
import React from "react";
import root from "..";
import database from "./dataobjec";

/*untuk menampilkan artikel2 saat di tekan*/
function LandingPage(props) {
  function open(d) {
    root.render(
      <React.StrictMode>
        <MainContent />
      </React.StrictMode>
    );
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 16);
  }

  function OpenRandom() {
    var random = getRandomNumber();
    root.render(
      <React.StrictMode>
        <LandingPage
          image={database[random].image}
          judul={database[random].judul}
          isi={database[random].isi}
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
                <CardSimple judul="#2 Bos BCA" deskripsi="6.239.112x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#3 Batu Bara" deskripsi="4.945.345x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#4 IHSG" deskripsi="3.752.982x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#5 Industri" deskripsi="2.936.381x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#6 Borong Saham" deskripsi="1.291.396x Dilihat" />
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 d-flex justify-content-between">
          <button type="button" className="btn btn-primary" onClick={open}>
            Kembali
          </button>
          <button type="button" className="btn btn-secondary" onClick={OpenRandom}>
            Random Article
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
