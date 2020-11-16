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

    User.setNickname(name)

        if(usedCommand.has(message.author.id)){
            const cooldownEmbed = new Discord.MessageEmbed()
            .setTitle("Woahh Calm Down")
            .setDescription(`Slow down, this command has a cooldown of **10** seconds.`)
            .setColor("PURPLE")
        
            message.channel.send(cooldownEmbed)
    } else {
        
        message.channel.send("Username changed Successfully!")
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
    message.delete()
    }
}