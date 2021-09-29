// 리덕스의 저장소라고 생각하면 된다.
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dictionary from "./modules/dictionary";
import thunk from "redux-thunk";

const middlewares = [thunk];

const rootReducer = combineReducers({ dictionary });
// 미들웨어 추가!
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
