import Summary from "./Summary";
import Accordion from 'react-bootstrap/Accordion';
import './Summary.css';

function SummaryContainer() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Summary</Accordion.Header>
          <Accordion.Body>
            <Summary />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        );
    }
    
    export default SummaryContainer;