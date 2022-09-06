import React, { useEffect, useState } from 'react';

const Loading2 = () => {
    const [load, setLoad] = useState(false);
    const [loc, setLoc] = useState();
    const [subLoc, setSubLoc] = useState([]);

    useEffect(()=> {
        setTimeout(() => setLoad(true), 3000)
    }, [])

    useEffect(()=>{
        if(loc === '서울'){
            setSubLoc(['서초', '강남'])
        }else if(loc === '부산'){
            setSubLoc(['해운대', '수영'])
        }
    },[loc])
    return (
        <div>
            {
                load? 
                    <>
                        <button onClick={()=> setLoc('서울')}>서울</button>
                        <button onClick={()=> setLoc('부산')}>부산</button>
                        <p>현재 지역 : {loc}</p>
                        <p>세부 지역 : {subLoc}</p>
                    </> : <>로딩중</>
            }
        </div>
    );
};

export default Loading2;