import  thunk from "redux-thunk"
import { createStore,combineReducers,applyMiddleware } from "redux";
import numReducer from "../reducer/numReducer"
import userReducer from "../reducer/userReducer"
import navReducer from "../reducer/navReducer"

let allReducers= combineReducers({
    numInfo:numReducer,
    userInfo:userReducer,
    navInfo:navReducer
})
const  store = createStore(allReducers,applyMiddleware(thunk));
export default store;