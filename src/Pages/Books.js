import { useContext } from "react"
import { Card, CardGroup, Col, Row,Image } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import PostsContext from "../Utils/PostsContext"
function Books() {
  const { books } = useContext(PostsContext)
  return (
    <div>
      {books?.map(book => (
          <>
         
           
              <div className=" p-5 " style={{backgroundColor:"#A9A9A9" ,  backgroundImage:`url("https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")` }}>
       <h1 style={{color:"white" , fontWeight:"bolder" , fontSize:"50px" , letterSpacing:"2px" }}  className="d-flex align-items-center justify-content-center" >{book.name}</h1>
       </div>
      
        {book.preview.map(prev=>(
          <div style={{backgroundColor:"#DCDCDC" , height:"200px " , width:"400px"}} className="d-inline-flex justify-content-center  m-5" > 
           
          
           
             <Card.Img className="img-fluid rounded-start" variant="top" src={prev.imageURL}  height="100px" />
             
             
             
             <Card.Body >
               <Card.Title >{prev.title}</Card.Title>
              
             </Card.Body>
            
          
         
         </div>
        ))}
       
</>

      ))}
    </div>
  )
}

export default Books
