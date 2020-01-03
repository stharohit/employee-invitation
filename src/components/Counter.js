import React, { useState, useEffect } from 'react';
import '../styles/Counter.css';
import CounterBtn from '../rcomponenets/CounterBtn';

const Counter = param => {
    const [counter, setCount] = useState({ "id": param.id, "count": 0 });

    // handle count change
    const handleChange = (passCount) => {
        setCount({ "id": param.id, "count": passCount });
    }

    useEffect(() => {
        setCount({ "id": param.id, "count": param.count })
        return () => {
            console.log('done');
        };
    }, [param])

    const count = counter.count;

    return (
        <div className='counter'>
            <CounterBtn count={count-1} handleChange={handleChange}/>
            <span>{counter.count}</span>
            <CounterBtn count={count+1} handleChange={handleChange}/>
        </div>
    );
}

export default Counter;
