const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require("discord-image-generation");

module.exports = {
    name: "ad",
      aliases: [],
      category: "Images",
      cooldown: "0 seconds",
      description: "Make yourself into an ad!",
      usage: "=ad || =ad <member>",
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member;

        let img = await new DIG.Ad().getImage(member.user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new MessageAttachment(img, "ad.png");

        message.channel.send(attach);
    }
}