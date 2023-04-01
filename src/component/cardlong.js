import Card from "react-bootstrap/Card";

function CardLong(props) {
  return (
    <Card>
      <div className="">
        <div className="row ">
          <div className="col mx-2 my-1">
            <div className="row ">
              <Card.Title>{props.judul}</Card.Title>
            </div>
            <div className="row">
              <Card.Text>{props.deskripsi}</Card.Text>
            </div>
          </div>
          <div className="col-3">
            <Card.Img variant="top" src={props.image} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardLong;
