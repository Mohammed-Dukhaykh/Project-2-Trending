import { useContext } from "react"
import { Card, CardGroup } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"
function Books() {
  const { books } = useContext(PostsContext)
  return (
    <CardGroup>
      {books?.map(book => (
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{book.name}</Card.Title>
            <Card.Text>
             {book.preview.title}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  )
}

export default Books
