import CardYtShort from "./cardshort";
import shortvidio1 from "./../asset/YtShort (1).png";
import shortvidio2 from "./../asset/YtShort (2).png";
import shortvidio3 from "./../asset/YtShort (3).png";
import shortvidio4 from "./../asset/YtShort (4).png";

function SevenContent(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h5 className="text-center my-3 mt-5">Vidio Pendek</h5>
        </div>
        <div className="col-6 col-md-3">
          <CardYtShort
            image={shortvidio1}
            link="https://youtube.com/shorts/Bickq8HFC04?feature=share"
          />
        </div>
        <div className="col-6 col-md-3">
          <CardYtShort
            image={shortvidio2}
            link="https://youtube.com/shorts/f35tOREYV2M?feature=share"
          />
        </div>
        <div className="col-6 col-md-3">
          <CardYtShort
            image={shortvidio3}
            link="https://youtube.com/shorts/maPHAEXwX6o?feature=share"
          />
        </div>
        <div className="col-6 col-md-3">
          <CardYtShort
            image={shortvidio4}
            link="https://youtube.com/shorts/gpAAv4Xskks?feature=share"
          />
        </div>
      </div>
    </div>
  );
}

export default SevenContent;
