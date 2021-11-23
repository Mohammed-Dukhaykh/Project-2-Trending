import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Col, Row, Image, Container, Card  , NavDropdown} from "react-bootstrap"
import Button from "@restart/ui/esm/Button"
import ModelItem from "../Componets/ModelItem"

function Profile() {
  const { trndingPost, profile, handleShow, removePost } = useContext(PostsContext)
  if (!profile) {
    return <h1>Loading...</h1>
  }
  const myPost = trndingPost.filter(post => post._user._id === profile._id)
  return (
    // <div
    //   className="d-flex flex-row justify-content-center"
    //   style={{
    //     backgroundImage: "linear-gradient(to right, #e96443, #904e95)",
    //     height: "100vh",
    //     backgroundAttachment: "fixed",
    //   }}
    // >
    //   <Row className="d-flex align-items-start mt-5" style={{ marginBottom: "20px", backgroundColor: "white" , width:"700px" }}>
    //     <Col>
    //       <Image src={profile.photo} height="150px" width="200px" />
    //     </Col>
    //     <Col>
    //       <h4>
    //         {profile.firstName} {profile.lastName}
    //       </h4>
    //       <p>{profile.email}</p>
    //     </Col>
            
            
            
        
    //   </Row>
    // </div>
    // <div
    //   className="d-flex flex-row justify-content-center"
    //   style={{
    //     backgroundImage: "linear-gradient(to right, #e96443, #904e95)",
    //     height: "100vh",
    //     backgroundAttachment: "fixed",
    //   }}>
    <div class="row py-5 px-4" style={{ backgroundImage: "linear-gradient(to right, #e96443, #904e95)", backgroundAttachment:"fixed" , backgroundPosition:"center" , backgroundSize:"cover"}}>
    <div class="col-md-7 mx-auto">
       
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover" style={{backgroundImage:`url("https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80")` , backgroundSize:"cover" , backgroundPosition:"center"}}>
                <div class="media align-items-end profile-head d-flex justify-content-around ">
                    <div class="profile mr-3"><img src={profile.photo} alt="..." width="200" class="rounded mb-2 img-thumbnail" /></div>
                    <div>
                        <h1 style={{color:"white"}} class="mt-0 mb-0">{profile.firstName} {profile.lastName}</h1>
                        <p style={{color:"white"}} class="small mb-4">{profile.email}</p>
                    </div>
                   
                </div>
            </div>
            <div class="px-4 py-3">
                <h5 class="mb-0">Personal Profile</h5>
                <div class="p-4 rounded shadow-sm bg-light">
                    <p class="font-italic mb-0">My name is {profile.firstName} {profile.lastName}</p>
                    <p class="font-italic mb-0">My Email is {profile.email}</p>
                    <p class="font-italic mb-0">This is my account, I hope you like it</p>
                </div>
            </div>
           
            <div class="py-4 px-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">My Trends</h5>
                </div>
                <div class="row">
                {myPost.map(post => (
                    <div class="col col-md-3">
                        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Option"
          menuVariant="dark"
        >
          <Button onClick={removePost} id={post._id } className="dropdown-item" href="#action/3.1">Delete</Button>
          <Button onClick={handleShow}  className="dropdown-item" href="#action/3.1">Edit</Button>
        </NavDropdown>
                    <div class="col-lg-10 "><img src={post.image} alt="" class="img-fluid rounded shadow-sm" /></div>
                  <ModelItem item={post} />
                </div>
                ))}
                </div>
                
            </div>
        </div>
    </div>
</div>
// </div>
  )
}

export default Profile
