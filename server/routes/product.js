const express = require("express");
const router = express.Router();

//Import Product Controller Class
const ProductControllerClass = require('../controllers/product');

router.get("/", ProductControllerClass.fetchCatalog);
router.get('/:category',ProductControllerClass.fetchCategory)


module.exports = router;
