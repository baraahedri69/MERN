const ProductSchema = require("../models/product.model");

//? Read All

module.exports.FindAllProduct = (req, res) => {
  // db.product.find()
  ProductSchema.find({})
    .then((AllProducts) => {
      console.log(AllProducts);
      res.json(AllProducts);
    })
    .catch((err) => {
      res.json({ message: "Wait a minute 🙄🙄" });
    });
};

//? Create

module.exports.CreateNewProduct = (req, res) => {
  // db.product.insertOne({})
  console.log(req.body);
  ProductSchema.create(req.body)
    .then((CreateProduct) => {
      console.log(CreateProduct);
      res.json({ newProduct: CreateProduct });
    })
    .catch((err) => {
      res.json({ message: "Wait a minute 🙄🙄", err });
    });
};

// Find one single Product

module.exports.FindOneSingleProduct = (req, res) => {
  ProductSchema.findOne({ _id: req.params.productId })
    .then((oneSingleProduct) => {
      res.json(oneSingleProduct);
    })
    .catch((err) => {
      res.json(err);
    });
};

//? DELETE

module.exports.deleteAnExistingProduct = (req, res) => {
  ProductSchema.deleteOne({ _id: req.params.ProductId })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

//? UPDATE

module.exports.updateExistingProduct = (req, res) => {
  console.log(req.body);
  ProductSchema.findOneAndUpdate({ _id: req.params.ProductId }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => {
      res.json({ done: result });
    })
    .catch((err) => {
      res.json(err);
    });
};
