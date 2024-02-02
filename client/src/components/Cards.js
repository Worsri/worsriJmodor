import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function Cards({imageSrc,text,title,buttonText,style}) {
  return (
    <Card  style={{height:"100%"}}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text >{text} </Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}
Cards.propTypes = {
  text: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
export default Cards;
