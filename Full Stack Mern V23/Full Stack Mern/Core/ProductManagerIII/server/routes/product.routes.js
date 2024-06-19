const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/product", ProductController.FindAllProduct);
  app.get("/api/product/:productId", ProductController.FindOneSingleProduct);
  app.patch("/api/product/:ProductId", ProductController.updateExistingProduct);
  app.post("/api/product", ProductController.CreateNewProduct);
  app.delete(
    "/api/product/:ProductId",
    ProductController.deleteAnExistingProduct
  );
};
