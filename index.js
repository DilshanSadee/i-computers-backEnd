import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js"
import productRouter from "./routes/productRouter.js"
import jwt from "jsonwebtoken"

const mongoURI = "mongodb+srv://personalproject:ssgamage@cluster0.mj40h8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"


mongoose.connect(mongoURI).then(
    ()=>{
        console.log("Connected to MongoDB Cluster")
    }
)


const app = express()


app.use(express.json())

 app.use((req,res,next)=>{


     const authorizationHeader = req.header("Authorization")
   
    if (authorizationHeader != null) {
        const token = authorizationHeader.replace("Bearer ", "")



        jwt.verify(token, "secretkey96$2025",
            (error, content)=>{
                
                if (content == null){
                        console.log("invalid token")
                        res.json({
                            massage : "invalid token"
                        })
                        
                }else{
                    //console.log(content)
                    req.user = content
                    next()
                }
                
            }
        )
        
    }else{
        next()
    }
 }
)


app.use("/users",userRouter)
app.use("/product",productRouter)

app.listen(3000 , +
    ()=>{
        console.log("server is running")
    }
)