module.exports = (sequelize, Sequelize) => {
	const State = sequelize.define(
		'state',
		{
			s_id: {
				field: 's_id',
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			s_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);

	return State;
};
