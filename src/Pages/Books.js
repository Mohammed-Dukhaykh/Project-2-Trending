import { useContext } from "react"
import { Card, CardGroup, Col, Row, Image } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import PostsContext from "../Utils/PostsContext"
import "../style.css"
function Books() {
  const { books } = useContext(PostsContext)
  return (
    <div class="bookpagetrend123">
      {books?.map(book => (
        <>
          <div class="bookcontains123">
            <h1 class="booktitletrend12">{book.name}</h1>
          </div>

          {book.preview.map(prev => (
            <div class="bookbodytrend12">
              <Card.Img className="img-fluid rounded-start" variant="top" src={prev.imageURL} height="100px" />

              <Card.Body>
                <Card.Title>{prev.title}</Card.Title>
              </Card.Body>
            </div>
          ))}
        </>
      ))}
    </div>
  )
}

export default Books
