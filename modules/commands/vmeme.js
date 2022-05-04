module.exports.config = {
	name: "vmeme",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Lê Anh Trường",
	description: "media",
	commandCategory: "VIDEO",
	usages: "vmeme",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.leanhtruong.net/v2/vdmeme.php?api_key=leanhtruong').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/leanhtruongggg.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/leanhtruongggg.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/leanhtruongggg.${ext}`)).on("close", callback);
			})
}