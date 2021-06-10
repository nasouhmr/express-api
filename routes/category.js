var express = require("express");
const CategoryController = require("../controllers/CategoryController");

var router = express.Router();
 
router.get("/", CategoryController.getCategories); 
router.post("/save", CategoryController.saveCategory); 

module.exports = router;