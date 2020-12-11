const db = require("../models");
const City = db.cities;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.c_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a city
  const cities = {
    c_name: req.body.c_name,
    s_id: req.body.s_id,
  };

  // Save city in the database
  City.create(cities)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAllCities = (req, res) => {
  const c_name = req.query.c_name;
  var condition = c_name ? { c_name: { [Op.like]: `%${c_name}%` } } : null;

  City.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
