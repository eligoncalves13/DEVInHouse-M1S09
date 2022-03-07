import React from 'react';
import { useState } from 'react';

function Time() {
  const date = new Date();
  const [time, setTime] = useState({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
  });

  setInterval(() => {
    const date = new Date();
    setTime({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    });
  }, 1000);
 
  return (
    <div className='timer_container'>
        <span className='timer'>
            {time.hours}:{time.minutes}:{time.seconds}
        </span>
    </div>
  );
}

export default Time;