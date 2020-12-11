module.exports = (sequelize, Sequelize) => {
	const City = sequelize.define(
		'city',
		{
			c_id: {
				field: 'c_id',
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			c_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			s_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				field: 's_id',
				references: {
					model: 'states',
					key: 's_id',
				},
			},
		},
		{ timestamps: false }
	);

	return City;
};
