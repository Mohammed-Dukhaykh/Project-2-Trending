import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import {Row , Col , Card, Container , Image} from "react-bootstrap"

function Movie() {
  const { films } = useContext(PostsContext)
  return (

  <body style={{backgroundImage:`url("https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/5e402bb0-94a3-4e0c-bcb8-be41acaad140/SA-ar-20211115-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,  backgroundAttachment: "fixed" , height:"100%" ,  }}>
  <div style={{backgroundImage:`url("https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/5e402bb0-94a3-4e0c-bcb8-be41acaad140/SA-ar-20211115-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,backgroundColor:"black" ,   backgroundAttachment: "fixed" , height:"100%"  }}>
    
  

  <br></br>  
    <h1 style={{textAlign:"center" , fontStyle:"italic" , color:"GhostWhite"}}>The Films are trending</h1>
      {/* <Container style={{margin:"60px"}}> */}
    <Row key={films.id} xs={1} md={2} className="g-5 ">
      {films.map(film => (
        <Card style={{backgroundColor:"black", marginLeft:"300px" } } className=" me-1"  >
          <Row style={{ justifyContent:"space-between"}}>
          <Col>
            <Image className="img-fluid rounded-start" variant="top" src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + film.poster_path} />
            </Col>
            <Col>
            
            <Card.Body >
              <Card.Title style={{fontSize:"30px" , textAlign:"center" , color:"DarkRed" , fontWeight:"bold" , fontFamily:"serif"  }}>{film.title}</Card.Title>
              <Card.Text style={{overflow:"hidden" , height:"100px" , textAlign:"center" , color:"white"}  } className="mt-5" >
                  {film.overview}
              </Card.Text>
            </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Row>
    {/* </Container> */}
    
    </div>
    </body>
  )
}

export default Movie
