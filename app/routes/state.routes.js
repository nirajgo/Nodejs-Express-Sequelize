module.exports = (app) => {
  const states = require("../controllers/state.controller");
  var router = require("express").Router();
  router.get("/", states.findAllStates);
  router.post("/", states.create);
  app.use("/api/states", router);
};
