module.exports.config = {
  name: "baitap",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Đạt",
  description: "bài tập về nhà .",
  commandCategory: "bài tập về nhà",
  usages: "baitap",
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
   "https://i.ibb.co/Bn5WMmc/1baitap.jpg",
    "https://i.ibb.co/Mfcg7xY/Homework-1024x682-1-1170x568.jpg"
  ];
     const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["anh : làm unit9 , toán: làm đề 7+ bài hình sáng ghi , văn:học thuộc mùa xuân nho nhỏ",
                      " anh : làm unit9 , toán: làm đề 7+ bài hình sáng ghi , văn:học thuộc mùa xuân nho nhỏ"]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
	 var callback = () => api.sendMessage({body:` [ ${random_emoji} ]
`,attachment: fs.createReadStream(__dirname + "/cache/6.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/6.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/6.jpg")).on("close",() => callback());
   };