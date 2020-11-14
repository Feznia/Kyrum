const Discord = require("discord.js");
const usedCommand = new Set();

module.exports = {
    name: "help",
      aliases: [],
      category: "fun",
      cooldown: "5 seconds",
      description: "Need some help? This is the perfect command for you!",
      usage: "=help || =help <command>",
    run: async (client, message, args) => {    

    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if(!helpArgs[0]) {
        var embed0 = new Discord.MessageEmbed()
            .setAuthor(`Here are the Avaible Commands to use:`)
            .setDescription('```8ball || angry || avatar || bins || coinflip || DM || Docs || hack || howgay || howsmart || lenny || meme || poll || pp || roll || roll || rps || say || servercount || sexy || simprate || snipe || stats ||  strong || weather```')
            .addFields({ name: 'Prefix', value: '```!>```', inline: true})
            .setColor('BLUE')
            
            if(usedCommand.has(message.author.id)){
                message.channel.send('You cannot use the command beacuse of the cooldown.')
            } else {
                
                message.channel.send(embed0)
                
                usedCommand.add(message.author.id);
                setTimeout(() => {
                    usedCommand.delete(message.author.id);
                }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
            }
    }

    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(client.commands.has(command)) {
            
            command = client.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.name} Command`)
            .setDescription(`
            - **Command's Description:** ${command.description || "There is no Description for this command."}
            - **Command's Usage:** ${command.usage || "No Usage"}
            - **Command's Cooldown:** ${command.cooldown || "No Cooldown"}
            - **Command's Permissions:** ${command.accessableby || "Members"}
            - **Command's Aliases:** ${command.aliases || "No Aliases"}
            `)
            .setColor('BLUE')

            if(usedCommand.has(message.author.id)){
                message.channel.send('You cannot use the command beacuse of the cooldown.')
            } else {
                
                message.channel.send(embed)
                
                usedCommand.add(message.author.id);
                setTimeout(() => {
                    usedCommand.delete(message.author.id);
                }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
            }
    }
}
}
}