const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productmodel = require("./models/productmodel.js");
const productroute = require("./routes/productroute.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productroute);

mongoose
  .connect(
    "mongodb+srv://ahmedwafikp:JxjuWTy0MfYVMFca@basics.qstpb9c.mongodb.net/?retryWrites=true&w=majority&appName=Basics"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.get("/", function (req, res) {
  res.send("Hello World");
});
