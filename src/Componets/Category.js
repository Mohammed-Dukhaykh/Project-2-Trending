import { Card, Row, Col, Container, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
function Category() {
  return (
    <>
      <Container>
        <Card>
          <Row>
            <Col className="">
              <Image src="https://unsplash.it/400/300?image=503" />
            </Col>
            <Col>
              
                <Card.Title>San Francisco</Card.Title>
                <p>
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which
                  I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was
                  created for the bliss of souls like mine.
                </p>
              
            </Col>
          </Row>
        </Card>
      

     
        <Card>
          <Row >
            <Col>
              <div>
                <h3>San Francisco</h3>
                <p>
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which
                  I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was
                  created for the bliss of souls like mine.
                </p>
              </div>
            </Col>
            <Col className="ml-5">
              <Image src="https://unsplash.it/400/300?image=503" />
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  )
}

export default Category
