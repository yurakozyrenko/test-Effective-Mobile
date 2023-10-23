const UsersService = require('../service/users.service');

class UsersControllers {
    //get all users
    async getAllUsers(req, res) {
        try {
            const users = await UsersService.getAllUsers();
            return res.json(users);
        } catch (err) {
            return res.json(err);
        }
    }

    //create a new user
    async createUser(req, res) {
        try {
            const { firstName, lastName } = req.body;
            const newUser = await UsersService.createUser({
                firstName,
                lastName,
            });
            return res.json(newUser);
        } catch (err) {
            return res.json(err);
        }
    }

    //edit user
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { firstName, lastName } = req.body;
            const editUser = await UsersService.updateUser(
                firstName,
                lastName,
                id
            );
            return res.json(editUser);
        } catch (err) {
            return res.json(err);
        }
    }
}
module.exports = new UsersControllers();
