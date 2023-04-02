import NavBarKu from "./navbarnew";
import CardSimple from "./simplecard";

function LandingPage(props) {
  return (
    <div>
      <NavBarKu />
      <div className="container mt-5 pt-5 ">
        <div className="row">
          <div className="col-12 col-lg-8">
            <img
              className="my-3 col-12"
              style={{ height: "300px", objectFit: "cover", objectPosition: "center" }}
              src={props.image}
            ></img>
            <h4 className="my-3">{props.judul}</h4>
            <p>{props.isi}</p>
          </div>
          <div className="col-12 col-lg-4">
            <h5 className="text-center my-3 mt-5">Artikel Terpopuler</h5>
            <div className="row">
              <div className="col-12 my-2">
                <CardSimple judul="#1 Wahyu Kenzo" deskripsi="8.909.123x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#2 Bos BCA" deskripsi="8.909.123x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#3 Batu Bara" deskripsi="8.909.123x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#4 IHSG" deskripsi="8.909.123x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#5 Industri" deskripsi="8.909.123x Dilihat" />
              </div>
              <div className="col-12 my-2">
                <CardSimple judul="#6 Borong Saham" deskripsi="8.909.123x Dilihat" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
