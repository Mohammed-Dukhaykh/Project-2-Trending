import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import{Row,Card,Col,} from"react-bootstrap"

function MusicItems() {
  const { music } = useContext(PostsContext)

  return (
    <Row xs={1} md={5} className="g-4">
      {music.map(item => (
        <Col>
          <Card>
            <Card.Img variant="top" src={item.strAlbumCDart} />
            <Card.Body>
              <Card.Title>{item.strAlbum}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default MusicItems
