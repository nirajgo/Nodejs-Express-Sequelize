const db = require('../models');
const bcrypt = require('bcrypt');
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.createUser = (req, res) => {
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
		role: 'reporter',
		c_id: req.body.c_id,
		certificates: req.body.certificates,
		status: 'pending',
		mothername: req.body.mothername,
	};

	//file-upload in client-app folder
	const file = req.files.file;
	console.log(file);
	file.mv(
		`D:/D Drive/MajorProject/React_Client/public/DataFiles/${file.name}`,
		(err) => {
			if (err) {
				console.log(err);
			}
		}
	);

	// Save User in the database
	User.create(users)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating account.',
			});
		});
};

// Retrieve all Users from the database.
exports.findAllUsers = (req, res) => {
	User.findAll()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving users.',
			});
		});
};

// const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });
exports.checkIfUserMailExist = (req, res) => {
	const enteredMail = req.body.checkMail;
	console.log(enteredMail);
	db.sequelize
		.query(`select email from users where email="${enteredMail}"`)
		.then((data) => {
			res.send(data[0]);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving emails.",
			});
		});
};
