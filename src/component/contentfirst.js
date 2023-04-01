import CardMini from "./cardminiHorizontal";
import BigCard from "./bigcard";
import x1image1 from "./../asset/x1image1.png";
import x1image2 from "./../asset/x1image2.png";
import x1image3 from "./../asset/x1image3.png";
import bigcardimg from "./../asset/image 13.png";

function FirstContent(props) {
  return (
    <div className="container"  id="#content1">
              <h4 className="text-center my-3 mt-5">Artikel Terbaru</h4>
      <div className="row">
        <div className="col-12 col-lg-6">
          <BigCard image={bigcardimg} />
        </div>
        <div className="col-12 col-lg-6">
          <div className="col my-3">
            <CardMini
              image={x1image1}
              judul="viral blalalala"
              deskripsi="jftfcghjb"
            />
          </div>
          <div className="col my-3">
            <CardMini
              image={x1image2}
              judul="viral blalalala"
              deskripsi="jftfcghjb"
            />
          </div>
          <div className="col my-3">
            <CardMini
              image={x1image3}
              judul="viral blalalala"
              deskripsi="jftfcghjb"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstContent;
