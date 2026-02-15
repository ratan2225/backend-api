require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./model/products");

const ProductJson = require("./products.json");



const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
         console.error("ERROR DETAILS");
        console.log("error");
    };
};


start();
