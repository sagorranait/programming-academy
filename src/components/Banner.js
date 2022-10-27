import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Banner.css'

function Banner() {
  return (
    <section className='banner-area'>
      <Container>
         <Row>
            <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
               <div className="content">
                  <small>With Coding,</small>
                  <h1>developed the creative innovators of tomorrow.</h1>
                  <p>Skills for your present (and your future). Get started with us.</p>
                  <Link to="/courses">Browse Courses</Link>
               </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
               <div className="image">
                  <img src="./images/banner.png" alt="Banner" />
               </div>
            </Col>
         </Row>
      </Container>
    </section>
  )
}

export default Banner