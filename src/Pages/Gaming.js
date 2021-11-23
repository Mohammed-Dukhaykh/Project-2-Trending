import { useContext } from "react"
import { Col, Card, Row, Container } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"
import "../style.css"

function GamingItems() {
  const { games } = useContext(PostsContext)
  return (
    <div class="gamespage12">
      <br />
      <h1 class="titlegames12">Best games of the year</h1>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {games.map(game => (
            <Col>
              <br /> <br /> <br />
              <Card style={{ border: "10px double" }}>
                <Card.Img variant="top" src={game.header_image} />
                <Card.Body>
                  <Card.Title class="cardtitlegame">{game.name}</Card.Title>
                </Card.Body>
              </Card>
              <br /> <br />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default GamingItems
