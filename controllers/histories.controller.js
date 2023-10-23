const HistoriesService = require('../service/histories.service');

class HistoriesControllers {
    //get all history users
    async getAllHistory(req, res) {
        try {
            let { userId, limit, page } = req.query;
            page = page || 1;
            limit = limit || 6;
            let offset = page * limit - limit;

            const histories = await HistoriesService.getAllHistory({
                userId,
                limit,
                offset,
            });

            return res.json(histories);
        } catch (err) {
            return res.json(err);
        }
    }

    //get history user
    async getOneHistory(req, res) {
        try {
            const { id } = req.params;
            const users = await HistoriesService.getHistoryById({ id });
            return res.json(users);
        } catch (err) {
            return res.json(err);
        }
    }
}
module.exports = new HistoriesControllers();
