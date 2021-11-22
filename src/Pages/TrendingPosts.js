import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Card, Image , Row , Col, Container } from "react-bootstrap"

function TrendingPosts() {
  const { trndingPost, profile } = useContext(PostsContext)
  if (!profile) return null
  // const myPosts = trndingPost.filter(item => item._user._id === profile._id )
  return (
    <Container>
    <Row xs={1} md={2} className="g-5 m-5">
      {trndingPost.map(post => ( 
        <Col>        
        <Card style={{width:"20rem"}}>
          <Card.Header className="d-flex">
            <Image  src={post._user.photo} height="30px" roundedCircle />
            <Card.Title as="h6">
              {post._user.firstName} {post._user.lastName}
            </Card.Title>
          </Card.Header>

          <Card.Img src={post.image} height="320px" />
          <Card.Footer>
          <Card.Title as="h6">
              {post.title}
            </Card.Title>
          </Card.Footer>
        
        </Card>
        </Col>
      ))}
      </Row>
    </Container>
  )
}

export default TrendingPosts
