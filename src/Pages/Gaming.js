import { useContext } from "react"
import { Col, Card, Row, Container } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"

function GamingItems() {
  const { games } = useContext(PostsContext)
  return (
      <Container>
    <Row xs={1} md={4} className="g-4">
      {games.map(game => (
        <Col>
          <Card>
            <Card.Img variant="top" src={game.header_image} />
            <Card.Body>
              <Card.Title>{game.name}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  )
}

export default GamingItems
