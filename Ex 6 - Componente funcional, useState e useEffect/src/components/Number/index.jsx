import React, { useState } from 'react';

const Number = () => {
    let [number, setNumber] = useState(0);

    const handleLess = () => {
        setNumber(--number)
    }

    const handleMore = () => {
        setNumber(++number)
    }
  
    return (
        <div className='container_number'>
            <div className='container_btn'>
                <button onClick={handleLess}>Menos</button>
                <button onClick={handleMore}>Mais</button>
            </div>
            
            <span>O número atual é {number}</span>
        </div>
    )
}

export default Number;