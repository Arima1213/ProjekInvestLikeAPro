import CardMedium from "./cardmediumHorizontal";
import React from "react";
import LandingPage from "./landingpage";
import root from "..";
import database from "./dataobjec";
import "aos/dist/aos.css";
import Aos from "aos";

/*berisi konten ke dua*/
function SecondContent(props) {
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
    <div className="container" id="kedua">
      <h4 className="text-center my-3 mt-5">Artikel Terpopuler</h4>
      <div className="row">
        <div data-aos="fade-right" data-aos-offset="150" className="col-12 my-3 col-lg-6">
          <a onClick={open.bind(this, 4)}>
            {window.innerWidth < 768 ? (
              <CardMedium image={database[4].image} judul={database[4].judul} />
            ) : (
              <CardMedium
                image={database[4].image}
                judul={database[4].judul}
                deskripsi={database[4].deskripsi}
              />
            )}
          </a>
        </div>
        <div data-aos="fade-left" data-aos-offset="150" className="col-12 my-3 col-lg-6">
          <a onClick={open.bind(this, 5)}>
            {window.innerWidth < 768 ? (
              <CardMedium image={database[5].image} judul={database[5].judul} />
            ) : (
              <CardMedium
                image={database[5].image}
                judul={database[5].judul}
                deskripsi={database[5].deskripsi}
              />
            )}
          </a>
        </div>
        <div data-aos="fade-right" data-aos-offset="150" className="col-12 my-3 col-lg-6">
          <a onClick={open.bind(this, 6)}>
            {window.innerWidth < 768 ? (
              <CardMedium image={database[6].image} judul={database[6].judul} />
            ) : (
              <CardMedium
                image={database[6].image}
                judul={database[6].judul}
                deskripsi={database[6].deskripsi}
              />
            )}
          </a>
        </div>
        <div data-aos="fade-left" data-aos-offset="150" className="col-12 my-3 col-lg-6">
          <a onClick={open.bind(this, 7)}>
            {window.innerWidth < 768 ? (
              <CardMedium image={database[7].image} judul={database[7].judul} />
            ) : (
              <CardMedium
                image={database[7].image}
                judul={database[7].judul}
                deskripsi={database[7].deskripsi}
              />
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SecondContent;
