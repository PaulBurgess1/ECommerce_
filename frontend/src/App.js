import React from "react";
import { useSelector } from "react-redux";
import {BrowserRouter, Link, Route} from "react-router-dom"
//import logo from './logo.svg';
import './App.css';
import CartScreen from "./screens/CartScreen";
//import data from './data.js';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen"


function App() {
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;
    //console.log(userInfo);
    const cart = useSelector(state=>state.cart);
    const {cartItems} =cart;
    const cartSize =cartItems.reduce((a, c) => a+c.qty,0);
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
      <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="home">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">Not Amazon <div className="logo">&#9091;</div></Link>
        </div>
        <div className="header-links">

            <Link to="/cart">
                {cartSize>0 && <div className="cartSizeIndicator">{cartSize}</div>}
                &#128722;Shopping Cart
                </Link>
            {
                userInfo && userInfo.name ? <Link to="/">Hello, {userInfo.name}</Link>
                :
                <Link to="/signin">Login</Link>
            }
            
            
        </div>
    </header>
    <aside className="sidebar">
        <h3>Product Categories</h3>
        <button onClick={closeMenu}>x</button>
        <ul>
            <li><a href="index.html">Shirts</a></li>
            <li><a href="index.html">Pants</a></li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
            <Route path="/signin" component={SigninScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/" exact={true} component={HomeScreen} />
                    
        </div>
    </main>
    <footer className="footer">
        All rights reserved.
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
