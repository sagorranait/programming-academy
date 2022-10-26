import '../styles/PremiumAccess.css';
import { Container } from 'react-bootstrap';
import { getSingleCourse } from '../helpers/server-api';
import { Link, useLoaderData } from 'react-router-dom';

function PremiumAccess() {
  const {title, price} = useLoaderData();
  return (
    <div className='premium-access'>
      <Container>
         <div className='access-content'>
            <h2>Congratulation</h2>
            <p>You have purchased :</p>
            <h3>{title}</h3>
            <p>Course Cost : </p>
            <h3>$ {price}</h3>
            <Link to="/courses">get more courses</Link>
         </div>
      </Container>
    </div>
  )
}

export function premiumAccessLoader({params}){
   return getSingleCourse(params.id);
}

export default PremiumAccess