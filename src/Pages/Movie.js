import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Row, Col, Card, Container, Image } from "react-bootstrap"
import "../style.css"

function Movie() {
  const { films } = useContext(PostsContext)
  return (
    <body class="bodymovie12">
      <div class="moviecard12">
        <br></br>
        <h1 class="moviedesc12">The Films are trending</h1>

        <Row key={films.id} xs={1} md={2} className="g-5 ">
          {films.map(film => (
            <Card style={{ backgroundColor: "black", marginLeft: "300px" }} className=" me-1">
              <Row>
                <Col>
                  <Image
                    className="img-fluid rounded-start"
                    variant="top"
                    src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + film.poster_path}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title class="movietitle12">{film.title}</Card.Title>
                    <Card.Text class="movieoverview12">{film.overview}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </Row>
      </div>
    </body>
  )
}

export default Movie
