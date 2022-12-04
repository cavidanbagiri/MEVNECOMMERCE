const Product = require("../models/product");

class ProductServiceClass {
  //fetch All Catalog
  static fetchCatalog = async () => {
    const fetching_products = await Product.find();
    return fetching_products;
  };
  //fetch All Route Categories
  static fetchCategory = async(category,filt_query) => {
    console.log('getch category work');
    filt_query['category'] = category;
    const fetching_products = await Product.find(filt_query);
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
