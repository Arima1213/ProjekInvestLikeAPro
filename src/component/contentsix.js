import CardVidio from "./cardvidio";
import CardVidioSimple from "./cardvidiosimple";
import React from "react";
import LandingPageVidio from "./landingpage";
import root from "..";
import database from "./dataobjec";

/*berisi konten ke enam*/
function SixContent(props) {
  function open(d) {
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

  return (
    <div className="container" id="kelima">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h5 className="text-center my-3 mt-5">Vidio Terbaru</h5>
          <div className="row">
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 22)}>
                <CardVidio
                  image={database[22].image}
                  judul={database[22].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 23)}>
                <CardVidio
                  image={database[23].image}
                  judul={database[23].judul}
                  view="1.023x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 24)}>
                <CardVidio
                  image={database[24].image}
                  judul={database[24].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 25)}>
                <CardVidio
                  image={database[25].image}
                  judul={database[25].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 26)}>
                <CardVidio
                  image={database[26].image}
                  judul={database[26].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 27)}>
                <CardVidio
                  image={database[27].image}
                  judul={database[27].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 28)}>
                <CardVidio
                  image={database[28].image}
                  judul={database[28].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 29)}>
                <CardVidio
                  image={database[29].image}
                  judul={database[29].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 30)}>
                <CardVidio
                  image={database[30].image}
                  judul={database[30].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 31)}>
                <CardVidio
                  image={database[31].image}
                  judul={database[31].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a onClick={open.bind(this, 32)}>
                <CardVidio
                  image={database[32].image}
                  judul={database[32].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <h5 className="text-center my-3 mt-5">Trending</h5>
          <div className="row">
            <div className="col-12 my-2">
              <a onClick={open.bind(this, 33)}>
                <CardVidioSimple
                  image={database[33].image}
                  judul={database[33].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 my-2">
              <a onClick={open.bind(this, 34)}>
                <CardVidioSimple
                  image={database[34].image}
                  judul={database[34].judul}
                  view="34.785x Ditonton"
                  waktu="10 hari yang lalu"
                />
              </a>
            </div>
            <div className="col-12 my-2">
              <a onClick={open.bind(this, 35)}>
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
    </div>
  );
}

export default SixContent;
