var express = require("express");
const ProductController = require("../controllers/ProductController");

var router = express.Router();

router.get("/", ProductController.getProducts); 
router.post("/save", ProductController.saveProducts); 

module.exports = router;