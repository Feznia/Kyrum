const Discord = require('discord.js');
const usedCommand = new Set();

module.exports = {
    name: "uncover",
      aliases: [],
      category: "Images",
      cooldown: "0 seconds",
      description: "Insert yourself or someone else in the rick and morty wall meme!",
      usage: "=uncover || =uncover <member>",
    run: async (client, message, args) => {
let user = message.mentions.users.first() || message.author;
let av = user.displayAvatarURL({ dynamic: false, format: 'png' })
let img = `https://api.popcatdev.repl.co/uncover?image=${av}`;
let em = new Discord.MessageEmbed()
.setTitle(user.tag  + " Was Just Uncovered!")
.setImage(img)
.setColor("BLACK")
.setFooter(`Requested by ${message.member.user.tag}`)
message.channel.send(em)
}
}