module.exports = (app) => {
  const news = require("../controllers/news.controller");
  var router = require("express").Router();

  router.get("/", news.findAllNews);
  router.post("/", news.create);

  app.use("/api/news", router);
};
