import CardApps from "./cardapps";
import CardAppsSimple from "./cardappssimple";
import appsimage1 from "./../asset/AppsImage (1).png";
import appsimage2 from "./../asset/AppsImage (2).png";
import appsimage3 from "./../asset/AppsImage (3).png";
import appsimage4 from "./../asset/AppsImage (4).png";
import appsimage5 from "./../asset/AppsImage (5).png";
import appsimage6 from "./../asset/AppsImage (6).png";

function FiveContent(props) {
  return (
    <div className="container" id="#content5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h5 className="text-center my-3 mt-5">APK Terending & Popular</h5>
          <div className="row">
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={appsimage1} judul="Pina Apps" />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={appsimage2} judul="Pina Apps" />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={appsimage3} judul="Pina Apps" />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={appsimage4} judul="Pina Apps" />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={appsimage5} judul="Pina Apps" />
            </div>
            <div className="col-6 col-lg-4 my-2">
              <CardApps image={appsimage6} judul="Pina Apps" />
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
