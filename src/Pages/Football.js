import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import {Col , Row , Card, Container} from "react-bootstrap"
function Football() {
  const { football } = useContext(PostsContext)
  return (
      <Container>
    <Row xs={1} md={4} className="g-4">
      {football.map(item => (
        <Col>
          <Card>
            <Card.Img variant="top" src={item.logo_path} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  )
}

export default Football
