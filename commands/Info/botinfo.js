const Discord = require("discord.js");
const usedCommand = new Set();
const ms = require("ms")

module.exports = {
    name: "botinfo",
      aliases: ["bi"],
      category: "Info",
      cooldown: "10 seconds",
      description: "Get my info!",
      usage: "=botinfo",
    run: async (client, message, args) => {
        const clientEmbed = new Discord.MessageEmbed()
        .setTitle("Kyrum Information")
        .addField("__Server Count__", `${client.guilds.cache.size} servers!`, true)
        .addField("__User Count__", `${client.users.cache.size} users!`, true)
        .addField("__Channel Count__", `${client.channels.cache.size} channels!`, true)
        .addField("__Commands__", `${client.commands.size} commands!`, true)
        .addField("__Uptime__", `${ms(client.uptime)}!`, true)
        .addField("__Ping__", `${client.ws.ping}ms!`, true)
        .setFooter(`Requested by ${message.member.user.tag}`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setColor("BLACK")
        .setTimestamp()
        
        if(usedCommand.has(message.author.id)){
            const cooldownEmbed = new Discord.MessageEmbed()
    .setTitle("Woahh Calm Down")
    .setDescription(`Slow down dude, this command has a cooldown of **10** seconds.`)
    .setColor("BLACK")

    message.channel.send(cooldownEmbed)
        } else {
            
            await message.channel.send(clientEmbed)
            
            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
        }
    }
    }