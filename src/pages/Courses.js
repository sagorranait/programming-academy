import '../styles/Courses.css'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../components/Title'

function Courses() {
  return (
    <>
      <Title 
        title="Courses" 
        subTitle="Browse All Our Video Tutorials Curated Only for you."
      />
      <section className='courses-area'>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={8} xl={8} xxl={8}>
              <div className="courses">
                {/* <div dangerouslySetInnerHTML={{ __html: htmlTages }} /> */}
              </div>
            </Col>
            <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
              <div className="sidebar">
                <h2>All Courses</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Courses