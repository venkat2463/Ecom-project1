const ProductModel = require('../models/productModel')

//Get products API - api/v1/products
exports.getProducts =async (req,res,next) =>{
    const query = req.query.keyword?{ name :{
   $regex : req.query.keyword,
   $options:'i'
    }}:{}

  const products = await ProductModel.find(query);
res.json({
    sucess:true,
    products

})
}
//Get Singleproducts API - api/v1/product/:id
exports.getSingleProduct = async(req,res,next) =>{
//try and catch is used suppose if no id is found then it show the error msg
    try {
        const product=await ProductModel.findById(req.params.id)
        res.json({
            sucess:true,
            product
        })
    } catch (error) {
        res.json({
            sucess:false,
            message:'unable to get the product id check the id'
        })
        
    }
    //to get a particular product this method is used
console.log(req.params.id,'ID')


   
    }