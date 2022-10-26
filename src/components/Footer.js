import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGithubAlt, FaInstagram, FaBehance } from "react-icons/fa";
import '../styles/Footer.css';

function Footer() {
  return (
    <section className='footer-section'>
      <Container>
         <Row>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="about-area">
                  <Link to='/' className='d-flex align-items-center flex-column justify-content-center text-decoration-none'>
                     <img alt="Programming Academy" src="./images/logo.png" width="35" height="50" className="d-inline-block align-top" />
                     <div className='logo-text text-center'>
                        <h2>Programming Academy</h2>
                        <p>A Family Of Learning</p>
                     </div>
                  </Link>
                  <h4>Programming Academy is an online education platform that delivers video courses, programs and resources.</h4>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="quick-links">
                  <h2>Quick Links</h2>
                  <div className="links">
                     <Link to='/'>Home</Link>
                     <Link to='/courses'>Courses</Link>
                     <Link to='/blogs'>Blog</Link>
                     <Link to='/faq'>FAQ</Link>
                  </div>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="quick-links contact">
                  <h2>Contact Us</h2>
                  <div className="info">
                     <p>(+880) 123 456 7890</p>
                     <p>info@programmingacddemy.com</p>
                     <p>House No: 22/D,  Dhanmondi Old 26,</p>
                     <p>Dhaka, Bangladesh.</p>
                  </div>
               </div>
            </Col>
            <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
               <div className="quick-links social">
                  <h2>Social Links</h2>
                  <div className="icons">
                     <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
                     <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
                     <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithubAlt/></a>
                     <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
                     <a href="https://www.behance.net" target="_blank" rel="noreferrer"><FaBehance/></a>
                  </div>
               </div>
            </Col>
         </Row>
    </Container>
    </section>
  )
}

export default Footer