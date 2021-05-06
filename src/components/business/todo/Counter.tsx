import React, {useState} from 'react';

export const Counter: React.FC<any> = props => {
    const [count, setCount] = useState(0);

    const update = () => {
        setCount(count + 1);
    };

    console.log('lalla');

    return (
        <div className="counter">
            <div>{count}</div>
            <div>
                <button onClick={update}>+1</button>
            </div>
        </div>
    );
};
