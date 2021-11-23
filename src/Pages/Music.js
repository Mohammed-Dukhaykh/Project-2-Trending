import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Row, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../style.css"
import {FcMusic} from "react-icons/fc"
import Button from "@restart/ui/esm/Button"

function MusicItems() {
  const { music } = useContext(PostsContext)

  return (
    // <Row xs={1} md={5} className="g-4">
    //   {music.map(item => (
    //     <Col key={item.key}>
    //       <Card>
    //         <Card.Img variant="top" src={item.images.coverart} />
    //         <Card.Body>
    //           <Card.Title>{item.title}</Card.Title>
    //         </Card.Body>
    //         <Card.Footer>
    //           <a className="btn btn-primary" href={item.url} target="_blank">Listen Music</a>
    //         </Card.Footer>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>

    <section
      class="dark"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,64,218,1) 0%, rgba(0,74,255,1) 0%, rgba(0,64,218,1) 0%, rgba(63,78,116,1) 0%, rgba(8,14,29,1) 100%, rgba(0,74,255,1) 100%)",
        minHeight: "100vh",
      }}
    >
      <div class="container py-4">
        <h1 style={{color:"white" , fontSize:"60px"}} class="h1 text-center" id="pageHeaderTitle">
          Music Shazam 
        </h1>
        
        {music.map(item => (
          <>
           <div className="d-flex flex-column">
              <a style={{display:"inline" , padding:"20px,20px"}} href={item.url} target="_blank" className="btn btn-primary" >Listten to the Music <FcMusic /></a>
              </div>
          <article
            class="postcard "
            style={{
              display: "flex",
              gap:"200px" ,
              alignItems:"center" ,
              backgroundImage:
                " linear-gradient(90deg, rgba(0,64,218,1) 0%, rgba(0,74,255,1) 0%, rgba(0,64,218,1) 0%, rgba(0,74,255,1) 0%, rgba(63,78,116,1) 0%, rgba(26,40,77,1) 33%)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              marginBottom:"40px" ,
              borderRadius:"10px"
            }}
          >
            
              <img
                class="postcard__img"
                src={item.images.coverart}
                alt="Image Title"
                height="300px"
              />
           
            <div class="postcard__text d-flex flex-column">
              <h1 style={{ color: "white" }} class="postcard__title blue ">
                {item.title}
              </h1>
            </div>
            
            
          </article>
         
        
          </>
        ))}
      </div>
    </section>
  )
}

export default MusicItems
