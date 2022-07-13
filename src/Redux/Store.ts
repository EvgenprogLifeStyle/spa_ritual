import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import Market from "./Market";
import Contact from "./Contact";

let reducers = combineReducers({
    data: Market,
    contact: Contact
})

const store = createStore(reducers,
    applyMiddleware(thunk))

export default store