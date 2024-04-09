import React from 'react'
const ApplicationItem = ({ company, position, status, dateApplied, notes }) => {
  return (
    <div className="application-item">
      <h3>{company} - {position}</h3>
      <p>Status: {status}</p>
      <p>Date Applied: {dateApplied}</p>
      <p>Notes: {notes}</p>
    </div>
  );
};

export default ApplicationItem;
  