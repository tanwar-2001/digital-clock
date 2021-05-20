import React, { useState } from 'react';
import './index.css';

let time = new Date().toLocaleTimeString();


function App() {
  
  const [curtime,cTime] = useState(time);

  function setTime()
  {
    let updateTime = new Date().toLocaleTimeString();
    cTime(updateTime);
  }
  setInterval(setTime,1000);
  return (<h1>{curtime}</h1>);
}

export default App;
