import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts, saveProduct,deleteProduct } from "../actions/productActions";
import { signin } from "../actions/userActions"

//import data from "../data"

function ProductsScreen(props) {
    const [modelVisible, setModelVisable] =useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = ProductList;

    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;

    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;
    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave){
            setModelVisable(false);
        }
        dispatch(listProducts());
        return () => {
            //Do nothing
        };
    }, [successSave, successDelete]);
    const openModel = (product)=>{
        setModelVisable(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setCategory(product.category);
        setBrand(product.brand);
        setStock(product.stock);
        setDescription(product.description);
        //set

    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({_id:id,name, price, image, brand, category, stock, description}));
    }
    const deleteHandler =(product) =>{
        dispatch(deleteProduct(product._id));
    }

    return <div className="content content-margined">
    <div className="product-header">
        <h3>Products</h3>
        <button className="button-main" onClick={()=>openModel({})}>Create Product</button>
    </div>
    {modelVisible &&
    <div className="form">
    <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h3>Create a Product</h3>
            </li>
            <li>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{error}</div>}
            </li>
            <li>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="image">Image:</label>
                <input type="text" id='image' name='image' value={image} onChange={(e) => setImage(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="brand">Brand:</label>
                <input type="text" id='brand' name='brand' value={brand} onChange={(e) => setBrand(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="price">Price:</label>
                <input type="number" id='price' name='price' value={price} min="0" onChange={(e) => setPrice(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="category">Category:</label>
                <input type="text" id='category' name='category' value={category} onChange={(e) => setCategory(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="stock">Stock:</label>
                <input type="number" id='stock' name='stock' min="0" value={stock} onChange={(e) => setStock(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="description">Description:</label>
                <textarea id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </li>

            <li>
                <button type="submit" className="button-main">{id?"Update":"Create"}</button>
            </li>
            <li>
                <button type="button" onClick={()=>setModelVisable(false)} className="button-secondary">Back</button>
            </li>


        </ul>
    </form>
</div>
    }

        
        
            <div className="product-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map(product => (
                            <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                                <button className="button-secondary" onClick={()=>openModel(product)}>Edit</button>
                                {" "}
                                <button className="button-secondary" onClick={()=>deleteHandler(product)}>Remove</button>
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>

                </table>
            </div>
        </div>
}
export default ProductsScreen;
