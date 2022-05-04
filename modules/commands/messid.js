module.exports.config = {
	name: "messid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DuyVuong",
	description: "Lay id tin nhan",
	commandCategory: "system",
	cooldowns: 0
}

module.exports.run = function ({ event, api, args }) {
if (event.type != "message_reply") return api.sendMessage(`Vui long reply tin nhan can lay id`, event.threadID,event.messageID);
return api.sendMessage(event.messageReply.messageID, event.threadID, event.messageID);
}