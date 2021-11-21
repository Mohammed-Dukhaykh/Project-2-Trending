import { useContext } from "react";
import {Container, Form , Button, Card} from "react-bootstrap"
import PostsContext from "../Utils/PostsContext";
function Login() {
    const {login} = useContext(PostsContext)
      
    
    return ( 


    
      

      
<>
      
      
      <div class="d-flex justify-content-center" style={{ backgroundImage:`url("https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")` , backgroundAttachment:"fixed" }} >
        <div class="card" style={{width:"500px",height:"500px " , marginBottom:"10px" , marginTop:"20px" , paddingBottom:"1px" , backgroundImage:`url("https://images.pexels.com/photos/5274203/pexels-photo-5274203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")` }} >
       <div >
          
            <h3 style={{textAlign:"center"}} >Sign In</h3>
            <div class="d-flex justify-content-end social_icon" style={{ backgroundColor:"black "}}>
              <span><i class="fab fa-facebook-square"></i></span>
              <span><i class="fab fa-google-plus-square"></i></span>
              <span><i class="fab fa-twitter-square"></i></span>
            
          </div>
          <div class="card-body"   >
            
          <>
     <Form onSubmit={login} className="mt-5"  >
       
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" name="password" />
        </Form.Group>
        <div className="d-flex align-items-center justify-content-center" style={{marginTop:"60px"  }}>
       <Button  type="submit" style={{padding:"10px 30px" , backgroundImage:"none"}} >
          Login
       </Button>
       </div>
    </Form>
      </> 
          </div>
          
        </div>
      </div>
    </div>
    </>
    
    
   );
}

export default Login;