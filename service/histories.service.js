const { History } = require('../models/models');

class HistoriesService {
    async getAllHistory({ userId, limit, offset }) {
        let histories;
        if (!userId) {
            histories = await History.findAndCountAll({ limit, offset });
        }
        if (userId) {
            histories = await History.findAndCountAll({
                where: { userId },
                limit,
                offset,
            });

            return histories;
        }
    }

    async getHistoryById({ id }) {
        const history = await History.findAll({ where: { id } });
        return history;
    }
}
module.exports = new HistoriesService();
