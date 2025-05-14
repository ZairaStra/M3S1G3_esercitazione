import { Col, Container, Row, Card, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";

/* const AllTheBooks = function () {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="justify-content-center gy-4">
        {fantasy.map((book) => (
          <Col key={`fantasy-${book.asin}`}>
            <Card className="singleCard">
              <Card.Img className="singleCardImg" variant="top" src={book.img} />
              <Card.Body className="text-center">
                <Card.Title className="singleCardTitle text-truncate">{book.title}</Card.Title>
                <Card.Text className="singleCardText">{book.category}</Card.Text>
                <Button className="singleCardButton" variant="danger">
                  {book.price} €
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}; */

class AllTheBooks extends Component {
  state = {
    collection: [],
  };
  render() {
    return (
      <Container>
        <div className="text-center">
          <h2 className="my-4 font-monospace">Browse by genre</h2>
          <div className="d-flex justify-content-evenly gap-2 my-3">
            <Button className="singleCardButton" variant="success" onClick={() => this.setState({ collection: scifi })}>
              Scifi
            </Button>
            <Button className="singleCardButton" variant="warning text-white" onClick={() => this.setState({ collection: history })}>
              History
            </Button>
            <Button className="singleCardButton" variant="danger" onClick={() => this.setState({ collection: romance })}>
              Romance
            </Button>
            <Button className="singleCardButton" variant="primary" onClick={() => this.setState({ collection: fantasy })}>
              Fantasy
            </Button>
            <Button className="singleCardButton" variant="dark text-white" onClick={() => this.setState({ collection: horror })}>
              Horror
            </Button>
          </div>
        </div>
        <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="justify-content-center gy-4">
          {this.state.collection.map((book) => (
            <Col key={book.asin}>
              <Card className="singleCard">
                <Card.Img className="singleCardImg" variant="top" src={book.img} />
                <Card.Body className="text-center">
                  <Card.Title className="singleCardTitle text-truncate">{book.title}</Card.Title>
                  <Card.Text className="singleCardText text-capitalize">{book.category}</Card.Text>
                  <Button className="singleCardButton" variant="danger">
                    <i className="bi bi-basket"></i> <span>{book.price} €</span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
