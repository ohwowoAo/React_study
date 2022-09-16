import React, { useState } from 'react';

const Hidebox = () => {
    const [check, setCheck] = useState(false)
    const handleCheck = () => {
        setCheck(!check)
        console.log(check)
    }

    return (
        <div>
            <input type="checkbox" checked={check} onChange={handleCheck}/>
            {
                check ? '보임' : '숨김'
            }
            {
                check&&
                <div style={{width:200, height:100, backgroundColor: 'red', marginLeft:10}}></div>
            }
            
        </div>
    );
};



export default Hidebox;