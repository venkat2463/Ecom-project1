const express = require('express')
const app = express();
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
dotenv.config({path:path.join(__dirname,'config','config.env')})
const connectDatabase = require('./config/connectDatabase')

const products = require('./routes/product')
const orders = require('./routes/order')

connectDatabase();

app.use(express.json())
//its a middleware method req la iruka json data body la send panirum
app.use(cors());
app.use('/api/v1/',products)
app.use('/api/v1/',orders)

app.listen(process.env.PORT,()=>{
    //process is use to just pass the value
    console.log(`server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})