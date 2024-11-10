import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRouter from './Routes/User.Router.js'
import productRouter from './Routes/Product.Router.js'
import cors from 'cors'
const app = express()
app.use(express.json())
dotenv.config()
app.use(cors(
    { 
       origin: true,
      methods:["GET", "POST", "PUT", "DELETE"],
      credentials: true
  }
  ));

const port = process.env.PORT || 4002
const URI = process.env.MONGODB_URI
app.get('/', (req, res) => {
  res.send('Hello World!')
})

try {
    mongoose.connect(URI,{
        dbName: "login_and_signup"
    },
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    console.log("Mongoose Connected");
    
} catch (error) {
    res.send({message : error.message})
}

// user routes 
app.use('/api', userRouter)
// Product Router
app.use('/api/products', productRouter)
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})


