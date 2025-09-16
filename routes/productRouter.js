import express from  "express"
import { createProduct, deleteProduct, getAllProduct, getProductByID, updateProduct } from "../controllers/productController.js"


const productRouter = express.Router()


productRouter.get("/",getAllProduct)
productRouter.get("/:trnding",(req,res)=>{
    res.json({
        massage : "tending product will shown"
    })
})


productRouter.post("/",createProduct)
productRouter.get("/:proudctID", getProductByID)
productRouter.delete("/:productID",deleteProduct)
productRouter.put("/:productID",updateProduct)



export default productRouter