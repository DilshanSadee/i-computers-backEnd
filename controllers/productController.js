import Product from "../models/product.js";
import { isAdmin } from "./userController.js";


export function createProduct(req,res){
    

    if(! isAdmin(req)){
        res.status(403).json({
            message : "forbidden"
        })
        return
    }
    const product = new Product(req.body)
    product.save().then(()=>{
        res.json({
            message : " product created succesfull"
        })
    }).catch(
        (error)=>{
            res.status(500).json({
                message : "error creating product",
                error : error.massage
            })
        }
    )
}

export function getAllProduct(req,res){
    if(isAdmin(req)){
        Product.find().then(
            (product)=>{
                res.json(product)
            }
        ).catch(
            (error)=>{
                res.status(500).json({
                    massage : "error fetching products",
                    error : error.massage
                })
            }
            
        )
    }else{
        Product.find({isAvailable : true}).then(
            (product)=>{
                res,json(product)
            }
        ).catch(
            (error)=>{
                res.status(500).json({
                    massage : "error fetching products",
                    error : error.massage
                })
            })
    }
    

}
export function deleteProduct(req,res){
    if (! isAdmin(req)){
    req.status(403).json({
        massage : " only admin can delete the product"
    })
    return
    }

    const productID = req.params.productID

    Product.deleteOne({productID :productID}).then(
        ()=>{
            res.json({
                massage : "product deleted succesfully"
            })
        }

    )
}
export function updateProduct(req,res){
    if(! isAdmin(req)){
        req.status(403).json({
            massage : "admins only can upletthe product"
        })
        return
    }

    const productID = req.params.productID

    Product.updateOne({productID : productID},req.body ).then

   ( ()=>{
        res.json({
            massage : "product updated successfully"
        })
    }
)
}

export function getProductByID(req,res){
    const productID =req.params.productID

    Product.findOne({productID : productID}).then
    ((product)=>{
        if (product == null){
            res.status(404).json({
                massage : "product not fount"
            })
        }else{
            res.json(product)
        }
    }).catch(
        (error)=>
        res.status(403).json({
            massage : " proct fetching error",
            error : error.massage
        })
    )
}