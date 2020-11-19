const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to DB");
})
.catch(err=>{
    console.log(err);
})

const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:20
    },
    price: {
        type: Number,
        required:true,
        min: [0,'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default:false
    },
    categories: [String],
    qty: {
        online: {
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
     size: {
         type: String,
         enum: ['S', 'M', 'L']
     }
})

productSchema.methods.greet=()=>{
    console.log("Hello");
}

const Product=mongoose.model('Product',productSchema); 
const findProduct= async ()=>{
    const foundProduct=await Product.findOne({name: 'bike bag'});
    foundProduct.greet();
}

findProduct();

const bike = new Product({name: 'Bikemineninenenene', price: 599, onSale:true}); 
bike.save()
.then(data=>{
    console.log('It worked');
    console.log(data);
})
.catch(err=>{
    console.log('Oh no error');
    console.log(err);
})