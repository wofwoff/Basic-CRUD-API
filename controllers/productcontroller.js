const productmodel = require("../models/productmodel.js");

// create a product
const createproduct = async (req, res) => {
  try {
    const product = await productmodel.create(req.body);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all products
const getall = async (req, res) => {
  try {
    const products = await productmodel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a single product
const getone = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productmodel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a product
const updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productmodel.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await productmodel.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a product
const deleteproduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productmodel.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createproduct,
  getall,
  getone,
  updateproduct,
  deleteproduct,
};
