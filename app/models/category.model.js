module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    cat_id: {
      field: "cat_id",
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cat_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Category;
};
