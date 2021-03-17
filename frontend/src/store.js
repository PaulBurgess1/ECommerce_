import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { productDetailsReducer, productListReducer} from "./reducers/productReducers";

const initalState ={};
const reducer =combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})
const composeEnhancer = compose; //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 
const store = createStore(reducer, initalState, composeEnhancer(applyMiddleware(thunk)));

export default store;