const queryString = require('query-string');

const ProductServiceClass = require("../services/product");

class ProductControllerClass {
  //Fetch All Data
  static fetchCatalog = async (req, res) => {
    try {
      ProductServiceClass.fetchCatalog()
        .then((respond) => {
          res.json({ data: respond });
        })
        .catch((err) => {
          console.log("error Happen inside of then catch method ", err);
          res.json({ err: err });
        });
    } catch (err) {
      console.log("Fetching Product Data Error : ", err);
    }
  };
  //Fetch All Selecting Route Category
  static fetchCategory = async (req, res) => {
    try {
      const category = req.params?.category;
      const query = req.query;
      console.log('brand : ',query);
      if (
        category === "smartphones" ||
        category === "laptops" ||
        category === "fragrances" ||
        category === "skincare" ||
        category === "groceries" ||
        category === "home-decoration"
      ) {
        ProductServiceClass.fetchCategory(category)
          .then((respond) => {
            // res.json({ category: respond });
            res.send(respond);
          })
          .catch((err) => {
            console.log("Fetcing Category Error Then Catch: ", err);
          });
      } else {
        ProductServiceClass.fetchOneProduct(category)
          .then((respond) => {
            res.send(respond);
          })
          .catch((err) => {
            console.log("Product One Item Error : ", err);
          });
      }
    } catch (err) {
      console.log("Fetcing Category Error : ", err);
    }
  };
}

module.exports = ProductControllerClass;
