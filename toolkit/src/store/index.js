import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import counterReducer from "./slices/counterSlice";

const logger = createLogger()

const store = configureStore({
    reducer : counterReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})