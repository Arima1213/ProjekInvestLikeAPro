import CardApps from "./cardapps";
import CardAppsSimple from "./cardappssimple";
import database from "./dataobjec";

function FiveContent(props) {
  return (
    <div className="container" id="#content5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h5 className="text-center my-3 mt-5">APK Terending & Popular</h5>
          <div className="row">
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[0].image} judul="Pina Apps" />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[1].image} judul="Pina Apps" />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[2].image} judul="Pina Apps" />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[3].image} judul="Pina Apps" />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[4].image} judul="Pina Apps" />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[0].image} judul="Pina Apps" />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <h5 className="text-center my-3 mt-5">Terbanyak Diunduh</h5>
          <div className="row">
            <div className="col-12 my-2">
              <CardAppsSimple
                judul="Trading apps"
                rating=" 4.8"
                download=" 2.990"
              />
            </div>
            <div className="col-12 my-2">
              <CardAppsSimple
                judul="Trading apps"
                rating=" 4.8"
                download=" 2.990"
              />
            </div>
            <div className="col-12 my-2">
              <CardAppsSimple
                judul="Trading apps"
                rating=" 4.8"
                download=" 2.990"
              />
            </div>
            <div className="col-12 my-2">
              <CardAppsSimple
                judul="Trading apps"
                rating=" 4.8"
                download=" 2.990"
              />
            </div>
            <div className="col-12 my-2">
              <CardAppsSimple
                judul="Trading apps"
                rating=" 4.8"
                download=" 2.990"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiveContent;
