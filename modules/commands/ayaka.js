module.exports.config = {
    name: "ayaka",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Yuuki",
    description: "Ayaka UwU",
    commandCategory: "Hình Ảnh",
    usages: "ayaka",
    cooldowns: 1,

};

module.exports.run = async ({ api, event }) => {
    var axios = require("axios");
    try {
        var res = await axios("https://randomlinkapi.kirihayuki.repl.co/ayaka");
    }
    catch (err) {
        console.log(err)
    }
    var image = (await Promise.all([
        axios({
            url: res.data.url,
            method: "GET",
            responseType: "stream",
            headers: {
                "Content-Type": "application/json"
            }
        })
    ])).map(x => x.data);
    api.sendMessage({
        body: "UwU!~~",
        attachment: image
    }, event.threadID, event.messageID);
}