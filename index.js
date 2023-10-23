const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const sequelize = require('./config/db');
app.use(express.json());
app.use('/api', require('./routes/index'));

const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('Соединение с БД было успешно установлено');
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
    } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e);
    }
};

start();
