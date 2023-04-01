import Card from "react-bootstrap/Card";

function CardVidio(props) {
  return (
    <Card>
      <div className="">
        <div className="row ">
          <div className="col ">
            <div className="row mb-2">
              <Card.Img className="" variant="top" src={props.image} />
            </div>
            <div className="row mx-1 ">
              <Card.Title>{props.judul}</Card.Title>
            </div>
            <div className="row mx-1 my-0">
              <blockquote>{props.view} - {props.waktu}</blockquote>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardVidio;
