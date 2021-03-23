import React, { useEffect, useState } from "react";
//import data from '../data';
import{Link} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from "../actions/productActions";

function HomeScreen(props){
    
    //const [products, setProduct] =useState([]);
    const productList = useSelector(state => state.productList);
    const { products, loading, error} = productList;
    const dispatch =useDispatch();
    //React hook
    useEffect(()=>{
        document.title = "Not Amazon - Homepage"
        dispatch(listProducts());
        return () =>{
            //
        };
    },[]);
    //----
    return loading ? <div>Loading...</div>:
    error? <div>{error}</div>:
    
    <ul className="products">
    {
    products.map(product => 
        <li key={product._id}>
        <div className="product">
            <Link to={'/products/'+product._id}><img className="product-image" src={product.image} alt="product"></img></Link>
            <div className="product-name"><Link to={'/products/'+product._id}>{product.name}</Link></div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
        </div>
    </li>)
    }
    
    
</ul>
}
export default HomeScreen; 