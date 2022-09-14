import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from '../store/slices/counterSlice'

const Counter = () => {
    const count = useSelector ((state) => state.value)
    const dispatch = useDispatch()

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=> dispatch(increment({diff: 2}))}>+1</button>
            <button onClick={()=> dispatch(decrement())}>-1</button>
        </div>
    );
};

export default Counter;