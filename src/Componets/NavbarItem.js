import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import {FaHome} from "react-icons/fa"
import {CgLogIn} from "react-icons/cg"
import { Link } from "react-router-dom"
function NavbarItem() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Trending</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link to="/" className="nav-link " > <FaHome/></Link>
            
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/signup" className="nav-link">Sign up</Link>
            <Link className="nav-link" to="/login" eventKey={2}>
              <CgLogIn /> Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  
}

export default NavbarItem
