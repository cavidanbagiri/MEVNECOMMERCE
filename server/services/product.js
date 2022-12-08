const Product = require("../models/product");
const Category = require("../models/categories");

class ProductServiceClass {
  //Get All Categories
  static getAllCategories = async () => {
    let categories = await Category.find();

    return categories;
  };

  //fetch All Catalog
  static fetchCatalog = async () => {
    const fetching_products = await Product.find();
    return fetching_products;
  };
  //fetch All Route Categories
  static fetchCategory = async (category, filt_query) => {
    console.log("getch category work");
    filt_query["category"] = category;
    const fetching_products = await Product.find(filt_query);
    return fetching_products;
  };
  //Fetch One Product
  static fetchOneProduct = async (id) => {
    const product = await Product.findById(id);
    return product;
  };
  //Fetch Data For Home Page Limit=5
  static fetchDataForHome = async () => {
    let all_categories_products = {};
    await this.getAllCategories().then(async (respond) => {
      for await (let i of respond) {
        const some = await Product.find({ category: i.category }).limit(1);
        all_categories_products[`${i.category}`] = [...some];
      }
    });
    return all_categories_products;
  };

  //Insert Documents
  static insertProduct = async (data) => {
    const each_document = await new Product(data);
    return each_document.save();
  };
}

module.exports = ProductServiceClass;
