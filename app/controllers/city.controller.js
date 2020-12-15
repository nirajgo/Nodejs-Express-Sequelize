const db = require('../models');
const City = db.cities;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
	// Validate request
	if (!req.body.c_name) {
		res.status(400).send({
			message: 'Content can not be empty!',
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
					err.message || 'Some error occurred while creating the Tutorial.',
			});
		});
};

// Retrieve all cities from the database by state id.
exports.findAllCities = (req, res) => {
	db.sequelize
		.query('select * from cities')
		.then((data) => {
			console.log(data[0]);
			res.send(data[0]);
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving Tutorial with id=' + id,
			});
		});
};
