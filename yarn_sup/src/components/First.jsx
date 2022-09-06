import React, { useState } from 'react';

//name, number => props
// const First = ({name, number}) => {
//     return (
//         <div>
//             {name} {number}
//         </div>
//     );
// };

const First = () => {
    const [test, setTest] = useState(0);
    const countUp = () => {
        setTest(test+1)
    }
    const countDown = () => {
        setTest(test-1)
    }

    return (
        <div>
            {test}
            <button onClick={countUp}>카운트업!</button>
            <button onClick={countDown}>카운트다운!</button>
        </div>
    );
};

export default First;