import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import {Row , Col , Card, Container , Image} from "react-bootstrap"

function Movie() {
  const { films } = useContext(PostsContext)
  return (

  <body style={{backgroundColor:"black"}}>
    
  

  <br></br>  
    <h1 style={{textAlign:"center" , fontStyle:"italic" , color:"GhostWhite"}}>The Films are trending</h1>
      <Container>
    <Row key={films.id} xs={1} md={2} className="g-5 mx-4 ">
      {films.map(film => (
        <Card style={{backgroundColor:"DarkRed" } }>
          <Row style={{ justifyContent:"space-between"}}>
          <Col>
            <Image className="img-fluid rounded-start" variant="top" src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + film.poster_path} />
            </Col>
            <Col>
            
            <Card.Body >
              <Card.Title style={{fontSize:"30px" , textAlign:"center" , color:"black" , fontWeight:"bold" , fontFamily:"serif"  }}>{film.title}</Card.Title>
              <Card.Text style={{overflow:"hidden" , height:"100px" , textAlign:"center" , color:"white"}  } className="mt-5" >
                  {film.overview}
              </Card.Text>
            </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Row>
    </Container>
    
    </body>
  )
}

export default Movie
