const { MessageEmbed } = require('discord.js')
const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
    name: "advice",
      aliases: [],
      category: "Fun",
      description: "get some advice",
      usage: "=advice",
    run: async (client, message, args) => {
        let data = await random.getAdvice()
            message.channel.send(data)
    }
}