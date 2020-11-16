const usedCommand = new Set();
const replies = [
    "Maybe.", "Certainly not.", "I hope so.", "Not in your wildest dreams.",
    "There is a good chance.", "Quite likely.", "I think so.",
    "I hope not.", "I hope so.", "Never!", "Fuhgeddaboudit.",
    "Ahaha! Really?!?", "Pfft.", "Sorry, bucko.",
    "Hell, yes.", "Hell to the no.", "The future is bleak.",
    "The future is uncertain.", "I would rather not say.", "Who cares?",
    "Possibly.", "Never, ever, ever.", "There is a small chance.", "Yes!"];


module.exports = {
    name: "8ball",
      aliases: ["8b"],
      category: "Fun",
      cooldown: "8 seconds",
      description: "Wish to know your future? Try this!",
      usage: "=8ball <question>",
    run: async (client, message, args) => {
        if(!args[0]){return message.channel.send("Woahh calm down, what's your question?")}

        let result = replies[Math.floor(Math.random()*(replies.length))]

    if(usedCommand.has(message.author.id)){
        const cooldownEmbed = new Discord.MessageEmbed()
        .setTitle("Woahh Calm Down")
        .setDescription(`Slow down dude, this command has a cooldown of **8** seconds.`)
        .setColor("PURPLE")
    
        message.channel.send(cooldownEmbed)
    } else {
        
        message.channel.send(`🎱 ${result}`);
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 8000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}
}