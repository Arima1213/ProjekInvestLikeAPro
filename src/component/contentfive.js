import CardApps from "./cardapps";
import CardAppsSimple from "./cardappssimple";
import database from "./dataobjec";
import "aos/dist/aos.css";
import Aos from "aos";

/*berisi konten ke lima*/
function FiveContent(props) {
  Aos.init();
  return (
    <div className="container" id="keempat">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h5 className="text-center my-3 mt-5">APK Terending & Popular</h5>
          <div className="row">
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="0"
              className="col-6 col-lg-4 my-2"
            >
              <CardApps
                link={database[16].link}
                image={database[16].image}
                judul={database[16].judul}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="300"
              className="col-6 col-lg-4 my-2"
            >
              <CardApps
                link={database[17].link}
                image={database[17].image}
                judul={database[17].judul}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="600"
              className="col-6 col-lg-4 my-2"
            >
              <CardApps
                link={database[18].link}
                image={database[18].image}
                judul={database[18].judul}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="0"
              className="col-6 col-lg-4 my-2"
            >
              <CardApps
                link={database[19].link}
                image={database[19].image}
                judul={database[19].judul}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="300"
              className="col-6 col-lg-4 my-2"
            >
              <CardApps
                link={database[20].link}
                image={database[20].image}
                judul={database[20].judul}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="600"
              className="col-6 col-lg-4 my-2"
            >
              <CardApps
                link={database[21].link}
                image={database[21].image}
                judul={database[21].judul}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <h5 className="text-center my-3 mt-5">Terbanyak Diunduh</h5>
          <div className="row">
            <div data-aos="fade-up" className="col-12 my-2">
              <CardAppsSimple judul="Robinhood" rating=" 4.4" download=" 14.990.456" />
            </div>
            <div data-aos="fade-up" className="col-12 my-2">
              <CardAppsSimple judul="Coinbase" rating=" 4.0" download=" 10.947.990" />
            </div>
            <div data-aos="fade-up" className="col-12 my-2">
              <CardAppsSimple judul="Acorns" rating=" 4.5" download=" 9.937.937" />
            </div>
            <div data-aos="fade-up" className="col-12 my-2">
              <CardAppsSimple judul="Stash" rating=" 4.1" download=" 6.097.375" />
            </div>
            <div data-aos="fade-up" className="col-12 my-2">
              <CardAppsSimple judul="TD Ameritrade" rating=" 4.8" download=" 2.990" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiveContent;
