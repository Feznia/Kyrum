const Discord = require("discord.js");
const usedCommand = new Set();

module.exports = {
    name: "nick",
      aliases: ["nickname", "name"],
      category: "Utilities",
      cooldown: "5 seconds",
      description: "Change your nickame",
      usage: "=nick <nickname>",
    run: async (client, message, args) => {
        let name = message.content.split(" ").slice(1).join(" ");
    let User = message.member

    if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send("You don't have permission to change your nickname.");

    if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("I don't have permission to change nicknames.");

    if (!name) {
        return message.channel.send("What would you like your nickname to be?");
    }

    

        if(usedCommand.has(message.author.id)){
            const cooldownEmbed = new Discord.MessageEmbed()
            .setTitle("Woahh Calm Down")
            .setDescription(`Slow down, this command has a cooldown of **10** seconds.`)
            .setColor("PURPLE")
        
            message.channel.send(cooldownEmbed)
    } else {

        User.setNickname(name) //moved

        const nickEmbed = new Discord.MessageEmbed()
            .setTitle("Nickname change!")
            .setDescription(`Nickname changed to ${name}!`)
            .setFooter("If this didn't work it is because you have a higher role than the bot")
            .setColor("BLACK")
        
        message.channel.send(nickEmbed)
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
    }
}