import React from 'react';

const CounterBtn = param => {
    return (
        <button type="button" onClick={() => {
            param.handleChange(param.count);
        }}>-</button>
    );
}

export default CounterBtn;
