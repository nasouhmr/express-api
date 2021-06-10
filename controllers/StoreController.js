const models = require('../models');
const Store = models.Store;
const apiResponse = require("../helpers/apiResponse"); 


const getStores = async (req, res) => { 
    const stores = await Store.findAll();
    return apiResponse.successResponseWithData(res, "Operation success", stores); 
}

const saveStore = async (req, res) => {
    const data = req.body;
    await Store.create(
        data
    );
    return apiResponse.successResponseWithData(res, "Operation success", Store); 
}

module.exports = {
    getStores,
    saveStore
}