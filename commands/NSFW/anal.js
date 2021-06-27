const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
    name: "anal",
      aliases: [],
      category: "NSFW",
      description: "get a nsfw image of anal",
      usage: "=anal",
    run: async (client, message) => {
        const user = message.member.user

  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai_anal'})
    .end((err, response, body) => {
      let emb = new discord.MessageEmbed()
                    .setImage(response.body.message)
                    .setColor("PURPLE")
                    .setFooter(`Requested by: ${message.author.username}`, user.displayAvatarURL())
                    .setTimestamp()
                              
                   message.channel.send(emb)  
    });
  } else {
    msg.channel.send("This isn't NSFW channel!")
  }
}
}
