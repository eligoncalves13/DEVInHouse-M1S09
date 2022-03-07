import React from 'react';
import { useState } from 'react';

const Time = () => {
  const [timeState, setTimeState] = useState();
  const [dateState, setDataState] = useState();

  setInterval(() => {
    const date = new Date();
    setTimeState(date.toLocaleTimeString());
    setDataState(date.toLocaleDateString('pt-Br',{dateStyle: 'short'} ));
  }, 1000);

  return (
    <div className='timer_container'>
        <span className='timer'>
          {timeState}  
        </span>
        <span className='date'>
          {dateState}
        </span>
    </div>
  );
}

export default Time;