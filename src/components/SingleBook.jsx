import { Col, Container, Row, Card } from "react-bootstrap";
/* import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react"; */

const SingleBook = function (props) {
  return (
    <Container>
      <Row xs={1} md={3} lg={4} className="justify-content-center gy-4">
        <Col key={props.asin}>
          <Card className="border-0">
            <Card.Img className="singleCardImg" variant="top" src={props.img} />
            <Card.Body className="text-center">
              <Card.Title className="singleCardTitle">{props.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
