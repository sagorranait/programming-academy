import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { StateContext } from '../StateProvider';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import '../styles/Header.css';

function Header() {
  const {student} = useContext(StateContext);
  const [expanded, setExpanded] = useState(false);

  const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
         {student?.displayName}
      </Tooltip>
   );


  return (
   <Navbar expanded={expanded} expand="lg">
      <Container>
         <Link to='/' className='d-flex align-items-center text-decoration-none'>
            <img alt="Programming Academy" src="./images/logo.png" width="35" height="50" className="d-inline-block align-top" />
            <div className='logo-text'>
               <h2>Programming Academy</h2>
               <p>A Family Of Learning</p>
            </div>
         </Link>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav"><FaBars/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink 
               to='/' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
               onClick={() => setExpanded(false)} 
               end
            >
               Home
            </NavLink>
            <NavLink 
               to='/courses' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
               onClick={() => setExpanded(false)} 
            >
               Courses
            </NavLink>
            <NavLink 
               to='/blogs' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
               onClick={() => setExpanded(false)} 
            >
               Blog
            </NavLink>
            <NavLink 
               to='/faq' 
               className={`nav-link ${({ isActive }) => isActive ? "active" : ""}` }
               onClick={() => setExpanded(false)} 
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
                  <Link className='nav-link profile' onClick={() => setExpanded(false)} to='/profile'>
                     <div className='user-pic'>
                        <img src={student?.photoURL} alt="user" />
                     </div>
                  </Link>
               </OverlayTrigger>
               : <Link onClick={() => setExpanded(false)} className='nav-link' to='/signin'>Sign In</Link>
            }
        </div>
        </Navbar.Collapse>
      </Container>
   </Navbar>
  )
}

export default Header