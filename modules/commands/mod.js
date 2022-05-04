  ﻿﻿module.exports.config = {
	name: "mod",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Văn Huy",
	description: "Thông tin về admin",
	commandCategory: "Thông tin về admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`Mấy con đĩ trong đây ngu như một con lợn🐷. t có cak tiền tổ chứ cho chúng m:)) tạp cho vui thôi đứng đấy mà ảo tưởng`, event.threadID, event.messageID);