import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import {Link} from "react-router-dom"

function CartScreen(props){

    const cart = useSelector(state=>state.cart);
    const {cartItems} =cart;

    const productId= props.match.params.id;
    //console.log(props.match.params);
    const qty = props.location.search? Number(props.location.search.split("=")[1]) : 1;
    const dispatch =useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, []);
    const checkoutHandler = () =>{
        props.history.push("/signin?redirect=shipping");
    }

    return <div className="cart">
        <div className="cart-list">
            <ul>
                <li key="top"><h3>Shopping Cart</h3>
                <div>Price</div>
                </li>

               
                {
                    cartItems.length === 0?
                    <div>Cart is empty</div>
                    :
                    cartItems.map( item =>
                         <li key={item.id}>
                        <div className="cart-items">
                            <div><img src={item.image} alt="product"></img></div>
                            <div className="cart-item-name">
                                <div>
                                    <Link to={"/products/"+item.product}>{item.name}</Link>
                                    
                                </div>
                                    <div>
                                        Qty:
                                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                            {[...Array(item.stock).keys()].map(x=>
                                            <option key={x+1} value={x+1}>{x+1}</option>
                                            )}
                                        </select>
                                        <button className="removeFromCartButton" type="button" onClick={() => removeFromCartHandler(item.product)}>
                                            Remove from Cart
                                        </button>
                                    </div>
                            </div>
                        </div>
                        <div className="cart-item-price">
                            $ {item.price}
                        </div>
                        </li>)
                }



                
            </ul>

        </div>
        <div className="cart-action">
                <h3>
                    Subtotal ( {cartItems.reduce((a, c) => a+c.qty,0)} items )
                    :
                    $ {cartItems.reduce((a,c) => a+ c.price * c.qty,0)}
                </h3>
                <button onClick={checkoutHandler} className="checkout-button" disabled={cartItems.length===0}>
                    Proceed to Checkout
                </button>
        </div>


    </div>
}

export default CartScreen;