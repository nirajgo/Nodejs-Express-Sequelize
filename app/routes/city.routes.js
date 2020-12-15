module.exports = (app) => {
	const cities = require('../controllers/city.controller');
	var router = require('express').Router();
	router.get('/', cities.findAllCities);
	router.post('/', cities.create);
	app.use('/api/cities', router);
};
