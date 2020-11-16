const Discord = require('discord.js');
const usedCommand = new Set();

module.exports = {
    name: "roll",
      aliases: ["dice", "rd", "rolldice", "diceroll"],
      category: "Fun",
      cooldown: "10 seconds",
      description: "Roll some dice!",
      usage: "=roll",
    run: async (client, message, args) => {
        let responses=[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            ]
            let response = responses[Math.floor(Math.random()*(responses.length))]
            const generateEmbed = new Discord.MessageEmbed()
            .setDescription('Rolling A Dice...')
            let diceEmbed = new Discord.MessageEmbed()
            .setAuthor('Rolled A Dice')
            .setDescription(`\`\`\`${response}\`\`\``)
            .setColor(`PURPLE`)
        
            if(usedCommand.has(message.author.id)){
                const cooldownEmbed = new Discord.MessageEmbed()
    .setTitle("Woahh Calm Down")
    .setDescription(`Slow down dude, this command has a cooldown of **10** seconds.`)
    .setColor("PURPLE")

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