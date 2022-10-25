import { Col, Container, Row } from 'react-bootstrap'
import '../styles/Title.css'

function Title({title, subTitle}) {
  return (
    <section className='page-title'>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="title-content">
                <h2>{title}</h2>
                <p>{subTitle}</p>
            </div>
          </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Title