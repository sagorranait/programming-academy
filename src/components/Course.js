import '../styles/Course.css';
import { FaStar } from "react-icons/fa";
import { Badge, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Course({courseInfo}) {
  const {id, title, price, thumbnail_url, author, rating} = courseInfo;
  return (
   <Col sm={12} md={6} lg={4} xl={4} xxl={4}>
      <div className='course'>
         <div className="image">
            <img src={thumbnail_url} alt={title} />
         </div>
         <div className="content">
            <h5><Badge bg="secondary">{rating.badge}</Badge></h5>
            <h3>{title}</h3>
            <p>{author.name} | {author.published_date}</p>
            <h4><span>{rating.number}</span> <FaStar/></h4>
            <div className="price-area">
               <p>$ {price}</p>
               <Link to={`/course/details/${id}`}>Details</Link>
            </div>
         </div>
      </div>
   </Col>
  )
}

export default Course