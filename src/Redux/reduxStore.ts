import { applyMiddleware, createStore } from "redux";
import reducerState from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension"








export const store = createStore(
    reducerState, 
    composeWithDevTools(applyMiddleware()))


