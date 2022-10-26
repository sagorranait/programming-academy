import { Accordion } from 'react-bootstrap'

function QuestionAccordion({eventKey, title, description}) {
  return (
   <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>{description}</Accordion.Body>
   </Accordion.Item>
  )
}

export default QuestionAccordion