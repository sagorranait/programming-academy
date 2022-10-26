import '../styles/Blog.css'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Blog({blogData}) {
   const {id, author, thumbnail_url, title} = blogData;
  return (
   <Col sm={12} md={6} lg={3} xl={3} xxl={3}>
      <div className='blog'>
         <div className="image">
            {thumbnail_url ? <img src={thumbnail_url} alt={title} /> : <p>Image is comming...</p>}            
         </div>
         <div className="content">
            <h3>{title}</h3>
            <p>{author.name} | {author.published_date}</p>
            <Link to={`/blog/details/${id}`}>Read More</Link>
         </div>
      </div>
   </Col>
  )
}

export default Blog