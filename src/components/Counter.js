import React, { useState } from 'react';
import '../styles/Counter.css';

const Counter = param => {
    const [counter, setCount] = useState({ "id": param.id, "count": 0 });

    // handle count change
    const handleChange = (passCount) => {
        setCount({ "id": param.id, "count": passCount });
        param.addInvitation({ "id": param.id, "count": passCount });
    }

    return (
        <div className='counter'>
            <button type="button" onClick={() => {
                const newCount = (counter.count - 1 >= 0) ? counter.count - 1 : 0;
                handleChange(newCount);
            }}>-</button>

            <span>{counter.count}</span>

            <button type="button" onClick={() => {
                const newCount = counter.count + 1;
                handleChange(newCount);
            }}>+</button>
        </div>
    );
}

export default Counter;
