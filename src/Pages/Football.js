import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import {Col , Row , Card, Container} from "react-bootstrap"
function Football() {
  const { football } = useContext(PostsContext)
  return (
      <Container>
    <Row xs={1} md={4} className="g-4">
      {football.map(item => (
        <Col key={item._id}>
          
          <Card>
            <Card.Img variant="top" src={item.relationships.images.data[0]?.url} />
            <Card.Body>
              <Card.Title>{item.attributes.name}</Card.Title>
            </Card.Body>
          </Card>
          
          {/* {item.relationships.map(img=>(
            <Card>
            <Card.Img variant="top" src={img.imges.data.url} />
            </Card>

          ))} */}
        </Col>

        
      ))}
     
    </Row>
   
    </Container>
  )
}

export default Football
