const Product = require("../models/product");

class ProductServiceClass {
  //fetch All Catalog
  static fetchCatalog = async () => {
    const fetching_products = await Product.find();
    return fetching_products;
  };
  //fetch All Route Categories
  static fetchCategory = async(category) => {
    const fetching_products = await Product.find({category:category})
    return fetching_products;
  } 
  //Fetch One Product
  static fetchOneProduct = async (id) => {
    const product = await Product.findById(id);
    return product;
  }
  //Insert Documents
  static insertProduct = async (data) => {
    const each_document = await new Product(data);
    return each_document.save();
  };
}

module.exports = ProductServiceClass;
