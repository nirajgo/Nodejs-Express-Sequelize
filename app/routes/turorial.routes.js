module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const users = require("../controllers/users.controller.js");
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // router.get("/", users.findAllUsers);
  // router.post("/", users.createUser);
  app.use("/api/tutorials", router);
  // app.use("/api/users", router);
};
