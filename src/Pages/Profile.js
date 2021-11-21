import { useContext } from "react";
import PostsContext from "../Utils/PostsContext";
import {Col , Row , Image , Container , Card} from "react-bootstrap"

function Profile() {
    const {trndingPost , profile} = useContext(PostsContext)
    if(!profile) {
        return <h1>Loading...</h1>
    }
    const myPost = trndingPost.filter(post => post._user._id === profile._id)
    return (  <Container>
        <Row>
            <Col>
            <Image src={profile.photo} />
            <h1>{profile.firstName} {profile.lastName}</h1>
            </Col>
        </Row>
        <Row>
            {myPost.map(item => {
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Text>
                     {item.title}
                    </Card.Text>
                    
                  </Card.Body>
                </Card>  
            })}
        </Row>
        </Container>);
}

export default Profile;