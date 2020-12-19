module.exports = (app) => {
	const users = require('../controllers/users.controller.js');
	var router = require('express').Router();

	router.get('/', users.findAllUsers);
	router.post("/checkmail", users.checkIfUserMailExist);
	router.post('/', users.createUser);
	app.use('/api/users', router);
};
