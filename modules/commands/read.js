module.exports.config = {
    name: "read",
    version: "1.0.0", 
    hasPermssion: 0,
    credits: "Yuuki",
    description: "",
    commandCategory: "", 
    usages: "read + code + page", 
    cooldowns: 0,
    dependencies: [] 
};

module.exports.run =  async function({ api, event, args, getText }) => { 
    const nhentai = require('nhentai-api');
    var ncode = args.join(" ");
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const api = new API();
    api.getBook(args[0]).then(book) => {
        api.getImageURL(book.cover);
        api.getImageURL(book.pages[args[1]]);
    };
    let callback = function() { api.sendMessage({ body: args[1], attachment: fs.createReadStream(__dirname + `/cache/${args[1]}.${ext}`) }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${args[1]}.${ext}`), event.messageID); }; request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/${args[1]}.${ext}`)).on("close", callback); };