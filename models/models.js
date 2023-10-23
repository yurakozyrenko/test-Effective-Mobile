const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
});

const History = sequelize.define('history', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    event: { type : DataTypes.STRING}

});

User.hasOne(History);
History.belongsTo(User);

module.exports = {
    User,
    History,
};
