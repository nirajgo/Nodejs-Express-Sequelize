module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define(
		'user',
		{
			u_id: {
				field: 'u_id',
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},

			fname: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			lname: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},

			dob: {
				type: Sequelize.DATEONLY,
				allowNull: false,
			},
			role: {
				type: Sequelize.STRING,
				allowNull: false,
			},

			c_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				field: 'c_id',
				references: {
					model: 'cities',
					key: 'c_id',
				},
			},

			certificates: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mothername: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);

	return User;
};
