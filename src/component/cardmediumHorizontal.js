import Card from "react-bootstrap/Card";

function CardMedium(props) {
  return (
    <Card>
      <div className="row">
        <div className="col-3">
          <Card.Img variant="top" src={props.image} />
        </div>
        <div className="col">
          <div className="row">
            <Card.Title>{props.judul}</Card.Title>
          </div>
          <div className="row">
            <Card.Text>{props.deskripsi}</Card.Text>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardMedium;
