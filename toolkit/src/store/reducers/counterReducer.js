import {createAction, createReducer} from "@reduxjs/toolkit";

export const increment = createAction("counter/increment")
export const decrement = createAction("counter/decrement")

const counter = createReducer({value:0}, {
    [increment]:  (state, action) => {state.value = state.value + 1},
    [decrement]:  (state, action) => {state.value = state.value - 1}
})

export default counter