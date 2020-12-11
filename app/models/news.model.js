module.exports = (sequelize, Sequelize) => {
  const News = sequelize.define("news", {
    n_id: {
      field: "n_id",
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    c_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "c_id",
      references: {
        model: "cities",
        key: "c_id",
      },
    },

    u_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "u_id",
      references: {
        model: "users",
        key: "u_id",
      },
    },

    cat_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "cat_id",
      references: {
        model: "categories",
        key: "cat_id",
      },
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    extract: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    read: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return News;
};
