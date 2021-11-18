import { useContext } from "react";
import {Form , Col , Row , Button, Container} from "react-bootstrap"
import PostsContext from "../Utils/PostsContext";
function Signup() {
    const {signup} = useContext(PostsContext)
    return ( 
    <Container>
        
    <Form onSubmit={signup} className="mt-5">
    <h2>Sign up </h2>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your First Name" name="firstname" required />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Last Name" required name="lastname" />
          </Form.Group>
        </Row>
      
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" required name="email" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Your Password" required name="password" />
        </Form.Group>
      
        <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="photo" placeholder="Enter Your Photo" required name="photo" />
        </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
      </Container> );
}

export default Signup;