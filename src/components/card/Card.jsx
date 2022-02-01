import { Card } from "react-bootstrap";
import "./card.scss";

const CardWrapperWrapper = (props, handler) => {
  return (
    <Card
      className="pointer"
      onClick={() => handler(props.id)}
      key={`card-${props.id}`}
    >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>{props.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardWrapperWrapper;
