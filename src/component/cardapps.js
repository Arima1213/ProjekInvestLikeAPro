import Card from "react-bootstrap/Card";

function CardApps(props) {
  return (
    <Card>
      <div className="container">
        <div className="row ">
          <div className="col mx-2 my-1">
            <div className="row ">
              <Card.Img variant="top" src={props.image} />
            </div>
            <div className="row ">
              <Card.Title>{props.judul}</Card.Title>
            </div>
            <div className="row">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button type="button" className="col-12 btn btn-primary btn-sm">
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardApps;
