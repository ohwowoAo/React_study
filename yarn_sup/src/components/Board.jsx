import React from 'react';
import {data} from '../constant/data'

const Board = ({category}) => {
    return (
        <div>
            {
                data.filter((element) => element.category === category).map((element) => (
                    <div key={element.id}>
                        <h1>{element.title}</h1>
                        <p>{element.content}</p>
                        <p>{element.category}</p>
                    </div>
                ))
                // (()=>{})가 아니라  (()=>())로 하면 return이랑 똑같음
            }
            {/* <h1>{data.title}</h1>
            <p>{data.content}</p>
            <p>{data.category}</p> */}
        </div>
    );
};

export default Board;