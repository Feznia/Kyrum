const usedCommand = new Set();
const Discord = require("discord.js");

module.exports = {
    name: "ping",
      aliases: ["latency"],
      category: "info",
      cooldown: "10 seconds",
      description: "Returns latency and API ping",
      usage: "=ping",
    run: async (client, message, args) => {

if(usedCommand.has(message.author.id)){
    const cooldownEmbed = new Discord.MessageEmbed()
    .setTitle("Woahh Calm Down")
    .setDescription(`Slow down dude, this command has a cooldown of **10** seconds.`)
    .setColor("PURPLE")

    message.channel.send(cooldownEmbed)
} else {
    
    message.channel.send(`Pong - ${client.ws.ping}ms`);
    
    usedCommand.add(message.author.id);
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
}
}
}