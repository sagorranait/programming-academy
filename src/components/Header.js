import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import ThemeToggle from './ThemeToggle';
import { StateContext } from '../StateProvider';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Header() {
  const {student} = useContext(StateContext);

  console.log(student)

  const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
         {student?.displayName}
      </Tooltip>
   );


  return (
   <Navbar expand="lg">
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
               to='/blogs' 
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
        <ThemeToggle/>
        <div className='nav-user navbar-nav'>
            {
               student?.email || student?.displayName ? 
               <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
               >
                  <Link className='nav-link profile' to='/profile'>
                     <div className='user-pic'>
                        {student?.photoURL ? <img src={student?.photoURL} alt="user" /> : `${student?.displayName[0]}`}
                        {/* <img src={student?.photoURL} alt="user" /> */}
                     </div>
                  </Link>
               </OverlayTrigger>
               : <Link className='nav-link' to='/signin'>Sign In</Link>
            }
        </div>
        </Navbar.Collapse>
      </Container>
   </Navbar>
  )
}

export default Header