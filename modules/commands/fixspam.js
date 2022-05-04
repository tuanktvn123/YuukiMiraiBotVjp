module.exports.config = {
	name: "fixspam",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ManhG",
	description: "Người chửi bot sẽ tự động bị ban khỏi hệ thống <3",
	commandCategory: "noprefix",
	usages: "",
	cooldowns: 0,
	denpendencies: {}
}, module.exports.handleEvent = async ({
	event: o,
	api: n,
	Users: t
}) => {
	var {
		threadID: e,
		messageID: a,
		body: b,
		senderID: s,
		reason: i
	} = o;
	const d = require("moment-timezone").tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
	if (s == n.getCurrentUserID()) return;
	let c = await t.getNameUser(o.senderID);
	var h = {
		body: `»Thông báo từ Admin«\n\n${c}, Bạn thật ngu ngok khi chửi bot vì vậy bot đã tự động ban bạn khỏi hệ thống\n\n💌Liên hệ Admin:\nhttps://facebook.com/CHIP2502 \nđể được gỡ ban bạn nhé \n\n🎭Thả tym cho bạn nè <3`
	};
	["botngu", "bot ngu", "bot gà", "con bot lol", "bot ngu lol", "bot chó", "dm bot", "đm bot", "dmm bot", "dmm bot", "đmm bot", "đb bot", "bot điên", "bot dở", "bot khùng", "đĩ bot", "bot paylac rồi", "con bot lòn", "cmm bot", "clap bot", "bot ncc", "bot oc", "bot óc", "bot óc chó", "cc bot", "bot tiki", "lozz bottt", "lol bot", "loz bot", "lồn bot", "bot lồn", "bot lon", "bot cac", "bot nhu lon", "bot như cc", "bot như bìu", "bot sida", "bot fake", "bot óc l", "bot shoppee", "bot đểu", "bot dỡm"].forEach((a => {
		let s = a[0].toUpperCase() + a.slice(1);
		if (b === a.toUpperCase() | b === a | s === b) {
			const b = o.senderID;
			modules = "chui bot:", console.log(c, modules, a);
			const s = t.getData(b).data || {};
			t.setData(b, {
				data: s
			}), s.banned = 1, s.reason = a || null, s.dateAdded = d, global.data.userBanned.set(b, {
				reason: s.reason,
				dateAdded: s.dateAdded
			}), n.sendMessage(h, e, (() => {
				var o = global.config.ADMINBOT;
				for (var t of o) n.sendMessage(`=== Bot Notification ===\n\n🆘Tội nhân: ${c}\n🔰Uid: ${b}\n😥Chửi bot: ${a}\n\nĐã bị ban khỏi hệ thống hjhj`, t)
			}))
		}
	}))
}, module.exports.run = async ({
	event: o,
	api: n
}) => n.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            Đưa não cho bạn lắp vào đầu nè.\nCó biết là lệnh Noprefix hay không?", o.threadID);