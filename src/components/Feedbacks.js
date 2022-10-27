import { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { getFeedback } from '../helpers/server-api';
import '../styles/Feedbacks.css';

function Feedbacks() {
   const feedbacks = useLoaderData();
   const [sliderIndex, setSliderIndex] = useState(0);

  const handleSelectSlider = (selectedIndex, e) => {
   setSliderIndex(selectedIndex);
  };

  return (
    <div className='feedback-area'>
      <Container>
         <Row>
            <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
               <div className="content">
                  <h2>Student feedback</h2>
                  <div className="feedbacks">
                  <Carousel variant="dark" activeIndex={sliderIndex} onSelect={handleSelectSlider}>
                     {feedbacks.map(feedback => <Carousel.Item key={feedback.id}>
                        <div className="feedback">
                           <div className="student-img">
                              <img src={feedback.user.img} alt={feedback.user.name} />
                           </div>
                           <h3>{feedback.user.name} {`(Batch ${feedback.user.batch})`}</h3>
                           <p>{feedback.details}</p>
                        </div>
                     </Carousel.Item>)}
                  </Carousel>
                  </div>
               </div>
            </Col>
         </Row>
      </Container>
    </div>
  )
}

export const feedbackLoader = () => {
   return getFeedback();
}

export default Feedbacks