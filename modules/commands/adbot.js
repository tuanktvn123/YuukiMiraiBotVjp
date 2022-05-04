const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho fix by VĐT&NTH",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info Admin",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,client,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁Admin Bot梁

👀 Tên: Nguyễn Văn An ( CHIP )
❎ Tuổi: 15 🐒
👤 Giới tính: Nam
💫 Chiều cao cân nặng: 1m73 54kg
💘 Mối quan hệ: Độc thân\n🌎 Quê quán: Hà Nội\n👫 Gu: Biết nấu cơm\n🌸 Tính cách: Chả biết nữa =))\n🌀 Sở thích: Chơi game, xem phim anime blabla, ăn, ngủ\n💻Contact💻\n☎ SĐT&Zalo:0867131932\n🌐 Facebook: https://www.facebook.com/CHIP2502 || bio.link.CHIP2502\n✉️ Email: l3lchipp@gmail.com`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100013536901651}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
        fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };