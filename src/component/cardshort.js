import Card from "react-bootstrap/Card";

function CardYtShort(props) {
  return (
    <Card>
      <a href={props.link}>
        <Card.Img variant="top" src={props.image} />
      </a>
    </Card>
  );
}
export default CardYtShort;
