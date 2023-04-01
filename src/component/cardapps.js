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
            <button type="button" className="btn btn-primary btn-sm">Download</button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardApps;
