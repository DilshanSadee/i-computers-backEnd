import mongoose, { trusted } from "mongoose"

const productSchema = new mongoose.Schema(
    {
        productID : {
            type : String,
            required : true,
            unique : true
        },
        name : {
            type : String,
            required : true
        },
        altName : {
            type : [String],
            default : []
        },
        discription : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        labledPrice: {
            type : Number ,
            required : true
        },
        images :{
            type : String,
            required : true
        },
        category : {
            type : String,
            required : true
        },
        model : {
            type : String,
            required : true,
            default : "standerd"
        },

        brand : {
            type : String,
            required : true,
            default : "Genaric"
        },
        stock: {
            type : Number,
            required: true,
            default : 0
        },
        isAvailable : {
            type : Boolean,
            default : true
        }
})

const Product= mongoose.model("Product",productSchema)

export default Product