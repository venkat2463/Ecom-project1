const orderModel = require('../models/orderModels')
const productModel = require('../models/productModel');


//create order - /api/v1/order
exports.createOrder = async(req,res,next)=>{
    //this create() function insert a new data in the collection
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
        //acc=>acculametry value it takes the previous store pana use panuvang)
    //google reduce method and it is used for converting overall array data into a single value
    //Number and enter. tofixed(2) at the end.. is used for decimal point 1.5999999 it reduce it into 1.59 
    const status = 'pending';


    const order = await orderModel.create({cartItems, amount, status})

    // Updating product stock
    cartItems.forEach(async (item)=> {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })

    
    res.json({
        sucess:true,
        order
    })
}

// const orderModel = require('../models/orderModels');
 
// exports.createOrder = async (req,res,next)=>{
//     const cartItems = req.body;
//     const amount = Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
//     const status = 'pending'

//      const order = await orderModel.create({cartItems,amount,status})

//     res.json({
//         success:true,
//         order
//     })
// }
