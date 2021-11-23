import Button from "@restart/ui/esm/Button";
import { useContext } from "react";
import { Modal , Form ,Row , Col  } from "react-bootstrap";
import PostsContext from "../Utils/PostsContext";
import "../style.css"


function ModelItem(props) {
    const {item} = props
    const {show , handleClose , handleShow , confirmPost } = useContext(PostsContext)

    return (<Modal show={show} onHide={handleClose}>   
   
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <Form  style={{display:"flex" , flexDirection:"column" , padding:"30px 70px" , justifyContent:"center" , gap:"10px"}}  onSubmit={e => {
            confirmPost(e,item._id)
            handleClose()
        }}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label style={{marginRight:"40px"}} column sm="2">
          Images
        </Form.Label>
        <Col sm="10">
          <Form.Control type="url" name="image" required defaultValue={item.image} />
        </Col>
      </Form.Group>
      <Form.Group  as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label style={{marginRight:"40px"}}  column sm="2">
      Description
    </Form.Label>
    <Col sm="10">
    <Form.Control as="textarea" rows={3} name="description" required defaultValue={item.title} />
    </Col>
  </Form.Group>
  <Button className="btn btn-primary" variant="primary" type="submit">
    confirm
  </Button>
    </Form>
      </Modal>
       );
}

export default ModelItem;