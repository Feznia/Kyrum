const Discord = require('discord.js')
const usedCommand = new Set();

module.exports = {
    name: "avatar",
      aliases: [],
      category: "Utilities",
      cooldown: "12 seconds",
      description: "Delete up to **99** messages at once!",
      usage: "=avatar || =avatar <member>",
    run: async (client, message, args) => {
        let User = message.mentions.users.first() || message.author;

    if (!User) {
        message.channel.send("Please mention a user!")
    }

    const embed = new Discord.MessageEmbed()
    .setTitle(`Avatar`)
    .setColor('GREEN')
    .setDescription(`Avatar of ${message.mentions.users.first() || message.author}`)
    .setImage(User.displayAvatarURL({ dynamic: true, format: 'png' }))

    if(usedCommand.has(message.author.id)){
        const cooldownEmbed = new Discord.MessageEmbed()
    .setTitle("Woahh Calm Down")
    .setDescription(`Slow down dude, this command has a cooldown of **12** seconds.`)
    .setColor("PURPLE")

    message.channel.send(cooldownEmbed)
    } else {
        
        message.channel.send(embed)
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 12000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}}