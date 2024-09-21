import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');

    const dec = () => setCount((prev) => (--prev));
    const inc = () => setCount((prev) => (++prev))

    /** @type {JSX.IntrinsicElements["input"]["onChange"]} */
    const onInputChange = (evt) => {
        setValue(evt.target.value);
    }

    return (
        <>
            <div>
                <button onClick={dec}>-</button>
                <div>{count}</div>
                <button onClick={inc}>+</button>
            </div>

            <input type="text" value={value} onChange={onInputChange} />
        </>
    );
}

export default State;