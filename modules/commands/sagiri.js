module.exports.config = {
    name: "sagiri",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Yuuki",
    description: "Sagiri UwU",
    commandCategory: "Hình Ảnh",
    usages: "aysagiri",
    cooldowns: 1,

};

module.exports.run = async ({ api, event }) => {
    var axios = require("axios");
    try {
        var res = await axios("https://randomlinkapi.kirihayuki.repl.co/sagiri");
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