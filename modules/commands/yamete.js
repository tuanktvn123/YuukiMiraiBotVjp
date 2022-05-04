const fs = require("fs");
module.exports.config = {
name: "yamete",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "CHIP2502",
  description: "yamete",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("yamete")==0 || (event.body.indexOf("Yamete")==0)) {
    var msg = {
        body: "Oniii Chan~~",
        attachment: fs.createReadStream(__dirname + `/noprefix/yamate.mp3`)
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}