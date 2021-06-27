const Discord = require('discord.js');
const usedCommand = new Set();

module.exports = {
    name: "roll",
      aliases: ["dice", "rd", "rolldice", "diceroll"],
      category: "Fun",
      cooldown: "10 seconds",
      description: "Roll some dice!",
      usage: "=roll <maximum number>",
    run: async (client, message, args) => {
        const randomRoll = Math.floor(Math.random() * args[0]) + 1;
        if(!args[0]) return message.reply("Please give me a maximum number.");
            const generateEmbed = new Discord.MessageEmbed()
            .setDescription('Rolling A Dice...')
            let diceEmbed = new Discord.MessageEmbed()
            .setAuthor('Rolled A Dice')
            .setDescription(`\`\`\`${randomRoll}\`\`\``)
            .setColor(`BLACK`)
        
            if(usedCommand.has(message.author.id)){
                const cooldownEmbed = new Discord.MessageEmbed()
    .setTitle("Woahh Calm Down")
    .setDescription(`Slow down dude, this command has a cooldown of **10** seconds.`)
    .setColor("BLACK")

    message.channel.send(cooldownEmbed)
            } else {
                
                message.channel.send(generateEmbed).then((sentMessage) => sentMessage.edit(diceEmbed))
                
                usedCommand.add(message.author.id);
                setTimeout(() => {
                    usedCommand.delete(message.author.id);
                }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
            }
        }
    }