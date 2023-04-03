import Card from "react-bootstrap/Card";

/*untuk card sebelah kanan*/
function CardSimple(props) {
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
        </div>
      </div>
    </Card>
  );
}

export default CardSimple;
