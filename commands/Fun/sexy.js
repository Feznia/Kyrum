const Discord = require("discord.js");
const usedCommand = new Set();

module.exports = {
    name: "sexy",
      aliases: ["howsexy"],
      category: "Fun",
      cooldown: "10 seconds",
      description: "How sexy are you?",
      usage: "=sexy",
    run: async (client, message, args) => {
        const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 10);
    const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

    const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .addField(`☁ **${message.member.displayName}** is  **:revolving_hearts: ${Math.floor(love)}%** Sexy Today!`,`\n\n${loveLevel}`);

    if(usedCommand.has(message.author.id)){
        const cooldownEmbed = new Discord.MessageEmbed()
        .setTitle("Woahh Calm Down")
        .setDescription(`Slow down dude, this command has a cooldown of **10** seconds.`)
        .setColor("BLACK")
    
        message.channel.send(cooldownEmbed)
    } else {
        
        message.channel.send(embed)
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}}