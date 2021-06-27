const { MessageEmbed } = require('discord.js')
const axios = require("axios")

module.exports = {
    name: "neko",
      aliases: [],
      category: "NSFW",
      description: "get a nsfw image of a neko",
      usage: "=neko",
    run: async (client, message) => {

      if (!message.channel.nsfw) return(message.channel.send(":underage: Please use in an 18+ channel :underage:"))
      const user = message.member.user

        axios
        .get('https://waifu.pics/api/nsfw/neko')
            .then((res) => {
              const embed = new MessageEmbed()
                .setImage(res.data.url)
                .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                .setTimestamp()
                .setColor("PURPLE")
              message.channel.send(embed);
    })
}
}