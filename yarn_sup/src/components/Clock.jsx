import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const Clock = () => {
    const [time, setTime] = useState(moment().tz('US/Pacific').format('YYYY-MM-DD HH:mm:ss'))
    // 외국시간

    //시간흐르게
    useEffect (() => {
        setTimeout(()=> setTime(moment().tz('US/Pacific').format('YYYY-MM-DD HH:mm:ss')),1000)
    },[time])

    const toSeoul = () => {
        setTime(moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'))
    }

    //인자 TZ로 받아서 한번에 다양한 시각 표현하는 방법
    const changeTZ = (TZ) => {
        setTime(moment().tz(TZ).format('YYYY-MM-DD HH:mm:ss'))
    }
    
    return (
        <div>
            {time}
            <button onClick={toSeoul}>서울시간으로 바꾸기</button>
            <button onClick={() => changeTZ('Asia/Taipei')}> 대만으로 바꾸기</button>
        </div>
    );
};

export default Clock;