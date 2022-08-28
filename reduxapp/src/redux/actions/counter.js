import {INCREASE, DECREASE} from '../constants/counter';

export function Increase(diff){
    return {
        type : INCREASE,
        payload : {diff},
    }
}
export function Decrease(diff){
    return {
        type : DECREASE,
        payload : {diff},
    }
}