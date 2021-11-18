import { useContext } from "react";
import {Container, Form , Button} from "react-bootstrap"
import PostsContext from "../Utils/PostsContext";
function Login() {
    const {login} = useContext(PostsContext)
    return ( 
    <Container>
    <Form onSubmit={login} className="mt-5">
        <h2>Login</h2>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </Container> );
}

export default Login;