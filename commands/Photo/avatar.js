const Discord = require('discord.js')
const usedCommand = new Set();

module.exports = {
    name: "avatar",
      aliases: ['av'],
      category: "Utilities",
      cooldown: "12 seconds",
      description: "Delete up to **99** messages at once!",
      usage: "=avatar || =avatar <member>",
    run: async (client, message, args) => {
        let User = message.mentions.users.first() || message.author;

    const embed = new Discord.MessageEmbed()
    .setTitle(`Avatar`)
    .setColor('BLACK')
    .setDescription(`Avatar of ${message.mentions.users.first() || message.author}`)
    .setImage(User.displayAvatarURL({ dynamic: true, format: 'png' }))

        message.channel.send(embed)
    }
}