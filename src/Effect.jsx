import { useEffect, useState } from "react";

const Effect = () => {
    const [endpoint, setEndpoint] = useState(null);
    const [school, setSchool] = useState('');
    const [data, setData] = useState({});

    const [theme, setTheme] = useState('light');

    const changeEndpoint =
        /**
        * @param {string} _endpoint 
        */
        (_endpoint) => setEndpoint(_endpoint);


    const toggleTheme = () => setTheme((_theme) => _theme == 'light' ? 'dark' : 'light');

    const getSchoolByName =
        /**
         * @param {string} character
         * @param {RequestInit} options 
         */
        async (name, options) => {
            try {
                const response = await fetch(
                    `https://api-sekolah-indonesia.vercel.app/sekolah/s?sekolah=${name}`,
                    options,
                );

                console.log(response);
                const data = await response.json();

                setData(data['dataSekolah']);
            } catch (error) {
                console.log(error);
            }
        };

    /** @type {JSX.IntrinsicElements["input"]["onChange"]} */
    const onInputChange = (evt) => {
        setSchool(evt.target.value);
    }

    useEffect(() => {
        const controller = new AbortController();

        // // fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        // fetch(`https://api-sekolah-indonesia.vercel.app/sekolah/s?sekolah=${school}`, {
        //     signal: controller.signal
        // })
        //     .then((response) => response.json())
        //     // .then((response) => setData({ [endpoint]: response }))
        //     .then((response) => setData({ [school]: response }))
        //     .catch((err) => console.log(err));

        getSchoolByName(school, {
            signal: controller.signal,
            // mode: 'no-cors',
        });

        console.log('Re-render!');

        return () => controller.abort();
    }, [endpoint, school]);

    return (
        <>
            <div style={{ display: 'flex' }}>
                <button onClick={() => changeEndpoint("users")}>users</button>
                <button onClick={() => changeEndpoint("posts")}>posts</button>
                <button onClick={() => changeEndpoint("photos")}>photos</button>
                <button onClick={toggleTheme}>theme</button>
            </div>
            <div style={{ marginTop: '16px', marginBottom: '16px' }}>
                <input value={school} type="text" onChange={onInputChange} />
            </div>
            {/* <div>{endpoint} {" "} {theme}</div> */}
            <div style={{ whiteSpace: 'pre', textAlign: 'justify' }}>
                {JSON.stringify(data, null, 4)}
            </div>
        </>
    );
}

export default Effect;