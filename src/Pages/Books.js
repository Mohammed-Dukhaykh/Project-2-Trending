import { useContext } from "react"
import { Card, CardGroup, Col, Row, Image } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import PostsContext from "../Utils/PostsContext"
function Books() {
  const { books } = useContext(PostsContext)
  return (
    <div style={{ backgroundImage:`url("https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")` , minHeight:"100vh"}}>
      {books?.map(book => (
        <>
          <div
            className=" p-5 "
            style={{
              backgroundColor: "",
              // backgroundImage: `url("https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
              backgroundImage:"linear-gradient(90deg, rgba(0,64,218,1) 0%, rgba(0,0,0,1) 0%, rgba(63,78,116,1) 100%, rgba(8,14,29,1) 100%, rgba(0,74,255,1) 100%)"
            }}
          >
            <h1
              style={{ color: "white", fontWeight: "bolder", fontSize: "50px", letterSpacing: "2px" }}
              className="d-flex align-items-center justify-content-center"
            >
              {book.name}
            </h1>
          </div>

          {book.preview.map(prev => (
            <div
              style={{ backgroundColor: "white", height: "200px ", width: "300px" }}
              className="d-inline-flex justify-content-between  m-5"
            >
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
