import { Nav, Navbar, Container, NavDropdown, Image , Dropdown } from "react-bootstrap"
import { FaHome } from "react-icons/fa"
import { CgLogIn } from "react-icons/cg"
import { BsArrowBarRight, BsArrowBarUp , BsArrowBarLeft } from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import "../style.css"
import Profile from "../Pages/Profile"

function NavbarItem() {
  const { logout, profile } = useContext(PostsContext)
  return (
    <Navbar className="navtrending123" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Image src="https://pbs.twimg.com/media/FEt7_UHWQAQuKqp?format=png&name=240x240" height="80px" /> */}
        <Navbar.Brand href="#home">Trending</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/" className="nav-link ">
              Home
            </Link>
            <Link to="/tending-posts" className="nav-link ">
              People Trendng
            </Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <Link to="/films" className="dropdown-item">
                Movies
              </Link>
              <Link to="/games" className="dropdown-item">
                Games
              </Link>
              <Link to="/books" className="dropdown-item">
                Books
              </Link>
              <Link to="/football" className="dropdown-item">
                Sports
              </Link>
              <Link to="/music" className="dropdown-item">
                Music
              </Link>
            </NavDropdown>
            {/* </Nav> */}
            {localStorage.postToken ? (
              // <Nav className="me-auto">

              <Link to="/add-post" className="nav-link ">
                Share Your Trending
              </Link>
            ) : // </Nav>
            null}
          </Nav>
          {localStorage.postToken ? (
            <Nav>
              <Link onClick={logout} to="/" className=" nav-link">
               <BsArrowBarLeft /> Logout
              </Link>
              <Link className="nav-link" to="/profile" eventKey={2}>
                <CgProfile /> Profile
              </Link>
              
            </Nav>
          ) : (
            <Nav>
              <Link to="/signup" className=" nav-link">
                <BsArrowBarUp /> Sign up
              </Link>
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
