const models = require('../models');
const Category = models.Category;
const apiResponse = require("../helpers/apiResponse");


const getCategories = async (req, res) => { 
    const categories = await Category.findAll({
        where: {
            store_id: req.query.store_id
        } 
    });
    return apiResponse.successResponseWithData(res, "Operation success", categories);
}

const saveCategory = async (req, res) => {
    const data = req.body;
    await Category.create(
        data
    );
    return apiResponse.successResponseWithData(res, "Operation success", Category);
}

module.exports = {
    getCategories,
    saveCategory
}