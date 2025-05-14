import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <div className="mb-5">
          <h3 className="my-4 font-monospace text-center">Search by name</h3>
          <Row xs={1} lg={2} className="justify-content-center gx-4 gy-4">
            <Col>
              <Form.Control
                type="text"
                placeholder="Search your next book!"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                aria-label="Search your book"
                aria-describedby="Search"
              />
            </Col>
          </Row>
        </div>
        <div className="mb-5">
          <h3 className="my-4 font-monospace text-center">Category: Fantasy</h3>
          <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="justify-content-center gy-4">
            {this.props.books
              .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
              .map((book) => (
                <Col key={book.asin}>
                  <SingleBook book={book} />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    );
  }
}

/* const BookList = function ({ books }) {
  return (
    <Container>
      <div className="mb-5">
        <h3 className="my-4 font-monospace text-center">Search by name</h3>
        <Row xs={1} lg={2} className="justify-content-center gx-4 gy-4">
          <Col>
            <InputGroup className="mb-3">
              <Form.Control type="text" placeholder="Search your next book!" aria-label="Search your book" aria-describedby="Search" />
              <Button type="submit" className="singleCardButton bg-danger border-0">
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </div>
      <div className="mb-5">
        <h3 className="my-4 font-monospace text-center">Section of the day</h3>
        <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="justify-content-center gy-4">
          {books.map((book) => (
            <Col key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}; */

export default BookList;
