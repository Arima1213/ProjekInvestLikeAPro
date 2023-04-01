import CardVidio from "./cardvidio";
import CardVidioSimple from "./cardvidiosimple";
import vidiosImage1 from "./../asset/thumbnail1.png";
import vidiosImage2 from "./../asset/thumbnail2.png";
import vidiosImage3 from "./../asset/thumbnail3.png";
import vidiosImage4 from "./../asset/thumbnail4.png";
import vidiosImage5 from "./../asset/thumbnail5.png";
import vidiosImage6 from "./../asset/thumbnail6.png";
import vidiosImage7 from "./../asset/thumbnail7.png";
import vidiosImage8 from "./../asset/thumbnail8.png";
import vidiosImage9 from "./../asset/thumbnail9.png";
import vidiosImage10 from "./../asset/thumbnail10.png";
import vidiosImage11 from "./../asset/thumbnail11.png";

function SixContent(props) {
  return (
    <div className="container" id="#content6">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h5 className="text-center my-3 mt-5">APK Terending & Popular</h5>
          <div className="row">
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage1}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage2}
                judul="Pina Apps"
                view="1.023x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage3}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage4}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage5}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage6}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage7}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage8}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage9}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage10}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <CardVidio
                image={vidiosImage11}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <h5 className="text-center my-3 mt-5">Terbanyak Diunduh</h5>
          <div className="row">
            <div className="col-12 my-2">
              <CardVidioSimple
                image={vidiosImage11}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 my-2">
              <CardVidioSimple
                image={vidiosImage11}
                judul="Pina Apps"
                view="34.785x Ditonton"
                waktu="10 hari yang lalu"
              />
            </div>
            <div className="col-12 my-2">
              <CardVidioSimple
                image={vidiosImage11}
                judul="Pina Apps"
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
