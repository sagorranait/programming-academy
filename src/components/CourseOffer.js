import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/CourseOffer.css";

function CourseOffer() {
  return (
    <section className="course-offer">
      <Container>
         <div className="offer-content">
            <p>Up to 70% Off on Every Course.</p>
            <Link to="/courses">Browse Now</Link>
         </div>
      </Container>
    </section>
  )
}

export default CourseOffer