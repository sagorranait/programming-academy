import '../styles/Courses.css';
import Title from '../components/Title';
import { getCourses } from '../helpers/server-api';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import SidebarCourse from '../components/SidebarCourse';
import Course from '../components/Course';

function Courses() {
  const courses = useLoaderData();

  return (
    <>
      <Title 
        title="Courses" 
        subTitle="Browse all our courses that created only for you."
      />
      <section className='courses-area'>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={8} xl={8} xxl={8}>
              <div className="courses">
                <Row>
                  { courses.map(course => <Course key={course.id} courseInfo={course}/>) }
                </Row>
              </div>
            </Col>
            <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
              <div className="sidebar">
                <h2>All Courses</h2>
                <div className="sidebar-courses">
                  {courses.map(course => <SidebarCourse key={course.id} courseData={course}/>)}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export const coursesLoader = () => {
  return getCourses();
}

export default Courses