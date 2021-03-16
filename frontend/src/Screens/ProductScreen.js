import React from "react";
import { Link } from "react-router-dom";
import data from "../data"

function ProductScreen(props){
    //console.log(props.match.params.id)
    const product = data.products.find(x=> x._id === props.match.params.id);
    return <div>
        <div className="details-return"><Link to="/">Back to results</Link></div>
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
                    <li>InStock: {product.instock}</li>
                    <li>
                        Quanity:
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </li>
                    <li>
                        <button className="add-to-cart-button">
                            Add to Cart
                        </button>
                    </li>
                </ul>
            </div>
        </div >
        </div>
}
export default ProductScreen;