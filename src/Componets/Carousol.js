import { Carousel, Container, Image , Col , Row , Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function CarousolItem() {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
        backgroundRepeat: "no-repeat",
        height: "600px",
        backgroundSize: "cover",
        display:"flex" ,
        justifyContent: "center" ,
        alignItems: "center"
      }}
    >
      <Container >
        <Row >
          <Col className="mx-5">
          <h3 style={{fontSize:"80px" , fontWeight:"bolder"}}>SHARE YOUR TRENDING</h3>
          <p style={{fontSize:"20px"}}>Share your trending movie and sports and music and books and games and other trending and make other people to watch 
            your trending , and watch all trending people</p>
          <Button>Go To Tending Posts</Button>
          </Col>
          <Col>
          <div>
          <img src="https://pbs.twimg.com/media/FEkNfCyXEAEYSF2?format=png&name=small" height="400px" />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CarousolItem
