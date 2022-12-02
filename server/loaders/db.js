const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/mevnecommerce`)
    .then((_) => console.log("connection created"))
    .catch((err) => console.log("err is : ", err));
};

module.exports = {
  connectDB,
};
