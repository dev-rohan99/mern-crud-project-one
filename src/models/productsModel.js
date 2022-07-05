const mongoose = require('mongoose');


const productsDataSchema = mongoose.Schema({

    pName : {
        type : String
    },
    pDesc : {
        type : String
    },
    pCode : {
        type : String
    },
    pImg : {
        type : String
    },
    unitPrice : {
        type : String
    },
    quantity : {
        type : String
    },
    totalPrice : {
        type : String
    },
    createdDate : {
        type : Date,
        default : Date.now()
    }

}, {
    versionKey : false
});


const productsModel = mongoose.model('products', productsDataSchema);

module.exports = productsModel;

