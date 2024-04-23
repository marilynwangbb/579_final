import React from 'react';
import { Table } from 'react-bootstrap';
import './DueDateSummary.css';

const DueDateSummary = ({ counts, companies = [] }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Due within 3 Days</th>
                        <th>Due within 5 Days</th>
                        <th>Due within 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{counts.dueIn3Days}</td>
                        <td>{counts.dueIn5Days}</td>
                        <td>{counts.dueIn7Days}</td>
                    </tr>
                </tbody>
            </Table>

            {companies.length > 0 ? (
                companies.map((company, index) => (
                    <p className="urgent-message" key={index}>You have something to submit within 1 day for {company}.</p>
                ))
            ) : (
                <p>No urgent submissions due within 1 day.</p>
            )}
        </div>
    );
};

export default DueDateSummary;
