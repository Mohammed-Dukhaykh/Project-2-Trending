import { useContext } from "react"
import { Form, Col, Row, Button, Container, Image, Card } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"
import "../style.css"
function Signup() {
  const { signup } = useContext(PostsContext)
  return (
    <div class="signup123">
      <div class="signupcontainer12">
        <div>
          <Card.Img
            src="https://images.pexels.com/photos/937627/pexels-photo-937627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            height="700px"
            width="100%"
          />
        </div>
        <div class="formdiv12">
          <Form onSubmit={signup} className="m-5 d-flex flex-column align-items-center">
            <Card.Header as="h1">Sign up </Card.Header>
            <br />

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
            <div class="divsignup1" className="d-flex align-items-center justify-content-center">
              <Button
                style={{
                  backgroundColor: "#ADD8E6",
                  color: "black",
                  border: "none",
                  padding: "10px 30px",
                  letterSpacing: "4px",
                  fontWeight: "bold",
                }}
                variant="primary"
                type="submit"
              >
                SIGNUP
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Signup
