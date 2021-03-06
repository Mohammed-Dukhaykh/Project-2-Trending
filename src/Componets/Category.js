import { Card, Row, Col, Container, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BsChevronRight } from "react-icons/bs"
import "../style.css"
function Category() {
  return (
    <>
      <Container>
        <div class="logoImg123">
        <img  src="https://pbs.twimg.com/media/FE8GAFsX0AMX9q3?format=png&name=900x900"/>
        </div>
        <Card.Header className="categoryTrending123" as="h1"  >All Sections </Card.Header>
        <Card className="mt-5">
          <Row>
            <Col>
              <Card.Img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3137890%2Fpexels-photo-3137890.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940" />
            </Col>
            <Col >
              <Card.Body  className="mt-5 d-flex flex-column align-items-center">
                <Card.Title class="titletrending123">Movies</Card.Title>
                <Card.Text className="mt-5" style={{ textAlign: "center" }}>
                  This Section Includes many Trending Movies And Box Office Movies And Best Movies Right Now .
                </Card.Text>
              </Card.Body>
              <Card.Footer className="mt-4">
                <div class="categorydiv123" >
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
                <Card.Title class="titletrending123"  >Gaming</Card.Title>
                <Card.Text  className="mt-5" style={{ textAlign: "center" }}>
                    In This Section You Can Watch All Trending Games And Best Games Right Now And Many 
                    Type of Games Like Football Games And War Games and other Type.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="mt-4">
                <div class="categorydiv123" >
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
                <Card.Title class="titletrending123">Books</Card.Title>
                <Card.Text className="mt-5" style={{ textAlign: "center" }}>
                  You Can Watch In This Section Many Types Of Types Like History Books And Classics Books And Detective and Mystery
                  Books And Fantasy Books And Horror Books .
                </Card.Text>
              </Card.Body>
              <Card.Footer className="mt-4">
                <div class="categorydiv123">
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
                <Card.Title class="titletrending123" >Sports</Card.Title>
                <Card.Text className="mt-5" style={{ textAlign: "center" }} >
                 This Section Includes All Sports Trending And There Are Many Sports Like Football And Running 
                 And Swimming And Road Cycling And Horse competition And Other Sports .
                </Card.Text>
              </Card.Body>
              <Card.Footer className="mt-4">
                <div class="categorydiv123">
                  <Link
                    style={{ textDecoration: "none", color: "black", fontSize: "30px", fontWeight: "bolder" }}
                    to="/sports"
                  >
                    {" "}
                    Go To Sports <BsChevronRight />
                  </Link>
                </div>
              </Card.Footer>
            </Col>
            <Col className="ml-5">
              <Card.Img src="https://images.unsplash.com/photo-1609773335024-be4301497ea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
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
                <Card.Title class="titletrending123">Music</Card.Title>
                <Card.Text className="mt-5" style={{ textAlign: "center" }}>
                 This Section You Will Found All Top Music Right Now And You Can Watch All Trending Music 
                 And You Can To Listen To Music From The Link In Page .
                </Card.Text>
              </Card.Body>
              <Card.Footer className="mt-4">
                <div class="categorydiv123">
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
