const queryString = require('query-string');

const fs = require('fs');

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
      const filt_query = req?.query;
      console.log('category : ',typeof category);
      if(category.includes('63')){
        ProductServiceClass.fetchOneProduct(category)
          .then((respond) => {
            res.send(respond);
          })
          .catch((err) => {
            console.log("Product One Item Error : ", err);
          });
      }
      else{
        ProductServiceClass.fetchCategory(category,filt_query)
          .then((respond) => {
            res.send(respond);
          })
          .catch((err) => {
            console.log("Fetcing Category Error Then Catch: ", err);
          });
      }
      // if (
      //   category === "smartphones" ||
      //   category === "laptops" ||
      //   category === "fragrances" ||
      //   category === "skincare" ||
      //   category === "groceries" ||
      //   category === "home-decoration" ||
      //   category === "furniture"
      // ) {
      //   ProductServiceClass.fetchCategory(category,filt_query)
      //     .then((respond) => {
      //       res.send(respond);
      //     })
      //     .catch((err) => {
      //       console.log("Fetcing Category Error Then Catch: ", err);
      //     });
      // } else {
      //   ProductServiceClass.fetchOneProduct(category)
      //     .then((respond) => {
      //       res.send(respond);
      //     })
      //     .catch((err) => {
      //       console.log("Product One Item Error : ", err);
      //     });
      // }
    } catch (err) {
      console.log("Fetcing Category Error : ", err);
    }
  };
  //Insert Data
  static insertData = async (req, res) => {
    console.log('data works --------------------------------------------------------------------------------');
    fs.readFile('./data.json', 'utf8', async(err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const jsondata = JSON.parse(data);
      // console.log('jsondata : ', jsondata.products);
      // console.log(typeof data.json());
      for ( let i of jsondata.products){
        console.log(i);
        await ProductServiceClass.insertProduct(i);
      }
    });
  }

}

module.exports = ProductControllerClass;
