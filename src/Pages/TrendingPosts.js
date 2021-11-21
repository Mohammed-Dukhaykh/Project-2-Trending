import { useContext } from "react";
import PostsContext from "../Utils/PostsContext";
import {Card} from "react-bootstrap"

function TrendingPosts() {
    const {trndingPost} = useContext(PostsContext)
    return ( <>
    {trndingPost.map(item => (
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={item.image} />
         <Card.Body>
           <Card.Title>{item.title}</Card.Title>
           <Card.Text>
            {item.description}
           </Card.Text>
           
         </Card.Body>
       </Card>  
    ))}
 
    </> );
}

export default TrendingPosts;