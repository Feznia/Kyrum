const Discord = require('discord.js');
const usedCommand = new Set();

module.exports = {
    name: "clear",
      aliases: ["c", "p", "purge"],
      category: "Utilities",
      cooldown: "5 seconds",
      description: "Delete up to **99** messages at once!",
      usage: "=clear <amount>",
    run: async (client, message, args) => {
        const messageArray = message.content.split(' ');
	const dlt = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to clear messages, you are missing the `MANAGE_MESSAGES` permission.");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I don't have permission to clear messages, I am missing the `MANAGE_MESSAGES` permission.");
    
    let deleteAmount;

    if (isNaN(dlt[0]) || parseInt(dlt[0]) <= 0) { return message.reply('Please put a number!') }

    if (parseInt(dlt[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(dlt[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);

    if(usedCommand.has(message.author.id)){
        const cooldownEmbed = new Discord.MessageEmbed()
    .setTitle("Woahh Calm Down")
    .setDescription(`Slow down dude, this command has a cooldown of **5** seconds.`)
    .setColor("PURPLE")

    message.channel.send(cooldownEmbed)
    } else {
        
        await message.channel.send(`Deleted **${deleteAmount}** Messages.`).then(m => m.delete({timeout: 2500}))
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}
}