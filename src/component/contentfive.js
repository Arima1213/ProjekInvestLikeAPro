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
              <CardApps image={database[16].image} judul={database[16].judul} />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[17].image} judul={database[17].judul} />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[18].image} judul={database[18].judul} />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[19].image} judul={database[19].judul} />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[20].image} judul={database[20].judul} />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={database[21].image} judul={database[21].judul} />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <h5 className="text-center my-3 mt-5">Terbanyak Diunduh</h5>
          <div className="row">
            <div className="col-12 my-2">
              <CardAppsSimple judul="Trading apps" rating=" 4.8" download=" 2.990" />
            </div>
            <div className="col-12 my-2">
              <CardAppsSimple judul="Trading apps" rating=" 4.8" download=" 2.990" />
            </div>
            <div className="col-12 my-2">
              <CardAppsSimple judul="Trading apps" rating=" 4.8" download=" 2.990" />
            </div>
            <div className="col-12 my-2">
              <CardAppsSimple judul="Trading apps" rating=" 4.8" download=" 2.990" />
            </div>
            <div className="col-12 my-2">
              <CardAppsSimple judul="Trading apps" rating=" 4.8" download=" 2.990" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiveContent;
