//import e from "express";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
//import data from "../data"

function ProductScreen(props){
    //console.log(props.match.params.id)
    //const product = data.products.find(x=> x._id === props.match.params.id);
    const [qty, setQty] =useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //Do nothing
        };
    }, []);

    const handleAddToCart =() =>{
        props.history.push("/cart/"+props.match.params.id +"?qty="+qty);
    }

    return <div>
        <div className="details-return"><Link to="/">Back to results</Link></div>
        {loading ? <div>Loading...</div>:
        error ? <div>{error}</div>:
        (
            <div className="details"> 
            <img src={product.image} alt="product"></img>
            <div className="details-info">
                <ul>
                    <li><h4>{product.name}</h4></li>
                    <li>{product.rating} Stars ({product.numReviews} Reviews)</li>
                    <li>{product.brand}</li>
                    <li><b>${product.price}</b></li>
                    <li>
                        Description:
                        {product.description}
                    </li>
                </ul>
            </div>
            <div className="details-actions">
                <ul>
                    <li>Price: $ {product.price}</li>
                    <li>InStock: {product.stock > 0? "Yes": "No"}</li>
                    <li>
                        Quanity:
                        <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                            {[...Array(product.stock).keys()].map(x=>
                                <option key={x+1} value={x+1}>{x+1}</option>
                                )}
                        </select>
                    </li>
                    <li>
                        {product.stock > 0? 
                        <button onClick={handleAddToCart} className="add-to-cart-button">
                            Add to Cart
                        </button>
                    :
                    <div>Out of Stock</div>    
                    }
                        
                    </li>
                </ul>
            </div>
        </div >
        )
        }

        </div>
}
export default ProductScreen;