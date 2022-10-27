import { Col, Container, Row } from 'react-bootstrap';
import { FaGoogle, FaGithubAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';

function SignIn() {
  return (
    <section className='signin-area'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="signin-inputs">
              <p>Sign in to your account to continue</p>
              <form className='user-form'>
                <input type="email" name="email" id="emailInput" placeholder='Email' />
                <input type="password" name="password" id="passwordInput" placeholder='Password' />
                <p>Don’t have an account? <Link to='/signup'>Sign Up</Link></p>
                <button type="submit">Sign In</button>
              </form>
              <div className="user-platform">
                <h4>or</h4>
                <button><FaGoogle/> Sing in with Google</button>
                <button><FaGithubAlt/> Sing in with Github</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SignIn