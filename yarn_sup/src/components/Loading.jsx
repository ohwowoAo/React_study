import React, { useEffect, useState } from 'react';

const Loading = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [text, setText] = useState([])
    
    useEffect(()=> {
        setTimeout(() => setIsLoaded(true), 3000)
    }, [])

    useEffect(()=> {
        setText(text.concat(['추가']))
    }, [isLoaded])

    return (
        <div>
            {
                isLoaded? <>로딩완료</> : <>로딩중</>
            }
            {text}
        </div>
    );
};

export default Loading;