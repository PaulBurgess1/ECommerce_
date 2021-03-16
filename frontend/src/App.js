import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom"
//import logo from './logo.svg';
import './App.css';
//import data from './data.js';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";


function App() {

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
            <Link to="/">Not Amazon</Link>
        </div>
        <div className="header-links">
            <a href="cart.html">Shopping Cart</a>
            <a href="login.html">Login</a>
            
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
            <Route path="/products/:id" component={ProductScreen} />
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
