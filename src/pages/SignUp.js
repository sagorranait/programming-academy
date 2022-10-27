import { Col, Container, Row } from 'react-bootstrap'
import { FaGoogle, FaGithubAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';

function SignUp() {
  return (
    <section className='signin-area'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="signin-inputs">
              <p>Please create a new account here</p>
              <form className='user-form'>
                <input type="text" name="name" id="nameInput" placeholder='Name' />
                <input type="url" name="photoUrl" id="urlInput" placeholder='Photo URL' />
                <input type="email" name="email" id="emailInput" placeholder='Email' />
                <input type="password" name="password" id="passwordInput" placeholder='Password' />
                <input type="checkbox" name="agree" id="agree" />
                <label htmlFor="agree">I've read the <Link>Terms</Link> & <Link>Condition</Link></label>
                <button type="submit">Sign Up</button>
              </form>
              <div className="user-platform">
                <h4>or</h4>
                <button><FaGoogle/> Sing up with Google</button>
                <button><FaGithubAlt/> Sing up with Github</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SignUp