import Summary from "./Summary";
import Accordion from 'react-bootstrap/Accordion';
import './Summary.css';
import DueDateSummary from "./DueSummary";

function SummaryContainer() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Summary</Accordion.Header>
          <Accordion.Body>
            <Summary />

            <DueDateSummary />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        );
    }
    
    export default SummaryContainer;