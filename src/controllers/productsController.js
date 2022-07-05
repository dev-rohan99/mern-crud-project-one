const productsModel = require("../models/productsModel");



// C for Create Product
const createProduct = (req, res) => {

    let reqBody = req.body;
    productsModel.create(reqBody, (err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }
    });

}

// R for Read product
const readProduct = (req, res) => {

    productsModel.find((err, data) => {

        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }

    });

}

// R for Read product
const readProductById = (req, res) => {

    let id = req.params.id;
    let query = {_id:id};
    productsModel.find(query, (err, data) => {

        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }

    });

}


// U for Update product
const updateProduct = (req, res) => {

    let id = req.params.id;
    let query = {_id : id};
    productsModel.updateOne(query, req.body, (err, data) => {

        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }

    });

}


// D for Delete product
const deleteProduct = (req, res) => {

    let id = req.params.id;
    let query = {_id : id};
    productsModel.remove(query, (err, data) => {

        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }

    });

}



module.exports = {
    createProduct,
    readProduct,
    readProductById,
    updateProduct,
    deleteProduct
}