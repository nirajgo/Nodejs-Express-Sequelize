const db = require('../models');
const State = db.states;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
	// Validate request
	if (!req.body.s_name) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	// Create a States
	const states = {
		s_name: req.body.s_name,
	};

	// Save Tutorial in the database
	State.create(states)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the State.',
			});
		});
};

exports.findAllStates = (req, res) => {
	db.sequelize
		.query('select * from states')
		.then((data) => {
			console.log(data[0]);
			res.send(data[0]);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving states.',
			});
		});
};
