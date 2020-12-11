module.exports = (sequelize, Sequelize) => {
  const ReportCategory = sequelize.define("reportcategory", {
    rc_id: {
      field: "rc_id",
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rc_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return ReportCategory;
};
