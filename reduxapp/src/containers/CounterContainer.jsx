import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import {Increase, Decrease} from '../redux/actions/counter';


const CounterContainer = () => {
    const number = useSelector((state) => state.number)
    const dispatch = useDispatch()

    const onIncrease = () => {
        dispatch(Increase(1))
    }
    const onDecrease = () => {
        dispatch(Decrease(1))
    }

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
};

export default CounterContainer;