import express from "express"
import { createUser, loginUser } from "../controllers/userController.js"
import { deleteProduct } from "../controllers/productController.js"

const userRouter = express.Router()

userRouter.post("/",createUser)
userRouter.post("/login",loginUser)



export default userRouter