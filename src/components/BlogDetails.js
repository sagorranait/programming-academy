import '../styles/BlogDetails.css';
import { Link, useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaAngleLeft } from "react-icons/fa";
import { getSingleBlogs } from '../helpers/server-api';

function BlogDetails() {
  const {title, author, image_url, details} = useLoaderData();

  return (
    <div className='blog-details'>
      <Container>
         <div className="back-link">
            <FaAngleLeft/>
            <Link to="/blogs">back to blog</Link>
         </div>
         <div className="details">
            <h2>{title}</h2>
            <div className="user-details">
               <div className="user-image">
                  <img src={author.img} alt={author.name} />
               </div>
               <div className="user-info">
                  <h3>{author.name}</h3>
                  <p>{author.published_date}</p>
               </div>
            </div>
            <div className="blog-image">
               <img src={image_url} alt={title} />
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: details }} />
         </div>
      </Container>
    </div>
  )
}

export function blogDetailsLoader({params}){
   return getSingleBlogs(params.id);
}

export default BlogDetails