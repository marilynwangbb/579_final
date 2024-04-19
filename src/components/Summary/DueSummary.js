import React, { useState} from 'react';
import { Table } from 'react-bootstrap';

const DueDateSummary = () => {
    const [counts, setCounts] = useState({ dueIn3Days: 0, dueIn5Days: 0, dueIn7Days: 0 });


    const updateCounts = () => {
        const savedRows = JSON.parse(localStorage.getItem('tableRows') || '[]');
        const now = new Date();
        let dueIn3Days = 0;
        let dueIn5Days = 0;
        let dueIn7Days = 0;

        savedRows.forEach(row => {
            const dueDate = new Date(row.dueDate);
            const daysUntilDue = Math.ceil((dueDate - now) / (1000 * 3600 * 24));

            if (daysUntilDue <= 3) {
                dueIn3Days++;
            }
            if (daysUntilDue <= 5) {
                dueIn5Days++;
            }
            if (daysUntilDue <= 7) {
                dueIn7Days++;
            }
        });

        const newCounts = { dueIn3Days, dueIn5Days, dueIn7Days };
        setCounts(newCounts);
        localStorage.setItem('dueDateCounts', JSON.stringify(newCounts));
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Due in 3 Days</th>
                    <th>Due in 5 Days</th>
                    <th>Due in 7 Days</th>
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
    );
};

export default DueDateSummary;
