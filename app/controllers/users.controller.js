const db = require('../models');
const bcrypt = require('bcrypt');
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
	// Validate request
	if (!req.body.fname) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	//password encryption
	const hashedPassword = bcrypt.hashSync(req.body.password, 16);
	// Create a User
	const users = {
		fname: req.body.fname,
		lname: req.body.lname,
		email: req.body.email,
		password: hashedPassword,
		dob: req.body.dob,
		role: 'user',
		c_id: req.body.c_id,
		certificates: req.body.certificates,
		status: 'pending',
		mothername: req.body.mothername,
	};

	// Save User in the database
	User.create(users)
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

// Retrieve all Users from the database.
exports.findAllUsers = (req, res) => {
	const fname = req.query.fname;
	var condition = fname ? { fname: { [Op.like]: `%${fname}%` } } : null;

	User.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || 'Some error occurred while retrieving tutorials.',
			});
		});
};
