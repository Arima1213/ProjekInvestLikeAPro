import CardLong from "./cardlong";
import CardSimple from "./simplecard";
import React from "react";
import LandingPage from "./landingpage";
import root from "..";
import database from "./dataobjec";

/*berisi konten ke empat*/
function FourContent(props) {
  function open(d) {
    root.render(
      <React.StrictMode>
        <LandingPage image={database[d].image} judul={database[d].judul} isi={database[d].isi} />
      </React.StrictMode>
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="container" id="#content4">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="row">
            <div className="col-12 my-2">
              <a onClick={open.bind(this, 12)}>
                {window.innerWidth < 768 ? (
                  <CardLong image={database[12].image} judul={database[12].judul} />
                ) : (
                  <CardLong
                    image={database[12].image}
                    judul={database[12].judul}
                    deskripsi={database[12].deskripsi}
                  />
                )}
              </a>
            </div>
            <div className="col-12 my-2">
              <a onClick={open.bind(this, 13)}>
                {window.innerWidth < 768 ? (
                  <CardLong image={database[13].image} judul={database[13].judul} />
                ) : (
                  <CardLong
                    image={database[13].image}
                    judul={database[13].judul}
                    deskripsi={database[13].deskripsi}
                  />
                )}
              </a>
            </div>
            <div className="col-12 my-2">
              <a onClick={open.bind(this, 14)}>
                {window.innerWidth < 768 ? (
                  <CardLong image={database[14].image} judul={database[14].judul} />
                ) : (
                  <CardLong
                    image={database[14].image}
                    judul={database[14].judul}
                    deskripsi={database[14].deskripsi}
                  />
                )}
              </a>
            </div>
            <div className="col-12 my-2">
              <a onClick={open.bind(this, 15)}>
                {window.innerWidth < 768 ? (
                  <CardLong image={database[15].image} judul={database[15].judul} />
                ) : (
                  <CardLong
                    image={database[15].image}
                    judul={database[15].judul}
                    deskripsi={database[15].deskripsi}
                  />
                )}
              </a>
            </div>
          </div>
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
    </div>
  );
}

export default FourContent;
