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
          <Card>
            <Row   xs={1} md={4} className="g-5 mx-4 ">
              <Col>
       <h1  className="text-center" >{book.name}</h1>
       </Col>
      
        {book.preview.map(prev=>(
          <Col>
           
          
           <Col>
             <Image className="img-fluid rounded-start" variant="top" src={prev.imageURL} height="200px" />
             </Col>
             <Col>
             
             <Card.Body >
               <Card.Title >{prev.title}</Card.Title>
              
             </Card.Body>
             </Col>
          
         
         </Col>
        ))}
        </Row>
        </Card>
</>

      ))}
    </>
  )
}

export default Books
