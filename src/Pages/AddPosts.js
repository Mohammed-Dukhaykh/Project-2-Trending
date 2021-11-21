import { useContext } from "react"
import {Form , Col , Row , Button} from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"
function AddPosts() {
    const {addPost} = useContext(PostsContext)
  return (
    <Form onSubmit={addPost}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Images
        </Form.Label>
        <Col sm="10">
          <Form.Control type="url" name="image" required />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Description
    </Form.Label>
    <Col sm="10">
    <Form.Control as="textarea" rows={3} name="description" required />
    </Col>
  </Form.Group>
  <Button variant="primary" type="submit">
    Share
  </Button>
    </Form>
  )
}

export default AddPosts
