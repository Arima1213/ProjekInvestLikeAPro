import BigCard from "./bigcard";
import x1image1 from "./../asset/thirdConIMG (1).png";
import x1image3 from "./../asset/thirdConIMG (2).png";
import x1image2 from "./../asset/thirdConIMG (3).png";
import bigcardimg from "./../asset/image 13.png";

function ThirdContent(props) {
  return (
    <div className="container">
      <h4 className="text-center my-3 mt-5">Trending Terkini</h4>
      <div className="row my-3">
        <div className="col-12 col-lg-6">
          <BigCard image={bigcardimg} />
        </div>
        <div className="col-12 col-lg-6">
          <div className="row my-3">
            <div className="col">
              <BigCard image={x1image2} />
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <BigCard image={x1image1} />
            </div>
            <div className="col">
              <BigCard image={x1image3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdContent;
