import { Carousel, Container, Image, Col, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../style.css"

function HeaderItem() {
  return (
    <div class="headerpage123">
      <Container>
        <Row>
          <Col className="mx-5">
            <h3 class="titleshare123" >SHARE YOUR TRENDING</h3>
            <p class="paragshare123">
              Share your trending movie and sports and music and books and games and other trending and make other
              people to watch your trending , and watch all trending people
            </p>
            <Link to="/tending-posts" className="btn btn-primary">
              Go To Tending Posts
            </Link>
          </Col>
          <Col>
            <div>
              <img src="https://pbs.twimg.com/media/FE06UOyXIAobLU5?format=png&name=small" height="400px" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeaderItem
