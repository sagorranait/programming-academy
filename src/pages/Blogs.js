import '../styles/Blogs.css'
import Title from '../components/Title'
import { getBlogs } from '../helpers/server-api'
import { useLoaderData } from 'react-router-dom'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import QuestionAccordion from '../components/QuestionAccordion'
import Blog from '../components/Blog'

function Blogs() {
  const blogs = useLoaderData();

  return (
    <>
      <Title 
        title="Blogs" 
        subTitle="Be informed! Never miss a single post."
      />
      <section className='blogs-area'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="blogs">
              <Row>
                {blogs.map(blog => <Blog key={blog.id} blogData={blog} />)}
              </Row>
            </div>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="blogs">
              <h3>Blogs Questions</h3>
              <div className="questions">
                <Accordion defaultActiveKey="0">
                  <QuestionAccordion 
                    eventKey="0" 
                    title="what is cors?"
                    description="One of the best things about Programming Academy is that you can login to your account from virtually anywhere, whenever you want, and access your courses easily! We strongly believe that students will benefit from the limitless educational possibilities this feature presents. Once you purchase a course, you'll have access for lifetime."
                  />
                  <QuestionAccordion 
                    eventKey="2" 
                    title="How does the private route work?"
                    description="We want you to be satisfied, so all eligible courses purchased on Programming Academy can be refunded within 30 days. For whatever reason, if you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy."
                  />
                  <QuestionAccordion 
                    eventKey="3" 
                    title="What is Node? How does Node work?"
                    description="When you complete a paid Programming Academy course, you will receive a certificate of completion, which you can share with your friends, relatives, co-workers and potential employers!  This article explains how you can download your certificate, after completing your course on a browser."
                  />
                  <QuestionAccordion 
                    eventKey="1" 
                    title="Why are you using firebase? What other options do you've to implement authentication?"
                    description="We want you to be satisfied, so all eligible courses purchased on Programming Academy can be refunded within 30 days. For whatever reason, if you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy."
                  />
                </Accordion>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}

export const blogsLoader = () => {
  return getBlogs();
}

export default Blogs