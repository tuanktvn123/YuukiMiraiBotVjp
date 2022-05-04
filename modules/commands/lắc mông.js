const fs = require("fs");
module.exports.config = {
name: "lắc mông",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "lắc mông",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lắc mông")==0 || (event.body.indexOf("Lắc mông")==0)) {
		var msg = {
				body: "LẮC MÔNG NÈ :333",
				attachment: fs.createReadStream(__dirname + `/noprefix/video-1625557698.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}