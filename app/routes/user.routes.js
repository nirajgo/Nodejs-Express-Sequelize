module.exports = (app) => {
	//const tutorials = require("../controllers/tutorial.controller.js");
	const users = require('../controllers/users.controller.js');
	var router = require('express').Router();

	router.get('/', users.findAllUsers);
	router.get('/mails', users.checkIfUserMailExist);
	router.post('/', users.createUser);
	app.use('/api/users', router);
};
