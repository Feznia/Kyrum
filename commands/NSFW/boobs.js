const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
    name: "boobs",
      aliases: ['bewbs', 'tits', 'breasts'],
      category: "NSFW",
      description: "get a nsfw image of some breasts",
      usage: "=butt",
    run: async (client, message) => {
        const user = message.member.user

  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hboobs'})
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
