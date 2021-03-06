import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Col, Row, Card, Container } from "react-bootstrap"
import "../style.css"
function Sports() {
  const { sports } = useContext(PostsContext)
  return (
    <div class="footballdiv123">
      <br /> <br />
      <h1 class="footballtitle12">Try some new sports</h1>
      <br /> <br />
      <Container>
        <Row xs={1} md={4} className="g-4">
          {sports.map(item => (
            <div class="col-md-6">
              <div class="card flex-md-row mb-4 shadow-sm h-md-250" style={{ backgroundColor: "#E6E6FA" }}>
                <div class="card-body d-flex flex-column align-items-start">
                  <strong style={{ marginTop: "100px", opacity: "0.7" }} class="d-inline-block mb-2 text-success">
                    {item.attributes.name}
                  </strong>
                </div>
                <img
                  class="card-img-right flex-auto d-none d-lg-block"
                  alt="Thumbnail [200x250]"
                  src={item.relationships.images.data[0]?.url}
                  style={{ height: "250px", width: "400px" }}
                />
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Sports
