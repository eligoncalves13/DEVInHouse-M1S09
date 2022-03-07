import React from 'react';
import { useState } from 'react';

const Toggle = () => {

    const [textState, setTextState] = useState('Acender');
    const [toggleState, setToggleState] = useState(false);

    const handleToggle = () => {
        if(toggleState === true){
            setTextState('Acender');   
        } else {
            setTextState('Apagar');
        }
        setToggleState(!toggleState);
      }

  return (
      <div className='btn_container'  style={{
        backgroundColor: toggleState ? "#ffee00" : "#000",
      }}>
          <button className='btn_change' onClick={handleToggle}>{textState}</button>
      </div>
  );
}

export default Toggle;