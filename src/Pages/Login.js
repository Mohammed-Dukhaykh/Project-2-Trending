import { useContext } from "react"
import { Container, Form, Button, Card } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"
import "../style.css"
function Login() {
  const { login } = useContext(PostsContext)

  return (
    <>
      <div class="loginpage12">
        <div class="loginform12">
          <div>
            <h3 class="logintitle12">Sign In</h3>
            <div class="card-body">
              <>
                <Form onSubmit={login} className="mt-5">
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                  </Form.Group>
                  <div class="btnForm12">
                    <Button type="submit" style={{ padding: "10px 30px", backgroundImage: "none" }}>
                      Login
                    </Button>
                  </div>
                </Form>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
