const Discord = require("discord.js")

module.exports = {
    name: "rps",
      aliases: [],
      category: "Fun",
      cooldown: "",
      description: "Play some rock, paper,scissors with me!",
      usage: "=rps",
    run: async (client, message, args) => {
        const randomChoice = ["🗻", "📄", "✂️"]
    let startEmbed = new Discord.MessageEmbed()
    .setTitle('Rock Paper Scissors (RPS)')
    .setDescription('React with one of the emojis to play.')
    .setTimestamp()
    .setColor('RANDOM')
    let msg = await message.channel.send(startEmbed)
    await msg.react("🗻")
    await msg.react("📄")
    await msg.react("✂️")
    
    let botChoice = randomChoice[Math.floor(Math.random() * randomChoice.length)]
    
    let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
    let reaction = (await msg.awaitReactions(reactionFilter, { max: 1 })).first();
    
    let winning = ''
    let footer = ''
    
    if((reaction.emoji.name === '🗻' && botChoice === '✂️') ||
    (reaction.emoji.name === '📄' && botChoice === '🗻') ||
    (reaction.emoji.name === '✂️' && botChoice === '📄')) {
    winning = 'You won!'
    footer = '🎉 Yay!'
    } else if(reaction.emoji.name === botChoice) {
    winning = 'It\'s a tie!'
    footer = 'Wow.'
    } else {
    winning = 'You lost you noob.'
    footer = '😔 Better luck next time.'
    }
    
    let newEmbed = new Discord.MessageEmbed()
    .setTitle('Rock Paper Scissors (RPS)')
    .setDescription(`${reaction.emoji.name} vs ${botChoice}
    
    ${winning}`)
    .setFooter(footer)
    .setColor('RANDOM')
    
    await msg.edit(newEmbed)
    await msg.reactions.removeAll()
    }
}