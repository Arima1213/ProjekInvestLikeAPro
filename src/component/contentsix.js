import CardVidio from "./cardvidio";
import CardVidioSimple from "./cardvidiosimple";
import React from "react";
import LandingPage from "./landingpage";
import root from "..";
import database from "./dataobjec";

function SixContent(props) {
  function open(d) {
    root.render(
      <React.StrictMode>
        <LandingPage image={database[d].image} judul={database[d].judul} link={database[d].link} />
      </React.StrictMode>
    );
  }

  return (
    <div className="container" id="#content6">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h5 className="text-center my-3 mt-5">Vidio Terbaru</h5>
          <div className="row">
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[22].image}
                judul={database[22].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[23].image}
                judul={database[23].judul}
                view="1.023x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[24].image}
                judul={database[24].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[25].image}
                judul={database[25].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[26].image}
                judul={database[26].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[27].image}
                judul={database[27].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[28].image}
                judul={database[28].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[29].image}
                judul={database[29].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[30].image}
                judul={database[30].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[31].image}
                judul={database[31].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={database[32].image}
                judul={database[32].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <h5 className="text-center my-3 mt-5">Trending</h5>
          <div className="row">
            <div className="col-12 my-2">
              <CardVidioSimple
                image={database[33].image}
                judul={database[33].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 my-2">
              <CardVidioSimple
                image={database[34].image}
                judul={database[34].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 my-2">
              <CardVidioSimple
                image={database[35].image}
                judul={database[35].judul}
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixContent;
