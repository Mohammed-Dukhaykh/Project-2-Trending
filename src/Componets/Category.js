import { Card, Row, Col, Container, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BsChevronRight } from "react-icons/bs"
function Category() {
  return (
    <>
      <Container>
        <Card className="mt-5">
          <Row>
            <Col>
              <Card.Img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3137890%2Fpexels-photo-3137890.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940" />
            </Col>
            <Col className="">
              <Card.Body className="mt-5 d-flex flex-column align-items-center">
                <Card.Title style={{ fontSize: "50px", fontWeight: "bolder" }}>Movies</Card.Title>
                <Card.Text className="mt-5" style={{ textAlign: "center" }}>
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring whic
                </Card.Text>
              </Card.Body>
              <Card.Footer className="mt-4">
                <div className="d-flex align-items-center justify-content-center">
                  <Link
                    style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bolder" }}
                    to="/films"
                  >
                    {" "}
                    Go To Movies <BsChevronRight />
                  </Link>
                </div>
              </Card.Footer>
            </Col>
          </Row>
        </Card>

        <Card className="mt-5 ">
          <Row>
            <Col>
              <Card.Body className="mt-5 d-flex flex-column align-items-center">
                <Card.Title  style={{ fontSize: "50px", fontWeight: "bolder" }}>Gaming</Card.Title>
                <Card.Text  className="mt-5" style={{ textAlign: "center" }}>
                  A wonderful serenity has taken Card.Textossession of my entire soul, like these sweet mornings of
                  sCard.Textring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this
                  sCard.Textot, which was created for the bliss of souls like mine.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="mt-4">
                <div className="d-flex align-items-center justify-content-center">
                  <Link
                    style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bolder" }}
                    to="/games"
                  >
                    {" "}
                    Go To Gaming <BsChevronRight />
                  </Link>
                </div>
              </Card.Footer>
            </Col>
            <Col>
              <Card.Img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3945683%2Fpexels-photo-3945683.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940" />
            </Col>
          </Row>
        </Card>
        <Card className="mt-5">
          <Row>
            <Col>
              <Card.Img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Col>
            <Col>
              <Card.Body className="mt-5 d-flex flex-column align-items-center">
                <Card.Title  style={{ fontSize: "50px", fontWeight: "bolder" }}>Books</Card.Title>
                <Card.Text className="mt-5" style={{ textAlign: "center" }}>
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which
                  I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was
                  created for the bliss of souls like mine.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="mt-4">
                <div className="d-flex align-items-center justify-content-center">
                  <Link
                    style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bolder" }}
                    to="/books"
                  >
                    {" "}
                    Go To Books <BsChevronRight />
                  </Link>
                </div>
              </Card.Footer>
            </Col>
          </Row>
        </Card>
        <Card className="mt-5">
          <Row>
            <Col>
              <Card.Body className="mt-5 d-flex flex-column align-items-center">
                <Card.Title  style={{ fontSize: "50px", fontWeight: "bolder" }}>Football</Card.Title>
                <Card.Text className="mt-5" style={{ textAlign: "center" }} >
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which
                  I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was
                  created for the bliss of souls like mine.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="mt-4">
                <div className="d-flex align-items-center justify-content-center">
                  <Link
                    style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bolder" }}
                    to="/football"
                  >
                    {" "}
                    Go To Football <BsChevronRight />
                  </Link>
                </div>
              </Card.Footer>
            </Col>
            <Col className="ml-5">
              <Card.Img src="https://images.unsplash.com/photo-1551388749-6b3478890d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTY5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            </Col>
          </Row>
        </Card>
        <Card className="mt-5">
          <Row>
            <Col>
              <Card.Img src="https://images.unsplash.com/photo-1496369654500-4f0caba0ecfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" />
            </Col>
            <Col>
              <Card.Body className="mt-5 d-flex flex-column align-items-center">
                <Card.Title style={{ fontSize: "50px", fontWeight: "bolder" }}>Music</Card.Title>
                <Card.Text className="mt-5" style={{ textAlign: "center" }}>
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which
                  I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was
                  created for the bliss of souls like mine.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="mt-4">
                <div className="d-flex align-items-center justify-content-center">
                  <Link
                    style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bolder" }}
                    to="/music"
                  >
                    {" "}
                    Go To Music <BsChevronRight />
                  </Link>
                </div>
              </Card.Footer>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  )
}

export default Category
