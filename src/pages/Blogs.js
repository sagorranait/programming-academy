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
                    description="Cross-source Resource Sharing (CORS) is an HTTP header-based mechanism that allows a server to indicate any origin (domain, scheme, or port) other than the origin from which the browser should allow download resources. CORS also relies on a mechanism by which the browser makes a preemptive request to the server hosting the cross-origin resource, to verify that the server will allow the actual request. In this preamble, the browser sends headers indicating the HTTP method and the headers to be used in the actual request. Cross-origin request example: UI JavaScript from https: //domain-a.com uses XMLHttpRequest to make requests for https://domain-b.com/data.json."
                  />
                  <QuestionAccordion 
                    eventKey="2" 
                    title="How does the private route work?"
                    description="Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home, etc. In a word, the private route component is similar to the public route, the only changes are the redirect URL and the authentication condition. If the user is not authenticated, he will be redirected to the login page and the user will only be able to access authenticated routes if he is authenticated (logged in)."
                  />
                  <QuestionAccordion 
                    eventKey="3" 
                    title="What is Node? How does Node work?"
                    description="Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.<br/> <br/><b>Node.js works:</b> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request."
                  />
                  <QuestionAccordion 
                    eventKey="1" 
                    title="Why are you using firebase? What other options do you've to implement authentication?"
                    description="Because, The Firebase Database lets me build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, real-time events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.<br/><br/>You can use implement authentication like: <li>Email/Password</li><li>Phone Number</li><li>Google</li><li>Facebook</li><li>Twitter</li><li>Github</li><li>And many more.</li>"
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