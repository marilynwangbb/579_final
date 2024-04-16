import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import StatusCell from './StatusCell';
import TableAutoFill from './TableAutoFill';
import companies from './data/companies';

const InteractiveTable = () => {
  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem('tableRows');
    return savedRows ? JSON.parse(savedRows) : [{ id: 1, company: "", status: "", industry: "", position: "" }];
  });

  const updateRows = (newRows) => {
    setRows(newRows);
    localStorage.setItem('tableRows', JSON.stringify(newRows));
  };

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    updateRows(newRows);
};

  const addRow = () => {
    const newRow = { id: rows.length + 1, company: "", status: "", industry: "", position: "" };
    setRows(prevRows => {
        const updatedRows = [newRow, ...prevRows];
        localStorage.setItem('tableRows', JSON.stringify(updatedRows));
        return updatedRows;
    });
};

  return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Status</th>
              <th>Industry</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>
                <TableAutoFill
                    value={row.company}
                    onChange={(newValue) => handleChange(index, 'company', newValue)}
                  />
                </td>
                <StatusCell
                  index={index}
                  currentStatus={row.status}
                  onStatusChange={(status) => handleChange(index, "status", status)}
                />
                <td>
                  <Form.Control
                    as="select"
                    value={row.industry}
                    onChange={(e) => handleChange(index, "industry", e.target.value)}
                  >
                    <option value="tech">Tech</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                  </Form.Control>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={row.position}
                    onChange={(e) => handleChange(index, "position", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={addRow}>Add Row</Button>
      </div>
  );
};

export default InteractiveTable;
