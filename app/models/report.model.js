module.exports = (sequelize, Sequelize) => {
  const Report = sequelize.define("report", {
    r_id: {
      field: "r_id",
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    n_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "n_id",
      references: {
        model: "news",
        key: "n_id",
      },
    },
    rc_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "rc_id",
      references: {
        model: "reportcategories",
        key: "rc_id",
      },
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Report;
};
