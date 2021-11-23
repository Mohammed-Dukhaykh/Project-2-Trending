import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Card, Image, Row, Col, Container } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"

function TrendingPosts() {
  const { trndingPost, profile } = useContext(PostsContext)
  
  // const myPosts = trndingPost.filter(item => item._user._id === profile._id )
  return (
    // <Container>
    // <Row xs={1} md={2} className="g-5 m-5">
    //   {trndingPost.map(post => (
    //     <Col>
    //     <Card style={{width:"20rem"}}>
    //       <Card.Header className="d-flex">
    //         <Image  src={post._user.photo} height="30px" roundedCircle />
    //         <Card.Title as="h6">
    //           {post._user.firstName} {post._user.lastName}
    //         </Card.Title>
    //       </Card.Header>

    //       <Card.Img src={post.image} height="320px" />
    //       <Card.Footer>
    //       <Card.Title as="h6">
    //           {post.title}
    //         </Card.Title>
    //       </Card.Footer>

    //     </Card>
    //     </Col>
    //   ))}
    //   </Row>
    // </Container>

    <div
      style={{
        backgroundColor:"" ,
        backgroundImage: `linear-gradient(90deg, rgba(200,82,186,1) 0%, rgba(92,157,209,1) 0%, rgba(70,29,65,1) 0%, rgba(56,70,77,1) 0%, rgba(66,113,136,1) 81%, rgba(64,104,124,1) 100%)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight:"100vh" ,
        backgroundAttachment:"fixed"
      }}
      className="divtrendingpost"
      class=" p-5"
    >
      <header
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
          height: "400px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity:"0.9" ,
        }}
        class=" d-flex align-items-center flex-column justify-content-center text-center"
      >
        <h1 style={{ color: "white" , fontSize:"80px" , fontWeight:"bolder"  }} class=" text-center ">
          People Trending
        </h1>
        <p style={{ color: "white" }} class="font-italic mb-0">
          Share Your Trending And Make The Others To See Your Posts .
        </p>
      </header>
      <div class="row">
        <div class="col-lg-11 mx-auto"></div>
      </div>
      <div class="row py-5">
        {trndingPost.map(post => (
          <div class="col-lg-4">
            <figure class="rounded p-3 bg-white shadow-sm">
              <CardHeader>
                <div className="d-flex justify-content-around">
                  <Image src={post._user.photo} roundedCircle height="60px" />
                  <h5>
                    {post._user.firstName} {post._user.lastName}
                  </h5>
                </div>
              </CardHeader>
              <img style={{ height: "380px" }} src={post.image} alt="" class="w-100 card-img-top" />
              <figcaption class="p-4 card-img-bottom">
                <p>{post.title}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      <div class="separator my-3"></div>
    </div>
  )
}

export default TrendingPosts
