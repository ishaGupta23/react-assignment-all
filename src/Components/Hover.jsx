import React, { useState } from 'react';

function Hover() {
  const [logData, setLogData] = useState([]);

  function handleMouseOver() {
    const dateTime = new Date().toLocaleString();
    setLogData(prevData => [...prevData, {time: dateTime, eventName: "in"}]);
  }

  function handleMouseOut() {
    const dateTime = new Date().toLocaleString();
    setLogData(prevData => [...prevData, {time: dateTime, eventName: "out"}]);
  }

  function renderLogTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {logData.map((log, index) => (
            <tr key={index}>
              <td>{log.time}</td>
              <td>{log.eventName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Mouse Event Log</h1>
      <h2>Hover over the above heading to log the events</h2>
      <div>{renderLogTable()}</div>
    </div>
  );
}

export default Hover;
