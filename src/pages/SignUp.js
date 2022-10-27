import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { FaGoogle, FaGithubAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { StateContext } from '../StateProvider';
import '../styles/SignIn.css';
import { GithubProvider, GoogleProvider } from '../firebase.config';

function SignUp() {
  const {setStudent, signUp, updateUserProfile, providerSignin} = useContext(StateContext);
  let navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const agreeHandler = (event) => {
    setDisable(event.target.checked);
  }

  const signUpHandler = (event) => {
    event.preventDefault();
    setSubmitting(true);
    const name = event.target.name.value;
    const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (name.length < 3) {
      toast.error("Name is too short!");
    }

    if (password.length < 5) {
      toast.error("Password is too short!");
    }

    signUp(email, password)
    .then(() => {
      toast.success('Successfully account created.');
      navigate('/signin');
      updateUserProfile({displayName: name, photoURL: photoUrl})
      .then(()=>{
        setSubmitting(false);
      })
      .catch(error => {
        setSubmitting(false);
        const errorMessage = error.message;
        toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
      });
    })
    .catch((error) => {
      setSubmitting(false);
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    });
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
              <p>Please create a new account here</p>
              <form className='user-form' onSubmit={signUpHandler}>
                <input type="text" name="name" id="nameInput" placeholder='Name' />
                <input type="url" name="photoUrl" id="urlInput" placeholder='Photo URL' />
                <input type="email" name="email" id="emailInput" placeholder='Email' required />
                <input type="password" name="password" id="passwordInput" placeholder='Password' required />
                <input type="checkbox" name="agree" id="agree" onClick={agreeHandler} />
                <label htmlFor="agree">I've read the <Link>Terms</Link> & <Link>Condition</Link></label>
                <button type="submit" disabled={!disable}>{submitting ? 'Submitting...' : 'Sign Up'}</button>
              </form>
              <div className="user-platform">
                <h4>or</h4>
                <button onClick={singupWithGoogleHandler}><FaGoogle/> Sing up with Google</button>
                <button onClick={singupWithGithubHandler}><FaGithubAlt/> Sing up with Github</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SignUp