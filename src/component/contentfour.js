import CardLong from "./cardlong";
import CardSimple from "./simplecard";
import x1image1 from "./../asset/x1image1.png";

function FourContent(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="row">
            <div className="col-12 my-2">
              <CardLong
                image={x1image1}
                judul="viral blalalala"
                deskripsi="jftfcghjb"
              />
            </div>
            <div className="col-12 my-2">
              <CardLong
                image={x1image1}
                judul="viral blalalala"
                deskripsi="jftfcghjb"
              />
            </div>
            <div className="col-12 my-2">
              <CardLong
                image={x1image1}
                judul="viral blalalala"
                deskripsi="jftfcghjb"
              />
            </div>
            <div className="col-12 my-2">
              <CardLong
                image={x1image1}
                judul="viral blalalala"
                deskripsi="jftfcghjb"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <h5 className="text-center my-3 mt-5">Artikel Terpopuler</h5>
          <div className="row">
            <div className="col-12 my-2">
              <CardSimple judul="viral blalalala" deskripsi="jftfcghjb" />
            </div>
            <div className="col-12 my-2">
              <CardSimple judul="viral blalalala" deskripsi="jftfcghjb" />
            </div>
            <div className="col-12 my-2">
              <CardSimple judul="viral blalalala" deskripsi="jftfcghjb" />
            </div>
            <div className="col-12 my-2">
              <CardSimple judul="viral blalalala" deskripsi="jftfcghjb" />
            </div>
            <div className="col-12 my-2">
              <CardSimple judul="viral blalalala" deskripsi="jftfcghjb" />
            </div>
            <div className="col-12 my-2">
              <CardSimple judul="viral blalalala" deskripsi="jftfcghjb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourContent;
