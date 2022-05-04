const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "beo",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Ảnh của Beo thỏ",
  commandCategory: "Random-img",
  usages: "beo",
  cooldowns: 1,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://i.imgur.com/5KaL9FU.png",
"https://i.imgur.com/Oueo7c2.png",
"https://i.imgur.com/ILbhMDY.png",
"https://i.imgur.com/3Ob9RH0.png",
"https://i.imgur.com/1YZKF6L.png",
"https://i.imgur.com/IHTReFE.png",
"https://i.imgur.com/6ahwrNn.png",
"https://i.imgur.com/G42SdJM.jpg",
"https://i.imgur.com/FFulaQ7.jpg",
"https://i.imgur.com/IpvJTs7.jpg",
"https://i.imgur.com/me9jw2S.jpg",
"https://i.imgur.com/cSb8Wcg.jpg",
"https://i.imgur.com/Dkp8r2j.jpg",
"https://i.imgur.com/aRYs96r.jpg",
"https://i.imgur.com/LV4HTwd.jpg",
"https://i.imgur.com/LV4HTwd.jpg",
"https://i.imgur.com/7rnaiel.jpg",
"https://i.imgur.com/kBV2fud.jpg",
"https://i.imgur.com/UR9jmuP.jpg",
"https://i.imgur.com/S1RqhZB.jpg",
"https://i.imgur.com/AqhY0QB.jpg",
"https://i.imgur.com/c6xpoHt.jpg",
"https://i.imgur.com/KB5Cnm2.png",
"https://i.imgur.com/oOZG6DD.png",
"https://i.imgur.com/fLRhI5E.png",
"https://i.imgur.com/78HTvnY.png",
"https://i.imgur.com/HfqJJbC.png",
"https://i.imgur.com/baG3SPm.png",
"https://i.imgur.com/R9X3PIS.png",
"https://i.imgur.com/DYxnF6I.png",
"https://i.imgur.com/WDglluE.png",
"https://i.imgur.com/baG3SPm.png",
"https://i.imgur.com/VYijwd2.png",
"https://i.imgur.com/kaENJDd.png",
"https://i.imgur.com/AVvkuJs.png",
"https://i.imgur.com/ab3XERJ.png",
"https://i.imgur.com/Oueo7c2.png",
"https://i.imgur.com/JSFkxkC.png",
"https://i.imgur.com/fKSkI7U.png",
"https://i.imgur.com/gC558xx.png",
"https://i.imgur.com/XokBi3l.png",
"https://i.imgur.com/cw86IYu.png",
"https://i.imgur.com/4OcX5g3.png",
"https://i.imgur.com/X2LzqrU.png",
"https://i.imgur.com/5HAK03M.png",
"https://i.imgur.com/dsbjS33.png",
"https://i.imgur.com/ycnpCco.png",
"https://i.imgur.com/mjXSSX4.png",
"https://i.imgur.com/3oPlke1.png",
"https://i.imgur.com/YYB1Ubj.png",
"https://i.imgur.com/uqWT2cG.png",
"https://i.imgur.com/AADSinB.png",
"https://i.imgur.com/6mxM5yH.png",
"https://i.imgur.com/H3MSclb.png",
"https://i.imgur.com/4xvhlOc.png",
"https://i.imgur.com/yVMOp4L.png",
"https://i.imgur.com/7Avjbtg.png",
"https://i.imgur.com/kNpZvTk.png",
"https://i.imgur.com/NYvxNbk.png",
"https://i.imgur.com/h4WlIBD.png",
"https://i.imgur.com/CcakABl.png",
"https://i.imgur.com/OPKvDgR.png",
"https://i.imgur.com/HdgliwU.png",
];
const moneyUser = (await Currencies.getData(event.senderID)).money;
var moneyBet = 50;
if (moneyBet > moneyUser) {
return api.sendMessage(`Bạn cần 50 đô để xem ảnh ?`,event.threadID, event.messageID);
}
   var callback = () => api.sendMessage({body:`Ảnh Bé Beo Cute nè\n✅Đã trừ 50 đô trên tài khoản của bạn!\nSố Ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
return await Currencies.decreaseMoney(event.senderID, moneyBet);
  };