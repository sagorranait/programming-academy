import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
   <Navbar expand="lg" className='p-3'>
      <Container>
         <Link to='/' className='d-flex align-items-center text-decoration-none'>
            <img alt="Programming Academy" src="./images/logo.png" width="35" height="50" className="d-inline-block align-top" />
            <div className='logo-text'>
               <h2>Programming Academy</h2>
               <p>A Family Of Learning</p>
            </div>
         </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink 
               to='/' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
               end
            >
               Home
            </NavLink>
            <NavLink 
               to='/courses' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
            >
               Courses
            </NavLink>
            <NavLink 
               to='/blog' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
            >
               Blog
            </NavLink>
            <NavLink 
               to='/faq' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
            >
               FAQ
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className='nav-user navbar-nav'>
            {/* <Link className='nav-link' to='/signin'>Sign In</Link> */}
            <Link className='nav-link profile' to='/profile'>
               <div className='user-pic'>
                  <img src="https://lh3.googleusercontent.com/ogw/AOh-ky1_914eSu2bhz_LJsS4pMv8I_22G6moWZ7xnUv45A=s32-c-mo" alt="user" />
               </div>
            </Link>
        </div>
      </Container>
   </Navbar>
  )
}

export default Header