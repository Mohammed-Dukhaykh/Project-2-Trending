import { useContext } from "react"
import { Card, CardGroup, Col, Row,Image } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import PostsContext from "../Utils/PostsContext"
function Books() {
  const { books } = useContext(PostsContext)
  return (
    <>
      {books?.map(book => (
          <>
       <Card.Header as="h2" className="text-center" >{book.name}</Card.Header>
        <Row   xs={1} md={3} className="g-5 mx-4 ">
        {book.preview.map(prev=>(
           <Card>
           <Row style={{ justifyContent:"space-between"}}>
           <Col>
             <Image className="img-fluid rounded-start" variant="top" src={prev.imageURL} height="200px" />
             </Col>
             <Col>
             
             <Card.Body >
               <Card.Title >{prev.title}</Card.Title>
              
             </Card.Body>
             </Col>
           </Row>
         </Card>
        ))}
        </Row>
</>

      ))}
    </>
  )
}

export default Books
