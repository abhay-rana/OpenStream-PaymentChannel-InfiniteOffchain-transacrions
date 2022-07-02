import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import MainReducer from "./reducer";

const reducers = combineReducers({
	login_Store: MainReducer,
});

const middlewares = [applyMiddleware(thunk)];

const enhancer = compose(...middlewares);

const store = createStore(reducers, enhancer);

export default store;
