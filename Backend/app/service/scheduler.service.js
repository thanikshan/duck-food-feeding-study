const cron = require('node-cron');
scheduleFeed = (minute, hours, callback, data) => {
    cron.schedule(`0 ${minute} ${hours} * * *`, async() => {
        await callback(data);
    });
};

module.exports = { scheduleFeed }