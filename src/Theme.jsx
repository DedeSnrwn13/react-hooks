import { memo } from 'react';

const Theme = ({ toggleTheme, theme }) => {
    console.log('Re-render! [Theme.jsx]');

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div>Theme : {theme}</div>
        </>
    );
}

export default memo(Theme);
// export default Theme;