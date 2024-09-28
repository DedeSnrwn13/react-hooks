import { memo } from 'react';

const Count = ({ inc, count }) => {
    console.log('Re-render! [Count.jsx]');

    return (
        <>
            <button onClick={inc}>Add Counter</button>
            <div>Count : {count}</div>
        </>
    );
}

export default memo(Count);
// export default Count;