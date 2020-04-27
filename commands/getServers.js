module.exports = {
  name: "getServers",
  description: "Gets available servers.",
  execute(message, args) {
    const bot = require("../index.js");

    let servers;
    bot.guilds.cache.tap((coll) => {
      servers = coll;
    });

    message.channel.send(servers);
  },
};
