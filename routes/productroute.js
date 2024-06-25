const express = require("express");
const router = express.Router();
const productmodel = require("../models/productmodel.js");
const {
  createproduct,
  getone,
  getall,
  updateproduct,
  deleteproduct,
} = require("../controllers/productcontroller");

// create a product
router.post("/", createproduct);

// get all products
router.get("/", getall);

// get a single product
router.get("/:id", getone);

// update a product
router.put(":/id", updateproduct);

// delete a product
router.delete("/:id", deleteproduct);

module.exports = router;
