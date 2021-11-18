import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import {Row , Col , Card, Container} from "react-bootstrap"

function Movie() {
  const { films } = useContext(PostsContext)
  return (
      <Container>
    <Row key={films.id} xs={1} md={4} className="g-4">
      {films.map(film => (
        <Col>
          <Card>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + film.poster_path} />
            <Card.Body>
              <Card.Title>{film.title}</Card.Title>
              <Card.Text>
                  {film.overview}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  )
}

export default Movie
