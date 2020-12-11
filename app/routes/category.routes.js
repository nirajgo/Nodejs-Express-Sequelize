module.exports = (app) => {
  const categories = require("../controllers/category.controller");
  var router = require("express").Router();
  router.get("/", categories.findAllCategories);
  router.post("/", categories.create);
  app.use("/api/categories", router);
};
