import { Card, Row, Col, Container, Button, Image } from "react-bootstrap"
import {Link} from "react-router-dom"
function Category() {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4 mt-5 mb-3">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </Card.Text>
              
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </Card.Text>
              <Link to="/films">Go To Films</Link>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 mt-5 mb-3">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Category
