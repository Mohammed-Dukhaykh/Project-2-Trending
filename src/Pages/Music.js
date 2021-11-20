import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import{Row,Card,Col,} from"react-bootstrap"
import { Link } from "react-router-dom"

function MusicItems() {
  const { music } = useContext(PostsContext)

  return (
    <Row xs={1} md={5} className="g-4">
      {music.map(item => (
        <Col>
          <Card>
            <Card.Img variant="top" src={item.images.coverarthq} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <a className="btn btn-primary" href={item.url} target="_blank">Listen Music</a>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default MusicItems
