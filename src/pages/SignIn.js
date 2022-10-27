import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGoogle, FaGithubAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../styles/SignIn.css';
import { StateContext } from '../StateProvider';
import { GithubProvider, GoogleProvider } from '../firebase.config';

function SignIn() {
  const {signIn, setLoading, setStudent, providerSignin} = useContext(StateContext);
  const [logging, setLogging] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";  

  const signInHandler = (e) => {
    e.preventDefault();
    setLogging(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
    .then((_) => {
      setLogging(false);
      toast.success('Successfully Login.');
      navigate(from, { replace: true });
    })
    .catch((error) => {
      setLogging(false);
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    })
    .finally(()=>{
      setLoading(false);
    });

    e.target.reset();
  }

  const singupWithGoogleHandler = () => {
    providerSignin(GoogleProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      setStudent(user);
      toast.success('Sign-In Successfully.');
      navigate('/');
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    });
  }

  const singupWithGithubHandler = () => {
    providerSignin(GithubProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      setStudent(user);
      toast.success('Sign-In Successfully.');
      navigate('/');
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    });
  }

  return (
    <section className='signin-area'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="signin-inputs">
              <p>Sign in to your account to continue</p>
              <form className='user-form' onSubmit={signInHandler}>
                <input type="email" name="email" id="emailInput" placeholder='Email' />
                <input type="password" name="password" id="passwordInput" placeholder='Password' />
                <p>Don’t have an account? <Link to='/signup'>Sign Up</Link></p>
                <button type="submit">{logging ? 'Logging...' : 'Sign In'}</button>
              </form>
              <div className="user-platform">
                <h4>or</h4>
                <button onClick={singupWithGoogleHandler}><FaGoogle/> Sing in with Google</button>
                <button onClick={singupWithGithubHandler}><FaGithubAlt/> Sing in with Github</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SignIn