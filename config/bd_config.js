const Sequelize = require("sequelize");

const sequelize = new Sequelize("realsoftware_db", "root", "Admin@#1923", {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports=sequelize;