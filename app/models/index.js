const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.news = require("./news.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.states = require("./state.model")(sequelize, Sequelize);
db.categories = require("./category.model")(sequelize, Sequelize);
db.cities = require("./city.model.js")(sequelize, Sequelize);
db.reportcategories = require("./reportcategory.model")(sequelize, Sequelize);
db.reports = require("./report.model")(sequelize, Sequelize);

module.exports = db;
