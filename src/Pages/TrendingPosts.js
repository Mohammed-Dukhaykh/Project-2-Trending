import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Card, Image} from "react-bootstrap"

function TrendingPosts() {
  const { trndingPost, profile } = useContext(PostsContext)
  if (!profile) return null
  // const myPosts = trndingPost.filter(item => item._user._id === profile._id )
  return (
    <>
      {trndingPost.map(post => (
        <Card>
          <Card.Header>
           
           <Image src={post._user.photo} height="30px" roundedCircle />
          
          </Card.Header>
        </Card>
      ))}
    </>
  )
}

export default TrendingPosts
