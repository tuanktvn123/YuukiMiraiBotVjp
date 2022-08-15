module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.ibb.co/CW68Szf/826054.png"
 ];
  var callback = () => api.sendMessage({body:`梁ADMIN BOT梁
  👀 Tên: Lê Đức Thuận
  ❎ Tuổi: 17
  👤 Giới tính: Nam
  🙄 Sinh ngày: 28-03-2005
  💫 Chiều cao / cân nặng: 1m?? / 55kg
  💘 Mối quan hệ: Độc Thân
  😎 Quê quán: Ninh Bình
  🤔 Nơi ở: Ninh Bình
  🌸 Cung: Bạch Dương
  👫 Gu: Lùn cute, tóc dài hoặc ngắn, biết nấu cơm ko biết thì tập, lo lắng quan tâm vậy là đủ :)))
  🌸 Tính cách: Ehe...hmm <3
  📱 Facebook: https://fb.me/kiriha.yukii
📢 Lưu ý cho các qtv và tv trong box: 
- Vui lòng không spam khi sử dụng để tránh die bot
- Không sử dụng lệnh nhiều của lệnh đó
- Đừng chửi bot vì nó được lập trình tự động rời box
- Đừng report bot vì nó cute lắm ><
- Nếu bot ko hoạt động hay bị lỗi hay liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình
=> Yêu mọi người nhiều lắm <3 hãy đồng hành cùng với bot và mình nhé <3
------------
✔Donate:
💳MB: 0898724512 :)
💳VIB: Đã bẻ thẻ :)
📲MoMo: 0898724512 :)

----•Lý Hải•----`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
