import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";
import Cookie from "js-cookie";
import { userSigninReducer, userRegisterReducer } from "./reducers/userReducers";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initalState ={cart: {cartItems}, userSignin:{userInfo}};
const reducer =combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productDelete: productDeleteReducer,
    productSave: productSaveReducer,
    
})
const composeEnhancer = compose; //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 
const store = createStore(reducer, initalState, composeEnhancer(applyMiddleware(thunk)));

export default store;