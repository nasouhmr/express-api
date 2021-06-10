var express = require("express");
const StoreController = require("../controllers/StoreController");

var router = express.Router();
 
router.get("/", StoreController.getStores);  
router.post("/save", StoreController.saveStore); 

module.exports = router;