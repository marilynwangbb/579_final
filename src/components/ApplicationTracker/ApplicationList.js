import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import StatusCell from './StatusCell';

const InteractiveTable = () => {
  const [rows, setRows] = useState([
    { id: 1, company: "", status: "", industry: "", position: "" }
  ]);

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const addRow = () => {
    setRows([{ id: rows.length + 1, company: "", status: "", industry: "", position: "" },...rows]);
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
                  <Form.Control
                    type="text"
                    value={row.company}
                    onChange={(e) => handleChange(index, "company", e.target.value)}
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
