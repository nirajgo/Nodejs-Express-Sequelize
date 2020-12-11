const db = require("../models");
const News = db.news;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const news = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    extract: req.body.extract,
  };

  // Save Tutorial in the database
  News.create(news)
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
exports.findAllNews = (req, res) => {
  const title = req.query.title;
  var condition = title ? { fname: { [Op.like]: `%${title}%` } } : null;

  News.findAll({ where: condition })
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
