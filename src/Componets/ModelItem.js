import Button from "@restart/ui/esm/Button";
import { useContext } from "react";
import { Modal , Form ,Row , Col  } from "react-bootstrap";
import PostsContext from "../Utils/PostsContext";


function ModelItem(props) {
    const {item} = props
    const {show , handleClose , handleShow , confirmPost } = useContext(PostsContext)

    return (   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={e => {
            confirmPost(e,item._id)
            handleClose()
        }}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Images
        </Form.Label>
        <Col sm="10">
          <Form.Control type="url" name="image" required defaultValue={item.image} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Description
    </Form.Label>
    <Col sm="10">
    <Form.Control as="textarea" rows={3} name="description" required defaultValue={item.title} />
    </Col>
  </Form.Group>
  <Button variant="primary" type="submit">
    Share
  </Button>
    </Form>
      </Modal> );
}

export default ModelItem;