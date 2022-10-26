import '../styles/FAQ.css';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Title from '../components/Title'
import QuestionAccordion from '../components/QuestionAccordion';

function FAQ() {
  return (
    <>
      <Title 
        title="Frequently Asked Questions" 
        subTitle="Here are some common questions about programming academy."
      />
      <section className='faq-questions'>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
              <div className="questions">
                <Accordion defaultActiveKey="0">
                  <QuestionAccordion 
                    eventKey="0" 
                    title="Will I get Lifetime Access?"
                    description="One of the best things about Programming Academy is that you can login to your account from virtually anywhere, whenever you want, and access your courses easily! We strongly believe that students will benefit from the limitless educational possibilities this feature presents. Once you purchase a course, you'll have access for lifetime."
                  />
                  <QuestionAccordion 
                    eventKey="1" 
                    title="How to Refund a Course Payment?"
                    description="We want you to be satisfied, so all eligible courses purchased on Programming Academy can be refunded within 30 days. For whatever reason, if you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy."
                  />
                  <QuestionAccordion 
                    eventKey="2" 
                    title="How to Download Course Resources?"
                    description="We want you to be satisfied, so all eligible courses purchased on Programming Academy can be refunded within 30 days. For whatever reason, if you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy."
                  />
                  <QuestionAccordion 
                    eventKey="3" 
                    title="How to Download Your Certificate of Completion?"
                    description="When you complete a paid Programming Academy course, you will receive a certificate of completion, which you can share with your friends, relatives, co-workers and potential employers!  This article explains how you can download your certificate, after completing your course on a browser."
                  />
                </Accordion>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
              <div className="faq-image text-center">
                <img src="./images/faq.png" alt="frequently-asked-questions" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default FAQ