import { useContext } from "react"
import { Card, CardGroup, Col, Row } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import PostsContext from "../Utils/PostsContext"
function Books() {
  const { books } = useContext(PostsContext)
  return (
    <>
      {books?.map(book => (
          <>
       <Card.Header as="h2" className="text-center" >{book.name}</Card.Header>
        <Row>
        {book.preview.map(prev=>(
            <Col>
            <Card>
          <Card.Img variant="top" src={prev.imageURL} />
          <Card.Body>
            <Card.Title className="text-center">{prev.title}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          
           
          
        </Card>
        </Col>
        ))}
        </Row>
</>

      ))}
    </>
  )
}

export default Books
