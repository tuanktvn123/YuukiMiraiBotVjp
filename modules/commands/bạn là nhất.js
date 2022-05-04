const fs = require("fs");
module.exports.config = {
name: "bạn là nhất",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "bạn là nhất",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bạn là nhất")==0 || (event.body.indexOf("Bạn là nhất")==0)) {
		var msg = {
				body: "Địt Mẹ Bạn Là Nhất Nhá",
				attachment: fs.createReadStream(__dirname + `/noprefix/ban_la_nhat_nha_meme_ghep_vao_clip_6300576875032362226 (1).mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}