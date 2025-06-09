import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCards() {
  return (
    <Row className="g-4">
      <Col lg={3}>
        <Card >
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1sHuTc-pF6vOuDR-jcgE-54UmO6InaKfQA&s"
          />
          <Card.Body>
            <Card.Title>Jaime</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              dicta eveniet mollitia voluptas ducimus id autem ipsa consectetur
              reprehenderit animi doloremque, quos natus ratione, sit illo
              assumenda itaque quidem saepe!
            </Card.Text>
            <Button variant="primary">Enviar mensagem</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3}>
        <Card >
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1sHuTc-pF6vOuDR-jcgE-54UmO6InaKfQA&s"
          />
          <Card.Body>
            <Card.Title>Jaime</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              dicta eveniet mollitia voluptas ducimus id autem ipsa consectetur
              reprehenderit animi doloremque, quos natus ratione, sit illo
              assumenda itaque quidem saepe!
            </Card.Text>
            <Button variant="primary">Enviar mensagem</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3}>
        <Card >
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1sHuTc-pF6vOuDR-jcgE-54UmO6InaKfQA&s"
          />
          <Card.Body>
            <Card.Title>Jaime</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              dicta eveniet mollitia voluptas ducimus id autem ipsa consectetur
              reprehenderit animi doloremque, quos natus ratione, sit illo
              assumenda itaque quidem saepe!
            </Card.Text>
            <Button variant="primary">Enviar mensagem</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3}>
        <Card >
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1sHuTc-pF6vOuDR-jcgE-54UmO6InaKfQA&s"
          />
          <Card.Body>
            <Card.Title>Jaime</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              dicta eveniet mollitia voluptas ducimus id autem ipsa consectetur
              reprehenderit animi doloremque, quos natus ratione, sit illo
              assumenda itaque quidem saepe!
            </Card.Text>
            <Button variant="primary">Enviar mensagem</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default MyCards;
