import React, { useEffect } from 'react';
// import { gsap } from 'gsap/gsap-core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function GSAPcomponent(props) {
    const header = React.createRef();
    useEffect(() => {
        gsap.to(header.current, { color: '#ffce00', duration: 2 });
    }, [header]);

    return (
        <>
            <h1 ref={header}>Hello World!</h1>
        </>
    );
}

export default GSAPcomponent;
