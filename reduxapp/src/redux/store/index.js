import { applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import counter from "../reducers/counter";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(counter, composeEnhancers(applyMiddleware(logger)))

export default store