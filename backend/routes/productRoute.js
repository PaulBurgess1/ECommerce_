import express from 'express';
import Product from "../models/productModel";
import {isAuth, isAdmin} from "../util"
const router = express.Router();

router.get("/", async(req,res)=>{
    const products =await Product.find({});
    res.send(products);
});
router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
  });
router.post("/", isAuth, isAdmin, async(req,res) =>{
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        stock: req.body.stock,
        description: req.body.description,
        rating: req.body.rating,
    });
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send({msg: "New product created",data:newProduct});
    }
    return res.status(500).send({msg:"Error in creating product"});
});
router.put("/:id", isAuth, isAdmin,async(req,res) =>{
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product){
        product.name= req.body.name;
        product.price= req.body.price;
        product.image= req.body.image;
        product.brand= req.body.brand;
        product.category= req.body.category;
        product.stock= req.body.stock;
        product.description= req.body.description;
        const updatedProduct = await product.save();
        if(updatedProduct){
            return res.status(200).send({msg: "Product Updated",data:updatedProduct});
        }
        
    }
    return res.status(500).send({msg:"Error in updating product"});
    
    
});
router.delete("/:id", isAuth, isAdmin, async(req,res) =>{
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if(product){
        await product.remove();
        return res.send({msg: "Product Deleted."});
    }
    return res.send({msg: "Error in Deletion."})
});

router.get("/testprod",async (req, res) =>{
    try {
        const product = new Product({
            name: "Shirt",
            category: "Shirts",
            image: "/images/p1.jpg",
            price:40.00,
            brand:"Nike",
            rating: 3.5,
            numReviews: 3,
            instock: "Yes",
            stock: 5,
            description:"Test"
        });
        const newProd =await product.save();
        res.send(newProd);
    } catch (error) {
        res.send({msg: error.message});
    }
    
});
export default router;