module.exports.config = {
  name: "đài chi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Đạt",
  description: "ảnh đài cúc lai vợ .",
  commandCategory: "ảnh đài cúc lai vợ",
  usages: "đàichi",
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
   "https://i.ibb.co/sv2cSK6/image.png",
        "https://i.ibb.co/998KWY1/image.png",
    "https://i.ibb.co/JHJMN4d/image.png",
    "https://i.ibb.co/qg93rZv/image.png"
  ];
     const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["Bạn có biết bạn đã ăn cơm chó của cặp này từ lớp 7 ?.",
               "Chỉ từ là gì ? :))",
               "Nam nhìn ảnh này mà cay hết cả ...",
               
        " Quá ghê gớm và đây là đài có ny :))."]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
	 var callback = () => api.sendMessage({body:` [ ${random_emoji} ]
`,attachment: fs.createReadStream(__dirname + "/cache/6.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/6.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/6.jpg")).on("close",() => callback());
   };
			