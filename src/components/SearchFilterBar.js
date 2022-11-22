import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchFilterBar() {
    // array of game names
    // set state input in the search bar
    // go through array of game names and render cards with name

    return (
      <>
      <div className="" style={{ margin: "80px 40px 20px 40px" }}>
        <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
      </div>
      </>
    )
  }
  
  export {SearchFilterBar};