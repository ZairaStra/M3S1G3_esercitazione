import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = function ({ books }) {
  return (
    <Container>
      <h2 className="my-4 font-monospace text-center">Section of the day</h2>
      <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="justify-content-center gy-4">
        {books.map((book) => (
          <Col key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
