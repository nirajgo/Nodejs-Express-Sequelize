module.exports = (app) => {
	//const tutorials = require("../controllers/tutorial.controller.js");
	const users = require('../controllers/users.controller.js');
	var router = require('express').Router();

	router.get('/', users.findAllUsers);
	router.get('/mail', users.getEmails);
	router.post('/', users.create);

	app.use('/api/users', router);
};
