const fs = require("fs");
module.exports.config = {
name: "Yeubot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "CHIP2502",
  description: "Yeubot",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("yêu bot")==0 || (event.body.indexOf("Yêu bot")==0)) {
    var msg = {
        body: "Cảm ơn rất nhiều hihi",
        attachment: fs.createReadStream(__dirname + `/noprefix/tks.gif`)
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}