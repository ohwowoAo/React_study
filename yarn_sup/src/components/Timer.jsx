import React, { useEffect, useState } from 'react';

const Timer = ({s}) => {
    const [seconds, setSeconds] = useState()
    const [isClicked, setIsClicked] = useState(false)

    const onSecondsChange = (e) => {
        setSeconds(e.target.value)
    }
    // useEffect(()=> {
    //     timeset
    // },[])
    useEffect(()=>{
        if(isClicked){
            const countDown = setTimeout(() => {
                if(seconds > 0){
                    setSeconds(seconds - 1)
                } else if(seconds === 0){
                    clearTimeout(countDown)
                }
                
            }, 1000)
            return () => clearTimeout(countDown)
        }
    },[seconds, isClicked])

    return (
        <div>
            <h1>우리의 타이머</h1>
            <h1>{seconds}</h1>
            <input onChange={onSecondsChange}></input>
            <button onClick={()=>setIsClicked(true)}>시작</button>
            <button onClick={()=>setIsClicked(false)}>중지</button>
            
        </div>
    );
};

export default Timer;