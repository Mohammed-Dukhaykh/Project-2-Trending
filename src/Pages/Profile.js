import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Col, Row, Image, Container, Card, NavDropdown } from "react-bootstrap"
import Button from "@restart/ui/esm/Button"
import ModelItem from "../Componets/ModelItem"
import { AiOutlineComment } from "react-icons/ai"
import "../style.css"

function Profile() {
  const { trndingPost, profile, handleShow, removePost } = useContext(PostsContext)
  if (!profile) {
    return <h1>Loading...</h1>
  }
  const myPost = trndingPost.filter(post => post._user._id === profile._id)
  return (
    <div id="profilepage12" class="row py-5 px-4">
      <div class="col-md-7 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover" id="profiledetails">
            <div class="personalprofile" >
              <div class="profile mr-3">
                <img src={profile.photo} alt="..." width="200" class="rounded mb-2 img-thumbnail" />
              </div>
              <div>
                <h1 class="profilenames12">
                  {profile.firstName} {profile.lastName}
                </h1>
                <p style={{ color: "white" }} class="small mb-4">
                  {profile.email}
                </p>
              </div>
            </div>
          </div>
          <div class="px-4 py-3">
            <h5 class="mb-0">Personal Profile</h5>
            <div class="p-4 rounded shadow-sm bg-light">
              <p class="font-italic mb-0">
                My name is {profile.firstName} {profile.lastName}
              </p>
              <p class="font-italic mb-0">My Email is {profile.email}</p>
              <p class="font-italic mb-0">This is my account, I hope you like it</p>
            </div>
          </div>

          <div class="py-4 px-4">
            <div class="profileposts" >
              <h5 class="mb-0">My Posts</h5>
            </div>
            <div class="row">
              {myPost.map(post => (
                <div class="col col-md-4">
                  <NavDropdown id="nav-dropdown-dark-example" title="Option" menuVariant="dark">
                    <Button onClick={removePost} id={post._id} className="dropdown-item" href="#action/3.1">
                      Delete
                    </Button>
                    <Button onClick={handleShow} className="dropdown-item" href="#action/3.1">
                      Edit
                    </Button>
                  </NavDropdown>
                  <div class="col-lg-15 ">
                    <img src={post.image} alt="" class="img-fluid rounded shadow-sm" />
                    <h6>
                      {" "}
                      <AiOutlineComment /> {post.title}
                    </h6>
                  </div>
                  <ModelItem item={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
