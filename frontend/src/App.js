import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <div className="grid-container">
    <header className="header">
        <div className="home">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <a href="index.html">Not Amazon</a>
        </div>
        <div className="header-links">
            <a href="login.html">Login</a>
            <a href="cart.html">Shopping Cart</a>
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
            <ul className="products">
                <li>
                    <div className="product">
                        <img className="product-image" src="/images/p1.jpg" alt="product"></img>
                        <div className="product-name"><a href="product.html">Shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$40.00</div>
                        <div className="product-rating">4.5 Stars (3 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product">
                        <img className="product-image" src="/images/p1.jpg" alt="product"></img>
                        <div className="product-name"><a href="product.html">Shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$40.00</div>
                        <div className="product-rating">4.5 Stars (3 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product">
                        <img className="product-image" src="/images/p1.jpg" alt="product"></img>
                        <div className="product-name"><a href="product.html">Shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$40.00</div>
                        <div className="product-rating">4.5 Stars (3 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product">
                        <img className="product-image" src="/images/p1.jpg" alt="product"></img>
                        <div className="product-name"><a href="product.html">Shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$40.00</div>
                        <div className="product-rating">4.5 Stars (3 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product">
                        <img className="product-image" src="/images/p1.jpg" alt="product"></img>
                        <div className="product-name"><a href="product.html">Shirt</a></div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$40.00</div>
                        <div className="product-rating">4.5 Stars (3 Reviews)</div>
                    </div>
                </li>
            </ul>
        </div>
    </main>
    <footer className="footer">
        All rights reserved.
    </footer>
</div>
  );
}

export default App;
