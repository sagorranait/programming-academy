import '../styles/SidebarCourse.css';
import { Link } from 'react-router-dom';

function SidebarCourse({courseData}) {
  const {id, title} = courseData;
  return (
    <Link to={`/course/details/${id}`} className='course'>{title}</Link>
  )
}

export default SidebarCourse