import { useContext } from "react"
import { Col, Card, Row, Container } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"
import "../style.css"

function GamingItems() {
  const { games } = useContext(PostsContext)
  return (<div style={{backgroundImage:`url("https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")` , backgroundRepeat:"no-repeat" , backgroundAttachment:"fixed"}}>
    <br />
     <h1 style={{textAlign:"center" , color:"IndianRed" , fontFamily:'Cursive' , fontSize:"50px"}}>Best games of the year</h1>
      <Container>
    <Row xs={1} md={2} className="g-4" >
      {games.map(game => (
         <Col>
        
         <br /> <br /> <br />
      <Card style={{  border:"10px double"}} >
        <Card.Img variant="top" src={game.header_image} />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{game.name}</Card.Title>
          
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
