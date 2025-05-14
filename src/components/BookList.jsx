import SingleBook from "./SingleBook";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";

const BookList = function ({ books }) {
  /* const searchBar = function () {
    const [searchText, setSearchText] = useState(` `);
    const setSearch = (event) => {
      setSearchText(event.target.value);
    };
    const submitSearch = (event) => {
      event.preventDefault();
    }; 
  };*/
  return (
    <Container>
      <div className="mb-5">
        <h2 className="my-4 font-monospace text-center">Search by name</h2>
        <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="justify-content-center gy-4">
          <InputGroup className="mb-3">
            <Form.Control type="text" placeholder="Search your next book!" aria-label="Search your book" aria-describedby="Search" />
            <Button type="submit" className="singleCardButton bg-danger border-0">
              Search
            </Button>
          </InputGroup>
        </Row>
      </div>
      <div className="mb-5">
        <h2 className="my-4 font-monospace text-center">Section of the day</h2>
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
};

export default BookList;
