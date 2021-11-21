import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import {FaHome} from "react-icons/fa"
import {CgLogIn} from "react-icons/cg"
import {BsArrowBarRight , BsArrowBarUp} from "react-icons/bs"
import { Link } from "react-router-dom"
import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"

function NavbarItem() {
  const {logout} = useContext(PostsContext)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Trending</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link to="/" className="nav-link " >Home</Link>
           <Link to="/tending-posts" className="nav-link " >People Trendng</Link>
            <NavDropdown title="Category"  id="collasible-nav-dropdown">
              <Link to="/films" className="dropdown-item">Movies</Link>
              <Link to="/games" className="dropdown-item">Games</Link>
              <Link to="/books" className="dropdown-item">Books</Link>
              <Link to="/football" className="dropdown-item">Sports</Link>
              <Link to="/music" className="dropdown-item">Music</Link>
            </NavDropdown>
          </Nav>
          {localStorage.postToken ? (
            <Nav className="me-auto">
            <Link to="/add-post" className="nav-link " >Share Your Trending</Link>
            </Nav>
          ) : null}
          {localStorage.postToken ? (
            <Nav>
            <Link onClick={logout} to="/" className=" nav-link"><BsArrowBarUp /> Logout</Link>
            <Link className="nav-link" to="/profile" eventKey={2}>
              <BsArrowBarRight /> Profile
            </Link>
          </Nav>
          ) : (
            <Nav>
            <Link to="/signup" className=" nav-link"><BsArrowBarUp /> Sign up</Link>
            <Link className="nav-link" to="/login" eventKey={2}>
              <BsArrowBarRight /> Login
            </Link>
          </Nav>
          )}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  
}

export default NavbarItem
