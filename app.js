require("dotenv").config({ path: ".env" });

const express = require("express");
const app = express();
const connectDB = require("./db/connect");


const product_routs = require("./routes/products");


const PORT = process.env.PORT || 5000;



app.get("/", (req, res) => {
    res.send(" i m Rofiqul");
});


//middleware or to ser routers
app.use("/api/products", product_routs);

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);

        app.listen(PORT, () => {
          console.log(`${PORT} i m conncect`); 
        });
    }catch(error){
        console.log(error);
    }
};

start();