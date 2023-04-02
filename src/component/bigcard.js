import Card from "react-bootstrap/Card";

function BigCard(props) {
  return (
    <div>
      <Card.Img variant="top" src={props.image} />
    </div>
  );
}

export default BigCard;
