import { useContext } from "react"
import {Form , Col , Row , Button} from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"
import"../style.css"
function AddPosts() {
    const {addPost , Profile } = useContext(PostsContext)
  return (
    <div  style={{
     
      backgroundImage: "linear-gradient(to right,AntiqueWhite, Bisque)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight:"100vh" ,
      backgroundAttachment:"fixed" ,
      display:"flex"
      
    }} >
    
    <div class="card123">
      <div class="card-image">	
        <h2 class="card-heading">
          Get started <br />
          <small>To the world of trend</small>
        </h2>
      </div>
      <form onSubmit={addPost} class="card-form">
        <div class="input">
          <input type="url" name="image" class="input-field" placeholder="Add a trend photo"  required/>
          <label class="input-label"></label>
        </div>
              <div class="input">
          <input type="text" name="description" class="input-field" placeholder="Add trend Title"  required/>
          <label class="input-label"></label>
        </div>
             
        <div class="action">
          <button type="submit" class="action-button">Add</button>
        </div>
      </form>
     
    </div>
  </div>
  
  )
}

export default AddPosts
