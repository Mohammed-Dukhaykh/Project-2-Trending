import { useContext } from "react";
import PostsContext from "../Utils/PostsContext";
import {Col , Row , Image , Container , Card} from "react-bootstrap"
import Button from "@restart/ui/esm/Button";
import ModelItem from "../Componets/ModelItem";

function Profile() {
    const {trndingPost , profile , handleShow , removePost} = useContext(PostsContext)
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
            {myPost.map(item => (
                <>
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Text>
                     {item.title}
                    </Card.Text>
                  </Card.Body>
                  <Button onClick={handleShow}>Edit</Button>
                  <Button onClick={removePost} id={item._id }>Delete</Button>

                </Card>  
                <ModelItem item={item} />
                </>
            ))}
        </Row>
        
        </Container>);
}

export default Profile;