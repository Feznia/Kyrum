const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "say",
      aliases: ['speak'],
      category: "Fun",
      description: "have the bot speak",
      usage: "=say <message>",
    run: async (client, message, args) => {
        let arg = message.content.split(" ").slice(1);
    message.delete();
    if (message.content.includes("@everyone")  || message.content.includes("@here")) return message.channel.send("You ain't making me ping everyone BOI!");
    message.channel.send(arg.join(" ")).cleanContent;
    }
}