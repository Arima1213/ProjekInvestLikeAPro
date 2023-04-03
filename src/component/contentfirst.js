import CardMini from "./cardminiHorizontal";
import BigCard from "./bigcard";
import React from "react";
import LandingPage from "./landingpage";
import root from "..";
import database from "./dataobjec";

/*berisi konten ke satu */
function FirstContent(props) {
  function open(d) {
    root.render(
      <React.StrictMode>
        <LandingPage image={database[d].image} judul={database[d].judul} isi={database[d].isi} />
      </React.StrictMode>
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="container" id="ketiga">
      <h4 className="text-center my-3 mt-5">Artikel Terbaru</h4>
      <div className="row">
        <div className="col-12 col-lg-6">
          <a onClick={open.bind(this, 0)}>
            <BigCard image={database[0].image} />
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <div className="col my-3">
            <a onClick={open.bind(this, 1)}>
              {window.innerWidth < 768 ? (
                <CardMini image={database[1].image} judul={database[1].judul} />
              ) : (
                <CardMini
                  image={database[1].image}
                  judul={database[1].judul}
                  deskripsi={database[1].deskripsi}
                />
              )}
            </a>
          </div>
          <div className="col my-3">
            <a onClick={open.bind(this, 2)}>
              {window.innerWidth < 768 ? (
                <CardMini image={database[2].image} judul={database[2].judul} />
              ) : (
                <CardMini
                  image={database[2].image}
                  judul={database[2].judul}
                  deskripsi={database[2].deskripsi}
                />
              )}
            </a>
          </div>
          <div className="col my-3">
            <a onClick={open.bind(this, 3)}>
              {window.innerWidth < 768 ? (
                <CardMini image={database[3].image} judul={database[3].judul} />
              ) : (
                <CardMini
                  image={database[3].image}
                  judul={database[3].judul}
                  deskripsi={database[3].deskripsi}
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstContent;
