const { User, History } = require('../models/models');

class UsersService {
    async createUser({ firstName, lastName }) {
        const newUser = await User.create({ firstName, lastName });
        await History.create({
            userId: newUser.id,
            event: `Создали пользователя`,
        });
        return newUser;
    }

    async getAllUsers() {
        const users = await User.findAll();
        return users;
    }

    async updateUser(firstName, lastName, id) {
        const editUser = await User.update(
            { firstName, lastName },
            { where: { id: id } }
        );

        await History.create({ userId: id, event: `Обновили пользователя` });

        return editUser;
    }
}
module.exports = new UsersService();
