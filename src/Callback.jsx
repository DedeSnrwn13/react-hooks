import { useCallback, useState } from 'react';
import Count from "./Count";
import Theme from "./Theme";

const Callback = () => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');

    console.log('Re-render! [Callback.jsx]');

    // Without useCallback
    // const inc = () => {
    //     setCount((prevCount) => ++prevCount);
    // }
    // const toggleTheme = () => {
    //     setTheme((prevTheme) => (prevTheme == 'light' ? 'dark' : 'light'));
    // }

    // Using useCallback
    const inc = useCallback(() => {
        setCount((prevCount) => ++prevCount);
    }, []);
    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme == 'light' ? 'dark' : 'light'));
    }, []);

    return (
        <div>
            <Count inc={inc} count={count} />
            <Theme toggleTheme={toggleTheme} theme={theme} />
        </div>
    );
}

export default Callback;