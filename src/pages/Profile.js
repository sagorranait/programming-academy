import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { StateContext } from '../StateProvider';
import toast from 'react-hot-toast';
import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { student, signOutUser, updateUserProfile } = useContext(StateContext);
  const [logOutting, setLogOutting] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [user, setUser] = useState({ displayName: student?.displayName || '', photoURL: student?.photoURL || '', });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setUser((pre)=>{ return {...pre, [e.target.name] : e.target.value} });
	}

  const logoutHandler = () => {
    setLogOutting(true);

    signOutUser()
    .then(() => {
      setLogOutting(false);
      toast.success('Logout Successfully.');
      navigate('/');
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    });
  }

  const profileUpdateHandler = (e) => {
    e.preventDefault();
    
    setUpdating(true);
    updateUserProfile(user)
    .then(() => {
      setUpdating(false);
      toast.success('Profile Updated Successfully.');
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage?.split('/')[1]?.replace(').', '').split('-').join(' '));
    });
  }

  return (
    <div className='signin-area student-profile'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="signin-inputs profile-input">
              <button className='logout' onClick={logoutHandler}>{logOutting ? 'Logout...' : 'Log Out'}</button>
              <p>You can update you profile information here.</p>
              <form className='user-form user-profile' onSubmit={profileUpdateHandler}>
                <label htmlFor="profileNameInput">Name</label>
                <input type="text" name="displayName" id="profileNameInput" placeholder='Name' value={user?.displayName} onChange={handleChange} />
                <label htmlFor="profileUrlInput">Photo URL</label>
                <input type="url" name="photoURL" id="profileUrlInput" placeholder='Photo URL' value={user?.photoURL} onChange={handleChange} />
                <button type="submit">{updating ? 'Updating...' : 'Updated Profile'}</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile