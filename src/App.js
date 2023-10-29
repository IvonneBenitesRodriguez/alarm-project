import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Alarm Clock</h1>
      <div className="clock">
        <div className="time">05.34 AM</div>
      </div>
      <button type="button" className="add-alarm">
        Add alarm
      </button>
      <ul className="alarms">
        <li>
          <div className="alarm-time">
            07:00 AM
          </div>
          <div className="alarm-options">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </div>
        </li>
        <li>
          <div className="alarm-time">08:30 AM</div>
          <div className="alarm-options">
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
