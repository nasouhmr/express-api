const models = require('../models');
const Product = models.Product;
const apiResponse = require("../helpers/apiResponse");


const getProducts = async (req, res) => {
    const product = await Product.findAll({
        where: {
            category_id: req.query.category_id 
        }
    });
    return apiResponse.successResponseWithData(res, "Operation success", product);
}

const saveProducts = async (req, res) => {
    const data = req.body;
    await Product.create(
        data
    );
    return apiResponse.successResponseWithData(res, "Operation success", Product);
}

module.exports = {
    getProducts,
    saveProducts
}