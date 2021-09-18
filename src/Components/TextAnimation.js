import React, { useState } from 'react';
import useInterval from '../Hooks/useInterval';
import styled, { keyframes } from 'styled-components';

function TextAnimation() {
    const mapleArr = 'Maple'.split('');
    const birchArr = 'Birch'.split('');
    const OakArr = 'Oak'.split('');
    const PineArr = 'Pine'.split('');
    const [items, setitems] = useState(mapleArr);
    const [count, setcount] = useState(0);

    useInterval(() => {
        // Animate maple
        setitems(mapleArr);
        setcount(count + 1);

        // Animate birch
        if (count === 1) {
            setcount(2);
            setitems(birchArr);
        }
        // Animate oak
        if (count === 2) {
            setcount(3);
            setitems(OakArr);
        }

        // Animate Pine
        if (count === 3) {
            setcount(0);
            setitems(PineArr);
        }
    }, 6000);

    return (
        <Wrapper>
            {items.map((char, i) => {
                return <h1 key={i}>{char}</h1>;
            })}
        </Wrapper>
    );
}

const textanimation = keyframes`
0% {
opacity: 0;
transform: translateY(-100px) skewY(15deg) skewX(15deg) rotateZ(30deg);
filter: blur(5px)
}
25% {
opacity: 1;
transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
filter: blur(0px)
}
75% {
opacity: 1;
transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
filter: blur(0px)
}
100% {
opacity: 0;
transform: translateY(-100px) skewY(15deg) skewX(15deg) rotateZ(30deg);
filter: blur(5px)
}
`;

const Wrapper = styled.div`
    display: inline-flex;

    h1 {
        color: red;
        font-size: 2.5rem;
        opacity: 0;
        animation-name: ${textanimation};
        animation-duration: 6s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    h1:nth-child(1) {
        animation-delay: 0.1s;
    }
    h1:nth-child(2) {
        animation-delay: 0.2s;
    }
    h1:nth-child(3) {
        animation-delay: 0.3s;
    }
    h1:nth-child(4) {
        animation-delay: 0.4s;
    }
    h1:nth-child(5) {
        animation-delay: 0.5s;
    }
    h1:nth-child(6) {
        animation-delay: 0.4s;
    }
`;

export default TextAnimation;
