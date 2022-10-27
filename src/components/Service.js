import { Col, Container, Row } from 'react-bootstrap';
import '../styles/Service.css';

function Service() {
  return (
    <section className='service-area'>
      <Container>
         <Row>
            <Col sm={12} md={6} lg={4} xl={4} xxl={4}>
               <div className="service">
                  <img src="./images/unlimited-access.png" alt="unlimited-access" />
                  <h3>Unlimited Access</h3>
                  <p>One subscription of our course, you'll get unlimited access.</p>
               </div>
            </Col>
            <Col sm={12} md={6} lg={4} xl={4} xxl={4}>
               <div className="service">
                  <img src="./images/expert-teachers.png" alt="expert-teachers" />
                  <h3>Expert Teachers</h3>
                  <p>Learn from industry experts who are passionate about teaching.</p>
               </div>
            </Col>
            <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
               <div className="service">
                  <img src="./images/learn-anywhere.png" alt="learn-anywhere" />
                  <h3>Learn Anywhere</h3>
                  <p>Switch between your computer, tablet, or mobile device.</p>
               </div>
            </Col>
         </Row>
      </Container>
    </section>
  )
}

export default Service