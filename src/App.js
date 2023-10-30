import React, { useState } from 'react';
import Clock from './components/Clock';
import './App.css';

function App() {
  const [alarmTime, setAlarmTime] = useState(null);

  const handleSetAlarm = (time) => {
    setAlarmTime(time);
  };

  return (
    <div className="App">
      <h1>Alarm Clock</h1>
      <Clock />
      <button type="button" onClick={() => handleSetAlarm('12:00 PM')}>Set Alarm</button>
      <p>
        Alarm Time:
        {alarmTime}
      </p>
    </div>
  );
}

export default App;
