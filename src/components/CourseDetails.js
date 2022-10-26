import '../styles/CourseDetails.css';
import { FaAngleLeft, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import { getSingleCourse } from '../helpers/server-api';
import { Badge, Container } from 'react-bootstrap';

function CourseDetails() {
  const {id, title, price, image_url, rating, author, details} = useLoaderData();

  return (
    <div className='course-details'>
      <Container>
         <Link to="/courses"><FaAngleLeft/> <span>back to courses</span></Link>
         <div className="details">
            <div className='header'>
               <div className="title">
                  <h2>{title}</h2>
                  <div className="user-information">
                     <div className="user-image">
                        <img src={author.img} alt={author.name} />
                     </div>
                     <div className="user-info">
                        <h3>{author.name}</h3>
                        <p>{author.published_date}</p>
                     </div>
                  </div>
               </div>
               <button className='bownload-btn'>Download PDF</button>
            </div>
            <div className='image'>
               <img src={image_url} alt={title} />
            </div>
            <div className='price'>
               <h5><Badge bg="secondary">{rating.badge}</Badge></h5>
               <h4><span>{rating.number}</span> <FaStar/></h4>
               <p>$ {price}</p>
               <Link to={`/premium/${id}`}>get premium access</Link>
            </div>
            <div className='content' dangerouslySetInnerHTML={{ __html: details }}/>
         </div>
      </Container>
    </div>
  )
}

export function courseDetailsLoader({params}){
   return getSingleCourse(params.id);
 }

export default CourseDetails